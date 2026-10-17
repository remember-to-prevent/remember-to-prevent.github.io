# Image Rights Register · 影像權利清單

**Remember to Prevent — Chapter 01** · Register of every visual asset on the site, its origin, and its legal basis.

## The headline fact

**No third-party historical photographs or archival images are used anywhere on this site.** Not in the hero, not in the chapters, not in the timelines, charts, map, action selector, or footer. This was a deliberate decision made at project start: the rights status of archival war photography is genuinely difficult to clear item by item, and the project's editorial standard forbids using an asset whose license is unverified. Every visual the visitor sees was **created for this project** (or rendered live from code and public-domain boundary data). The trade-off is disclosed in [`limitations.md`](limitations.md) § 7: the site deliberately carries no archival imagery.

The site's independence statement (footer) applies to visuals as well: this project is **not affiliated with, endorsed by, or an official publication of RSL, the Australian War Memorial, Imperial War Museums, the US Holocaust Memorial Museum, Yad Vashem, the United Nations, or any other organization referenced**. No RSL or other official campaign art, logos, or slogans are reproduced, and nothing here implies endorsement.

## Register of original visual assets

| # | Asset (local filename) | What it is | Creator / origin | Archive ID / source URL | Legal basis | Credit required |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `public/favicon.svg` (938 B) | Site favicon: original stylized poppy mark on a charcoal tile with a bronze ring | Original work created for this project | n/a — not an archival asset | Original; project license pending (see below) | None |
| 2 | `public/og-image.png` (1200×630, ~58 KB) | Open Graph / Twitter social card: charcoal field, bronze hairline frames, poppy mark, project title | Rendered from an original hand-composed SVG via `sharp`; script: `scripts/make-og-image.ts` (reproducible: `bun scripts/make-og-image.ts`) | n/a | Original; project license pending. Note: rasterized with the sandbox's DejaVu system fonts (Fraunces/Newsreader are not installed there) — see [`limitations.md`](limitations.md) § 6 | None |
| 3 | `src/components/rtp/poppy.tsx` — `PoppyMark` | Inline SVG poppy mark component (four rotated petals, charcoal center, bronze stamens), reused in the header, hero, footer, and One Minute panel | Original work created for this project | n/a | Original; project license pending | None |
| 4 | `src/app/globals.css` — `.rtp-grain` | Archival-paper grain: a data-URI SVG `feTurbulence` fractal-noise rect at 5.5% opacity, applied as a `::before` overlay | Original CSS/SVG, written for this project | n/a | Original; project license pending | None |
| 5 | `src/components/rtp/range-chart.tsx` + `src/content/data/casualties.ts` | The three Chapter 04 range-bar charts (casualties, holocaust, hunger) — live ECharts renders of the site's own typed datasets | Original visualization code + original compiled data; rendered by Apache ECharts | Data sources cited per series (see [`sources.md`](sources.md)) | Original code and layout; ECharts is Apache-2.0; the underlying figures are scholarly estimates quoted under ordinary citation/fair-quotation practice | Chart footnotes name the source publishers |
| 6 | `src/components/rtp/theaters-map.tsx` + `src/content/data/theaters.ts` | The Chapter 02 world map — live ECharts map render colored by the project's own participant dataset | Original visualization code and participant dataset | Boundary geometry: `world-atlas` npm package (countries-110m), derived from **Natural Earth** data (public domain); bundled locally, no runtime CDN | Natural Earth data is public domain; the rendering, colors, and snapshot definitions are original | None (dataset is public domain; the site's snapshot disclosures accompany the map) |
| 7 | Hand-drawn inline SVG icons | Scroll-cue arrow (hero), pointer/tap icon (range chart), plus/close icon (pattern cards), chevron (timeline) — each a few SVG path elements drawn for this project | Original works created for this project | n/a | Original; project license pending | None |
| 8 | Typographic ornaments | `❧` fleuron and `→` arrows are Unicode characters in the site's own typography, not images | Standard Unicode glyphs | n/a | n/a (characters, not assets) | None |

Not part of the site's visuals, for the record: `public/logo.svg` is a **pre-existing scaffold asset from the starting template, unused by this site** (nothing references it); `public/robots.txt` is a plain text crawler file.

## What is deliberately absent

- **No historic photographs** (rights risk; none were licensed or cleared).
- **No institutional logos, badges, campaign art, or slogans** — including no reproduction of the RSL's poppy appeal artwork. The site's poppy is a generic, original, stylized rendering of a remembrance symbol; it is not any organization's trademarked artwork, and no affiliation or endorsement is implied.
- **No hotlinking or scraping** of any third-party image asset.
- **No AI-generated photorealistic "historical" imagery** that could be mistaken for archival material.

## Typography (adjacent to visuals)

Latin display/editorial/UI faces — Fraunces, Newsreader, Inter — and CJK faces — Noto Serif TC, Noto Sans TC — are open-source fonts (SIL Open Font License) served self-hosted through `next/font` (downloaded from Google Fonts at build time) with `unicode-range` slicing; see [`limitations.md`](limitations.md) § 6 for loading behavior and fallbacks.

## License status

**Pending — intentionally no license has been attached.** The project owner has not yet confirmed a code license (the master prompt's default suggestion, MIT, requires explicit owner confirmation, which has not been given). Therefore:

- No `LICENSE` file exists in this repository, and none should be added until the owner decides.
- All original graphics in the register above were created for this project and their licensing follows the project's eventual decision; nothing on this site labels site content as CC0/CC BY/public domain.
- Third-party components remain under their own licenses (Next.js/React/ECharts/shadcn-style components etc.) and are not re-licensed by this project.
- Institutional names, archival materials, and data cited on the site remain the property of their respective rights holders, and are cited with attribution (footer, [`sources.md`](sources.md)).
