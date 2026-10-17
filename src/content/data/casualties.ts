import type { ChartDataset, Citation } from "@/content/types";

/**
 * Human cost datasets for Chapter 04 — "The Human Cost: Beyond the Battlefield".
 *
 * Three ChartDatasets render as range-bar charts (with accessible tables) inside
 * this chapter. Units are millions of deaths; every series keeps min < max and
 * carries a note on definition, scope and caveat. Ranges preserve differing
 * definitions across scholarship — they are never collapsed into totals.
 *
 * The 14 citation records below are the shared registry for this file AND for
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

// ---------------------------------------------------------------------------
// Dataset A — war deaths, First vs Second World War
// ---------------------------------------------------------------------------

export const casualties: ChartDataset = {
  id: "casualties",
  title: { en: "The Human Cost in Ranges", zh: "以區間呈現的人類代價" },
  subtitle: {
    en: "First and Second World War deaths by category — scholarly estimates differ; bars show ranges, not counts.",
    zh: "兩次世界大戰各類死亡人數——各學術估計不盡相同；長條呈現區間，而非計數。",
  },
  unit: {
    en: "millions of deaths (documented ranges)",
    zh: "死亡人數（百萬，文獻區間）",
  },
  series: [
    {
      id: "wwi-military",
      label: { en: "WWI — military deaths", zh: "一戰——軍人陣亡" },
      min: 9,
      max: 10,
      note: {
        en: "Deaths in uniform from all causes; commonly cited around 9–10 million. Series differ on how missing-in-action and died-of-wounds are counted.",
        zh: "各原因致死的軍人死亡總數，常見引用約900萬至1,000萬；各統計對失蹤與傷重不治的計法不同。",
      },
      citationIds: ["b2-britannica-wwi"],
    },
    {
      id: "wwi-civilian",
      label: { en: "WWI — civilian deaths", zh: "一戰——平民死亡" },
      min: 5,
      max: 10,
      note: {
        en: "Civilian deaths from violence, disease and blockade-related hardship. The range is definition-driven: Britannica attributes roughly 13 million civilian deaths to the war when the 1918 influenza pandemic is included; narrower tallies run near 5–10 million.",
        zh: "死於暴力、疾病與封鎖相關困境的平民。區間由定義決定：若計入1918年流感大流行，Britannica估計戰爭相關平民死亡約1,300萬；較窄的統計則約500萬至1,000萬。",
      },
      citationIds: ["b2-britannica-wwi"],
    },
    {
      id: "wwii-military",
      label: { en: "WWII — military deaths", zh: "二戰——軍人陣亡" },
      min: 21,
      max: 25.5,
      note: {
        en: "All theaters, all belligerents, including deaths in captivity and among the missing. HISTORY's reference article gives 21–25 million military deaths; The National WWII Museum's narrower battle-death table lists about 15 million and cautions that estimates “vary widely.”",
        zh: "含所有戰區與交戰方，並計入被俘期間死亡與失蹤者。HISTORY參考文章給出2,100萬至2,500萬軍人死亡；國家二戰博物館較窄的「陣亡」表列約1,500萬，並提醒估計「差異極大」。",
      },
      citationIds: ["b2-historycom-wwii", "b2-nww2m-deaths"],
    },
    {
      id: "wwii-civilian",
      label: { en: "WWII — civilian deaths", zh: "二戰——平民死亡" },
      min: 50,
      max: 56,
      note: {
        en: "Includes the Holocaust, other mass killings, bombing, famine and disease among civilians — the majority of WWII's dead. HISTORY gives 50–55 million civilian deaths; the museum cautions that China's civilian toll alone “might well be more than 50,000,000.”",
        zh: "含大屠殺、其他集體屠殺、轟炸、饑荒與疫病造成的平民死亡——二戰死難者的大多數。HISTORY給出5,000萬至5,500萬平民死亡；博物館提醒僅中國的平民死亡「便可能超過5,000萬」。",
      },
      citationIds: ["b2-historycom-wwii", "b2-nww2m-deaths"],
    },
  ],
  citations: [b2BritannicaWwi, b2HistorycomWwii, b2Nww2mDeaths],
};

// ---------------------------------------------------------------------------
// Dataset B — victims of Nazi persecution and genocide
// ---------------------------------------------------------------------------

export const holocaust: ChartDataset = {
  id: "holocaust",
  title: { en: "Victims of Nazi Persecution and Genocide", zh: "納粹迫害與種族滅絕的受難者" },
  subtitle: {
    en: "Documented ranges for major victim groups — no single figure can summarize them.",
    zh: "主要受難群體的文獻區間——任何單一數字都無法概括。",
  },
  unit: {
    en: "millions of victims (documented ranges)",
    zh: "受難人數（百萬，文獻區間）",
  },
  series: [
    {
      id: "jews",
      label: { en: "Jews", zh: "猶太人" },
      min: 5.7,
      max: 6.0,
      note: {
        en: "The USHMM defines the Holocaust as the “persecution and murder of six million Jews by the Nazi regime and its allies and collaborators”; Yad Vashem uses the same figure. The range reflects documentation, not doubt about the crime.",
        zh: "美國大屠殺紀念博物館將大屠殺定義為「納粹政權及其盟友與協作者對六百萬猶太人的迫害與謀殺」；亞德瓦舍姆採用同一概數。區間反映的是文獻工作，而非對罪行的懷疑。",
      },
      citationIds: ["b2-ushmm-learn", "b2-yadvashem-holocaust"],
    },
    {
      id: "soviet-pows",
      label: { en: "Soviet prisoners of war", zh: "蘇聯戰俘" },
      min: 3.1,
      max: 3.5,
      note: {
        en: "Soviet POWs who died in German custody, mainly from starvation, exposure and shooting — around 3.3 million, a mortality no other captured population faced.",
        zh: "死於德方看守下的蘇聯戰俘，多因饑餓、寒凍與槍殺——約330萬，是其他被俘群體所未見的死亡率。",
      },
      citationIds: ["b2-ushmm-learn"],
    },
    {
      id: "polish-civilians",
      label: { en: "Non-Jewish Polish civilians", zh: "非猶太裔波蘭平民" },
      min: 1.8,
      max: 2.0,
      note: {
        en: "Polish civilians killed under occupation — in reprisals, camps, the destruction of Warsaw and occupation policy; commonly cited 1.8–2 million.",
        zh: "波蘭非猶太裔平民死於占領之下——報復行動、集中營、華沙的毀滅與占領政策；常見引用約180萬至200萬。",
      },
      citationIds: ["b2-ushmm-learn"],
    },
    {
      id: "roma",
      label: { en: "Roma and Sinti", zh: "羅姆人與辛提人" },
      min: 0.2,
      max: 0.5,
      note: {
        en: "The genocide of Roma and Sinti (the Porajmos). Documentation was deliberately destroyed, so scholarship can bound the toll only roughly, at some 200,000–500,000 — a bound, not a count.",
        zh: "對羅姆人與辛提人的種族滅絕（Porajmos）。文獻遭蓄意銷毀，學界僅能大致界定範圍，約20萬至50萬——這是界限，而非計數。",
      },
      citationIds: ["b2-ushmm-learn", "b2-yadvashem-holocaust"],
    },
    {
      id: "disabled",
      label: { en: "Disabled people", zh: "身心障礙者" },
      min: 0.25,
      max: 0.3,
      note: {
        en: "People with disabilities murdered in the “euthanasia” programs — Aktion T4 and its decentralized successors; commonly cited 250,000–300,000.",
        zh: "身心障礙者死於「安樂死」計畫——T4行動及其後分散化的屠殺；常見引用約25萬至30萬。",
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
    en: "Conflict destroyed food systems with lethal results — cases chosen for documentation, not exhaustiveness.",
    zh: "衝突摧毀糧食體系並致命——案例以其文獻品質入選，非求全面。",
  },
  unit: {
    en: "millions of deaths (documented ranges)",
    zh: "死亡人數（百萬，文獻區間）",
  },
  series: [
    {
      id: "bengal-1943",
      label: { en: "Bengal famine, 1943", zh: "孟加拉饑荒，1943年" },
      min: 2,
      max: 3,
      note: {
        en: "Famine in wartime Bengal under British administration: requisition, inflation, transport priorities and denied imports all contributed. Britannica cites “some three million” deaths; scholarly estimates cluster at 2–3 million.",
        zh: "英國戰時治理下的孟加拉饑荒：戰時徵購、通貨膨脹、運輸優先與進口受阻皆為成因之一。Britannica稱死亡「約三百萬」；學術估計集中在200萬至300萬。",
      },
      citationIds: ["b2-britannica-bengal"],
    },
    {
      id: "leningrad",
      label: { en: "Siege of Leningrad, 1941–44", zh: "列寧格勒圍城戰，1941–44" },
      min: 0.8,
      max: 1.1,
      note: {
        en: "Mostly civilian starvation deaths during the 872-day siege (8 September 1941 – 27 January 1944); total deaths including military casualties run higher still.",
        zh: "為期872天的圍城（1941年9月8日至1944年1月27日）中，多為平民餓死；若連同軍事傷亡，總死亡更高。",
      },
      citationIds: ["b2-britannica-leningrad"],
    },
    {
      id: "greece",
      label: { en: "Greek famine, 1941–42", zh: "希臘饑荒，1941–42" },
      min: 0.1,
      max: 0.45,
      note: {
        en: "The first winter of Axis occupation: requisition, blockade conditions and broken transport. The National WWII Museum records nearly 100,000 starvation deaths in occupied Greece 1941–44; scholarly estimates including disease run to several hundred thousand — hence a deliberately wide range.",
        zh: "軸心占領後的第一個冬天：徵購、封鎖環境與運輸癱瘓。國家二戰博物館記載1941–44年被占領希臘近10萬人餓死；若計入疾病，學術估計達數十萬——因此刻意呈現寬區間。",
      },
      citationIds: ["b2-nww2m-greece"],
    },
    {
      id: "wwi-blockade",
      label: { en: "WWI Allied blockade of Germany", zh: "一戰協約國對德封鎖" },
      min: 0.4,
      max: 0.76,
      note: {
        en: "CONTESTED: excess civilian deaths in wartime Germany attributed to the Allied blockade and shortage — estimates from roughly 424,000 to 763,000. Scholarship divides the weight between blockade, harvest failure, distribution and epidemic disease (the standard study is Avner Offer's The First World War: An Agrarian Interpretation).",
        zh: "具爭議（CONTESTED）：戰時德國因封鎖與短缺而產生的超額平民死亡——估計約42.4萬至76.3萬。學界對封鎖、歉收、分配與疫病各自的權重仍有分歧（標準研究為 Avner Offer《第一次世界大戰：農業視角》）。",
      },
      citationIds: ["b2-cambridge-offer"],
    },
    {
      id: "dutch-hunger-winter",
      label: { en: "Dutch “Hunger Winter”, 1944–45", zh: "荷蘭「饑餓冬天」，1944–45" },
      min: 0.018,
      max: 0.022,
      note: {
        en: "Deaths in the occupied western Netherlands after food transport was cut following the September 1944 railway strike; the Anne Frank House records about 20,000 deaths from the hunger winter.",
        zh: "1944年9月鐵路罷工後，糧食運輸遭切斷，被占領的荷蘭西部因此死亡；安妮之家記載饑餓冬天約造成2萬人死亡。",
      },
      citationIds: ["b2-annefrank-dutch"],
    },
  ],
  citations: [b2CambridgeOffer, b2BritannicaLeningrad, b2BritannicaBengal, b2Nww2mGreece, b2AnnefrankDutch],
};
