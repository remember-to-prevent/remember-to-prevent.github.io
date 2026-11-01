import {
  Fraunces,
  Inter,
  Newsreader,
  Noto_Sans_TC,
  Noto_Serif_TC,
} from "next/font/google";

/**
 * Remember to Prevent — Chapter 01
 * Shared next/font instances. Defined once here so the two root layouts
 * (src/app/(en) and src/app/(zh)) reuse the same instances — importing
 * next/font constructors separately in each layout would register two
 * parallel sets of the same faces. Same variables and settings as the
 * original single root layout.
 */

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

/** Body class combining every font CSS variable — identical to the previous single-layout body class. */
export const FONT_BODY_CLASS = `${fraunces.variable} ${newsreader.variable} ${inter.variable} ${notoSerifTC.variable} ${notoSansTC.variable} antialiased bg-background text-foreground`;
