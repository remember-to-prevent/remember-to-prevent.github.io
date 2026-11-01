import type { Lang } from "@/content/types";

/**
 * Remember to Prevent — Chapter 01
 * Single source of truth for SEO-level site identity: the production origin,
 * the language entry-point paths and the localized SEO metadata strings.
 *
 * Everything that emits or navigates to a canonical URL derives from this
 * module — the sitemap (src/app/sitemap.ts), the per-page canonical and
 * hreflang metadata (src/app/(en), src/app/(zh)), and the header language
 * switch (src/components/rtp/site-header.tsx) — so the exported URLs can
 * never drift apart.
 */

/**
 * Production origin. The GitHub Pages site (an organization root repository,
 * remember-to-prevent.github.io) is served at the custom domain, which is
 * live and verified — canonical, hreflang, Open Graph and sitemap URLs must
 * all resolve against this origin, not the github.io default URL.
 */
export const SITE_URL = "https://remember-to-prevent.com";

/**
 * Fixed ISO date used for the sitemap <lastmod> value. Deliberately a
 * constant rather than build time so production exports stay deterministic
 * and byte-verifiable across rebuilds.
 */
export const SITE_LASTMOD = "2026-11-01";

/** URL path of each language entry point. `trailingSlash: true` — keep the trailing slash. */
export const LANG_PATH: Record<Lang, "/en/" | "/zh-TW/"> = {
  en: "/en/",
  zh: "/zh-TW/",
};

/** HTML `lang` attribute value (and hreflang key) for each internal language code. */
export const HTML_LANG: Record<Lang, "en" | "zh-TW"> = {
  en: "en",
  zh: "zh-TW",
};

/** The other supported language. */
export function otherLang(lang: Lang): Lang {
  return lang === "en" ? "zh" : "en";
}

/** Absolute production URL of a language entry point. */
export function langUrl(lang: Lang): string {
  return `${SITE_URL}${LANG_PATH[lang]}`;
}

/**
 * Localized SEO metadata. The strings mirror the on-page bilingual editorial
 * copy (src/content/ui.ts hero/wordmark/tagline) — no new editorial claims,
 * numbers or citations are introduced here.
 */
export interface SeoText {
  title: string;
  description: string;
  keywords: string[];
  ogTitle: string;
  ogDescription: string;
  twitterDescription: string;
}

export const SEO_TEXT: Record<Lang, SeoText> = {
  en: {
    title:
      "Remember to Prevent — Chapter 01: Two World Wars. Lessons for Humanity. Actions for Tomorrow.",
    description:
      "An independent, bilingual historical education project. How the First and Second World Wars unfolded, what made the human cost possible, and realistic actions that reduce the risk of future catastrophe. Remember → Reflect → Act.",
    keywords: [
      "First World War",
      "Second World War",
      "World War I",
      "World War II",
      "historical education",
      "remembrance",
      "war reflection",
      "holocaust education",
      "peacebuilding",
    ],
    ogTitle: "Remember to Prevent — Chapter 01",
    ogDescription:
      "The Past Cannot Be Changed. The Future Is Still Ours to Shape. Two World Wars. Lessons for Humanity. Actions for Tomorrow.",
    twitterDescription:
      "Two World Wars. Lessons for Humanity. Actions for Tomorrow. An independent bilingual historical education project.",
  },
  zh: {
    title: "銘記歷史，防止重演 — 第一章：兩次世界大戰。人類的教訓。明日的行動。",
    description:
      "獨立雙語歷史教育計畫。兩次世界大戰如何展開、人類付出的代價因何而成，以及能降低未來災難風險的具體行動。銘記 → 反思 → 行動。",
    keywords: [
      "第一次世界大戰",
      "第二次世界大戰",
      "世界大戰",
      "歷史教育",
      "銘記歷史，防止重演",
    ],
    ogTitle: "銘記歷史，防止重演 — 第一章",
    ogDescription:
      "過去無法改變。未來仍由我們塑造。兩次世界大戰。人類的教訓。明日的行動。",
    twitterDescription: "兩次世界大戰。人類的教訓。明日的行動。獨立雙語歷史教育計畫。",
  },
};
