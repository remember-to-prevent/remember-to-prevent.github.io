"use client";

import { useEffect, useRef, type DependencyList } from "react";
import type { EChartsType } from "echarts/core";
import type { EChartsCoreOption } from "echarts/core";

/**
 * Lazy, SSR-safe ECharts hook. ECharts core + only the needed charts and
 * components are dynamically imported on the client; the instance follows
 * the container via ResizeObserver and is disposed on unmount.
 *
 * The chart is booted ONCE per mount (setup — e.g. map registration — runs
 * after core.use(), before init). Option updates (war switch, selection,
 * language change) reuse the live instance via setOption instead of
 * disposing and re-initialising, so toggles repaint without flicker.
 *
 * `onEvents` maps ECharts event names ("click", …) to handlers; handlers
 * are resolved through a ref, so they always see the latest render's
 * closures without re-binding.
 */
export function useEChart(
  buildOption: () => EChartsCoreOption | null,
  deps: DependencyList,
  setup?: (core: typeof import("echarts/core")) => void | Promise<void>,
  onEvents?: Record<string, (params: Record<string, unknown>) => void>,
) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<EChartsType | null>(null);
  const latest = useRef({ buildOption, onEvents });
  latest.current = { buildOption, onEvents };
  const boundRef = useRef<Set<string>>(new Set());

  // Bind any event types added since the last call. Handlers dispatch
  // through `latest` so they never go stale.
  const bindEvents = (chart: EChartsType) => {
    const events = latest.current.onEvents;
    if (!events) return;
    for (const type of Object.keys(events)) {
      if (boundRef.current.has(type)) continue;
      boundRef.current.add(type);
      chart.on(type, (params: unknown) => {
        latest.current.onEvents?.[type]?.(params as Record<string, unknown>);
      });
    }
  };

  // Boot once per mount.
  useEffect(() => {
    let cancelled = false;
    let resizeObserver: ResizeObserver | null = null;

    const boot = async () => {
      const [core, charts, components, renderers] = await Promise.all([
        import("echarts/core"),
        import("echarts/charts"),
        import("echarts/components"),
        import("echarts/renderers"),
      ]);
      if (cancelled || !containerRef.current) return;

      core.use([
        charts.BarChart,
        charts.CustomChart,
        charts.MapChart,
        components.GridComponent,
        components.TooltipComponent,
        components.LegendComponent,
        components.VisualMapComponent,
        components.GeoComponent,
        components.GraphicComponent,
        renderers.CanvasRenderer,
      ]);

      // Setup (e.g. map registration) runs AFTER use() — ECharts 6 installs
      // the registerMap implementation only once chart modules are loaded.
      if (setup) {
        await setup(core);
        if (cancelled) return;
      }

      if (!chartRef.current && containerRef.current) {
        chartRef.current = core.init(containerRef.current, undefined, {
          renderer: "canvas",
        });
      }
      const chart = chartRef.current;
      if (!chart) return;

      bindEvents(chart);

      const option = latest.current.buildOption();
      if (option) {
        chart.setOption(option, true);
      }

      resizeObserver = new ResizeObserver(() => {
        // Skip zero-size updates (container temporarily hidden while the
        // table alternative is shown) — resizing to 0 logs an ECharts
        // warning and is repainted anyway when visible again.
        const el = containerRef.current;
        if (el && el.clientWidth > 0 && el.clientHeight > 0) {
          chartRef.current?.resize();
        }
      });
      resizeObserver.observe(containerRef.current);
    };

    void boot();

    return () => {
      cancelled = true;
      resizeObserver?.disconnect();
      chartRef.current?.dispose();
      chartRef.current = null;
      boundRef.current.clear();
    };
  }, []);

  // Apply option updates without re-booting the chart.
  useEffect(() => {
    const chart = chartRef.current;
    if (!chart) return; // boot still in flight; boot() applies the latest option
    bindEvents(chart);
    const option = latest.current.buildOption();
    if (option) {
      chart.setOption(option, true);
    }
  }, deps);

  return containerRef;
}
