"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { EChartsCoreOption } from "echarts/core";
import type { Topology } from "topojson-specification";
import topologyData from "world-atlas/countries-110m.json";
import { feature } from "topojson-client";
import { splitAntimeridian } from "@/lib/antimeridian";
import type { MapSnapshot, MapParticipant } from "@/content/types";
import { mapWwi, mapWwii } from "@/content/data/theaters";
import { ui } from "@/content/ui";
import { useLang } from "@/lib/i18n";
import { useEChart } from "@/components/rtp/use-echart";
import { cn } from "@/lib/utils";

const topology = topologyData as unknown as Topology;

type WorldFeature = {
  type: "Feature";
  id?: string | number;
  properties: { name?: string } | null;
  geometry: { type: "Polygon" | "MultiPolygon"; coordinates: unknown };
};
type WorldCollection = { type: "FeatureCollection"; features: WorldFeature[] };

const rawWorld = feature(
  topology,
  topology.objects.countries,
) as unknown as WorldCollection;

// Task 03 — repair the base geometry: cut antimeridian-crossing rings
// (Russia / Fiji) so no full-width horizontal streaks are drawn, then
// exclude Antarctica for readability. See src/lib/antimeridian.ts.
const repairedWorld = splitAntimeridian(rawWorld as never) as unknown as WorldCollection;
const world: WorldCollection = {
  type: "FeatureCollection",
  features: repairedWorld.features.filter((f) => String(f.id) !== "010"),
};

// ISO numeric id → ECharts region name (resolved from the same dataset we render).
const idToName = new Map<string, string>();
for (const f of world.features) {
  if (f.id == null) continue;
  const id = String(f.id);
  const name = f.properties?.name ?? "";
  if (name) {
    idToName.set(id, name);
  }
}

// Category colors (audit RTP-F001/F003): allied bronze, axis deep red,
// occupied muted clay (control, not allegiance), neutral pale sand.
const SIDE_COLORS = {
  allies: "#96774c",
  central: "#7e2d26",
  axis: "#7e2d26",
  occupied: "#a97e6f",
  neutral: "#ddd3bb",
} as const;

const SIDE_COLORS_INK = {
  allies: "#b08d5b",
  central: "#a93f2b",
  axis: "#a93f2b",
  occupied: "#b98a77",
  neutral: "#3a352e",
} as const;

const SIDE_SELECTED_INK = {
  allies: "#d3ab6e",
  central: "#c25238",
  axis: "#c25238",
  occupied: "#d9a892",
  neutral: "#57503f",
} as const;

/** Alignment label for a side (module-level so memoization stays clean). */
function sideLabelOf(
  side: MapParticipant["side"],
  t: (value: import("@/content/types").Localized) => string,
) {
  return side === "allies"
    ? t(ui.map.legendAllies)
    : side === "central"
      ? t(ui.map.legendCentral)
      : side === "axis"
        ? t(ui.map.legendAxis)
        : side === "occupied"
          ? t(ui.map.legendOccupied)
          : t(ui.map.legendNeutral);
}

/**
 * The world at war — simplified alliance snapshots (WWI mid-1917 / WWII
 * late-1942) on a modern-borders base map, with an explicit disclosure.
 *
 * Interaction model (Task 04, following the Global Food Crisis pattern):
 * clicking/tapping a country SELECTS it and a persistent information panel
 * below the map shows its alignment, dates, and context; a country list
 * (native select) provides the same access for keyboard and small-screen
 * users; hover tooltips remain only as brief supplementary help.
 */
export function TheatersMap({ tone = "ink" }: { tone?: "paper" | "ink" }) {
  const { t, lang } = useLang();
  const ink = tone === "ink";
  const [war, setWar] = useState<"wwi" | "wwii">("wwi");
  const [showTable, setShowTable] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const snapshot: MapSnapshot = war === "wwi" ? mapWwi : mapWwii;
  const enemySide: "central" | "axis" = war === "wwi" ? "central" : "axis";

  const nameToParticipant = useMemo(() => {
    const map = new Map<string, MapParticipant>();
    for (const p of snapshot.participants) {
      const name = idToName.get(p.id);
      if (name) map.set(name, p);
    }
    return map;
  }, [snapshot]);

  const sideLabel = (side: MapParticipant["side"]) => sideLabelOf(side, t);

  const option = useMemo<EChartsCoreOption>(() => {
    const colors = ink ? SIDE_COLORS_INK : SIDE_COLORS;
    const selectedColors = SIDE_SELECTED_INK;
    return {
      backgroundColor: "transparent",
      animation: true,
      animationDuration: 600,
      animationDurationUpdate: 300,
      tooltip: {
        trigger: "item" as const,
        backgroundColor: "#2C2823",
        borderColor: "#96774C66",
        borderWidth: 1,
        padding: [8, 12],
        textStyle: {
          color: "#F4EFE5",
          fontFamily: "var(--font-inter), var(--font-noto-sans-tc), sans-serif",
          fontSize: 12,
        },
        extraCssText: "max-width: 220px; white-space: normal;",
        formatter: (params: Record<string, unknown>) => {
          const name = String(params.name ?? "");
          if (!name) return "";
          const p = nameToParticipant.get(name);
          if (!p) return `<div>${name}</div>`;
          return `<div style="font-weight:600;">${p.name[lang]}</div><div style="margin-top:2px; opacity:0.85;">${sideLabelOf(p.side, t)}</div>`;
        },
      },
      series: [
        {
          type: "map" as const,
          map: "rtp-world",
          roam: false,
          aspectScale: 0.9,
          selectedMode: false,
          zoom: 1,
          // Fill the container edge-to-edge — the default series padding
          // shrinks the world into the middle ~80% of the canvas and leaves
          // large empty margins (the "unsatisfactory proportions" defect).
          // The container height is sized to the map aspect so nothing is
          // cropped: world bbox 360°×139.5° × aspectScale 0.9 ≈ 2.32:1.
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          itemStyle: {
            areaColor: colors.neutral,
            borderColor: ink ? "#F4EFE5" : "#211E1A",
            borderWidth: 0.4,
            opacity: 0.96,
          },
          emphasis: {
            label: { show: false },
            itemStyle: { areaColor: ink ? "#6b5f43" : "#c2a878" },
          },
          data: snapshot.participants
            .map((p): { name: string; value: number; itemStyle: { areaColor: string; borderColor?: string; borderWidth?: number } } | null => {
              const name = idToName.get(p.id);
              if (!name) return null;
              const isSel = name === selected;
              return {
                name,
                value: 1,
                itemStyle: isSel
                  ? {
                      areaColor: selectedColors[p.side],
                      borderColor: "#F4EFE5",
                      borderWidth: 1.4,
                    }
                  : { areaColor: colors[p.side] },
              };
            })
            .filter((d): d is { name: string; value: number; itemStyle: { areaColor: string; borderColor?: string; borderWidth?: number } } => d !== null),
        },
      ],
    };
  }, [snapshot, ink, lang, t, selected, nameToParticipant]);

  const chartRef = useEChart(
    () => option,
    [option],
    async (core) => {
      // Register the antimeridian-repaired, Antarctica-free world map.
      core.registerMap(
        "rtp-world",
        world as unknown as Parameters<typeof core.registerMap>[1],
      );
    },
    {
      // Click/tap a country to select it; clicking empty ocean clears.
      click: (params) => {
        const name = String(params.name ?? "");
        setSelected(name || null);
      },
    },
  );

  // ECharts stretches the map to fill its container regardless of aspect
  // ratio. Sizing the container to the map's own aspect (world bbox
  // 360°×139.5° × aspectScale 0.9 → height = width × 139.5/(360×0.9)) keeps
  // the projection undistorted at every viewport width, with no empty
  // margins and no cropping of geographic features.
  const aspectRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = aspectRef.current;
    if (!el) return;
    const setHeight = () => {
      const w = el.clientWidth;
      if (w > 0) el.style.height = `${Math.max(100, Math.round(w * (139.5 / (360 * 0.9))))}px`;
    };
    setHeight();
    const ro = new ResizeObserver(setHeight);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const participant = selected ? (nameToParticipant.get(selected) ?? null) : null;

  const warSwitch = (id: "wwi" | "wwii") => {
    setWar(id);
    setSelected(null);
    setShowTable(false);
  };

  return (
    <figure
      className={cn(
        "not-prose rounded-lg border p-4 sm:p-6",
        ink ? "border-bronze/30 bg-ink-raised" : "border-ink/10 bg-paper-raised",
      )}
    >
      <figcaption>
        <h4 className={cn("font-display text-lg font-semibold sm:text-xl", ink ? "text-paper" : "text-ink")}>
          {t(ui.map.title)}
        </h4>
        <p className={cn("mt-1 font-serif text-sm", ink ? "text-stone-light" : "text-stone")}>
          {snapshot.dateLabel[lang]}
        </p>
      </figcaption>

      {/* Controls: war snapshot (left) · chart/table view (right) */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <div
          role="group"
          aria-label={t(ui.map.snapshotLabel)}
          className="inline-flex rounded-full border border-bronze/40 p-0.5"
        >
          {(["wwi", "wwii"] as const).map((id) => (
            <button
              key={id}
              type="button"
              aria-pressed={war === id}
              onClick={() => warSwitch(id)}
              className={cn(
                "rounded-full px-4 py-1.5 font-sans text-xs font-semibold transition-colors",
                war === id ? "bg-bronze text-ink" : "text-stone-light hover:text-paper",
              )}
            >
              {id === "wwi" ? t(ui.map.wwiButton) : t(ui.map.wwiiButton)}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setShowTable((v) => !v)}
          aria-pressed={showTable}
          className={cn(
            "rounded-full border px-3.5 py-1.5 font-sans text-xs font-semibold transition-colors",
            ink
              ? "border-bronze/50 text-bronze-light hover:bg-bronze/20"
              : "border-bronze-deep/40 text-bronze-deep hover:bg-paper-deep",
          )}
        >
          {showTable ? t(ui.map.hideTable) : t(ui.map.viewTable)}
        </button>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
        <span className="rtp-hint">
          <GlobeIcon />
          {t(ui.map.tapCue)}
        </span>
      </div>

      {/* Same mount-preservation pattern as RangeChart: the map container is
          never unmounted, only hidden, so the ECharts instance stays bound to
          its DOM node and repaints (via the hook's ResizeObserver) whenever
          the chart view becomes active again. The outer div is sized by JS to
          the map's own aspect ratio (see the aspectRef effect above). */}
      <div ref={aspectRef} className={cn("mt-2 h-[150px] w-full", showTable && "hidden")}>
        <div
          ref={chartRef}
          role="img"
          aria-label={`${t(ui.map.title)} — ${snapshot.dateLabel[lang]}. ${snapshot.disclosure[lang]}`}
          className="h-full w-full"
        />
      </div>
      {showTable && (
        <MapTable
          snapshot={snapshot}
          ink={ink}
          selected={selected}
          onSelect={(name) => setSelected(name)}
        />
      )}

      {/* Legend — swatches for the categories present in this snapshot
          (WWII adds 'Under Axis occupation'; WWI has none). */}
      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
        {( ["allies", enemySide, "occupied", "neutral"] as const )
          .filter((group) => snapshot.participants.some((p) => p.side === group))
          .map((group) => (
            <LegendSwatch
              key={group}
              color={ink ? SIDE_COLORS_INK[group] : SIDE_COLORS[group]}
              label={sideLabel(group)}
            />
          ))}
      </div>

      {/* Persistent selection panel (Task 04) — country list + details.
          Remains inside the visualization container, below the map. */}
      <div className="mt-4 rounded-lg border border-bronze/25 bg-ink-soft/30 p-4 sm:p-5" aria-live="polite">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2 sm:flex-1">
            <label htmlFor="rtp-country-select" className="sr-only">
              {t(ui.map.selectCountryLabel)}
            </label>
            <select
              id="rtp-country-select"
              value={participant && selected ? selected : ""}
              onChange={(e) => setSelected(e.target.value || null)}
              className={cn(
                "w-full rounded-md border bg-transparent px-3 py-2 font-sans text-sm",
                ink
                  ? "border-bronze/40 text-paper focus:border-bronze-light"
                  : "border-ink/20 text-ink",
                !selected && "text-stone-light",
              )}
            >
              <option value="" className="bg-ink-raised text-stone-light">
                {t(ui.map.selectCountryPlaceholder)}
              </option>
              {((["allies", enemySide, "occupied", "neutral"] as const)).map((group) => {
                const members = snapshot.participants.filter((p) => p.side === group);
                if (members.length === 0) return null;
                return (
                  <optgroup key={group} label={sideLabel(group)} className="bg-ink-raised">
                    {members.map((p) => {
                      const name = idToName.get(p.id);
                      if (!name) return null;
                      return (
                        <option key={p.id} value={name} className="bg-ink-raised text-paper">
                          {p.name[lang]}
                        </option>
                      );
                    })}
                  </optgroup>
                );
              })}
            </select>
          </div>
          {selected ? (
            <button
              type="button"
              onClick={() => setSelected(null)}
              className={cn(
                "shrink-0 rounded-full border px-3.5 py-2 font-sans text-xs font-semibold transition-colors",
                "border-bronze/50 text-bronze-light hover:bg-bronze/20",
              )}
            >
              ✕ {t(ui.map.clearSelection)}
            </button>
          ) : null}
        </div>

        {participant ? (
          <div className="mt-4 border-t border-bronze/20 pt-4">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h5 className="font-display text-lg font-semibold text-paper">
                {participant.name[lang]}
              </h5>
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-sans text-[0.68rem] font-semibold tracking-wide uppercase",
                  "border-bronze/40 text-bronze-light",
                )}
              >
                <span
                  aria-hidden="true"
                  className="inline-block h-2.5 w-2.5 rounded-sm border border-paper/20"
                  style={{ backgroundColor: SIDE_COLORS_INK[participant.side] }}
                />
                {sideLabel(participant.side)}
              </span>
            </div>
            <p className="mt-1 font-sans text-[0.7rem] text-stone-light">
              {snapshot.dateLabel[lang]}
            </p>
            <p className="mt-3 font-serif text-[0.95rem] leading-relaxed text-paper/90">
              {participant.note[lang]}
            </p>
            <p className="mt-3 font-sans text-[0.68rem] leading-relaxed text-stone-light/90">
              {t(ui.map.panelMethodNote)}
            </p>
          </div>
        ) : selected ? (
          <div className="mt-4 border-t border-bronze/20 pt-4">
            <h5 className="font-display text-lg font-semibold text-paper">{selected}</h5>
            <p className="mt-2 font-serif text-[0.95rem] leading-relaxed text-paper/85">
              {t(ui.map.panelNoRecord)}
            </p>
          </div>
        ) : (
          <p className="mt-3 font-serif text-sm leading-relaxed text-stone-light">
            {t(ui.map.panelEmpty)}
          </p>
        )}
      </div>

      {/* Disclosure */}
      <p
        className={cn(
          "mt-3 border-l-2 border-bronze pl-3 font-sans text-[0.7rem] leading-relaxed",
          ink ? "text-stone-light" : "text-stone",
        )}
      >
        {snapshot.disclosure[lang]}
      </p>
    </figure>
  );
}

function LegendSwatch({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-2 font-sans text-xs font-medium">
      <span aria-hidden="true" className="inline-block h-3 w-3 rounded-sm border border-ink/20" style={{ backgroundColor: color }} />
      {label}
    </span>
  );
}

function MapTable({
  snapshot,
  ink,
  selected,
  onSelect,
}: {
  snapshot: MapSnapshot;
  ink: boolean;
  selected: string | null;
  onSelect: (name: string) => void;
}) {
  const { t, lang } = useLang();
  const sideLabel = (side: MapParticipant["side"]) => sideLabelOf(side, t);

  return (
    <div className="rtp-scroll mt-3 max-h-96 overflow-y-auto">
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">{`${t(ui.map.title)} — ${snapshot.dateLabel[lang]}`}</caption>
        <thead className={cn("sticky top-0 z-10", ink ? "bg-ink-raised" : "bg-paper-raised")}>
          <tr className={cn("border-b", ink ? "border-bronze/40" : "border-ink/15")}>
            <th scope="col" className="py-2 pr-3 font-sans text-xs font-semibold tracking-wide uppercase">
              {t(ui.map.countryHeader)}
            </th>
            <th scope="col" className="py-2 pr-3 font-sans text-xs font-semibold tracking-wide uppercase">
              {t(ui.map.sideHeader)}
            </th>
            <th scope="col" className="py-2 font-sans text-xs font-semibold tracking-wide uppercase">
              {t(ui.map.noteHeader)}
            </th>
          </tr>
        </thead>
        <tbody>
          {snapshot.participants.map((p) => {
            const name = idToName.get(p.id);
            const isSelected = name != null && name === selected;
            return (
              <tr
                key={`${p.id}-${p.side}`}
                aria-current={isSelected ? "true" : undefined}
                className={cn(
                  "border-b transition-colors",
                  ink ? "border-bronze/20 hover:bg-ink-soft/50" : "border-ink/10 hover:bg-paper-deep/50",
                  isSelected && (ink ? "bg-ink-soft/70" : "bg-paper-deep/70"),
                )}
              >
                <td className="py-2 pr-3 font-serif text-sm font-medium">
                  <button
                    type="button"
                    onClick={() => name && onSelect(name)}
                    className="rounded-sm text-left hover:text-bronze-light focus-visible:text-bronze-light"
                  >
                    {p.name[lang]}
                  </button>
                </td>
                <td className="py-2 pr-3 font-sans text-xs font-semibold whitespace-nowrap">{sideLabel(p.side)}</td>
                <td className="py-2 font-serif text-xs leading-snug opacity-80">{p.note[lang]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true" className="text-bronze">
      <circle cx="8" cy="8" r="6.2" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path
        d="M1.8 8 h12.4 M8 1.8 c2.2 2.4 2.2 8 0 12.4 M8 1.8 c-2.2 2.4 -2.2 8 0 12.4 M3.2 3.9 c2.6 1.2 7 1.2 9.6 0 M3.2 12.1 c2.6 -1.2 7 -1.2 9.6 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
        strokeLinecap="round"
      />
    </svg>
  );
}
