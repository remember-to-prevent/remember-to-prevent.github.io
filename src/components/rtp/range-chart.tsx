"use client";

import { useState } from "react";
import type { ChartDataset, RangeSeries } from "@/content/types";
import { ui } from "@/content/ui";
import { useLang } from "@/lib/i18n";
import { useEChart } from "@/components/rtp/use-echart";
import { cn } from "@/lib/utils";

/**
 * Horizontal range-bar chart with an accessible table alternative.
 * Bars render documented min–max estimate ranges (never precise counts).
 *
 * Interaction model (mobile chart interaction fix, following the world-map
 * pattern): tapping/clicking a bar — anywhere along its full row, including
 * the transparent offset segment — SELECTS it; the selected bar is
 * highlighted and a persistent information panel directly below the chart
 * shows the complete category name, estimated range, unit, historical
 * explanation, and sources. A category dropdown in the panel provides the
 * same access for keyboard and small-screen users, and table rows select too.
 * The floating tooltip remains only as brief supplementary help (label +
 * value, confined to the chart container) — it is never the primary way to
 * read detailed information, which previously overflowed the mobile viewport.
 */
export function RangeChart({
  dataset,
  tone = "paper",
}: {
  dataset: ChartDataset;
  tone?: "paper" | "ink";
}) {
  const { t, lang } = useLang();
  const [showTable, setShowTable] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const ink = tone === "ink";

  const formatValue = (min: number, max: number) => {
    if (max >= 1) {
      return `${formatNum(min)}–${formatNum(max)}`;
    }
    return `${Math.round(min * 1000)}–${Math.round(max * 1000)}k`;
  };

  const formatNum = (n: number) =>
    Number.isInteger(n) ? String(n) : n.toFixed(n < 1 ? 2 : 1);

  // Panel range: expressed in the dataset's own unit (millions), matching the
  // axis scale — preserves full precision for sub-million ranges (0.018–0.022).
  const panelRange = (s: RangeSeries) =>
    s.max >= 1 ? `${formatNum(s.min)}–${formatNum(s.max)}` : `${s.min}–${s.max}`;

  const citationLabel = (ids: string[]) =>
    ids
      .map((id) => dataset.citations.find((c) => c.id === id)?.publisher ?? "")
      .filter(Boolean)
      .join("; ");

  const chartRef = useEChart(
    () => {
      const labels = dataset.series.map((s) => s.label[lang]);
      const axisMax = Math.max(...dataset.series.map((s) => s.max)) * 1.08 || 1;

      // Selected-bar highlight: poppy red fill with a paper outline, matching
      // the selected-region treatment of the world map.
      const selectedStyle = {
        color: ink ? "#C25238" : "#A93F2B",
        borderColor: ink ? "#F4EFE5" : "#211E1A",
        borderWidth: 0.8,
        borderRadius: [3, 3, 3, 3],
      };

      return {
      animation: true,
      animationDuration: 700,
      animationDurationUpdate: 300,
      backgroundColor: "transparent",
      grid: {
        left: 8,
        right: 64,
        top: 8,
        bottom: 8,
        // ECharts 6 replacement for the deprecated grid.containLabel
        outerBoundsMode: "same",
        outerBoundsContain: "axisLabel",
      },
      tooltip: {
        trigger: "item" as const,
        // Never let even the brief tooltip escape the chart container.
        confine: true,
        backgroundColor: ink ? "#2C2823" : "#FBF8F1",
        borderColor: ink ? "#96774C66" : "#DCD3BF",
        borderWidth: 1,
        padding: [6, 10],
        textStyle: {
          color: ink ? "#F4EFE5" : "#211E1A",
          fontFamily: "var(--font-inter), var(--font-noto-sans-tc), sans-serif",
          fontSize: 12,
        },
        extraCssText: "max-width: 200px; white-space: normal;",
        // Brief supplementary help ONLY (label + value). The full note and
        // sources live in the persistent panel below the chart — the floating
        // tooltip used to carry them and overflowed the mobile viewport.
        formatter: (params: Record<string, unknown>) => {
          const idx = Number(params.dataIndex);
          const s = dataset.series[idx];
          if (!s) return "";
          const unit =
            s.max >= 1
              ? ` <span style="font-size:11px; font-weight:400;">${t(ui.chart.millions)}</span>`
              : "";
          return `
            <div style="font-weight:600;">${s.label[lang]}</div>
            <div style="margin-top:2px; font-weight:700; color:${ink ? "#C2A878" : "#6F5735"};">
              ${formatValue(s.min, s.max)}${unit}
            </div>
          `;
        },
      },
      xAxis: {
        type: "value" as const,
        max: axisMax,
        min: 0,
        axisLabel: {
          color: ink ? "#A69C8C" : "#6B6357",
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 11,
          formatter: (v: number) => (v >= 1 ? String(Math.round(v)) : v.toFixed(1)),
        },
        splitLine: {
          lineStyle: { color: ink ? "#3F3A32" : "#DCD3BF", type: "dashed" as const },
        },
        axisLine: { show: false },
        axisTick: { show: false },
      },
      yAxis: {
        type: "category" as const,
        data: labels,
        inverse: true,
        axisLabel: {
          color: ink ? "#F4EFE5" : "#211E1A",
          fontFamily: "var(--font-inter), var(--font-noto-sans-tc), sans-serif",
          fontSize: 12,
          width: 150,
          overflow: "truncate" as const,
        },
        // Baseline at value 0 — anchors the floating bars so readers see
        // each bar STARTS at its documented minimum, not at zero.
        axisLine: { show: true, lineStyle: { color: ink ? "#4A4335" : "#C2A878", width: 1 } },
        axisTick: { show: false },
      },
      series: [
        {
          type: "bar" as const,
          stack: "range",
          // The transparent offset segment (0 → min) stays visually empty but
          // is clickable, so the FULL row width is an easy tap target on
          // mobile — visible segments of short ranges can be only a few px.
          cursor: "pointer",
          itemStyle: { color: "transparent" },
          emphasis: { itemStyle: { color: "transparent" } },
          data: dataset.series.map((s) => s.min),
          barWidth: "56%",
          tooltip: { show: false },
        },
        {
          type: "bar" as const,
          stack: "range",
          cursor: "pointer",
          itemStyle: {
            color: ink
              ? { type: "linear", x: 0, y: 0, x2: 1, y2: 0, colorStops: [
                  { offset: 0, color: "#96774C" },
                  { offset: 1, color: "#C2A878" },
                ] }
              : { type: "linear", x: 0, y: 0, x2: 1, y2: 0, colorStops: [
                  { offset: 0, color: "#6F5735" },
                  { offset: 1, color: "#96774C" },
                ] },
            borderRadius: [3, 3, 3, 3],
          },
          emphasis: {
            itemStyle: {
              color: ink ? "#A93F2B" : "#7E2D26",
            },
          },
          data: dataset.series.map((s, i) => {
            const item: {
              value: number;
              itemStyle?: typeof selectedStyle;
              emphasis?: { itemStyle: { color: string } };
            } = { value: Number((s.max - s.min).toFixed(3)) };
            if (i === selected) {
              item.itemStyle = selectedStyle;
              item.emphasis = { itemStyle: { color: ink ? "#D66449" : "#B4472E" } };
            }
            return item;
          }),
          barWidth: "56%",
          label: {
            show: true,
            position: "right" as const,
            color: ink ? "#C2A878" : "#6F5735",
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: 12,
            fontWeight: 600,
            formatter: (params: Record<string, unknown>) => {
              const idx = Number(params.dataIndex);
              const s = dataset.series[idx];
              return s ? formatValue(s.min, s.max) : "";
            },
          },
        },
      ],
      };
    },
    [dataset, lang, ink, selected],
    undefined,
    {
      // Tap/click a bar row to select it; tapping the selected bar clears.
      click: (params) => {
        const idx = Number(params.dataIndex);
        if (!Number.isInteger(idx) || idx < 0 || idx >= dataset.series.length) return;
        setSelected((prev) => (prev === idx ? null : idx));
      },
    },
  );

  const selectedSeries = selected === null ? null : (dataset.series[selected] ?? null);
  const selectedSources = selectedSeries ? citationLabel(selectedSeries.citationIds) : "";
  const selectId = `rtp-range-select-${dataset.id}`;

  return (
    <figure
      className={cn(
        "not-prose rounded-lg border p-4 sm:p-6",
        ink ? "border-bronze/30 bg-ink-raised" : "border-ink/10 bg-paper-raised",
      )}
    >
      <figcaption>
        <h4
          className={cn(
            "font-display text-lg font-semibold sm:text-xl",
            ink ? "text-paper" : "text-ink",
          )}
        >
          {dataset.title[lang]}
        </h4>
        <p
          className={cn(
            "mt-1 max-w-xl font-serif text-sm leading-relaxed",
            ink ? "text-stone-light" : "text-stone",
          )}
        >
          {dataset.subtitle[lang]}
        </p>
      </figcaption>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1">
        <span className="rtp-hint">
          <PointerIcon />
          {t(ui.chart.tapHint)}
        </span>
        <span className={cn("rtp-hint", "text-[0.7rem]")}>
          {t(ui.chart.keyboardHint)}
        </span>
      </div>

      {/* The chart container stays mounted at all times; the table view only
          hides it. Unmounting would detach the ECharts instance from its
          container and leave a blank canvas when switching back — the
          ResizeObserver in useEChart re-syncs the canvas size the moment
          the container becomes visible again. */}
      <div
        ref={chartRef}
        role="img"
        aria-label={`${dataset.title[lang]} — ${dataset.subtitle[lang]}`}
        className={cn("mt-2 h-[var(--chart-h)] w-full", showTable && "hidden")}
        style={{ ["--chart-h" as string]: `${Math.max(200, dataset.series.length * 68 + 40)}px` }}
      />
      {/* Axis-unit caption (Task 05): states what the bars encode and the
          measurement unit, so the floating range bars read unambiguously. */}
      <p
        className={cn(
          "mt-1 font-sans text-[0.68rem] tracking-wide",
          showTable && "hidden",
          ink ? "text-stone-light" : "text-stone",
        )}
      >
        {t(ui.chart.scaleCaption)} {dataset.unit[lang]}
      </p>

      {/* Persistent selection panel — replaces the floating tooltip as the
          primary way to read a data range. Lives INSIDE the chart's card,
          directly below the plotting area (and the unit caption), spans only
          the card width so it can never overflow the mobile viewport, and
          wraps long historical explanations naturally. A native select gives
          keyboard and small-screen users the same access as tapping bars. */}
      <div
        className={cn(
          "mt-4 rounded-lg border p-4 sm:p-5",
          ink ? "border-bronze/25 bg-ink-soft/30" : "border-ink/15 bg-paper-deep/40",
        )}
        aria-live="polite"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <div className="flex items-center gap-2 sm:flex-1">
            <label htmlFor={selectId} className="sr-only">
              {t(ui.chart.selectBarLabel)}
            </label>
            <select
              id={selectId}
              value={selected === null ? "" : String(selected)}
              onChange={(e) => {
                const v = e.target.value;
                setSelected(v === "" ? null : Number(v));
              }}
              className={cn(
                "w-full rounded-md border bg-transparent px-3 py-2 font-sans text-sm",
                ink
                  ? "border-bronze/40 text-paper focus:border-bronze-light"
                  : "border-ink/20 text-ink",
                selected === null && (ink ? "text-stone-light" : "text-stone"),
              )}
            >
              <option value="" className={ink ? "bg-ink-raised text-stone-light" : "bg-paper-raised text-stone"}>
                {t(ui.chart.selectBarPlaceholder)}
              </option>
              {dataset.series.map((s, i) => (
                <option
                  key={s.id}
                  value={String(i)}
                  className={ink ? "bg-ink-raised text-paper" : "bg-paper-raised text-ink"}
                >
                  {s.label[lang]}
                </option>
              ))}
            </select>
          </div>
          {selected !== null ? (
            <button
              type="button"
              onClick={() => setSelected(null)}
              className={cn(
                "shrink-0 rounded-full border px-3.5 py-2 font-sans text-xs font-semibold transition-colors",
                ink
                  ? "border-bronze/50 text-bronze-light hover:bg-bronze/20"
                  : "border-bronze-deep/40 text-bronze-deep hover:bg-paper-deep",
              )}
            >
              ✕ {t(ui.chart.clearSelection)}
            </button>
          ) : null}
        </div>

        {selectedSeries ? (
          <div className={cn("mt-4 border-t pt-4", ink ? "border-bronze/20" : "border-ink/10")}>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1.5">
              <h5
                className={cn(
                  "font-display text-lg font-semibold",
                  ink ? "text-paper" : "text-ink",
                )}
              >
                {selectedSeries.label[lang]}
              </h5>
              <span
                className={cn(
                  "inline-flex flex-wrap items-baseline gap-1.5 rounded-full border px-2.5 py-0.5 font-sans text-[0.68rem] font-semibold tracking-wide uppercase",
                  ink ? "border-bronze/40 text-bronze-light" : "border-bronze-deep/40 text-bronze-deep",
                )}
              >
                {t(ui.chart.rangeNote)} · {panelRange(selectedSeries)}{" "}
                {t(ui.chart.millions)}
              </span>
            </div>
            <p
              className={cn(
                "mt-3 font-serif text-[0.95rem] leading-relaxed",
                ink ? "text-paper/90" : "text-ink/90",
              )}
            >
              {selectedSeries.note[lang]}
            </p>
            {selectedSources ? (
              <p
                className={cn(
                  "mt-3 font-sans text-[0.68rem] leading-relaxed",
                  ink ? "text-stone-light/90" : "text-stone",
                )}
              >
                {t(ui.common.sources)}: {selectedSources}
              </p>
            ) : null}
          </div>
        ) : (
          <p
            className={cn(
              "mt-3 font-serif text-sm leading-relaxed",
              ink ? "text-stone-light" : "text-stone",
            )}
          >
            {t(ui.chart.panelEmpty)}
          </p>
        )}
      </div>

      {showTable && (
        <DataTable
          dataset={dataset}
          ink={ink}
          selected={selected}
          onSelect={(i) => setSelected(i)}
        />
      )}

      <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
        <p className={cn("font-sans text-[0.7rem] leading-snug", ink ? "text-stone-light" : "text-stone")}>
          {t(ui.chart.dataNote)} · {t(ui.common.accessed)} 2026-10-17
        </p>
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
          {showTable ? t(ui.common.viewAsChart) : t(ui.common.viewAsTable)}
        </button>
      </div>
    </figure>
  );
}

function DataTable({
  dataset,
  ink,
  selected,
  onSelect,
}: {
  dataset: ChartDataset;
  ink: boolean;
  selected: number | null;
  onSelect: (i: number) => void;
}) {
  const { t, lang } = useLang();
  return (
    <div className="rtp-scroll mt-3 max-h-96 overflow-y-auto">
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">{dataset.title[lang]}</caption>
        <thead className={cn("sticky top-0 z-10", ink ? "bg-ink-raised" : "bg-paper-raised")}>
          <tr className={cn("border-b", ink ? "border-bronze/40" : "border-ink/15")}>
            <th scope="col" className="py-2 pr-3 font-sans text-xs font-semibold tracking-wide uppercase">
              {lang === "en" ? "Category" : "類別"}
            </th>
            <th scope="col" className="py-2 pr-3 font-sans text-xs font-semibold tracking-wide uppercase">
              {t(ui.chart.rangeNote)}
            </th>
            <th scope="col" className="py-2 pr-3 font-sans text-xs font-semibold tracking-wide uppercase">
              {lang === "en" ? "Notes & definition" : "附註與定義"}
            </th>
            <th scope="col" className="py-2 font-sans text-xs font-semibold tracking-wide uppercase">
              {t(ui.common.sources)}
            </th>
          </tr>
        </thead>
        <tbody>
          {dataset.series.map((s, i) => {
            const isSelected = selected === i;
            return (
            <tr
              key={s.id}
              aria-current={isSelected ? "true" : undefined}
              className={cn(
                "border-b transition-colors",
                ink ? "border-bronze/20 hover:bg-ink-soft/50" : "border-ink/10 hover:bg-paper-deep/50",
                isSelected && (ink ? "bg-ink-soft/70" : "bg-paper-deep/70"),
              )}
            >
              <td className="py-2.5 pr-3 font-serif text-sm font-medium">
                <button
                  type="button"
                  onClick={() => onSelect(i)}
                  className="rounded-sm text-left hover:text-bronze-light focus-visible:text-bronze-light"
                >
                  {s.label[lang]}
                </button>
              </td>
              <td className="py-2.5 pr-3 font-sans text-sm font-semibold whitespace-nowrap text-bronze-deep dark:text-bronze-light">
                {s.max >= 1
                  ? `${s.min}–${s.max}`
                  : `${(s.min * 1000).toFixed(0)}–${(s.max * 1000).toFixed(0)}k`}{" "}
                <span className="font-normal">{t(ui.chart.millions)}</span>
              </td>
              <td className="py-2.5 pr-3 font-serif text-xs leading-snug opacity-85">{s.note[lang]}</td>
              <td className="py-2.5 font-sans text-xs opacity-75">
                {s.citationIds
                  .map((id) => dataset.citations.find((c) => c.id === id)?.publisher)
                  .filter(Boolean)
                  .join("; ")}
              </td>
            </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function PointerIcon() {
  return (
    <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true" className="text-bronze">
      <path
        d="M8 1.5 v7 M8 8.5 l-3 -3 M8 8.5 l3 -3"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="8" cy="13.5" r="1.6" fill="currentColor" />
    </svg>
  );
}
