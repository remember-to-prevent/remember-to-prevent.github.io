import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/i18n";
import { SiteApp } from "@/components/rtp/site-app";
import { SEO_TEXT, SITE_URL } from "@/lib/site-meta";

/**
 * `/zh-TW/` — the crawlable, canonical Traditional Chinese entry point. The
 * full chapter narrative and references are baked into the exported HTML in
 * Traditional Chinese (no localStorage or user interaction required), with a
 * self-referential canonical, reciprocal hreflang (zh-TW ↔ en, including
 * self) and x-default pointing at the default-language page `/en/`.
 *
 * The language is LOCKED to Traditional Chinese on this route: a saved
 * `rtp.language` preference never changes what `/zh-TW/` renders —
 * switching language navigates to `/en/` at the chapter the reader is
 * actually viewing.
 */
export const metadata: Metadata = {
  title: SEO_TEXT.zh.title,
  description: SEO_TEXT.zh.description,
  keywords: SEO_TEXT.zh.keywords,
  authors: [{ name: "Remember to Prevent Project" }],
  alternates: {
    canonical: `${SITE_URL}/zh-TW/`,
    languages: {
      en: `${SITE_URL}/en/`,
      "zh-TW": `${SITE_URL}/zh-TW/`,
      "x-default": `${SITE_URL}/en/`,
    },
  },
  openGraph: {
    title: SEO_TEXT.zh.ogTitle,
    description: SEO_TEXT.zh.ogDescription,
    url: `${SITE_URL}/zh-TW/`,
    siteName: "Remember to Prevent",
    type: "website",
    locale: "zh_TW",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Remember to Prevent — Chapter 01",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TEXT.zh.ogTitle,
    description: SEO_TEXT.zh.twitterDescription,
  },
  robots: { index: true, follow: true },
};

export default function ZhTwPage() {
  return (
    <LanguageProvider fixedLang="zh">
      <SiteApp />
    </LanguageProvider>
  );
}
