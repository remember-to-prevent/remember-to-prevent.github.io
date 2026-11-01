# Milestone — Bilingual SEO entry points, sitemap & Search Console readiness (2026-11-01)

> Factual record of the 2026-11-01 work. Completed items describe verified
> changes on the feature branch; anything not yet proven is stated as
> **Pending**. Nothing here claims Google indexing — indexing can only be
> observed after the owner completes the Search Console steps and Google
> processes the submitted sitemap.

## Objective

Give the two editorial languages real, crawlable, statically exported URLs —
`/en/` and `/zh-TW/` — with the full chapter narrative baked into each HTML
document in that language, plus a valid `/sitemap.xml`, an advertising
`/robots.txt`, per-language self-canonical URLs, reciprocal hreflang, valid
`<html lang>`, localized metadata, and a language switch that carries the
reader to the other language at the chapter they are actually reading —
while keeping the legacy `/` (and every existing `/#chN` link) working
exactly as before.

## Baseline

- **Commit:** `1a0443d6271ea9ad8584270f8485c125dd0d2027`
  ("Merge pull request #1 from remember-to-prevent/fix/rtp-public-release-sanitization-20261027").
- **Preexisting failing tests:** none — `bun run typecheck`, `bun run lint`
  and `bun run validate:data` (824 assertions) were green on the baseline.
- **Baseline production observations (read-only, 2026-11-01):**
  `https://remember-to-prevent.com/` returned 200; `/en/`, `/zh-TW/`,
  `/sitemap.xml` returned 404; `/robots.txt` returned 200 without a `Sitemap:`
  line; the live `<head>` emitted canonical/hreflang/Open Graph URLs against
  `https://remember-to-prevent.github.io/` (the outdated `metadataBase`) and
  pointed BOTH `hreflang="en"` and `hreflang="zh-TW"` at the same `/` URL.

## Implementation (feature branch `feature/bilingual-seo-sitemap-2026-11-01`)

- **Routes** — `src/app/(en)/page.tsx` (`/`), `src/app/(en)/en/page.tsx`
  (`/en/`), `src/app/(zh)/zh-TW/page.tsx` (`/zh-TW/`). Two root layouts
  (`(en)/layout.tsx`, `(zh)/layout.tsx`) so the export emits
  `<html lang="en">` and `<html lang="zh-TW">` respectively; both share the
  same font instances (`src/lib/fonts.ts`) and JSON-LD (`site-jsonld.tsx`).
  The page tree itself is one component, `src/components/rtp/site-app.tsx`,
  byte-identical to the former `src/app/page.tsx` body — no content, data,
  citation or chart changes.
- **Language locking** — `LanguageProvider` accepts `fixedLang`; `/en/` and
  `/zh-TW/` render their fixed language in the exported HTML and a saved
  `rtp.language` preference can never silently change what those URLs render.
  `/` keeps the original stored-preference behaviour (verified: storage `zh`
  → `/` renders Traditional Chinese; `/en/` still renders English).
- **Language switch** — the header switch now navigates to the other
  language route, preserving the chapter the reader is **actually viewing**
  (IntersectionObserver state), not a stale URL hash; at the hero it targets
  the top of the other language; the choice is persisted silently so `/`
  keeps honouring it without an in-place re-render flash; back/forward work
  natively (every switch is a history push).
- **Metadata policy** — single source of truth `src/lib/site-meta.ts`:
  `SITE_URL = https://remember-to-prevent.com`; `/en/` and `/zh-TW/` carry
  self-canonicals + reciprocal hreflang (en, zh-TW, x-default → `/en/`);
  `/` carries an explicit consolidation policy: canonical → `/en/`, no
  hreflang of its own (so it cannot contradict the cluster), og:url `/en/`,
  robots index/follow. `metadataBase` now resolves against the live custom
  domain, fixing the github.io canonical/OG bug observed in production.
- **Sitemap & robots** — `src/app/sitemap.ts` (force-static) generates
  `out/sitemap.xml` with exactly the two canonical language URLs and
  reciprocal `xhtml:link` hreflang annotations; `public/robots.txt` now
  advertises `Sitemap: https://remember-to-prevent.com/sitemap.xml`.
  `SITE_LASTMOD` is a fixed constant (`2026-11-01`) for deterministic builds.

## Evidence

- Export build (`NEXT_OUTPUT=export bun run build:export`): exit 0; routes
  `/`, `/en`, `/zh-TW`, `/sitemap.xml`, `/_not-found` all prerendered;
  `out/index.html` 618,448 B, `out/en/index.html` 619,845 B,
  `out/zh-TW/index.html` 609,485 B, `out/404.html` preserved, `out/sitemap.xml`
  842 B, `out/robots.txt` 287 B.
- Static HTML (no JS): `/en/` contains the English narrative and zero
  visible Traditional Chinese; `/zh-TW/` contains the Traditional Chinese
  narrative (56×「第一次世界大戰」 in the serialized payload, 32× visible)
  and zero visible English narrative; all six `#ch1…#ch6` anchors present in
  every document. (Known intentional exception, unchanged from the current
  design: the footer motto line is English in both languages.)
- Head verification on all three documents: canonical/hreflang/og:url values
  exactly as the policy table above; `<html lang>` correct per URL.
- Browser regression (agent-browser, Chromium): direct loads, share-style
  deep links (`/#ch5`, `/zh-TW/#ch3`), top-of-page switch (`/en/` →
  `/zh-TW/` at scrollY 0), chapter-preserving switch (ch4 on `/zh-TW/` →
  `/en/#ch4` with ch4 in view at viewport top ≈ 263 px), browser back
  returning to the previous language page, stored-preference behaviour on
  `/`, timeline event expansion, three chart↔table↔chart cycles (5/11/17
  rows; canvas repaint verified), One Minute start/pause (controlled
  freeze test), action-pathway switching, citation popover, map canvas
  painting with the zh legend and 39-country select, mobile 375×667 with
  zero horizontal overflow, and **zero console or page errors** on every
  visited URL. VLM screenshot review passed for the EN hero, the zh-TW
  Chapter 04 view, and the mobile zh-TW hero.
- The same regression was repeated against the sandbox dev server after the
  workspace was synced to this branch (all routes 200; identical metadata;
  language switch `/en/` → `/zh-TW/#ch3` with ch3 in view; zero console
  errors).

## Security & secret hygiene

The branch contains no `.env`, no database files, no logs, no machine-local
paths and no credentials (the repository was already sanitized in the
2026-10-27 release; this branch only adds/edits site source, docs and
`public/robots.txt`). No personal information is introduced. The language
preference remains a `localStorage`-only value that is never transmitted.

## Deployment / PR status — **Pending (owner action)**

The feature branch was prepared and verified locally; it has **not** been
pushed, and no pull request has been opened. Owner steps: push
`feature/bilingual-seo-sitemap-2026-11-01` to the repository, open the PR
against `main` (the PR-validation workflow runs typecheck · lint · data ·
static export on the PR), review the diff, and merge only after review.
Production changes when the merge reaches `main` and `deploy.yml` runs.

## Search Console status — **Pending (owner action)**

1. Add/verify the `remember-to-prevent.com` Domain property via DNS TXT
   record (or confirm existing ownership).
2. After deployment, confirm `https://remember-to-prevent.com/sitemap.xml`
   and `/robots.txt` respond live.
3. Submit `sitemap.xml` under Indexing → Sitemaps.
4. URL-inspect `/`, `/en/` and `/zh-TW/`; request indexing for the two
   canonical language URLs.
5. Re-check indexing state after Google processes them. Submission
   acceptance is **not** indexing — report the observed state, not an
   assumption.

## Known limitations

- `/` and `/en/` intentionally render the same English content (legacy
  compatibility); `/` consolidates into `/en/` via canonical so Google is
  expected to show `/en/`, but the timing of that consolidation is Google's.
- The og:image is shared by both languages (unchanged asset).
- The footer motto remains English in both languages (pre-existing design,
  deliberately untouched).
- Chapter anchors rely on the browser's native anchor scrolling; minor
  post-load reflow can offset the final position, as on the current site.

## Rollback plan

Revert the merge commit on `main` (or close the PR before merge). The change
is additive at the route level — the legacy `/` keeps functioning at every
point, so a revert restores the exact pre-2026-11-01 URL surface with no
data migration.

## Follow-up (not in this change)

- After indexing stabilizes, review Search Console coverage for `/`
  (consolidated) vs `/en/` and adjust the policy only with evidence.
- Consider localized og-image variants if social sharing in zh-TW matters.
