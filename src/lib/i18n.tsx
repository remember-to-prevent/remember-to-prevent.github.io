"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import type { Lang, Localized } from "@/content/types";

const STORAGE_KEY = "rtp.language";

/* ------------------------------------------------------------------ */
/* External store: localStorage + in-memory subscription.             */
/* useSyncExternalStore keeps SSR hydration safe (server snapshot is   */
/* "en", matching the server-rendered HTML; the client snapshot is     */
/* read after hydration without a cascading setState).                */
/* ------------------------------------------------------------------ */

const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function getSnapshot(): Lang {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "zh" ? "zh" : "en";
  } catch {
    return "en";
  }
}

function getServerSnapshot(): Lang {
  return "en";
}

function writeLang(next: Lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* storage unavailable — preference simply won't persist */
  }
  for (const listener of listeners) listener();
}

/**
 * Persist a language choice WITHOUT notifying subscribers. Used by the
 * header when a language switch means navigating to another route: the
 * preference must be stored (so `/` keeps honouring it) but re-rendering
 * the current page in the new language for a frame before the navigation
 * starts would flash.
 */
export function persistLangSilently(next: Lang) {
  try {
    window.localStorage.setItem(STORAGE_KEY, next);
  } catch {
    /* storage unavailable — preference simply won't persist */
  }
}

/* ------------------------------------------------------------------ */

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Pick the string for the active language. */
  t: (value: Localized) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({
  children,
  fixedLang,
}: {
  children: ReactNode;
  /**
   * Locks the rendered language for the language-specific routes (`/en/`,
   * `/zh-TW/`). Their HTML is exported with the fixed language baked in, and
   * a saved `rtp.language` preference must never silently change what those
   * URLs render — the header's language switch navigates to the other route
   * instead. Undefined on `/`, which keeps the original stored-preference
   * behaviour unchanged.
   */
  fixedLang?: Lang;
}) {
  const storedLang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const lang = fixedLang ?? storedLang;

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-TW" : "en";
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    writeLang(next);
  }, []);

  const t = useCallback((value: Localized) => value[lang], [lang]);

  const value = useMemo(() => ({ lang, setLang, t }), [lang, setLang, t]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLang must be used within LanguageProvider");
  }
  return ctx;
}
