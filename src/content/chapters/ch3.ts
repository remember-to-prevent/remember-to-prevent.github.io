import type { ChapterContent } from "@/content/types";

/**
 * Chapter 03 — Between the Wars and the Second World War (1939–1945)
 *
 * Bilingual (EN / 繁體中文), solemn and evidence-based. Contested figures are
 * presented as documented ranges; historiographical debates are labelled as
 * debates; established crimes are never "both-sided". All citation ids use the
 * "b1-" prefix (Task 4-b1). Access date for every citation: 2026-10-17.
 */
export const ch3: ChapterContent = {
  id: "ch3",
  navLabel: { en: "Second War", zh: "二戰" },
  number: "03",
  title: {
    en: "Between the Wars and the Second World War (1939–1945): What Made Catastrophe Possible?",
    zh: "戰間期與第二次世界大戰（1939–1945）：災難何以成為可能？",
  },
  question: {
    en: "How did an unsettled peace, economic collapse, authoritarian movements, and state decisions make the deadliest war in history — and the Holocaust — possible?",
    zh: "未竟的和平、經濟崩潰、威權運動與國家決策，如何使史上最致命的戰爭——以及大屠殺——成為可能？",
  },
  lead: [
    {
      en: "The Second World War did not begin from nothing. It grew out of a peace that settled little, an economic collapse that corroded politics, and a sequence of state decisions — each one testing how much aggression the world would tolerate. When the war ended in 1945, an estimated 70 to 85 million people were dead, and at the centre of the catastrophe lay the murder of six million Jews.",
      zh: "第二次世界大戰並非憑空開始。它生長於一場幾乎什麼也沒有解決的和平、一場侵蝕政治的經濟崩潰，以及一連串的國家決策——每一次決策，都在試探世界能容忍多少侵略。1945年戰爭結束時，估計有七千萬至八千五百萬人喪生；而在這場災難的核心，是六百萬猶太人遭到謀殺。",
    },
    {
      en: "This chapter follows that sequence: the broken settlement of 1919, the Depression years, the years of laws and stolen borders, the wars in Asia and Europe, and the descent into industrialized murder. It asks not what history had to do, but which choices, at which junctions, opened which doors. The interactive timeline below the text follows the same years event by event, with sources attached to every entry.",
      zh: "本章追索這一連串過程：1919年破碎的和局、大蕭條的歲月、以法律與奪取疆界為標記的年代、亞洲與歐洲的戰火，以及墜入工業化屠殺的深淵。它追問的不是歷史「必然」如何，而是在哪一個岔口、哪一個抉擇，打開了哪一扇門。正文下方的互動時間軸，將逐年逐事地追索這段歲月，每一則條目都附有出處。",
    },
  ],
  sections: [
    {
      id: "unsettled-peace",
      heading: { en: "The unsettled post-1918 order", zh: "1918年後未竟的秩序" },
      paragraphs: [
        {
          en: "The Treaty of Versailles ended the First World War and planted grievances that outlasted it. The war-guilt clause, reparations, lost territory, and imposed military limits were read in Germany as national humiliation — and the claim that the army had been stabbed in the back at home became a poisonous myth, blaming democrats, socialists, and Jews for a defeat suffered in the field. The settlement was too harsh to be accepted as legitimate by the defeated, yet too weak to be enforced against a state determined to overturn it.",
          zh: "《凡爾賽條約》終結了第一次世界大戰，卻種下了比條約本身更長壽的怨懟。戰爭罪責條款與賠款、失土、被迫接受的軍備限制，在德國被視為國族羞辱——而「軍隊是在後方被人從背後捅了一刀」的說法，成為一則惡毒的神話，把戰場上的戰敗歸咎於民主派、社會主義者與猶太人。這項和局對戰敗者而言太過苛刻、難以視為正當；對一個決心推翻它的國家而言，卻又不夠有力、難以貫徹。",
        },
        {
          en: "The League of Nations embodied a new idea — collective security, in which aggression against one member would be answered by all. But the League commanded no army of its own, its Council required unanimity to act, and the United States, whose president had proposed it, never joined. When Japan's Kwantung Army staged the Mukden railway incident and seized Manchuria in September 1931, the League's Lytton Report condemned the occupation — and Japan simply walked out of the League in 1933. No power was willing to reverse the conquest by force or embargo.",
          zh: "國際聯盟體現了一種新的構想——集體安全：對任一成員的侵略，將由全體共同回應。但國聯自身沒有軍隊，行政院行動須全體一致，而由其總統倡議創立的美國，本身始終未曾加入。1931年9月，日本關東軍策畫柳條湖鐵路事件、奪取滿洲；國聯的李頓報告書譴責占領行動，日本卻索性於1933年退出國聯。沒有任何強權願意以武力或禁運扭轉這場征服。",
        },
        {
          en: "The second test was worse. Italy invaded Abyssinia (Ethiopia) on 3 October 1935; the League declared Italy the aggressor and imposed sanctions — carefully excluding oil, without which the invasion could not long continue. By May 1936 the conquest was complete, the sanctions were abandoned, and the principle of collective security lay in ruins. Two aggressions, two failures: the lesson written for every ambitious government was that the price of expansion had not yet been set.",
          zh: "第二次測試更為難堪。義大利於1935年10月3日入侵阿比西尼亞（衣索比亞）；國聯認定義大利為侵略者並實施制裁——卻刻意排除石油，而沒有石油，侵略本難以為繼。至1936年5月征服完成，制裁遭到撤除，集體安全原則已成廢墟。兩次侵略、兩次失敗：寫給每一個野心政府的教訓是——擴張的代價，尚未有人定價。",
        },
      ],
      callout: {
        kind: "fact",
        text: {
          en: "Japan withdrew from the League of Nations in 1933, months after the League's own Lytton Report condemned its occupation of Manchuria. Italy, sanctioned over Abyssinia but never blockaded, completed that conquest in May 1936 and left the League in 1937. Collective security had failed both of its clearest tests before the Second World War began.",
          zh: "1933年，就在國際聯盟的李頓報告書譴責日本占領滿洲數月之後，日本退出國聯。義大利因阿比西尼亞問題遭制裁、卻從未被全面封鎖，於1936年5月完成征服，並於1937年退出國聯。在第二次世界大戰爆發之前，集體安全已在它最清晰的兩場測試中雙雙失敗。",
        },
        citationIds: ["b1-britannica-wwii"],
      },
      citationIds: ["b1-britannica-wwii"],
    },
    {
      id: "great-depression",
      heading: { en: "The Great Depression's political corrosion", zh: "經濟大蕭條的政治侵蝕" },
      paragraphs: [
        {
          en: "The Wall Street crash of October 1929 collapsed credit and trade across a world already burdened by war debts and reparations. Industrial production and prices fell together; unemployment reached levels no democracy had yet survived — roughly a third of the German workforce, about six million people, by early 1932, and around a quarter of American workers. Governments of every stripe tried austerity and visibly failed, election after election.",
          zh: "1929年10月的華爾街崩盤，使早已為戰債與賠款所累的世界，信用與貿易一併崩塌。工業生產與物價同步下跌；失業率攀上民主國家前所未見的高點——至1932年初，德國約三分之一的勞動力、近六百萬人失業，美國則約有四分之一的工人失業。各式政府的緊縮政策接連失敗，選舉一場接一場地懲罰在位者。",
        },
        {
          en: "Despair changed what people were willing to hear. In Germany the Nazi vote rose from under three per cent in 1928 to 37 per cent in July 1932 — yet Hitler took power not by majority seizure but by appointment: conservative elites handed him the chancellorship on 30 January 1933, convinced they could use and contain him. In Japan, economic crisis and political violence pushed real authority toward the army and navy, where factions saw expansion abroad as the cure for dependence on imports. The Depression did not dictate these outcomes; it made the men who chose them easier to appoint, and their promises easier to sell.",
          zh: "絕望改變了人們願意聆聽的話。在德國，納粹黨得票率從1928年的不到百分之三，升至1932年7月的百分之三十七——然而希特勒取得權力並非靠多數奪取，而是靠任命：保守派精英於1933年1月30日把總理之位交給他，自信能夠利用他、也能駕馭他。在日本，經濟危機與政治暴力把實權推向陸海軍——軍中派系視對外擴張為治療對進口依賴的良方。經濟大蕭條並沒有決定這些結果；它只是讓選擇這些結果的人更容易被任命，讓他們的承諾更容易被兜售。",
        },
      ],
      callout: {
        kind: "reflection",
        text: {
          en: "Economics created the conditions; people made the choices. The honest warning for our own time is not that hardship causes atrocity — millions endured the Depression without electing murderers. It is that mass economic fear lowers the cost of every promise of restoration and every offer of a scapegoat, and that handing power to those who make such promises has never once stayed contained.",
          zh: "經濟創造了條件；抉擇出自於人。對我們這個時代最誠實的警語，並不是「苦難導致暴行」——數以百萬計的人熬過了大蕭條，卻未曾把殺人者送上台。而是：大規模的經濟恐懼，會壓低每一句「復興承諾」與每一個「代罪羔羊」的成本；而把權力交給許諾這些的人，歷史上從未有過一次能夠「控制在手」。",
        },
      },
      citationIds: ["b1-britannica-wwii"],
    },
    {
      id: "words-laws-aggression",
      heading: { en: "From words to laws to aggression, 1933–1939", zh: "從言語到法律，再到侵略：1933至1939年" },
      paragraphs: [
        {
          en: "Inside Germany, dictatorship was built in months. The Reichstag Fire Decree of 28 February 1933 suspended basic rights; the Enabling Act of 23 March 1933 — passed 441 votes to 94 amid stormtrooper intimidation, with Communist deputies jailed or in hiding — let the cabinet enact laws without the Reichstag. The first concentration camp had already opened at Dachau that March; the April boycott began the economic strangulation of Jewish citizens; civil servants, judges, and professors were purged by law. Terror arrived with paperwork, and much of society learned to look away.",
          zh: "在德國內部，獨裁政權在數月之間建成。1933年2月28日的國會縱火案法令中止了基本權利；1933年3月23日的《授權法案》——在衝鋒隊的恫嚇之下、共產黨籍議員或已被捕或已躲藏之時，以441票對94票通過——讓內閣得以繞過國會自行立法。同年3月，第一座集中營已在達豪設立；4月的抵制行動開始對猶太公民進行經濟絞殺；公務員、法官與教授依法律遭到清洗。恐怖隨著公文一起送達，而社會的大部分，學會了轉開視線。",
        },
        {
          en: "Persecution was then written into law itself. The Nuremberg Laws of 15 September 1935 stripped German Jews of citizenship and criminalized marriages across the line the regime drew; the nationwide pogrom of November 1938 — synagogues burned, thousands of Jewish businesses destroyed, some 30,000 Jewish men dragged into concentration camps — tested foreign reactions and found little more than condemnation. Exclusion, in the regime's own logic, was merely the first stage.",
          zh: "接著，迫害被寫進了法律本身。1935年9月15日的《紐倫堡法案》剝奪德國猶太人的公民權，並將跨越政權所劃界線的婚姻入罪；1938年11月的全國性集體迫害——猶太會堂被縱火、數千家猶太商家被毀、約三萬名猶太男子被拖入集中營——試探了外國的反應，而所得不過是譴責。依照政權自身的邏輯，「排除」只是第一階段。",
        },
        {
          en: "Abroad, each step measured the world's will and found it wanting. The remilitarized Rhineland of March 1936 drew protests, not action. The Anschluss absorbed Austria in March 1938 almost without a shot. At Munich on 29–30 September 1938, Britain and France — with Italy's blessing and Czechoslovakia absent from the table — accepted Germany's seizure of the Sudetenland; the policy of appeasement delivered the country's defences away; six months later Germany took the rump Czech lands outright. When Hitler turned to Poland, his demands were backed by a new instrument: on 23 August 1939 Germany and the Soviet Union signed a pact of non-aggression whose secret protocol divided Poland and the Baltic region between them. The last restraint on war in Europe had been removed — by two governments at once.",
          zh: "在國外，每一步都在測量世界的意志，而世界每一次都不及格。1936年3月的萊茵蘭再軍事化換來抗議、沒有行動。1938年3月的德奧合併幾乎兵不血刃地吞下了奧地利。1938年9月29日至30日的慕尼黑，英法兩國——在義大利背書、捷克斯洛伐克缺席的情況下——接受德國奪取蘇台德地區；綏靖政策把捷克的防線白白送走；六個月後，德國索性整個奪下捷克殘餘的國土。當希特勒轉向波蘭時，他的要求背後已有另一件工具：1939年8月23日，德蘇簽署互不侵犯條約，其秘密議定書將波蘭與波羅的海區域瓜分於兩國之間。歐洲戰爭的最後一道束縛，就這樣被兩個政府同時卸下。",
        },
      ],
      callout: {
        kind: "testimony",
        text: {
          en: "“The wrongs which we seek to condemn and punish have been so calculated, so malignant, and so devastating, that civilization cannot tolerate their being ignored, because it cannot survive their being repeated.”",
          zh: "「我們此刻所要譴責與懲罰的罪行，是如此處心積慮、如此惡毒、如此具毀滅性，以至於文明無法容忍對它的忽視——因為文明無法在它重演之後倖存。」",
        },
        attribution: {
          en: "Robert H. Jackson, opening statement for the United States prosecution, International Military Tribunal, Nuremberg, 21 November 1945",
          zh: "羅伯特・H・傑克遜（Robert H. Jackson），美國首席起訴代表開庭陳詞，紐倫堡國際軍事法庭，1945年11月21日",
        },
        citationIds: ["b1-nww2m-jackson"],
      },
      citationIds: ["b1-britannica-wwii", "b1-avalon-nazsov"],
    },
    {
      id: "asia-pacific-war",
      heading: { en: "The Asia-Pacific war, from 1937", zh: "亞洲—太平洋戰爭：自1937年起" },
      paragraphs: [
        {
          en: "Fighting at the Marco Polo Bridge on 7 July 1937 became, within weeks, full-scale war between Japan and China — a war that would run for eight years and merge into the Second World War after December 1941. Japan seized China's eastern cities with industrialized violence against soldiers and civilians alike. China's dead, military and civilian together, are estimated in the tens of millions: one standard reference tally puts military deaths at three to four million and total deaths near twenty million, while noting that other estimates run higher.",
          zh: "1937年7月7日的盧溝橋事變，數週之內演變為中日全面戰爭——這場戰爭延燒八年，並在1941年12月之後併入第二次世界大戰。日本以針對軍人與平民的工業化暴力奪取中國東部城市。中國軍民合計的死亡人數，估計以千萬計：一份標準的參考統計將軍人死亡列為三百萬至四百萬、總死亡近兩千萬，同時註明其他估計更高。",
        },
        {
          en: "When Nanjing, then China's capital, fell on 13 December 1937, Japanese troops spent roughly six weeks murdering prisoners of war and civilians and committing mass rape across the city. That this happened is documented beyond serious dispute. How many died is genuinely contested: estimates range from tens of thousands in some scholarship to roughly 300,000 in Chinese official findings, with the postwar Tokyo tribunal citing totals exceeding 200,000. The task of honest memory is to hold both truths at once — the certainty of the crime and the dispute over its arithmetic — without letting the dispute bury the crime.",
          zh: "1937年12月13日，當時的中國首都南京陷落，日軍在此後約六週間屠殺戰俘與平民，並在全城大規模強暴婦女。事件本身，證據確鑿、無庸置疑。死亡人數則真實存在爭議：估計範圍從部分學術研究的數萬人，到中國官方認定的約三十萬人，戰後東京法庭亦引用超過二十萬的總數。誠實記憶的課題，是同時握住兩個事實——罪行的確定性，與計數的爭議性——而不容爭議掩埋罪行。",
        },
        {
          en: "Imperial violence against civilians and captives was systemic, not incidental. The system of military sexual slavery euphemized as “comfort women” dragged women from Korea, China, and across occupied Asia; forced-labour projects — the Thailand–Burma railway above all — worked prisoners of war and conscripted Asian labourers to death by the tens of thousands; captured soldiers were starved, beaten, and killed on forced marches. These were policies and tolerated practices of an empire at war, and they were prosecuted as crimes after it.",
          zh: "針對平民與俘虜的帝國暴力是制度性的，並非偶發。以「慰安婦」一詞美化的軍事性奴役制度，擄掠了來自朝鮮、中國與整個占領區亞洲的女性；強制勞動工程——尤其是泰緬鐵路——令戰俘與被徵募的亞洲勞工數以萬計地勞累致死；被俘士兵在強制行軍中挨餓、挨打、被殺。這些是一個戰爭中的帝國的政策與被容忍的行徑，戰後也作為罪行受到審判。",
        },
      ],
      callout: {
        kind: "methodology",
        text: {
          en: "How a massacre is counted: Nanjing's death-toll estimates differ because historians count different things — burial-registry figures, the reports of the International Safety Zone Committee, survivors' and perpetrators' testimony, postwar tribunal evidence — over different boundaries of time and place. The range from tens of thousands to around 300,000 reflects those methods, not doubt about the massacre itself. Presenting a range honestly does not weaken the record; it is how a record survives attack.",
          zh: "一場屠殺如何計數：南京死亡人數的估計之所以不同，是因為歷史學家清點的對象不同——收屍與埋葬紀錄、國際安全區委員會的報告、倖存者與加害者的證詞、戰後法庭的證據——也因為時空界線劃得不同。從數萬人到約三十萬人的區間，反映的是方法差異，而不是對屠殺本身的懷疑。誠實地呈現區間並非削弱史實；這是史實得以抵禦攻擊的方式。",
        },
        citationIds: ["b1-britannica-nanjing"],
      },
      citationIds: ["b1-britannica-nanjing", "b1-nww2m-deaths"],
    },
    {
      id: "war-in-europe-1939-1941",
      heading: { en: "War in Europe, 1939–1941", zh: "歐洲戰爭：1939至1941年" },
      paragraphs: [
        {
          en: "Germany invaded Poland on 1 September 1939 with the method later called Blitzkrieg: armour and aircraft in coordination, cities bombed from the first day, civilians terrorized as an instrument of war. Britain and France, their ultimatums expired, declared war on 3 September but could not save their ally. On 17 September the Soviet Union invaded eastern Poland under the secret protocol; the country was partitioned between two dictatorships, each of which set about destroying Polish society in its own manner.",
          zh: "1939年9月1日，德國以後世所稱的「閃電戰」入侵波蘭：裝甲與空中武力協同推進，開戰首日即轟炸城市，以恐嚇平民作為戰爭工具。英法兩國在最後通牒到期後，於9月3日對德宣戰，卻救不了盟邦。9月17日，蘇聯依秘密議定書入侵波蘭東部；這個國家被兩個獨裁政權瓜分，而兩者各自以自己的方式摧毀波蘭社會。",
        },
        {
          en: "The Winter War followed in the north: on 30 November 1939 the Soviet Union attacked Finland and was expelled from the League for it, and paid a price in blood far beyond what anyone had expected before Finland ceded territory in March 1940. That spring Germany struck west — Denmark and Norway in April, the Low Countries and France in May. The Ardennes thrust encircled the Allied armies; what remained was lifted from Dunkirk; France signed its armistice on 22 June 1940, and an authoritarian collaborationist regime at Vichy replaced the Republic in the unoccupied zone.",
          zh: "北方隨即爆發冬季戰爭：1939年11月30日蘇聯進攻芬蘭，並為此被逐出國聯；在芬蘭於1940年3月割地求和之前，蘇聯付出的血價遠超世人預期。該年春天德國揮師西進——4月取丹麥與挪威，5月攻低地國家與法國。德軍穿越阿登的突擊包圍了盟軍；殘餘部隊自敦克爾克撤離；法國於1940年6月22日簽署停戰協定，維琪的威權合作政權在非占領區取代了共和國。",
        },
        {
          en: "Britain fought on alone through 1940. The Battle of Britain (July–October 1940) was the first campaign fought entirely in the air, and the Royal Air Force's narrow denial of air superiority defeated the invasion threat. German bombing then turned on the cities themselves: the Blitz, from September 1940 to May 1941, killed tens of thousands of British civilians in London, Coventry, Liverpool, and other cities — a deliberate campaign of terror against homes. The same war would soon return to German and Japanese cities on a still greater scale, as the next section must record.",
          zh: "英國於1940年獨力作戰。不列顛空戰（1940年7月至10月）是史上第一場完全在空中決勝的戰役，皇家空軍以微弱優勢保住制空權，粉碎了入侵威脅。德軍轟炸隨即轉向城市本身：1940年9月至1941年5月的「大轟炸」（the Blitz），在倫敦、考文垂、利物浦等城市造成數以萬計的英國平民死亡——這是一場針對家園的蓄意恐嚇。而同一場戰爭，不久之後也將以更大的規模還諸德國與日本的城市，下一節必須記下這一點。",
        },
      ],
      callout: {
        kind: "fact",
        text: {
          en: "Between 26 May and 4 June 1940, some 338,000 British and French troops were lifted from the beaches and harbour of Dunkirk — carried by warships and transports and by hundreds of civilian “little ships” that answered the navy's call. The army survived; its tanks, artillery, and heavy equipment did not. Three weeks later, France signed its armistice.",
          zh: "1940年5月26日至6月4日，約33萬8千名英法士兵自敦克爾克的海灘與港區撤離——由軍艦與運輸艦載離，也由數百艘響應海軍徵召的平民「小船」救走。軍隊存活了；坦克、火砲與重裝備則未能。三週之後，法國簽署停戰協定。",
        },
        citationIds: ["b1-britannica-wwii"],
      },
      citationIds: ["b1-avalon-nazsov", "b1-britannica-wwii"],
    },
    {
      id: "war-of-annihilation",
      heading: { en: "The war of annihilation, 1941–1945", zh: "殲滅戰爭：1941至1945年" },
      paragraphs: [
        {
          en: "On 22 June 1941, more than three million Axis soldiers invaded the Soviet Union along a front of nearly three thousand kilometres. Operation Barbarossa was conceived from the first as a war of annihilation — to starve and enslave the populations of the East, and to murder political commissars, Jews, and Roma as such. The Einsatzgruppen — mobile killing squads of the SS and police — followed the armies with orders to shoot; at Babi Yar, a ravine outside Kiev, 33,771 Jews were killed on 29–30 September 1941, according to the killing squads' own operational report. Then came the second turning point of 1941: on 7 December Japan attacked the United States Pacific Fleet at Pearl Harbor, killing more than 2,400 Americans, and within days Germany and Italy had declared war on the United States. The wars of Asia and Europe fused into one global conflict.",
          zh: "1941年6月22日，超過三百萬軸心國士兵沿著近三千公里的戰線入侵蘇聯。巴巴羅薩作戰從構想之初就是一場殲滅戰爭——要以飢餓與奴役清空東方的人口，並將政治委員、猶太人與羅姆人作為類別直接處死。由親衛隊與警察組成的行刑部隊「別動隊」奉命跟著軍隊推進殺人；在基輔郊外的巴比雅爾溝壑，依行刑部隊自身的行動報告，1941年9月29日至30日間共有33,771名猶太人遭到槍殺。接著是1941年的第二個轉捩點：12月7日，日本突襲珍珠港的美國太平洋艦隊，兩千四百多名美國人喪生；數日之內，德義相繼對美宣戰。亞洲與歐洲的戰火，就此融為一場全球戰爭。",
        },
        {
          en: "The Holocaust escalated in step with the war. Ghettos and mass shootings gave way to industrialized killing: Chełmno began gassing people in December 1941; at the Wannsee Conference of 20 January 1942, fifteen officials coordinated the deportations of Europe's Jews — the surviving protocol totals their target at over eleven million; Auschwitz-Birkenau became the largest killing centre of all, where at least 1.1 million people, most of them Jews, were murdered. By the war's end the Nazi regime and its collaborators had murdered approximately six million Jews, and millions of others — Roma and Sinti, disabled people, Soviet prisoners of war, Polish and Soviet civilians, political prisoners, homosexuals, and Jehovah's Witnesses among them.",
          zh: "大屠殺隨著戰爭同步升高。猶太人區與集體槍決讓位給工業化的殺戮：海烏姆諾於1941年12月開始以毒氣殺人；1942年1月20日的萬湖會議上，十五名官員協調歐洲猶太人的遣送——留存至今的會議紀錄，將屠殺對象總數寫成超過一千一百萬；奧斯威辛—比克瑙成為其中最大的殺戮中心，至少一百一十萬人在該處被謀殺，其中大多數是猶太人。至戰爭結束，納粹政權及其協作者謀殺了約六百萬猶太人，以及數以百萬計的其他人——羅姆人與辛提人、身心障礙者、蘇聯戰俘、波蘭與蘇聯平民、政治犯、同性戀者，以及耶和華見證人等。",
        },
        {
          en: "The war against cities ran on all sides. Germany had bombed Warsaw, Rotterdam, Coventry, and London; from 1942 the Allied strategic bombing of Germany — Hamburg's firestorm of 1943, the destruction of Dresden in 1945 — and from 1945 the firebombing of Japanese cities killed civilians on an enormous scale, the night of 9–10 March 1945 in Tokyo alone burning roughly a hundred thousand people to death. Whether bombing cities shortened the war, or shortened it at too great a moral cost, remains a genuine debate among historians — a debate about choices made within the war, which can never become a debate about who started it. The distinction matters: the first is a live scholarly question; the second is settled fact.",
          zh: "針對城市的戰爭在各條戰線同時進行。德國曾轟炸華沙、鹿特丹、考文垂與倫敦；自1942年起，盟軍對德國的戰略轟炸——1943年漢堡的火焰風暴、1945年德勒斯登的毀滅——以及1945年起對日本城市的燃燒彈轟炸，以巨大的規模殺害平民，僅1945年3月9日至10日的東京一夜，便約有十萬人被燒死。轟炸城市究竟是縮短了戰爭，還是以過高的道德代價換來縮短，至今仍是歷史學家之間真實存在的辯論——那是關於戰爭「之內」的抉擇的辯論，永遠不能變成關於誰發動戰爭的辯論。這個區別至關重要：前者是仍在進行的學術問題；後者是已成定論的事實。",
        },
        {
          en: "The atomic bombs dropped on Hiroshima and Nagasaki on 6 and 9 August 1945 killed tens of thousands at once — with combined deaths by the end of that year commonly estimated at roughly 110,000 to 210,000, as burns, injuries, and radiation continued their work. Japan announced surrender on 15 August, and the formal instrument was signed on 2 September 1945 aboard USS Missouri in Tokyo Bay. The deadliest war in human history — an estimated 70 to 85 million dead — was over. The interactive timeline below returns to these years event by event, from Manchuria to Tokyo Bay, because the sequence itself is evidence: how many warnings, how many exits, how many chances to act while the price of acting was still low.",
          zh: "1945年8月6日與9日投於廣島與長崎的原子彈，瞬間造成數萬人死亡——燒灼傷、創傷與輻射持續發威，至該年年底，兩城合計死亡通常估計約在11萬至21萬人之間。日本於8月15日宣布投降，正式降書於1945年9月2日在東京灣的密蘇里號軍艦上簽署。人類史上最致命的戰爭——估計死亡七千萬至八千五百萬人——就此結束。下方互動時間軸將逐年逐事重返這些年，從滿洲到東京灣，因為「順序」本身就是證據：有多少警訊、多少出口、多少在行動代價仍然低廉時付諸行動的機會。",
        },
      ],
      callout: {
        kind: "methodology",
        text: {
          en: "How victim-group figures are estimated: the approximately six million Jewish dead is a convergent figure — census deficits, deportation and camp records, and survivor testimony all arrive near it, and major memorial institutions present it as the standard approximation. Figures for other victim groups carry wider documented ranges: hundreds of thousands of Roma and Sinti (commonly estimated 220,000–500,000); roughly a quarter of a million disabled people murdered in the “euthanasia” programs; and about 3.3 million of the 5.7 million Soviet prisoners of war who died in German captivity. The ranges mark the limits of documentation — never doubt of the crimes themselves.",
          zh: "各受害群體的數字如何估計：約六百萬猶太遇難者是多方趨同的數字——人口普查缺額、遣送與集中營紀錄、倖存者證詞各自逼近此數，主要紀念機構亦以之作為標準概數。其他受害群體的數字則有較寬的文獻區間：羅姆人與辛提人以十萬計（常見估計為22萬至50萬）；在「安樂死」計畫中遇害的身心障礙者約二十五萬人；570萬名蘇聯戰俘中，約330萬人死於德國俘虜營。這些區間標記的是文獻的邊界——永遠不是對罪行本身的懷疑。",
        },
        citationIds: ["b1-ushmm-learn"],
      },
      citationIds: [
        "b1-ushmm-learn",
        "b1-yadvashem-babiyar",
        "b1-avalon-wannsee",
        "b1-nww2m-auschwitz",
        "b1-nww2m-atomic",
        "b1-nww2m-deaths",
        "b1-britannica-wwii",
      ],
    },
  ],
  citations: [
    {
      id: "b1-ushmm-learn",
      publisher: "United States Holocaust Memorial Museum",
      title: {
        en: "Learn — the Holocaust and the Museum's educational resources",
        zh: "「Learn」——大屠殺與該館教育資源入口",
      },
      url: "https://www.ushmm.org/learn",
      kind: "institutional",
      accessDate: "2026-10-17",
      note: {
        en: "Verified HTTP 200 on 2026-10-17.",
        zh: "2026-10-17 驗證 HTTP 200。",
      },
    },
    {
      id: "b1-yadvashem-babiyar",
      publisher: "Yad Vashem",
      title: {
        en: "Babi Yar and the Jews of Kiev — Primary Sources (Einsatzgruppen Operations and Situation Report No. 6)",
        zh: "巴比雅爾與基輔猶太人——原始文獻（別動隊行動與局勢報告第6號）",
      },
      url: "https://www.yadvashem.org/education/educational-materials/lesson-plans/babi-yar/primary-sources.html",
      kind: "primary",
      accessDate: "2026-10-17",
      note: {
        en: "Verified HTTP 200 on 2026-10-17.",
        zh: "2026-10-17 驗證 HTTP 200。",
      },
    },
    {
      id: "b1-avalon-nazsov",
      publisher: "The Avalon Project, Yale Law School Lillian Goldman Law Library",
      title: {
        en: "Nazi-Soviet Relations 1939–1941: Secret Additional Protocol, 23 August 1939",
        zh: "《納粹—蘇聯關係（1939–1941）》：秘密附加議定書，1939年8月23日",
      },
      url: "https://avalon.law.yale.edu/20th_century/addsepro.asp",
      kind: "primary",
      accessDate: "2026-10-17",
      note: {
        en: "Verified HTTP 200 on 2026-10-17.",
        zh: "2026-10-17 驗證 HTTP 200。",
      },
    },
    {
      id: "b1-avalon-wannsee",
      publisher: "The Avalon Project, Yale Law School Lillian Goldman Law Library",
      title: {
        en: "The Wannsee Protocol, 20 January 1942",
        zh: "萬湖會議紀錄，1942年1月20日",
      },
      url: "https://avalon.law.yale.edu/imt/wannsee.asp",
      kind: "primary",
      accessDate: "2026-10-17",
      note: {
        en: "Verified HTTP 200 on 2026-10-17.",
        zh: "2026-10-17 驗證 HTTP 200。",
      },
    },
    {
      id: "b1-nww2m-jackson",
      publisher: "The National WWII Museum",
      title: {
        en: "“The Grave Responsibility of Justice”: Justice Robert H. Jackson's Opening Statement at Nuremberg",
        zh: "〈正義的重大責任〉：羅伯特・傑克遜法官的紐倫堡開庭陳詞",
      },
      url: "https://www.nationalww2museum.org/war/articles/robert-jackson-opening-statement-nuremberg",
      kind: "institutional",
      accessDate: "2026-10-17",
      note: {
        en: "Verified HTTP 200 on 2026-10-17.",
        zh: "2026-10-17 驗證 HTTP 200。",
      },
    },
    {
      id: "b1-nww2m-auschwitz",
      publisher: "The National WWII Museum",
      title: {
        en: "The Liberation of Auschwitz",
        zh: "奧斯威辛的解放",
      },
      url: "https://www.nationalww2museum.org/war/articles/liberation-auschwitz",
      kind: "institutional",
      accessDate: "2026-10-17",
      note: {
        en: "Verified HTTP 200 on 2026-10-17.",
        zh: "2026-10-17 驗證 HTTP 200。",
      },
    },
    {
      id: "b1-nww2m-atomic",
      publisher: "The National WWII Museum",
      title: {
        en: "The Atomic Bombings of Japan",
        zh: "對日本的原子轟炸",
      },
      url: "https://www.nationalww2museum.org/war/topics/atomic-bombings-japan",
      kind: "institutional",
      accessDate: "2026-10-17",
      note: {
        en: "Verified HTTP 200 on 2026-10-17.",
        zh: "2026-10-17 驗證 HTTP 200。",
      },
    },
    {
      id: "b1-nww2m-deaths",
      publisher: "The National WWII Museum",
      title: {
        en: "Research Starters: Worldwide Deaths in World War II",
        zh: "研究入門：第二次世界大戰全球死亡人數",
      },
      url: "https://www.nationalww2museum.org/students-teachers/student-resources/research-starters/research-starters-worldwide-deaths-world-war",
      kind: "institutional",
      accessDate: "2026-10-17",
      note: {
        en: "Verified HTTP 200 on 2026-10-17.",
        zh: "2026-10-17 驗證 HTTP 200。",
      },
    },
    {
      id: "b1-britannica-wwii",
      publisher: "Encyclopaedia Britannica",
      title: {
        en: "World War II (1939–1945)",
        zh: "第二次世界大戰（1939–1945）",
      },
      url: "https://www.britannica.com/event/World-War-II",
      kind: "reference",
      accessDate: "2026-10-17",
      note: {
        en: "Automated check blocked (HTTP 403, bot protection); canonical institutional URL; browser verification pending.",
        zh: "自動檢查遭封鎖（HTTP 403，防爬蟲）；此為該機構正式頁面；待瀏覽器驗證。",
      },
    },
    {
      id: "b1-britannica-nanjing",
      publisher: "Encyclopaedia Britannica",
      title: {
        en: "Nanjing Massacre (December 1937 – January 1938)",
        zh: "南京大屠殺（1937年12月至1938年1月）",
      },
      url: "https://www.britannica.com/event/Nanjing-Massacre",
      kind: "reference",
      accessDate: "2026-10-17",
      note: {
        en: "Automated check blocked (HTTP 403, bot protection); canonical institutional URL; browser verification pending.",
        zh: "自動檢查遭封鎖（HTTP 403，防爬蟲）；此為該機構正式頁面；待瀏覽器驗證。",
      },
    },
  ],
};
