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
 */
export function Chapter({
  content,
  tone = "paper",
  children,
  interactive,
}: {
  content: ChapterContent;
  tone?: "paper" | "ink";
  /** Content rendered between lead and sections (e.g. timeline). */
  children?: ReactNode;
  /** Interactive blocks rendered after sections. */
  interactive?: ReactNode;
}) {
  const { t, lang } = useLang();
  const ink = tone === "ink";

  return (
    <section
      id={content.id}
      aria-labelledby={`${content.id}-title`}
      className={cn(
        "relative px-4 py-16 sm:px-6 sm:py-24 lg:py-28",
        ink ? "rtp-grain bg-ink text-paper" : "bg-paper text-ink",
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
            <p
              className={cn(
                "mt-4 max-w-2xl font-serif text-lg leading-relaxed italic sm:text-xl",
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
                    !ink && i === 0 && lang === "en" && "rtp-dropcap text-[1.15rem]",
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

        {/* Sections */}
        <div className="mt-12 space-y-12">
          {content.sections.map((section, idx) => (
            <Reveal key={section.id}>
              <article
                aria-labelledby={`${content.id}-${section.id}-h`}
                className={cn(
                  "border-t pt-8",
                  ink ? "border-bronze/30" : "border-ink/10",
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
                <div className="mt-4 space-y-4 font-serif leading-[1.85] text-ink/90 [text-wrap:pretty]">
                  {section.paragraphs.map((p, i) => (
                    <p key={i} className={ink ? "text-paper/85" : undefined}>
                      {p[lang]}
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
                <span className="sr-only">—</span>
                <span aria-hidden="true" className={cn("mt-6 block select-none text-center font-display text-lg", ink ? "text-bronze/60" : "text-bronze-deep/40")}>
                  ❧ {idx + 1} ❧
                </span>
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
                ink ? "border-bronze/30 bg-ink-raised" : "border-ink/10 bg-paper-raised",
              )}
            >
              <summary className="cursor-pointer font-sans text-sm font-semibold tracking-wide uppercase select-none">
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
      ? "border-l-bronze-light bg-ink-raised text-paper/90"
      : "border-l-bronze bg-paper-raised text-ink/90",
    reflection: "border-l-poppy bg-poppy/[0.07] text-ink/90 dark-panel",
    testimony: "border-l-bronze-light bg-transparent italic",
    methodology: "border-l-stone bg-paper-deep/70 text-ink/85",
  };

  return (
    <aside
      className={cn(
        "mt-6 rounded-r-md border-l-4 p-4 sm:p-5",
        styles[callout.kind] ?? styles.fact,
        callout.kind === "reflection" && ink && "bg-poppy/[0.15] text-paper/90 border-l-poppy",
        callout.kind === "testimony" && ink && "text-paper/85",
        callout.kind === "methodology" && ink && "bg-ink-raised text-paper/85 border-l-stone-light",
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
