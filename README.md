# Remember to Prevent — Chapter 01

**銘記歷史，防止重演 — 第一章**

> AN INDEPENDENT HISTORICAL EDUCATION PROJECT
>
> # REMEMBER TO PREVENT
>
> CHAPTER 01
>
> **The Past Cannot Be Changed. The Future Is Still Ours to Shape.**
>
> Two World Wars. Lessons for Humanity. Actions for Tomorrow.
>
> REMEMBER → REFLECT → ACT

A bilingual (English / 繁體中文) historical education site about the First and Second World Wars: how they unfolded, what made their human cost possible, and what people can realistically do today. The reader moves through **REMEMBER** (chapters 01–04: why remember, how each war escalated, what made catastrophe possible, the human cost) → **REFLECT** (chapter 05: warning-sign patterns, One Minute to Remember) → **ACT** (chapter 06: realistic action pathways). Chapter 01 is the first installment of the broader *Remember to Prevent* project; the six numbered sections are chapters *within* this page.

Everything is evidence-based: every major claim carries a citation near where it appears, casualty figures are shown as documented ranges with definitions preserved, and historical fact is visually labelled apart from present-day reflection. Full editorial standards: [`docs/methodology.md`](docs/methodology.md).

---

## Live preview · 本地預覽

```bash
bun run dev        # starts Next.js dev server on port 3000
```

After starting the dev server, open `http://localhost:3000` in your browser. For production-style serving, see Commands below.

## Tech stack

- **Next.js 16 (App Router)** single-page scrollytelling application; TypeScript 5. **Dual-mode build:** `output: "standalone"` for the sandbox dev/preview runtime, `output: "export"` (static) for GitHub Pages — selected by the `NEXT_OUTPUT` environment variable in `next.config.ts`.
- **Tailwind CSS 4** with a custom editorial palette (charcoal `#211E1A` · archival paper `#F4EFE5` · muted bronze `#96774C` · restrained poppy `#A93F2B`) + **shadcn/ui** component primitives (button, popover, toast — the scaffolding for a few interactive controls).
- **Apache ECharts 6**, tree-shaken (`echarts/core` + `BarChart`, `CustomChart`, `MapChart` + grid/tooltip/legend/visual-map/geo/graphic components, canvas renderer), loaded lazily and SSR-safely through `src/components/rtp/use-echart.ts`.
- **world-atlas `countries-110m` + topojson-client** — map boundary data is bundled locally at build time (Natural Earth–derived, public domain); **no runtime CDN dependency**.
- **next/font** — Fraunces (display), Newsreader (editorial serif), Inter (UI), Noto Serif TC + Noto Sans TC (繁體中文; unicode-range sliced, preload disabled, system fallbacks).
- No database, no analytics, no tracking, no cookies — see Privacy below.

## Structure

```
src/app/page.tsx              assembles the whole page: hero → 6 chapters with
                              interactives → footer (the only user-visible route is /)
src/app/layout.tsx            fonts, metadata (canonical/OG/Twitter/robots), JSON-LD, LanguageProvider
src/components/rtp/
  site-header.tsx             sticky header: wordmark, always-visible scrollable chapter nav, EN/繁中 switch
  hero.tsx                    the masthead with the required hero wording
  chapter.tsx                 chapter shell: question, sections, labelled callouts, source lists
  timeline.tsx                interactive vertical timelines (filterable, expandable, keyboard/touch)
  range-chart.tsx             min–max range-bar charts + accessible table alternative
  theaters-map.tsx            world map snapshots (modern borders, on-screen disclosure, table alternative)
  one-minute.tsx              One Minute to Remember — user-initiated 60-second reflection
  pattern-cards.tsx           Chapter 05 pattern explorer (documented pattern → questions for today)
  action-selector.tsx         Chapter 06 pathway selector (radio group, steps, links, honest limits)
  site-footer.tsx             transparency footer: independence, all sources, license-pending, privacy
  reveal.tsx                  progressive scroll reveal (reduced-motion safe, no-JS safe)
  citation.tsx                superscript citation markers with accessible popovers + source lists
  poppy.tsx                   the original poppy mark (inline SVG)
  use-echart.ts               lazy, SSR-safe ECharts hook (tree-shaken imports, ResizeObserver)
src/content/
  types.ts                    the content contract (ChapterContent, TimelineEvent, RangeSeries,
                              ChartDataset, ActionPathway, PatternCard, MapSnapshot, Citation, Callout…)
  chapters/ch1.ts … ch6.ts    the six bilingual chapters
  data/timeline-wwi.ts        17 WWI timeline events + citation registry
  data/timeline-wwii.ts       17 WWII timeline events + citation registry
  data/casualties.ts          3 datasets (casualties 4 series · holocaust 5 series · hunger 5 series)
  data/theaters.ts            the two map snapshots (WWI mid-1917 · WWII late-1942)
  data/patterns.ts            6 pattern cards
  data/actions.ts             6 action pathways, 20 verified resource links
  data/one-minute.ts          One Minute to Remember copy
  ui.ts                       bilingual UI chrome strings
scripts/make-og-image.ts      regenerates public/og-image.png from an original SVG (bun scripts/make-og-image.ts)
.github/workflows/deploy.yml  GitHub Actions: lint → static export (verified) → Pages deploy
.github/workflows/pr-validation.yml  GitHub Actions: PR-only validation (typecheck · lint · data · export) — never deploys
docs/                         sources · methodology · data-dictionary · limitations · image-rights
public/                       favicon.svg · og-image.png · robots.txt
```

> The scaffold's unused `/api` route (`src/app/api/route.ts`, a Hello-World handler nothing on the site ever called) was removed because API routes are incompatible with `output: "export"`. The site is fully client-side; no functionality was lost.

## Content pipeline

All narrative content is authored as **typed TypeScript data** — English + Traditional Chinese side by side in `Localized` objects, enforced by `src/content/types.ts`. Citations are embedded per chapter and per dataset, each with publisher, bilingual title, URL, kind, access date (2026-10-17), and an honest verification note (HTTP 200 verified, or 403-bot-blocked canonical with browser verification pending). The notes render wherever the citations do: popovers, chapter source lists, and the footer registry. Content inventory: [`docs/sources.md`](docs/sources.md); data structures: [`docs/data-dictionary.md`](docs/data-dictionary.md).

**Privacy statement (accurate as audited).** The site sets no cookies, runs no analytics, and includes no third-party embeds or trackers (audited: no tracker/analytics keywords in the rendered document). Fonts are **self-hosted** via `next/font` (downloaded from Google Fonts at build time, served from `/_next/static` — the browser makes no requests to Google Fonts at runtime), so the only external URLs in the document are the cited sources and resource links a reader may choose to click. The language preference is stored in `localStorage` (`rtp.language`) on the reader's device only and is never transmitted.

## Commands

```bash
bun run dev        # dev server on port 3000 (tee dev.log)
bun run lint       # eslint .
bun run typecheck  # tsc --noEmit (clean)
bun run validate:data  # historical-data integrity assertions (bilingual fields, citations, map codes)
bun scripts/make-og-image.ts   # regenerate the OG image
bun run build      # production build (standalone output, sandbox runtime)
NEXT_OUTPUT=export bun run build:export   # static export → out/ (GitHub Pages build)
bun run start      # serve the standalone production build
```

`db:push` / `db:generate` / `db:migrate` / `db:reset` exist in `package.json` from the scaffold — **this site does not use a database in v1**; those scripts are inert here.

## Deployment

**GitHub Pages via GitHub Actions — implemented and the build verified locally; the live run happens when the repository owner pushes to `main`.**

- **Dual-mode `next.config.ts`** — the default build keeps `output: "standalone"` (the sandbox dev/preview runtime); when CI sets `NEXT_OUTPUT=export`, the same source builds as a fully static site into `out/`. `NEXT_PUBLIC_BASE_PATH` is also honoured for project-site repositories; this repository is an organization root site (`remember-to-prevent.github.io`), so it deploys at `/` with no base path.
- **`.github/workflows/deploy.yml`** — on every push to `main` (and via manual `workflow_dispatch`): `bun install --frozen-lockfile` → `bun run lint` → static export (`NEXT_OUTPUT=export bun run build:export`) → verification that `out/index.html`, the `out/_next` build assets and the public files exist → `actions/upload-pages-artifact` → `actions/deploy-pages`, with the official Pages permissions and a `pages` concurrency group.
- **Verified in this environment** (2026-10-17): the export build was run exactly as CI runs it, on a fresh dependency install from `bun.lock`; `out/index.html` (560 KB of prerendered content), 271 build assets, all fonts self-hosted; the exported site was served locally and browser-tested (language switching, chart/table toggle cycles, map toggle, navigation anchors, zero console errors). The **GitHub Actions run itself and the live GitHub Pages URL can only be verified after the owner pushes the repository** — see the workflow's own artifact-verification step, which fails the build if `out/index.html` is missing, so a green run means the real site (never a README-only deployment) was published.

**One-time GitHub setup (repository owner):** Repository → Settings → Pages → Build and deployment → Source → **GitHub Actions**. Then push to `main`. The site should appear at `https://remember-to-prevent.github.io/` within a few minutes of the run completing. If Pages previously served the README (old branch-based source), this settings change plus the new workflow replaces that behaviour — no `docs/` folder or branch artifact is used.

**Custom domain (remember-to-prevent.com) — future step, not yet active.** `metadataBase` currently points at the live default URL (`https://remember-to-prevent.github.io/`) so canonical/OG URLs resolve correctly today. When the domain is ready: in the DNS provider point the apex `A` records at GitHub's Pages servers (or a `CNAME` for a subdomain), then set the custom domain in Repository → Settings → Pages, and change the single `metadataBase` line in `src/app/layout.tsx` to `https://remember-to-prevent.com/`. No DNS changes have been made by this project.

## Quality verification — what was actually checked

- **ESLint clean** across the repository (`bun run lint` → exit 0).
- **TypeScript clean** (`bun run typecheck` → exit 0; the scaffold's `examples/` platform demos were removed from the public source in the 2026-10-27 sanitization, eliminating their unresolved `socket.io` imports).
- **Chart ↔ table switching fixed and verified**: the chart containers now stay mounted (hidden via CSS while the table is shown), so the ECharts instance is never orphaned from its DOM node; the hook's ResizeObserver repaints the canvas when the chart view becomes active again. All three Chapter 04 range charts and the Chapter 02 world map were driven through **three full chart → table → chart cycles each** (plus map WWI ↔ WWII switching) on both the dev preview and the exported static site, with programmatic verification that the canvas is visible and fully repainted after every switch — including after live viewport resizes (desktop 1280 → mobile 375) and on fresh mobile page loads.
- **Traditional Chinese main heading** 「銘記歷史／防止重演」 verified on desktop (72 px display, 2 lines) and mobile 375 px (343 px wide, no overflow, no horizontal document scroll), with the English heading "Remember to Prevent" unchanged; the header wordmark and JSON-LD alternate name were updated to match, and the language switch + `localStorage` persistence were re-verified.
- **Static export build verified end-to-end**: fresh `bun install --frozen-lockfile` + `NEXT_OUTPUT=export bun run build:export` (exactly what GitHub Actions runs) → `out/index.html`, 271 `_next` assets, self-hosted fonts, root-relative asset paths; the exported site was served locally and browser-tested with zero console entries and zero page errors.
- **Automated browser verification** of the running site at desktop (1280×800) and mobile (375×667) viewports, in **both languages**, exercising every interactive (timelines and filters, map toggle and table, chart tooltips and table alternatives, pattern cards, action selector, One Minute start/pause/resume/restart/skip).
- **Link verification**: every citation URL and action link checked by automated HTTP requests on 2026-10-17, with an independent re-check of all 41 unique citation URLs during documentation — statuses honestly recorded per record (see [`docs/sources.md`](docs/sources.md)).
- Scope and limits of all of the above — what automation cannot tell us, which institutions block automated checks, and why no WCAG certification is claimed — are documented in [`docs/limitations.md`](docs/limitations.md).

## Documentation set

| File | Contents |
| --- | --- |
| [`docs/sources.md`](docs/sources.md) | Complete source inventory: all 52 citation records (40 HTTP-200-verified, 12 canonical-403 pending browser verification), organized by publisher, plus the Chapter 06 link inventory. |
| [`docs/methodology.md`](docs/methodology.md) | Sourcing hierarchy, ranges-only casualty policy, fact/reflection labelling, quote policy, contested-topic handling, map methodology, bilingual policy. |
| [`docs/data-dictionary.md`](docs/data-dictionary.md) | The `types.ts` contracts, every dataset and series with units and citation-id mapping, chart rendering semantics. |
| [`docs/limitations.md`](docs/limitations.md) | Honest limits: link-verification gaps, estimate ranges, modern map borders, accessibility scope, environment adaptation, typography, no archival photography. |
| [`docs/image-rights.md`](docs/image-rights.md) | Register of original visual assets; confirmation that no third-party historical imagery is used; license status. |

## Credits & disclaimer

This is an **independent, non-commercial historical education project**. It is not affiliated with, endorsed by, or an official publication of RSL, the Australian War Memorial, Imperial War Museums, the United States Holocaust Memorial Museum, Yad Vashem, the United Nations, or any other organization referenced. Institutional names, archival materials, and data remain the property of their respective rights holders and are cited with attribution — the full list is in [`docs/sources.md`](docs/sources.md) and in the site footer.

No third-party historical photographs are used; all graphics are original works created for this project ([`docs/image-rights.md`](docs/image-rights.md)). Historical casualty figures are scholarly estimates presented as ranges with their definitions preserved; nothing on this site should be read as moral equivalence between aggressors and victims.

**License: pending.** No license has been attached to this repository; the choice awaits confirmation by the project owner. Do not add one on the project's behalf.
