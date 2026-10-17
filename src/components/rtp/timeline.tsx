"use client";

import { useMemo, useState } from "react";
import type { TimelineData, TimelineEvent, Theater } from "@/content/types";
import { ui } from "@/content/ui";
import { useLang } from "@/lib/i18n";
import { CitationNote } from "@/components/rtp/citation";
import { cn } from "@/lib/utils";

/**
 * Interactive vertical timeline. Events are buttons (keyboard + touch),
 * the selected event expands in place with full context and citations,
 * and a theater filter narrows the list. Collapsed by default so the
 * list never becomes an unbounded wall.
 */
export function Timeline({ data, tone = "paper" }: { data: TimelineData; tone?: "paper" | "ink" }) {
  const { t, lang } = useLang();
  const ink = tone === "ink";
  const [filter, setFilter] = useState<Theater | "all">("all");
  const [openId, setOpenId] = useState<string | null>(null);

  const theaters = useMemo(() => {
    const present = new Set(data.events.map((e) => e.theater));
    return (Object.keys(ui.timeline.theaters) as Theater[]).filter((k) => present.has(k));
  }, [data]);

  const events = useMemo(
    () =>
      [...data.events]
        .sort((a, b) => a.date.localeCompare(b.date))
        .filter((e) => filter === "all" || e.theater === filter),
    [data, filter],
  );

  const years = useMemo(() => {
    const map = new Map<string, TimelineEvent[]>();
    for (const e of events) {
      const year = e.date.slice(0, 4);
      if (!map.has(year)) map.set(year, []);
      map.get(year)!.push(e);
    }
    return [...map.entries()];
  }, [events]);

  return (
    <section
      aria-label={data.title[lang]}
      className={cn(
        "rounded-lg border p-4 sm:p-6",
        ink ? "border-bronze/30 bg-ink-raised" : "border-ink/10 bg-paper-raised",
      )}
    >
      <header>
        <h4 className={cn("font-display text-lg font-semibold sm:text-xl", ink ? "text-paper" : "text-ink")}>
          {data.title[lang]}
        </h4>
        <p className={cn("mt-1 font-serif text-sm", ink ? "text-stone-light" : "text-stone")}>
          {data.subtitle[lang]}
        </p>
      </header>

      {/* Theater filter */}
      <div
        role="group"
        aria-label={t(ui.timeline.filterLabel)}
        className="nav-scroll mt-4 flex flex-wrap gap-1.5 overflow-x-auto"
      >
        <FilterChip
          pressed={filter === "all"}
          onClick={() => setFilter("all")}
          ink={ink}
          label={t(ui.timeline.allTheaters)}
        />
        {theaters.map((th) => (
          <FilterChip
            key={th}
            pressed={filter === th}
            onClick={() => setFilter(th)}
            ink={ink}
            label={t(ui.timeline.theaters[th])}
          />
        ))}
      </div>

      <p className="rtp-hint mt-3">
        <HandIcon />
        {t(ui.timeline.tapCue)}
      </p>

      {/* Timeline */}
      <div className="relative mt-4 pl-6 sm:pl-8">
        <span aria-hidden="true" className="rtp-rail absolute top-1 bottom-1 left-[7px] w-px sm:left-[11px]" />

        {years.length === 0 ? (
          <p className={cn("py-6 text-center font-serif italic", ink ? "text-stone-light" : "text-stone")}>
            {t(ui.timeline.noEvents)}
          </p>
        ) : (
          years.map(([year, yearEvents]) => (
            <div key={year} className="relative">
              <p
                className={cn(
                  "sticky top-[7.5rem] z-10 mb-2 mt-6 inline-block rounded-sm px-2 py-0.5 font-display text-sm font-bold tracking-widest first:mt-0",
                  ink ? "bg-ink-raised text-bronze-light" : "bg-paper-raised text-bronze-deep",
                )}
              >
                {year}
              </p>
              <ul className="space-y-2">
                {yearEvents.map((event) => {
                  const open = openId === event.id;
                  return (
                    <li key={event.id} className="relative">
                      <span
                        aria-hidden="true"
                        className={cn(
                          "absolute top-4 -left-6 h-2.5 w-2.5 rounded-full border-2 transition-colors sm:-left-8",
                          ink ? "border-bronze bg-ink" : "border-bronze-deep bg-paper",
                          open && "border-poppy bg-poppy",
                        )}
                      />
                      <button
                        type="button"
                        aria-expanded={open}
                        onClick={() => setOpenId(open ? null : event.id)}
                        className={cn(
                          "w-full rounded-md border px-3.5 py-3 text-left transition-colors sm:px-4",
                          ink
                            ? "border-bronze/25 bg-ink text-paper hover:border-bronze/60 hover:bg-ink-soft"
                            : "border-ink/10 bg-paper text-ink hover:border-bronze/60 hover:bg-paper-deep/60",
                          open && (ink ? "border-bronze/70" : "border-bronze-deep/50"),
                        )}
                      >
                        <span className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                          <span className="font-sans text-[0.72rem] font-semibold tracking-wide text-poppy uppercase">
                            {event.dateLabel[lang]}
                          </span>
                          <span className="font-sans text-[0.68rem] text-stone dark:text-stone-light">
                            {event.place[lang]}
                          </span>
                        </span>
                        <span className="mt-1 block font-serif text-[1.02rem] leading-snug font-semibold">
                          {event.title[lang]}
                        </span>
                        <span
                          className={cn(
                            "mt-1 block font-serif text-sm leading-snug",
                            ink ? "text-paper/75" : "text-stone",
                          )}
                        >
                          {event.summary[lang]}
                        </span>
                        <span
                          className={cn(
                            "mt-2 inline-flex items-center gap-1 font-sans text-[0.68rem] font-semibold tracking-wider uppercase",
                            open ? "text-poppy" : ink ? "text-bronze-light" : "text-bronze-deep",
                          )}
                        >
                          {open ? t(ui.timeline.collapseEvent) : t(ui.timeline.expandEvent)}
                          <Chevron open={open} />
                        </span>
                      </button>

                      {open ? (
                        <div
                          className={cn(
                            "mt-2 rounded-md border-l-4 border-poppy px-4 py-3.5 sm:mx-2",
                            ink ? "bg-ink-soft text-paper/85" : "bg-paper-deep/60 text-ink/85",
                          )}
                        >
                          <p className="font-serif leading-[1.75]">{event.detail[lang]}</p>
                          <div className="mt-3 flex flex-wrap items-center gap-2">
                            <span
                              className={cn(
                                "rounded-full border px-2.5 py-0.5 font-sans text-[0.65rem] font-semibold tracking-wider uppercase",
                                ink ? "border-bronze/50 text-bronze-light" : "border-bronze-deep/40 text-bronze-deep",
                              )}
                            >
                              {t(ui.timeline.theaters[event.theater])}
                            </span>
                            <CitationNote ids={event.citationIds} registry={data.citations} />
                          </div>
                        </div>
                      ) : null}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))
        )}
      </div>

      {/* Timeline sources */}
      {data.citations.length > 0 ? (
        <details
          className={cn(
            "group mt-6 rounded-md border p-3.5",
            ink ? "border-bronze/25 bg-ink" : "border-ink/10 bg-paper",
          )}
        >
          <summary className="cursor-pointer font-sans text-xs font-semibold tracking-wide uppercase select-none">
            {t(ui.common.sourceNote)} ({data.citations.length})
          </summary>
          <ul className="mt-3 space-y-1.5">
            {data.citations.map((c) => (
              <li key={c.id} className="font-serif text-xs leading-snug">
                <span className="font-sans font-semibold">{c.publisher}</span> —{" "}
                <span className="opacity-80">{c.title[lang]}</span>{" "}
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-poppy underline underline-offset-2"
                >
                  ↗<span className="sr-only"> ({t(ui.common.externalLink)})</span>
                </a>
              </li>
            ))}
          </ul>
        </details>
      ) : null}
    </section>
  );
}

function FilterChip({
  pressed,
  onClick,
  label,
  ink,
}: {
  pressed: boolean;
  onClick: () => void;
  label: string;
  ink: boolean;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      onClick={onClick}
      className={cn(
        "shrink-0 rounded-full border px-3 py-1 font-sans text-[0.72rem] font-semibold whitespace-nowrap transition-colors",
        pressed
          ? "border-bronze bg-bronze text-ink"
          : ink
            ? "border-bronze/40 text-stone-light hover:border-bronze hover:text-bronze-light"
            : "border-ink/15 text-stone hover:border-bronze-deep hover:text-bronze-deep",
      )}
    >
      {label}
    </button>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 12 12"
      width="10"
      height="10"
      aria-hidden="true"
      className={cn("transition-transform", open && "rotate-180")}
    >
      <path
        d="M2.5 4.5 L6 8 L9.5 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HandIcon() {
  return (
    <svg viewBox="0 0 16 16" width="12" height="12" aria-hidden="true" className="text-bronze">
      <path
        d="M5 8.5 V3.8 a1 1 0 0 1 2 0 V7 M7 7 V2.6 a1 1 0 0 1 2 0 V7 M9 7 V3.8 a1 1 0 0 1 2 0 V8.5 M11 8.5 c0 3 -1.5 5 -4 5 c-2.2 0 -3.3 -1.3 -4.4 -3.6 c-.4 -.9 .4 -1.7 1.2 -1.2 l1.2 .8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
