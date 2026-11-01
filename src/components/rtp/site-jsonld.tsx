import { SITE_URL } from "@/lib/site-meta";

/**
 * Site-level JSON-LD (schema.org WebSite), rendered once per document by
 * both root layouts. Adds the production `url` (custom domain) that the
 * original single-layout version omitted; all other fields unchanged.
 */
export function SiteJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Remember to Prevent — Chapter 01",
    alternateName: "銘記歷史，防止重演 — 第一章",
    url: `${SITE_URL}/`,
    description:
      "An independent, bilingual historical education project on the First and Second World Wars, their human cost, and realistic actions that reduce the risk of future catastrophe.",
    inLanguage: ["en", "zh-TW"],
    isFamilyFriendly: true,
    license: `${SITE_URL}/`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
