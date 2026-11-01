import type { MetadataRoute } from "next";
import type { Lang } from "@/content/types";
import { SITE_URL, SITE_LASTMOD, LANG_PATH } from "@/lib/site-meta";

// Required for output: "export" — the sitemap is generated once at build
// time with zero dynamic data, which is exactly what force-static declares.
export const dynamic = "force-static";

/**
 * Root sitemap for the two canonical, indexable language entry points.
 * Generated statically with the export build (out/sitemap.xml) from the same
 * single source of truth (src/lib/site-meta.ts) that drives the per-page
 * canonical/hreflang metadata, so the two can never drift apart.
 *
 * `/` is intentionally absent: it is the legacy entry that canonicalizes to
 * `/en/`, so it is not a canonical URL and must not be listed. No unbuilt or
 * nonexistent chapter routes are included — chapter anchors are fragments of
 * the two language pages, not separate URLs.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const langs: Lang[] = ["en", "zh"];
  return langs.map((lang) => ({
    url: `${SITE_URL}${LANG_PATH[lang]}`,
    lastModified: new Date(`${SITE_LASTMOD}T00:00:00Z`),
    changeFrequency: "monthly",
    priority: lang === "en" ? 1 : 0.9,
    alternates: {
      languages: {
        en: `${SITE_URL}${LANG_PATH.en}`,
        "zh-TW": `${SITE_URL}${LANG_PATH.zh}`,
      },
    },
  }));
}
