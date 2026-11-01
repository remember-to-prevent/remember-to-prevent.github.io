import type { Metadata, Viewport } from "next";
import "../globals.css";
import { Toaster } from "@/components/ui/toaster";
import { SiteJsonLd } from "@/components/rtp/site-jsonld";
import { FONT_BODY_CLASS } from "@/lib/fonts";
import { SITE_URL } from "@/lib/site-meta";

/**
 * English root layout — covers `/` (legacy entry, default English) and
 * `/en/` (the English language entry point). The static export therefore
 * always emits `<html lang="en">` for both English URLs.
 */
export const viewport: Viewport = {
  // Matches the site-wide dark reading theme (warm charcoal).
  themeColor: "#211e1a",
};

export const metadata: Metadata = {
  // Production origin — the Pages site is served at the custom domain
  // (verified live), so every relative canonical/OG URL in the child pages
  // resolves against remember-to-prevent.com, never the github.io default.
  metadataBase: new URL(`${SITE_URL}/`),
  icons: { icon: "/favicon.svg" },
};

export default function EnRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
