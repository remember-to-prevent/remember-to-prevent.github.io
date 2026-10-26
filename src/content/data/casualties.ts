import type { ChartDataset, Citation } from "@/content/types";

/**
 * Human cost datasets for Chapter 04 — "The Human Cost: Beyond the Battlefield".
 *
 * Three ChartDatasets render as range-bar charts (with accessible tables) inside
 * this chapter. Units are millions of deaths. Each series carries a note on
 * definition, scope and caveat. Two evidence shapes are used (audit
 * RTP-F005–F013): a documented range with BOTH endpoints attributed
 * (min < max), or a single attributed approximate point estimate (`point`)
 * when the source gives one approximation — endpoints are never invented to
 * force a range, and series are never collapsed into totals.
 *
 * The 17 citation records below are the shared registry for this file AND for
 * chapters/ch4.ts (which imports them), so the site footer deduplicates cleanly.
 * All URLs were probed on 2026-10-17: 200-verified links carry a verification
 * note; bot-blocked canonical Britannica pages carry the honest 403 note.
 */

// ---------------------------------------------------------------------------
// Shared citation registry (b2- prefix; used by the three datasets and ch4.ts)
// ---------------------------------------------------------------------------

export const b2BritannicaWwi: Citation = {
  id: "b2-britannica-wwi",
  publisher: "Encyclopaedia Britannica",
  title: {
    en: "World War I — casualties (killed, wounded and missing)",
    zh: "第一次世界大戰——傷亡（陣亡、負傷與失蹤）",
  },
  url: "https://www.britannica.com/event/World-War-I",
  kind: "reference",
  accessDate: "2026-10-17",
  note: {
    en: "Automated check blocked (HTTP 403, bot protection); canonical institutional URL; browser verification pending.",
    zh: "自動檢查遭封鎖（HTTP 403，防爬蟲）；此為該機構正式頁面；待瀏覽器驗證。",
  },
};

export const b2HistorycomWwii: Citation = {
  id: "b2-historycom-wwii",
  publisher: "HISTORY (A&E Networks)",
  title: {
    en: "World War II: Causes, Timeline, Key Battles, Facts & Legacy",
    zh: "第二次世界大戰：起因、時序、關鍵戰役、史實與遺產",
  },
  url: "https://www.history.com/articles/world-war-ii-history",
  kind: "reference",
  accessDate: "2026-10-17",
  note: {
    en: "Verified HTTP 200 on 2026-10-17. Popular reference article; casualty figures cross-checked against The National WWII Museum's research starter.",
    zh: "2026-10-17 驗證 HTTP 200。為通俗參考文章；傷亡數字已與國家二戰博物館研究入門資料交叉核對。",
  },
};

export const b2Nww2mDeaths: Citation = {
  id: "b2-nww2m-deaths",
  publisher: "The National WWII Museum",
  title: {
    en: "Research Starters: Worldwide Deaths in World War II",
    zh: "研究入門：第二次世界大戰的全球死亡",
  },
  url: "https://www.nationalww2museum.org/students-teachers/student-resources/research-starters/research-starters-worldwide-deaths-world-war",
  kind: "institutional",
  accessDate: "2026-10-17",
  note: {
    en: "Verified HTTP 200 on 2026-10-17.",
    zh: "2026-10-17 驗證 HTTP 200。",
  },
};

export const b2UshmmLearn: Citation = {
  id: "b2-ushmm-learn",
  publisher: "United States Holocaust Memorial Museum",
  title: {
    en: "Holocaust Encyclopedia — Learn (introduction to the Holocaust)",
    zh: "大屠殺百科——學習資源（大屠殺概覽）",
  },
  url: "https://www.ushmm.org/learn",
  kind: "institutional",
  accessDate: "2026-10-17",
  note: {
    en: "Verified HTTP 200 on 2026-10-17.",
    zh: "2026-10-17 驗證 HTTP 200。",
  },
};

export const b2YadvashemHolocaust: Citation = {
  id: "b2-yadvashem-holocaust",
  publisher: "Yad Vashem",
  title: {
    en: "The Holocaust — a thematic and chronological narrative",
    zh: "大屠殺——主題與編年敘事",
  },
  url: "https://www.yadvashem.org/holocaust/about.html",
  kind: "institutional",
  accessDate: "2026-10-17",
  note: {
    en: "Verified HTTP 200 on 2026-10-17.",
    zh: "2026-10-17 驗證 HTTP 200。",
  },
};

export const b2YadvashemNames: Citation = {
  id: "b2-yadvashem-names",
  publisher: "Yad Vashem",
  title: {
    en: "Holocaust Victims' Names Recovery Project",
    zh: "大屠殺受難者姓名復原計畫",
  },
  url: "https://www.yadvashem.org/remembrance/names-recovery-project.html",
  kind: "institutional",
  accessDate: "2026-10-17",
  note: {
    en: "Verified HTTP 200 on 2026-10-17.",
    zh: "2026-10-17 驗證 HTTP 200。",
  },
};

export const b2Nww2mLastMillion: Citation = {
  id: "b2-nww2m-last-million",
  publisher: "The National WWII Museum",
  title: {
    en: "“The Last Million:” Eastern European Displaced Persons in Postwar Germany",
    zh: "「最後的百萬人」：戰後德國的東歐流離失所者",
  },
  url: "https://www.nationalww2museum.org/war/articles/last-million-eastern-european-displaced-persons-postwar-germany",
  kind: "institutional",
  accessDate: "2026-10-17",
  note: {
    en: "Verified HTTP 200 on 2026-10-17.",
    zh: "2026-10-17 驗證 HTTP 200。",
  },
};

export const b2PoetryfoundationOwen: Citation = {
  id: "b2-poetryfoundation-owen",
  publisher: "Poetry Foundation",
  title: {
    en: "Wilfred Owen, “Disabled”",
    zh: "威爾弗雷德・歐文，〈傷殘〉",
  },
  url: "https://www.poetryfoundation.org/poems/57285/disabled",
  kind: "primary",
  accessDate: "2026-10-17",
  note: {
    en: "Verified HTTP 200 on 2026-10-17. Public-domain poem (written 1917; published posthumously), quoted verbatim from this page.",
    zh: "2026-10-17 驗證 HTTP 200。此為公有領域詩作（1917年作，身後出版），引文依本頁刊載版本逐字核對。",
  },
};

export const b2BritannicaLeningrad: Citation = {
  id: "b2-britannica-leningrad",
  publisher: "Encyclopaedia Britannica",
  title: {
    en: "Siege of Leningrad (September 8, 1941 – January 27, 1944)",
    zh: "列寧格勒圍城戰（1941年9月8日–1944年1月27日）",
  },
  url: "https://www.britannica.com/event/Siege-of-Leningrad",
  kind: "reference",
  accessDate: "2026-10-17",
  note: {
    en: "Automated check blocked (HTTP 403, bot protection); canonical institutional URL; browser verification pending.",
    zh: "自動檢查遭封鎖（HTTP 403，防爬蟲）；此為該機構正式頁面；待瀏覽器驗證。",
  },
};

export const b2BritannicaBengal: Citation = {
  id: "b2-britannica-bengal",
  publisher: "Encyclopaedia Britannica",
  title: {
    en: "Bengal famine of 1943",
    zh: "1943年孟加拉饑荒",
  },
  url: "https://www.britannica.com/topic/Bengal-famine-of-1943",
  kind: "reference",
  accessDate: "2026-10-17",
  note: {
    en: "Automated check blocked (HTTP 403, bot protection); canonical institutional URL; browser verification pending.",
    zh: "自動檢查遭封鎖（HTTP 403，防爬蟲）；此為該機構正式頁面；待瀏覽器驗證。",
  },
};

export const b2CambridgeOffer: Citation = {
  id: "b2-cambridge-offer",
  publisher: "The Historical Journal (Cambridge Core)",
  title: {
    en: "Review of Avner Offer, “The First World War: An Agrarian Interpretation” (Oxford University Press, 1989)",
    zh: "書評：Avner Offer《第一次世界大戰：農業視角》（牛津大學出版社，1989年）",
  },
  url: "https://www.cambridge.org/core/journals/historical-journal/article/first-world-war-an-agrarian-interpretation-by-avner-offer-oxford-oxford-university-press-1989-pp-449-25/6AC357C22D12E6C58F7B9682D418DFAB",
  kind: "scholarly",
  accessDate: "2026-10-17",
  note: {
    en: "Verified HTTP 200 on 2026-10-17. Academic book-review record for the standard study of the First World War's agricultural and blockade history.",
    zh: "2026-10-17 驗證 HTTP 200。為一戰農業與封鎖史標準研究的學術書評紀錄。",
  },
};

export const b2Nww2mGreece: Citation = {
  id: "b2-nww2m-greece",
  publisher: "The National WWII Museum",
  title: {
    en: "The Greek Civil War, 1944–1949",
    zh: "希臘內戰，1944–1949",
  },
  url: "https://www.nationalww2museum.org/war/articles/greek-civil-war-1944-1949",
  kind: "institutional",
  accessDate: "2026-10-17",
  note: {
    en: "Verified HTTP 200 on 2026-10-17. Article summarizes the Axis occupation of Greece 1941–44, including famine deaths.",
    zh: "2026-10-17 驗證 HTTP 200。文章概述1941–44年軸心占領下的希臘，含饑荒死亡。",
  },
};

export const b2AnnefrankDutch: Citation = {
  id: "b2-annefrank-dutch",
  publisher: "Anne Frank House",
  title: {
    en: "Hunger winter: hunger and cold in the Netherlands",
    zh: "饑餓冬天：荷蘭的饑餓與寒冷",
  },
  url: "https://www.annefrank.org/en/timeline/91/hunger-winter-hunger-and-cold-in-the-netherlands",
  kind: "institutional",
  accessDate: "2026-10-17",
  note: {
    en: "Verified HTTP 200 on 2026-10-17.",
    zh: "2026-10-17 驗證 HTTP 200。",
  },
};

export const b2Gfc: Citation = {
  id: "b2-gfc",
  publisher: "Global Food Crisis (independent project)",
  title: {
    en: "Global Food Crisis — armed conflict and food insecurity today",
    zh: "全球糧食危機——今日的武裝衝突與糧食不安全",
  },
  url: "https://global-food-crisis.com/",
  kind: "reference",
  accessDate: "2026-10-17",
  note: {
    en: "Verified HTTP 200 on 2026-10-17. Separate independent project; cross-linked as further reading only.",
    zh: "2026-10-17 驗證 HTTP 200。為另一獨立計畫，僅作延伸閱讀交叉連結。",
  },
};


export const b2HistorycomWwiDeaths: Citation = {
  id: "b2-historycom-wwi-deaths",
  publisher: "HISTORY (A&E Networks)",
  title: {
    en: "How Many People Died in World War I?",
    zh: "第一次世界大戰死了多少人？",
  },
  url: "https://www.history.com/articles/how-many-people-died-in-world-war-i",
  kind: "reference",
  accessDate: "2026-10-27",
  note: {
    en: "Verified HTTP 200 on 2026-10-27. Dedicated HISTORY tally: slightly more than 9.7 million military dead and more than 6.8 million civilian dead.",
    zh: "2026-10-27 驗證 HTTP 200。HISTORY 專文統計：軍人死亡略多於970萬、平民死亡逾680萬。",
  },
};

export const b2HistorycomLeningrad: Citation = {
  id: "b2-historycom-leningrad",
  publisher: "HISTORY (A&E Networks)",
  title: {
    en: "The Siege of Leningrad: When Hitler Used Starvation as a Weapon",
    zh: "列寧格勒圍城：當希特勒以飢餓為武器",
  },
  url: "https://www.history.com/articles/the-siege-of-leningrad",
  kind: "reference",
  accessDate: "2026-10-27",
  note: {
    en: "Verified HTTP 200 on 2026-10-27. Estimates about 800,000 civilian deaths over the full siege.",
    zh: "2026-10-27 驗證 HTTP 200。估計整個圍城期間約80萬名平民死亡。",
  },
};

export const b2CoxBlockade: Citation = {
  id: "b2-cox-blockade",
  publisher: "Central European University — Research (M. E. Cox)",
  title: {
    en: "The blockade in the First World War (2024)",
    zh: "第一次世界大戰的封鎖（2024）",
  },
  url: "https://research.ceu.edu/en/publications/the-blockade-in-the-first-world-war",
  kind: "scholarly",
  accessDate: "2026-10-27",
  note: {
    en: "Verified HTTP 200 on 2026-10-27. Scholarly survey summarizing excess civilian death estimates of some 424,000–763,000 attributed to the wartime blockade.",
    zh: "2026-10-27 驗證 HTTP 200。學術綜述，摘要戰時封鎖相關超額平民死亡估計約42.4萬至76.3萬。",
  },
};

// ---------------------------------------------------------------------------
// Dataset A — war deaths, First vs Second World War
// ---------------------------------------------------------------------------

export const casualties: ChartDataset = {
  id: "casualties",
  title: { en: "The Human Cost in Ranges", zh: "以區間呈現的人類代價" },
  subtitle: {
    en: "First and Second World War deaths by category. Bars span attributed estimates; ≈ markers mark single-source approximations. Nothing here is a precise count, and the series are not additive.",
    zh: "兩次世界大戰各類死亡人數。長條橫跨具名來源的估計，≈ 標記代表單一來源的近似值。此處沒有任何精確計數，各數列亦不可加總。",
  },
  unit: {
    en: "millions of deaths (attributed estimates)",
    zh: "死亡人數（百萬；具名來源估計）",
  },
  series: [
    {
      id: "wwi-military",
      label: { en: "WWI — military deaths", zh: "一戰——軍人死亡" },
      min: 8.5,
      max: 9.7,
      note: {
        en: "Deaths in uniform from all causes. The endpoints are two named institutional tallies, not a confidence interval: Britannica's overview counts about 8.5 million soldiers dead from wounds and disease; HISTORY's dedicated tally records slightly more than 9.7 million military dead. The spread reflects different compilations and rules for counting the missing.",
        zh: "各原因致死的軍人死亡總數。兩端為兩個具名機構統計，並非信賴區間：Britannica 概述估計約850萬名士兵死於傷病；HISTORY 專文統計略多於970萬名軍人死亡。差異反映不同的彙編與失蹤者計法。",
      },
      citationIds: ["b2-britannica-wwi", "b2-historycom-wwi-deaths"],
    },
    {
      id: "wwi-civilian",
      label: { en: "WWI — civilian deaths", zh: "一戰——平民死亡" },
      min: 6.8,
      max: 13,
      note: {
        en: "Civilian deaths from violence, disease and blockade-related hardship. The endpoints are different definitions, not one interval: HISTORY's tally records more than 6.8 million civilian deaths; Britannica attributes roughly 13 million civilian deaths to the war when the 1918 influenza pandemic is included. The width of the bar is the definitional spread.",
        zh: "死於暴力、疾病與封鎖相關困境的平民。兩端是不同定義，而非同一區間：HISTORY 統計平民死亡逾680萬；Britannica 在計入1918年流感大流行時，估計戰爭相關平民死亡約1,300萬。長條寬度代表定義差異。",
      },
      citationIds: ["b2-historycom-wwi-deaths", "b2-britannica-wwi"],
    },
    {
      id: "wwii-military",
      label: { en: "WWII — military deaths", zh: "二戰——軍人死亡" },
      min: 21,
      max: 25,
      note: {
        en: "All theaters, all belligerents. HISTORY's overview gives approximately 21–25 million military deaths — an approximate range from one overview, not a confidence interval. The National WWII Museum's simpler table counts about 15 million battle deaths, a narrower category that is not directly comparable; that page contains internally inconsistent totals and is not used here to derive figures.",
        zh: "含所有戰區與交戰方。HISTORY 概述給出約2,100萬至2,500萬軍人死亡——這是單一概述的近似區間，並非信賴區間。國家二戰博物館的簡表列出約1,500萬「陣亡」，屬較窄類別、不可直接比較；該頁另有內部不一致的數字，本站不以之作為推算依據。",
      },
      citationIds: ["b2-historycom-wwii", "b2-nww2m-deaths"],
    },
    {
      id: "wwii-civilian",
      label: { en: "WWII — civilian deaths", zh: "二戰——平民死亡" },
      min: 50,
      max: 55,
      note: {
        en: "Includes the Holocaust, other mass killings, bombing, famine and disease among civilians — in the estimates discussed here, the majority of WWII's dead. HISTORY's overview gives approximately 50–55 million civilian deaths; broader compilations that include famine and disease reach toward 85 million total dead. These are approximate overview figures, not confidence intervals.",
        zh: "含大屠殺、其他集體屠殺、轟炸、饑荒與疫病造成的平民死亡——在本章引用的估計中，為二戰死難者的大多數。HISTORY 概述給出約5,000萬至5,500萬平民死亡；計入饑荒與疫病的較寬彙編，總死亡可達8,500萬。這些是概述性的近似數字，並非信賴區間。",
      },
      citationIds: ["b2-historycom-wwii"],
    },
  ],
  citations: [b2BritannicaWwi, b2HistorycomWwiDeaths, b2HistorycomWwii, b2Nww2mDeaths],
};

// ---------------------------------------------------------------------------
// Dataset B — victims of Nazi persecution and genocide
// ---------------------------------------------------------------------------

export const holocaust: ChartDataset = {
  id: "holocaust",
  title: { en: "Victims of Nazi Persecution and Genocide", zh: "納粹迫害與種族滅絕的受難者" },
  subtitle: {
    en: "Selected victim groups — not an exhaustive list. Categories overlap and the sources differ: do not add these figures to each other, to war-death totals, or to the hunger cases.",
    zh: "部分受害群體——並非完整名單。類別可能重疊、來源各異：這些數字不得互相加總，也不得加到戰爭總死亡或饑荒案例上。",
  },
  unit: {
    en: "millions of victims (attributed estimates)",
    zh: "受難人數（百萬；具名來源估計）",
  },
  series: [
    {
      id: "jews",
      label: { en: "Jews", zh: "猶太人" },
      point: 6,
      note: {
        en: "Approximately six million Jews were murdered in the Holocaust. The USHMM defines the Holocaust as the “systematic, state-sponsored persecution and murder of six million Jews by the Nazi regime and its allies and collaborators”; Yad Vashem works from the same figure. Shown as a point estimate — the standard institutional approximation, not a range.",
        zh: "約600萬猶太人在大屠殺中遭到謀殺。美國大屠殺紀念博物館將大屠殺定義為「納粹政權及其盟友與協作者對六百萬猶太人有系統、由國家支持的迫害與謀殺」；亞德瓦舍姆採用同一概數。此處以單點呈現——機構採用的標準概數，而非區間。",
      },
      citationIds: ["b2-ushmm-learn", "b2-yadvashem-holocaust"],
    },
    {
      id: "soviet-pows",
      label: { en: "Soviet prisoners of war", zh: "蘇聯戰俘" },
      point: 3.3,
      note: {
        en: "Approximately 3.3 million Soviet POWs died in German custody, mainly from starvation, exposure and shooting — per the USHMM's documentation, a mortality rate no other captured population faced. Shown as a point estimate.",
        zh: "約330萬名蘇聯戰俘死於德方看守之下，多因饑餓、寒凍與槍殺——依美國大屠殺紀念博物館的文件，這是其他被俘群體所未見的死亡率。此處以單點呈現。",
      },
      citationIds: ["b2-ushmm-learn"],
    },
    {
      id: "polish-civilians",
      label: { en: "Non-Jewish Polish civilians", zh: "非猶太裔波蘭平民" },
      point: 1.8,
      note: {
        en: "About 1.8 million non-Jewish Polish civilians were killed under occupation — in reprisals, camps, the destruction of Warsaw and occupation policy — per the USHMM's documentation. Shown as a point estimate; other compilations run higher.",
        zh: "約180萬名非猶太裔波蘭平民死於占領之下——報復行動、集中營、華沙的毀滅與占領政策——依美國大屠殺紀念博物館的文件。此處以單點呈現；其他彙編數字較高。",
      },
      citationIds: ["b2-ushmm-learn"],
    },
    {
      id: "roma",
      label: { en: "Roma and Sinti", zh: "羅姆人與辛提人" },
      min: 0.25,
      max: 0.5,
      note: {
        en: "The genocide of Roma and Sinti (the Porajmos). Documentation was deliberately destroyed, so the toll can be bounded only roughly: the USHMM currently estimates at least 250,000 and possibly as many as 500,000 murdered. Older, lower estimates survive in the literature and should be attributed by author and date when cited.",
        zh: "對羅姆人與辛提人的種族滅絕（Porajmos）。文獻遭蓄意銷毀，僅能大致界定：美國大屠殺紀念博物館目前估計至少25萬人、可能多達50萬人遇害。文獻中另有較舊、較低的估計，引用時應標明作者與年代。",
      },
      citationIds: ["b2-ushmm-learn", "b2-yadvashem-holocaust"],
    },
    {
      id: "disabled",
      label: { en: "Disabled people", zh: "身心障礙者" },
      min: 0.25,
      max: 0.3,
      note: {
        en: "People with disabilities murdered in the “euthanasia” programs — Aktion T4 and its decentralized successors; the USHMM documents the toll at roughly 250,000–300,000.",
        zh: "身心障礙者死於「安樂死」計畫——T4行動及其後分散化的屠殺；美國大屠殺紀念博物館記載約25萬至30萬人。",
      },
      citationIds: ["b2-ushmm-learn"],
    },
  ],
  citations: [b2UshmmLearn, b2YadvashemHolocaust],
};

// ---------------------------------------------------------------------------
// Dataset C — war and hunger, selected cases
// ---------------------------------------------------------------------------

export const hunger: ChartDataset = {
  id: "hunger",
  title: { en: "War and Hunger: Selected Cases", zh: "戰爭與饑餓：案例選輯" },
  subtitle: {
    en: "Conflict destroyed food systems with lethal results — cases chosen for documentation, not exhaustiveness. Each case uses its own source, period and definition; the figures are not additive.",
    zh: "衝突摧毀糧食體系並致命——案例以其文獻品質入選，非求全面。各案例採用各自的來源、期間與定義；這些數字不可加總。",
  },
  unit: {
    en: "millions of deaths (attributed estimates)",
    zh: "死亡人數（百萬；具名來源估計）",
  },
  series: [
    {
      id: "bengal-1943",
      label: { en: "Bengal famine, 1943", zh: "孟加拉饑荒，1943年" },
      point: 3,
      note: {
        en: "Famine in wartime Bengal under British administration: requisition, inflation, transport priorities and denied imports all contributed. Britannica reports about three million deaths from malnutrition or disease; scholarly estimates differ, some lower. Shown as a point estimate.",
        zh: "英國戰時治理下的孟加拉饑荒：戰時徵購、通貨膨脹、運輸優先與進口受阻皆為成因之一。Britannica 記載約300萬人死於營養不良或疾病；學術估計不一，部分較低。此處以單點呈現。",
      },
      citationIds: ["b2-britannica-bengal"],
    },
    {
      id: "leningrad",
      label: { en: "Siege of Leningrad, 1941–44", zh: "列寧格勒圍城戰，1941–44" },
      point: 0.8,
      note: {
        en: "HISTORY's account of the siege estimates about 800,000 civilian deaths over the full 872-day siege (8 September 1941 – 27 January 1944), from starvation, disease, exposure and bombardment; in 1942 alone about 650,000 Leningrad citizens perished. Shown as a point estimate; military casualties are excluded here.",
        zh: "依 HISTORY 對圍城的記述，為期872天的圍城（1941年9月8日至1944年1月27日）估計造成約80萬名平民死亡，死因包括饑餓、疾病、寒凍與砲擊；僅1942年即約65萬名列寧格勒市民死亡。此處以單點呈現，不含軍事傷亡。",
      },
      citationIds: ["b2-historycom-leningrad", "b2-britannica-leningrad"],
    },
    {
      id: "greece",
      label: { en: "Greek famine under occupation, 1941–44", zh: "希臘占領期饑荒，1941–44" },
      point: 0.1,
      note: {
        en: "The National WWII Museum records nearly 100,000 starvation deaths in occupied Greece across the whole 1941–44 occupation — not the first winter alone; requisition, blockade conditions and broken transport drove it. Scholarly estimates that include disease run higher. Shown as a point estimate for the documented starvation toll.",
        zh: "國家二戰博物館記載，1941至1944年整個占領期間，被占領的希臘近10萬人餓死——並非僅第一個冬天；成因包括徵購、封鎖環境與運輸癱瘓。若計入疾病，學術估計更高。此處以文獻記載的餓死人數作單點呈現。",
      },
      citationIds: ["b2-nww2m-greece"],
    },
    {
      id: "wwi-blockade",
      label: { en: "WWI Allied blockade of Germany", zh: "一戰協約國對德封鎖" },
      min: 0.424,
      max: 0.763,
      note: {
        en: "CONTESTED: excess civilian deaths in wartime Germany attributed to the Allied blockade and shortage. The endpoints trace to German official estimates — roughly 424,000 by one excess-death calculation, and 763,000 claimed by the German Board of Public Health by December 1918 — a span summarized in Cox's 2024 survey of the blockade. Scholarship divides the weight between blockade, harvest failure, distribution and epidemic disease; Avner Offer's The First World War: An Agrarian Interpretation remains the standard study.",
        zh: "具爭議（CONTESTED）：戰時德國因封鎖與短缺而產生的超額平民死亡。兩端可追溯至德國官方估計——一種超額死亡計算約42.4萬，德國衛生委員會於1918年12月則稱76.3萬——此區間見於 Cox 2024 年對封鎖的綜述。學界對封鎖、歉收、分配與疫病各自的權重仍有分歧；Avner Offer《第一次世界大戰：農業視角》仍是標準研究。",
      },
      citationIds: ["b2-cox-blockade", "b2-cambridge-offer"],
    },
    {
      id: "dutch-hunger-winter",
      label: { en: "Dutch “Hunger Winter”, 1944–45", zh: "荷蘭「饑餓冬天」，1944–45" },
      point: 0.02,
      note: {
        en: "Deaths in the occupied western Netherlands after food transport was cut following the September 1944 railway strike; the Anne Frank House records about 20,000 deaths from the hunger winter. Shown as a point estimate.",
        zh: "1944年9月鐵路罷工後，糧食運輸遭切斷，被占領的荷蘭西部因此死亡；安妮之家記載饑餓冬天約造成2萬人死亡。此處以單點呈現。",
      },
      citationIds: ["b2-annefrank-dutch"],
    },
  ],
  citations: [b2CambridgeOffer, b2CoxBlockade, b2HistorycomLeningrad, b2BritannicaLeningrad, b2BritannicaBengal, b2Nww2mGreece, b2AnnefrankDutch],
};
