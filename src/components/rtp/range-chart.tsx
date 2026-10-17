"use client";

import { useState } from "react";
import type { ChartDataset } from "@/content/types";
import { ui } from "@/content/ui";
import { useLang } from "@/lib/i18n";
import { useEChart } from "@/components/rtp/use-echart";
import { cn } from "@/lib/utils";

/**
 * Horizontal range-bar chart with an accessible table alternative.
 * Bars render documented min–max estimate ranges (never precise counts),
 * tooltips carry definitions and caveats, and keyboard users have a
 * full data table alternative.
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
  const ink = tone === "ink";

  const formatValue = (min: number, max: number) => {
    if (max >= 1) {
      return `${formatNum(min)}–${formatNum(max)}`;
    }
    return `${Math.round(min * 1000)}–${Math.round(max * 1000)}k`;
  };

  const formatNum = (n: number) =>
    Number.isInteger(n) ? String(n) : n.toFixed(n < 1 ? 2 : 1);

  const citationLabel = (ids: string[]) =>
    ids
      .map((id) => dataset.citations.find((c) => c.id === id)?.publisher ?? "")
      .filter(Boolean)
      .join("; ");

  const chartRef = useEChart(
    () => {
      const labels = dataset.series.map((s) => s.label[lang]);
      const axisMax = Math.max(...dataset.series.map((s) => s.max)) * 1.08 || 1;

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
        backgroundColor: ink ? "#2C2823" : "#FBF8F1",
        borderColor: ink ? "#96774C66" : "#DCD3BF",
        borderWidth: 1,
        padding: [10, 14],
        textStyle: {
          color: ink ? "#F4EFE5" : "#211E1A",
          fontFamily: "var(--font-inter), var(--font-noto-sans-tc), sans-serif",
          fontSize: 12,
        },
        extraCssText: "max-width: 280px; white-space: normal;",
        formatter: (params: Record<string, unknown>) => {
          const idx = Number(params.dataIndex);
          const s = dataset.series[idx];
          if (!s) return "";
          const sources = citationLabel(s.citationIds);
          return `
            <div style="font-weight:600; margin-bottom:4px;">${s.label[lang]}</div>
            <div style="font-size:15px; font-weight:700; color:${ink ? "#C2A878" : "#6F5735"};">
              ${formatValue(s.min, s.max)} <span style="font-size:11px; font-weight:400;">${t(ui.chart.millions)}</span>
            </div>
            <div style="margin-top:6px; opacity:0.85; line-height:1.5;">${s.note[lang]}</div>
            ${sources ? `<div style="margin-top:6px; font-size:10px; opacity:0.65;">${sources}</div>` : ""}
          `;
        },
      },
      xAxis: {
        type: "value" as const,
        max: axisMax,
        axisLabel: {
          color: ink ? "#A69C8C" : "#6B6357",
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 11,
          formatter: (v: number) => (v >= 1 ? String(Math.round(v)) : v.toFixed(1)),
        },
        splitLine: {
          lineStyle: { color: ink ? "#3A352E" : "#DCD3BF", type: "dashed" as const },
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
        axisLine: { show: false },
        axisTick: { show: false },
      },
      series: [
        {
          type: "bar" as const,
          stack: "range",
          itemStyle: { color: "transparent" },
          emphasis: { itemStyle: { color: "transparent" } },
          data: dataset.series.map((s) => s.min),
          barWidth: "52%",
          silent: true,
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
          data: dataset.series.map((s) => ({
            value: Number((s.max - s.min).toFixed(3)),
            // carry precision via custom field on data item
          })),
          barWidth: "52%",
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
    [dataset, lang, ink],
  );

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
          {t(ui.common.tapHint)}
        </span>
        <span className={cn("rtp-hint", "text-[0.7rem]")}>
          {t(ui.common.keyboardHint)}
        </span>
      </div>

      {!showTable ? (
        <div
          ref={chartRef}
          role="img"
          aria-label={`${dataset.title[lang]} — ${dataset.subtitle[lang]}`}
          className="mt-2 h-[var(--chart-h)] w-full"
          style={{ ["--chart-h" as string]: `${Math.max(180, dataset.series.length * 64 + 40)}px` }}
        />
      ) : (
        <DataTable dataset={dataset} ink={ink} />
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

function DataTable({ dataset, ink }: { dataset: ChartDataset; ink: boolean }) {
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
          {dataset.series.map((s) => (
            <tr key={s.id} className={cn("border-b", ink ? "border-bronze/20" : "border-ink/10")}>
              <td className="py-2.5 pr-3 font-serif text-sm font-medium">{s.label[lang]}</td>
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
          ))}
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
