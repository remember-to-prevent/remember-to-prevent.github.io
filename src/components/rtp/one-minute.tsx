"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { oneMinute } from "@/content/data/one-minute";
import { ui } from "@/content/ui";
import { useLang } from "@/lib/i18n";
import { PoppyMark } from "@/components/rtp/poppy";
import { cn } from "@/lib/utils";

type Phase = "idle" | "running" | "paused" | "done" | "skipped";

const TOTAL = 60;

/**
 * One Minute to Remember — user-initiated 60-second reflection.
 * Never auto-starts; supports start / pause / resume / restart / skip;
 * announces state politely for screen readers; no sound, no vibration,
 * no full-screen takeover, no storage of participation. Reduced-motion
 * users get a static countdown readout.
 */
export function OneMinute({ tone = "ink" }: { tone?: "paper" | "ink" }) {
  const { t, lang } = useLang();
  const ink = tone === "ink";
  const [phase, setPhase] = useState<Phase>("idle");
  const [remaining, setRemaining] = useState(TOTAL);
  const [liveMessage, setLiveMessage] = useState("");
  const announcedRef = useRef<Set<number>>(new Set());
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const clear = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => clear, []);

  const stopAt = useCallback((next: Phase, messageKey: keyof typeof oneMinute.a11y) => {
    clear();
    setPhase(next);
    setLiveMessage(oneMinute.a11y[messageKey][lang]);
  }, [lang]);

  const tick = useCallback(() => {
    setRemaining((prev) => {
      const next = prev - 1;
      if (next <= 0) {
        clear();
        setPhase("done");
        setLiveMessage(oneMinute.a11y.complete[lang]);
        return 0;
      }
      // Gentle spoken markers at 30s and 10s only.
      for (const mark of [30, 10]) {
        if (next === mark && !announcedRef.current.has(mark)) {
          announcedRef.current.add(mark);
          setLiveMessage(`${mark} ${oneMinute.a11y.secondsRemaining[lang]}`);
        }
      }
      return next;
    });
  }, [lang]);

  const start = () => {
    if (phase === "done" || phase === "skipped") {
      setRemaining(TOTAL);
      announcedRef.current.clear();
    }
    setPhase("running");
    setLiveMessage(oneMinute.a11y.started[lang]);
    clear();
    intervalRef.current = setInterval(tick, 1000);
  };

  const pause = () => stopAt("paused", "paused");
  const resume = () => {
    setPhase("running");
    setLiveMessage(oneMinute.a11y.resumed[lang]);
    clear();
    intervalRef.current = setInterval(tick, 1000);
  };
  const restart = () => {
    clear();
    setRemaining(TOTAL);
    announcedRef.current.clear();
    setPhase("running");
    setLiveMessage(oneMinute.a11y.started[lang]);
    intervalRef.current = setInterval(tick, 1000);
  };
  const skip = () => {
    clear();
    setRemaining(TOTAL);
    announcedRef.current.clear();
    stopAt("skipped", "skipped");
  };

  const running = phase === "running";
  const finished = phase === "done" || phase === "skipped";
  const progress = ((TOTAL - remaining) / TOTAL) * 100;

  return (
    <section
      aria-label={t(ui.oneMinute.a11yLabel)}
      className={cn(
        "rtp-grain relative overflow-hidden rounded-lg border p-6 sm:p-10",
        ink ? "border-bronze/40 bg-ink text-paper" : "border-bronze/40 bg-ink text-paper",
      )}
    >
      <span aria-hidden="true" className="pointer-events-none absolute inset-3 rounded-md border border-bronze/20" />

      <div className="relative mx-auto flex max-w-xl flex-col items-center text-center">
        <PoppyMark className="h-12 w-12" />

        <h4 className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
          {oneMinute.title[lang]}
        </h4>
        <p className="mt-3 max-w-md font-serif leading-relaxed text-paper/85">
          {oneMinute.invitation[lang]}
        </p>

        {/* Timer display */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <TimerRing progress={progress} remaining={remaining} />
          <p aria-hidden="true" className="font-sans text-xs tracking-[0.25em] text-stone-light uppercase">
            {t(oneMinute.remainingLabel)}
          </p>
        </div>

        {/* aria-live announcements */}
        <p aria-live="polite" role="status" className="sr-only">
          {liveMessage}
        </p>
        <span aria-hidden="true" className="sr-only" />

        {/* Controls */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {phase === "idle" || finished ? (
            <Button
              size="lg"
              onClick={start}
              className="bg-poppy text-paper hover:bg-poppy-deep"
            >
              {t(oneMinute.startLabel)}
            </Button>
          ) : null}
          {running ? (
            <Button
              size="lg"
              variant="outline"
              onClick={pause}
              className="border-bronze/60 bg-transparent text-paper hover:bg-ink-raised hover:text-bronze-light"
            >
              {t(oneMinute.pauseLabel)}
            </Button>
          ) : null}
          {phase === "paused" ? (
            <Button
              size="lg"
              onClick={resume}
              className="bg-bronze text-ink hover:bg-bronze-light"
            >
              {t(oneMinute.resumeLabel)}
            </Button>
          ) : null}
          {(running || phase === "paused") ? (
            <Button
              size="lg"
              variant="ghost"
              onClick={restart}
              className="text-stone-light hover:bg-ink-raised hover:text-paper"
            >
              {t(oneMinute.restartLabel)}
            </Button>
          ) : null}
          {!finished ? (
            <Button
              size="lg"
              variant="ghost"
              onClick={skip}
              className="text-stone-light hover:bg-ink-raised hover:text-paper"
            >
              {t(oneMinute.skipLabel)}
            </Button>
          ) : null}
        </div>

        {/* Completion / skip bridge */}
        {finished ? (
          <div className="mt-8 rounded-md border border-bronze/40 bg-ink-raised px-5 py-4">
            <p className="font-serif leading-relaxed text-paper/90">
              {oneMinute.completionMessage[lang]}
            </p>
            <a
              href="#ch6"
              className="mt-3 inline-block font-sans text-sm font-semibold text-bronze-light underline decoration-poppy decoration-2 underline-offset-4 hover:text-paper"
            >
              {lang === "en" ? "Continue to Chapter 06 — Act →" : "前往第六章——行動 →"}
            </a>
          </div>
        ) : null}

        {/* Tradition context */}
        <details className="group mt-8 w-full rounded-md border border-bronze/25 bg-ink-raised/70 p-4 text-left">
          <summary className="cursor-pointer font-sans text-xs font-semibold tracking-[0.18em] text-bronze-light uppercase select-none">
            {lang === "en"
              ? "Why one minute? The tradition, briefly"
              : "為什麼是一分鐘？關於這個傳統"}
          </summary>
          <div className="mt-3 space-y-3">
            {oneMinute.aboutTradition.map((p, i) => (
              <p key={i} className="font-serif text-sm leading-relaxed text-paper/80">
                {p[lang]}
              </p>
            ))}
          </div>
        </details>
      </div>
    </section>
  );
}

function TimerRing({ progress, remaining }: { progress: number; remaining: number }) {
  const R = 56;
  const C = 2 * Math.PI * R;
  const mm = Math.floor(remaining / 60);
  const ss = remaining % 60;
  const label = `${mm}:${String(ss).padStart(2, "0")}`;

  return (
    <div className="relative h-36 w-36">
      <svg viewBox="0 0 132 132" className="h-full w-full" role="img" aria-hidden="true">
        <circle cx="66" cy="66" r={R} fill="none" stroke="#3A352E" strokeWidth="3" />
        <circle
          cx="66"
          cy="66"
          r={R}
          fill="none"
          stroke="#A93F2B"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray={C}
          strokeDashoffset={C * (1 - progress / 100)}
          transform="rotate(-90 66 66)"
          style={{ transition: "stroke-dashoffset 1s linear" }}
        />
      </svg>
      <span
        aria-hidden="true"
        className="absolute inset-0 flex items-center justify-center font-display text-4xl font-semibold tabular-nums text-paper"
      >
        {label}
      </span>
      <span className="sr-only" role="timer">
        {remaining}
      </span>
    </div>
  );
}
