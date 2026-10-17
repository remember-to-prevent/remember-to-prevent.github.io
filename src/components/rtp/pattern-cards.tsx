"use client";

import { useState } from "react";
import { patterns } from "@/content/data/patterns";
import { ui } from "@/content/ui";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

/**
 * Chapter 05 pattern explorer. Each card shows a documented historical
 * pattern; selecting it reveals careful questions for the present —
 * questions, never accusations of equivalence.
 */
export function PatternCards({ tone = "ink" }: { tone?: "paper" | "ink" }) {
  const { t, lang } = useLang();
  const ink = tone === "ink";
  const [openId, setOpenId] = useState<string | null>(patterns[0]?.id ?? null);

  return (
    <section aria-label={lang === "en" ? "Warning signs — historical patterns and questions for today" : "警訊——歷史模式與今日提問"}>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {patterns.map((card) => {
          const open = openId === card.id;
          return (
            <button
              key={card.id}
              type="button"
              aria-expanded={open}
              onClick={() => setOpenId(open ? null : card.id)}
              className={cn(
                "group rounded-lg border p-4 text-left transition-all duration-200 sm:p-5",
                ink
                  ? "border-bronze/30 bg-ink-raised text-paper hover:border-bronze/60"
                  : "border-ink/10 bg-paper-raised text-ink hover:border-bronze/60 hover:shadow-md",
                open && (ink ? "border-bronze/70 bg-ink-soft" : "border-bronze-deep/50 bg-paper-deep/50"),
              )}
            >
              <span className="flex items-center justify-between gap-2">
                <span
                  className={cn(
                    "font-display text-base font-semibold leading-snug sm:text-lg",
                    ink ? "text-bronze-light" : "text-bronze-deep",
                  )}
                >
                  {card.title[lang]}
                </span>
                <span
                  aria-hidden="true"
                  className={cn(
                    "shrink-0 font-sans text-xs transition-transform duration-200",
                    ink ? "text-bronze-light" : "text-bronze-deep",
                    open ? "rotate-45" : "rotate-0",
                  )}
                >
                  <svg viewBox="0 0 12 12" width="14" height="14">
                    <path d="M6 1.5 V10.5 M1.5 6 H10.5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
              </span>

              <span className="mt-3 block">
                <span
                  className={cn(
                    "font-sans text-[0.62rem] font-semibold tracking-[0.2em] uppercase",
                    ink ? "text-bronze" : "text-bronze",
                  )}
                >
                  {lang === "en" ? "Then — 1914–1945" : "歷史——1914–1945"}
                </span>
                <span className={cn("mt-1 block font-serif text-sm leading-relaxed", ink ? "text-paper/80" : "text-ink/80")}>
                  {card.historical[lang]}
                </span>
              </span>

              {open ? (
                <span className="mt-4 block border-t border-bronze/30 pt-3">
                  <span className="font-sans text-[0.62rem] font-semibold tracking-[0.2em] text-poppy uppercase">
                    {lang === "en" ? "Now — questions for today" : "今日——可以自問"}
                  </span>
                  <span className={cn("mt-1 block font-serif text-sm leading-relaxed italic", ink ? "text-paper/85" : "text-ink/85")}>
                    {card.today[lang]}
                  </span>
                </span>
              ) : (
                <span className={cn("mt-3 block font-sans text-[0.68rem] font-semibold tracking-wider uppercase", ink ? "text-bronze/70" : "text-bronze-deep/60")}>
                  {lang === "en" ? "Tap for questions for today" : "點選顯示今日提問"}
                </span>
              )}
            </button>
          );
        })}
      </div>
      <p className={cn("mt-4 font-serif text-sm italic leading-relaxed", ink ? "text-stone-light" : "text-stone")}>
        {t(ui.common.reflectionLabel)}:{" "}
        {lang === "en"
          ? "These cards pair historical patterns with questions — they do not claim that any present situation is identical to the past."
          : "這些卡片將歷史模式與提問配對——並不主張任何當前處境與過去完全相同。"}
      </p>
    </section>
  );
}
