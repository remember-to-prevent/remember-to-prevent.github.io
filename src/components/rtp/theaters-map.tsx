"use client";

import { useMemo, useState } from "react";
import type { EChartsCoreOption } from "echarts/core";
import type { Topology } from "topojson-specification";
import topologyData from "world-atlas/countries-110m.json";
import { feature } from "topojson-client";
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
};
type WorldCollection = { type: "FeatureCollection"; features: WorldFeature[] };

const world = feature(
  topology,
  topology.objects.countries,
) as unknown as WorldCollection;

// ISO numeric id → ECharts region name (resolved from the same dataset we render).
const idToName = new Map<string, string>();
const nameToId = new Map<string, string>();
for (const f of world.features) {
  if (f.id == null) continue;
  const id = String(f.id);
  const name = f.properties?.name ?? "";
  if (name) {
    idToName.set(id, name);
    nameToId.set(name, id);
  }
}

const SIDE_COLORS = {
  allies: "#96774c",
  central: "#7e2d26",
  axis: "#7e2d26",
  neutral: "#ddd3bb",
} as const;

const SIDE_COLORS_INK = {
  allies: "#b08d5b",
  central: "#a93f2b",
  axis: "#a93f2b",
  neutral: "#3a352e",
} as const;

/**
 * The world at war — simplified alliance snapshots (WWI mid-1917 / WWII late-1942)
 * on a modern-borders base map, with an explicit disclosure and a table
 * alternative for keyboard and screen-reader users.
 */
export function TheatersMap({ tone = "paper" }: { tone?: "paper" | "ink" }) {
  const { t, lang } = useLang();
  const ink = tone === "ink";
  const [war, setWar] = useState<"wwi" | "wwii">("wwi");
  const [showTable, setShowTable] = useState(false);

  const snapshot: MapSnapshot = war === "wwi" ? mapWwi : mapWwii;

  const nameToParticipant = useMemo(() => {
    const map = new Map<string, MapParticipant>();
    for (const p of snapshot.participants) {
      const name = idToName.get(p.id);
      if (name) map.set(name, p);
    }
    return map;
  }, [snapshot]);

  const enemySide: "central" | "axis" = war === "wwi" ? "central" : "axis";

  const option = useMemo<EChartsCoreOption>(() => {
    const colors = ink ? SIDE_COLORS_INK : SIDE_COLORS;
    return {
      backgroundColor: "transparent",
      animation: true,
      animationDuration: 600,
      tooltip: {
        trigger: "item" as const,
        backgroundColor: ink ? "#2C2823" : "#FBF8F1",
        borderColor: ink ? "#96774C66" : "#DCD3BF",
        borderWidth: 1,
        padding: [10, 14],
        textStyle: {
          color: ink ? "#F4EFE5" : "#211E1A",
          fontFamily: "var(--font-inter), var(--font-noto-sans-tc), sans-serif",
          fontSize: 12,
        },
        extraCssText: "max-width: 260px; white-space: normal;",
        formatter: (params: Record<string, unknown>) => {
          const name = String(params.name ?? "");
          const p = nameToParticipant.get(name);
          if (!p) return "";
          return `
            <div style="font-weight:600; margin-bottom:2px;">${p.name[lang]}</div>
            <div style="margin-top:4px; opacity:0.9; line-height:1.5;">${p.note[lang]}</div>
          `;
        },
      },
      series: [
        {
          type: "map" as const,
          map: "rtp-world",
          roam: false,
          aspectScale: 0.9,
          selectedMode: false,
          zoom: 1.05,
          itemStyle: {
            areaColor: colors.neutral,
            borderColor: ink ? "#F4EFE5" : "#211E1A",
            borderWidth: 0.4,
            opacity: 0.96,
          },
          emphasis: {
            label: { show: false },
            itemStyle: { areaColor: ink ? "#c2a878" : "#c2a878" },
          },
          data: snapshot.participants
            .map((p): { name: string; value: number; itemStyle: { areaColor: string } } | null => {
              const name = idToName.get(p.id);
              if (!name) return null;
              return {
                name,
                value: 1,
                itemStyle: { areaColor: colors[p.side] },
              };
            })
            .filter((d): d is { name: string; value: number; itemStyle: { areaColor: string } } => d !== null),
        },
      ],
    };
  }, [snapshot, ink, lang, nameToParticipant]);

  const chartRef = useEChart(
    () => option,
    [option],
    async (core) => {
      // Exclude Antarctica for readability; register under a stable name.
      const filtered = {
        ...world,
        features: world.features.filter((f) => String(f.id) !== "010"),
      };
      core.registerMap(
        "rtp-world",
        filtered as unknown as Parameters<typeof core.registerMap>[1],
      );
    },
  );

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

      {/* War toggle */}
      <div
        role="group"
        aria-label={t(ui.map.snapshotLabel)}
        className="mt-3 inline-flex rounded-full border border-bronze/40 p-0.5"
      >
        {(["wwi", "wwii"] as const).map((id) => (
          <button
            key={id}
            type="button"
            aria-pressed={war === id}
            onClick={() => {
              setWar(id);
              setShowTable(false);
            }}
            className={cn(
              "rounded-full px-4 py-1.5 font-sans text-xs font-semibold transition-colors",
              war === id ? "bg-bronze text-ink" : ink ? "text-stone-light hover:text-paper" : "text-stone hover:text-ink",
            )}
          >
            {id === "wwi" ? t(ui.map.wwiButton) : t(ui.map.wwiiButton)}
          </button>
        ))}
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
        <span className="rtp-hint">
          <GlobeIcon />
          {t(ui.map.tapCue)}
        </span>
        <span className="rtp-hint text-[0.7rem]">{t(ui.common.keyboardHint)}</span>
      </div>

      {!showTable ? (
        <div
          ref={chartRef}
          role="img"
          aria-label={`${t(ui.map.title)} — ${snapshot.dateLabel[lang]}. ${snapshot.disclosure[lang]}`}
          className="mt-2 h-[380px] w-full sm:h-[500px]"
        />
      ) : (
        <MapTable snapshot={snapshot} ink={ink} />
      )}

      {/* Legend */}
      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2">
        <LegendSwatch
          color={ink ? SIDE_COLORS_INK.allies : SIDE_COLORS.allies}
          label={war === "wwi" ? t(ui.map.legendAllies) : t(ui.map.legendAllies)}
        />
        <LegendSwatch
          color={ink ? SIDE_COLORS_INK[enemySide] : SIDE_COLORS[enemySide]}
          label={war === "wwi" ? t(ui.map.legendCentral) : t(ui.map.legendAxis)}
        />
        <LegendSwatch color={ink ? SIDE_COLORS_INK.neutral : SIDE_COLORS.neutral} label={t(ui.map.legendNeutral)} />
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

      <div className="mt-3 flex justify-end">
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

function MapTable({ snapshot, ink }: { snapshot: MapSnapshot; ink: boolean }) {
  const { t, lang } = useLang();
  const sideLabel = (side: MapParticipant["side"]) =>
    side === "allies"
      ? t(ui.map.legendAllies)
      : side === "central"
        ? t(ui.map.legendCentral)
        : side === "axis"
          ? t(ui.map.legendAxis)
          : t(ui.map.legendNeutral);

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
          {snapshot.participants.map((p) => (
            <tr key={`${p.id}-${p.side}`} className={cn("border-b", ink ? "border-bronze/20" : "border-ink/10")}>
              <td className="py-2 pr-3 font-serif text-sm font-medium">{p.name[lang]}</td>
              <td className="py-2 pr-3 font-sans text-xs font-semibold whitespace-nowrap">{sideLabel(p.side)}</td>
              <td className="py-2 font-serif text-xs leading-snug opacity-80">{p.note[lang]}</td>
            </tr>
          ))}
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
