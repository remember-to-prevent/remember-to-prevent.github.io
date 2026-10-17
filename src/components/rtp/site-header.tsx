"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { chapters } from "@/content";
import { ui } from "@/content/ui";
import { useLang } from "@/lib/i18n";
import { PoppyMark } from "@/components/rtp/poppy";
import { cn } from "@/lib/utils";

/**
 * Sticky editorial header. On every screen size the chapter navigation stays
 * visible as a horizontally scrollable row; clearly discoverable left/right
 * arrow buttons appear whenever more chapters are hidden in that direction
 * (mobile-first fix, Task 01). Touch users can swipe the row directly, the
 * arrows scroll smoothly (respecting prefers-reduced-motion), and nothing
 * overlaps the wordmark or the language switch.
 */
export function SiteHeader() {
  const { lang, setLang, t } = useLang();
  const [active, setActive] = useState<string>("ch1");
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

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

  /* Track which edges of the chapter row still hide content. Re-measured on
     scroll, resize (ResizeObserver on the row), and language change (labels
     change width). */
  const measure = useCallback(() => {
    const el = navRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(max <= 4 || el.scrollLeft >= max - 2);
  }, []);

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;
    measure();
    el.addEventListener("scroll", measure, { passive: true });
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    // Font loading can change label widths after first paint.
    if (typeof document !== "undefined" && document.fonts?.ready) {
      void document.fonts.ready.then(measure);
    }
    return () => {
      el.removeEventListener("scroll", measure);
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure, lang]);

  const scrollNav = (direction: 1 | -1) => {
    const el = navRef.current;
    if (!el) return;
    const amount = Math.max(160, el.clientWidth * 0.72);
    const reduce =
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: direction * amount, behavior: reduce ? "auto" : "smooth" });
  };

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

      {/* Row 2 — chapter navigation (always visible; scrollable with arrows) */}
      <nav aria-label={t(ui.header.navLabel)} className="mx-auto max-w-5xl px-4 pb-2 sm:px-6">
        <div className="flex items-center gap-1">
          <NavArrow
            direction="left"
            hidden={atStart}
            label={t(ui.header.navScrollLeft)}
            onClick={() => scrollNav(-1)}
          />
          <div
            ref={navRef}
            data-at-start={atStart ? "true" : undefined}
            data-at-end={atEnd ? "true" : undefined}
            className="nav-scroll relative flex min-w-0 flex-1 items-center gap-1 overflow-x-auto"
          >
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
            {/* Edge fades — visible only while content is hidden past that edge */}
            <span
              aria-hidden="true"
              className={cn(
                "pointer-events-none sticky right-0 ml-auto h-6 w-8 bg-gradient-to-l from-ink to-transparent transition-opacity",
                atEnd ? "opacity-0" : "opacity-100",
              )}
            />
          </div>
          <NavArrow
            direction="right"
            hidden={atEnd}
            label={t(ui.header.navScrollRight)}
            onClick={() => scrollNav(1)}
          />
        </div>
      </nav>
    </header>
  );
}

function NavArrow({
  direction,
  hidden,
  label,
  onClick,
}: {
  direction: "left" | "right";
  hidden: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      tabIndex={hidden ? -1 : 0}
      className={cn(
        "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-bronze/40 text-bronze-light transition-all duration-200",
        "hover:bg-ink-raised hover:text-paper focus-visible:bg-ink-raised",
        hidden ? "pointer-events-none scale-75 opacity-0" : "opacity-100",
      )}
    >
      <svg
        viewBox="0 0 12 12"
        width="11"
        height="11"
        aria-hidden="true"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {direction === "left" ? <path d="M7.5 2.5 L4 6 L7.5 9.5" /> : <path d="M4.5 2.5 L8 6 L4.5 9.5" />}
      </svg>
    </button>
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
