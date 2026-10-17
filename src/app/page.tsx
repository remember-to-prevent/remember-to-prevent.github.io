import { SiteHeader } from "@/components/rtp/site-header";
import { Hero } from "@/components/rtp/hero";
import { Chapter } from "@/components/rtp/chapter";
import { Timeline } from "@/components/rtp/timeline";
import { TheatersMap } from "@/components/rtp/theaters-map";
import { RangeChart } from "@/components/rtp/range-chart";
import { OneMinute } from "@/components/rtp/one-minute";
import { PatternCards } from "@/components/rtp/pattern-cards";
import { ActionSelector } from "@/components/rtp/action-selector";
import { SiteFooter } from "@/components/rtp/site-footer";
import {
  ch1,
  ch2,
  ch3,
  ch4,
  ch5,
  ch6,
  timelineWwi,
  timelineWwii,
  casualties,
  holocaust,
  hunger,
} from "@/content";

/**
 * REMEMBER TO PREVENT — CHAPTER 01
 * One long-form scrollytelling page, six chapters, Remember → Reflect → Act.
 * Site-wide dark reading theme: every chapter is a warm charcoal passage;
 * the tone steps (ink / deep / warm) give the story a subtle rhythm as it
 * darkens through the Second World War and reopens toward action.
 */
export default function Page() {
  return (
    <div className="flex min-h-screen flex-col bg-ink text-paper">
      <SiteHeader />
      <Hero />

      <main id="main" className="flex-1">
        {/* 01 — The Question */}
        <Chapter content={ch1} tone="ink" />

        {/* 02 — The First World War: timeline + world map */}
        <Chapter
          content={ch2}
          tone="ink"
          interactive={
            <div className="space-y-8">
              <Timeline data={timelineWwi} tone="ink" />
              <TheatersMap tone="ink" />
            </div>
          }
        />

        {/* 03 — The Second World War: the darkest chapter */}
        <Chapter
          content={ch3}
          tone="deep"
          interactive={<Timeline data={timelineWwii} tone="ink" />}
        />

        {/* 04 — The Human Cost: three range charts */}
        <Chapter
          content={ch4}
          tone="ink"
          interactive={
            <div className="space-y-8">
              <RangeChart dataset={casualties} tone="ink" />
              <RangeChart dataset={holocaust} tone="ink" />
              <RangeChart dataset={hunger} tone="ink" />
            </div>
          }
        />

        {/* 05 — Remember and Reflect: patterns + One Minute to Remember */}
        <Chapter
          content={ch5}
          tone="deep"
          interactive={
            <div className="space-y-8">
              <PatternCards tone="ink" />
              <OneMinute tone="ink" />
            </div>
          }
        />

        {/* 06 — Act: action pathways accordion */}
        <Chapter content={ch6} tone="warm" interactive={<ActionSelector tone="ink" />} />
      </main>

      <SiteFooter />
    </div>
  );
}
