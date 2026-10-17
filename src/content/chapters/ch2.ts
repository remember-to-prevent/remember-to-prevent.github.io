import type { ChapterContent } from "@/content/types";

/**
 * Chapter 02 — The First World War (1914–1918): How Did War Escalate?
 * Bilingual (EN / 繁體中文) editorial content. Agent task 4-a.
 * The interactive timeline and theatres map render below these sections.
 */
export const ch2: ChapterContent = {
  id: "ch2",
  navLabel: { en: "First War", zh: "一戰" },
  number: "02",
  title: {
    en: "The First World War (1914–1918): How Did War Escalate?",
    zh: "第一次世界大戰（1914–1918）：戰爭如何步步升高？",
  },
  question: {
    en: "How did alliances, imperial rivalries, nationalism, militarization, and political choices turn an assassination into a global war — and why was none of it inevitable?",
    zh: "同盟體系、帝國競逐、民族主義、軍事化與政治抉擇，如何將一場刺殺演變為全球戰爭——而這一切又為何沒有一環是必然？",
  },
  lead: [
    {
      en: "On 28 June 1914, Archduke Franz Ferdinand, heir to the throne of Austria-Hungary, was assassinated in Sarajevo by Gavrilo Princip. Five weeks later, Europe was at war. The July Crisis that connected the two was not a mechanical chain reaction: at every step, leaders made choices — pledges, ultimatums, mobilization orders — and alternatives remained open until they were closed.",
      zh: "1914年6月28日，奧匈帝國皇儲斐迪南大公在塞拉耶佛遭加夫里洛·普林西普刺殺。五週之後，歐洲陷入戰爭。連結兩者的「七月危機」並非機械式的連鎖反應：每一步都是領導者的抉擇——保證、最後通牒、動員令——而替代方案始終存在，直到它們一一被封閉。",
    },
    {
      en: "This chapter follows the war from those five weeks to the eleventh hour of 11 November 1918 — through the alliance systems and imperial rivalries that framed the crisis, the global theatres the fighting spread to, and the soldiers and civilians who bore it. One caution applies throughout: nothing here was inevitable, and no single cause carried the war on its own.",
      zh: "本章從這五週追蹤到1918年11月11日的第十一個小時——途經框住危機的同盟體系與帝國競逐、戰火延燒而至的全球戰區，以及承受這一切的軍人與平民。全章只有一項提醒：這一切都不是必然，也沒有單一原因足以獨自撐起這場戰爭。",
    },
  ],
  sections: [
    {
      id: "an-armed-peace",
      heading: { en: "An armed peace: alliances and imperial rivalries", zh: "武裝的和平：同盟與帝國競逐" },
      paragraphs: [
        {
          en: "By 1914, Europe's great powers were bound into two blocs: the Triple Alliance of Germany, Austria-Hungary, and Italy, and the Franco-Russian alliance, joined informally by Britain through ententes with France (1904) and Russia (1907). Alliances were meant to deter attack by making war costly. In the crisis of July 1914 they instead transmitted a Balkan quarrel across the continent, committing capitals to one another's risks.",
          zh: "至1914年，歐洲列強已結成兩大陣營：德國、奧匈帝國與義大利的「三國同盟」，以及法俄同盟；英國則透過與法國（1904年）及俄國（1907年）的「協約」非正式加入。同盟的初衷，是讓戰爭的代價高到足以嚇阻攻擊。但在1914年7月的危機中，它們反而把一場巴爾幹爭端傳導至全歐，使各國首都為彼此的風險背書。",
        },
        {
          en: "Under the alliances lay an age of imperial competition: colonial frictions overseas (the Moroccan crises of 1905 and 1911 brought France and Germany to the brink), the Anglo-German naval race, and a Balkans reordered by the wars of 1912–13, which left Austria-Hungary and Serbia facing each other with grievances sharpened. Rivalry did not make war certain — Europe had passed through earlier crises without falling — but it stocked the crisis of 1914 with fear, timetables, and mutual suspicion.",
          zh: "同盟之下，是一個帝國競逐的時代：海外的殖民摩擦（1905年與1911年的兩次摩洛哥危機，一度使法德瀕臨開戰）、英德海軍競賽，以及1912至1913年巴爾幹戰爭重畫的地圖——戰後的巴爾幹，讓奧匈帝國與塞爾維亞帶著更尖銳的宿怨相望。競逐並未使戰爭成為定局——歐洲也曾安然度過更早的危機——但它為1914年的危機預先儲備了恐懼、時間表與相互猜疑。",
        },
      ],
      citationIds: ["a-britannica-wwi", "a-iwm-wwi"],
    },
    {
      id: "nationalism-and-militarization",
      heading: { en: "Nationalism and militarization", zh: "民族主義與軍事化" },
      paragraphs: [
        {
          en: "The decades before 1914 were also the decades of mass politics: popular newspapers, patriotic leagues, and national myths that framed diplomacy as a contest of peoples rather than of ministries. Militarization was material and cultural at once — armies grew, general staffs drew up mobilization schedules measured in railway days, and publics were taught to read war as a test of national vitality.",
          zh: "1914年之前的數十年，同時也是大眾政治的年代：通俗報刊、愛國社團與民族神話，把外交塑造成民族之間而非部閣之間的競賽。軍事化既是物質的，也是文化的——軍隊擴編、參謀本部以鐵路日為單位擬定動員時刻表，而輿論被教導將戰爭視為民族生命力的考驗。",
        },
        {
          en: "Military planning mattered because of a specific technical fact: mobilization was slow to start and, once begun, was believed to be nearly impossible to stop. Leaders assumed that delay handed the initiative to the enemy, and that belief — more than any single order — compressed the diplomacy of late July 1914 into hours. Germany's Schlieffen Plan, drafted before the crisis and revised in 1914, went further: it aimed at France first, through neutral Belgium, hard-wiring a two-front war into the opening move.",
          zh: "軍事計畫之所以關鍵，在於一項具體的技術事實：動員一旦啟動便緩慢，而一旦展開，便被認為幾乎無法停止。各國領袖相信，時刻表開動之後若再延宕，等於把主動權奉送敵人——正是這個信念，而非任何單一命令，把1914年7月底的外交壓縮成以小時計。至於德國早在危機之前即已擬定、並於1914年修訂的施里芬計畫，走得更遠：它設想先經中立的比利時攻擊法國，把兩線作戰硬寫進了開戰的第一步。",
        },
      ],
      citationIds: ["a-iwm-wwi", "a-britannica-wwi"],
    },
    {
      id: "the-july-crisis",
      heading: { en: "The July Crisis: five weeks of choices", zh: "七月危機：五週的抉擇" },
      paragraphs: [
        {
          en: "The crisis unfolded as a sequence of decisions, each one arguable. On 5–6 July, Germany handed Austria-Hungary a “blank cheque” — unconditional backing for whatever Vienna decided against Serbia. Austria-Hungary's ultimatum of 23 July, with its ten demands and a 48-hour deadline, was framed to be refused; Serbia accepted most points but not all, and referred the residue to arbitration. On 28 July Austria-Hungary declared war anyway and shelled Belgrade the next day.",
          zh: "危機以一連串決策展開，而每一項都可以爭辯。7月5日至6日，德國向奧匈帝國開出「空白支票」——無條件支持維也納對塞爾維亞的任何決定。7月23日，奧匈發出最後通牒，十項要求、限期48小時，措辭刻意使人無法全盤接受；塞爾維亞接受了多數條款，僅保留少數異議並提議交付仲裁。7月28日，奧匈仍然宣戰，翌日砲擊貝爾格勒。",
        },
        {
          en: "The next decisions were Russia's and Germany's. Russia, Serbia's protector, ordered general mobilization on 30 July; Germany declared war on Russia on 1 August and on France on 3 August, and its armies entered neutral Belgium on 4 August — bringing Britain, guarantor of Belgian neutrality since the treaty of 1839, into the war that same day. At every point alternatives were discussed: a British proposal that Austria-Hungary “halt in Belgrade,” last-minute telegrams between cousins who signed themselves “Willy” and “Nicky.” The war was not an avalanche; it was a series of choices made under pressure, with the costs pushed forward.",
          zh: "接下來的決策屬於俄國與德國。作為塞爾維亞保護者的俄國，於7月30日下令全面動員；德國於8月1日對俄、8月3日對法宣戰，並於8月4日揮軍進入中立的比利時——使自1839年條約起即為比利時中立作保的英國，於同日參戰。在每一個節點上，替代方案都曾被討論：英方提議奧匈「止步於貝爾格勒」，互稱「Willy」與「Nicky」的兩位皇室表兄弟之間，也有最後時刻的電報往來。戰爭不是一場雪崩；它是一連串在壓力下做出的抉擇，而代價被一再推向未來。",
        },
        {
          en: "That is why “inevitability” is the wrong lens. What the July Crisis shows is narrower and more useful: how commitment, timetables, and the fear of moving second can close off options faster than diplomacy can reopen them.",
          zh: "因此，「必然」是錯誤的透鏡。七月危機所揭示的更窄、也更有用：承諾、時間表與「怕慢一步」的恐懼，如何能以快過外交重啟的速度，封閉每一扇仍然開著的門。",
        },
      ],
      callout: {
        kind: "methodology",
        text: {
          en: "Historians still argue about the balance of responsibility for 1914, and the argument is itself part of the record. Fritz Fischer (1961) argued that Germany pursued a premeditated bid for world power; later scholarship — Christopher Clark's account of the powers as “sleepwalkers,” studies of the Habsburg state and of Russian and French choices — spreads responsibility more widely. No school has won the debate. This site presents the crisis as contested history: the decisions are documented; the weighting remains open.",
          zh: "歷史學家至今仍在爭論1914年的責任分布，而這場爭論本身就是史料的一部分。弗里茨·費歇爾（1961年）主張，德國追求的是預謀的「世界霸權之路」；其後的研究——克里斯多福·克拉克筆下「夢遊者」般的列強，以及對哈布斯堡國家與俄、法抉擇的考察——則將責任分佈得更廣。至今沒有一派取得定論。本站因此將這場危機呈現為仍在爭論的歷史：決策有案可查，權重未有定論。",
        },
        citationIds: ["a-britannica-wwi"],
      },
      citationIds: ["a-britannica-wwi", "a-iwm-wwi"],
    },
    {
      id: "beyond-the-western-front",
      heading: { en: "A world war, not only a European one", zh: "世界大戰，不只是歐洲的戰爭" },
      paragraphs: [
        {
          en: "The war left Europe almost immediately. Japan, allied to Britain since 1902, joined in August 1914 and — with a small British contingent — besieged the German leased territory of Qingdao on the coast of China; the base surrendered on 7 November 1914. On modern maps the siege is fought on the soil of the Chinese city of Qingdao: the Kiautschou leasehold of 1914, like the other colonial borders of that world, no longer exists. In Africa, Allied forces invaded Germany's colonies; only German East Africa — today's Tanzania, Rwanda, and Burundi — held out to the end, in a campaign that conscripted hundreds of thousands of African carriers, many of whom died of disease, hunger, and exhaustion.",
          zh: "戰火幾乎立即越出歐洲。自1902年起與英國結盟的日本，於1914年8月參戰，並與一支小規模英國部隊圍攻中國海岸的德國租借地青島；11月7日，該基地投降。在現代地圖上，這場圍城發生在中國城市青島的土地上——1914年的德屬膠州灣租借地，一如那個世界的其他殖民邊界，已不復存在。在非洲，協約國部隊入侵德國殖民地；唯有德屬東非——今日的坦尚尼亞、盧安達與浦隆地——抵抗至戰爭結束。這場戰役徵用了數十萬非洲挑夫，其中許多人死於疾病、饑餓與勞竭。",
        },
        {
          en: "The Ottoman Empire entered the war in November 1914, opening fronts at Gallipoli, in Mesopotamia, Palestine, and the Caucasus; the Gallipoli landings of 25 April 1915 became a founding memory for Australia and New Zealand and a costly defence for the Ottomans themselves. The war's logistics were equally global: soldiers and labourers from India, West and North Africa, Indochina, China, Egypt, and the Caribbean served on every front and behind the lines. Any account of “the Western Front” that stops at Europeans has already lost the war's full shape.",
          zh: "鄂圖曼帝國於1914年11月參戰，開啟加里波利、美索不達米亞、巴勒斯坦與高加索等戰線；1915年4月25日的加里波利登陸，成為澳洲與紐西蘭的奠基記憶，也是鄂圖曼自身傷亡慘重的防衛戰。戰爭的後勤同樣是全球的：來自印度、西非與北非、中南半島、中國、埃及與加勒比海等地的士兵與勞工，在各條戰線上與戰線後方服役。任何只講歐洲人的「西線」敘事，都已失去了這場戰爭的完整形狀。",
        },
      ],
      callout: {
        kind: "fact",
        text: {
          en: "The war's manpower maps did not follow Europe's borders. More than a million soldiers of the Indian Army served overseas during the First World War; roughly 140,000 Chinese labourers worked behind the British and French lines in France and Flanders; France drew several hundred thousand soldiers and workers from West and North Africa and Indochina; Britain employed labour from Egypt, South Africa, and the Caribbean. Their service is part of the war's history — and part of why its costs were global.",
          zh: "這場戰爭的人力地圖並不以歐洲為界。第一次世界大戰期間，印度陸軍海外服役的士兵超過百萬；約14萬名中國勞工在法國與法蘭德斯的英法兩軍後方工作；法國從西非、北非與中南半島徵募了數十萬士兵與工人；英國則任用來自埃及、南非與加勒比海的勞工。他們的服役是這場戰爭歷史的一部分——也是戰爭代價之所以全球化的原因之一。",
        },
        citationIds: ["a-iwm-wwi", "a-britannica-wwi"],
      },
      citationIds: ["a-iwm-wwi", "a-britannica-wwi"],
    },
    {
      id: "soldiers-and-civilians",
      heading: { en: "Soldiers and civilians: the texture of total war", zh: "軍人與平民：總體戰的質地" },
      paragraphs: [
        {
          en: "On the Western Front, the war of movement froze within months into trench lines running from the North Sea to Switzerland. Soldiers lived in cycles — rotation between front, support, and rest — amid artillery, machine guns, gas from 1915 onward, lice, mud, and the particular exhaustion of waiting. Battles came to be measured less in ground than in bodies: at Verdun and the Somme in 1916, hundreds of thousands of casualties on each side bought kilometres that were often lost again. The first day of the Somme, 1 July 1916, cost the British Army about 57,000 casualties — the costliest single day in its history.",
          zh: "在西線，機動戰在數月之內凝結為北海至瑞士之間的壕溝體系。士兵的生活以循環為節奏——前線、支援、休整的輪替——其間是砲火、機槍、1915年起的毒氣、蝨子、泥濘，以及等待本身帶來的獨特耗竭。戰役逐漸不以土地而以傷亡衡量：1916年的凡爾登與索姆河，雙方各以數十萬傷亡換取數公里的土地，而這些土地又往往得而復失。索姆河的第一天，1916年7月1日，英軍傷亡約5萬7千人——是其史上代價最高的單日。",
        },
        {
          en: "Civilians were inside the war, not beside it. Blockade and counter-blockade made food a weapon: rationing spread through the belligerent cities, and Germany's “turnip winter” of 1916–17 marked the depth of hunger, with excess civilian deaths linked to blockade and shortage estimated in the hundreds of thousands, though the exact toll is still debated. Women entered war industry at scale — munitions factories, transport, offices — in numbers that permanently changed labour markets and suffrage politics. Occupation, deportation of labour, bombardment of towns, and the massacres and deportations of Ottoman Armenians in 1915–16 placed civilians directly in the war's path.",
          zh: "平民就在戰爭之內，而非戰爭之旁。封鎖與反封鎖使糧食成為武器：配給制度遍及各交戰城市；德國1916至1917年的「蕪菁之冬」標誌著饑餓的谷底——與封鎖及短缺相關的超額平民死亡，估計達數十萬之譜，確切數字至今仍有爭議。婦女以空前的規模進入戰時工業——軍火廠、運輸、辦公事務——其人數永久改變了勞動市場與婦女參政的政治。佔領、勞工遣送、城鎮砲擊，以及1915至1916年鄂圖曼亞美尼亞人遭受的屠殺與驅逐，都使平民直接置身戰爭的行進路線之上。",
        },
        {
          en: "Against the official vocabulary of glorious sacrifice, the war also produced its own witnesses. Wilfred Owen, a British infantry officer killed in France on 4 November 1918 — one week before the Armistice — left poems that were published posthumously in 1920. The closing lines of “Dulce et Decorum est” answer, from inside the war, the old praise of dying for one's country:",
          zh: "相對於官方辭令中的「光榮犧牲」，這場戰爭也造就了它自己的見證者。1918年11月4日——停戰協定生效前一週——陣亡於法國的英國步兵軍官威爾弗雷德·歐文，留下了身後於1920年出版的詩作。〈Dulce et Decorum est〉的結尾，從戰爭的內部，回應了那句歌頌為國捐軀的古老格言：",
        },
      ],
      callout: {
        kind: "testimony",
        text: {
          en: "“The old Lie: Dulce et decorum est / Pro patria mori.”",
          zh: "「古老的謊言：Dulce et decorum est / Pro patria mori.（為國捐軀，甜美而相宜。）」",
        },
        attribution: {
          en: "Wilfred Owen, “Dulce et Decorum est” — written 1917–18, published posthumously in 1920; Owen was killed on 4 November 1918. The Latin means: “It is sweet and fitting to die for one's country.”",
          zh: "威爾弗雷德·歐文，〈Dulce et Decorum est〉——寫於1917至1918年，1920年身後出版；歐文於1918年11月4日陣亡。拉丁文大意：「為國捐軀，甜美而相宜。」",
        },
        citationIds: ["a-poetryfoundation-owen"],
      },
      citationIds: ["a-poetryfoundation-owen", "a-nationalarchives-wwi-letters", "a-nam-somme"],
    },
    {
      id: "ending-the-war",
      heading: { en: "How the war ended — and what it settled", zh: "戰爭如何結束——又留下了什麼" },
      paragraphs: [
        {
          en: "The last two years turned on three movements. The United States entered the war on 6 April 1917, after Germany resumed unrestricted submarine warfare and the Zimmermann Telegram was published; American industry and manpower changed the war's arithmetic. Russia, shattered by two revolutions in 1917, left the war — signing the punitive Treaty of Brest-Litovsk on 3 March 1918, and ceding territories that held roughly a third of the Russian Empire's population.",
          zh: "最後兩年繫於三個轉折。美國在德國恢復無限制潛艇戰、齊默爾曼電報曝光之後，於1917年4月6日參戰；美國的工業與人力改寫了戰爭的算術。歷經1917年兩場革命的俄國則選擇退出——於1918年3月3日簽署苛刻的《布列斯特—立陶夫斯克條約》，割讓住有俄羅斯帝國約三分之一人口的領土。",
        },
        {
          en: "Freed in the east, Germany gambled on the west: the Spring Offensive opened on 21 March 1918 with one of the war's heaviest bombardments and advanced further than any attack since 1914 — then exhausted itself without splitting the Allies. From 8 August 1918, the Allied Hundred Days pushed back a starving German Army; at home the blockade bit, the fleet mutinied at Kiel, and the imperial government collapsed. In the Forest of Compiègne, an armistice signed in the early morning took effect at 11:00 on 11 November 1918.",
          zh: "東線既解，德國在西線孤注一擲：春季攻勢於1918年3月21日以全戰最猛烈的砲擊之一揭幕，推進幅度為1914年以來之最——卻在未能分裂協約國之前耗盡了自己。自1918年8月8日起，協約國的百日攻勢反推饑餓的德軍；在國內，封鎖發威、艦隊於基爾譁變、帝國政府崩解。在貢比涅森林，清晨簽署的停戰協定於1918年11月11日上午11時生效。",
        },
        {
          en: "The interactive timeline below follows these events in order, each with its sources; the world map beside it shows the war's reach on modern borders, with the differences between 1914 and today explicitly disclosed. By the Armistice, four empires had fallen, and the peace that followed stored up grievances that later chapters must face. The war that was to end war had not ended war. It had shown how fast a continent that considered itself too civilized for catastrophe could become one.",
          zh: "下方的互動時間軸依時序追隨這些事件，逐一標明出處；其旁的世界地圖以現代國界呈現這場戰爭的觸及範圍，並明確披露1914年與今日疆界的差異。至停戰之時，已有四個帝國傾覆；其後的和約積累的怨懟，正是後續章節必須直面之處。那場旨在終結一切戰爭的戰爭，並未終結戰爭。它只顯示了一個自認文明得足以免疫於災難的大陸，能以多快的速度成為災難本身。",
        },
      ],
      citationIds: ["a-worldwar-armistice", "a-worldwar-lusitania", "a-iwm-wwi"],
    },
  ],
  citations: [
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
    {
      id: "a-nationalarchives-wwi-letters",
      publisher: "The National Archives (UK)",
      title: {
        en: "Letters from the First World War: In the Trenches (teaching resource)",
        zh: "第一次世界大戰書信輯：戰壕篇（教學資源）",
      },
      url: "https://www.nationalarchives.gov.uk/education/teaching-resources/letters-from-the-first-world-war-the-trenches-part-one/",
      kind: "institutional",
      accessDate: "2026-10-17",
      note: {
        en: "Verified HTTP 200 on 2026-10-17.",
        zh: "2026-10-17 驗證 HTTP 200。",
      },
    },
    {
      id: "a-nam-somme",
      publisher: "National Army Museum",
      title: {
        en: "The Battle of the Somme",
        zh: "索姆河戰役",
      },
      url: "https://www.nam.ac.uk/explore/battle-somme",
      kind: "institutional",
      accessDate: "2026-10-17",
      note: {
        en: "Verified HTTP 200 on 2026-10-17.",
        zh: "2026-10-17 驗證 HTTP 200。",
      },
    },
    {
      id: "a-poetryfoundation-owen",
      publisher: "Poetry Foundation",
      title: {
        en: "Dulce et Decorum Est (Wilfred Owen)",
        zh: "Dulce et Decorum Est（威爾弗雷德·歐文）",
      },
      url: "https://www.poetryfoundation.org/poems/46560/dulce-et-decorum-est",
      kind: "primary",
      accessDate: "2026-10-17",
      note: {
        en: "Verified HTTP 200 on 2026-10-17.",
        zh: "2026-10-17 驗證 HTTP 200。",
      },
    },
    {
      id: "a-worldwar-lusitania",
      publisher: "National WWI Museum and Memorial",
      title: {
        en: "Torpedoes and Tragedy: The Sinking of RMS Lusitania",
        zh: "魚雷與悲劇：路西塔尼亞號的沉沒",
      },
      url: "https://www.theworldwar.org/learn/about-wwi/torpedoes-and-tragedy-sinking-rms-lusitania",
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
  ],
};
