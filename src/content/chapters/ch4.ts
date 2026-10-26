import type { ChapterContent } from "@/content/types";
import {
  b2AnnefrankDutch,
  b2BritannicaBengal,
  b2BritannicaLeningrad,
  b2BritannicaWwi,
  b2CambridgeOffer,
  b2Gfc,
  b2HistorycomWwii,
  b2Nww2mDeaths,
  b2Nww2mGreece,
  b2Nww2mLastMillion,
  b2PoetryfoundationOwen,
  b2UshmmLearn,
  b2YadvashemHolocaust,
  b2YadvashemNames,
  b2HistorycomWwiDeaths,
  b2HistorycomLeningrad,
  b2CoxBlockade,
} from "@/content/data/casualties";

/**
 * Chapter 04 — The Human Cost: Beyond the Battlefield.
 *
 * The chapter's three range-bar charts (casualties / holocaust / hunger) render
 * below the sections via the page's interactive block. Citation records are
 * shared with (and defined in) src/content/data/casualties.ts, so the chapter
 * and its datasets reference one verified registry.
 */
export const ch4: ChapterContent = {
  id: "ch4",
  navLabel: { en: "Human Cost", zh: "人類代價" },
  number: "04",
  title: {
    en: "The Human Cost: Beyond the Battlefield",
    zh: "人類的代價：戰場之外",
  },
  question: {
    en: "What did these wars cost in lives, homes, health, and memory — and how can we talk about numbers without erasing the people behind them?",
    zh: "這兩場戰爭在生命、家園、健康與記憶上付出了什麼代價？我們如何在談論數字時，不抹去數字背後的人？",
  },
  lead: [
    {
      en: "The First World War's dead were counted above all in soldiers' graves — yet even there, civilians died in numbers the world was still learning to count. In the Second World War, the majority of the dead were civilians — bombed, starved, persecuted, displaced. Behind every aggregate number are families, names, and unfinished lives.",
      zh: "第一次世界大戰的死難，首先以軍人的墳墓計數——然而即使在那場戰爭，平民死亡也已達到世人仍在學習計數的規模。到了第二次世界大戰，死難者的大多數是平民——被轟炸、被餓死、被迫害、被迫流離。每一個總計數字背後，都是家庭、名字與未竟的人生。",
    },
    {
      en: "This chapter counts what can be counted — honestly, and in ranges — and remembers what cannot. It moves from the statistics, through the Holocaust's accounting and the loss of home, to the wounds that outlived the fighting and the hunger that wars made.",
      zh: "本章清點可以清點的——以誠實的區間——並記住無法清點的。我們從統計數字出發，經過大屠殺的清點與家園的失去，走向比戰火更長的創傷，以及戰爭所造成的饑餓。",
    },
  ],
  sections: [
    {
      id: "reading-the-numbers",
      heading: { en: "Reading the numbers honestly", zh: "誠實地閱讀數字" },
      paragraphs: [
        {
          en: "Any honest account of the world wars' human cost begins with an admission: the categories are not interchangeable. Military deaths, civilian deaths, excess mortality, famine deaths and displacement measure different things, are documented by different methods, and answer different questions. Adding them together into one grand total produces a number that looks precise and means nothing.",
          zh: "對兩次世界大戰人類代價的誠實書寫，必須先承認一件事：這些類別不可互換。軍人陣亡、平民死亡、超額死亡、饑荒死亡與流離失所衡量的是不同的東西，以不同的方法記錄，回答不同的問題。把它們加總成一個巨大的數字，只會得到一個看似精確、實則毫無意義的總數。",
        },
        {
          en: "For this reason the charts below never show a single total. Each bar spans a documented minimum and maximum drawn from named sources, and every series carries its own note on definition, geographic scope and caveat. Where scholarship disagrees, the disagreement is drawn rather than hidden.",
          zh: "因此，下方圖表從不顯示單一總數。每個長條橫跨由具名來源記載的最小值與最大值，每個數列都附有定義、地理範圍與附註說明。學術意見分歧之處，分歧被畫了出來，而非被藏起來。",
        },
        {
          en: "One comparison, though, needs care rather than a slogan. In the First World War, the balance between military and civilian dead shifts with every definition — whether epidemic disease and blockade-related deaths are counted decides it. In the Second World War, the estimates discussed in this chapter agree that the majority of the dead were civilians: HISTORY's overview gives 50–55 million civilian deaths against 21–25 million military deaths.",
          zh: "然而有一項比較需要的是審慎，而非口號。在第一次世界大第一次世界大戰，軍人與平民死亡的相對比例隨定義而變——疫病與封鎖相關死亡是否計入，便足以左右結果。在第二次世界大戰，本章引用的各項估計一致以平民為死難者的大多數：HISTORY 概述給出平民死亡5,000萬至5,500萬，相對於軍人死亡2,100萬至2,500萬。",
        },
      ],
      callout: {
        kind: "methodology",
        text: {
          en: "How to read the charts in this chapter: every bar spans a documented minimum and maximum from named sources — the width of a bar is disagreement between definitions, not doubt that the deaths occurred. Select a bar (or switch to the table view) to see each series' definition, scope and sources. Nothing in this chapter should be quoted as a single precise number.",
          zh: "如何閱讀本章圖表：每個長條橫跨具名來源記載的最小值與最大值——長條的寬度代表定義之間的分歧，而非對死亡是否發生的懷疑。點選長條（或切換為表格檢視）即可看到每個數列的定義、範圍與來源。本章任何數字都不應被引用為單一精確值。",
        },
      },
      citationIds: ["b2-nww2m-deaths", "b2-historycom-wwii"],
    },
    {
      id: "the-dead-and-the-wounded",
      heading: { en: "The dead and the wounded", zh: "死者與傷者" },
      paragraphs: [
        {
          en: "The First World War's military dead are estimated at about 8.5 million by Britannica's overview — soldiers dead from wounds and disease — while HISTORY's dedicated tally puts them slightly above 9.7 million; the chart spans those two attributed endpoints, and its note says so. The civilian toll is harder to fix, because it shades into epidemiology: HISTORY's tally records more than 6.8 million civilian deaths, while Britannica attributes roughly thirteen million civilian deaths to the war when the 1918 influenza pandemic is included. The chart's civilian endpoints are different definitions, not one interval — and they must not be read as a confidence band.",
          zh: "第一次世界大戰的軍人死亡，Britannica 概述估計約850萬——士兵死於傷病；HISTORY 專文統計則略高於970萬。下圖橫跨這兩個具名端點，並在附註中說明。平民死亡較難定奪，因為它與流行病學交疊：HISTORY 統計平民死亡逾680萬；Britannica 在計入1918年流感大流行時，則估計戰爭相關平民死亡約1,300萬。下圖平民兩端是不同定義，而非同一區間——不應解讀為信賴區間。",
        },
        {
          en: "The Second World War multiplied every figure, and disagreement multiplied with it. HISTORY's overview gives approximately 21–25 million military deaths and 50–55 million civilian deaths — around 60 to 80 million total dead — while broader compilations that include famine, disease and forced labour reach toward 85 million. The National WWII Museum's research starter lists about 15 million battle deaths and 25 million battle wounded in narrower categories, but its own page contains internally inconsistent totals, so it is cited here only for those narrower categories, never to assemble a global total. The chart below follows HISTORY's categories — military deaths around 21–25 million, civilian deaths around 50–55 million — with each series' definition stated in its note.",
          zh: "第二次世界大戰使所有數字倍增，分歧也隨之倍增。HISTORY 概述給出軍人死亡約2,100萬至2,500萬、平民死亡約5,000萬至5,500萬——合計約6,000萬至8,000萬；若將饑荒、疫病與強制勞動計入，較寬的彙編可達8,500萬。國家二戰博物館的研究入門表以較窄類別列陣亡約1,500萬、戰鬥負傷約2,500萬，但該頁自身存在內部不一致的數字，故僅就這些較窄類別引用，絕不用以拼組全球總數。下圖採用 HISTORY 的分類——軍人死亡約2,100萬至2,500萬、平民死亡約5,000萬至5,500萬——各數列的定義均見於附註。",
        },
        {
          en: "Beyond the dead stand the wounded. The museum's research starter lists some 25 million battle wounded in the Second World War alone; the First World War left millions more, many permanently disabled, whose rehabilitation stretched pension systems and reshaped family life for a generation. The dead are counted more easily than the maimed; both belong in any honest accounting.",
          zh: "在死者之外，還站著傷者。僅二戰，博物館的研究入門即列出戰鬥負傷約2,500萬；一戰另留下數百萬傷者，其中許多人終身傷殘，其復健拖長了撫恤體系，也重塑了一整個世代的家庭生活。死者比傷殘者更容易統計；但誠實的清點必須兩者兼有。",
        },
      ],
      citationIds: ["b2-britannica-wwi", "b2-historycom-wwii", "b2-nww2m-deaths"],
    },
    {
      id: "the-holocausts-human-accounting",
      heading: { en: "The Holocaust's human accounting", zh: "大屠殺：從數字到名字" },
      paragraphs: [
        {
          en: "The Holocaust has its own accounting, kept by institutions built for that purpose. The United States Holocaust Memorial Museum defines it as the “systematic, state-sponsored persecution and murder of six million Jews by the Nazi regime and its allies and collaborators,” and Yad Vashem in Jerusalem works from the same figure. The chart below presents approximately six million as a point estimate — the standard institutional approximation; there is no evidentiary interval to draw, and none is needed.",
          zh: "大屠殺有自己的清點方式，由專為此而立的機構承擔。美國大屠殺紀念博物館將其定義為「納粹政權及其盟友與協作者對六百萬猶太人有系統、由國家支持的迫害與謀殺」；耶路撒冷的亞德瓦舍姆亦採用同一概數。下圖以單點呈現約六百萬——機構採用的標準概數；沒有需要描繪的證據區間，也無需增設。",

        },
        {
          en: "Jews were the centre of the Nazi genocide, but not its only victims. About 3.3 million Soviet prisoners of war died in German custody, most of starvation, exposure and shooting — per the USHMM, a mortality no other captured population faced. For the Roma and Sinti (the Porajmos), documentation was deliberately destroyed: the USHMM's current estimate runs from at least 250,000 to possibly as many as 500,000 dead. Around a quarter of a million people with disabilities were murdered in the “euthanasia” programs and their successors, and about 1.8 million non-Jewish Polish civilians were killed under occupation — each figure is attributed, and the groups are not additive.",
          zh: "猶太人是納粹種族滅絕的核心對象，但不是唯一的受難者。約330萬蘇聯戰俘死於德方看守之下，多因饑餓、寒凍與槍殺——依美國大屠殺紀念博物館，這是其他被俘群體未曾經歷的死亡率。對羅姆人與辛提人的滅絕（Porajmos）因文獻遭蓄意銷毀，美國大屠殺紀念博物館目前的估計為至少25萬人、可能多達50萬人。約25萬名身心障礙者死於「安樂死」計畫及其後續；另有約180萬非猶太裔波蘭平民死於占領之下——每個數字皆有出處，且各群體數字不可加總。",
        },
        {
          en: "Numbers at this scale numb the mind; institutions have answered with names. Yad Vashem's Shoah Victims' Names Recovery Project gathers a Page of Testimony for each murdered Jew — name, dates, places, a photograph where one survives — submitted by relatives and acquaintances. The Central Database the project feeds has recovered the identities of some five million individuals, and has even reunited families divided by the war. To read one Page of Testimony is to understand what the ranges above actually contain.",
          zh: "這個量級的數字會使心靈麻痺；機構的回應是名字。亞德瓦舍姆的「大屠殺受難者姓名復原計畫」為每一位被謀殺的猶太人收集一份「證詞頁」——姓名、日期、地點，以及倖存時的照片——由親友提交。該計畫建立的中央資料庫已找回約五百萬人的身分，甚至曾讓因戰爭而離散的家庭重逢。讀一頁證詞，就能明白上述區間裡真正裝著的是什麼。",
        },
      ],
      callout: {
        kind: "fact",
        text: {
          en: "Yad Vashem's Central Database of Shoah Victims' Names now documents the names and biographical details of some five million individual Jews murdered in the Holocaust — most of them recovered through Pages of Testimony submitted by relatives and acquaintances, on forms printed in twelve languages. The six million were not a number; they were people with names.",
          zh: "亞德瓦舍姆的「大屠殺受難者姓名中央資料庫」目前已記錄約五百萬名遭謀殺猶太人的姓名與生平資料——其中多數透過親友提交的「證詞頁」找回，表格以十二種語言印行。六百萬不是一個數字，而是一個個有名字的人。",
        },
        citationIds: ["b2-yadvashem-names"],
      },
      citationIds: ["b2-ushmm-learn", "b2-yadvashem-holocaust", "b2-yadvashem-names"],
    },
    {
      id: "displacement-and-the-loss-of-home",
      heading: { en: "Displacement and the loss of home", zh: "流離失所與失去家園" },
      paragraphs: [
        {
          en: "The Second World War uprooted people on a scale no earlier war approached. In the National WWII Museum's summary, some 55 million people in Europe alone were displaced or dislocated: soldiers far from home, freed forced labourers, camp survivors, bombed-out city dwellers, entire populations moved by decree. When the fighting stopped, roughly 11 million displaced persons remained in Europe, about eight million of them inside Germany.",
          zh: "第二次世界大戰造成的人口流離，規模前所未見。依國家二戰博物館的概述，僅在歐洲，被遷移或流離者即約5,500萬人：離鄉的士兵、獲釋的強制勞工、集中營倖存者、家園被炸毀的城市居民，以及奉令整體遷徙的人群。戰事結束時，歐洲約有1,100萬名流離失所者，其中約800萬人在德國境內。",
        },
        {
          en: "Most displaced persons wanted one thing: to go home. Through the summer of 1945 they left the camps at a rate of tens of thousands a day. But “home” had often vanished — borders had moved, governments had changed, families had scattered — and repatriation was not always voluntary: the forced returns carried out for the Soviet authorities remain among the war's unsettling epilogues. War separated children from parents on a scale no relief agency had faced, and tracing lost families became a formal postwar occupation.",
          zh: "多數流離失所者只想要一件事：回家。1945年整個夏天，他們以每天數萬人的速度離開營區。但「家」往往已不復存在——國界移動了，政權更迭了，家庭離散了——而遣返並不總是出於自願：為蘇聯當局執行的強制遣返，至今仍是這場戰爭令人不安的尾聲之一。戰爭使孩子與父母分離的規模，超過任何救援組織曾經面對；尋找失散家庭成為戰後的一項正式工作。",
        },
        {
          en: "Some 1.2 million Eastern Europeans refused repatriation outright — “the last million” — waiting in camps for countries willing to receive them and helping push international law toward the 1951 Refugee Convention's insight that fear of persecution, not just displaced citizenship, grounds protection. After the fighting ended, forced movement continued: border changes and expulsions moved millions more across central and eastern Europe into the late 1940s. We note those expulsions here as part of the war's human cost, without ranking anyone's suffering.",
          zh: "約120萬東歐人斷然拒絕被遣返——「最後的百萬人」——在營區等待願意接收他們的國家，並推動國際法走向1951年《難民地位公約》的洞見：對迫害的恐懼本身、而不僅是失去公民身分，即構成保護的基礎。戰事結束後，強制遷徙仍在繼續：邊界變更與驅逐在1940年代後期又使數百萬人在中歐與東歐之間移動。我們在此將這些驅逐列為戰爭人類代價的一部分，而不為任何人的苦難排定次序。",
        },
      ],
      callout: {
        kind: "fact",
        text: {
          en: "World War II uprooted some 55 million people in Europe alone. When the fighting ended, roughly 11 million displaced persons remained — about eight million of them inside Germany — and some 1.2 million Eastern Europeans refused repatriation, living stateless in camps into the early 1950s as “the last million.”",
          zh: "僅在歐洲，第二次世界大戰就使約5,500萬人流離失所。戰事結束時，約有1,100萬名流離失所者——其中約800萬人在德國境內——另有約120萬東歐人拒絕被遣返，在營區中無國籍地生活到1950年代初，被稱為「最後的百萬人」。",
        },
        citationIds: ["b2-nww2m-last-million"],
      },
      citationIds: ["b2-nww2m-last-million"],
    },
    {
      id: "trauma-and-the-long-aftermath",
      heading: { en: "Trauma and the long aftermath", zh: "創傷與漫長的餘波" },
      paragraphs: [
        {
          en: "The First World War forced medicine and armies to confront what it called “shell shock”: tremor, paralysis, nightmares and muteness in soldiers with no visible wound. Its causes were contested at the time — some doctors sought them in concussion, others in fear — and treatments ranged from quiet rest and talking cures to harsh disciplinary methods that later generations came to see as harmful. Whatever the explanation, the scale was undeniable, and the condition kept returning under new names in every later war.",
          zh: "第一次世界大戰迫使醫學界與各國軍隊正視他們所稱的「彈震症」（shell shock）：沒有可見傷口的士兵出現顫抖、癱瘓、噩夢與失語。其成因在當時即有爭論——有醫師歸因於腦震盪，有醫師歸因於恐懼——療法從靜養與談話治療，到後世視為有害的嚴厲懲戒手段都有。無論解釋為何，其規模無可否認，而這種病症在之後的每場戰爭都以新的名字反覆出現。",
        },
        {
          en: "Wilfred Owen — wounded, shell-shocked, treated at Craiglockhart War Hospital in 1917, killed on 4 November 1918, one week before the Armistice — left the period's most exact testimony of what a maimed survivor faced on returning home. His poem “Disabled” follows a young man who enlisted underage, imagining the cheers of football crowds, and comes home to a very different reception.",
          zh: "威爾弗雷德・歐文——負傷、罹患彈震症、1917年在克雷格洛克哈特戰爭醫院接受治療、1918年11月4日即停戰前一周陣亡——留下了那個時代對傷殘倖存者返家處境最精確的證詞。他的詩〈傷殘〉描寫一個未成年從軍、想像著足球場歡呼的年輕人，回到家鄉後迎來的是截然不同的對待。",
        },
        {
          en: "After 1945 the same wounds continued in new uniforms. Veterans carried psychological injury into civilian life; families lived beside it; and recognition came slowly — some conditions historically described as shell shock overlap with what is now diagnosed as post-traumatic stress disorder, a category formally established only in 1980, but the wartime term covered varied conditions and cannot be retrospectively equated with the modern diagnosis. Post-war memory itself was uneven: some nations built memorials within a decade, others were too divided to memorialize anything, and some groups — occupied civilians, colonized troops, survivors of persecution — waited decades for acknowledgment. There is no single lesson in this history of memory, only the reminder that recognition itself had to be fought for, and is still unfinished.",
          zh: "1945年之後，同樣的傷口以新的形式延續。退伍軍人帶著心理創傷回到平民生活；家人與之共同生活；而承認來得很慢——歷史上稱為「彈震症」的部分症狀，與今日診斷的創傷後壓力症候群有所重疊，該診斷類別遲至1980年才正式確立；但這個戰時用語涵蓋多種不同狀況，不能將所有個案回溯等同於現代診斷。戰後記憶本身也不均質：有的國家十年內便立起紀念碑，有的因分歧太深而無從紀念；有些群體——被占領的平民、殖民地的部隊、迫害的倖存者——等了數十年才獲得承認。這段記憶史沒有單一的教訓，只有一個提醒：承認本身就是需要爭取的，而且至今仍未完成。",
        },
      ],
      callout: {
        kind: "testimony",
        text: {
          en: "He sat in a wheeled chair, waiting for dark, / And shivered in his ghastly suit of grey, / Legless, sewn short at elbow.",
          zh: "他坐在輪椅裡，等待天黑，在那身慘灰的病服中發抖——失去了腿，袖管在肘際縫短。（中譯）",
        },
        attribution: {
          en: "Wilfred Owen (1893–1918), “Disabled”, written 1917; quoted verbatim from the text published by the Poetry Foundation.",
          zh: "威爾弗雷德・歐文（1893–1918），〈傷殘〉（Disabled），1917年所作；引文依 Poetry Foundation 刊載的原文逐字核對，中文為中譯。",
        },
        citationIds: ["b2-poetryfoundation-owen"],
      },
      citationIds: ["b2-poetryfoundation-owen"],
    },
    {
      id: "war-and-hunger",
      heading: { en: "War and hunger", zh: "戰爭與饑餓" },
      paragraphs: [
        {
          en: "War destroys the systems that feed people: fields go unplanted, trade and transport are severed, markets collapse, and humanitarian access is denied or manipulated. In both world wars hunger was not an accident of war but one of its ordinary working parts — sometimes a weapon, sometimes a by-product, and usually a compound of military policy, administrative choice, weather and blockade.",
          zh: "戰爭摧毀餵養人們的體系：田地無人耕種，貿易與運輸中斷，市場崩潰，人道救援通道遭拒絕或遭操縱。在兩次世界大戰中，饑餓都不是戰爭的意外，而是它日常運作的一部分——有時是武器，有時是副產品，而通常是軍事政策、行政抉擇、天候與封鎖的複合結果。",
        },
        {
          en: "The cases are documented, and each is distinct. The First World War's Allied blockade of Germany is the clearest example of contested accounting: excess civilian deaths from wartime shortage are estimated at roughly 424,000 to 763,000 — a span summarized in Cox's 2024 survey of the blockade — and scholarship still divides the weight between the blockade itself, harvest failure, distribution and epidemic disease; Avner Offer's The First World War: An Agrarian Interpretation is the standard study of the agricultural dimension. The siege of Leningrad starved a city for 872 days; HISTORY's account estimates about 800,000 civilian deaths over the full siege, about 650,000 of them in 1942 alone. Bengal's 1943 famine, under British wartime administration, killed about three million people by Britannica's figure; scholarly estimates differ, some lower. In occupied Greece, the National WWII Museum records nearly 100,000 starvation deaths across the 1941–44 occupation; estimates including disease run higher. The Dutch “Hunger Winter” of 1944–45 — a German embargo on food transport imposed after a railway strike — killed around 20,000 people in the western Netherlands, by the Anne Frank House's record.",
          zh: "以下案例均有文獻，且各有不同。一戰協約國對德封鎖是最清楚的「具爭議帳目」：戰時短缺造成的超額平民死亡估計約42.4萬至76.3萬——此區間見於 Cox 2024 年對封鎖的綜述——而封鎖本身、歉收、分配與疫病各占多少權重，學界仍有分歧；Avner Offer 的《第一次世界大戰：農業視角》是此一農業層面的標準研究。列寧格勒圍城戰使一座城市挨餓872天；依 HISTORY 的記述，整個圍城期間估計約80萬名平民死亡，其中僅1942年即約65萬人。1943年孟加拉饑荒發生於英國戰時治理之下，依 Britannica 的數字約300萬人死亡；學術估計不一，部分較低。在被占領的希臘，國家二戰博物館記載1941–44年整個占領期近10萬人餓死；計入疾病則估計更高。荷蘭1944–45年的「饑餓冬天」——鐵路罷工後德方對糧食運輸實施的禁運——依安妮之家的記錄，在荷蘭西部造成約2萬人死亡。",
        },
        {
          en: "A caution belongs here, because this subject is often oversimplified. Resource insecurity may contribute to instability under specific conditions — but it does not automatically cause war. Wars are not all fought over food. Not all famines share the same cause, and not every famine of this period was intentional policy. Hunger in war is a pattern worth understanding; it is not a single-key explanation for anything.",
          zh: "此處需要一段提醒，因為這個主題經常被過度簡化：資源不安全在特定條件下可能助長動盪——但它不會自動導致戰爭。戰爭並非都為糧食而打；各場饑荒的成因也不相同，而這個時期的每場饑荒也並非都出自蓄意政策。戰爭中的饑餓是一個值得理解的模式，卻不是任何事情的單一鑰匙。",
        },
        {
          en: "For armed conflict and food insecurity today — a distinct subject, deserving its own careful treatment — we recommend the independent project Global Food Crisis (global-food-crisis.com) as further reading. It is a separate project, not part of this one; we link it because the question this chapter raises in history, that project examines in the present.",
          zh: "關於今日世界的武裝衝突與糧食不安全——那是另一個需要審慎處理的主題——我們推薦獨立計畫「全球糧食危機」（Global Food Crisis，global-food-crisis.com）作為延伸閱讀。它是與本計畫相互獨立的另一個計畫；我們連結它，是因為本章在歷史中提出的問題，那個計畫正在當下檢視。",
        },
      ],
      citationIds: [
        "b2-cambridge-offer",
        "b2-britannica-leningrad",
        "b2-britannica-bengal",
        "b2-nww2m-greece",
        "b2-annefrank-dutch",
        "b2-gfc",
      ],
    },
  ],
  citations: [
    b2BritannicaWwi,
    b2HistorycomWwiDeaths,
    b2HistorycomLeningrad,
    b2CoxBlockade,
    b2HistorycomWwii,
    b2Nww2mDeaths,
    b2UshmmLearn,
    b2YadvashemHolocaust,
    b2YadvashemNames,
    b2Nww2mLastMillion,
    b2PoetryfoundationOwen,
    b2BritannicaLeningrad,
    b2BritannicaBengal,
    b2CambridgeOffer,
    b2Nww2mGreece,
    b2AnnefrankDutch,
    b2Gfc,
  ],
};
