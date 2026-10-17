import type { Metadata } from "next";
import {
  Fraunces,
  Inter,
  Newsreader,
  Noto_Sans_TC,
  Noto_Serif_TC,
} from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { LanguageProvider } from "@/lib/i18n";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-newsreader",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// CJK fonts are served as unicode-range slices; preload is disabled so the
// browser only fetches the glyph ranges actually used on the page.
const notoSerifTC = Noto_Serif_TC({
  weight: ["400", "600"],
  variable: "--font-noto-serif-tc",
  display: "swap",
  preload: false,
});

const notoSansTC = Noto_Sans_TC({
  weight: ["400", "500"],
  variable: "--font-noto-sans-tc",
  display: "swap",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://remember-to-prevent.github.io/"),
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
  authors: [{ name: "Remember to Prevent Project" }],
  alternates: {
    canonical: "/",
    languages: { "en": "/", "zh-TW": "/" },
  },
  openGraph: {
    title: "Remember to Prevent — Chapter 01",
    description:
      "The Past Cannot Be Changed. The Future Is Still Ours to Shape. Two World Wars. Lessons for Humanity. Actions for Tomorrow.",
    url: "/",
    siteName: "Remember to Prevent",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Remember to Prevent — Chapter 01" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Remember to Prevent — Chapter 01",
    description:
      "Two World Wars. Lessons for Humanity. Actions for Tomorrow. An independent bilingual historical education project.",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Remember to Prevent — Chapter 01",
    alternateName: "銘記歷史，防止重演 — 第一章",
    description:
      "An independent, bilingual historical education project on the First and Second World Wars, their human cost, and realistic actions that reduce the risk of future catastrophe.",
    inLanguage: ["en", "zh-TW"],
    isFamilyFriendly: true,
    license: "https://remember-to-prevent.com/",
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Without JavaScript, every reveal is fully visible — content first. */}
        <noscript>
          <style>{`.rtp-reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body
        className={`${fraunces.variable} ${newsreader.variable} ${inter.variable} ${notoSerifTC.variable} ${notoSansTC.variable} antialiased bg-background text-foreground`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LanguageProvider>
          {children}
          <Toaster />
        </LanguageProvider>
      </body>
    </html>
  );
}
