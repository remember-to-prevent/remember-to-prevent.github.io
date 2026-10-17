import type { ActionContent } from "@/content/types";

/**
 * Chapter 06 action pathways (Task 4-c, full bilingual rewrite).
 *
 * Six pathways with stable IDs: "learn", "challenge-misinformation",
 * "support-humanitarian", "volunteer", "civic", "preserve-memory".
 *
 * Link verification (curl, 2026-10-17, desktop UA, -L):
 * - HTTP 200: ushmm.org/learn · nationalww2museum.org ·
 *   nationalarchives.gov.uk/education/ · nationalarchives.gov.uk/about/get-involved/ ·
 *   avalon.law.yale.edu (20th-century + IMT menus) · unesco.org
 *   (media-information-literacy + /resources, global-citizenship-education) ·
 *   icrc.org (law-and-policy, where-we-work, geneva-conventions-and-their-commentaries) ·
 *   wfp.org · un.org/en · un.org/ruleoflaw · yadvashem.org/holocaust/about.html ·
 *   arolsen-archives.org/en
 * - HTTP 403 to automated checks but canonical institutional roots (render in
 *   browsers): iwm.org.uk · unhcr.org · ohchr.org · cwgc.org
 * No fundraising pages, no trackers, no partisan resources are linked.
 */
export const actions: ActionContent = {
  intro: {
    en: "Choose one pathway to begin — one, not six. Each lists practical first steps, reputable institutional resources, and an honest note on limits: what this will not achieve. This page solicits no donations, collects no personal data, endorses no party or campaign, and does not claim that any single action can prevent war.",
    zh: "選擇一條路徑開始——一條就好，不必六條。每條路徑都列出可行的第一步、可靠的機構資源，以及誠實的界線說明：它做不到什麼。本頁不募款、不收集個人資料、不為任何政黨或競選活動背書，也不主張任何單一行動足以阻止戰爭。",
  },
  pathways: [
    {
      id: "learn",
      title: { en: "I want to learn and verify history", zh: "我想學習並查證歷史" },
      intro: {
        en: "Understanding begins in credible sources, not virally repeated fragments. The goal is not to memorize everything, but to know where the documented record lives — and how to check a claim against it.",
        zh: "理解始於可靠來源，而非瘋傳的碎片。目標不是記住一切，而是知道有據可查的紀錄身在何處——以及如何拿一個說法回到紀錄跟前對照。",
      },
      steps: [
        {
          en: "Read one institutional overview of the First and Second World Wars, end to end, before collecting details.",
          zh: "完整讀完一份關於兩次大戰的機構級總覽，之後再蒐集細節。",
        },
        {
          en: "Follow one primary document — a treaty text, a diplomatic telegram, a testimony — back to its original source.",
          zh: "把一份原始文件——條約正文、外交電報或一份證言——一路追回它的原始出處。",
        },
        {
          en: "Compare how two independent institutions narrate the same event, and note where they differ.",
          zh: "比較兩個互不隸屬的機構如何敘述同一事件，並記下分歧之處。",
        },
        {
          en: "Keep short lists of claims you have verified and claims you could not — both teach the habit of checking.",
          zh: "為「已查證」與「查不到」的說法各列一張小清單——兩張清單都在培養查證的習慣。",
        },
        {
          en: "When you retell a story, say your source out loud; it changes how carefully you tell it.",
          zh: "重述一個故事時，把出處說出口；這會改變你講述時的謹慎程度。",
        },
      ],
      links: [
        {
          label: {
            en: "United States Holocaust Memorial Museum — Learn (Holocaust Encyclopedia and educator resources)",
            zh: "美國大屠殺紀念博物館——Learn（大屠殺百科與教育資源）",
          },
          url: "https://www.ushmm.org/learn",
          publisher: "United States Holocaust Memorial Museum",
        },
        {
          label: {
            en: "The National WWII Museum — World War II research and history",
            zh: "美國國家二戰博物館——研究與歷史",
          },
          url: "https://www.nationalww2museum.org/",
          publisher: "The National WWII Museum",
        },
        {
          label: {
            en: "The National Archives (UK) — education resources with original documents",
            zh: "英國國家檔案館——附原始文件的教育資源",
          },
          url: "https://www.nationalarchives.gov.uk/education/",
          publisher: "The National Archives (UK)",
        },
        {
          label: {
            en: "The Avalon Project — twentieth-century documents in full text",
            zh: "耶魯大學阿瓦隆計畫——二十世紀文獻全文",
          },
          url: "https://avalon.law.yale.edu/subject_menus/20th.asp",
          publisher: "Yale Law School — The Avalon Project",
        },
      ],
      limits: {
        en: "Reading changes no institutions by itself — but informed citizens are harder to mislead, and every other pathway depends on this one. Expect knowledge to change your questions, not the world.",
        zh: "單靠閱讀不會改變任何制度——但知情的人民更難被誤導，而其他每一條路徑都以這條為本。也請預期：知識改變的是你的問題，而不是世界。",
      },
    },
    {
      id: "challenge-misinformation",
      title: {
        en: "I want to challenge misinformation and dehumanizing language",
        zh: "我想挑戰錯誤資訊與去人性化的語言",
      },
      intro: {
        en: "Information now travels the way propaganda once did: through repetition, emotional charge, and the blur between fact and fiction. Individual corrections cannot match coordinated campaigns — but norms in small networks still shift, one conversation at a time.",
        zh: "今日資訊傳播的方式，與當年宣傳的擴散有幾分相似：重複、情緒刺激、事實與虛構的模糊。個人的更正追不上有組織的攻勢——但小型網絡中的規範仍會改變，一次一場對話。",
      },
      steps: [
        {
          en: "Before sharing, open the original link and check who published it, and when.",
          zh: "分享之前，先打開原始連結，確認發布者是誰、發布於何時。",
        },
        {
          en: "Learn two manipulation techniques well enough to name them — for example, decontextualized images and scapegoat framing.",
          zh: "把兩種操弄手法學到能夠指名——例如移花接木的圖像，與代罪羔羊式的框架。",
        },
        {
          en: "Practice objecting to language rather than to people: name the pattern, not the enemy.",
          zh: "練習對語言而非對人表示異議：指出模式，不樹立敵人。",
        },
        {
          en: "In one conversation this month, try a genuine question instead of a rebuttal — questions change more minds than counter-arguments do.",
          zh: "本月在一場對話中，以真誠的提問代替反駁——問題改變人心的次數，多於反論。",
        },
        {
          en: "When you correct something, do basic fact-checking first and cite the source you checked; a correction without a source is just another claim.",
          zh: "更正一個說法時，先做基本的事實查核，並附上你查過的來源；沒有來源的更正，只是另一個斷言。",
        },
      ],
      links: [
        {
          label: {
            en: "UNESCO — Media and Information Literacy",
            zh: "UNESCO——媒體與資訊素養",
          },
          url: "https://www.unesco.org/en/media-information-literacy",
          publisher: "UNESCO",
        },
        {
          label: {
            en: "UNESCO — Media and Information Literacy resources and teaching materials",
            zh: "UNESCO——媒體與資訊素養資源與教材",
          },
          url: "https://www.unesco.org/en/media-information-literacy/resources",
          publisher: "UNESCO",
        },
      ],
      limits: {
        en: "Individual verification cannot out-scale coordinated disinformation, and some audiences will not move at all. The realistic goal is smaller: that your own sharing stops amplifying it, and that people around you see one working model of checking.",
        zh: "個人的查證無法在規模上勝過有組織的資訊操弄，有些受眾也永遠不會動搖。務實的目標更小：讓你自己的分享不再放大它，並讓身邊的人看見一個確實運作的查證榜樣。",
      },
    },
    {
      id: "support-humanitarian",
      title: {
        en: "I want to support credible humanitarian work",
        zh: "我想支持可信的人道工作",
      },
      intro: {
        en: "Organizations with long institutional histories, audited accounts, and field reporting do work that no individual can do alone. Supporting them is not prevention — it is what becomes necessary when prevention has already failed.",
        zh: "擁有長期機構歷史、公開審計與田野報告的組織，做著個人無法獨力完成的工作。支持它們不是預防——而是在預防已經失敗之後，變得必要的事。",
      },
      steps: [
        {
          en: "Research an organization's mission, funding, and published reporting before supporting it in any way.",
          zh: "以任何方式支持之前，先研究組織的使命、資金來源與對外發布的報告。",
        },
        {
          en: "Follow their field reporting to learn what civilians in conflict actually need, rather than what distant audiences assume.",
          zh: "追蹤其田野報告，理解衝突中的平民真正需要什麼——而不是遠方受眾的想當然。",
        },
        {
          en: "If you donate, do it on the organization's own site, never through forwarded links.",
          zh: "若要捐款，請在組織官網上直接進行，絕不透過轉傳的連結。",
        },
        {
          en: "Read one plain-language explainer on international humanitarian law, to understand the rules aid workers operate under.",
          zh: "讀一篇以白話寫成的國際人道法入門說明，理解救援人員在什麼規則下工作。",
        },
        {
          en: "Support without romanticizing: aid relieves symptoms, and honest supporters hold organizations accountable too.",
          zh: "支持而不浪漫化：救援減輕的是症狀，誠實的支持者也會對組織課責。",
        },
      ],
      links: [
        {
          label: {
            en: "ICRC — law and policy",
            zh: "紅十字國際委員會——法律與政策",
          },
          url: "https://www.icrc.org/en/law-and-policy",
          publisher: "International Committee of the Red Cross",
        },
        {
          label: {
            en: "ICRC — where we work (country operations)",
            zh: "紅十字國際委員會——全球工作地區",
          },
          url: "https://www.icrc.org/en/where-we-work",
          publisher: "International Committee of the Red Cross",
        },
        {
          label: {
            en: "World Food Programme — hunger and conflict reporting",
            zh: "聯合國世界糧食計畫署——饑餓與衝突報告",
          },
          url: "https://www.wfp.org/",
          publisher: "World Food Programme",
        },
        {
          label: {
            en: "UNHCR — refugees and displaced people",
            zh: "聯合國難民署——難民與流離失所者",
          },
          url: "https://www.unhcr.org/",
          publisher: "United Nations High Commissioner for Refugees (UNHCR)",
        },
      ],
      limits: {
        en: "Humanitarian aid treats the symptoms of war, not its causes, and access can be closed at any border. Support it without illusion: it matters precisely because prevention has failed.",
        zh: "人道救援處理戰爭的症狀而非病因，而且任一邊界都可能被封鎖。請在沒有幻覺的情況下支持它：它之所以重要，正因為預防已經失敗。",
      },
    },
    {
      id: "volunteer",
      title: {
        en: "I want to volunteer or join community dialogue",
        zh: "我想擔任志工或參與社區對話",
      },
      intro: {
        en: "Communities that talk across difference in calm times are more resilient in inflamed ones. Volunteering is unglamorous infrastructure — logistics, translation, docent shifts, listening — and it is largely what memory institutions run on.",
        zh: "在平時能跨差異對話的社區，在煽動的年代更有韌性。志工是不起眼的基礎建設——行政、翻譯、導覽排班、聆聽——而記憶機構正是靠它運轉。",
      },
      steps: [
        {
          en: "Find one local museum, archive, library, or history society running a memory or education project, and ask what help they actually need.",
          zh: "找一所在地的博物館、檔案館、圖書館或歷史學會，認識正在進行的記憶或教育計畫，並問他們真正需要什麼協助。",
        },
        {
          en: "Attend one remembrance or intercultural event as a listener first — arrive to learn, not to be seen.",
          zh: "先以聆聽者身分參加一場追思或跨文化活動——是為了學習而來，不是為了被看見。",
        },
        {
          en: "Offer practical help — logistics, translation, documentation — before offering opinions.",
          zh: "先提供實務協助——行政、翻譯、紀錄——再提供觀點。",
        },
        {
          en: "Learn the etiquette of visiting memorial sites: they are places where grief works, not backdrops.",
          zh: "學習走訪紀念場所的禮節：那是哀傷在工作的地方，不是背景布景。",
        },
        {
          en: "Stay longer than one event; trust in communities is built by repetition, not intensity.",
          zh: "待得比一場活動更久；社群中的信任由重複建立，而非由強度。",
        },
      ],
      links: [
        {
          label: {
            en: "The National Archives (UK) — get involved (volunteering and projects)",
            zh: "英國國家檔案館——參與（志工與計畫）",
          },
          url: "https://www.nationalarchives.gov.uk/about/get-involved/",
          publisher: "The National Archives (UK)",
        },
        {
          label: {
            en: "Imperial War Museums — museums, collections, and public programmes",
            zh: "帝國戰爭博物館——館藏與公眾計畫",
          },
          url: "https://www.iwm.org.uk/",
          publisher: "Imperial War Museums",
        },
        {
          label: {
            en: "United Nations — how the UN works and how to engage",
            zh: "聯合國——運作方式與參與管道",
          },
          url: "https://www.un.org/en/",
          publisher: "United Nations",
        },
        {
          label: {
            en: "UNESCO — Global Citizenship Education",
            zh: "UNESCO——全球公民教育",
          },
          url: "https://www.unesco.org/en/education/global-citizenship-education",
          publisher: "UNESCO",
        },
      ],
      limits: {
        en: "Local dialogue rarely changes national trajectories, and one volunteer will not reverse institutional decay. But isolation demonstrably feeds radicalization, and cohesion is slow infrastructure that only accumulates.",
        zh: "地方對話鮮少改變國家走向，一名志工也逆轉不了機構的衰敗。但孤立確實滋長激進化，而凝聚是緩慢的基礎建設——只能累積，無法速成。",
      },
    },
    {
      id: "civic",
      title: {
        en: "I want to engage civically and support accountable institutions",
        zh: "我想參與公民事務、支持可課責的制度",
      },
      intro: {
        en: "The catastrophes of the twentieth century gathered speed where institutions bent to strongmen and majorities stayed passive. Civic engagement is the ordinary maintenance of those institutions — unexciting, repeatable, and real.",
        zh: "二十世紀的災難，是在制度向強人屈服而多數人消極之處加速的。公民參與就是對這些制度尋常的保養——不刺激、可重複，而且真實。",
      },
      steps: [
        {
          en: "Learn how your country's war powers, courts, and press protections actually work — the mechanism, not the slogan.",
          zh: "弄清楚你所在國家的宣戰權、司法與新聞保障實際如何運作——是機制，不是口號。",
        },
        {
          en: "Ask representatives concrete questions about oversight — who checks this, how, and what happens when it fails — not only about positions.",
          zh: "向民意代表提出關於監督的具體問題——由誰核查、如何核查、失靈時會發生什麼——而不只問立場。",
        },
        {
          en: "Read one primary legal text in full: your constitution's bill of rights, or the Geneva Conventions' rules on civilians.",
          zh: "完整讀一份法律原始文本：你所在憲法中的權利章節，或《日內瓦公約》關於平民的規則。",
        },
        {
          en: "Defend the legitimacy of institutions even when their outcomes disappoint you — and criticize their conduct precisely, not their existence.",
          zh: "即使結果令人失望，仍捍衛制度的正當性——並精確批評其作為，而非其存在。",
        },
        {
          en: "Vote in the dull elections too; turnout is the quietest check there is.",
          zh: "無聊的選舉也去投票；投票率是最安靜的一種制衡。",
        },
      ],
      links: [
        {
          label: {
            en: "OHCHR — human rights instruments and monitoring",
            zh: "聯合國人權事務高級專員辦公室——人權文書與監督",
          },
          url: "https://www.ohchr.org/",
          publisher: "Office of the United Nations High Commissioner for Human Rights (OHCHR)",
        },
        {
          label: {
            en: "The United Nations and the Rule of Law",
            zh: "聯合國與法治",
          },
          url: "https://www.un.org/ruleoflaw/",
          publisher: "United Nations",
        },
        {
          label: {
            en: "ICRC — the Geneva Conventions and their Commentaries",
            zh: "紅十字國際委員會——日內瓦公約及其評註",
          },
          url: "https://www.icrc.org/en/law-and-policy/geneva-conventions-and-their-commentaries",
          publisher: "International Committee of the Red Cross",
        },
      ],
      limits: {
        en: "Institutional health is generational work; no letter or vote guarantees it, and backsliding is always possible. Its absence, though, is consistently part of how catastrophes begin — which is why maintenance matters.",
        zh: "制度的健全是世代的工作，沒有任何一封信或一張票能保證它，倒退也永遠可能。但它的缺席，向來是災難開始方式的一部分——這正是保養重要的原因。",
      },
    },
    {
      id: "preserve-memory",
      title: {
        en: "I want to preserve and share historical memory responsibly",
        zh: "我想負責任地保存與分享歷史記憶",
      },
      intro: {
        en: "Memory needs carriers: documents, places, names, and people who can say why they matter. Digital circulation has made sharing trivial and verification rare — responsible memory work is the discipline of that difference.",
        zh: "記憶需要載體：文件、地方、名字，以及能說明它們何以重要的人。數位傳播讓分享變得輕易，讓查證變得稀罕——負責任的記憶工作，就是守住這個差距的紀律。",
      },
      steps: [
        {
          en: "Share one well-sourced story rather than ten unverified images, and say where it comes from.",
          zh: "分享一則有據可查的故事，勝過十張無法查證的圖片，並說明它的出處。",
        },
        {
          en: "Visit a memorial, museum, or archive — in person or online — and learn its context before you photograph it.",
          zh: "實地或線上走訪一座紀念館、博物館或檔案館，在拍照之前先理解它的脈絡。",
        },
        {
          en: "Record elders' memories with consent, and label oral history as testimony, not statistics.",
          zh: "在取得同意下記錄長輩的記憶，並把口述定位為證言，而非統計。",
        },
        {
          en: "Name victims and rescuers when retelling events; names resist the drift into abstraction.",
          zh: "複述事件時，說出受難者與援救者的名字；名字能抵抗滑向抽象的漂移。",
        },
        {
          en: "Correct misuse when you have the energy — one sourced correction, offered once, without escalation — and let it go when you do not.",
          zh: "有力氣時更正誤用——附上來源、說一次、不使衝突升級；沒有力氣時，就放下。",
        },
      ],
      links: [
        {
          label: {
            en: "Yad Vashem — the Holocaust: thematic and chronological narrative",
            zh: "亞德瓦舍姆——大屠殺的主題與時序敘事",
          },
          url: "https://www.yadvashem.org/holocaust/about.html",
          publisher: "Yad Vashem, The World Holocaust Remembrance Center",
        },
        {
          label: {
            en: "Arolsen Archives — International Center on Nazi Persecution (documents and online search)",
            zh: "阿羅爾森檔案館——納粹迫害國際研究中心（文獻與線上查詢）",
          },
          url: "https://arolsen-archives.org/en/",
          publisher: "Arolsen Archives",
        },
        {
          label: {
            en: "Commonwealth War Graves Commission — commemoration and casualty records",
            zh: "大英國協戰爭公墓委員會——紀念與傷亡紀錄",
          },
          url: "https://www.cwgc.org/",
          publisher: "Commonwealth War Graves Commission",
        },
      ],
      limits: {
        en: "Memory protects no one by itself; it becomes useful only when it funds judgment, restraint, and action. Treat it as a beginning — this page ends with an invitation, not a verdict.",
        zh: "記憶本身保護不了任何人；唯有當它滋養判斷、節制與行動時才有用。把它當作起點——本頁以邀請作結，而非判決。",
      },
    },
  ],
  shareNote: {
    en: "If this page clarified something for you, share the link. Responsible circulation of well-sourced history is itself one of the actions above — and it asks nothing of anyone.",
    zh: "若這個頁面讓你想通了一些事，請分享連結。讓有據可查的歷史負責任地流傳，本身就是上述行動之一——而且它不向任何人索求什麼。",
  },
};
