import type { PatternCard } from "@/content/types";

/**
 * Chapter 05 pattern explorer (Task 4-c, full bilingual rewrite).
 *
 * Exactly six cards — the component grid assumes six. IDs are stable
 * ("propaganda", "dehumanization", "scapegoating", "institutional-erosion",
 * "escalating-exclusion", "indifference") and must not change.
 *
 * Contract per card:
 * - `historical`: the documented pattern in 1914–1945 with one concrete,
 *   sourced example (2–3 sentences).
 * - `today`: 2–3 careful QUESTIONS about the present — questions, never
 *   accusations, never claims of equivalence with the past.
 *
 * Historical anchors used below (documented, cross-checked):
 * - Reich Ministry of Public Enlightenment and Propaganda (13 March 1933);
 *   Volksempfänger "people's receiver" radio; WWI censorship (Britain's
 *   Defence of the Realm Act, August 1914).
 * - Der Stürmer; the 1940 film Der ewige Jude; "Untermenschen" vocabulary.
 * - The post-1918 "stab-in-the-back" myth (Dolchstoßlegende).
 * - Enabling Act (23 March 1933); the 7 April 1933 civil service law.
 * - Boycott (April 1933) → Nuremberg Laws (September 1935) → November 1938
 *   pogrom → deportations (from October 1941).
 * - The Évian conference (July 1938); denunciation and rescue in occupied
 *   Europe; Denmark, October 1943.
 */
export const patterns: PatternCard[] = [
  {
    id: "propaganda",
    title: { en: "Propaganda and information control", zh: "宣傳與資訊控制" },
    historical: {
      en: "In March 1933, weeks after taking power, the Nazi regime created a Ministry of Public Enlightenment and Propaganda under Joseph Goebbels, bringing press, radio, and film under political direction — and mass-produced a cheap “people's receiver” radio so official broadcasts reached living rooms directly. Nor was this a Nazi invention: in the First World War, Britain's Defence of the Realm Act of 1914 made press censorship law within days of the war's outbreak, and every major belligerent managed its population's picture of the front.",
      zh: "1933年3月，掌權數週之後，納粹政權在約瑟夫．戈培爾（Joseph Goebbels）之下設立「公眾啟蒙與宣傳部」，將報刊、廣播與電影置於政治指揮——並大量生產廉價的「人民收音機」，讓官方廣播直接進入家家戶戶的客廳。而這也並非納粹的發明：一次大戰中，英國1914年的《國防法》（Defence of the Realm Act）在開戰數日內就將新聞審查寫成法律，每一個主要交戰國都精心管理著人民對前線的想像。",
    },
    today: {
      en: "Questions to ask: Who published this, and what do they gain from my believing it? What would count as evidence against the story? Do I share before verifying?",
      zh: "可以自問：這則訊息由誰發布？我相信它，誰得到好處？什麼證據能推翻這個說法？我是先查證，還是先分享？",
    },
  },
  {
    id: "dehumanization",
    title: { en: "Dehumanizing language", zh: "去人性化的語言" },
    historical: {
      en: "Nazi propaganda rehearsed persecution in vocabulary before executing it in policy: the weekly Der Stürmer and the 1940 film Der ewige Jude (“The Eternal Jew”) depicted Jews as vermin, parasites, and disease. Jews, Roma, and Slavs were classified as “subhumans” (Untermenschen) — language whose function was to make their suffering register as hygiene rather than crime.",
      zh: "納粹宣傳先在詞彙裡排練迫害，之後才在政策中執行：週刊《Der Stürmer》與1940年的電影《永恆的猶太人》（Der ewige Jude）把猶太人描繪成害蟲、寄生蟲與疾病。猶太人、羅姆人與斯拉夫人被歸類為「次等人」（Untermenschen）——這種語言的功能，是讓他們的苦難被感受為「防疫」，而非犯罪。",
    },
    today: {
      en: "Questions to ask: Is this language describing what people did, or erasing what they are? Would I accept the same words applied to people I know? What becomes permissible once a group is a category rather than a set of persons?",
      zh: "可以自問：這些語言是在描述人做了什麼，還是在抹除人是什麼？同樣的話若用在我認識的人身上，我能接受嗎？當一個群體變成「類別」而不再是一個個的人，什麼事情會開始顯得可以接受？",
    },
  },
  {
    id: "scapegoating",
    title: { en: "Scapegoating of minorities", zh: "少數群體的代罪羔羊化" },
    historical: {
      en: "After 1918, the “stab-in-the-back” myth held that Germany had not been defeated at the front but betrayed at home by Jews and democrats — a story repeated through the 1920s until the Depression made it explosive. Blame fixed on a visible minority offers belonging and simplicity at once: it explains loss without requiring anyone to examine the actual decisions that produced it.",
      zh: "1918年之後，「刀刺在背」的神話主張：德國不是在前線戰敗，而是在後方被猶太人與民主派出賣——這個故事在1920年代反覆流傳，直到經濟大蕭條使它變得極具引爆性。把罪責固定在一個顯眼的少數群體上，同時提供了歸屬與簡單：它解釋了失落，卻不要求任何人檢視造成失落的真實決策。",
    },
    today: {
      en: "Questions to ask: Is a complex, systemic problem being explained by the behavior of one group? Who becomes easier to govern while we look there? What evidence would change the accuser's mind — and has anyone asked?",
      zh: "可以自問：一個複雜的系統性問題，是否正被歸因於單一群體的行為？當我們盯著那裡，誰變得更容易治理？什麼證據會讓指控者改變心意——有人問過嗎？",
    },
  },
  {
    id: "institutional-erosion",
    title: { en: "Institutional erosion", zh: "制度侵蝕" },
    historical: {
      en: "Germany's courts, press, and universities were not abolished overnight; they were hollowed. The Enabling Act of 23 March 1933 let the cabinet legislate by decree; Jewish and anti-Nazi judges, journalists, and professors were dismissed under the April 1933 civil service law; a regime-controlled publishing trust absorbed newspaper after newspaper. Each step looked procedural, and each made the next one smaller.",
      zh: "德國的法院、新聞與大學並未在一夜之間被廢除；它們是被逐步掏空的。1933年3月23日的《授權法》讓內閣得以命令立法；依1933年4月的公務員法，猶太籍與反納粹的法官、記者與教授遭到辭退；由政權控制的出版集團，一份接一份地併吞報紙。每一步看來都像程序問題，而每一步都讓下一步顯得更小。",
    },
    today: {
      en: "Questions to ask: Are checks on power being described as obstacles to the majority's will? Do rules actually bind the powerful, or only the inconvenient? Which institution near me is being quietly repurposed?",
      zh: "可以自問：制衡權力的機制，是否正被描述為多數意志的絆腳石？規則實際上約束的是掌權者，還是只是礙事的人？我身邊有哪個機構，正在被悄悄改變用途？",
    },
  },
  {
    id: "escalating-exclusion",
    title: { en: "Exclusion that escalates", zh: "逐步升級的排斥" },
    historical: {
      en: "Exclusion advanced in documented steps: a one-day boycott of Jewish businesses in April 1933; the dismissal of Jews from the civil service the same month; the Nuremberg Laws of September 1935 stripping Jews of citizenship and banning marriages; the destroyed synagogues and mass arrests of November 1938; deportations beginning in October 1941. Each measure tested how much the public would absorb — and the public's absorption licensed the next measure.",
      zh: "排斥以有案可查的步驟推進：1933年4月對猶太商店為期一天的抵制；同一個月將猶太人逐出公務體系；1935年9月的紐倫堡法律剝奪公民權並禁止通婚；1938年11月被砸毀的猶太會堂與大規模逮捕；1941年10月展開的遣送。每一項措施都在測試公眾能吞下多少——而公眾的吞下，又為下一項措施發出了許可。",
    },
    today: {
      en: "Questions to ask: Is some category of people losing rights one rule at a time? Is each step being justified by the last one? If nothing checks the sequence, where does it plausibly end?",
      zh: "可以自問：是否有某一類人，正一次一條規則地失去權利？每一步是否都在引用上一步作為理由？若沒有任何力量擋下這個序列，它合理會走到哪裡？",
    },
  },
  {
    id: "indifference",
    title: { en: "Indifference and the bystander", zh: "漠視與旁觀者" },
    historical: {
      en: "In July 1938, delegates from thirty-two states met at Évian-les-Bains to discuss refugees from Germany and Austria; almost none raised their immigration quotas, and the conference closed with resolutions but no openings. Within occupied Europe, denunciation by neighbors became a documented engine of deportation — while a minority, at real risk, hid children, forged papers, and ferried families to safety; in Denmark in October 1943, an organized public ferried most of the country's Jews to Sweden within weeks.",
      zh: "1938年7月，三十二國代表在埃維昂萊班集會，討論來自德國與奧地利的難民；幾乎沒有國家提高移民配額，會議以決議收場，卻沒有開出任何一扇門。在佔領下的歐洲，鄰人的告發成為有紀錄可查的遣送引擎——而少數人甘冒風險，藏匿孩童、偽造證件、把一個個家庭送往安全之地；1943年10月的丹麥，一場有組織的民間行動在數週之內，把丹麥大多數的猶太人渡往瑞典。",
    },
    today: {
      en: "Questions to ask: What am I treating as normal this year that I would not have accepted five years ago? Whose trouble have I decided is not mine? What is one small refusal of indifference available to me this week?",
      zh: "可以自問：今年我視為理所當然的事，有哪些是五年前我不會接受的？誰的困境，我已經決定與我無關？這一週，有哪些「拒絕冷漠」的小事是我做得到的？",
    },
  },
];
