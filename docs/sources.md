# Source Inventory · 資料來源總錄

**Remember to Prevent — Chapter 01** — every external source cited by the site's bilingual content.

This inventory was extracted **programmatically** from the typed `Citation` objects in the content files (`src/content/chapters/ch1.ts … ch6.ts`, `src/content/data/timeline-wwi.ts`, `src/content/data/timeline-wwii.ts`, `src/content/data/casualties.ts`), so it matches exactly what the site renders — the same records visitors see as superscript markers with popovers, per-chapter source lists, and the deduplicated footer source list.

Each record carries: `id`, `publisher`, `title` (English + 繁體中文), `url`, `kind`, `accessDate`, and an honest verification `note`. The tables below reproduce all of these fields (access date is shared by every record and is stated once, above and in the summary).

## Shared access date

**2026-10-17** (Australia/Brisbane timezone — the project owner's timezone). Every citation record carries `accessDate: "2026-10-17"`, and each verification note repeats the date. All automated HTTP checks described here were performed on that date with `curl -L` and a desktop user agent.

**Independent re-verification.** While preparing this inventory, the documentation agent re-checked **all 41 unique citation URLs** on 2026-10-17 using the same automated method. Every record's note reproduced exactly: the 32 unique URLs behind "Verified HTTP 200" notes all returned HTTP 200, and the 9 unique URLs behind "403 / pending" notes all returned HTTP 403 (bot protection). No dead links, no redirects to unintended resources, no surprises.

## Summary

| Measure | Count |
| --- | ---: |
| Citation records (unique citation ids) | **52** |
| Distinct URLs behind those records | 41 |
| Records noting **HTTP 200 verified** (2026-10-17) | **40** |
| Records noting **HTTP 403 to automated agents** — canonical institutional URL, **browser verification pending** | **12** |
| Records with no verification note | 0 |

By kind: **institutional 29 · primary 11 · reference 11 · scholarly 1**. The 52 records span **20 distinct publisher domains** (see the publisher sections below; the Chapter 06 resource links below add 4 more domains: wfp.org, unesco.org, arolsen-archives.org, cwgc.org).

Kind meanings (from `src/content/types.ts`): `primary` — archival document / treaty text / testimony; `institutional` — museum, memorial, archive, Red Cross, UN; `scholarly` — peer-reviewed or academic-press work; `reference` — established encyclopedia / statistical reference.

### Duplicate-URL records

Each content file keeps its own citation registry, and ids are prefixed with the writing agent's scope (`a-` chapters 01–02 + WWI timeline, `b1-` chapter 03, `b2-` chapter 04 + casualty datasets, `b3-` WWII timeline, `c-` chapter 05). A handful of URLs are therefore cited by more than one record — the same page, registered per file, always with the same verification status:

- `https://www.ushmm.org/learn` — 4 records (`b1-`, `b2-`, `b3-`, `c-` scopes)
- `https://www.britannica.com/event/World-War-I` — 2 records (`a-`, `b2-`)
- `https://www.britannica.com/event/World-War-II` — 2 records (`b1-`, `b3-`)
- `https://www.britannica.com/event/Nanjing-Massacre` — 2 records (`b1-`, `b3-`)
- `https://avalon.law.yale.edu/imt/wannsee.asp` — 2 records (`b1-`, `b3-`)
- `https://www.nationalww2museum.org/war/articles/liberation-auschwitz` — 2 records (`b1-`, `b3-`)
- `https://www.nationalww2museum.org/war/topics/atomic-bombings-japan` — 2 records (`b1-`, `b3-`)
- `https://www.nationalww2museum.org/students-teachers/student-resources/research-starters/research-starters-worldwide-deaths-world-war` — 2 records (`b1-`, `b2-`)
- `https://www.yadvashem.org/holocaust/about.html` — 2 records (`b2-`, `b3-`)

### Cross-project link

<https://global-food-crisis.com/> is cited once (id `b2-gfc`, Chapter 04) and linked once more in the site footer as further reading. It is a **separate, independent project** — not a source for this site's historical claims, not an affiliated publication, and no endorsement is implied in either direction. It was verified HTTP 200 on 2026-10-17 (and again on re-check) and is cross-linked only as further reading on the relationship between armed conflict and food insecurity.

## Verification status legend

| Status | Meaning |
| --- | --- |
| **Verified HTTP 200** | An automated check (`curl -L`, desktop user agent) returned HTTP 200 on 2026-10-17. For deep pages, the specific facts relied upon were additionally confirmed in the returned page content where the note says so (e.g., Somme "over 57,000 casualties" on nam.ac.uk; Owen's exact lines and the 1920 Sassoon-edited credit on poetryfoundation.org). |
| **Canonical · HTTP 403 (bot protection) · browser verification pending** | The institution blocks curl-like agents with HTTP 403. The URL is the canonical institutional page (deep paths on the same domains are equally blocked, so the canonical root or canonical article URL is what is cited). These pages have **not** been opened in a real browser from this environment; their status is honestly recorded as pending, both here and in the live footer's source notes. |

Institutions affected by the 403-pending status in the citation registry: **Imperial War Museums, Australian War Memorial, Encyclopædia Britannica (7 records), OHCHR (1 record)**. The Chapter 06 resource links below add **UNHCR, CWGC, IWM (root), OHCHR (root)** to that set. See [`limitations.md`](limitations.md) for the full discussion of what this means and what remains unverified.

## Citations by publisher

Twenty publishers, alphabetically. "Used in" abbreviations: Ch 01–06 = chapters; WWI/WWII timeline = interactive timelines; casualties / holocaust / hunger = Chapter 04 range-chart datasets.

### Anne Frank House · 安妮之家

| ID | Title (EN) | 標題（繁體中文） | Kind | URL | Verification note (EN) | Used in |
| --- | --- | --- | --- | --- | --- | --- |
| `b2-annefrank-dutch` | Hunger winter: hunger and cold in the Netherlands | 饑餓冬天：荷蘭的饑餓與寒冷 | institutional | <https://www.annefrank.org/en/timeline/91/hunger-winter-hunger-and-cold-in-the-netherlands> | Verified HTTP 200 on 2026-10-17. | Ch 04, hunger chart |

### Australian War Memorial · 澳洲戰爭紀念館

| ID | Title (EN) | 標題（繁體中文） | Kind | URL | Verification note (EN) | Used in |
| --- | --- | --- | --- | --- | --- | --- |
| `a-awm-wwi` | First World War — histories and commemoration (Gallipoli, Anzac Day, Armistice) | 第一次世界大戰——戰史與紀念（加里波利、澳紐軍團日、停戰） | institutional | <https://www.awm.gov.au/> | Automated check blocked (HTTP 403, bot protection); canonical institutional URL; browser verification pending. | Ch 01, WWI timeline |

### Encyclopædia Britannica · 大英百科全書

Publisher string in the data (as written in each file): "Encyclopaedia Britannica" / "Encyclopædia Britannica".

| ID | Title (EN) | 標題（繁體中文） | Kind | URL | Verification note (EN) | Used in |
| --- | --- | --- | --- | --- | --- | --- |
| `a-britannica-armenian-genocide` | Armenian Genocide | 亞美尼亞種族滅絕 | reference | <https://www.britannica.com/event/Armenian-Genocide> | Automated check blocked (HTTP 403, bot protection); canonical institutional URL; browser verification pending. | WWI timeline |
| `a-britannica-wwi` | World War I (1914–18) | 第一次世界大戰（1914–1918） | reference | <https://www.britannica.com/event/World-War-I> | Automated check blocked (HTTP 403, bot protection); canonical institutional URL; browser verification pending. | Ch 01, Ch 02, WWI timeline |
| `b1-britannica-nanjing` | Nanjing Massacre (December 1937 – January 1938) | 南京大屠殺（1937年12月至1938年1月） | reference | <https://www.britannica.com/event/Nanjing-Massacre> | Automated check blocked (HTTP 403, bot protection); canonical institutional URL; browser verification pending. | Ch 03 |
| `b1-britannica-wwii` | World War II (1939–1945) | 第二次世界大戰（1939–1945） | reference | <https://www.britannica.com/event/World-War-II> | Automated check blocked (HTTP 403, bot protection); canonical institutional URL; browser verification pending. | Ch 03 |
| `b2-britannica-bengal` | Bengal famine of 1943 | 1943年孟加拉饑荒 | reference | <https://www.britannica.com/topic/Bengal-famine-of-1943> | Automated check blocked (HTTP 403, bot protection); canonical institutional URL; browser verification pending. | Ch 04, hunger chart |
| `b2-britannica-leningrad` | Siege of Leningrad (September 8, 1941 – January 27, 1944) | 列寧格勒圍城戰（1941年9月8日–1944年1月27日） | reference | <https://www.britannica.com/event/Siege-of-Leningrad> | Automated check blocked (HTTP 403, bot protection); canonical institutional URL; browser verification pending. | Ch 04, hunger chart |
| `b2-britannica-wwi` | World War I — casualties (killed, wounded and missing) | 第一次世界大戰——傷亡（陣亡、負傷與失蹤） | reference | <https://www.britannica.com/event/World-War-I> | Automated check blocked (HTTP 403, bot protection); canonical institutional URL; browser verification pending. | Ch 04, casualties chart |
| `b3-britannica-nanjing` | Nanjing Massacre | 南京大屠殺 | reference | <https://www.britannica.com/event/Nanjing-Massacre> | Automated check blocked (HTTP 403, bot protection); canonical institutional URL; browser verification pending. | WWII timeline |
| `b3-britannica-wwii` | World War II | 第二次世界大戰 | reference | <https://www.britannica.com/event/World-War-II> | Automated check blocked (HTTP 403, bot protection); canonical institutional URL; browser verification pending. | WWII timeline |

### European Union · 歐洲聯盟

| ID | Title (EN) | 標題（繁體中文） | Kind | URL | Verification note (EN) | Used in |
| --- | --- | --- | --- | --- | --- | --- |
| `c-eu-schuman` | The Schuman Declaration — 9 May 1950 | 舒曼宣言——1950年5月9日 | primary | <https://europa.eu/european-union/about-eu/symbols/europe-day/schuman-declaration_en> | Verified HTTP 200 on 2026-10-17. | Ch 05 |

### Global Food Crisis (independent project)

| ID | Title (EN) | 標題（繁體中文） | Kind | URL | Verification note (EN) | Used in |
| --- | --- | --- | --- | --- | --- | --- |
| `b2-gfc` | Global Food Crisis — armed conflict and food insecurity today | 全球糧食危機——今日的武裝衝突與糧食不安全 | reference | <https://global-food-crisis.com/> | Verified HTTP 200 on 2026-10-17. Separate independent project; cross-linked as further reading only. | Ch 04 |

### HISTORY (A&E Networks)

| ID | Title (EN) | 標題（繁體中文） | Kind | URL | Verification note (EN) | Used in |
| --- | --- | --- | --- | --- | --- | --- |
| `b2-historycom-wwii` | World War II: Causes, Timeline, Key Battles, Facts & Legacy | 第二次世界大戰：起因、時序、關鍵戰役、史實與遺產 | reference | <https://www.history.com/articles/world-war-ii-history> | Verified HTTP 200 on 2026-10-17. Popular reference article; casualty figures cross-checked against The National WWII Museum's research starter. | Ch 04, casualties chart |

### Imperial War Museums · 帝國戰爭博物館

| ID | Title (EN) | 標題（繁體中文） | Kind | URL | Verification note (EN) | Used in |
| --- | --- | --- | --- | --- | --- | --- |
| `a-iwm-wwi` | First World War — histories and collections | 第一次世界大戰——歷史與藏品 | institutional | <https://www.iwm.org.uk/> | Automated check blocked (HTTP 403, bot protection); canonical institutional URL; browser verification pending. | Ch 01, Ch 02, WWI timeline |

### International Committee of the Red Cross

| ID | Title (EN) | 標題（繁體中文） | Kind | URL | Verification note (EN) | Used in |
| --- | --- | --- | --- | --- | --- | --- |
| `c-icrc-geneva` | The Geneva Conventions and their Commentaries | 日內瓦公約及其評註 | institutional | <https://www.icrc.org/en/law-and-policy/geneva-conventions-and-their-commentaries> | Verified HTTP 200 on 2026-10-17. | Ch 05 |

### National Army Museum

| ID | Title (EN) | 標題（繁體中文） | Kind | URL | Verification note (EN) | Used in |
| --- | --- | --- | --- | --- | --- | --- |
| `a-nam-somme` | The Battle of the Somme | 索姆河戰役 | institutional | <https://www.nam.ac.uk/explore/battle-somme> | Verified HTTP 200 on 2026-10-17. | Ch 02, WWI timeline |

### National WWI Museum and Memorial

| ID | Title (EN) | 標題（繁體中文） | Kind | URL | Verification note (EN) | Used in |
| --- | --- | --- | --- | --- | --- | --- |
| `a-worldwar-armistice` | The Armistice | 停戰 | institutional | <https://www.theworldwar.org/learn/about-wwi/armistice> | Verified HTTP 200 on 2026-10-17. | Ch 01, Ch 02, WWI timeline |
| `a-worldwar-lusitania` | Torpedoes and Tragedy: The Sinking of RMS Lusitania | 魚雷與悲劇：路西塔尼亞號的沉沒 | institutional | <https://www.theworldwar.org/learn/about-wwi/torpedoes-and-tragedy-sinking-rms-lusitania> | Verified HTTP 200 on 2026-10-17. | Ch 02, WWI timeline |

### Poetry Foundation

| ID | Title (EN) | 標題（繁體中文） | Kind | URL | Verification note (EN) | Used in |
| --- | --- | --- | --- | --- | --- | --- |
| `a-poetryfoundation-owen` | Dulce et Decorum Est (Wilfred Owen) | Dulce et Decorum Est（威爾弗雷德·歐文） | primary | <https://www.poetryfoundation.org/poems/46560/dulce-et-decorum-est> | Verified HTTP 200 on 2026-10-17. | Ch 02 |
| `b2-poetryfoundation-owen` | Wilfred Owen, “Disabled” | 威爾弗雷德・歐文，〈傷殘〉 | primary | <https://www.poetryfoundation.org/poems/57285/disabled> | Verified HTTP 200 on 2026-10-17. Public-domain poem (written 1917; published posthumously), quoted verbatim from this page. | Ch 04 |

### The Avalon Project, Yale Law School

Publisher string in the data (as written in each file): "The Avalon Project, Yale Law School Lillian Goldman Law Library" / "The Avalon Project, Yale Law School" / "Yale Law School — The Avalon Project".

| ID | Title (EN) | 標題（繁體中文） | Kind | URL | Verification note (EN) | Used in |
| --- | --- | --- | --- | --- | --- | --- |
| `b1-avalon-nazsov` | Nazi-Soviet Relations 1939–1941: Secret Additional Protocol, 23 August 1939 | 《納粹—蘇聯關係（1939–1941）》：秘密附加議定書，1939年8月23日 | primary | <https://avalon.law.yale.edu/20th_century/addsepro.asp> | Verified HTTP 200 on 2026-10-17. | Ch 03 |
| `b1-avalon-wannsee` | The Wannsee Protocol, 20 January 1942 | 萬湖會議紀錄，1942年1月20日 | primary | <https://avalon.law.yale.edu/imt/wannsee.asp> | Verified HTTP 200 on 2026-10-17. | Ch 03 |
| `b3-avalon-pact` | Treaty of Non-Aggression Between Germany and the USSR, 23 August 1939 | 德蘇互不侵犯條約（1939年8月23日） | primary | <https://avalon.law.yale.edu/20th_century/nonagres.asp> | Verified HTTP 200 on 2026-10-17. | WWII timeline |
| `b3-avalon-wannsee` | Wannsee Protocol, 20 January 1942 | 萬湖會議議定書（1942年1月20日） | primary | <https://avalon.law.yale.edu/imt/wannsee.asp> | Verified HTTP 200 on 2026-10-17. | WWII timeline |
| `c-avalon-imt` | The International Military Tribunal for Germany — trial documents | 德國國際軍事法庭——審判文獻 | primary | <https://avalon.law.yale.edu/subject_menus/imt.asp> | Verified HTTP 200 on 2026-10-17. | Ch 05 |

### The Historical Journal (Cambridge Core)

| ID | Title (EN) | 標題（繁體中文） | Kind | URL | Verification note (EN) | Used in |
| --- | --- | --- | --- | --- | --- | --- |
| `b2-cambridge-offer` | Review of Avner Offer, “The First World War: An Agrarian Interpretation” (Oxford University Press, 1989) | 書評：Avner Offer《第一次世界大戰：農業視角》（牛津大學出版社，1989年） | scholarly | <https://www.cambridge.org/core/journals/historical-journal/article/first-world-war-an-agrarian-interpretation-by-avner-offer-oxford-oxford-university-press-1989-pp-449-25/6AC357C22D12E6C58F7B9682D418DFAB> | Verified HTTP 200 on 2026-10-17. Academic book-review record for the standard study of the First World War's agricultural and blockade history. | Ch 04, hunger chart |

### The National Archives (UK) · 英國國家檔案館

| ID | Title (EN) | 標題（繁體中文） | Kind | URL | Verification note (EN) | Used in |
| --- | --- | --- | --- | --- | --- | --- |
| `a-nationalarchives-wwi-letters` | Letters from the First World War: In the Trenches (teaching resource) | 第一次世界大戰書信輯：戰壕篇（教學資源） | institutional | <https://www.nationalarchives.gov.uk/education/teaching-resources/letters-from-the-first-world-war-the-trenches-part-one/> | Verified HTTP 200 on 2026-10-17. | Ch 02 |

### The National WWII Museum

| ID | Title (EN) | 標題（繁體中文） | Kind | URL | Verification note (EN) | Used in |
| --- | --- | --- | --- | --- | --- | --- |
| `b1-nww2m-atomic` | The Atomic Bombings of Japan | 對日本的原子轟炸 | institutional | <https://www.nationalww2museum.org/war/topics/atomic-bombings-japan> | Verified HTTP 200 on 2026-10-17. | Ch 03 |
| `b1-nww2m-auschwitz` | The Liberation of Auschwitz | 奧斯威辛的解放 | institutional | <https://www.nationalww2museum.org/war/articles/liberation-auschwitz> | Verified HTTP 200 on 2026-10-17. | Ch 03 |
| `b1-nww2m-deaths` | Research Starters: Worldwide Deaths in World War II | 研究入門：第二次世界大戰全球死亡人數 | institutional | <https://www.nationalww2museum.org/students-teachers/student-resources/research-starters/research-starters-worldwide-deaths-world-war> | Verified HTTP 200 on 2026-10-17. | Ch 03 |
| `b1-nww2m-jackson` | “The Grave Responsibility of Justice”: Justice Robert H. Jackson's Opening Statement at Nuremberg | 〈正義的重大責任〉：羅伯特・傑克遜法官的紐倫堡開庭陳詞 | institutional | <https://www.nationalww2museum.org/war/articles/robert-jackson-opening-statement-nuremberg> | Verified HTTP 200 on 2026-10-17. | Ch 03 |
| `b2-nww2m-deaths` | Research Starters: Worldwide Deaths in World War II | 研究入門：第二次世界大戰的全球死亡 | institutional | <https://www.nationalww2museum.org/students-teachers/student-resources/research-starters/research-starters-worldwide-deaths-world-war> | Verified HTTP 200 on 2026-10-17. | Ch 04, casualties chart |
| `b2-nww2m-greece` | The Greek Civil War, 1944–1949 | 希臘內戰，1944–1949 | institutional | <https://www.nationalww2museum.org/war/articles/greek-civil-war-1944-1949> | Verified HTTP 200 on 2026-10-17. Article summarizes the Axis occupation of Greece 1941–44, including famine deaths. | Ch 04, hunger chart |
| `b2-nww2m-last-million` | “The Last Million:” Eastern European Displaced Persons in Postwar Germany | 「最後的百萬人」：戰後德國的東歐流離失所者 | institutional | <https://www.nationalww2museum.org/war/articles/last-million-eastern-european-displaced-persons-postwar-germany> | Verified HTTP 200 on 2026-10-17. | Ch 04 |
| `b3-nww2m-atomic` | The Atomic Bombings of Japan | 對日本的原子彈轟炸 | institutional | <https://www.nationalww2museum.org/war/topics/atomic-bombings-japan> | Verified HTTP 200 on 2026-10-17. | WWII timeline |
| `b3-nww2m-auschwitz` | The Liberation of Auschwitz | 奧斯威辛的解放 | institutional | <https://www.nationalww2museum.org/war/articles/liberation-auschwitz> | Verified HTTP 200 on 2026-10-17. | WWII timeline |
| `b3-nww2m-pearl` | Pearl Harbor Attack, December 7, 1941 | 珍珠港攻擊（1941年12月7日） | institutional | <https://www.nationalww2museum.org/war/topics/pearl-harbor-december-7-1941> | Verified HTTP 200 on 2026-10-17. | WWII timeline |

### United Nations · 聯合國

| ID | Title (EN) | 標題（繁體中文） | Kind | URL | Verification note (EN) | Used in |
| --- | --- | --- | --- | --- | --- | --- |
| `c-un-udhr` | Universal Declaration of Human Rights | 世界人權宣言 | primary | <https://www.un.org/en/about-us/universal-declaration-of-human-rights> | Verified HTTP 200 on 2026-10-17. | Ch 05 |

### United Nations Office of the High Commissioner for Human Rights (OHCHR)

| ID | Title (EN) | 標題（繁體中文） | Kind | URL | Verification note (EN) | Used in |
| --- | --- | --- | --- | --- | --- | --- |
| `c-ohchr-genocide-convention` | Convention on the Prevention and Punishment of the Crime of Genocide (1948) — full text | 《防止及懲治種族滅絕罪公約》（1948）——全文 | primary | <https://www.ohchr.org/en/instruments-mechanisms/instruments/convention-prevention-and-punishment-crime-genocide> | Automated check blocked (HTTP 403, bot protection); canonical institutional URL; browser verification pending. | Ch 05 |

### United States Holocaust Memorial Museum · 美國大屠殺紀念博物館

| ID | Title (EN) | 標題（繁體中文） | Kind | URL | Verification note (EN) | Used in |
| --- | --- | --- | --- | --- | --- | --- |
| `b1-ushmm-learn` | Learn — the Holocaust and the Museum's educational resources | 「Learn」——大屠殺與該館教育資源入口 | institutional | <https://www.ushmm.org/learn> | Verified HTTP 200 on 2026-10-17. | Ch 03 |
| `b2-ushmm-learn` | Holocaust Encyclopedia — Learn (introduction to the Holocaust) | 大屠殺百科——學習資源（大屠殺概覽） | institutional | <https://www.ushmm.org/learn> | Verified HTTP 200 on 2026-10-17. | Ch 04, holocaust chart |
| `b3-ushmm-learn` | Learn — Holocaust education resources | 學習資源——認識大屠殺 | institutional | <https://www.ushmm.org/learn> | Verified HTTP 200 on 2026-10-17. | WWII timeline |
| `c-ushmm-learning` | Learn — Holocaust Encyclopedia and teaching resources | Learn——大屠殺百科與教學資源 | institutional | <https://www.ushmm.org/learn> | Verified HTTP 200 on 2026-10-17. | Ch 05 |

### Westminster Abbey · 西敏寺

| ID | Title (EN) | 標題（繁體中文） | Kind | URL | Verification note (EN) | Used in |
| --- | --- | --- | --- | --- | --- | --- |
| `a-westminster-unknown-warrior` | The Unknown Warrior (Abbey commemorations) | 無名戰士（西敏寺紀念專頁） | institutional | <https://www.westminster-abbey.org/abbey-commemorations/commemorations/unknown-warrior> | Verified HTTP 200 on 2026-10-17. | Ch 01 |

### Yad Vashem · 亞德瓦舍姆（世界大屠殺紀念中心）

Publisher string in the data (as written in each file): "Yad Vashem" / "Yad Vashem, The World Holocaust Remembrance Center".

| ID | Title (EN) | 標題（繁體中文） | Kind | URL | Verification note (EN) | Used in |
| --- | --- | --- | --- | --- | --- | --- |
| `b1-yadvashem-babiyar` | Babi Yar and the Jews of Kiev — Primary Sources (Einsatzgruppen Operations and Situation Report No. 6) | 巴比雅爾與基輔猶太人——原始文獻（別動隊行動與局勢報告第6號） | primary | <https://www.yadvashem.org/education/educational-materials/lesson-plans/babi-yar/primary-sources.html> | Verified HTTP 200 on 2026-10-17. | Ch 03 |
| `b2-yadvashem-holocaust` | The Holocaust — a thematic and chronological narrative | 大屠殺——主題與編年敘事 | institutional | <https://www.yadvashem.org/holocaust/about.html> | Verified HTTP 200 on 2026-10-17. | Ch 04, holocaust chart |
| `b2-yadvashem-names` | Holocaust Victims' Names Recovery Project | 大屠殺受難者姓名復原計畫 | institutional | <https://www.yadvashem.org/remembrance/names-recovery-project.html> | Verified HTTP 200 on 2026-10-17. | Ch 04 |
| `b3-yadvashem-babi-yar` | Babi Yar and the Jews of Kiev — learning environment | 巴比雅爾與基輔的猶太人——教學資源 | institutional | <https://www.yadvashem.org/education/educational-materials/lesson-plans/babi-yar.html> | Verified HTTP 200 on 2026-10-17. | WWII timeline |
| `b3-yadvashem-holocaust` | The Holocaust — thematic and chronological narrative | 大屠殺——專題與時序敘事 | institutional | <https://www.yadvashem.org/holocaust/about.html> | Verified HTTP 200 on 2026-10-17. | WWII timeline |
| `c-yadvashem-righteous` | The Righteous Among the Nations | 正義之士（Righteous Among the Nations） | institutional | <https://www.yadvashem.org/righteous.html> | Verified HTTP 200 on 2026-10-17. | Ch 05 |
| `c-yadvashem-righteous-stats` | Names of Righteous by Country — statistics as of 1 January 2024 | 各國正義之士姓名與人數——截至2024年1月1日統計 | institutional | <https://www.yadvashem.org/righteous/statistics.html> | Verified HTTP 200 on 2026-10-17. | Ch 05 |



## Chapter 06 resource links · supplementary inventory

Chapter 06's action pathways carry 20 external resource links across 6 pathways (14 distinct domains). These are **not** `Citation` objects — they are typed `ActionLink`s with a publisher label, rendered as plain links with `rel="noopener noreferrer"`. They are listed here for completeness because they are user-facing external references.

Statuses below combine the content agent's verification (worklog Task 4-c, 2026-10-17) and an independent re-check by the documentation agent on 2026-10-17 using the same automated method: 15 links returned HTTP 200, 4 canonical roots returned HTTP 403 (bot protection — pending browser verification), and 1 UNESCO link timed out on the re-check although the content agent's check on the same date had returned HTTP 200 (UNESCO pages are JavaScript-rendered single-page apps; see `limitations.md`).

### The 20 links

| Pathway | Publisher | Link label (EN) | URL | Automated check (2026-10-17) |
| --- | --- | --- | --- | --- |
| learn | United States Holocaust Memorial Museum | United States Holocaust Memorial Museum — Learn (Holocaust Encyclopedia and educator resources) | <https://www.ushmm.org/learn> | HTTP 200 (re-checked 2026-10-17) |
| learn | The National WWII Museum | The National WWII Museum — World War II research and history | <https://www.nationalww2museum.org/> | HTTP 200 |
| learn | The National Archives (UK) | The National Archives (UK) — education resources with original documents | <https://www.nationalarchives.gov.uk/education/> | HTTP 200 |
| learn | Yale Law School — The Avalon Project | The Avalon Project — twentieth-century documents in full text | <https://avalon.law.yale.edu/subject_menus/20th.asp> | HTTP 200 |
| challenge-misinformation | UNESCO | UNESCO — Media and Information Literacy | <https://www.unesco.org/en/media-information-literacy> | Content-agent check: HTTP 200; documentation-agent re-check timed out (JS-rendered SPA) |
| challenge-misinformation | UNESCO | UNESCO — Media and Information Literacy resources and teaching materials | <https://www.unesco.org/en/media-information-literacy/resources> | HTTP 200 (JS-rendered SPA) |
| support-humanitarian | International Committee of the Red Cross | ICRC — law and policy | <https://www.icrc.org/en/law-and-policy> | HTTP 200 |
| support-humanitarian | International Committee of the Red Cross | ICRC — where we work (country operations) | <https://www.icrc.org/en/where-we-work> | HTTP 200 |
| support-humanitarian | World Food Programme | World Food Programme — hunger and conflict reporting | <https://www.wfp.org/> | HTTP 200 |
| support-humanitarian | United Nations High Commissioner for Refugees (UNHCR) | UNHCR — refugees and displaced people | <https://www.unhcr.org/> | HTTP 403 (bot protection) — canonical root, browser verification pending |
| volunteer | The National Archives (UK) | The National Archives (UK) — get involved (volunteering and projects) | <https://www.nationalarchives.gov.uk/about/get-involved/> | HTTP 200 |
| volunteer | Imperial War Museums | Imperial War Museums — museums, collections, and public programmes | <https://www.iwm.org.uk/> | HTTP 403 (bot protection) — canonical root, browser verification pending |
| volunteer | United Nations | United Nations — how the UN works and how to engage | <https://www.un.org/en/> | HTTP 200 |
| volunteer | UNESCO | UNESCO — Global Citizenship Education | <https://www.unesco.org/en/education/global-citizenship-education> | HTTP 200 (JS-rendered SPA) |
| civic | Office of the United Nations High Commissioner for Human Rights (OHCHR) | OHCHR — human rights instruments and monitoring | <https://www.ohchr.org/> | HTTP 403 (bot protection) — canonical root, browser verification pending |
| civic | United Nations | The United Nations and the Rule of Law | <https://www.un.org/ruleoflaw/> | HTTP 200 |
| civic | International Committee of the Red Cross | ICRC — the Geneva Conventions and their Commentaries | <https://www.icrc.org/en/law-and-policy/geneva-conventions-and-their-commentaries> | HTTP 200 |
| preserve-memory | Yad Vashem, The World Holocaust Remembrance Center | Yad Vashem — the Holocaust: thematic and chronological narrative | <https://www.yadvashem.org/holocaust/about.html> | HTTP 200 |
| preserve-memory | Arolsen Archives | Arolsen Archives — International Center on Nazi Persecution (documents and online search) | <https://arolsen-archives.org/en/> | HTTP 200 |
| preserve-memory | Commonwealth War Graves Commission | Commonwealth War Graves Commission — commemoration and casualty records | <https://www.cwgc.org/> | HTTP 403 (bot protection) — canonical root, browser verification pending |


## Integrity checks and small discrepancies

- **No dangling references.** Every `citationId` referenced by a section, callout, timeline event, or data series resolves in its own file's registry. This was checked programmatically across all files that carry registries (6 chapters, 2 timelines, 3 datasets): **0 missing, 0 unused** ids.
- **Publisher name variants.** The `publisher` string varies slightly across files for the same institution — "Encyclopaedia Britannica" vs "Encyclopædia Britannica"; three spellings of the Avalon Project's name ("The Avalon Project, Yale Law School", "…Lillian Goldman Law Library", "Yale Law School — The Avalon Project"); "Yad Vashem" vs "Yad Vashem, The World Holocaust Remembrance Center". These are cosmetic authorial variants (the live footer sorts by the string as written); the sections above group them under a single heading.
- **Same URL, different titles.** Duplicate-URL records (listed above) sometimes carry slightly different title wording — e.g., the four `ushmm.org/learn` records — because each writing agent titled the record for its own context. The URL, kind, access date, and verification status are identical.
- **Footer parity.** The live site footer displays all 52 records deduplicated by id, each with its publisher, kind, title, access date (2026-10-17), and full verification note — the same data as this inventory.
