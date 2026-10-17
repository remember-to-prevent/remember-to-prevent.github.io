"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { actions } from "@/content/data/actions";
import { ui } from "@/content/ui";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Chapter 06 action pathways — accordion interface (Task 06).
 *
 * Each pathway is an accordion row: its heading is always visible and the
 * detailed explanation (practical steps, reputable external links with
 * rel=noopener, and an honest "realistic limits" note) expands directly
 * beneath that heading. The first pathway is expanded on load; opening one
 * pathway collapses the others, so mobile readers never scroll away from
 * the card they tapped. Radix provides the keyboard and ARIA semantics.
 *
 * The share action copies the page URL locally; no personal data is
 * collected or transmitted.
 */
export function ActionSelector({ tone = "ink" }: { tone?: "paper" | "ink" }) {
  const { t, lang } = useLang();
  const ink = tone === "ink";
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      toast({ description: t(ui.actions.copied) });
    } catch {
      toast({ description: t(ui.actions.copyFailed), variant: "destructive" });
    }
  };

  return (
    <section aria-label={lang === "en" ? "Action pathways" : "行動路徑"}>
      <p className={cn("max-w-2xl font-serif leading-relaxed", ink ? "text-paper/85" : "text-ink/85")}>
        {actions.intro[lang]}
      </p>
      <p className="mt-2 font-sans text-xs font-semibold tracking-[0.2em] text-poppy uppercase">
        {t(ui.actions.choosePathway)}
      </p>

      {/* Pathway accordion — first pathway open by default, one at a time */}
      <Accordion
        type="single"
        collapsible
        defaultValue={actions.pathways[0]?.id}
        className="mt-4 space-y-3"
      >
        {actions.pathways.map((p, i) => (
          <AccordionItem
            key={p.id}
            value={p.id}
            className={cn(
              "rounded-lg border border-bronze/25 bg-ink-raised/60 last:border-b",
              !ink && "border-ink/10 bg-paper-raised",
            )}
          >
            <AccordionTrigger
              className={cn(
                "gap-4 rounded-t-lg px-4 py-4 font-serif text-[1.02rem] leading-snug font-semibold sm:px-5 sm:text-lg",
                "hover:no-underline hover:bg-ink-soft/40 focus-visible:bg-ink-soft/40",
                ink ? "text-paper" : "text-ink",
                "[&>svg]:text-bronze-light [&>svg]:size-4.5",
              )}
            >
              <span className="flex items-baseline gap-3">
                <span
                  aria-hidden="true"
                  className="flex h-6 w-6 shrink-0 translate-y-0.5 items-center justify-center rounded-full bg-bronze/25 font-sans text-[0.7rem] font-bold text-bronze-light"
                >
                  {i + 1}
                </span>
                <span className="text-left">{p.title[lang]}</span>
              </span>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-5 sm:px-5">
              <p className={cn("font-serif leading-relaxed", ink ? "text-paper/85" : "text-ink/85")}>
                {p.intro[lang]}
              </p>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                {/* Steps */}
                <div>
                  <p
                    className={cn(
                      "font-sans text-[0.68rem] font-semibold tracking-[0.2em] uppercase",
                      ink ? "text-bronze-light" : "text-bronze-deep",
                    )}
                  >
                    {t(ui.actions.stepsLabel)}
                  </p>
                  <ol className="mt-3 space-y-2.5">
                    {p.steps.map((step, si) => (
                      <li key={si} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bronze/20 font-sans text-[0.7rem] font-bold text-bronze-light"
                        >
                          {si + 1}
                        </span>
                        <span className="font-serif text-sm leading-relaxed">{step[lang]}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Resources + limits */}
                <div className="space-y-6">
                  <div>
                    <p
                      className={cn(
                        "font-sans text-[0.68rem] font-semibold tracking-[0.2em] uppercase",
                        ink ? "text-bronze-light" : "text-bronze-deep",
                      )}
                    >
                      {t(ui.actions.resourcesLabel)}
                    </p>
                    <ul className="mt-3 space-y-2">
                      {p.links.map((link) => (
                        <li key={link.url}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(
                              "group flex items-baseline gap-2 rounded-sm font-serif text-sm underline decoration-bronze-light decoration-1 underline-offset-4 hover:decoration-poppy",
                              ink ? "text-paper" : "text-ink",
                            )}
                          >
                            {link.label[lang]}
                            <span aria-hidden="true" className="text-poppy">↗</span>
                            <span className="sr-only"> ({t(ui.common.externalLink)})</span>
                          </a>
                          <p className={cn("mt-0.5 font-sans text-[0.68rem]", ink ? "text-stone-light" : "text-stone")}>
                            {link.publisher}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={cn("rounded-md border-l-2 border-stone-light p-3.5", ink ? "bg-ink-soft/50" : "bg-paper-deep/60")}>
                    <p className="font-sans text-[0.68rem] font-semibold tracking-[0.2em] text-stone-light uppercase">
                      {t(ui.actions.limitsLabel)}
                    </p>
                    <p className={cn("mt-1.5 font-serif text-sm leading-relaxed italic", ink ? "text-paper/80" : "text-ink/80")}>
                      {p.limits[lang]}
                    </p>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* Share note */}
      <div
        className={cn(
          "mt-8 flex flex-col items-start justify-between gap-4 rounded-lg border border-dashed p-5 sm:flex-row sm:items-center",
          ink ? "border-bronze/40 bg-ink-raised" : "border-bronze-deep/40 bg-paper-raised",
        )}
      >
        <p className={cn("max-w-xl font-serif text-sm leading-relaxed", ink ? "text-paper/80" : "text-ink/80")}>
          {actions.shareNote[lang]}
        </p>
        <Button
          variant="outline"
          onClick={copyLink}
          aria-live="polite"
          className={cn(
            "shrink-0",
            ink
              ? "border-bronze/50 bg-transparent text-paper hover:bg-bronze/20 hover:text-bronze-light"
              : "border-bronze-deep/50 text-ink hover:bg-paper-deep",
          )}
        >
          <ShareIcon />
          {copied ? t(ui.actions.copied) : t(ui.actions.copyLink)}
        </Button>
      </div>
    </section>
  );
}

function ShareIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">
      <path
        d="M6 3 h-3 a1.5 1.5 0 0 0 -1.5 1.5 v7 a1.5 1.5 0 0 0 1.5 1.5 h7 a1.5 1.5 0 0 0 1.5 -1.5 v-3 M10.5 1.5 h4 v4 M14.5 1.5 L7.5 8.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
