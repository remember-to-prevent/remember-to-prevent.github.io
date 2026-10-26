# Data Dictionary · 資料字典

**Remember to Prevent — Chapter 01** · The typed content contracts (`src/content/types.ts`), every dataset file, and the rendering semantics of the interactive visualizations. This documents what **is** — extracted from the actual source files, not from intentions.

Related: [`sources.md`](sources.md) (the citation records behind every `citationIds` field), [`methodology.md`](methodology.md) (why the contracts look like this).

---

## 1. Content model — `src/content/types.ts`

All content is authored as typed TypeScript data. The compiler enforces the contract; the conventions in the file header state the editorial rules: `Localized` carries English (`en`) and Traditional Chinese (`zh`) text; numbers that vary across scholarship are expressed either as attributed ranges (both endpoints sourced) or as single attributed point estimates (`point`) with notes — endpoints are never invented to force a range; every dataset row cites its sources via `citationIds`; citations use access date `"2026-10-17"` (original) or `"2026-10-27"` (remediation additions).

### Primitives

| Type | Values / fields | Meaning |
| --- | --- | --- |
| `Lang` | `"en" \| "zh"` | Active language. English is the default; `zh` is 繁體中文. |
| `Localized` | `{ en: string; zh: string }` | Every human-readable string in both languages. |
| `CitationKind` | `"primary" \| "institutional" \| "scholarly" \| "reference"` | `primary` — archival document / treaty text / testimony; `institutional` — museum, memorial, archive, Red Cross, UN; `scholarly` — peer-reviewed or academic-press work; `reference` — established encyclopedia / statistical reference. |
| `CalloutKind` | `"fact" \| "reflection" \| "testimony" \| "methodology"` | The fact-vs-reflection labelling system (labels rendered: "Historical fact" / "Present-day reflection" / "Documented testimony" / "On the numbers"). |
| `Theater` | `"europe" \| "africa" \| "middle-east" \| "asia-pacific" \| "americas" \| "atlantic" \| "global"` | Theater-of-war tag for timeline events; drives the timeline filter chips. |

### `Citation`

| Field | Type | Meaning |
| --- | --- | --- |
| `id` | `string` | Unique kebab-case id, prefixed by authoring scope (`a-`, `b1-`, `b2-`, `b3-`, `c-`). Referenced by `citationIds` arrays. |
| `publisher` | `string` | Publisher / institution / author, in its own language (not translated). |
| `title` | `Localized` | Title of the specific page/work actually referenced. |
| `url` | `string` | Direct URL to the specific resource (not a bare homepage when avoidable). |
| `kind` | `CitationKind` | See above. |
| `accessDate` | `string` | Date accessed/verified — `"2026-10-17"` for every record. |
| `note?` | `Localized` | Honest verification note, e.g. "Verified HTTP 200 on 2026-10-17." or "Automated check blocked (HTTP 403, bot protection); canonical institutional URL; browser verification pending." Rendered in the citation popover and footer. |

### `Callout`

| Field | Type | Meaning |
| --- | --- | --- |
| `kind` | `CalloutKind` | Determines the visible label and styling. |
| `text` | `Localized` | The callout body (testimony text, fact statement, reflection, or methodology explanation). |
| `attribution?` | `Localized` | Who said it (testimony) or which source frames it. |
| `citationIds?` | `string[]` | Citations supporting the callout; ids already cited at section level are suppressed to avoid duplicate markers. |

### `ChapterSection` and `ChapterContent`

| Field | Type | Meaning |
| --- | --- | --- |
| `ChapterSection.id` | `string` | Kebab-case, unique within the chapter; used in DOM ids. |
| `ChapterSection.heading` | `Localized` | Section heading (renders as `<h3>`). |
| `ChapterSection.paragraphs` | `Localized[]` | 2–4 paragraphs, each 2–5 sentences (the contract's stated limit). |
| `ChapterSection.callout?` | `Callout` | Optional labelled callout after the paragraphs. |
| `ChapterSection.citationIds` | `string[]` | Rendered as superscript markers on the last paragraph. |
| `ChapterContent.id` | `"ch1"…"ch6"` | Also the anchor id (`#ch1`…). |
| `ChapterContent.navLabel` | `Localized` | Short label for the sticky chapter nav (≤ 14 chars EN). |
| `ChapterContent.number` | `string` | `"01"` … `"06"`. |
| `ChapterContent.title` / `question` | `Localized` | Chapter title (`<h2>`) and its guiding question (italic lead-in). |
| `ChapterContent.lead` | `Localized[]` | 2–3 lead paragraphs. |
| `ChapterContent.sections` | `ChapterSection[]` | The body sections. |
| `ChapterContent.citations` | `Citation[]` | This chapter's own registry; section/callout ids resolve here. |

### `TimelineEvent` and `TimelineData`

| Field | Type | Meaning |
| --- | --- | --- |
| `TimelineEvent.id` | `string` | Kebab-case unique id (e.g. `"sarajevo-assassination"`). |
| `TimelineEvent.date` | `string` | ISO-ish sort date `"1914-06-28"`; the component sorts on it. |
| `TimelineEvent.dateLabel` | `Localized` | Human display date ("28 June 1914" / "1914年6月28日"). |
| `TimelineEvent.title` / `place` / `summary` | `Localized` | List-row content; summary is 1–2 sentences. |
| `TimelineEvent.detail` | `Localized` | 3–6 sentences shown when the event is expanded. |
| `TimelineEvent.theater` | `Theater` | Filter tag, rendered as a chip when expanded. |
| `TimelineEvent.citationIds` | `string[]` | Citations for the event; resolve in `TimelineData.citations`. |
| `TimelineData.id` | `"wwi" \| "wwii"` | Which war. |
| `TimelineData.title` / `subtitle` | `Localized` | Panel heading and subtitle. |
| `TimelineData.events` / `citations` | arrays | The events and the file's own citation registry. |

### `RangeSeries` and `ChartDataset`

| Field | Type | Meaning |
| --- | --- | --- |
| `RangeSeries.id` | `string` | Kebab-case series id (e.g. `"wwi-military"`). |
| `RangeSeries.label` | `Localized` | Category label on the y-axis, tooltips, and table. |
| `RangeSeries.min` / `max` | `number` | **Attributed estimate range** — the bar spans exactly this, both endpoints sourced. Unit: millions unless stated. Mutually exclusive with `point`. |
| `RangeSeries.point` | `number` | **Single attributed approximate point estimate** (millions) — rendered as a thin ≈ marker, used when the source gives one approximation rather than a defensible interval. Mutually exclusive with `min`/`max`. |
| `RangeSeries.note` | `Localized` | **Required** definition / scope / caveat when estimates differ (and they always differ). Rendered in the selection panel and the accessible table. |
| `RangeSeries.citationIds` | `string[]` | Resolves in `ChartDataset.citations`. |
| `ChartDataset.id` / `title` / `subtitle` | — | Dataset identity and chart caption. |
| `ChartDataset.unit` | `Localized` | e.g. "millions of deaths (attributed estimates) / 死亡人數（百萬；具名來源估計）". |
| `ChartDataset.series` / `citations` | arrays | The range series and the dataset's citation registry. |

### `ActionLink`, `ActionPathway`, `ActionContent` (Chapter 06)

| Field | Type | Meaning |
| --- | --- | --- |
| `ActionLink.label` / `url` / `publisher` | — | One reputable external resource; rendered with `rel="noopener noreferrer"`. |
| `ActionPathway.id` | `string` | One of: `learn`, `challenge-misinformation`, `support-humanitarian`, `volunteer`, `civic`, `preserve-memory`. |
| `ActionPathway.title` / `intro` | `Localized` | Pathway name and 2–3 sentence framing. |
| `ActionPathway.steps` | `Localized[]` | 5 practical, proportionate steps each. |
| `ActionPathway.links` | `ActionLink[]` | 2–4 verified links per pathway (20 in total). |
| `ActionPathway.limits` | `Localized` | Honest statement of what this action will **not** achieve. |
| `ActionContent.intro` / `shareNote` | `Localized` | Selector intro and the responsible-circulation note. |

### `OneMinuteContent` (One Minute to Remember)

| Field | Meaning |
| --- | --- |
| `title`, `invitation` | Panel title and a brief, non-guilt-based invitation. |
| `startLabel`, `pauseLabel`, `resumeLabel`, `restartLabel`, `skipLabel`, `remainingLabel` | Control labels (all bilingual). |
| `aboutTradition` | 3 paragraphs: the Armistice origin (11 November, 11:00), how traditions vary by country/institution, and this project's independence (explicitly not affiliated with any remembrance organization; silence itself does not prevent conflict). |
| `completionMessage` | Gentle bridge to Chapter 06 after completion or skip. |
| `a11y.started / paused / resumed / complete / skipped / secondsRemaining` | Screen-reader announcement strings; the timer announces politely at 30 s and 10 s marks only. |

### `PatternCard` (Chapter 05 pattern explorer)

| Field | Meaning |
| --- | --- |
| `id` | One of: `propaganda`, `dehumanization`, `scapegoating`, `institutional-erosion`, `escalating-exclusion`, `indifference`. |
| `title` | Card title (bilingual). |
| `historical` | What the pattern looked like in 1914–1945 — documented, 2–3 sentences with one concrete example. |
| `today` | Careful, non-equivalence **questions** to ask about the present (questions only, never accusations of equivalence). |

### `MapParticipant` and `MapSnapshot` (theaters map)

| Field | Type | Meaning |
| --- | --- | --- |
| `MapParticipant.id` | `string` | ISO 3166-1 **numeric** id as used by `world-atlas` countries-110m (e.g. `"840"` = USA); mapped to the topology's feature ids at render time. |
| `MapParticipant.side` | `"allies" \| "central" \| "axis" \| "occupied" \| "neutral"` | Alignment/status of the governing authority at the snapshot period: `allies`/`central`/`axis` = alignment (incl. governments-in-exile and colonial territories under Allied metropolitan authority); `occupied` = under Axis military occupation whose pre-war alignment was Allied (control, not allegiance — resistance noted in the disclosure); `neutral` = formally neutral. |
| `MapParticipant.name` / `note` | `Localized` | Tooltip name and one-line status note (e.g. "Entered the war in April 1917."). |
| `MapSnapshot.id` | `"wwi" \| "wwii"` | Which snapshot. |
| `MapSnapshot.dateLabel` | `Localized` | The dated snapshot label shown above the map. |
| `MapSnapshot.participants` | `MapParticipant[]` | The participants list (also rendered as the accessible table). |
| `MapSnapshot.disclosure` | `Localized` | The modern-borders disclosure rendered on-screen with the map. |

---

## 2. Dataset files · 資料集

All dataset files live in `src/content/data/`. Counts below were extracted from the files themselves. Citation ids resolve within each file's own registry (see [`sources.md`](sources.md) for the full records).

**Shared registry note.** `casualties.ts` defines the fourteen `b2-*` citation constants as named exports and uses them for the three datasets' registries (3 + 2 + 5 = 10 records); `ch4.ts` imports the same constants into its chapter registry. Record *instances* are therefore shared between Chapter 04 and the charts — which is why per-file counts sum to more than the site-wide unique total of 52 citation records (the footer deduplicates by id; see [`sources.md`](sources.md) § "Duplicate-URL records").

### `src/content/data/timeline-wwi.ts` — WWI timeline

**Interactive Timeline: 1914–1918** / 互動時間軸：1914–1918 — subtitle: *"Select an event to read its context and sources."*. **17 events**, sorted chronologically by ISO date. Citation registry: 7 records (ids below resolve here; see [`sources.md`](sources.md) for the full records).

| # | id | date | Title (EN) | Theater | citation ids |
| --- | --- | --- | --- | --- | --- |
| 1 | `sarajevo` | 1914-06-28 | Assassination at Sarajevo | europe | `a-britannica-wwi`, `a-iwm-wwi` |
| 2 | `july-ultimatum` | 1914-07-23 | Austria-Hungary's ultimatum to Serbia | europe | `a-britannica-wwi`, `a-iwm-wwi` |
| 3 | `august-declarations` | 1914-08-01 | The war of declarations | europe | `a-britannica-wwi`, `a-iwm-wwi` |
| 4 | `marne` | 1914-09-06 | First Battle of the Marne | europe | `a-britannica-wwi`, `a-iwm-wwi` |
| 5 | `tsingtao` | 1914-11-07 | Fall of Tsingtao | asia-pacific | `a-britannica-wwi`, `a-iwm-wwi` |
| 6 | `africa-campaigns` | 1914-08-26 | The war reaches Africa | africa | `a-britannica-wwi`, `a-iwm-wwi` |
| 7 | `gas-ypres` | 1915-04-22 | First large-scale gas attack | europe | `a-iwm-wwi`, `a-britannica-wwi` |
| 8 | `armenian-genocide` | 1915-04-24 | The Armenian genocide begins | middle-east | `a-britannica-armenian-genocide`, `a-britannica-wwi` |
| 9 | `gallipoli` | 1915-04-25 | Gallipoli landings | middle-east | `a-awm-wwi`, `a-britannica-wwi` |
| 10 | `lusitania` | 1915-05-07 | Sinking of the Lusitania | atlantic | `a-worldwar-lusitania`, `a-britannica-wwi` |
| 11 | `verdun` | 1916-02-21 | Battle of Verdun begins | europe | `a-britannica-wwi`, `a-iwm-wwi` |
| 12 | `somme` | 1916-07-01 | First day of the Somme | europe | `a-nam-somme`, `a-iwm-wwi` |
| 13 | `us-entry` | 1917-04-06 | United States enters the war | americas | `a-britannica-wwi`, `a-iwm-wwi` |
| 14 | `brest-litovsk` | 1918-03-03 | Treaty of Brest-Litovsk | europe | `a-britannica-wwi` |
| 15 | `spring-offensive` | 1918-03-21 | Germany's Spring Offensive | europe | `a-britannica-wwi`, `a-iwm-wwi` |
| 16 | `hundred-days` | 1918-08-08 | The Hundred Days begins | europe | `a-britannica-wwi`, `a-iwm-wwi` |
| 17 | `armistice` | 1918-11-11 | Armistice | global | `a-worldwar-armistice`, `a-awm-wwi`, `a-iwm-wwi` |

Citation registry: `a-iwm-wwi` · `a-awm-wwi` · `a-britannica-wwi` · `a-britannica-armenian-genocide` · `a-worldwar-armistice` · `a-worldwar-lusitania` · `a-nam-somme`.

Theaters present: europe, asia-pacific, africa, middle-east, atlantic, americas, global.

### `src/content/data/timeline-wwii.ts` — WWII timeline

**Interactive Timeline: 1931–1945** / 互動時間軸：1931–1945 — subtitle: *"Select an event to read its context and sources."*. **17 events**, sorted chronologically by ISO date. Citation registry: 10 records (ids below resolve here; see [`sources.md`](sources.md) for the full records).

| # | id | date | Title (EN) | Theater | citation ids |
| --- | --- | --- | --- | --- | --- |
| 1 | `manchuria` | 1931-09-18 | The Mukden Incident: Japan seizes Manchuria | asia-pacific | `b3-britannica-wwii` |
| 2 | `abyssinia` | 1935-10-03 | Italy invades Abyssinia (Ethiopia) | africa | `b3-britannica-wwii` |
| 3 | `marco-polo-bridge` | 1937-07-07 | Marco Polo Bridge Incident: full-scale war in China | asia-pacific | `b3-britannica-wwii` |
| 4 | `nanjing-massacre` | 1937-12-13 | The Nanjing Massacre | asia-pacific | `b3-britannica-nanjing`, `b3-britannica-wwii` |
| 5 | `munich` | 1938-09-30 | The Munich Agreement | europe | `b3-britannica-wwii` |
| 6 | `nazi-soviet-pact-poland` | 1939-08-23 | The Nazi–Soviet Pact and the invasion of Poland | europe | `b3-avalon-pact`, `b3-ushmm-learn` |
| 7 | `babi-yar` | 1941-09-29 | The Babi Yar massacre | europe | `b3-yadvashem-babi-yar`, `b3-ushmm-learn` |
| 8 | `pearl-harbor` | 1941-12-07 | Pearl Harbor: the United States enters the war | asia-pacific | `b3-nww2m-pearl`, `b3-britannica-wwii` |
| 9 | `wannsee` | 1942-01-20 | The Wannsee Conference | europe | `b3-avalon-wannsee`, `b3-ushmm-learn` |
| 10 | `singapore` | 1942-02-15 | The fall of Singapore | asia-pacific | `b3-britannica-wwii` |
| 11 | `midway` | 1942-06-04 | The Battle of Midway | asia-pacific | `b3-britannica-wwii` |
| 12 | `stalingrad` | 1943-02-02 | Stalingrad: the German surrender | europe | `b3-britannica-wwii` |
| 13 | `warsaw-ghetto-uprising` | 1943-04-19 | The Warsaw Ghetto Uprising | europe | `b3-ushmm-learn`, `b3-yadvashem-holocaust` |
| 14 | `d-day` | 1944-06-06 | D-Day: the Normandy landings | europe | `b3-britannica-wwii` |
| 15 | `auschwitz` | 1945-01-27 | The liberation of Auschwitz | europe | `b3-nww2m-auschwitz`, `b3-yadvashem-holocaust` |
| 16 | `ve-day` | 1945-05-08 | VE Day: the end of the war in Europe | europe | `b3-britannica-wwii` |
| 17 | `hiroshima-nagasaki` | 1945-08-06 | Hiroshima and Nagasaki: Japan surrenders | asia-pacific | `b3-nww2m-atomic`, `b3-britannica-wwii` |

Citation registry: `b3-britannica-wwii` · `b3-britannica-nanjing` · `b3-ushmm-learn` · `b3-yadvashem-holocaust` · `b3-yadvashem-babi-yar` · `b3-avalon-wannsee` · `b3-avalon-pact` · `b3-nww2m-auschwitz` · `b3-nww2m-atomic` · `b3-nww2m-pearl`.

Theaters present: asia-pacific, africa, europe.

### `src/content/data/casualties.ts` — dataset `casualties`
**The Human Cost in Ranges** / 以區間呈現的人類代價 — subtitle: *"First and Second World War deaths by category. Bars span attributed estimates; ≈ markers mark single-source approximations. Nothing here is a precise count, and the series are not additive."*. Unit: **millions of deaths (attributed estimates) / 死亡人數（百萬；具名來源估計）**. 4 series; citation registry: 4 records.

| id | label (EN) | label（繁體中文） | value (millions) | citation ids |
| --- | --- | --- | --- | --- |
| `wwi-military` | WWI — military deaths | 一戰——軍人死亡 | 8.5–9.7 (range) | `b2-britannica-wwi`, `b2-historycom-wwi-deaths` |
| `wwi-civilian` | WWI — civilian deaths | 一戰——平民死亡 | 6.8–13 (range) | `b2-historycom-wwi-deaths`, `b2-britannica-wwi` |
| `wwii-military` | WWII — military deaths | 二戰——軍人死亡 | 21–25 (range) | `b2-historycom-wwii`, `b2-nww2m-deaths` |
| `wwii-civilian` | WWII — civilian deaths | 二戰——平民死亡 | 50–55 (range) | `b2-historycom-wwii` |

**Series notes (EN) — the required `note` field, rendered in tooltips and the table alternative:**

- `wwi-military` — Endpoints are two named institutional tallies, not a confidence interval: Britannica's overview counts about 8.5 million soldiers dead from wounds and disease; HISTORY's dedicated tally records slightly more than 9.7 million military dead.
- `wwi-civilian` — Endpoints are different definitions, not one interval: HISTORY's tally records more than 6.8 million civilian deaths; Britannica attributes roughly 13 million civilian deaths when the 1918 influenza pandemic is included.
- `wwii-military` — HISTORY's overview gives approximately 21–25 million military deaths; the museum's simpler table counts about 15 million battle deaths, a narrower category that is not directly comparable (that page contains internally inconsistent totals and is not used to derive figures).
- `wwii-civilian` — HISTORY's overview gives approximately 50–55 million civilian deaths; broader compilations reach toward 85 million total dead. The museum's contradictory China footnote is no longer quoted.

Citation registry: `b2-britannica-wwi` · `b2-historycom-wwi-deaths` · `b2-historycom-wwii` · `b2-nww2m-deaths`.

### `src/content/data/casualties.ts` — dataset `holocaust`
**Victims of Nazi Persecution and Genocide** / 納粹迫害與種族滅絕的受難者 — subtitle: *"Selected victim groups — not an exhaustive list. Categories overlap and the sources differ: do not add these figures to each other, to war-death totals, or to the hunger cases."*. Unit: **millions of victims (attributed estimates) / 受難人數（百萬；具名來源估計）**. 5 series; citation registry: 2 records.

| id | label (EN) | label（繁體中文） | value (millions) | citation ids |
| --- | --- | --- | --- | --- |
| `jews` | Jews | 猶太人 | ≈ 6 (point) | `b2-ushmm-learn`, `b2-yadvashem-holocaust` |
| `soviet-pows` | Soviet prisoners of war | 蘇聯戰俘 | ≈ 3.3 (point) | `b2-ushmm-learn` |
| `polish-civilians` | Non-Jewish Polish civilians | 非猶太裔波蘭平民 | ≈ 1.8 (point) | `b2-ushmm-learn` |
| `roma` | Roma and Sinti | 羅姆人與辛提人 | 0.25–0.5 (range) | `b2-ushmm-learn`, `b2-yadvashem-holocaust` |
| `disabled` | Disabled people | 身心障礙者 | 0.25–0.3 (range) | `b2-ushmm-learn` |

**Series notes (EN) — the required `note` field, rendered in tooltips and the table alternative:**

- `jews` — Approximately six million, the standard institutional approximation (USHMM; Yad Vashem). Point estimate — no artificial bounds.
- `soviet-pows` — Approximately 3.3 million died in German custody (USHMM). Point estimate.
- `polish-civilians` — About 1.8 million killed under occupation (USHMM). Point estimate; other compilations run higher.
- `roma` — The USHMM currently estimates at least 250,000 and possibly as many as 500,000 murdered; older, lower estimates survive in the literature and should be attributed by author and date.
- `disabled` — The USHMM documents the toll of the “euthanasia” programs at roughly 250,000–300,000.

Citation registry: `b2-ushmm-learn` · `b2-yadvashem-holocaust`.

### `src/content/data/casualties.ts` — dataset `hunger`
**War and Hunger: Selected Cases** / 戰爭與饑餓：案例選輯 — subtitle: *"Conflict destroyed food systems with lethal results — cases chosen for documentation, not exhaustiveness."*. Unit: **millions of deaths (documented ranges) / 死亡人數（百萬，文獻區間）**. 5 series; citation registry: 5 records.

| id | label (EN) | label（繁體中文） | value (millions) | citation ids |
| --- | --- | --- | --- | --- |
| `bengal-1943` | Bengal famine, 1943 | 孟加拉饑荒，1943年 | ≈ 3 (point) | `b2-britannica-bengal` |
| `leningrad` | Siege of Leningrad, 1941–44 | 列寧格勒圍城戰，1941–44 | ≈ 0.8 (point) | `b2-historycom-leningrad`, `b2-britannica-leningrad` |
| `greece` | Greek famine under occupation, 1941–44 | 希臘占領期饑荒，1941–44 | ≈ 0.1 (point) | `b2-nww2m-greece` |
| `wwi-blockade` | WWI Allied blockade of Germany | 一戰協約國對德封鎖 | 0.424–0.763 (range) | `b2-cox-blockade`, `b2-cambridge-offer` |
| `dutch-hunger-winter` | Dutch “Hunger Winter”, 1944–45 | 荷蘭「饑餓冬天」，1944–45 | ≈ 0.02 (point) | `b2-annefrank-dutch` |

**Series notes (EN) — the required `note` field, rendered in tooltips and the table alternative:**

- `bengal-1943` — Britannica reports about three million deaths from malnutrition or disease; scholarly estimates differ, some lower. Point estimate.
- `leningrad` — HISTORY's account estimates about 800,000 civilian deaths over the full 872-day siege; in 1942 alone about 650,000 perished. Point estimate; military casualties excluded.
- `greece` — The National WWII Museum records nearly 100,000 starvation deaths across the whole 1941–44 occupation — not the first winter alone; estimates including disease run higher. Point estimate.
- `wwi-blockade` — CONTESTED: endpoints trace to German official estimates (roughly 424,000 by one excess-death calculation; 763,000 claimed by the German Board of Public Health by December 1918), a span summarized in Cox's 2024 survey; Offer's study remains the standard work.
- `dutch-hunger-winter` — The Anne Frank House records about 20,000 deaths. Point estimate.

Citation registry: `b2-cambridge-offer` · `b2-cox-blockade` · `b2-historycom-leningrad` · `b2-britannica-leningrad` · `b2-britannica-bengal` · `b2-nww2m-greece` · `b2-annefrank-dutch`.

### `src/content/data/theaters.ts` — map snapshots `mapWwi` / `mapWwii`

**`wwi` snapshot** — 38 participants (allies 20, central 8, neutral 10).

- dateLabel (EN): "Approximate period snapshot · mid-1917 (after U.S. entry, before Russian exit)"
- dateLabel（繁體中文）: "概略時期示意 · 1917年中（美國參戰後、俄國退出前）"
- disclosure (EN, rendered on-screen): "Simplified teaching snapshot for an approximate period (mid-1917). The base map shows modern state boundaries for orientation only — historical borders differed, and colonial empires (British, French, German, Ottoman, and others) are not drawn. Categories mark the alignment of the governing authority in that period, not military control: Belgium, Serbia and Romania were occupied by the Central Powers yet remained Allied-aligned. Austria-Hungary and the Ottoman Empire are approximated by successor territories. Entry and exit dates varied by state."
- disclosure（繁體中文）: "簡化的教學示意圖。底圖以現代國界作定位之用——歷史疆界與此不同，英、法、德、鄂圖曼等殖民帝國未予描繪。奧匈帝國與鄂圖曼帝國以繼承領土近似標示。各國參戰與退出時點亦互有差異。"

**`wwii` snapshot** — 99 participants (allies 62, axis 10, occupied 14, neutral 13). One entry was removed: the redundant "Senegambia region" (686) that painted Senegal, superseded by the corrected Senegal entry.

- dateLabel (EN): "Approximate period snapshot · late 1942 (Axis at maximum extent)"
- dateLabel（繁體中文）: "概略時期示意 · 1942年底（軸心國勢力最大時）"
- disclosure (EN, rendered on-screen): "Simplified teaching snapshot for an approximate period (the Axis maximum extent, late 1942). The base map shows modern boundaries for orientation only; historical borders differed and colonial empires are not drawn. 'Axis' marks states and client regimes aligned with the Axis powers; 'Allied' marks Allied-aligned states, governments-in-exile, and colonial territories under Allied metropolitan authority; 'Occupied' marks territories under Axis military occupation whose pre-war alignment was Allied — occupation is control, not allegiance, and resistance movements fought throughout. The USSR's multi-republic territory is shown as occupied front or Soviet rear as of this period. Italy, Romania, Bulgaria, Finland and others changed sides later in the war."
- disclosure（繁體中文）: "軸心國勢力極盛時的簡化教學示意圖。底圖以現代疆界作定位之用；歷史疆界與此不同，殖民帝國未予描繪，被占領國家標為「軸心」以呈現控制而非忠誠——各地抵抗運動從未停止。蘇聯多共和國領土依時點標為占領區或後方。義大利、羅馬尼亞、保加利亞、芬蘭等國於戰爭後期改變立場。"

Participants are listed in full in the file (ISO numeric id · side · bilingual name · one-line note); the component renders them as map colors plus an accessible table. Chapter 05's `patterns.ts` and Chapter 06's `actions.ts` / `one-minute.ts` are summarized in § 4.

---

## 3. Chart rendering semantics · 圖表呈現語義

### Range charts (`src/components/rtp/range-chart.tsx`, `use-echart.ts`)

- **Bars span min–max, exactly; point estimates render as thin ≈ markers.** Each series row is drawn as two stacked ECharts bar segments: a *transparent* offset segment and a visible gradient segment of length `max − min` (range series) or a thin marker of width `2 × axisMax × 0.004` centered on `point` (point-estimate series). The visible bar **is** the attributed range; the marker **is** the single-source approximation — never a fabricated interval.
- **Value label formatting (audit RTP-F004 fix).** Every display path — bar label, tooltip, panel chip, table cell — uses one module-level formatter in **millions**, so a value can never render with a contradictory double unit:
  - ranges → `formatRange(min, max)` — `formatNum` prints integers bare, up to 2 decimals at/above 1, up to 3 below — e.g. `9–10`, `8.5–9.7`, `0.25–0.5`, `0.018–0.022`;
  - point estimates → `formatPoint(point)` — e.g. `≈ 6`, `≈ 0.02`, rendered with an "Approximate estimate / 近似估計" chip.
  - The removed bug: sub-million values used to render `Math.round(min×1000)–…k` **followed by the word "millions/百萬"** (e.g. "200–500k millions"). The `k` branch is gone entirely.
- **Axis.** x-axis is a value axis with `max = max(series.max) × 1.08`; axis labels print integers for values ≥ 1 and one decimal below 1. The y-axis is a category axis (inverse order), 150 px truncate-overflow labels. ECharts 6 `outerBoundsMode: "same" / outerBoundsContain: "axisLabel"` replaces the deprecated `grid.containLabel`.
- **Tooltip** (item trigger) shows: series label; the formatted range with the unit; the **full definitional note** (`RangeSeries.note`); and the publisher names of every cited source — so the caveat travels with the number.
- **Accessibility.** The chart container carries `role="img"` with an aria-label of title + subtitle; on-screen hints state "Tap a point or bar to explore the values" and "Keyboard users: use the accessible table alternative below each chart." A **"View as table" toggle** swaps the canvas for a real `<table>` (columns: Category · Range of estimates · Notes & definition · Sources; sr-only caption; sticky header; scrollable body) — the same data, definitions included.
- **Every chart footer** states: "Estimates differ across sources; bars show documented ranges, not precise counts." plus "Accessed 2026-10-17".
- **Rendering tech.** ECharts 6 via a lazy, SSR-safe hook: `echarts/core` + tree-shaken `BarChart`, `CustomChart`, `MapChart`, grid/tooltip/legend/visual-map/geo/graphic components and the canvas renderer are dynamically imported on the client; the instance follows its container via `ResizeObserver` and is disposed on dependency change or unmount. Chart height: `max(180, series.length × 64 + 40)` px.

### Timelines (`src/components/rtp/timeline.tsx`)

- Events are **buttons** (keyboard- and touch-operable) with `aria-expanded`; the selected event expands in place showing `detail`, a theater chip, and citation markers; collapsed by default so the list never becomes an unbounded wall.
- Events are sorted by ISO `date`, grouped under sticky year markers; a **theater filter** (chips with `aria-pressed`) narrows the list, with an explicit "No events in this filter." empty state.
- A tap cue ("Tap any event to read its context and sources") is always visible; the panel closes with a collapsible source list of the file's registry.

### Theaters map (`src/components/rtp/theaters-map.tsx`)

- ECharts `map` series on a registered `rtp-world` GeoJSON derived at module load from the bundled `world-atlas/countries-110m` topology via `topojson-client` — **no runtime CDN fetch**.
- Participant sides color the matching features by ISO numeric id; colors: Allies `#96774c` (paper) / `#b08d5b` (ink), Central/Axis `#7e2d26` / `#a93f2b`, **occupied `#a97e6f` / `#b98a77` (muted clay — control, not allegiance)**, neutral `#ddd3bb` / `#3a352e`. Non-participants render in the neutral color. The legend lists only the categories present in the active snapshot.
- A WWI/WWII snapshot toggle (`aria-pressed` buttons), the dated snapshot label, and the on-screen disclosure are part of the panel; a participants table alternative lists every participant with side and note. Tooltips show the localized name + one-line note.
- Roam/zoom and selection are disabled — the map is a static teaching snapshot (see [`methodology.md`](methodology.md) § 6).

---

## 4. Other content files

| File | Exports | Contents |
| --- | --- | --- |
| `src/content/ui.ts` | `ui` | UI chrome strings (header, hero, footer, timeline/map/chart labels, one-minute, actions) — bilingual, the single place interface copy lives. |
| `src/content/chapters/ch1.ts … ch6.ts` | `ch1…ch6` | The six chapters (5+6+6+6+7+3 = 33 sections; 5+7+10+14+8+0 = 44 citation records across per-chapter registries). |
| `src/content/data/theaters.ts` | `mapWwi`, `mapWwii` | The two map snapshots (see § 2). |
| `src/content/data/patterns.ts` | `patterns` | 6 `PatternCard`s. |
| `src/content/data/actions.ts` | `actions` | 6 `ActionPathway`s, 5 steps and 2–4 links each (20 links total). |
| `src/content/data/one-minute.ts` | `oneMinute` | Full bilingual control copy + 3 tradition paragraphs. |
| `src/content/index.ts` | `chapters`, plus all named exports | The barrel consumed by `app/page.tsx` and the footer. |

Everything above is plain TypeScript data — the site ships no runtime-fetched content, no database, and no CMS.
