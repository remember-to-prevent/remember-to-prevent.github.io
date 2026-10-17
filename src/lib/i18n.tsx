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

/* ------------------------------------------------------------------ */

interface LanguageContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Pick the string for the active language. */
  t: (value: Localized) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

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
