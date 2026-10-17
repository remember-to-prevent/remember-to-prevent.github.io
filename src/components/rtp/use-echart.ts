"use client";

import { useEffect, useRef, type DependencyList } from "react";
import type { EChartsType } from "echarts/core";
import type { EChartsCoreOption } from "echarts/core";

/**
 * Lazy, SSR-safe ECharts hook. ECharts core + only the needed charts and
 * components are dynamically imported on the client, the instance follows the
 * container via ResizeObserver, and is disposed on dependency change/unmount.
 * `setup` runs once per boot with the core module (e.g. to register maps).
 */
export function useEChart(
  buildOption: () => EChartsCoreOption | null,
  deps: DependencyList,
  setup?: (core: typeof import("echarts/core")) => void | Promise<void>,
) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<EChartsType | null>(null);

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

      if (!chartRef.current) {
        chartRef.current = core.init(containerRef.current, undefined, {
          renderer: "canvas",
        });
      }
      const option = buildOption();
      if (option) {
        chartRef.current.setOption(option, true);
      }

      resizeObserver = new ResizeObserver(() => {
        chartRef.current?.resize();
      });
      resizeObserver.observe(containerRef.current);
    };

    void boot();

    return () => {
      cancelled = true;
      resizeObserver?.disconnect();
      chartRef.current?.dispose();
      chartRef.current = null;
    };
     
  }, deps);

  return containerRef;
}
