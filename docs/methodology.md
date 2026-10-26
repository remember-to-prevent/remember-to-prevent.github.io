# Editorial and Data Methodology · 編輯與數據方法

**Remember to Prevent — Chapter 01** · How this site sources, qualifies, labels, translates, and visualizes its historical material. Companion documents: [`sources.md`](sources.md) (the full citation inventory), [`data-dictionary.md`](data-dictionary.md) (data structures and chart semantics), [`limitations.md`](limitations.md) (what remains unverified).

The project's editorial master prompt sets the standard this methodology implements: *cite every major factual claim near where it appears; distinguish facts from interpretation; preserve definitional differences in casualty statistics; never fabricate; clearly flag uncertainty and scholarly disagreement without ever relativizing well-documented atrocities.*

---

## 1. How historical claims are sourced

**Hierarchy.** Claims are sourced institutional-first, scholarly-second:

1. **Institutions** — museums, memorials, national archives, the Red Cross, the United Nations (e.g., Westminster Abbey, the National WWI Museum and Memorial, The National WWII Museum, Yad Vashem, USHMM, The National Archives (UK), ICRC, UN, the Avalon Project at Yale Law School for primary treaty/trial texts).
2. **Established reference works** — Encyclopædia Britannica, HISTORY — used for broad narrative scaffolding and casualty ranges, always with figures cross-checked against institutional pages where possible (the citation notes say so explicitly, e.g., `b2-historycom-wwii`).
3. **Scholarship** — cited for the standard study behind a contested number (e.g., the Cambridge Core record of Avner Offer's *The First World War: An Agrarian Interpretation* behind the WWI blockade excess-death range) and named in the text for historiographical debate (Fischer, Clark, Tooze, Grayling, Overy).

No single institution is treated as the sole authority for every topic, and no topic relies on a lone source where institutional sources disagree.

**Placement.** Every chapter section, timeline event, and chart series carries its citation ids *at the point of use*: superscript `[n]` markers that open an accessible popover with the full record (publisher, title in the reader's language, kind, access date, verification note, direct link). Each chapter closes with a collapsible "Sources for this chapter" list; the footer lists the complete deduplicated registry. A claim that cannot be sourced near where it appears does not appear.

**Verification discipline.** Every cited URL was checked by an automated HTTP request (`curl -L`, desktop user agent) on **2026-10-17**, and the honest result is recorded per citation: HTTP 200 verified, or HTTP 403 bot-blocked canonical with browser verification pending. For key deep pages, the specific facts relied upon were confirmed in the returned page content (e.g., the Armistice terms text on theworldwar.org; "over 57,000 casualties" on nam.ac.uk; the 28,707 Righteous Among the Nations figure as of 1 January 2024 on yadvashem.org's statistics page). See [`sources.md`](sources.md) § "Independent re-verification" and [`limitations.md`](limitations.md) for scope.

**No fabricated anything.** No invented names, first-person accounts, images, quotes, statistics, URLs, or citations. Where a person's exact words are not on record, the text describes rather than quotes.

---

## 2. How casualty figures are handled · 傷亡數字的處理

**Attributed estimates only.** Every casualty, victim, famine, or displacement figure on this site is expressed either as an attributed **minimum–maximum range** (both endpoints sourced to named institutions) or — where the cited institution gives one approximation — as a single **point estimate** rendered as an "≈" marker; never as a precise-sounding total. There is no live counter, no single "war death total", and no aggregation of unlike categories into one number. The 2026-10-26 audit remediation introduced the point-estimate form precisely to stop manufacturing intervals (e.g. ±10% around the Anne Frank House's "about 20,000") that no source documents. The chart caption states it on every chart: *"Estimates differ across sources; bars show attributed ranges and ≈ markers single-source approximations — never precise counts."*

**Definitions are preserved, never merged.** The site keeps distinct: **military deaths** (deaths in uniform, all causes), **civilian deaths** (violence, bombing, disease, occupation policy), **excess mortality** (deaths above a peacetime baseline, e.g., blockade-related deaths in wartime Germany), **famine deaths** (e.g., Bengal 1943, the Dutch Hunger Winter), and **displacement** (which counts people, not deaths). Each `RangeSeries` in the datasets carries a required `note` field stating its definition, scope, and caveats — these notes render in chart tooltips and in the accessible table alternative, not just in source code.

Examples of definitional care actually in the data:

| Series | Range (millions) | Definition preserved in the note |
| --- | --- | --- |
| WWI military deaths | 9–10 | Deaths in uniform from all causes; sources differ on missing-in-action and died-of-wounds. |
| WWII civilian deaths | 50–56 | Includes the Holocaust, other mass killings, bombing, famine and disease — the majority of WWII's dead. |
| Soviet POWs in German custody | 3.1–3.5 | Died in custody, mainly starvation, exposure, shooting — "a mortality no other captured population faced." |
| WWI blockade excess deaths (Germany) | 0.4–0.76 | **Flagged contested** in the note itself: excess civilian deaths attributed to blockade and shortage (the note cites estimates of roughly 424,000–763,000); scholarship divides on the weight of cause. |
| Bengal famine 1943 | 2–3 | Famine deaths under wartime administration; Britannica cites "some three million". |

**Why attributed estimates?** Because the underlying scholarship genuinely differs — different sources count burial registries, tribunal evidence, census deficits, camp records, and survivor testimony over different boundaries of time and place. Where two named tallies genuinely differ (Britannica's ~8.5M vs HISTORY's ~9.7M WWI military dead), the range spans both *with each endpoint attributed in the note*; where one institution gives one number (USHMM's "approximately six million"), the point estimate is shown as that institution's approximation. The site presents this to readers as a feature of honest records, not a weakness (Chapter 03's "On the numbers" callout on the Nanjing death toll makes this argument explicitly: *"the certainty of the crime and the dispute over its arithmetic"*).

---

## 3. Fact vs. reflection labelling · 事實與省思的標註

Every callout in every chapter carries a visible kind label, rendered bilingually, so readers always know what kind of statement they are reading:

| Label (EN) | 標籤（繁體中文） | Meaning | Visual treatment |
| --- | --- | --- | --- |
| **Historical fact** | 歷史事實 | A documented historical fact, sourced. | Bronze left border on paper; raised ink panel on charcoal. |
| **Present-day reflection** | 今日省思 | A reflection about the present day — clearly distinct from historical fact; the reader is never invited to mistake one for the other. | Poppy-red left border; warm tint. |
| **Documented testimony** | 文獻證言 | A verbatim quote or documented testimony with precise attribution. | Italic serif, bronze-light border, attribution line. |
| **On the numbers** | 關於數字 | Methodology: how an estimate or definition works, where scholarship differs. | Stone left border on a deeper paper tint. |

The chapter prose itself is written so that historical narrative and present-day commentary are separated at the paragraph level; the callout system is the formal guarantee.

---

## 4. Quote policy · 引文政策

Only **verbatim** quotes are used, and only from **public-domain works or official documents**, always with precise attribution:

- **Wilfred Owen, "Dulce et Decorum est"** (Chapter 02 testimony callout): the two closing lines, quoted exactly as published in the 1920 posthumous edition edited by Siegfried Sassoon (public domain); attribution states the writing years (1917–18), the 1920 posthumous publication, and Owen's death on 4 November 1918. Source: Poetry Foundation's reproduction of the public-domain text (citation `a-poetryfoundation-owen`, verified HTTP 200).
- **Wilfred Owen, "Disabled"** (Chapter 04 testimony callout): public-domain poem (written 1917, published posthumously), quoted verbatim from the Poetry Foundation page (citation `b2-poetryfoundation-owen`).
- **Universal Declaration of Human Rights, preamble** (Chapter 05): official United Nations wording of the opening clause, quoted from the UN's own page (citation `c-un-udhr`).
- **Schuman Declaration, 9 May 1950** (Chapter 05): quoted from the European Union's official publication of the declaration (citation `c-eu-schuman`) — the quote text was confirmed on-page during verification.
- **Wannsee Protocol** is *referenced* as a primary document via Yale's Avalon Project and USHMM's educational hub, and the Nuremberg opening statement of Justice Robert H. Jackson via The National WWII Museum — institutional pages that publish the documents themselves; where the site quotes these documents it uses the institutions' published text.

No quote is paraphrased-and-presented-as-quotation; no quote is taken from a secondary source that does not reproduce the text; no modern copyrighted work is quoted beyond brief scholarly naming (historians' theses are described, not excerpted).

---

## 5. Contested topics · 爭議主題的處理

The site's rule: **present documented ranges and source differences; label historiographical debate as debate; never "both-side" established crimes.**

- **Nanjing Massacre death toll** — presented as a documented massacre whose occurrence "is documented beyond serious dispute," with the death-toll range stated with its source spread (from tens of thousands in some scholarship to roughly 300,000 in Chinese official findings; the postwar Tokyo tribunal citing totals exceeding 200,000). A dedicated "On the numbers" callout explains *why* the estimates differ (what is counted, over which boundaries) and states that presenting a range honestly does not weaken the record. (Chapter 03; WWII timeline event `nanjing-massacre`.)
- **WWI Allied blockade excess deaths** — flagged **contested** in the dataset note itself ("CONTESTED: excess civilian deaths in wartime Germany attributed to the Allied blockade and shortage — estimates from roughly 424,000 to 763,000. Scholarship divides the weight…"), with the standard study (Offer) as the scholarly citation; the chapter text likewise says "though the exact toll is still debated."
- **Fischer thesis and the causes of 1914** — presented as open historiographical debate (Fischer 1961 vs. Clark's *Sleepwalkers* and wider-responsibility scholarship), inside a labelled methodology callout: "the decisions are documented; the weighting remains open." (Chapter 02 § "The July Crisis: five weeks of choices".)
- **Strategic-bombing ethics** — presented as a genuine debate among serious historians and philosophers (Grayling vs. Overy), while explicitly holding fixed what is not debatable: "who began these wars, and what was done in the occupied lands, are matters of record — the argument is over what the Allies were justified in doing in response." (Chapter 05 § "Where historians genuinely disagree".)
- **The Holocaust** — never "both-sided." The six-million Jewish dead is presented as the convergent, standard approximation that major memorial institutions present; other victim groups carry wider documented ranges with the note that "the ranges mark the limits of documentation — never doubt of the crimes themselves." Intentionalist/functionalist debates are framed as debates about weighting, "not about whether the crimes occurred."
- **Armenian genocide** — documented massacres and deportations of 1915–16 with the estimate range (to roughly 1.5 million), scholarly and state recognition, and Türkiye's dispute and the ongoing political contest stated plainly — no denial or minimization. (WWI timeline event `armenian-genocide`; Chapter 02.)

---

## 6. Map methodology · 地圖方法

The site's world map is a **teaching snapshot, not a historical atlas**, and it says so on screen:

- **Base map**: Natural Earth-derived `world-atlas` **countries-110m** topology (bundled locally at build time via the `world-atlas` npm package + `topojson-client`; no runtime CDN dependency). It draws **modern state boundaries, used for orientation only** — the on-screen disclosure states that historical borders differed.
- **Approximate-period snapshots**: two fixed snapshots, each labelled as an approximate historical period — **"Approximate period snapshot · mid-1917 (after U.S. entry, before Russian exit)"** for WWI (38 participants) and **"Approximate period snapshot · late 1942 (Axis at maximum extent)"** for WWII (99 participants; the redundant "Senegambia region" entry was removed in remediation). Nothing animates; no boundaries are invented.
- **Empires are not drawn**: the British, French, German, Ottoman and other colonial empires are not depicted; **Austria-Hungary and the Ottoman Empire are approximated by successor territories**, and the disclosure says exactly that.
- **Alignment vs. occupation separated (2026-10-26 remediation)**: in the WWII snapshot, four categories are drawn — **Axis** (states and client regimes aligned with the Axis), **Allied** (Allied-aligned states, governments-in-exile, and colonial territories under Allied metropolitan authority), **Occupied** (territories under Axis military occupation whose pre-war alignment was Allied — control, never voluntary allegiance; resistance noted), and **Neutral**. The Soviet republics are shown on the Allied side as parts of the USSR. Every ISO numeric code was validated against the actual world-atlas geometry (see `map-validation.csv` in the remediation delivery).
- **Disclosure on-screen**: each snapshot's `disclosure` field renders in the map panel itself, not only in documentation; a table alternative lists every participant with its side and a one-line status note for keyboard and screen-reader users.
- Where the narrative text touches 1914-era geography (Tsingtao/Kiautschou, German East Africa), the prose explicitly distinguishes the historical situation from the modern-borders base map.

---

## 7. Bilingual policy · 雙語政策

- **English is the default language**; 繁體中文 (Traditional Chinese) is a full, human-crafted translation — not machine-substituted. All narrative text, interface labels, timeline events, chart titles/axes/tooltips, callout labels, action pathways, accessibility strings, and the One Minute to Remember copy exist in both languages. A scan for simplified-only Chinese characters was run during content QA (none found); terminology follows historically established usage (e.g., 澳紐軍團日 Anzac Day; 萬湖會議 Wannsee; 正義之士 Righteous Among the Nations; 亞美尼亞種族滅絕 Armenian Genocide).
- **Proper nouns are preserved or conventionally transliterated** (e.g., "Dulce et Decorum est" kept in Latin with a Chinese gloss of its meaning, not translated as poetry).
- **Language persistence**: the chosen language is stored in `localStorage` under the key `rtp.language` **only** — no cookies, no server-side storage, no transmission anywhere. If storage is unavailable, the preference simply does not persist. This is what makes the footer's "no analytics, no tracking, no cookies" statement truthful.
- **`<html lang>` switches** between `en` and `zh-TW` when the language changes, so screen readers and search engines see correct language metadata. One nuance is documented in [`limitations.md`](limitations.md): the server always renders English first, and the stored preference applies immediately after hydration.
- The language switcher is a two-button `EN / 繁中` control in the sticky header with `aria-pressed` state and per-button `lang` attributes — usable at every screen width, never hidden behind a menu.

---

## 8. What this methodology does not claim

This document describes what the site does. It does not claim formal WCAG certification, completed browser verification of bot-blocked URLs, or that scholarship has settled any contested range. Outstanding items are listed in [`limitations.md`](limitations.md).
