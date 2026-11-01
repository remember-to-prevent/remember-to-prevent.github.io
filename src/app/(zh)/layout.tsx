import type { Metadata, Viewport } from "next";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SiteJsonLd } from "@/components/rtp/site-jsonld";
import { FONT_BODY_CLASS } from "@/lib/fonts";
import { SITE_URL } from "@/lib/site-meta";

/**
 * Traditional Chinese root layout — covers `/zh-TW/` (the zh-TW language
 * entry point). A dedicated root layout is required so the static export
 * emits `<html lang="zh-TW">` for the Chinese URL (a shared layout could
 * only emit one hard-coded lang attribute for every route).
 */
export const viewport: Viewport = {
  // Matches the site-wide dark reading theme (warm charcoal).
  themeColor: "#211e1a",
};

export const metadata: Metadata = {
  // Production origin — identical to the (en) root layout; the Pages site is
  // served at the custom domain (verified live).
  metadataBase: new URL(`${SITE_URL}/`),
  icons: { icon: "/favicon.svg" },
};

export default function ZhRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <head>
        {/* Without JavaScript, every reveal is fully visible — content first. */}
        <noscript>
          <style>{`.rtp-reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className={FONT_BODY_CLASS}>
        <SiteJsonLd />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
