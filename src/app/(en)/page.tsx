import type { Metadata } from "next";
import { LanguageProvider } from "@/lib/i18n";
import { SiteApp } from "@/components/rtp/site-app";
import { SEO_TEXT, SITE_URL } from "@/lib/site-meta";

/**
 * `/` — the original single-page entry, kept fully functional so no existing
 * link or bookmark breaks: `/#ch1` … `/#ch6` anchors, the full scrollytelling
 * experience, and the stored `rtp.language` preference (a returning zh reader
 * still sees Traditional Chinese here, exactly as before).
 *
 * Canonical policy (explicit and consistent): `/` renders the English default
 * content and consolidates into the English language entry point `/en/`
 * (rel=canonical + og:url). It deliberately carries NO hreflang alternates
 * of its own, so it cannot contradict the reciprocal `/en/` ↔ `/zh-TW/`
 * cluster. The sitemap therefore lists `/en/` and `/zh-TW/` only.
 *
 * Switching language here navigates to the language-specific route at the
 * chapter the reader is actually viewing (see site-header.tsx).
 */
export const metadata: Metadata = {
  title: SEO_TEXT.en.title,
  description: SEO_TEXT.en.description,
  keywords: SEO_TEXT.en.keywords,
  authors: [{ name: "Remember to Prevent Project" }],
  alternates: {
    canonical: `${SITE_URL}/en/`,
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

export default function RootPage() {
  return (
    <LanguageProvider>
      <SiteApp />
    </LanguageProvider>
  );
}
