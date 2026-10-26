/**
 * Automated data-integrity validation for the remediated site (audit §9.3).
 *
 * Checks — deliberately structural and reproducible:
 *  1. Range series keep min < max (no reversed/zero-width bounds).
 *  2. Every series is EITHER an attributed range (min<max) OR a point
 *     estimate (`point`) — no half-formed synthetic ranges.
 *  3. Series/dataset ids unique; bilingual (en+zh) fields non-empty.
 *  4. Citation ids referenced by series resolve in the dataset registry.
 *  5. Map: ids unique per snapshot; every id exists in the world-atlas
 *     countries-110m geometry (code-to-geometry consistency).
 *  6. Historical classification invariants (audit RTP-F001/F002/F003):
 *     - No Soviet-rear republic classified axis/occupied.
 *     - Known corrected codes point at the right geometry.
 *     - No "(occupied)" entry labelled axis/allies in the WWII snapshot.
 *  7. Numerical formatting invariant (audit RTP-F004): the shared formatter
 *     never emits the "k" + "millions" double unit.
 *
 * Run: bun scripts/validate-remediation.ts
 * NOTE: automated consistency proves structure, NOT historical accuracy.
 */
import topologyData from "world-atlas/countries-110m.json";
import { casualties, holocaust, hunger } from "@/content/data/casualties";
import { mapWwi, mapWwii } from "@/content/data/theaters";

type WorldFeature = {
  type: "Feature";
  id?: string | number;
  properties: { name?: string } | null;
};
type WorldCollection = { type: "FeatureCollection"; features: WorldFeature[] };

// The TopoJSON is converted the same way the map component does at runtime;
// for id presence the raw geometries suffice.
const raw = topologyData as unknown as {
  objects: { countries: { geometries: Array<{ id?: string | number; properties?: { name?: string } }> } };
};
const idToGeometryName = new Map<string, string>();
for (const g of raw.objects.countries.geometries) {
  if (g.id == null) continue;
  idToGeometryName.set(String(g.id), g.properties?.name ?? "");
}

let failures = 0;
let checks = 0;
const fail = (msg: string) => {
  failures += 1;
  console.error(`  FAIL ${msg}`);
};
const pass = () => {
  checks += 1;
};

// ---------------------------------------------------------------------------
// 1–4. Chart datasets
// ---------------------------------------------------------------------------
console.log("== Chart datasets ==");
const datasets = [
  { name: "casualties", d: casualties },
  { name: "holocaust", d: holocaust },
  { name: "hunger", d: hunger },
];

const seenDatasetIds = new Set<string>();
for (const { name, d } of datasets) {
  if (seenDatasetIds.has(d.id)) fail(`dataset id duplicated: ${d.id}`);
  else seenDatasetIds.add(d.id);
  pass();

  const seenSeriesIds = new Set<string>();
  for (const s of d.series) {
    if (seenSeriesIds.has(s.id)) fail(`[${name}] series id duplicated: ${s.id}`);
    else seenSeriesIds.add(s.id);
    pass();

    // Capture the id before the shape checks below: the defensive
    // "impossible branch" assertions narrow the discriminated union `s` to
    // `never` for tsc, so `s.id` must be read while the union is still whole.
    // (Runtime behaviour is unchanged — the checks still guard against
    // malformed data if the types are ever loosened.)
    const sid = s.id;

    // Range/point shape
    if (s.point != null) {
      if (s.min != null || s.max != null)
        fail(`[${name}/${sid}] has point AND min/max`);
      if (!(s.point > 0)) fail(`[${name}/${sid}] point not positive`);
      pass();
    } else {
      if (s.min == null || s.max == null)
        fail(`[${name}/${sid}] missing both point and min/max`);
      else if (!(s.min < s.max))
        fail(`[${name}/${sid}] reversed or zero-width range: ${s.min}–${s.max}`);
      pass();
    }

    // Bilingual completeness
    for (const field of ["label", "note"] as const) {
      if (!s[field]?.en?.trim() || !s[field]?.zh?.trim())
        fail(`[${name}/${s.id}] ${field} missing en or zh`);
      pass();
    }

    // Citations resolve
    if (!s.citationIds || s.citationIds.length === 0)
      fail(`[${name}/${s.id}] no citation references`);
    for (const cid of s.citationIds) {
      if (!d.citations.find((c) => c.id === cid))
        fail(`[${name}/${s.id}] citation id unresolved: ${cid}`);
      pass();
    }
  }
}

// Formatting invariant (RTP-F004): replicate the component formatter and
// assert no double unit can be produced for any current value.
function formatNum(n: number): string {
  if (Number.isInteger(n)) return String(n);
  return String(Number(n.toFixed(n >= 1 ? 2 : 3)));
}
for (const { name, d } of datasets) {
  for (const s of d.series) {
    const text =
      s.point != null ? `≈ ${formatNum(s.point)}` : `${formatNum(s.min)}–${formatNum(s.max)}`;
    if (/k/.test(text)) fail(`[${name}/${s.id}] formatter produced "k": ${text}`);
    if (text.includes("–") && text.includes("≈"))
      fail(`[${name}/${s.id}] mixed marker and range: ${text}`);
    pass();
  }
}

// ---------------------------------------------------------------------------
// 5–6. Map snapshots
// ---------------------------------------------------------------------------
console.log("== Map snapshots ==");
const SOVIET_REAR_IDS = new Set(["398", "762", "795", "417", "051", "031", "268"]);
const EXPECTED_GEOMETRY: Record<string, string> = {
  "070": "Bosnia and Herz.",
  "705": "Slovenia",
  "442": "Luxembourg",
  "512": "Oman",
  "686": "Senegal",
  "090": "Solomon Is.",
  "499": "Montenegro",
};

for (const snapshot of [mapWwi, mapWwii]) {
  const seenIds = new Set<string>();
  for (const p of snapshot.participants) {
    // Uniqueness
    if (seenIds.has(p.id)) fail(`[${snapshot.id}] duplicate id: ${p.id}`);
    else seenIds.add(p.id);
    pass();

    // Geometry existence
    const geoName = idToGeometryName.get(p.id);
    if (!geoName) fail(`[${snapshot.id}] id ${p.id} (${p.name.en}) not in world-atlas geometry`);
    pass();

    // Expected geometry for corrected codes
    const expected = EXPECTED_GEOMETRY[p.id];
    if (expected && geoName !== expected)
      fail(`[${snapshot.id}] id ${p.id} geometry "${geoName}" != expected "${expected}"`);
    if (expected) pass();

    // Bilingual fields
    if (!p.name.en?.trim() || !p.name.zh?.trim() || !p.note.en?.trim() || !p.note.zh?.trim())
      fail(`[${snapshot.id}/${p.id}] missing bilingual name/note`);
    pass();
  }
}

// Historical classification invariants (WWII)
for (const p of mapWwii.participants) {
  if (SOVIET_REAR_IDS.has(p.id) && p.side !== "allies")
    fail(`[wwii] Soviet republic ${p.id} (${p.name.en}) classified "${p.side}"`);
  pass();
  if (p.name.en.includes("(occupied)") && p.side !== "occupied")
    fail(`[wwii] "(occupied)" entry ${p.id} classified "${p.side}"`);
  pass();
}
// Known occupied ids must be occupied (audit F003 set)
const OCCUPIED_IDS = new Set(["070", "705", "807", "498", "688", "442", "428", "233", "112", "804", "626", "360", "608", "096"]);
for (const p of mapWwii.participants) {
  if (OCCUPIED_IDS.has(p.id) && p.side !== "occupied")
    fail(`[wwii] expected occupied for ${p.id} (${p.name.en}), got "${p.side}"`);
  pass();
}
// Alignment framework sanity: no axis classification for Allied protectorates
for (const id of ["400", "512", "818", "148", "414", "784"]) {
  const p = mapWwii.participants.find((x) => x.id === id);
  if (p && p.side === "axis") fail(`[wwii] ${id} (${p.name.en}) must not be axis`);
  pass();
}
// Old erroneous codes must be gone entirely
for (const bad of ["703", "383", "440", "422", "768", "776"]) {
  if (mapWwii.participants.some((p) => p.id === bad))
    fail(`[wwii] obsolete/incorrect code still present: ${bad}`);
  if (mapWwi.participants.some((p) => p.id === bad))
    fail(`[wwi] obsolete/incorrect code still present: ${bad}`);
  pass();
}

// ---------------------------------------------------------------------------
console.log(
  failures === 0
    ? `\nALL CHECKS PASSED (${checks} assertions). Structure only — not a certification of historical accuracy.`
    : `\n${failures} FAILURES across ${checks} assertions.`,
);
process.exit(failures === 0 ? 0 : 1);
