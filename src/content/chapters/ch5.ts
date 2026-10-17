import type { ChapterContent } from "@/content/types";

/**
 * Chapter 05 — Remember and Reflect (Task 4-c, full bilingual rewrite)
 *
 * Structure: seven sections —
 *  1. how-catastrophe-was-assembled (documented mechanisms, 1914–1945)
 *  2. ordinary-people (obedience/conformity + rescuers; Righteous Among the Nations)
 *  3. guardrails-after-1945 (Nuremberg, UDHR, Genocide Convention, Geneva,
 *     European integration with critiques, education & memorial museums)
 *  4. levels-of-responsibility (individual / civic / institutional / international)
 *  5. honest-disagreements (economic vs ideological causes; ethics of strategic
 *     bombing — presented without relativizing established crimes)
 *  6. patterns-not-predictions (present-day parallels as questions; introduces
 *     the pattern explorer cards rendered after the sections)
 *  7. into-silence (transition to One Minute to Remember — optional, user-initiated)
 *
 * Callouts: fact (×2), testimony (UDHR preamble, official UN text),
 * methodology (how scholarly disagreement works), reflection (on analogy).
 * Citations: 8 institutional/primary pages, all curl-verified 2026-10-17
 * (OHCHR page is 403 bot-blocked canonical, noted honestly).
 */
export const ch5: ChapterContent = {
  id: "ch5",
  navLabel: { en: "Reflect", zh: "反思" },
  number: "05",
  title: {
    en: "Remember and Reflect: How Do Societies Prevent Repetition?",
    zh: "銘記與反思：社會如何避免重蹈覆轍？",
  },
  question: {
    en: "Which patterns — propaganda, dehumanization, scapegoating, institutional erosion, escalating exclusion, indifference — appeared before catastrophe, and how can we recognize them carefully, without claiming that history simply repeats?",
    zh: "哪些模式——宣傳、去人性化、代罪羔羊、制度侵蝕、逐步升級的排斥、漠視——曾出現在災難之前？我們如何審慎辨識它們，而不宣稱歷史必然重演？",
  },
  lead: [
    {
      en: "The catastrophes of 1914–1945 were not delivered by fate. They were assembled — law by law, headline by headline, silence by silence — by people inside institutions that other people had stopped defending. That is disturbing, but it is also where prevention begins: what was assembled can, in principle, be interrupted.",
      zh: "1914至1945年間的災難並非命運所賜。它們是被「組裝」出來的——一條法律接著一條法律，一則頭條接著一則頭條，一次沉默接著一次沉默——由體制之內的人完成，而這些體制，是被另一些人停止捍衛的。這令人不安，卻也是預防的起點：既然可以被組裝，原則上就可能被中斷。",
    },
    {
      en: "This chapter reads the record in that spirit. It separates what is documented from what is still debated, keeps the responsibilities of individuals, citizens, institutions, and states distinct, and treats historical parallels as questions to investigate rather than verdicts to deliver.",
      zh: "本章即以這種精神閱讀史料：區分已有定論與仍在辯論之處，分開個人、公民、機構與國家各自的責任，並把歷史類比當作待查證的問題，而非待宣判的結論。",
    },
  ],
  sections: [
    {
      id: "how-catastrophe-was-assembled",
      heading: { en: "How a catastrophe is assembled", zh: "災難是如何被組裝起來的" },
      paragraphs: [
        {
          en: "Within weeks of taking power in 1933, the Nazi regime established a Ministry of Public Enlightenment and Propaganda under Joseph Goebbels, bringing press, radio, film, and the arts under a single political direction. Control of wartime information was not a Nazi invention: during the First World War, Britain's Defence of the Realm Act of August 1914 gave the government sweeping powers to censor the press, and every major belligerent suppressed news that might weaken morale. The documented pattern is not that people were effortlessly deceived, but that entire information environments were restructured until some questions became difficult to ask.",
          zh: "1933年掌權數週之內，納粹政權即在約瑟夫．戈培爾（Joseph Goebbels）之下設立「公眾啟蒙與宣傳部」，將報刊、廣播、電影與藝術置於單一的政治指揮。戰時的資訊控制也並非納粹的發明：一次大戰期間，英國1914年8月的《國防法》（Defence of the Realm Act）即賦予政府全面審查新聞的權力，而每一個主要交戰國都封鎖了可能動搖士氣的消息。有文獻可考的模式並不是「人們輕易被騙」，而是整個資訊環境被重新結構，直到某些問題變得難以提出。",
        },
        {
          en: "Violence was rehearsed in vocabulary before it was executed in policy. Nazi propaganda described Jews as parasites, vermin, and disease — metaphors that made persecution feel like hygiene rather than crime. After Germany's defeat in 1918, the “stab-in-the-back” myth blamed Jews and democrats at home for a war lost at the front, and the economic catastrophe after 1929 was repeatedly attributed to a small, identifiable group. Scapegoating offered frightened people a story in which someone was guilty and something could be done.",
          zh: "暴力先在詞彙中排練，之後才在政策中執行。納粹宣傳把猶太人描述為寄生蟲、害蟲與疾病——這些隱喻讓迫害聽起來像「防疫」，而非犯罪。1918年德國戰敗後，「刀刺在背」的神話把前線的失利歸咎於後方的猶太人與民主派；1929年之後的經濟災難，也一再被歸因於一小群可以指認的人。代罪羔羊給了惶恐的人們一個故事：故事裡有人有罪，也有事可做。",
        },
        {
          en: "Discrimination escalated through law: a boycott of Jewish businesses in April 1933, the dismissal of Jewish civil servants the same month, the Nuremberg Laws of September 1935 that stripped Jews of citizenship, and the pogrom of November 1938 — each step normalizing the next. Independent institutions were hollowed rather than abolished: the Enabling Act of March 1933 allowed rule by decree; judges, journalists, and professors were pressured, purged, or co-opted; and in July 1938, at the Évian conference, most participating states declined to raise immigration quotas for Jewish refugees. The assembly of catastrophe was not one dramatic rupture but a sequence that majorities learned, step by step, to tolerate.",
          zh: "歧視透過法律升級：1933年4月抵制猶太商店、同一個月辭退猶太公務員、1935年9月的紐倫堡法律剝奪猶太人的公民權，再到1938年11月的集體迫害——每一步都使下一步顯得「正常」。獨立機構不是被廢除，而是被掏空：1933年3月的《授權法》允許以命令統治；法官、記者與教授受到施壓、清洗或收編；1938年7月的埃維昂會議上，多數與會國家也拒絕為猶太難民提高移民配額。災難的組裝並不是一次戲劇性的斷裂，而是一連串被多數人逐步學會容忍的步驟。",
        },
      ],
      callout: {
        kind: "fact",
        text: {
          en: "Documented sequence: the Law for the Restoration of the Professional Civil Service (7 April 1933) removed Jews and political opponents from Germany's civil service within months of the regime taking office. Exclusion entered through the paperwork of an experienced bureaucracy — not through open violence first.",
          zh: "有案可查的序列：《公職恢復法》（1933年4月7日）在政權上台數月之內，便將猶太人與政治異議者逐出德國公務體系。排除最先穿過的，是一個熟練官僚體系的公文，而不是公開的暴力。",
        },
        citationIds: ["c-ushmm-learning"],
      },
      citationIds: ["c-ushmm-learning"],
    },
    {
      id: "ordinary-people",
      heading: { en: "Ordinary people, public choices", zh: "平凡的人，公眾的選擇" },
      paragraphs: [
        {
          en: "The record refuses the comfort of blaming only monsters. Christopher Browning's study of Reserve Police Battalion 101 — middle-aged reservists from Hamburg (Ordinary Men, 1992) — documented how such men took part in mass shootings in occupied Poland, most continuing even when offered the chance to step out. Conformity, career anxiety, and the numbing effect of routine carried people across lines they would once have recognized. Individual choice never floated free of its context; but the context never removed the choice.",
          zh: "史料不容我們只把責任推給怪物。克里斯多福．布朗寧（Christopher Browning）對第101後備警察營——來自漢堡的中年後備警察——的研究（《Ordinary Men》，1992）記錄了這樣的人如何在佔領下的波蘭參與集體槍殺，且即使獲准退出，多數人仍繼續執行。從眾、對前途的焦慮，以及例行公事的麻木，把人帶過了他們原本認得的界線。個人選擇從未懸空於處境之外；但處境也從未取消選擇。",
        },
        {
          en: "The same record points in the other direction. Yad Vashem, Israel's official memorial to the Holocaust, honors non-Jews who risked their lives to save Jews as Righteous Among the Nations — recognizing more than 28,000 people as of its January 2024 statistics, from dozens of countries and all walks of life. In October 1943, Danish fishermen and volunteers ferried most of Denmark's Jews across the water to safety in Sweden within weeks. Rescuers were a minority everywhere; the point of studying them is not consolation but evidence — that the range of individual action never closed entirely.",
          zh: "同樣的史料也指向另一個方向。以色列的官方大屠殺紀念中心亞德瓦舍姆（Yad Vashem），以「正義之士」（Righteous Among the Nations）之名，表彰曾冒生命危險拯救猶太人的非猶太人——依其2024年1月的統計，獲表彰者已超過兩萬八千人，來自數十個國家、各行各業。1943年10月，丹麥漁民與志工在數週之內，將丹麥大多數的猶太人渡海送往瑞典的安全地帶。援救者在任何地方都是少數；研究他們的意義不在安慰，而在證據——證明個人可行動的範圍從未完全關閉。",
        },
      ],
      callout: {
        kind: "fact",
        text: {
          en: "Yad Vashem's published statistics count 28,707 Righteous Among the Nations as of 1 January 2024. Recognition follows an evidentiary process — testimony, documentation, and review — and continues as new cases are verified.",
          zh: "亞德瓦舍姆公布的統計，截至2024年1月1日共認可28,707位「正義之士」。認可程序包含證言、文獻與審查，並隨新案例獲得查證而持續進行。",
        },
        citationIds: ["c-yadvashem-righteous-stats"],
      },
      citationIds: ["c-yadvashem-righteous"],
    },
    {
      id: "guardrails-after-1945",
      heading: { en: "Guardrails built after 1945", zh: "1945年之後建立的護欄" },
      paragraphs: [
        {
          en: "In November 1945 the Allies placed the surviving leadership of the Nazi state before the International Military Tribunal at Nuremberg. The tribunal tried twenty-two leading figures; twelve were sentenced to death and three acquitted. Its deeper legacy was doctrinal: individuals, not only states, could be held accountable under international law, and “following orders” was ruled a consideration, not a defense. The proceedings were imperfect — victors judged the vanquished, and Allied conduct was not on the docket — and lawyers have argued about those limits ever since. What survived was the principle that office does not launder responsibility.",
          zh: "1945年11月，盟國把納粹政權倖存的領導層送上紐倫堡的國際軍事法庭——史稱紐倫堡審判。法庭審判了二十二位首要人物；十二人判處死刑，三人無罪開釋。更深的遺產在法理：不只國家，個人也可能在國際法之下被究責；而「奉命行事」被裁定為酌量因素，而非免責理由。審判並不完美——勝者審判敗者，盟軍自身的作為並不在案卷之內——這些界線至今仍是法律學者爭論的題目。存續下來的原則是：職位不能洗白責任。",
        },
        {
          en: "Within a few years, that principle was written into instruments still in force. The Universal Declaration of Human Rights, adopted by the UN General Assembly on 10 December 1948, translated the experience of “barbarous acts” into a common standard of rights; the Convention on the Prevention and Punishment of the Crime of Genocide, adopted the previous day, gave a legal name — coined by Raphael Lemkin — to a crime the world had failed to name in time; and the four Geneva Conventions of 1949, now ratified by every state, codified protections for the wounded, prisoners of war, and civilians. None of these texts prevented later atrocities by themselves. They made it harder to claim that no rules existed.",
          zh: "短短數年之間，這項原則被寫入至今仍然生效的文書。1948年12月10日聯合國大會通過的《世界人權宣言》，把「野蠻行為」的經驗翻譯成權利的共同標準；前一日通過的《防止及懲治種族滅絕罪公約》，為世界來不及命名的罪行補上了法律名稱——由拉斐爾．萊姆金（Raphael Lemkin）鑄造；1949年的四部《日內瓦公約》——如今已獲所有國家批准——則把對傷者、戰俘與平民的保護寫成法典。這些文本沒有一部能憑自身阻止後來的暴行；它們做到的，是讓「世上沒有規則可言」這句話更難說出口。",
        },
        {
          en: "Western Europe attempted a guardrail of a different kind: economic interdependence. The Schuman Declaration of 9 May 1950 proposed pooling coal and steel so that war between France and Germany would become “not merely unthinkable, but materially impossible.” Historians treat the resulting European project with more care than its anniversary speeches do: peace also rested on NATO, the realities of occupation, nuclear deterrence, and simple exhaustion; the community excluded Europe's east for decades; and member states fought colonial wars even while integrating. Education and memory did quieter work as well — Yad Vashem was mandated by Israeli law in 1953, the United States Holocaust Memorial Museum opened in 1993, and school curricula across Europe made the catastrophe a required subject of study.",
          zh: "西歐嘗試了另一種護欄：經濟上的相互依存。1950年5月9日的《舒曼宣言》提議統合煤與鋼，使法德之間的戰爭「不僅難以想像，而且在物質上不可能」。歷史學家對這個歐洲計畫的態度，比它的週年演說更審慎：和平同樣建立在北約、佔領的現實、核威懾與純粹的疲憊之上；這個共同體有數十年之久將東歐排除在外；而會員國在整合的同時，仍打著殖民戰爭。教育與記憶則做著更安靜的工作——亞德瓦舍姆依1953年以色列立法設立，美國大屠殺紀念博物館於1993年開館，歐洲各國的學校課程也把這場災難列為必修的題目。",
        },
      ],
      callout: {
        kind: "testimony",
        text: {
          en: "“Whereas disregard and contempt for human rights have resulted in barbarous acts which have outraged the conscience of mankind…”",
          zh: "「鑑於對人權的無視和侮蔑已發展為野蠻暴行，這些暴行玷污了人類的良心……」",
        },
        attribution: {
          en: "Preamble, Universal Declaration of Human Rights — UN General Assembly Resolution 217 A (III), 10 December 1948",
          zh: "《世界人權宣言》序言——聯合國大會第217 A(III)號決議，1948年12月10日",
        },
        citationIds: ["c-un-udhr"],
      },
      citationIds: [
        "c-avalon-imt",
        "c-un-udhr",
        "c-ohchr-genocide-convention",
        "c-icrc-geneva",
        "c-eu-schuman",
      ],
    },
    {
      id: "levels-of-responsibility",
      heading: { en: "Four levels of responsibility", zh: "責任的四個層次" },
      paragraphs: [
        {
          en: "Prevention fails or succeeds at more than one altitude, and blurring the levels is a way of avoiding all of them. At the individual level, the questions concern obedience, silence, and the small refusals available to a person inside a family, a workplace, a queue. At the civic level, the unit is the community and the association: whether congregations, unions, professional bodies, and neighborhoods defend members under pressure — or surrender them cheaply.",
          zh: "預防的成敗發生在不止一個高度，而把這些層次攪混在一起，往往正是同時迴避它們的方式。在個人層次，問題關乎服從、沉默，以及一個人在家庭、職場與隊伍裡做得到的小小拒絕。在公民層次，單位是社群與結社：教會、工會、專業團體與鄰里，在壓力之下是挺身捍衛成員，還是廉價地交出他們。",
        },
        {
          en: "At the institutional level, responsibility attaches to the courts, the press, the civil service, and the universities — bodies built to keep working precisely when politics turns hostile, whose independence is infrastructure that either holds or does not. At the international level, states and inter-state institutions carry duties that no citizen can discharge alone: the League of Nations failed to stop aggression in Manchuria in 1931 or Ethiopia in 1935; the United Nations Charter of 1945 and the Genocide Convention of 1948 were written in full knowledge of that failure; and the International Criminal Court, created by the Rome Statute that entered into force in 2002, has since issued indictments that some states enforce and others ignore. The levels interlock — institutions are staffed by individuals, and individual leverage depends on institutions — but they are not interchangeable, and each answers for itself.",
          zh: "在機構層次，責任繫於法院、新聞、公務體系與大學——這些機構的設計目的，正是要在政治轉為敵意的時刻持續運作；它們的獨立性是一種基礎建設，不是撐住，就是失守。在國際層次，國家與國家之間的機構承擔著任何公民都無法獨力履行的義務：國際聯盟未能阻止1931年的滿洲或1935年的衣索比亞遭侵略；1945年的《聯合國憲章》與1948年的《種族滅絕公約》，正是在深知這項失敗之下寫成；依據2002年生效的《羅馬規約》設立的國際刑事法院，此後發出的起訴有些國家執行，有些國家無視。各層次相互咬合——機構由個人組成，個人的槓桿也仰賴機構——但它們不可互換，也各自對自己負責。",
        },
      ],
      citationIds: ["c-un-udhr", "c-ohchr-genocide-convention"],
    },
    {
      id: "honest-disagreements",
      heading: { en: "Where historians genuinely disagree", zh: "歷史學家真正分歧之處" },
      paragraphs: [
        {
          en: "Serious disagreement is not a scandal; it is how a discipline stays honest. On the causes of the First World War, Fritz Fischer's 1961 thesis that Germany deliberately reached for world power has contended for decades with accounts — most prominently Christopher Clark's The Sleepwalkers (2012) — that distribute responsibility across all the great powers and emphasize contingency. On the Nazi war and the Holocaust, “intentionalist” readings that foreground ideology contend with “functionalist” readings that foreground institutional dynamics, while economic histories such as Adam Tooze's The Wages of Destruction (2006) trace how radicalization and economic desperation intertwined. These debates are about weighting — not about whether the crimes occurred.",
          zh: "嚴肅的分歧並非醜聞；那是一門學科保持誠實的方式。關於一次大戰的成因，弗里茨．費雪（Fritz Fischer）1961年「德國蓄意奪取世界強權」的論點，與把責任分配給所有大國、強調偶然性的論述——最著名者如克里斯多福．克拉克（Christopher Clark）的《夢遊者》（The Sleepwalkers，2012）——已交鋒數十年。關於納粹的戰爭與大屠殺，強調意識形態的「意圖論」與強調制度動態的「功能論」長期對峙，而亞當．圖茲（Adam Tooze）的《The Wages of Destruction》（2006）等經濟史著作，則追蹤激進化與經濟絕望如何相互糾纏。這些辯論爭的是權重，不是罪行是否發生。",
        },
        {
          en: "The ethics of strategic bombing remain genuinely contested among serious historians and philosophers. The British and American air campaigns against German and Japanese cities — Hamburg in 1943, Dresden in 1945, the night of 9–10 March 1945 over Tokyo, and finally Hiroshima and Nagasaki — killed civilians on an enormous scale. The philosopher A. C. Grayling has argued that deliberate area bombing of civilian populations was morally indefensible; military historians such as Richard Overy have weighed the same record against the context of total war initiated by the Axis, the technology and intelligence actually available, and the alternatives commanders believed they faced. Engaging this debate does not soften what is established: who began these wars, and what was done in the occupied lands, are matters of record — the argument is over what the Allies were justified in doing in response.",
          zh: "戰略轟炸的倫理，至今仍在嚴肅的歷史學家與哲學家之間真正存有爭議。英美對德日城市的空襲——1943年的漢堡、1945年的德勒斯登、1945年3月9日至10日夜間的東京，以及最後的廣島與長崎——使平民以巨大的規模死亡。哲學家葛瑞林（A. C. Grayling）主張，蓄意對平民聚居區域的區域轟炸在道德上站不住腳；軍事史家如理查．奧弗里（Richard Overy）則把同一份紀錄放在脈絡中衡量：軸心國發動的總體戰、當時實際可用的技術與情報，以及指揮官相信自己面對的選項。參與這場辯論，並不會軟化已有定論的部分：誰發動了戰爭、佔領之下做了什麼，都是有紀錄可查的事實——爭論的只是盟軍的回應方式何者正當。",
        },
        {
          en: "The honest way to hold such disagreements is to keep two registers separate: what happened, and how to explain it. The first is anchored by documents, trials, and testimony; the second is a living argument. Collapsing the two — using genuine scholarly debate about causes to imply doubt about the crimes themselves — is not historiography. It is a rhetorical move, and the documentary record refuses to support it.",
          zh: "誠實看待這些分歧的方法，是把兩件事分開：發生了什麼，以及如何解釋它。前者由文獻、審判與證言錨定；後者是一場仍在進行的論證。把兩者混為一談——利用關於成因的真正學術分歧，暗示罪行本身存疑——不是史學。那是一種修辭動作，而檔案紀錄拒絕為它背書。",
        },
      ],
      callout: {
        kind: "methodology",
        text: {
          en: "Disagreement among historians is a feature of the discipline, not evidence of unknowability. Before repeating “historians disagree” in any debate, ask: do they disagree about the event, or about its weighting and meaning?",
          zh: "歷史學家之間的分歧，是這門學科的特徵，不是「無法可知」的證據。在任何討論中複述「歷史學家有爭議」之前，先問：他們爭議的是事件本身，還是事件的權重與意義？",
        },
      },
      citationIds: [],
    },
    {
      id: "patterns-not-predictions",
      heading: { en: "Patterns, not predictions", zh: "模式，而非預言" },
      paragraphs: [
        {
          en: "It is tempting — and it is cheap — to declare that some present-day event “is exactly 1933 again.” The documented past does not license that claim: eras differ in institutions, incentives, and velocities. What the record does offer is a set of recurring early dynamics — propaganda saturating the information environment, dehumanizing language normalizing itself, minorities converted into explanations, institutions bending toward power, exclusion advancing one rule at a time, bystander majorities adjusting to each new normal. Institutions still watch for these dynamics today: the United States Holocaust Memorial Museum maintains dedicated genocide-prevention programs, and the United Nations keeps an office for genocide prevention and the responsibility to protect.",
          zh: "宣稱某個當下事件「正是1933年的重演」，很誘人，也很廉價。有文獻可考的過去並不授權這種說法：時代在制度、誘因與速度上都各不相同。但這份紀錄確實提供了一組反覆出現的早期動態——宣傳浸滿資訊環境、去人性化的語言自我正常化、少數群體被換算成各種問題的解釋、制度向權力彎折、排斥一次一條規則地推進、旁觀的多數逐一適應新的「正常」。時至今日，機構性的監測者仍在留意這些動態：美國大屠殺紀念博物館設有專責的種族滅絕預防計畫，聯合國也保有種族滅絕預防與保護責任的辦公室。",
        },
        {
          en: "The cards below pair six of these historical patterns with questions for today. They are deliberately built as questions, not accusations: a question invites you to check the present against the past; an equivalence claim asks you to stop checking. Use them slowly — one pattern, one honest look at the news environment you actually inhabit.",
          zh: "下方的卡片將其中六種歷史模式，與今天的提問配對。它們刻意以「問題」而非「指控」的形式呈現：一個問題邀請你拿現在對照過去；一個「等同」的斷言，卻要你停止對照。慢慢使用——一次一個模式，對你實際身處的新聞環境，誠實地看一眼。",
        },
      ],
      callout: {
        kind: "reflection",
        text: {
          en: "A historical parallel is a question with a pedigree, not a verdict. If you find yourself certain that today “is” 1933 — or certain that it cannot be — both certainties deserve the same treatment: take the documented pattern, and go check.",
          zh: "歷史類比是一個有來歷的問題，不是一紙判決。若你確信今天「就是」1933——或確信絕無可能——這兩種確信值得同樣的對待：拿起有文獻可考的模式，去查證。",
        },
      },
      citationIds: ["c-ushmm-learning"],
    },
    {
      id: "into-silence",
      heading: { en: "When reflection closes into silence", zh: "當反思歸於靜默" },
      paragraphs: [
        {
          en: "Reflection has a failure mode that looks like its opposite: it can close into silence — a private moment that changes nothing outside itself. That risk is real, and this project will not pretend that a minute of remembering is a form of prevention. It is not. What silence can honestly do is smaller: it makes room — one minute of unshared, unrecorded room — for the people who actually bore the costs.",
          zh: "反思有一種看來與它相反的失效方式：它可能收攏成靜默——一個不對外改變任何事的私人片刻。這個風險是真的，本計畫也不會假裝一分鐘的追思等於一種預防。它不是。靜默誠實能做的事更小：它騰出一個空間——一分鐘不被分享、不被記錄的空間——給那些真正承擔代價的人。",
        },
        {
          en: "After the pattern cards you will therefore find one optional feature: One Minute to Remember. It is user-initiated only — nothing starts by itself — and it can be paused, restarted, or skipped without apology. Skip it freely: nothing is recorded either way, and skipping costs you nothing here. If you choose it, the tradition behind it is explained in brief — the Armistice of 1918, the hour of eleven, and the different ways countries keep it.",
          zh: "因此，在模式卡片之後，你會看到一個可選的功能：「一分鐘追思」。它僅由使用者主動開始——不會自行啟動——且可以暫停、重新開始，或毫無歉意地略過。請放心略過：無論選擇與否，都不會有任何記錄，略過在這裡也沒有任何代價。若你選擇它，你可以讀到這個傳統的簡短說明——1918年的停戰、十一點的那個時刻，以及各國不同的紀念方式。",
        },
      ],
      citationIds: [],
    },
  ],
  citations: [
    {
      id: "c-ushmm-learning",
      publisher: "United States Holocaust Memorial Museum",
      title: {
        en: "Learn — Holocaust Encyclopedia and teaching resources",
        zh: "Learn——大屠殺百科與教學資源",
      },
      url: "https://www.ushmm.org/learn",
      kind: "institutional",
      accessDate: "2026-10-17",
      note: { en: "Verified HTTP 200 on 2026-10-17.", zh: "2026-10-17 驗證 HTTP 200。" },
    },
    {
      id: "c-yadvashem-righteous",
      publisher: "Yad Vashem, The World Holocaust Remembrance Center",
      title: {
        en: "The Righteous Among the Nations",
        zh: "正義之士（Righteous Among the Nations）",
      },
      url: "https://www.yadvashem.org/righteous.html",
      kind: "institutional",
      accessDate: "2026-10-17",
      note: { en: "Verified HTTP 200 on 2026-10-17.", zh: "2026-10-17 驗證 HTTP 200。" },
    },
    {
      id: "c-yadvashem-righteous-stats",
      publisher: "Yad Vashem, The World Holocaust Remembrance Center",
      title: {
        en: "Names of Righteous by Country — statistics as of 1 January 2024",
        zh: "各國正義之士姓名與人數——截至2024年1月1日統計",
      },
      url: "https://www.yadvashem.org/righteous/statistics.html",
      kind: "institutional",
      accessDate: "2026-10-17",
      note: { en: "Verified HTTP 200 on 2026-10-17.", zh: "2026-10-17 驗證 HTTP 200。" },
    },
    {
      id: "c-avalon-imt",
      publisher: "Yale Law School — The Avalon Project",
      title: {
        en: "The International Military Tribunal for Germany — trial documents",
        zh: "德國國際軍事法庭——審判文獻",
      },
      url: "https://avalon.law.yale.edu/subject_menus/imt.asp",
      kind: "primary",
      accessDate: "2026-10-17",
      note: { en: "Verified HTTP 200 on 2026-10-17.", zh: "2026-10-17 驗證 HTTP 200。" },
    },
    {
      id: "c-un-udhr",
      publisher: "United Nations",
      title: {
        en: "Universal Declaration of Human Rights",
        zh: "世界人權宣言",
      },
      url: "https://www.un.org/en/about-us/universal-declaration-of-human-rights",
      kind: "primary",
      accessDate: "2026-10-17",
      note: { en: "Verified HTTP 200 on 2026-10-17.", zh: "2026-10-17 驗證 HTTP 200。" },
    },
    {
      id: "c-ohchr-genocide-convention",
      publisher: "United Nations Office of the High Commissioner for Human Rights (OHCHR)",
      title: {
        en: "Convention on the Prevention and Punishment of the Crime of Genocide (1948) — full text",
        zh: "《防止及懲治種族滅絕罪公約》（1948）——全文",
      },
      url: "https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-prevention-and-punishment-crime-genocide",
      kind: "primary",
      accessDate: "2026-10-17",
      note: {
        en: "Automated check blocked (HTTP 403, bot protection); canonical institutional URL; browser verification pending.",
        zh: "自動檢查遭封鎖（HTTP 403，防爬蟲）；此為該機構正式頁面；待瀏覽器驗證。",
      },
    },
    {
      id: "c-icrc-geneva",
      publisher: "International Committee of the Red Cross",
      title: {
        en: "The Geneva Conventions and their Commentaries",
        zh: "日內瓦公約及其評註",
      },
      url: "https://www.icrc.org/en/law-and-policy/geneva-conventions-and-their-commentaries",
      kind: "institutional",
      accessDate: "2026-10-17",
      note: { en: "Verified HTTP 200 on 2026-10-17.", zh: "2026-10-17 驗證 HTTP 200。" },
    },
    {
      id: "c-eu-schuman",
      publisher: "European Union",
      title: {
        en: "The Schuman Declaration — 9 May 1950",
        zh: "舒曼宣言——1950年5月9日",
      },
      url: "https://europa.eu/european-union/about-eu/symbols/europe-day/schuman-declaration_en",
      kind: "primary",
      accessDate: "2026-10-17",
      note: { en: "Verified HTTP 200 on 2026-10-17.", zh: "2026-10-17 驗證 HTTP 200。" },
    },
  ],
};
