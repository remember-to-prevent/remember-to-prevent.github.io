import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/i18n";
import { SiteApp } from "@/components/rtp/site-app";
import { SEO_TEXT, SITE_URL } from "@/lib/site-meta";

/**
 * `/en/` — the crawlable, canonical English entry point. The chapter
 * narrative and references are baked into the exported HTML (no
 * localStorage or user interaction required), with a self-referential
 * canonical, reciprocal hreflang (en ↔ zh-TW, including self) and
 * x-default pointing at the default-language page `/en/`.
 *
 * The language is LOCKED to English on this route: a saved `rtp.language`
 * preference never changes what `/en/` renders — switching language
 * navigates to `/zh-TW/` at the chapter the reader is actually viewing.
 */
export const metadata: Metadata = {
  title: SEO_TEXT.en.title,
  description: SEO_TEXT.en.description,
  keywords: SEO_TEXT.en.keywords,
  authors: [{ name: "Remember to Prevent Project" }],
  alternates: {
    canonical: `${SITE_URL}/en/`,
    languages: {
      en: `${SITE_URL}/en/`,
      "zh-TW": `${SITE_URL}/zh-TW/`,
      "x-default": `${SITE_URL}/en/`,
    },
  },
  openGraph: {
    title: SEO_TEXT.en.ogTitle,
    description: SEO_TEXT.en.ogDescription,
    url: `${SITE_URL}/en/`,
    siteName: "Remember to Prevent",
    type: "website",
    locale: "en_US",
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
    title: SEO_TEXT.en.ogTitle,
    description: SEO_TEXT.en.twitterDescription,
  },
  robots: { index: true, follow: true },
};

export default function EnPage() {
  return (
    <LanguageProvider fixedLang="en">
      <SiteApp />
    </LanguageProvider>
  );
}
