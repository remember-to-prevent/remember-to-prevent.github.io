# Limitations · 已知限制

**Remember to Prevent — Chapter 01** · An honest list of what this project has **not** verified, cannot claim, or deliberately approximated. Nothing here is hidden on the live site: wherever a limitation touches user-facing content, it is disclosed there too (citation notes in the footer, the map disclosure, the chart footnotes).

Related: [`sources.md`](sources.md) (what was verified and how), [`methodology.md`](methodology.md) (how claims are qualified), [`image-rights.md`](image-rights.md).

---

## 1. Automated link verification has limits · 連結驗證的限制

Every external URL was checked with automated HTTP requests (`curl -L`, desktop user agent) on 2026-10-17, and the documentation agent independently re-checked all 41 unique citation URLs with identical results (see [`sources.md`](sources.md)). But automated checks are not a browser, and several institutions actively block them:

- **HTTP 403 (bot protection), canonical URLs, browser verification pending**: **iwm.org.uk** (Imperial War Museums), **awm.gov.au** (Australian War Memorial), **britannica.com** (all Encyclopædia Britannica article URLs), **ohchr.org** (OHCHR, including the Genocide Convention text page), and — among the Chapter 06 resource links — **unhcr.org** (UNHCR) and **cwgc.org** (Commonwealth War Graves Commission). These sites exist and their URLs are canonical; they simply refuse curl-like agents. Their citation records (12 of 52) say exactly this, and the live site footer shows the same note. **No one has opened these pages in a real browser from this environment** — that step remains pending. Deep paths on those domains are equally blocked, which is why IWM and AWM are cited at their canonical roots rather than topic pages.
- **Unreachable from the build sandbox (HTTP 000/timeouts)**: **encyclopedia.ushmm.org** (the USHMM's Holocaust Encyclopedia subdomain) and **web.archive.org**. Consequences: USHMM citations link to **www.ushmm.org/learn** (verified HTTP 200, confirmed to be the museum's learning hub) rather than deeper encyclopedia pages; and Wayback Machine snapshots could not be used to verify slug existence.
- **JavaScript-rendered pages**: **unesco.org** pages return HTTP 200 but render client-side, so their titles/content are invisible to curl. Two are Chapter 06 links; one of them (Media and Information Literacy) timed out entirely on the documentation agent's re-check, though the content agent's check the same day returned 200.
- **Deep-URL existence on blocked domains**: Britannica article URLs could not be fetched directly; their slugs were cross-checked via search-engine result URLs (documented in the worklog), and the pages remain pending browser verification.
- The **ICC website** (icc-cpi.int) serves a bot challenge; the Rome Statute is therefore referenced in prose with UN rule-of-law links used for the linked resources.
- A 200 response confirms reachability, and for key claims the specific facts were additionally confirmed in the returned page content (e.g., Somme day-one casualties, the Armistice terms text, the Righteous Among the Nations figure of 28,707 as of 1 January 2024). It does **not** equal sentence-by-sentence editorial re-verification of every cited page against every claim, and it says nothing about pages that refuse the check.

## 2. Casualty figures are scholarly estimates · 傷亡數字為學術估計

Every number on this site is an **attributed estimate** — a documented range (both endpoints sourced) where scholarship genuinely spans definitions, or a single attributed point estimate (rendered as an "≈" marker) where the cited institution gives one approximation. Ranges are honest *estimates*, not counts, and the underlying definitions genuinely differ across sources: military deaths may or may not include missing-in-action or died-of-wounds; civilian deaths may or may not include the 1918 influenza; "excess mortality" and "famine deaths" are different concepts; displacement counts people, not deaths. The 2026-10-26 audit remediation removed all artificially constructed intervals (e.g. the former 5.7–6 million range for Jewish victims, now ≈ 6 million) and attributed every endpoint to a named source. The site preserves these distinctions in per-series notes (see [`data-dictionary.md`](data-dictionary.md) § 2), states visibly that the series are **not additive**, and never aggregates them into a precise-sounding total — but readers should treat every figure as "a named source estimates approximately this," not as a count. The WWI blockade excess-death series is explicitly flagged **contested** in its own note.

## 3. The map uses modern boundaries · 地圖使用現代國界

The world map draws **modern state boundaries for orientation only** — disclosed on-screen with each snapshot, now labelled as an **approximate period** ("mid-1917" / "late 1942"). Historical borders differed; **Austria-Hungary and the Ottoman Empire are approximated by successor territories**; **colonial empires are not drawn**; a single modern country cannot represent a historical multi-national territory (the former "Yugoslavia proxy" entry is now Montenegro, labelled as part of Yugoslavia). The 2026-10-26 audit remediation reworked the WWII classification: **"Axis" marks alignment, "Allied" marks alignment (including governments-in-exile and colonial territories under Allied metropolitan authority), and "Occupied" marks territories under Axis military occupation whose pre-war alignment was Allied** — control is never portrayed as voluntary allegiance, and resistance is noted. The Soviet republics are shown on the Allied side, as parts of the USSR. The snapshots remain deliberately static — no boundaries animate, and none are invented. This is a teaching illustration, not a historical atlas.

## 4. Accessibility: designed-in, verified by automation — not certified · 無障礙設計

Accessibility was designed into the site: skip link, semantic landmarks and heading order, `aria-label`/`aria-pressed`/`aria-expanded` on all interactive controls, keyboard-operable timelines/charts/maps/action selector (including arrow-key radio navigation), full table alternatives for every chart and the map, screen-reader announcements for the One Minute timer, focus-visible styling, and `prefers-reduced-motion` support that disables all reveals and animations.

The site was then checked with an **automated headless browser** at desktop (**1280×800**) and mobile (**375×667**) viewports, in **both languages**, exercising the interactives (timelines, theater filters, map toggle, chart table toggles, action selector, One Minute controls). This is **not a formal WCAG 2.2 AA certification or audit**: no assistive-technology specialists (screen-reader users, switch users) tested the site, no commercial audit tool was run, and no claim of compliance is made anywhere on the site.

## 5. Environment adaptation · 環境調整

The editorial master prompt targeted a **static GitHub Pages site**. What exists in this repository is a **Next.js 16 App Router single-page scrollytelling application** running in the current sandbox — the architecture of the reference site (global-food-crisis.com, itself a Next.js publication), but not the prompt's literal static-file layout:

- Only the **`/` route** is part of the experience here. (A scaffold `/api` route returning a placeholder JSON exists in `src/app/api/route.ts` from the starting template; the site never calls it.)
- **GitHub Pages deployment has not been performed or tested.** It would require a static-export step (`output: 'export'`) documented — and explicitly marked **UNTESTED** — in [`README.md`](../README.md) § Deployment. The custom domain remember-to-prevent.com is likewise unconfigured; `metadataBase` in `src/app/layout.tsx` already points there in anticipation, so canonical/OG URLs reference a domain that does not yet serve this site.
- No `sitemap.xml` exists yet (`public/robots.txt` does, and allows all crawlers); there is no custom 404 page in the sandbox app (Next.js serves its default). Both are reasonable static-export follow-ups.

## 6. Typography · 字體

Latin typography uses variable fonts served through `next/font` (Fraunces, Newsreader, Inter). The CJK fonts (**Noto Serif TC, Noto Sans TC**) are likewise served through `next/font` as **self-hosted unicode-range slices with preload disabled** — they are downloaded from Google Fonts at **build** time and served from the site's own `/_next/static` assets, so the browser makes **no runtime requests to Google Fonts** (verified in the rendered document). The slices mean the browser fetches only the glyph ranges actually used. If the build-time font download were unavailable, the CSS falls back to system stacks (`"Georgia", "Times New Roman", serif` / `ui-sans-serif, system-ui, sans-serif`), which changes the look but never blocks content. The OG social card (`public/og-image.png`) was rasterized in the sandbox with DejaVu system fonts — not Fraunces/Newsreader, which are not installed there — a deliberate, disclosed trade-off (see [`image-rights.md`](image-rights.md)).

## 7. No historic photographs · 不使用歷史照片

**No third-party historical photographs or archival images appear anywhere on the site** — a deliberate rights-risk decision. All visuals are original: the poppy mark (inline SVG + favicon), the CSS grain texture, ECharts-rendered charts and map, hand-drawn inline SVG icons, and the OG card. Full register in [`image-rights.md`](image-rights.md). The trade-off is honest: the site carries no archival imagery, and therefore none of its evidentiary or emotional weight; documented testimony and cited text carry that role instead.

## 8. Other known gaps · 其他已知差距

- **First paint is English.** The server always renders English (the language store is client-side `localStorage`); a returning Traditional-Chinese reader sees English for the first paint and the switch applies immediately after hydration, along with `<html lang>` changing to `zh-TW`. No server-side language detection is attempted.
- **Scaffold leftovers.** The repository grew from a Next.js + Tailwind + shadcn scaffold: `package.json` still carries the scaffold name (`nextjs_tailwind_shadcn_ts`), unused Prisma/database tooling and scripts (`db:*`; the site uses no database), many unused shadcn/ui components, and an unused `public/logo.svg`. They are inert but present. `next.config.ts` also keeps the scaffold's `typescript.ignoreBuildErrors: true` — type health was instead verified explicitly (`tsc --noEmit` is clean for all site code; residual errors exist only in the scaffold's `examples/` and `skills/` folders).
- **Dev-only artifacts.** `dev.log` / `server.log` are created by the dev/start scripts and are not part of the site.
- **Verification environment.** All checks ran inside the build sandbox (automated browser, curl, TypeScript, ESLint). No testing on physical iOS/Android devices, no manual cross-browser matrix, no Lighthouse/Core Web Vitals report is on record.
