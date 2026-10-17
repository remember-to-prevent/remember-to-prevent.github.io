"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { chapters } from "@/content";
import { ui } from "@/content/ui";
import { useLang } from "@/lib/i18n";
import { PoppyMark } from "@/components/rtp/poppy";
import { cn } from "@/lib/utils";

/**
 * Sticky editorial header. On every screen size the chapter navigation stays
 * visible as a horizontally scrollable row (with thin scrollbar + edge fade
 * affordances), and the language switch is always reachable — nothing is
 * hidden behind a hamburger.
 */
export function SiteHeader() {
  const { lang, setLang, t } = useLang();
  const [active, setActive] = useState<string>("ch1");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    for (const ch of chapters) {
      const el = document.getElementById(ch.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-bronze/30 bg-ink/95 text-paper backdrop-blur supports-[backdrop-filter]:bg-ink/85",
        scrolled && "shadow-lg shadow-ink/30",
      )}
    >
      <a href="#main" className="skip-link">
        {t(ui.skipToMain)}
      </a>

      {/* Row 1 — wordmark + language */}
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 pt-2.5 pb-1 sm:px-6">
        <Link
          href="#top"
          className="group flex items-center gap-2.5 rounded-sm"
          aria-label={`${t(ui.header.wordmark)} — ${t(ui.header.wordmarkChapter)}`}
        >
          <PoppyMark className="h-7 w-7 shrink-0 transition-transform duration-300 group-hover:scale-110" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-[0.95rem] font-semibold tracking-tight">
              {t(ui.header.wordmark)}
            </span>
            <span className="mt-0.5 font-sans text-[0.65rem] font-medium tracking-[0.22em] text-bronze-light uppercase">
              {t(ui.header.wordmarkChapter)}
            </span>
          </span>
        </Link>

        <div
          role="group"
          aria-label={t(ui.header.langLabel)}
          className="flex items-center gap-1 rounded-full border border-bronze/40 p-0.5"
        >
          <LangButton
            pressed={lang === "en"}
            onClick={() => setLang("en")}
            label={ui.header.langEn}
            full={t(ui.header.langEnFull)}
          />
          <LangButton
            pressed={lang === "zh"}
            onClick={() => setLang("zh")}
            label={ui.header.langZh}
            full={t(ui.header.langZhFull)}
          />
        </div>
      </div>

      {/* Row 2 — chapter navigation (always visible, scrollable) */}
      <nav aria-label={t(ui.header.navLabel)} className="mx-auto max-w-5xl px-4 pb-2 sm:px-6">
        <div className="nav-scroll flex items-center gap-1 overflow-x-auto">
          {chapters.map((ch) => {
            const isActive = active === ch.id;
            return (
              <a
                key={ch.id}
                href={`#${ch.id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "shrink-0 rounded-sm px-2.5 py-1.5 font-sans text-[0.78rem] font-medium whitespace-nowrap transition-colors",
                  isActive
                    ? "text-bronze-light underline decoration-poppy decoration-2 underline-offset-[6px]"
                    : "text-stone-light hover:text-paper",
                )}
              >
                <span aria-hidden="true" className="mr-1 text-[0.7rem] text-bronze/80">
                  {ch.number}
                </span>
                {ch.navLabel[lang]}
              </a>
            );
          })}
          <span
            aria-hidden="true"
            className="pointer-events-none sticky right-0 ml-auto hidden h-6 w-8 bg-gradient-to-l from-ink to-transparent md:block"
          />
        </div>
      </nav>
    </header>
  );
}

function LangButton({
  pressed,
  onClick,
  label,
  full,
}: {
  pressed: boolean;
  onClick: () => void;
  label: string;
  full: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      lang={label === ui.header.langEn ? "en" : "zh-TW"}
      title={full}
      onClick={onClick}
      className={cn(
        "rounded-full px-3 py-1 font-sans text-[0.78rem] font-semibold transition-colors",
        pressed
          ? "bg-bronze text-ink"
          : "text-stone-light hover:bg-ink-raised hover:text-paper",
      )}
    >
      {label}
      <span className="sr-only">{full}</span>
    </button>
  );
}
