import type { ChapterContent } from "@/content/types";

/**
 * Chapter 01 — The Question: Why Remember?
 * Bilingual (EN / 繁體中文) editorial content. Agent task 4-a.
 * Citations: ids prefixed "a-", all verified or canonical (see note fields).
 */
export const ch1: ChapterContent = {
  id: "ch1",
  navLabel: { en: "The Question", zh: "提問" },
  number: "01",
  title: { en: "The Question: Why Remember?", zh: "提問：為何銘記？" },
  question: {
    en: "How did decisions, institutions, ideologies, and social conditions allow catastrophic suffering — and what can we learn without assuming history simply repeats?",
    zh: "是哪些決策、制度、意識形態與社會條件，讓災難性的苦難成為可能？我們能從中學到什麼，而不必假設歷史會簡單重演？",
  },
  lead: [
    {
      en: "Between 1914 and 1945, the world was twice pulled into total war. The combined human cost is counted in tens of millions of lives — soldiers and civilians, cities and villages, empires and generations. Behind those figures stand identifiable decisions, institutions, ideologies, and social conditions that made such suffering possible.",
      zh: "1914年至1945年間，世界兩度被捲入總體戰。兩場合計的人類代價以數千萬生命計——軍人與平民、城市與村莊、帝國與世代。在這些數字背後，是可辨識的決策、制度、意識形態與社會條件，使如此巨大的苦難成為可能。",
    },
    {
      en: "This chapter asks the question that governs everything that follows: not “who won?” but “how was this possible?” — and what people can honestly learn from the answer, without assuming that history simply repeats itself. One promise runs through the whole site: historical facts and present-day reflections are labelled separately, and every number appears as the documented range it really is.",
      zh: "本章提出貫穿全站的問題：不是「誰贏了？」，而是「這一切如何可能？」——以及人們能從答案中誠實地學到什麼，而不必假設歷史會簡單重演。全站信守同一個承諾：歷史事實與今日省思分開標註，每個數字都以有據可查的區間呈現。",
    },
  ],
  sections: [
    {
      id: "the-eleventh-hour",
      heading: { en: "The eleventh hour", zh: "第十一小時" },
      paragraphs: [
        {
          en: "At 11:00 on 11 November 1918 — the eleventh hour of the eleventh day of the eleventh month — the guns on the Western Front fell silent under an armistice signed in the Forest of Compiègne. The moment was exact, and it was deliberately remembered: the silence that followed became, in many countries, an annual appointment with the dead of the world wars.",
          zh: "1918年11月11日上午11時——第十一個月的第十一天的第十一個小時——西線的炮火在貢比涅森林簽署的停戰協定下歸於沉寂。這個時刻如此精確，也因此被刻意銘記：其後的靜默，在許多國家成為與兩場大戰亡者一年一度的約定。",
        },
        {
          en: "Two years later, on 11 November 1920, an unidentified British soldier was brought from France and buried at the west end of Westminster Abbey, as the Cenotaph was unveiled in Whitehall that same morning. The idea — mourning one unnamed man so that all the unnamed dead might be mourned — spread to other nations after the war. Remembrance here is built on that kind of fact: specific, checkable, and human-scaled.",
          zh: "兩年後的1920年11月11日，一名身分不明的英國士兵自法國迎回，安葬於西敏寺西端；同一天早晨，白廳的和平紀念碑（Cenotaph）揭幕。以一位無名者悼念所有無名亡者——這個理念在戰後為多個國家所採。銘記正是建立在這類事實之上：具體、可查證，且以人的尺度呈現。",
        },
        {
          en: "This project begins with remembrance because remembrance is where most people enter history — through a date, a silence, a name on a wall. It is a starting point, and only a starting point. What remembering cannot do by itself is explain how the remembered dead came to die; that is the work of the chapters that follow.",
          zh: "本計畫以銘記開始，因為多數人是透過銘記走進歷史的——一個日期、一段靜默、牆上的一個名字。它是起點，也僅是起點。單靠銘記無法解釋被銘記的亡者如何走向死亡；那是後續章節的工作。",
        },
      ],
      callout: {
        kind: "fact",
        text: {
          en: "The Unknown Warrior was buried in Westminster Abbey on Armistice Day, 11 November 1920, in the presence of King George V. An unidentified British serviceman, brought from France, he was deliberately left unidentified — his name, rank and regiment remain unknown. His is the only gravestone in the Abbey that people cannot walk on, out of respect.",
          zh: "無名戰士（The Unknown Warrior）於1920年11月11日停戰紀念日安葬於西敏寺，英王喬治五世在場觀禮。他是一名自法國迎回、身分未能辨識的英國軍人，被刻意保持無名——其姓名、軍階與所屬部隊至今不明。他的墓石是西敏寺中唯一出於敬意而不得踩踏的一座。",
        },
        citationIds: ["a-westminster-unknown-warrior", "a-worldwar-armistice"],
      },
      citationIds: ["a-westminster-unknown-warrior", "a-worldwar-armistice"],
    },
    {
      id: "why-numbers-alone-fail",
      heading: { en: "Why numbers alone fail us", zh: "為何數字本身並不足夠" },
      paragraphs: [
        {
          en: "How many people died in the two world wars? No honest answer is a single number. For the First World War, attributed estimates run from roughly eight and a half to nearly ten million military deaths, and past fifteen million once civilians are included; for the Second World War, the totals themselves span tens of millions of lives, depending on what is counted. The ranges are not carelessness — they are part of the finding.",
          zh: "兩次世界大戰究竟死了多少人？誠實的答案不會是單一數字。以第一次世界大戰而言，具名估計約為850萬至近1,000萬軍人死亡，納入平民則超過1,500萬；第二次世界大戰的總數本身更橫跨數千萬生命，取決於統計口徑。這些區間並非疏漏——它們本身就是研究發現的一部分。",
        },
        {
          en: "Behind every range stands a method. Borders moved and states collapsed; records were destroyed or never kept; the “missing” and the “dead” were not the same thing; famine and epidemic ran along the war's edges, and the 1918 influenza pandemic overlapped the war's end so closely that no one can fully separate its dead from the war's. Who counts as a victim — a colonial subject, a refugee, a forced labourer — is itself a decision.",
          zh: "每個區間背後都是一種方法：國界變動、政權崩潰；檔案毀損或根本未曾建立；「失蹤」與「陣亡」並不相同；饑荒與疫病在戰爭邊緣蔓延，而1918年大流感與戰爭尾聲重疊之深，使無人能將兩者的死者完全分開。誰算是受害者——殖民地子民、難民、強制勞工——本身就是一項選擇。",
        },
        {
          en: "Numbers also numb. A figure in the millions asks nothing of the person reading it, while one documented fate — a name, a street, a date — asks something of us. The honest approach is to hold both: the range for the scale, the single story for the meaning.",
          zh: "數字同時也使人麻木。以百萬計的數字對閱讀者一無所求；一個有據可查的命運——一個名字、一條街、一個日期——卻對我們有所要求。誠實的做法是兩者並持：以區間掌握規模，以單一故事承接意義。",
        },
      ],
      callout: {
        kind: "methodology",
        text: {
          en: "On the numbers: this site never displays a live or precisely totalled casualty counter. Where totals are given, they appear as documented ranges, with notes on scope — military or civilian, battle deaths or war-related deaths, which borders, which years. An estimate shown as a range is not a weaker fact; it is the more honest one.",
          zh: "關於數字：本站絕不顯示即時或精確加總的傷亡計數器。凡給出總數，皆以有據可查的區間呈現，並註明範圍——軍人或平民、陣亡或戰爭相關死亡、哪些國界、哪些年份。以區間呈現的估計不是較弱的事實，而是更誠實的事實。",
        },
        citationIds: ["a-britannica-wwi"],
      },
      citationIds: ["a-britannica-wwi", "a-iwm-wwi"],
    },
    {
      id: "many-calendars-of-memory",
      heading: { en: "Remembrance has many calendars", zh: "紀念的曆法，因國而異" },
      paragraphs: [
        {
          en: "Remembrance is not one global ritual but a family of national and institutional traditions, each shaped by a particular history. Britain holds its principal ceremony on Remembrance Sunday, with a two-minute silence observed at 11:00 on 11 November; the United States repurposed that date as Veterans Day, honouring all who served, while its war dead are remembered on Memorial Day in May.",
          zh: "銘記並非單一的全球儀式，而是一個由各國與各機構傳統組成的家族，各自源於不同的歷史。英國的主要儀式在「國殤星期日」舉行，並於11月11日上午11時默哀兩分鐘；美國則將這一天轉化為「退伍軍人節」，向所有服役者致意，陣亡者另於5月的「陣亡將士紀念日」追思。",
        },
        {
          en: "Australia and New Zealand remember on Anzac Day, 25 April — the anniversary of the 1915 Gallipoli landings — where dawn services have become the centre of the national year of memory. France and Belgium keep 11 November as a public holiday; Germany mourns its war dead on Volkstrauertag in November; Türkiye honours its Gallipoli fallen on 18 March; and the United Nations dedicates 27 January, the anniversary of the liberation of Auschwitz, to the memory of the victims of the Holocaust. The dates differ because the histories differ. None of them is wrong; each of them is partial.",
          zh: "澳洲與紐西蘭在4月25日「澳紐軍團日」紀念1915年加里波利登陸，拂曉儀式已成為兩國記憶之年的中心。法國與比利時將11月11日定為國定假日；德國在11月的「國民哀悼日」悼念戰爭亡者；土耳其於3月18日向加里波利陣亡將士致敬；聯合國則以奧斯威辛解放週年的1月27日，悼念大屠殺的遇難者。日期不同，是因為歷史不同。沒有哪一個是錯的——每一個都只是一部。",
        },
      ],
      citationIds: ["a-awm-wwi", "a-iwm-wwi"],
    },
    {
      id: "what-understanding-adds",
      heading: { en: "What understanding adds to remembering", zh: "理解為銘記添上什麼" },
      paragraphs: [
        {
          en: "Remembrance says: this mattered, and these people existed. Understanding asks the harder questions that follow — which decisions, made by whom, under what institutional pressures, with which ideas in circulation? A minute of silence honours the dead of 1914–1918; it cannot explain how a Balkan assassination became a world war, or why the war's ending contained the beginnings of the next catastrophe.",
          zh: "銘記說的是：這件事重要，這些人存在過。理解問的卻是隨之而來更難的問題——哪些決策？由誰做出？在什麼制度壓力之下？當時流通的是哪些觀念？一分鐘的默哀向1914至1918年的亡者致意，卻無法解釋一場巴爾幹刺殺如何變成世界大戰，也無法解釋這場戰爭的結局為何埋藏著下一場災難的開端。",
        },
        {
          en: "That is why this project pairs memory with method. Sources are named; claims are qualified; where historians genuinely disagree, the disagreement is shown rather than smoothed away. The point is not to drain feeling out of history, but to give that feeling somewhere honest to land — in questions we can actually act upon.",
          zh: "因此本計畫將記憶與方法並置：標明出處、限定表述；凡歷史學家真有分歧之處，便如實呈現分歧，而非將其抹平。目的不是抽走歷史中的情感，而是讓情感有一個誠實的落點——落在我們真正能夠行動的問題上。",
        },
      ],
      callout: {
        kind: "reflection",
        text: {
          en: "Remembering is an act of respect; understanding is an act of responsibility. Memory without analysis hardens into ritual, and analysis without memory forgets who the analysis is for. The chapters that follow try to keep both.",
          zh: "銘記是出於敬意；理解是出於責任。沒有分析的記憶會凝固為儀式，沒有記憶的分析則忘了分析是為了誰。接下來的章節，將努力兩者兼備。",
        },
      },
      citationIds: ["a-worldwar-armistice", "a-iwm-wwi"],
    },
    {
      id: "the-promise-and-limits-of-analogy",
      heading: { en: "The promise and the limits of analogy", zh: "類比的用處與限度" },
      paragraphs: [
        {
          en: "People reach for the First World War to explain the present: an alliance system that “sleepwalked” into catastrophe, a domino of ultimatums, a war nobody wanted. Analogies carry structure from a documented past to an unfamiliar present — and they mislead when treated as prophecies, because history does not simply repeat. 1914 is not a template that today's crises must fit; it is one fully documented case of how escalation can outrun intention.",
          zh: "人們常援引第一次世界大戰來解釋當下：一個「夢遊」般走向災難的同盟體系、一連串骨牌般的最後通牒、一場沒有人真正想要的戰爭。類比把有據可查的過去所含的結構，帶到陌生的現在——但若被當成預言，它便會誤導，因為歷史不會簡單重演。1914年並不是今日危機必須套用的模板；它只是一個完整記錄在案的案例，說明升高如何能夠跑贏意圖。",
        },
        {
          en: "The misuse of analogy is as well documented as the wars themselves: the “lesson of Munich” has been invoked to justify both action and inaction, often at great cost. The honest discipline is different — study how decisions actually interacted (the timetables, the pledges, the fear of moving second), then ask, case by case, where a present situation resembles that structure and where it does not. That question, rather than a slogan, is what this site exists to support.",
          zh: "類比的誤用，與戰爭本身一樣有案可查：「慕尼黑的教訓」曾被同時用來正當化行動與不行動，代價往往高昂。誠實的紀律是另一回事——先研究決策實際上如何互動（時間表、保證、怕自己慢一步的恐懼），再逐案追問：眼前的處境在哪裡與那個結構相似、哪裡不似。這個問題，而非一句口號，才是本站存在的目的。",
        },
      ],
      citationIds: ["a-britannica-wwi", "a-iwm-wwi"],
    },
  ],
  citations: [
    {
      id: "a-westminster-unknown-warrior",
      publisher: "Westminster Abbey",
      title: {
        en: "The Unknown Warrior (Abbey commemorations)",
        zh: "無名戰士（西敏寺紀念專頁）",
      },
      url: "https://www.westminster-abbey.org/abbey-commemorations/commemorations/unknown-warrior",
      kind: "institutional",
      accessDate: "2026-10-17",
      note: {
        en: "Verified HTTP 200 on 2026-10-17.",
        zh: "2026-10-17 驗證 HTTP 200。",
      },
    },
    {
      id: "a-worldwar-armistice",
      publisher: "National WWI Museum and Memorial",
      title: {
        en: "The Armistice",
        zh: "停戰",
      },
      url: "https://www.theworldwar.org/learn/about-wwi/armistice",
      kind: "institutional",
      accessDate: "2026-10-17",
      note: {
        en: "Verified HTTP 200 on 2026-10-17.",
        zh: "2026-10-17 驗證 HTTP 200。",
      },
    },
    {
      id: "a-iwm-wwi",
      publisher: "Imperial War Museums",
      title: {
        en: "First World War — histories and collections",
        zh: "第一次世界大戰——歷史與藏品",
      },
      url: "https://www.iwm.org.uk/",
      kind: "institutional",
      accessDate: "2026-10-17",
      note: {
        en: "Automated check blocked (HTTP 403, bot protection); canonical institutional URL; browser verification pending.",
        zh: "自動檢查遭封鎖（HTTP 403，防爬蟲）；此為該機構正式頁面；待瀏覽器驗證。",
      },
    },
    {
      id: "a-awm-wwi",
      publisher: "Australian War Memorial",
      title: {
        en: "First World War — histories and commemoration (Gallipoli, Anzac Day, Armistice)",
        zh: "第一次世界大戰——戰史與紀念（加里波利、澳紐軍團日、停戰）",
      },
      url: "https://www.awm.gov.au/",
      kind: "institutional",
      accessDate: "2026-10-17",
      note: {
        en: "Automated check blocked (HTTP 403, bot protection); canonical institutional URL; browser verification pending.",
        zh: "自動檢查遭封鎖（HTTP 403，防爬蟲）；此為該機構正式頁面；待瀏覽器驗證。",
      },
    },
    {
      id: "a-britannica-wwi",
      publisher: "Encyclopaedia Britannica",
      title: {
        en: "World War I (1914–18)",
        zh: "第一次世界大戰（1914–1918）",
      },
      url: "https://www.britannica.com/event/World-War-I",
      kind: "reference",
      accessDate: "2026-10-17",
      note: {
        en: "Automated check blocked (HTTP 403, bot protection); canonical institutional URL; browser verification pending.",
        zh: "自動檢查遭封鎖（HTTP 403，防爬蟲）；此為該機構正式頁面；待瀏覽器驗證。",
      },
    },
  ],
};
