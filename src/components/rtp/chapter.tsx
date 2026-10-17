"use client";

import type { ReactNode } from "react";
import type { ChapterContent } from "@/content/types";
import { useLang } from "@/lib/i18n";
import { ui } from "@/content/ui";
import { CitationNote, SourceList } from "@/components/rtp/citation";
import { Reveal } from "@/components/rtp/reveal";
import { cn } from "@/lib/utils";

/**
 * Chapter shell — editorial layout with guiding question, sections,
 * labelled callouts (fact / reflection / testimony / methodology),
 * inline citation markers, and a closing source list.
 *
 * Dark reading theme (Task 07): every tone is a warm charcoal passage.
 * A single coherent content-width system is used throughout — the guiding
 * question, lead, sections, callouts and sources all share one measure
 * (fixes the desktop-only alignment inconsistency of the narrower
 * max-w-2xl question block).
 */
export type ChapterTone = "paper" | "ink" | "deep" | "warm";

export function Chapter({
  content,
  tone = "ink",
  children,
  interactive,
}: {
  content: ChapterContent;
  tone?: ChapterTone;
  /** Content rendered between lead and sections (e.g. timeline). */
  children?: ReactNode;
  /** Interactive blocks rendered after sections. */
  interactive?: ReactNode;
}) {
  const { t, lang } = useLang();
  const ink = tone !== "paper";

  return (
    <section
      id={content.id}
      aria-labelledby={`${content.id}-title`}
      className={cn(
        "relative px-4 py-16 sm:px-6 sm:py-24 lg:py-28",
        tone === "deep"
          ? "rtp-grain bg-ink-deep text-paper"
          : tone === "warm"
            ? "rtp-grain bg-ink-warm text-paper"
            : ink
              ? "rtp-grain bg-ink text-paper"
              : "bg-paper text-ink",
      )}
    >
      <div className="mx-auto max-w-3xl">
        {/* Chapter masthead */}
        <Reveal>
          <header>
            <div className="flex items-center gap-3">
              <span
                className={cn(
                  "font-sans text-xs font-semibold tracking-[0.25em] uppercase",
                  ink ? "text-bronze-light" : "text-bronze-deep",
                )}
              >
                {ui.common.chapterLabel[lang] === "Chapter"
                  ? `Chapter ${content.number}`
                  : `第${content.number}章`}
              </span>
              <span
                aria-hidden="true"
                className={cn(
                  "h-px flex-1",
                  ink ? "bg-bronze/50" : "bg-bronze-deep/30",
                )}
              />
            </div>
            <h2
              id={`${content.id}-title`}
              className={cn(
                "mt-4 font-display text-3xl leading-tight font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]",
                ink ? "text-paper" : "text-ink",
              )}
            >
              {content.title[lang]}
            </h2>
            {/* Guiding question — same measure as the body text below it. */}
            <p
              className={cn(
                "mt-4 font-serif text-lg leading-relaxed italic sm:text-xl",
                ink ? "text-stone-light" : "text-stone",
              )}
            >
              {content.question[lang]}
            </p>
            <div className={cn("mt-8 space-y-5", "font-serif text-[1.06rem] leading-[1.85]")}>
              {content.lead.map((p, i) => (
                <p
                  key={i}
                  className={cn(
                    i === 0 && lang === "en" && "rtp-dropcap text-[1.15rem]",
                    ink ? "text-paper/90" : "text-ink/90",
                  )}
                >
                  {p[lang]}
                </p>
              ))}
            </div>
          </header>
        </Reveal>

        {/* Optional interactive before the sections (timeline etc.) */}
        {children ? <div className="mt-12">{children}</div> : null}

        {/* Sections — subtle raised cards keep related paragraphs together */}
        <div className="mt-12 space-y-8">
          {content.sections.map((section) => (
            <Reveal key={section.id}>
              <article
                aria-labelledby={`${content.id}-${section.id}-h`}
                className={cn(
                  "rounded-lg border p-5 sm:p-7",
                  ink
                    ? "border-bronze/20 bg-ink-raised/60"
                    : "border-ink/10 bg-paper-raised",
                )}
              >
                <h3
                  id={`${content.id}-${section.id}-h`}
                  className={cn(
                    "font-display text-xl font-semibold tracking-tight sm:text-2xl",
                    ink ? "text-bronze-light" : "text-bronze-deep",
                  )}
                >
                  {section.heading[lang]}
                </h3>
                <div
                  className={cn(
                    "mt-4 space-y-4 font-serif leading-[1.85] [text-wrap:pretty]",
                    ink ? "text-paper/85" : "text-ink/90",
                  )}
                >
                  {section.paragraphs.map((p, i) => (
                    <p key={i}>{p[lang]}
                      {i === section.paragraphs.length - 1 && section.citationIds.length > 0 ? (
                        <CitationNote
                          ids={section.citationIds}
                          registry={content.citations}
                        />
                      ) : null}
                    </p>
                  ))}
                </div>
                {section.callout ? (
                  <Callout
                    callout={section.callout}
                    registry={content.citations}
                    ink={ink}
                    alreadyCited={section.citationIds}
                  />
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>

        {/* Interactive blocks after sections */}
        {interactive ? <div className="mt-12">{interactive}</div> : null}

        {/* Chapter sources */}
        {content.citations.length > 0 ? (
          <Reveal>
            <details
              className={cn(
                "group mt-12 rounded-md border p-4",
                ink ? "border-bronze/25 bg-ink-raised" : "border-ink/10 bg-paper-raised",
              )}
            >
              <summary
                className={cn(
                  "cursor-pointer font-sans text-sm font-semibold tracking-wide uppercase select-none",
                  ink ? "text-bronze-light" : "text-bronze-deep",
                )}
              >
                {t(ui.common.sourceNote)} ({content.citations.length})
              </summary>
              <SourceList registry={content.citations} className="mt-4" />
            </details>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}

function Callout({
  callout,
  registry,
  ink,
  alreadyCited = [],
}: {
  callout: NonNullable<import("@/content/types").Callout>;
  registry: import("@/content/types").Citation[];
  ink: boolean;
  /** Citations already marked at the end of the section's paragraphs —
      suppress duplicates so markers never appear twice in close proximity. */
  alreadyCited?: string[];
}) {
  const { t, lang } = useLang();
  const label =
    callout.kind === "fact"
      ? ui.common.factLabel
      : callout.kind === "reflection"
        ? ui.common.reflectionLabel
        : callout.kind === "testimony"
          ? ui.common.testimonyLabel
          : ui.common.methodologyLabel;

  const calloutCitations = (callout.citationIds ?? []).filter(
    (id) => !alreadyCited.includes(id),
  );

  const styles: Record<string, string> = {
    fact: ink
      ? "border-l-bronze-light bg-ink-soft/50 text-paper/90"
      : "border-l-bronze bg-paper-raised text-ink/90",
    reflection: ink
      ? "border-l-poppy bg-poppy/10 text-paper/90"
      : "border-l-poppy bg-poppy/[0.07] text-ink/90",
    testimony: ink
      ? "border-l-bronze-light bg-transparent italic text-paper/85"
      : "border-l-bronze-light bg-transparent italic text-ink/90",
    methodology: ink
      ? "border-l-stone-light bg-ink-soft/40 text-paper/85"
      : "border-l-stone bg-paper-deep/70 text-ink/85",
  };

  return (
    <aside
      className={cn(
        "mt-6 rounded-r-md border-l-4 p-4 sm:p-5",
        styles[callout.kind] ?? styles.fact,
      )}
    >
      <p
        className={cn(
          "font-sans text-[0.7rem] font-semibold tracking-[0.18em] uppercase",
          callout.kind === "reflection" ? "text-poppy" : ink ? "text-bronze-light" : "text-bronze-deep",
        )}
      >
        {t(label)}
      </p>
      <p
        className={cn(
          "mt-2 font-serif text-[0.98rem] leading-[1.75]",
          callout.kind === "testimony" && "text-lg leading-relaxed",
        )}
      >
        {callout.text[lang]}
        {calloutCitations.length > 0 ? (
          <CitationNote ids={calloutCitations} registry={registry} />
        ) : null}
      </p>
      {callout.attribution ? (
        <p className={cn("mt-2 font-sans text-xs", ink ? "text-stone-light" : "text-stone")}>
          — {callout.attribution[lang]}
        </p>
      ) : null}
    </aside>
  );
}
