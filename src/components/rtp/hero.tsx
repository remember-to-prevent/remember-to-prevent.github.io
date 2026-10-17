"use client";

import { useLang } from "@/lib/i18n";
import { ui } from "@/content/ui";
import { PoppyMark } from "@/components/rtp/poppy";
import { chapters } from "@/content";

/**
 * Hero — the required editorial masthead. Full viewport on capable screens,
 * solemn charcoal with archival grain, poppy mark, and the project's
 * REMEMBER → REFLECT → ACT progression.
 */
export function Hero() {
  const { t, lang } = useLang();

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="rtp-grain relative flex min-h-[100svh] flex-col justify-between overflow-hidden bg-ink px-4 pt-14 pb-10 text-paper sm:px-6"
    >
      {/* faint oversized chapter numeral */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 right-2 font-display text-[11rem] leading-none font-bold text-paper/[0.045] select-none sm:text-[17rem] lg:text-[22rem]"
      >
        01
      </span>
      {/* bronze hairline frame */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-3 rounded-lg border border-bronze/25 sm:inset-5"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-4 rounded-md border border-bronze/15 sm:inset-6"
      />

      <div className="relative mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center text-center">
        <p className="order-1 font-sans text-[0.7rem] font-semibold tracking-[0.3em] text-bronze-light uppercase sm:text-xs">
          {t(ui.hero.kicker)}
        </p>

        <PoppyMark
          className="order-2 mx-auto mt-8 h-14 w-14 animate-poppy-bloom sm:h-16 sm:w-16"
          title={lang === "en" ? "Poppy — a symbol of remembrance" : "罌粟花——追思的象徵"}
        />

        <h1
          id="hero-title"
          className="order-3 mt-7 font-display text-[2.9rem] leading-[0.95] font-bold tracking-tight text-balance uppercase sm:text-6xl lg:text-7xl"
        >
          {lang === "en" ? (
            <>
              Remember
              <br />
              to Prevent
            </>
          ) : (
            <>
              銘記歷史
              <br />
              防止重演
            </>
          )}
        </h1>

        <p className="order-4 mt-5 font-sans text-sm font-semibold tracking-[0.35em] text-bronze uppercase">
          {t(ui.hero.chapter)}
        </p>

        <span aria-hidden="true" className="order-5 mx-auto mt-7 h-px w-24 bg-poppy" />

        <p className="order-6 mx-auto mt-7 max-w-xl font-serif text-lg leading-relaxed italic text-balance text-paper/90 sm:text-2xl">
          {t(ui.hero.tagline)}
        </p>

        <p className="order-7 mx-auto mt-4 max-w-lg font-sans text-sm font-medium tracking-wide text-stone-light sm:text-base">
          {t(ui.hero.sub)}
        </p>

        {/* REMEMBER → REFLECT → ACT */}
        <ol className="order-8 mx-auto mt-10 flex flex-wrap items-center justify-center gap-2 font-sans text-[0.72rem] font-semibold tracking-[0.22em] uppercase">
          {lang === "en" ? (
            <>
              <Stage stage="Remember" />
              <Arrow />
              <Stage stage="Reflect" />
              <Arrow />
              <Stage stage="Act" />
            </>
          ) : (
            <>
              <Stage stage="銘記" />
              <Arrow />
              <Stage stage="反思" />
              <Arrow />
              <Stage stage="行動" />
            </>
          )}
        </ol>
      </div>

      {/* Scroll cue */}
      <div className="relative mx-auto flex w-full max-w-3xl flex-col items-center gap-2">
        <a
          href="#ch1"
          className="group flex flex-col items-center gap-2 rounded-sm py-2 font-sans text-[0.68rem] font-semibold tracking-[0.3em] text-stone-light uppercase transition-colors hover:text-bronze-light"
        >
          {t(ui.hero.scrollCue)}
          <svg
            viewBox="0 0 12 20"
            width="10"
            height="16"
            aria-hidden="true"
            className="animate-cue-float text-bronze-light group-hover:text-poppy"
          >
            <path
              d="M6 2 L6 16 M2.5 12.5 L6 16.5 L9.5 12.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <p className="font-sans text-[0.62rem] tracking-[0.2em] text-stone-light/70 uppercase">
          {chapters.length} {lang === "en" ? "chapters" : "個章節"} · 1914–1945
        </p>
      </div>

    </section>
  );
}

function Stage({ stage }: { stage: string }) {
  return (
    <li className="rounded-full border border-bronze/50 px-4 py-1.5 text-bronze-light">{stage}</li>
  );
}

function Arrow() {
  return (
    <li aria-hidden="true" className="text-poppy">
      →
    </li>
  );
}
