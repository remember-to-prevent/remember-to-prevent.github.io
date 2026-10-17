/**
 * Antimeridian repair for the world base map (Task 03).
 *
 * Root cause of the "horizontal lines crossing the map" defect: the
 * world-atlas (Natural Earth) geometry encodes several states — Russia
 * (Chukotka), Fiji, and Antarctica — as polygon rings whose consecutive
 * vertices jump across the ±180° meridian (e.g. 178.6°E → −180°, or
 * vertices sitting exactly on 180° followed by territory beyond it). A
 * canvas fill of such a ring draws the jump as a full-width horizontal
 * streak at that latitude, and the geometry is effectively "torn".
 *
 * Fix — cut every ring at the antimeridian planes (lon = ±180 + 360°n),
 * the same clip d3-geo performs for equirectangular maps:
 *  1. Unwrap each ring to continuous longitudes (±360 as needed) so
 *     consecutive vertices differ by at most 180°.
 *  2. Walk the ring cyclically; whenever a segment reaches across a plane,
 *     interpolate the crossing point, close the current piece there, and
 *     continue the next piece from the same (unwrapped) point.
 *  3. Translate each piece back into the canonical [−180, 180] band — the
 *     translation picks the correct ±180 edge representation, so Chukotka
 *     lands on the far-west edge and the Russian mainland on the far-east
 *     edge, the standard equirectangular rendering.
 *  4. Drop degenerate slivers (pieces with < 3 points, near-zero area, or
 *     lying entirely on the meridian itself).
 */

type Ring = number[][];

interface GeoFeature {
  type: "Feature";
  id?: string | number;
  properties: { name?: string } | null;
  geometry: { type: "Polygon" | "MultiPolygon"; coordinates: number[][][] | number[][][][] };
}

interface GeoCollection {
  type: "FeatureCollection";
  features: GeoFeature[];
}

/** Signed area of a ring (shoelace formula) — used to drop slivers. */
function ringArea(ring: Ring): number {
  let sum = 0;
  for (let i = 0, n = ring.length; i < n; i++) {
    const [x1, y1] = ring[i];
    const [x2, y2] = ring[(i + 1) % n];
    sum += x1 * y2 - x2 * y1;
  }
  return sum / 2;
}

/** Wrap a longitude into [−180, 180]. */
function wrap(lon: number): number {
  let l = lon;
  while (l > 180) l -= 360;
  while (l < -180) l += 360;
  return l;
}

/** Unwrap a ring so consecutive longitudes differ by at most 180°. */
function unwrapRing(ring: Ring): Ring {
  const out: Ring = [];
  let prev: number | null = null;
  for (const point of ring) {
    let lon = point[0];
    if (prev !== null) {
      while (lon - prev > 180) lon -= 360;
      while (lon - prev < -180) lon += 360;
    } else {
      while (lon > 180) lon -= 360;
      while (lon < -180) lon += 360;
    }
    prev = lon;
    out.push([lon, point[1]]);
  }
  return out;
}

const EPS = 1e-9;

/** Does this RAW ring contain an antimeridian jump that needs cutting?
 * (Consecutive vertices more than 180° of longitude apart — the exact
 * signature of the torn-geometry defect.) */
function needsCut(ring: Ring): boolean {
  for (let i = 1, n = ring.length; i < n; i++) {
    if (Math.abs(ring[i][0] - ring[i - 1][0]) > 180) return true;
  }
  // Also check the implicit closing edge.
  if (ring.length > 2 && Math.abs(ring[0][0] - ring[ring.length - 1][0]) === 0) {
    // explicitly closed ring — closing edge already zero-length
  }
  return false;
}

/**
 * Split one ring at every antimeridian plane it crosses. When the raw ring
 * has no antimeridian jump, the ORIGINAL ring is returned untouched.
 * Otherwise pieces are returned in canonical [−180, 180] coordinates.
 */
function splitRing(original: Ring): Ring[] {
  if (!needsCut(original)) return [original];
  const unwrapped = unwrapRing(original);

  const pieces: Ring[] = [];
  let current: Ring = [[unwrapped[0][0], unwrapped[0][1]]];

  const n = unwrapped.length;
  for (let i = 0; i < n; i++) {
    const a = unwrapped[i];
    const b = unwrapped[(i + 1) % n];
    const la = a[0];
    const lb = b[0];

    if (la === lb) continue; // closing pair / zero-length edge

    const lo = Math.min(la, lb);
    const hi = Math.max(la, lb);
    // Planes crossed by this segment, ordered along the travel direction.
    // Inclusive of the departure vertex's own plane (a vertex on a plane
    // belongs to the side it was approached from; the cut happens when the
    // walk leaves it). Exclusive at the arrival end (the next segment cuts
    // if the walk continues beyond).
    const planes: number[] = [];
    for (let k = Math.ceil((lo - 180) / 360) * 360 + 180; k < hi + EPS; k += 360) {
      if (k < lo - EPS || k > hi + EPS) continue;
      if (k > lo - EPS && k < hi - EPS) {
        planes.push(k); // strictly inside
      } else if (Math.abs(k - la) < EPS && Math.abs(k - lb) > EPS) {
        planes.push(k); // departure from a plane vertex
      }
    }
    planes.sort((p, q) => (lb > la ? p - q : q - p));

    for (const plane of planes) {
      const t = (plane - la) / (lb - la);
      const lat = a[1] + t * (b[1] - a[1]);
      const last = current[current.length - 1];
      if (!last || Math.abs(last[0] - plane) > EPS || Math.abs(last[1] - lat) > EPS) {
        current.push([plane, lat]);
      }
      pieces.push(current);
      // Continue from the same physical point — in unwrapped space the
      // plane coordinate itself. The per-piece translation at the end puts
      // this piece into its own canonical band (west or east edge).
      current = [[plane, lat]];
    }
    current.push([lb, b[1]]);
  }
  pieces.push(current);

  // Translate each piece into the canonical band and drop degenerates.
  const MIN_AREA = 1e-4;
  const result: Ring[] = [];
  for (const piece of pieces) {
    if (piece.length < 3) continue;
    let sum = 0;
    for (const p of piece) sum += p[0];
    const mean = sum / piece.length;
    const shift = -Math.round(mean / 360) * 360;
    const wrapped = piece.map((p) => [p[0] + shift, p[1]]);
    // Explicitly close the ring (GeoJSON convention).
    const first = wrapped[0];
    const last = wrapped[wrapped.length - 1];
    if (Math.abs(first[0] - last[0]) > EPS || Math.abs(first[1] - last[1]) > EPS) {
      wrapped.push([first[0], first[1]]);
    }
    if (Math.abs(ringArea(wrapped)) < MIN_AREA) continue;
    if (wrapped.every((p) => Math.abs(Math.abs(p[0]) - 180) < 1e-6)) continue;
    result.push(wrapped);
  }
  return result;
}

/**
 * Process a GeoJSON FeatureCollection: split antimeridian-crossing rings of
 * every feature. Polygon features may become MultiPolygons; features that
 * need no cut keep their original geometry untouched.
 */
export function splitAntimeridian(collection: GeoCollection): GeoCollection {
  const features: GeoFeature[] = [];
  for (const feature of collection.features) {
    const polys: number[][][][] =
      feature.geometry.type === "Polygon"
        ? [feature.geometry.coordinates as number[][][]]
        : (feature.geometry.coordinates as number[][][][]);

    let changed = false;
    const outPolys: number[][][][] = [];

    for (const poly of polys) {
      const outer = poly[0];
      const holes = poly.slice(1);
      const pieces = splitRing(outer);
      if (pieces.length !== 1 || pieces[0] !== outer) changed = true;

      if (!changed && holes.length === 0) {
        outPolys.push(poly);
        continue;
      }

      // Re-split holes independently; attach each to the piece whose bbox
      // contains it (at 110m resolution the crossing polygons carry no
      // holes — this is a safety net).
      const holePieces: Ring[][] = holes.map((h) => splitRing(h));
      for (const piece of pieces) {
        const attached: Ring[] = [];
        for (const hPieces of holePieces) {
          for (const h of hPieces) {
            if (bboxContains(piece, h)) attached.push(h);
          }
        }
        outPolys.push(attached.length > 0 ? [piece, ...attached] : [piece]);
      }
    }

    if (!changed) {
      features.push(feature);
    } else {
      features.push({
        ...feature,
        geometry: {
          type: "MultiPolygon",
          coordinates: outPolys,
        },
      });
    }
  }
  return { type: "FeatureCollection", features };
}

function bboxContains(outer: Ring, hole: Ring): boolean {
  const oMinLon = Math.min(...outer.map((p) => p[0]));
  const oMaxLon = Math.max(...outer.map((p) => p[0]));
  const oMinLat = Math.min(...outer.map((p) => p[1]));
  const oMaxLat = Math.max(...outer.map((p) => p[1]));
  return hole.every(
    (p) =>
      p[0] >= oMinLon - 1e-6 &&
      p[0] <= oMaxLon + 1e-6 &&
      p[1] >= oMinLat - 1e-6 &&
      p[1] <= oMaxLat + 1e-6,
  );
}
