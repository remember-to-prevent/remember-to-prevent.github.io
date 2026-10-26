/**
 * Remember to Prevent — Chapter 01
 * Shared content type contract.
 *
 * ALL chapter/data content files must conform to these types exactly.
 * Conventions:
 * - `Localized` carries English ("en") and Traditional Chinese ("zh") text.
 * - Chinese must be 繁體中文 (Traditional), historically accurate terminology.
 * - Numbers that vary across scholarship MUST be expressed as ranges with notes.
 * - Every dataset row cites its sources via `citationIds`.
 * - Access date for all citations: "2026-10-17".
 */

export type Lang = "en" | "zh";

export interface Localized {
  en: string;
  zh: string;
}

export type CitationKind =
  | "primary" // archival document / treaty text / testimony
  | "institutional" // museum, memorial, archive, red cross, UN
  | "scholarly" // peer-reviewed or academic press work
  | "reference"; // established encyclopedia / statistical reference

export interface Citation {
  /** Unique kebab-case id, prefixed with agent scope: e.g. "a-iwm-wwi-overview" */
  id: string;
  /** Publisher / institution / author, in its own language (do not translate). */
  publisher: string;
  /** Title of the specific page/work actually referenced. */
  title: Localized;
  /** Direct URL to the specific resource (not a bare homepage when avoidable). */
  url: string;
  kind: CitationKind;
  /** Date we accessed/verified: use "2026-10-17". */
  accessDate: string;
  /** Honest verification note, e.g. "Verified HTTP 200" or "Automated check returned 403 (bot protection); canonical institutional URL." */
  note?: Localized;
}

export type CalloutKind =
  | "fact" // documented historical fact
  | "reflection" // present-day reflection, clearly distinct from fact
  | "testimony" // documented quote/testimony with attribution
  | "methodology"; // how estimates/definitions work

export interface Callout {
  kind: CalloutKind;
  text: Localized;
  /** Who said it (for testimony) or which source frames it. */
  attribution?: Localized;
  citationIds?: string[];
}

export interface ChapterSection {
  /** kebab-case, unique within the chapter, e.g. "the-july-crisis" */
  id: string;
  heading: Localized;
  /** 2–4 paragraphs, each 2–5 sentences. */
  paragraphs: Localized[];
  callout?: Callout;
  citationIds: string[];
}

export type ChapterId = "ch1" | "ch2" | "ch3" | "ch4" | "ch5" | "ch6";

export interface ChapterContent {
  id: ChapterId;
  /** Short label for chapter navigation (≤ 14 chars EN). */
  navLabel: Localized;
  /** "01" … "06" */
  number: string;
  title: Localized;
  /** The guiding question of the chapter. */
  question: Localized;
  /** Lead paragraph(s), 2–3 sentences each. */
  lead: Localized[];
  sections: ChapterSection[];
  /** All citations used in this chapter (id-referenced). */
  citations: Citation[];
}

export type Theater =
  | "europe"
  | "africa"
  | "middle-east"
  | "asia-pacific"
  | "americas"
  | "atlantic"
  | "global";

export interface TimelineEvent {
  /** kebab-case unique id, e.g. "sarajevo-assassination" */
  id: string;
  /** ISO-ish sort date "1914-06-28" */
  date: string;
  /** Human display date, e.g. "28 June 1914" / "1914年6月28日" */
  dateLabel: Localized;
  title: Localized;
  place: Localized;
  /** 1–2 sentences shown in the event list. */
  summary: Localized;
  /** 3–6 sentences shown when the event is selected/expanded. */
  detail: Localized;
  theater: Theater;
  citationIds: string[];
}

export interface TimelineData {
  id: "wwi" | "wwii";
  title: Localized;
  subtitle: Localized;
  events: TimelineEvent[];
  citations: Citation[];
}

/**
 * A numeric series in one of two evidence shapes (unit: millions unless stated):
 * - a documented range (min < max), both endpoints attributed; or
 * - a single attributed approximate point estimate (`point`), used when the
 *   source gives one approximation rather than a defensible interval.
 * Never invent endpoints to force a range (audit RTP-F008 et al.).
 */
export type RangeSeries = {
  id: string;
  label: Localized;
  /** Definition / scope / caveat — REQUIRED when estimates differ. */
  note: Localized;
  citationIds: string[];
} & (
  | {
      min: number;
      max: number;
      point?: undefined;
    }
  | {
      min?: undefined;
      max?: undefined;
      /** Single attributed approximate estimate, in millions. */
      point: number;
    }
);

export interface ChartDataset {
  id: string;
  title: Localized;
  subtitle: Localized;
  unit: Localized;
  series: RangeSeries[];
  citations: Citation[];
}

export interface ActionLink {
  label: Localized;
  url: string;
  /** Publisher of the linked resource, e.g. "United States Holocaust Memorial Museum". */
  publisher: string;
}

export interface ActionPathway {
  id: string;
  title: Localized;
  /** 2–3 sentences framing the pathway. */
  intro: Localized;
  /** 4–6 practical, proportionate steps. */
  steps: Localized[];
  /** 2–4 reputable working links. */
  links: ActionLink[];
  /** Honest statement of realistic limits (what this action will NOT achieve). */
  limits: Localized;
}

export interface ActionContent {
  intro: Localized;
  pathways: ActionPathway[];
  shareNote: Localized;
}

export interface OneMinuteContent {
  title: Localized;
  /** A brief, sensitive invitation (not guilt-based). */
  invitation: Localized;
  startLabel: Localized;
  pauseLabel: Localized;
  resumeLabel: Localized;
  restartLabel: Localized;
  skipLabel: Localized;
  remainingLabel: Localized;
  /** 2–3 paragraphs: Remembrance Day origin (Armistice, 11 November, 11:00), traditions vary by country/institution, this project is independent and not affiliated with or endorsed by any remembrance organization, silence itself does not prevent conflict. */
  aboutTradition: Localized[];
  /** Gentle bridge to Chapter 06 after completion or skip. */
  completionMessage: Localized;
  a11y: {
    started: Localized;
    paused: Localized;
    resumed: Localized;
    complete: Localized;
    skipped: Localized;
    /** e.g. "30 seconds remaining" — prefix wording only. */
    secondsRemaining: Localized;
  };
}

/** Chapter 05 pattern explorer: historical pattern → questions for today. */
export interface PatternCard {
  id: string;
  title: Localized;
  /** What the pattern looked like in 1914–1945 (documented). */
  historical: Localized;
  /** Careful, non-equivalence questions to ask about the present. */
  today: Localized;
}

/** Map snapshot participant (ISO 3166-1 numeric id as used by world-atlas countries-110m). */
export interface MapParticipant {
  /** ISO numeric id string, e.g. "840". */
  id: string;
  /**
   * Alignment / status of the territory at the snapshot period (audit RTP-F003):
   * "allies" | "central" | "axis" = alignment of the governing authority;
   * "occupied" = under Axis military occupation whose pre-war alignment was
   * Allied (control, not allegiance — resistance noted in disclosure);
   * "neutral" = formally neutral. Never mark an occupied population as
   * voluntarily aligned with the occupying power.
   */
  side: "allies" | "central" | "axis" | "neutral" | "occupied";
  /** Country name shown in tooltip. */
  name: Localized;
  /** One-line status note, e.g. "Entered the war in April 1917." */
  note: Localized;
}

export interface MapSnapshot {
  id: "wwi" | "wwii";
  /** Snapshot date label, e.g. "Simplified snapshot: mid-1917" */
  dateLabel: Localized;
  participants: MapParticipant[];
  /** Disclosure about modern borders / approximations. */
  disclosure: Localized;
}
