"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { actions } from "@/content/data/actions";
import { ui } from "@/content/ui";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Chapter 06 action selector — a radio group of six pathways. Each pathway
 * carries practical steps, reputable external links (rel=noopener), and an
 * honest "realistic limits" note. The share action copies the page URL
 * locally; no personal data is collected or transmitted.
 */
export function ActionSelector({ tone = "paper" }: { tone?: "paper" | "ink" }) {
  const { t, lang } = useLang();
  const ink = tone === "ink";
  const { toast } = useToast();
  const [selected, setSelected] = useState<string | null>(null);
  const groupRef = useRef<HTMLDivElement | null>(null);

  const pathway = actions.pathways.find((p) => p.id === selected) ?? null;

  const onKeyDown = (event: React.KeyboardEvent, index: number) => {
    const items = actions.pathways;
    let next = -1;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = (index + 1) % items.length;
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = (index - 1 + items.length) % items.length;
    if (next >= 0) {
      event.preventDefault();
      const target = groupRef.current?.querySelectorAll<HTMLElement>("[role='radio']")[next];
      target?.focus();
      setSelected(items[next].id);
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
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

      {/* Pathway radio group */}
      <div
        ref={groupRef}
        role="radiogroup"
        aria-label={lang === "en" ? "Choose one pathway" : "選擇一個路徑"}
        className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {actions.pathways.map((p, i) => {
          const checked = selected === p.id;
          return (
            <div
              key={p.id}
              role="radio"
              aria-checked={checked}
              tabIndex={checked || (selected === null && i === 0) ? 0 : -1}
              onClick={() => setSelected(p.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={cn(
                "cursor-pointer rounded-lg border p-4 transition-all duration-200 outline-none sm:p-5",
                ink
                  ? "border-bronze/30 bg-ink-raised text-paper hover:border-bronze/60"
                  : "border-ink/10 bg-paper-raised text-ink hover:border-bronze/60 hover:shadow-md",
                checked && "border-poppy ring-2 ring-poppy/30",
              )}
            >
              <div className="flex items-start justify-between gap-3">
                <p className="font-serif text-[1.02rem] leading-snug font-semibold">
                  {p.title[lang]}
                </p>
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                    checked ? "border-poppy bg-poppy text-paper" : ink ? "border-bronze/50" : "border-ink/25",
                  )}
                >
                  {checked ? (
                    <svg viewBox="0 0 12 12" width="10" height="10">
                      <path d="M2 6.5 L4.8 9 L10 3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : null}
                </span>
              </div>
              <p className={cn("mt-2 font-serif text-sm leading-relaxed", ink ? "text-paper/75" : "text-stone")}>
                {p.intro[lang]}
              </p>
              {checked ? (
                <span className="sr-only">{t(ui.actions.selectedLabel)}</span>
              ) : null}
            </div>
          );
        })}
      </div>

      {/* Selected pathway detail */}
      {pathway ? (
        <div
          className={cn(
            "mt-6 rounded-lg border-l-4 border-poppy p-5 sm:p-6",
            ink ? "bg-ink-raised text-paper" : "bg-paper-raised text-ink",
          )}
          aria-live="polite"
        >
          <h5 className="font-display text-xl font-semibold">{pathway.title[lang]}</h5>
          <p className={cn("mt-2 font-serif leading-relaxed", ink ? "text-paper/85" : "text-ink/85")}>
            {pathway.intro[lang]}
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {/* Steps */}
            <div>
              <p className={cn("font-sans text-[0.68rem] font-semibold tracking-[0.2em] uppercase", ink ? "text-bronze-light" : "text-bronze-deep")}>
                {t(ui.actions.stepsLabel)}
              </p>
              <ol className="mt-3 space-y-2.5">
                {pathway.steps.map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-bronze/20 font-sans text-[0.7rem] font-bold text-bronze-deep dark:text-bronze-light"
                    >
                      {i + 1}
                    </span>
                    <span className="font-serif text-sm leading-relaxed">{step[lang]}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Resources + limits */}
            <div className="space-y-6">
              <div>
                <p className={cn("font-sans text-[0.68rem] font-semibold tracking-[0.2em] uppercase", ink ? "text-bronze-light" : "text-bronze-deep")}>
                  {t(ui.actions.resourcesLabel)}
                </p>
                <ul className="mt-3 space-y-2">
                  {pathway.links.map((link) => (
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

              <div className={cn("rounded-md border-l-2 border-stone p-3.5", ink ? "bg-ink-soft" : "bg-paper-deep/60")}>
                <p className="font-sans text-[0.68rem] font-semibold tracking-[0.2em] text-stone uppercase dark:text-stone-light">
                  {t(ui.actions.limitsLabel)}
                </p>
                <p className={cn("mt-1.5 font-serif text-sm leading-relaxed italic", ink ? "text-paper/80" : "text-ink/80")}>
                  {pathway.limits[lang]}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}

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
          className={cn(
            "shrink-0",
            ink
              ? "border-bronze/50 bg-transparent text-paper hover:bg-bronze/20 hover:text-bronze-light"
              : "border-bronze-deep/50 text-ink hover:bg-paper-deep",
          )}
        >
          <ShareIcon />
          {t(ui.actions.copyLink)}
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
