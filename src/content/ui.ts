import type { Localized } from "@/content/types";

/** UI chrome strings (header, hero, footer, generic controls). Kept in sync by the main agent. */
export const ui = {
  meta: {
    siteName: "Remember to Prevent",
    chapter: "Chapter 01",
  },
  skipToMain: {
    en: "Skip to main content",
    zh: "跳至主要內容",
  } satisfies Localized,
  header: {
    wordmark: { en: "Remember to Prevent", zh: "銘記歷史，防止重演" } satisfies Localized,
    wordmarkChapter: { en: "Chapter 01", zh: "第一章" } satisfies Localized,
    navLabel: { en: "Chapter navigation", zh: "章節導覽" } satisfies Localized,
    navMore: { en: "Scroll chapters", zh: "捲動章節" } satisfies Localized,
    navScrollLeft: { en: "Scroll chapter navigation left", zh: "向左捲動章節導覽" } satisfies Localized,
    navScrollRight: { en: "Scroll chapter navigation right", zh: "向右捲動章節導覽" } satisfies Localized,
    langLabel: { en: "Language", zh: "語言" } satisfies Localized,
    langEn: "EN",
    langZh: "繁中",
    langEnFull: { en: "English", zh: "英文" } satisfies Localized,
    langZhFull: { en: "Traditional Chinese", zh: "繁體中文" } satisfies Localized,
  },
  hero: {
    kicker: {
      en: "An independent historical education project",
      zh: "獨立歷史教育計畫",
    } satisfies Localized,
    title: { en: "Remember to Prevent", zh: "銘記歷史，防止重演" } satisfies Localized,
    chapter: { en: "Chapter 01", zh: "第一章" } satisfies Localized,
    tagline: {
      en: "The Past Cannot Be Changed. The Future Is Still Ours to Shape.",
      zh: "過去無法改變。未來仍由我們塑造。",
    } satisfies Localized,
    sub: {
      en: "Two World Wars. Lessons for Humanity. Actions for Tomorrow.",
      zh: "兩次世界大戰。人類的教訓。明日的行動。",
    } satisfies Localized,
    flow: {
      en: "Remember → Reflect → Act",
      zh: "銘記 → 反思 → 行動",
    } satisfies Localized,
    scrollCue: { en: "Begin reading", zh: "開始閱讀" } satisfies Localized,
  },
  common: {
    chapterLabel: { en: "Chapter", zh: "第" } satisfies Localized,
    sources: { en: "Sources", zh: "資料來源" } satisfies Localized,
    sourceNote: {
      en: "Sources for this chapter",
      zh: "本章資料來源",
    } satisfies Localized,
    tapHint: {
      en: "Tap a point or bar to explore the values",
      zh: "點選圖上的點或長條以查看數值",
    } satisfies Localized,
    keyboardHint: {
      en: "Keyboard users: use the accessible table alternative below each chart.",
      zh: "鍵盤使用者：可使用每張圖表下方的無障礙資料表替代檢視。",
    } satisfies Localized,
    viewAsTable: { en: "View as table", zh: "以表格檢視" } satisfies Localized,
    viewAsChart: { en: "View as chart", zh: "以圖表檢視" } satisfies Localized,
    showMore: { en: "Show more", zh: "顯示更多" } satisfies Localized,
    showLess: { en: "Show less", zh: "顯示較少" } satisfies Localized,
    factLabel: { en: "Historical fact", zh: "歷史事實" } satisfies Localized,
    reflectionLabel: { en: "Present-day reflection", zh: "今日省思" } satisfies Localized,
    testimonyLabel: { en: "Documented testimony", zh: "文獻證言" } satisfies Localized,
    methodologyLabel: { en: "On the numbers", zh: "關於數字" } satisfies Localized,
    externalLink: {
      en: "external link, opens in a new tab",
      zh: "外部連結，於新分頁開啟",
    } satisfies Localized,
    verified: { en: "Verified", zh: "已驗證" } satisfies Localized,
    accessed: { en: "Accessed", zh: "存取" } satisfies Localized,
    backToTop: { en: "Back to top", zh: "回到頂端" } satisfies Localized,
  },
  timeline: {
    filterLabel: { en: "Filter by theater of war", zh: "依戰區篩選" } satisfies Localized,
    allTheaters: { en: "All theaters", zh: "全部戰區" } satisfies Localized,
    theaters: {
      europe: { en: "Europe", zh: "歐洲" } satisfies Localized,
      africa: { en: "Africa", zh: "非洲" } satisfies Localized,
      "middle-east": { en: "Middle East", zh: "中東" } satisfies Localized,
      "asia-pacific": { en: "Asia–Pacific", zh: "亞洲及太平洋" } satisfies Localized,
      americas: { en: "Americas", zh: "美洲" } satisfies Localized,
      atlantic: { en: "Atlantic", zh: "大西洋" } satisfies Localized,
      global: { en: "Global", zh: "全球" } satisfies Localized,
    } as Record<string, Localized>,
    expandEvent: { en: "Expand event", zh: "展開事件" } satisfies Localized,
    collapseEvent: { en: "Collapse event", zh: "收合事件" } satisfies Localized,
    noEvents: {
      en: "No events in this filter.",
      zh: "此篩選條件下沒有事件。",
    } satisfies Localized,
    tapCue: {
      en: "Tap any event to read its context and sources",
      zh: "點選任一事件以閱讀背景與出處",
    } satisfies Localized,
  },
  map: {
    title: { en: "The World at War", zh: "戰火下的世界" } satisfies Localized,
    snapshotLabel: { en: "Snapshot", zh: "時點" } satisfies Localized,
    wwiButton: { en: "First World War", zh: "第一次世界大戰" } satisfies Localized,
    wwiiButton: { en: "Second World War", zh: "第二次世界大戰" } satisfies Localized,
    legendAllies: { en: "Allied / Entente powers", zh: "協約國陣營" } satisfies Localized,
    legendCentral: { en: "Central Powers", zh: "同盟國（三國同盟）" } satisfies Localized,
    legendAxis: { en: "Axis powers", zh: "軸心國" } satisfies Localized,
    legendNeutral: { en: "Neutral / other", zh: "中立或其他" } satisfies Localized,
    viewTable: { en: "View participants as table", zh: "以表格檢視參戰方" } satisfies Localized,
    hideTable: { en: "Hide table", zh: "收合表格" } satisfies Localized,
    countryHeader: { en: "State", zh: "國家／政權" } satisfies Localized,
    sideHeader: { en: "Alignment", zh: "陣營" } satisfies Localized,
    noteHeader: { en: "Note", zh: "說明" } satisfies Localized,
    tapCue: {
      en: "Tap a country to see its details in the panel below",
      zh: "點選國家，於下方面板查看詳情",
    } satisfies Localized,
    selectCountryLabel: { en: "Select a country", zh: "選擇國家" } satisfies Localized,
    selectCountryPlaceholder: { en: "— Choose from the list —", zh: "— 從清單選擇 —" } satisfies Localized,
    clearSelection: { en: "Clear selection", zh: "清除選取" } satisfies Localized,
    selectedCountryLabel: { en: "Selected", zh: "已選取" } satisfies Localized,
    panelEmpty: {
      en: "Select a country on the map or from the list to read its wartime status, dates, and context.",
      zh: "點選地圖上的國家或從清單選擇，即可閱讀其戰時狀態、日期與背景。",
    } satisfies Localized,
    panelNoRecord: {
      en: "No classification is recorded for this territory in this simplified snapshot. The base map uses modern boundaries for orientation only.",
      zh: "此簡化時點圖並未記錄這個領土的分類。底圖僅以現代疆界作定位之用。",
    } satisfies Localized,
    panelContextLabel: { en: "Context", zh: "背景說明" } satisfies Localized,
    panelMethodLabel: { en: "Methodology", zh: "方法說明" } satisfies Localized,
    panelMethodNote: {
      en: "Displayed on modern boundaries for orientation — historical borders differed; see the methodology note below the map.",
      zh: "以現代疆界示意——歷史疆界與此不同；詳見地圖下方的方法說明。",
    } satisfies Localized,
  },
  chart: {
    rangeNote: { en: "Range of estimates", zh: "估計區間" } satisfies Localized,
    millions: { en: "millions", zh: "百萬" } satisfies Localized,
    scaleCaption: {
      en: "Bars span documented min–max estimates · unit:",
      zh: "長條橫跨文獻記載之最小至最大估計 · 單位：",
    } satisfies Localized,
    dataNote: {
      en: "Estimates differ across sources; bars show documented ranges, not precise counts.",
      zh: "各來源估計不盡相同；長條呈現文獻區間，並非精確計數。",
    } satisfies Localized,
  },
  oneMinute: {
    a11yLabel: { en: "One minute of remembrance timer", zh: "一分鐘追思計時器" } satisfies Localized,
    perMinute: { en: "seconds", zh: "秒" } satisfies Localized,
  },
  actions: {
    choosePathway: {
      en: "Choose one pathway to begin",
      zh: "選擇一個路徑開始",
    } satisfies Localized,
    stepsLabel: { en: "Practical first steps", zh: "可行的第一步" } satisfies Localized,
    resourcesLabel: { en: "Reputable resources", zh: "可靠資源" } satisfies Localized,
    limitsLabel: { en: "Realistic limits", zh: "務實的界線" } satisfies Localized,
    copyLink: { en: "Copy page link", zh: "複製頁面連結" } satisfies Localized,
    copied: { en: "Link copied", zh: "已複製連結" } satisfies Localized,
    copyFailed: { en: "Copy failed", zh: "複製失敗" } satisfies Localized,
    selectedLabel: { en: "Pathway selected", zh: "已選路徑" } satisfies Localized,
  },
  footer: {
    title: "Remember to Prevent — Chapter 01",
    independence: {
      en: "This is an independent, non-commercial historical education project. It is not affiliated with, endorsed by, or an official publication of RSL, the Australian War Memorial, Imperial War Museums, the United States Holocaust Memorial Museum, Yad Vashem, the United Nations, or any other organization referenced. Institutional names, archival materials, and data remain the property of their respective rights holders and are cited with attribution where applicable.",
      zh: "本網站為獨立、非商業性的歷史教育計畫，與澳洲退伍軍人聯盟（RSL）、澳洲戰爭紀念館、帝國戰爭博物館、美國大屠殺紀念博物館、亞德瓦舍姆（Yad Vashem）、聯合國或本文引用的任何其他組織，均無從屬、背書或官方關係。機構名稱、檔案資料與數據之權利屬於各自權利人，引用時均已註明出處。",
    } satisfies Localized,
    sourcesTitle: { en: "Primary historical sources", zh: "主要歷史資料來源" } satisfies Localized,
    licenseTitle: { en: "License", zh: "授權" } satisfies Localized,
    licenseText: {
      en: "Code: license choice pending confirmation by the project owner. Historical datasets, archival images, quotations, and third-party assets: licensed or used under their respective terms; see the repository's source and image-rights notes. This page displays no third-party historical imagery — all graphics are original works created for this project.",
      zh: "程式碼：授權方式待專案所有者確認後決定。歷史數據、檔案影像、引文與第三方素材：依其各自條款授權或使用，詳見本專案的來源與影像權利說明。本頁未使用任何第三方歷史影像——所有圖形皆為本計畫原創。",
    } satisfies Localized,
    accessTitle: { en: "Research and source access dates", zh: "研究與資料存取日期" } satisfies Localized,
    accessText: {
      en: "Sources accessed: 2026-10-17 — see source notes for item-level dates, verification status, and limitations.",
      zh: "資料存取日期：2026-10-17——逐項日期、驗證狀態與限制詳見各來源說明。",
    } satisfies Localized,
    privacyTitle: { en: "Privacy and architecture", zh: "隱私與架構" } satisfies Localized,
    privacyText: {
      en: "This page runs as a single-page application without analytics, tracking, or cookies. Language preference is stored locally on your device; it is not transmitted to anyone. This project is independent and is not an official RSL remembrance campaign.",
      zh: "本頁面以單頁應用程式運作，無分析、無追蹤、無 Cookie。語言偏好僅儲存於你的裝置本機，不會傳送給任何人。本計畫為獨立專案，並非 RSL 官方追思活動。",
    } satisfies Localized,
    furtherTitle: { en: "Further reading", zh: "延伸閱讀" } satisfies Localized,
    furtherText: {
      en: "For the relationship between armed conflict and food insecurity, see the separate independent project Global Food Crisis.",
      zh: "關於武裝衝突與糧食不安全之間的關係，請參閱另一獨立計畫「Global Food Crisis」。",
    } satisfies Localized,
    disclaimerTitle: { en: "Editorial note", zh: "編輯說明" } satisfies Localized,
    disclaimerText: {
      en: "Historical casualty figures are scholarly estimates presented as ranges. Differences between civilian deaths, military deaths, excess mortality, famine deaths, and displacement are preserved in the data notes. Nothing on this page should be read as moral equivalence between aggressors and victims.",
      zh: "歷史傷亡數字為學術估計，以區間呈現。平民死亡、軍人死亡、超額死亡、饑荒死亡與流離失所等不同統計口徑之差異，均於數據附註中保留。本頁任何內容皆不應被理解為侵略者與受害者之間的道德等價。",
    } satisfies Localized,
  },
} as const;
