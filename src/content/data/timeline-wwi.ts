import type { TimelineData } from "@/content/types";

/**
 * WWI interactive timeline — 16 events, 1914–1918, bilingual (EN / 繁體中文).
 * Agent task 4-a. Every event cites the file's own citations registry.
 */
export const timelineWwi: TimelineData = {
  id: "wwi",
  title: { en: "Interactive Timeline: 1914–1918", zh: "互動時間軸：1914–1918" },
  subtitle: {
    en: "Select an event to read its context and sources.",
    zh: "點選任一事件，閱讀其背景與出處。",
  },
  events: [
    {
      id: "sarajevo",
      date: "1914-06-28",
      dateLabel: { en: "28 June 1914", zh: "1914年6月28日" },
      title: { en: "Assassination at Sarajevo", zh: "塞拉耶佛刺殺事件" },
      place: { en: "Sarajevo, Bosnia", zh: "波士尼亞塞拉耶佛" },
      summary: {
        en: "Archduke Franz Ferdinand, heir to Austria-Hungary, and his wife Sophie are assassinated by Gavrilo Princip.",
        zh: "奧匈帝國皇儲斐迪南大公與夫人蘇菲，遭加夫里洛·普林西普刺殺。",
      },
      detail: {
        en: "The murders removed the heir to the Austro-Hungarian throne and his morganatic wife, Sophie. The killers were young Bosnian Serb nationalists whose networks had received arms from officers inside Serbia, and Vienna held the Serbian government at least indirectly responsible. Austria-Hungary's leadership resolved to use the moment to settle accounts with Serbia. What turned a political murder into a general European war, however, was not the shot in Sarajevo but the decisions taken in five capitals over the following five weeks.",
        zh: "這場刺殺奪走了奧匈帝國皇位繼承人，以及其貴庶通婚的妻子蘇菲。行刺者是波士尼亞的塞爾維亞族年輕民族主義者，其網絡曾獲塞爾維亞境內軍官提供武器，維也納因此認定塞爾維亞政府至少負有間接責任。奧匈領導層決意利用此刻，與塞爾維亞清算舊帳。然而，將一樁政治謀殺化為全歐戰爭的，並不是塞拉耶佛的槍聲，而是其後五週內、五個首都所做出的決策。",
      },
      theater: "europe",
      citationIds: ["a-britannica-wwi", "a-iwm-wwi"],
    },
    {
      id: "july-ultimatum",
      date: "1914-07-23",
      dateLabel: { en: "23 July 1914", zh: "1914年7月23日" },
      title: { en: "Austria-Hungary's ultimatum to Serbia", zh: "奧匈對塞爾維亞最後通牒" },
      place: { en: "Vienna / Belgrade", zh: "維也納／貝爾格勒" },
      summary: {
        en: "Austria-Hungary issues a ten-point ultimatum with a 48-hour deadline; Serbia accepts most, but not all, terms.",
        zh: "奧匈發出十點最後通牒，限期48小時；塞爾維亞接受多數、但非全部條款。",
      },
      detail: {
        en: "The ultimatum demanded, among ten points, the suppression of “subversive” organizations and the participation of Austro-Hungarian officials in the investigation inside Serbia — terms framed to be refused. Serbia mobilized, accepted nearly all points, and referred the remainder to international arbitration. That was not enough for Vienna, which had already received Germany's “blank cheque” of unconditional support on 5–6 July. On 28 July Austria-Hungary declared war on Serbia, and Belgrade was shelled from gunboats on the Danube the next morning. Europe's leaders then spent a week trying — and failing — to localise the conflict.",
        zh: "這份通牒在十項條款中，要求取締「顛覆性」組織，並允許奧匈官員參與塞爾維亞境內的調查——措辭本是為了使人無法全盤接受。塞爾維亞下達動員令，接受了幾乎所有條款，並將剩餘分歧交付國際仲裁。這對維也納而言仍不夠——它早在7月5日至6日，便已取得德國無條件支持的「空白支票」。7月28日，奧匈對塞爾維亞宣戰，翌日清晨，多瑙河上的砲艇開始轟擊貝爾格勒。其後一週，歐洲各國領袖試圖將衝突局部化——並且失敗了。",
      },
      theater: "europe",
      citationIds: ["a-britannica-wwi", "a-iwm-wwi"],
    },
    {
      id: "august-declarations",
      date: "1914-08-01",
      dateLabel: { en: "1–4 August 1914", zh: "1914年8月1日至4日" },
      title: { en: "The war of declarations", zh: "宣戰連鎖" },
      place: { en: "Berlin, Paris, London, Brussels", zh: "柏林、巴黎、倫敦、布魯塞爾" },
      summary: {
        en: "Germany declares war on Russia (1 Aug) and France (3 Aug), invades Belgium (4 Aug); Britain declares war on Germany.",
        zh: "德國對俄（8月1日）、對法（8月3日）宣戰並入侵比利時（8月4日）；英國對德宣戰。",
      },
      detail: {
        en: "Russia ordered general mobilization on 30 July; Germany declared war on Russia on 1 August and on France on 3 August. Under the Schlieffen Plan as revised in 1914, the German Army's opening move ran through neutral Belgium, whose neutrality the powers had guaranteed by the 1839 Treaty of London. German troops crossed the frontier on the morning of 4 August, and Britain declared war on Germany that evening. Reports of executions and burning towns — Louvain above all — hardened opinion against Germany for the rest of the war. Within a week, a Balkan quarrel had become a general European war with global empires attached.",
        zh: "俄國於7月30日下令全面動員；德國於8月1日對俄、8月3日對法宣戰。按照1914年修訂的施里芬計畫，德軍的開局必須穿越中立的比利時——其中立地位由列強依1839年《倫敦條約》共同作保。8月4日清晨，德軍越過邊界，英國於當晚對德宣戰。處決平民與焚毀城鎮的消息——尤其是魯汶——使輿論在戰爭其餘的歲月裡對德國更趨強硬。一週之內，巴爾幹的爭端已成全歐戰爭，並拖著全球的帝國同行。",
      },
      theater: "europe",
      citationIds: ["a-britannica-wwi", "a-iwm-wwi"],
    },
    {
      id: "marne",
      date: "1914-09-06",
      dateLabel: { en: "6–12 September 1914", zh: "1914年9月6日至12日" },
      title: { en: "First Battle of the Marne", zh: "第一次馬恩河戰役" },
      place: { en: "Near Paris, France", zh: "法國巴黎近郊" },
      summary: {
        en: "French and British forces halt the German advance; the war of movement begins to freeze into trench lines.",
        zh: "英法聯軍擋下德軍攻勢；機動戰開始凝結為壕溝對峙。",
      },
      detail: {
        en: "German armies had swept through Belgium and northern France and come within roughly fifty kilometres of Paris. Between 6 and 12 September, French armies under General Joffre and the small British Expeditionary Force counter-attacked into the gap between the German 1st and 2nd Armies — reinforced, famously, by several hundred requisitioned Paris taxis shuttling reserves to the front. The Germans fell back to the Aisne and dug in. The “Miracle of the Marne” ended Germany's hope of a quick decision in the west, and the front began to freeze into trenches; the ensuing “race to the sea” failed to find an open flank. A war planned in weeks had become a war of years.",
        zh: "德軍席捲比利時與法國北部，兵鋒一度距巴黎僅約五十公里。9月6日至12日間，霞飛將軍麾下的法國集團軍與規模不大的英國遠征軍，向德國第一與第二軍團之間的空隙反擊——增援部隊中，包括數百輛被徵用、向前線接運後備兵力的巴黎計程車，此役因它們而聞名。德軍退往埃納河，就地掘壕。「馬恩河奇蹟」終結了德國在西線速決的希望，戰線開始凝結為壕溝；其後的「奔向大海」也未能找到開放的側翼。一場以週為單位規劃的戰爭，從此變成以年計的戰爭。",
      },
      theater: "europe",
      citationIds: ["a-britannica-wwi", "a-iwm-wwi"],
    },
    {
      id: "tsingtao",
      date: "1914-11-07",
      dateLabel: { en: "7 November 1914", zh: "1914年11月7日" },
      title: { en: "Fall of Tsingtao", zh: "青島陷落" },
      place: { en: "Qingdao, China", zh: "中國青島" },
      summary: {
        en: "Japanese and British forces capture the German leased territory of Qingdao — the war reaches East Asia.",
        zh: "日英聯軍攻陷德國租借地青島——戰火延燒至東亞。",
      },
      detail: {
        en: "Japan, bound to Britain by the alliance of 1902, issued an ultimatum to Germany in mid-August 1914 and declared war on 23 August. Japanese forces, with a small British contingent, blockaded and besieged Qingdao, the naval base of Germany's Kiautschou leasehold on the coast of China. After a two-month siege, with naval bombardment and history's first carrier-based air raids, flown from a Japanese seaplane carrier, the garrison surrendered on 7 November 1914. The fall of a European power's Asian outpost to an Asian ally of Britain proved the war's reach; Japan also took Germany's Pacific islands north of the equator. On the map below, the site is modern Qingdao in China: in 1914 it was leased German territory on Chinese soil, not a sovereign German province.",
        zh: "與英國有1902年同盟之誼的日本，於1914年8月中旬對德發出最後通牒，並於8月23日宣戰。日軍連同一支小規模英國部隊，封鎖並圍攻青島——德國在中國海岸膠州灣租借地的海軍基地。經兩個月圍城，在海軍砲擊與史上首次由水上飛機母艦實施的艦載空襲之下，守軍於11月7日投降。一個歐洲強權的亞洲根據地，落入英國的亞洲盟友之手——這場陷落印證了戰爭的觸及範圍；日本同時奪取德國在赤道以北的太平洋島嶼。在下方的地圖上，此地是今日中國的青島：1914年時，它是中國土地上的德國租借地，並非德國的主權領土。",
      },
      theater: "asia-pacific",
      citationIds: ["a-britannica-wwi", "a-iwm-wwi"],
    },
    {
      id: "africa-campaigns",
      date: "1914-08-26",
      dateLabel: { en: "26 August 1914", zh: "1914年8月26日" },
      title: { en: "The war reaches Africa", zh: "戰火延燒至非洲" },
      place: { en: "Togoland and the German colonies", zh: "多哥蘭與德國殖民地" },
      summary: {
        en: "German Togoland becomes the first German colony to fall; four years of fighting follow across Africa.",
        zh: "德屬多哥蘭成為第一個陷落的德國殖民地；隨後四年，戰事蔓延非洲各地。",
      },
      detail: {
        en: "On 26 August 1914, German Togoland surrendered to British and French forces — the first German colony captured in the war. Campaigns followed against Germany's other African colonies: Cameroon, German South-West Africa, and German East Africa, where the fighting under General Lettow-Vorbeck outlasted the European front, ending only after the Armistice. These campaigns were fought largely by African soldiers and porters; in East Africa alone, hundreds of thousands of men were conscripted as carriers, and documented estimates of carrier deaths run from the tens of thousands upward. The war's costs fell on people far from the European trenches — a fact long underweighted in popular memory.",
        zh: "1914年8月26日，德屬多哥蘭向英法部隊投降——這是戰爭中第一個被占領的德國殖民地。隨後的戰役指向德國其他非洲殖民地：喀麥隆、德屬西南非與德屬東非；勒托-福爾貝克將軍在東非的作戰甚至比歐洲戰場更持久，直到停戰之後才結束。這些戰役主要由非洲士兵與挑夫承擔；僅在東非，就有數十萬人被徵募為運輸挑夫，文獻估計挑夫死亡人數即達數萬乃至更多。戰爭的代價，同樣落在遠離歐洲壕溝的人們身上——這一事實在流行記憶中長期被低估。",
      },
      theater: "africa",
      citationIds: ["a-britannica-wwi", "a-iwm-wwi"],
    },
    {
      id: "gas-ypres",
      date: "1915-04-22",
      dateLabel: { en: "22 April 1915", zh: "1915年4月22日" },
      title: { en: "First large-scale gas attack", zh: "首次大規模毒氣攻擊" },
      place: { en: "Ypres, Belgium", zh: "比利時伊珀爾" },
      summary: {
        en: "Germany releases chlorine gas at Second Ypres — a new level of industrialized harm against soldiers.",
        zh: "德軍於第二次伊珀爾戰役釋放氯氣——工業化殺傷對士兵的新層次。",
      },
      detail: {
        en: "In the late afternoon of 22 April 1915, German troops opened thousands of chlorine cylinders along a sector of the Ypres salient, releasing a green cloud that drifted into the lines of French colonial troops. Hundreds were killed outright and thousands incapacitated, opening a gap the Germans lacked reserves to exploit. Both sides rapidly adopted gas, and respirators followed; by 1917 the fronts knew phosgene, chloropicrin, and mustard gas. Gas rarely decided battles — it depended on wind, terrified more often than it killed, and killed unevenly. Its lasting significance was different: at Ypres in 1915 industrial chemistry entered war directly, and the 1925 Geneva Protocol later banned chemical weapons — a rule written in the gas's wake.",
        zh: "1915年4月22日午後，德軍在伊珀爾突出部的一段戰線打開數千個氯氣鋼瓶，綠色雲團飄向法國殖民地部隊的陣地。數百人當場死亡、數以千計的人失去戰力，裂開的缺口因德軍缺乏後備兵力而未能擴大。交戰雙方隨即採用毒氣，防毒面具隨之問世；至1917年，前線已認識光氣、氯化苦與芥子氣。毒氣很少決定戰役——它依賴風向，威嚇多於殺傷，且殺傷並不均勻。它更長遠的意義另有所在：1915年的伊珀爾，工業化學直接進入戰爭，而1925年《日內瓦議定書》其後全面禁止化學武器——規則在毒氣之後才追上來。",
      },
      theater: "europe",
      citationIds: ["a-iwm-wwi", "a-britannica-wwi"],
    },
    {
      id: "armenian-genocide",
      date: "1915-04-24",
      dateLabel: { en: "24 April 1915", zh: "1915年4月24日" },
      title: { en: "The Armenian genocide begins", zh: "亞美尼亞種族滅絕展開" },
      place: { en: "Constantinople and Anatolia, Ottoman Empire", zh: "鄂圖曼帝國君士坦丁堡與安納托利亞" },
      summary: {
        en: "Mass arrests of Armenian leaders open two years of deportations and massacres of the Ottoman Empire's Armenian population.",
        zh: "大規模逮捕亞美尼亞領袖，開啟兩年間對鄂圖曼亞美尼亞人的驅逐與屠殺。",
      },
      detail: {
        en: "Beginning on 24 April 1915 with the arrest of Armenian intellectuals and community leaders in Constantinople, Ottoman authorities carried out mass deportations and massacres of the empire's Armenian population through 1915–16. Deportation columns were driven toward the Syrian desert; those killed — by massacre, forced march, starvation, and disease — are commonly estimated at between several hundred thousand and about 1.5 million people. Most scholars of genocide and many states recognize these events as genocide; Türkiye accepts grave wartime losses among Armenians while disputing that characterization, and recognition remains politically contested to this day. The documented mass atrocity stands among the war's gravest civilian catastrophes and reshaped the Armenian diaspora permanently. This project records it as documented history, and records the recognition dispute as fact — without minimizing either.",
        zh: "自1915年4月24日鄂圖曼當局在君士坦丁堡逮捕亞美尼亞知識分子與社群領袖開始，官方於1915至1916年間，對帝國境內的亞美尼亞人執行大規模驅逐與屠殺。驅逐隊伍被驅往敘利亞沙漠；死於屠殺、強制行軍、饑餓與疾病者，常見估計介於數十萬至約150萬人之間。多數種族滅絕研究者與許多國家承認此事為種族滅絕；土耳其承認亞美尼亞人在戰時損失慘重，但不接受此一定性，承認問題至今仍在政治上爭議未決。這場有案可查的大規模暴行，是戰爭中最沉重的平民災難之一，也永久改變了亞美尼亞離散社群。本計畫將其記錄為有據可查的歷史，並如實記錄承認爭議——兩者皆不淡化。",
      },
      theater: "middle-east",
      citationIds: ["a-britannica-armenian-genocide", "a-britannica-wwi"],
    },
    {
      id: "gallipoli",
      date: "1915-04-25",
      dateLabel: { en: "25 April 1915", zh: "1915年4月25日" },
      title: { en: "Gallipoli landings", zh: "加里波利登陸" },
      place: { en: "Dardanelles, Ottoman Empire", zh: "鄂圖曼帝國達達尼爾海峽" },
      summary: {
        en: "ANZAC and Allied troops land on the Gallipoli peninsula; the campaign becomes a defining national memory in Australia and New Zealand.",
        zh: "澳紐軍團與協約國部隊登陸加里波利半島；此役成為澳、紐兩國深具意義的集體記憶。",
      },
      detail: {
        en: "Allied troops went ashore on 25 April 1915 — the Australian and New Zealand Army Corps at what became Anzac Cove, British and French divisions at Cape Helles. The aim was to force the Dardanelles, knock the Ottoman Empire out of the war, and open a supply route to Russia; instead the force was pinned to narrow beaches for eight months, defended against by Ottoman troops commanded in the critical sectors by Mustafa Kemal, later Atatürk. Evacuation was completed in January 1916 with the peninsula never taken, and casualties were heavy on every side — some 8,000 Australian and more than 2,700 New Zealand dead, with Ottoman dead commonly numbered higher still. In Australia and New Zealand, 25 April became Anzac Day, the centre of the national calendar of remembrance; in Türkiye, the defence of the straits is commemorated on 18 March.",
        zh: "1915年4月25日，協約國部隊踏上加里波利半島——澳紐軍團登陸於日後所稱的澳紐軍團灣，英法各師則登陸赫勒斯角。此役目標是打通達達尼爾海峽、將鄂圖曼帝國逐出戰爭、開啟通往俄國的補給線；結果，這支部隊被壓制在狹窄的海灘上達八個月，關鍵防區的鄂圖曼守軍由日後的凱末爾·阿塔圖克指揮。至1916年1月完成撤軍，半島始終未克；各方傷亡均重——約8,000名澳洲與逾2,700名紐西蘭陣亡者，而鄂圖曼陣亡人數一般認為更高。在澳洲與紐西蘭，4月25日成為「澳紐軍團日」，位居兩國紀念曆法的中心；在土耳其，海峽防衛則於3月18日受到紀念。",
      },
      theater: "middle-east",
      citationIds: ["a-awm-wwi", "a-britannica-wwi"],
    },
    {
      id: "lusitania",
      date: "1915-05-07",
      dateLabel: { en: "7 May 1915", zh: "1915年5月7日" },
      title: { en: "Sinking of the Lusitania", zh: "路西塔尼亞號沉沒" },
      place: { en: "Off the coast of Ireland, Atlantic Ocean", zh: "大西洋，愛爾蘭外海" },
      summary: {
        en: "A German submarine torpedoes the British liner without warning; nearly 1,200 die, including 128 Americans.",
        zh: "德國潛艇無預警魚雷擊沉英國郵輪；近1,200人罹難，包括128名美國公民。",
      },
      detail: {
        en: "On the afternoon of 7 May 1915, the British liner RMS Lusitania, carrying nearly 2,000 passengers and crew from New York to Liverpool, was torpedoed without warning by the German submarine U-20 off the southern coast of Ireland. The ship sank within about twenty minutes; nearly 1,200 people died, among them 128 American citizens. Germany argued that the liner carried war materiel and was therefore a legitimate target — she was indeed carrying rifle cartridges — but the killing of civilians on a passenger ship caused international revulsion. The sinking did not bring the United States into the war, but it shifted American opinion sharply, and it set the terms of the submarine controversy that ended in unrestricted submarine warfare and, ultimately, U.S. entry in 1917.",
        zh: "1915年5月7日午後，自紐約駛往利物浦、載有近2,000名乘客與船員的英國郵輪路西塔尼亞號，在愛爾蘭南岸外海遭德國潛艇U-20無預警魚雷擊中。船體約20分鐘內沉沒；近1,200人罹難，其中包括128名美國公民。德國主張該輪載有軍事物資、屬正當打擊目標——船上確實載有步槍子彈——但客輪平民的傷亡，仍引發國際譁然。這場沉沒並未使美國立即參戰，卻使美國輿論急轉，並劃定了潛艇戰爭議的界線——爭議最終走向無限制潛艇戰，也走向1917年的美國參戰。",
      },
      theater: "atlantic",
      citationIds: ["a-worldwar-lusitania", "a-britannica-wwi"],
    },
    {
      id: "verdun",
      date: "1916-02-21",
      dateLabel: { en: "21 February 1916", zh: "1916年2月21日" },
      title: { en: "Battle of Verdun begins", zh: "凡爾登戰役開始" },
      place: { en: "Verdun, France", zh: "法國凡爾登" },
      summary: {
        en: "Germany attacks the fortress complex at Verdun; ten months of fighting follow with hundreds of thousands of casualties.",
        zh: "德軍進攻凡爾登要塞群；隨後十個月的戰鬥造成數十萬傷亡。",
      },
      detail: {
        en: "Germany's attack on the fortified Verdun salient opened the war's longest battle — ten months of fighting for a sector both sides came to treat as a matter of national honour. German planners chose ground France could not abandon, expecting the fighting to exhaust the French army; France answered with rotation through the sector and the resolve summed up in the phrase of the day: “They shall not pass.” The German advance had halted by mid-year, and a slow French recovery ended the battle in December 1916. Casualties on the two sides combined are commonly estimated at roughly 700,000, for lines that moved little. Verdun became the century's standing symbol of attrition — industrial war aimed not at taking ground but at exhausting a nation.",
        zh: "德軍進攻凡爾登築壘突出部，揭開全戰最長的戰役——為一片雙方逐漸視為國族榮譽所繫的戰區，打了十個月。德國規劃者挑選法國無法放棄的土地，預期戰鬥將耗竭法軍；法國以全軍輪調迎戰，並以當年的名句明志：「他們不會通過」。德軍攻勢於年中停滯，法軍緩步收復，戰役至1916年12月結束。依常見估計，雙方傷亡合計約70萬人，換得的卻是幾乎未動的戰線。凡爾登自此成為二十世紀消耗戰的標誌——不以奪地為目的、而以耗竭一國為目的的工業化戰爭。",
      },
      theater: "europe",
      citationIds: ["a-britannica-wwi", "a-iwm-wwi"],
    },
    {
      id: "somme",
      date: "1916-07-01",
      dateLabel: { en: "1 July 1916", zh: "1916年7月1日" },
      title: { en: "First day of the Somme", zh: "索姆河戰役首日" },
      place: { en: "Somme, France", zh: "法國索姆河" },
      summary: {
        en: "The British Army suffers about 57,470 casualties on a single day, some 19,240 of them killed.",
        zh: "英軍單日傷亡約57,470人，其中約19,240人陣亡。",
      },
      detail: {
        en: "The Anglo-French offensive on the Somme opened on 1 July 1916, after a week-long bombardment that failed to destroy the German defences. On that single day the British Army suffered about 57,470 casualties, of whom some 19,240 were killed — the costliest day in its history. The Newfoundland Regiment was all but destroyed at Beaumont-Hamel, and “Pals” battalions raised from single towns were shattered within minutes. The offensive continued into November and brought the tank into battle for the first time in September; the front moved a few kilometres, at enormous cost. The first day of the Somme fixed, for Britain and its dominions, the image of the war: human bodies advancing at walking pace into industrial fire.",
        zh: "英法聯軍於1916年7月1日發動索姆河攻勢，此前一週的砲擊未能摧毀德軍防禦。僅這一天，英軍傷亡約57,470人，其中約19,240人陣亡——英國陸軍史上代價最高的單日。紐芬蘭軍團在博蒙特阿梅爾幾乎全軍覆沒；由單一城鎮招募成軍的整個「夥伴營」，數分鐘內即被擊碎。攻勢延續至11月，並於9月首次將戰車投入戰場；戰線在巨額傷亡下推進數公里。索姆河的第一天，為英國與其自治領定格了這場戰爭的圖像：以步行速度推進的血肉之軀，迎向工業化的火力。",
      },
      theater: "europe",
      citationIds: ["a-nam-somme", "a-iwm-wwi"],
    },
    {
      id: "us-entry",
      date: "1917-04-06",
      dateLabel: { en: "6 April 1917", zh: "1917年4月6日" },
      title: { en: "United States enters the war", zh: "美國參戰" },
      place: { en: "Washington, D.C.", zh: "美國華盛頓" },
      summary: {
        en: "Citing unrestricted submarine warfare and the Zimmermann Telegram, the U.S. declares war on Germany.",
        zh: "以無限制潛艇戰與齊默爾曼電報為由，美國對德宣戰。",
      },
      detail: {
        en: "Germany resumed unrestricted submarine warfare on 1 February 1917, gambling that it could starve Britain out before American power could matter. In March the press published the Zimmermann Telegram — a German proposal of alliance to Mexico, promising recovered territory should the United States enter the war. President Woodrow Wilson, freshly re-elected on a platform of peace, asked Congress on 2 April to declare war “to make the world safe for democracy,” and Congress did so on 6 April. American troops reached France that June; by the Armistice about two million Americans had served in Europe. U.S. entry did not end the war quickly — Russia's exit and a year of hard fighting still lay ahead — but it permanently changed the war's scale.",
        zh: "1917年2月1日，德國恢復無限制潛艇戰，賭的是在美國的分量變成現實之前，先餓垮英國。3月，齊默爾曼電報見報——那是一份德國向墨西哥提出的結盟提議，允諾在美國參戰時助其收復失地。甫以和平政綱連任的威爾遜總統，於4月2日要求國會宣戰，「使世界為民主而安全」；4月6日，國會通過對德宣戰。美軍於6月抵達法國；至停戰時，約200萬美國人已在歐洲服役。美國參戰並未迅速終結戰爭——前方仍有俄國退出與一整年的苦戰——但它永久改變了戰爭的規模。",
      },
      theater: "americas",
      citationIds: ["a-britannica-wwi", "a-iwm-wwi"],
    },
    {
      id: "brest-litovsk",
      date: "1918-03-03",
      dateLabel: { en: "3 March 1918", zh: "1918年3月3日" },
      title: { en: "Treaty of Brest-Litovsk", zh: "《布列斯特—立陶夫斯克條約》" },
      place: { en: "Brest-Litovsk, Russia", zh: "俄國布列斯特—立陶夫斯克" },
      summary: {
        en: "Revolutionary Russia exits the war with a punitive treaty with Germany.",
        zh: "革命後的俄國以苛刻條約退出大戰。",
      },
      detail: {
        en: "The Russian revolutions of 1917 ended the empire's ability and will to fight. The Bolshevik government, seeking peace in order to survive, signed the Treaty of Brest-Litovsk with Germany on 3 March 1918, after a German advance toward Petrograd forced the issue. Russia ceded vast territories — the Baltic lands, Poland, Finland, Ukraine, and parts of the Caucasus — which held roughly a third of the empire's population and much of its industry. The treaty stands among the most punitive of the century, and it lasted only months: after the Armistice it was annulled. Its double lesson was noted at the time — wars can end in imposed settlements, and imposed settlements can simply store the conflict for a stronger day.",
        zh: "1917年的革命，終結了俄羅斯帝國的戰力與戰意。求存求和的布爾什維克政府，在德軍向彼得格勒推進的逼迫下，於1918年3月3日與德國簽署《布列斯特—立陶夫斯克條約》。俄國割讓波羅的海地區、波蘭、芬蘭、烏克蘭與部分高加索——住有帝國約三分之一人口與大部分工業的廣土。此約位列二十世紀最苛刻的條約之一，卻只存活了數月：停戰之後即遭廢棄。它的雙重教訓在當時便已被指出——戰爭可以終結於強加的和議，而強加的和議，也可以只是把衝突儲存到己方更強的一天。",
      },
      theater: "europe",
      citationIds: ["a-britannica-wwi"],
    },
    {
      id: "spring-offensive",
      date: "1918-03-21",
      dateLabel: { en: "21 March 1918", zh: "1918年3月21日" },
      title: { en: "Germany's Spring Offensive", zh: "德軍春季攻勢" },
      place: { en: "Picardy and Flanders, France", zh: "法國皮卡第與法蘭德斯" },
      summary: {
        en: "Germany's last western gamble advances further than any attack since 1914 — and exhausts itself.",
        zh: "德軍在西線的最後一搏推進幅度為1914年以來之最——也耗盡了自己。",
      },
      detail: {
        en: "With Russia out of the war, Germany transferred divisions west for a final attempt at decision before American weight arrived. Operation Michael opened on 21 March 1918 with one of the heaviest bombardments of the war — thousands of guns firing millions of shells over five hours. Storm-troop tactics broke the British 5th Army and drove the front westward further than any advance since 1914, bringing Paris within range of new long-range guns. But the offensive had no decisive objective beyond destruction, outran its artillery and supply, and consumed Germany's last trained reserves. It was halted in April, renewed as smaller attacks into June, and left the German Army weaker for the final Allied campaign.",
        zh: "俄國既退，德國將各師西調，趁美國的分量抵達之前，做最後一次尋求決戰的嘗試。3月21日，「米夏埃爾行動」以全戰最猛烈的砲擊之一揭幕——數千門火炮在五小時內，沿戰線傾瀉數百萬發砲彈。突擊群戰術突破英國第五軍團，將戰線西推至1914年以來的最大幅度，巴黎本身也進入新型遠程火砲的射程。然而這場攻勢除了摧毀之外並無決定性目標，跑過了自身的砲兵與補給，並耗盡德國最後的精銳後備。攻勢於4月受阻，其後以較小規模延續至6月，卻已使德軍在協約國的最後攻勢面前更形虛弱。",
      },
      theater: "europe",
      citationIds: ["a-britannica-wwi", "a-iwm-wwi"],
    },
    {
      id: "hundred-days",
      date: "1918-08-08",
      dateLabel: { en: "8 August 1918", zh: "1918年8月8日" },
      title: { en: "The Hundred Days begins", zh: "百日攻勢展開" },
      place: { en: "Amiens, France", zh: "法國亞眠" },
      summary: {
        en: "Allied attacks from Amiens onward roll the German Army back; Ludendorff calls 8 August “the black day of the German Army.”",
        zh: "自亞眠起的協約國連續攻勢反推德軍；魯登道夫稱8月8日為「德軍的黑日子」。",
      },
      detail: {
        en: "On 8 August 1918, British, Canadian, and Australian forces with French support, hundreds of tanks, and a creeping barrage struck the German lines at Amiens and advanced as much as eleven kilometres in a day. Ludendorff called it “the black day of the German Army”: for the first time, whole units surrendered, and home-front morale broke with the front. The Hundred Days that followed was a sequence of Allied attacks all along the line — American divisions in the Meuse–Argonne, French armies between — while Germany's allies collapsed one by one: Bulgaria, the Ottoman Empire, Austria-Hungary. The fleet mutinied at Kiel, and the empire became a republic two days before the Armistice. Defeat in 1918 was military, and it arrived as collapse, not as a single battle lost.",
        zh: "1918年8月8日，英國、加拿大與澳洲部隊在法軍支援、數百輛戰車與彈幕推進的配合下，於亞眠打擊德軍防線，單日推進達十一公里。魯登道夫稱之為「德軍的黑日子」：整建制的部隊首次投降，後方士氣隨戰線一同崩解。其後的百日攻勢，是協約國沿全線發動的連續攻擊——美軍師在馬斯河—阿爾貢推進，法軍在其間前進——德國的盟友則一一崩塌：保加利亞、鄂圖曼帝國、奧匈帝國。艦隊於基爾譁變，帝國在停戰協定生效前兩天改制為共和國。1918年的失敗是軍事性的，且以崩潰的方式到來——並非輸掉某一場會戰。",
      },
      theater: "europe",
      citationIds: ["a-britannica-wwi", "a-iwm-wwi"],
    },
    {
      id: "armistice",
      date: "1918-11-11",
      dateLabel: { en: "11 November 1918, 11:00", zh: "1918年11月11日 11時" },
      title: { en: "Armistice", zh: "停戰" },
      place: { en: "Compiègne, France", zh: "法國貢比涅" },
      summary: {
        en: "Fighting ends on the Western Front at the eleventh hour of the eleventh day of the eleventh month.",
        zh: "西線戰事於第十一個月第十一天的第十一個小時結束。",
      },
      detail: {
        en: "The Armistice was signed in Marshal Foch's railway carriage in the Forest of Compiègne in the early hours of 11 November 1918, and took effect at 11:00 that morning — the eleventh hour of the eleventh day of the eleventh month. Its terms were military and severe: German withdrawal from all occupied territory, the surrender of heavy weapons, submarines, and much of the fleet, and renunciation of the treaties of Brest-Litovsk and Bucharest. Fighting continued to the last minute — on the war's final morning, soldiers were still dying along the front. News brought street celebrations, and something quieter behind them: four empires had fallen, and a peace remained to be built. The two-minute silence later held in many countries at the eleventh hour became a foundation of modern remembrance.",
        zh: "1918年11月11日凌晨，停戰協定在貢比涅森林福煦元帥的火車車廂內簽署，並於當日上午11時生效——第十一個月的第十一天的第十一個小時。條款在軍事上極為嚴苛：德軍撤出所有佔領地，交出重武器、潛艇與大部分艦隊，並放棄《布列斯特—立陶夫斯克條約》與《布加勒斯特條約》。戰鬥持續到最後一刻——在戰爭的最後一個早晨，前線仍有士兵死去。消息傳來，街頭出現慶祝，其後則是更安靜的東西：四個帝國已經傾覆，而和平尚待一磚一瓦地建立。許多國家其後在第十一個小時舉行的兩分鐘默哀，成為現代銘記傳統的基石。",
      },
      theater: "global",
      citationIds: ["a-worldwar-armistice", "a-awm-wwi", "a-iwm-wwi"],
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
    {
      id: "a-britannica-armenian-genocide",
      publisher: "Encyclopaedia Britannica",
      title: {
        en: "Armenian Genocide",
        zh: "亞美尼亞種族滅絕",
      },
      url: "https://www.britannica.com/event/Armenian-Genocide",
      kind: "reference",
      accessDate: "2026-10-17",
      note: {
        en: "Automated check blocked (HTTP 403, bot protection); canonical institutional URL; browser verification pending.",
        zh: "自動檢查遭封鎖（HTTP 403，防爬蟲）；此為該機構正式頁面；待瀏覽器驗證。",
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
  ],
};
