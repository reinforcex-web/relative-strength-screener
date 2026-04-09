// ============================================================================
// RELATIVE STRENGTH SCREENER — Static Site Build
// Vanilla JS, no React, no build step
// ============================================================================

// --- Constants ---------------------------------------------------------------

const MARKET_LABELS = {"CSI300":"CSI 300","HSI":"Hang Seng","IBOV":"IBOV","KOSPI":"KOSPI","R1000":"Russell 1000","STI":"STI","SXXP":"STOXX 600","TOPIX":"TOPIX"};

const COMMENTARY = {
  "R1000": {
    sectors: "**Energy** \u2014 +9.1% 1M RS, 94% trend pass. Five confirmed in the top quintile. Still the highest RS sector but the ceasefire triggered a sharp reversal \u2014 Exxon and Chevron fell 4\u20135% on the day.\n**Information Technology** \u2014 +3.1% 1M RS, 41% trend pass. Thirty IT names in the top quintile, 23 confirmed. Meta surged +6.5% on Muse Spark AI launch. ASML +8.7%. Semis led the rally.\n**Industrials** \u2014 +1.6% 1M RS, 52% trend pass. Thirty-one industrials in the top quintile, 12 confirmed. Airlines surged: Delta +3.8%, United +7.9%.\n**Financials** \u2014 -0.5% 1M RS, 39% trend pass. Eighteen in the top quintile, 6 confirmed. Fed rate cut bets revived \u2014 24% probability of cuts in 2026.\n**Health Care** \u2014 -0.3% 1M RS, 37% trend pass. Ten in the top quintile, 2 confirmed.\n**Materials** \u2014 +2.5% 1M RS, 51% trend pass. Eight in the top quintile, 5 confirmed.\n**Utilities** \u2014 +1.8% 1M RS, 86% trend pass. Three in the top quintile, 1 confirmed.\n**Consumer Discretionary** \u2014 -3.0% 1M RS, 27% trend pass. Thirteen in the top quintile, 7 confirmed.\n**Consumer Staples** \u2014 -2.2% 1M RS, 40% trend pass. Eight in the top quintile, 3 confirmed.\n**Real Estate** \u2014 -1.5% 1M RS, 59% trend pass. Five in the top quintile, 4 confirmed.\n**Communication Services** \u2014 -0.4% 1M RS, 40% trend pass. Five in the top quintile, 1 confirmed.",
    themes: "**AI / Data Infrastructure**\nWhat is leading: The full data centre stack. Thirty IT names in the top quintile, 23 confirmed, 15 New Leaders. Key names: VRT, COHR, MKSI, TER, MTSI, AMAT, WDC, SNDK, KEYS, UI, LITE, CIEN, LRCX, MU, KLAC, JBL, LSCC, MPWR, ENTG, ONTO, ADI, DELL.\nWhy now: The ceasefire rally supercharged tech \u2014 Nasdaq +2.8%, ASML +8.7%, Meta +6.5%. The AI infrastructure thesis no longer competes with the energy trade for attention. Fifteen New Leaders means the breadth is still widening, not consolidating.\nNarrative: With oil dropping from $112 to $94, the macro overhang that was suppressing tech multiples is lifting. The data infrastructure stack was already the deepest confirmed cluster in any market \u2014 the ceasefire just removed the last headwind.\n**Electrification / Power Infrastructure**\nWhat is leading: Power, cooling, grid, and construction. Thirty-one industrials in the top quintile. Key names: VRT (#1), FIX (#2), CW, GEV, MTZ, WWD, PWR, EME, HUBB, BWXT.\nWhy now: VRT reclaimed #1 and FIX is #2 \u2014 the electrification leaders are back at the top. The theme is regime-agnostic: it performed during the war (tied to AI build cycles) and it performs during the ceasefire (lower energy costs improve margins for construction and deployment). Airlines surging (DAL +3.8%, UAL +7.9%) is a derivative of the same oil unwind.\nNarrative: Industrials and IT together account for 61 of 136 top-quintile names (45%). The market is dominated by two themes: AI hardware and the physical infrastructure to power it.\n**Financials Rotation**\nWhat is leading: Banks, capital markets, insurance. Eighteen financials in the top quintile, 6 confirmed. Key names: WBS, XP, CFG, RNR, NTRS, BK, CBOE, C, CME, MTB, STT, USB.\nWhy now: The ceasefire revived Fed rate cut expectations (24% probability). Treasury yields fell. The oil-driven inflation fear that was capping financials is unwinding. Beyond the top quintile, JPM, BAC, and WFC are all Accelerating at +98\u2013100 \u2014 the pipeline is massive.\nNarrative: The financials rotation was the strongest pre-breakout signal before the ceasefire. Now it has a catalyst. If oil sustains below $100, this becomes the dominant new leadership theme.\n**Consumer Recovery**\nWhat is leading: Discount retail, luxury, travel, food services. Thirteen consumer discretionary names in the top quintile, 7 confirmed. Key names: BWA, FIVE, ROST, HLT, TPR, MAR, VIK, EBAY, BURL.\nWhy now: Lower oil prices directly benefit consumer spending via gas prices ($4.11/gallon \u2192 expected to decline). Airlines surging is the clearest expression. FIVE Below at #5 with +97% EPS is the standout consumer name.\nNarrative: Seven confirmed consumer names in the top quintile is a real cluster. The ceasefire is directly positive for this theme.\n**Health Care Inflection**\nWhat is leading: Diversified pharma and biotech. Ten health care names in the top quintile, 2 confirmed. Key names: JAZZ, ROIV, MRNA, JNJ, RPRX, UTHR, MRK.\nWhy now: Health Care 1M RS is near flat at -0.3%. Ten names in the top quintile with only 2 confirmed is the classic early-rotation setup. The ceasefire removes the macro noise and lets the sector\u2019s own dynamics drive.\nNarrative: The depth of names (10) combined with the lack of confirmation (2) is textbook early rotation. Worth monitoring as the post-war normalisation plays out.",
    synthesis: "R1000 upgraded to Range-Bound (was Intermediate Downtrend). 79 confirmed \u2014 up from 77. The ceasefire rally (+2.5%, WTI to $94) lifted the regime. IT and Industrials dominate the top quintile (61 of 136 names). Financials rotation has a catalyst.",
    daily: "**S\u0026P 500 6,783 (+2.51%), Nasdaq +2.80%, Dow +2.85% on 8 Apr.** The ceasefire rally. Dow\u2019s best day in a year. WTI crashed 16.4% to $94.41. Brent -13.3% to $94.75.\n**Regime upgraded to Range-Bound** \u2014 R1000 exits Intermediate Downtrend for the first time since the war began. The 200DMA overhang is easing.\n**In the screener,** VRT reclaimed #1. FIX at #2. COHR (#4) and FIVE (#5) hold. Seventy-nine confirmed leaders \u2014 new high this cycle. IT has 30 names in the top quintile with 23 confirmed.\n**The ceasefire is fragile.** Drones and missiles continued hitting Iran and Gulf Arab states. Saudi Arabia\u2019s East-West pipeline was struck. Iran claimed it re-closed the Strait before walking it back. Euphoria faded through the session as stocks pared early gains.\n**Oil still elevated.** WTI at $94 is still 40% above the $67 pre-war level. 187 tankers with 172 million barrels remain trapped in the Gulf. The backlog won\u2019t clear quickly.\n**Net read:** The regime shift to Range-Bound is significant. But the ceasefire is temporary (2 weeks) and precarious. The signal structure is positioned for normalisation \u2014 financials and consumer rotation are the key watches."
  },
  "TOPIX": {
    sectors: "**Energy** \u2014 +5.3% 1M RS, 100% trend pass. One in top quintile, no confirmed.\n**Health Care** \u2014 +4.7% 1M RS, 56% trend pass. Two in top quintile, 1 confirmed.\n**Financials** \u2014 +1.7% 1M RS, 91% trend pass. Three in top quintile, 0 confirmed.\n**Information Technology** \u2014 +1.2% 1M RS, 50% trend pass. Five in top quintile, all 5 confirmed.\n**Utilities** \u2014 +1.1% 1M RS, 100% trend pass. Perfect breadth.\n**Industrials** \u2014 +0.5% 1M RS, 68% trend pass. Seven in top quintile, 3 confirmed.\n**Materials** \u2014 -1.1% 1M RS, 82% trend pass. Four in top quintile, all 4 confirmed.\n**Consumer Staples** \u2014 +1.6% 1M RS, 50% trend pass.\n**Communication Services** \u2014 -1.1% 1M RS, 33% trend pass.\n**Consumer Discretionary** \u2014 -3.8% 1M RS, 42% trend pass. Four in top quintile, 3 confirmed.\n**Real Estate** \u2014 -8.4% 1M RS, 75% trend pass.",
    themes: "**AI / Data Infrastructure (Japan Expression)**\nWhat is leading: Cables, memory, semicap, and electronic substrates. Five IT names in the top quintile, all 5 confirmed. Seven industrials with 3 confirmed. Key names: Sumitomo Electric (5802, #1), Mitsui Kinzoku (5706, #2), Resonac (4004, #3), JX Metals (5016, #4), Kioxia (285A, #5).\nWhy now: TOPIX shifted to Rallying (+3.32% 1D, Nikkei +5.39% \u2014 best day since April 2025). Japan\u2019s 90% reliance on Middle Eastern crude makes the ceasefire disproportionately positive. IT and Industrials together are 12 of 29 top-quintile names. EPS revisions remain extreme: Kioxia +165%, Sumitomo Electric +94.8%. Twelve New Leaders \u2014 the freshest momentum across all 7 markets proportional to universe.\nNarrative: Japan\u2019s AI supply chain is repricing sharply. The ceasefire removes the energy cost overhang, and the IT breakout (5 of 5 confirmed) is the most complete sector confirmation anywhere.\n**Specialty Materials**\nWhat is leading: Electronic materials and specialty metals. Four materials in the top quintile, all 4 confirmed. Key names: Resonac (4004), Mitsui Kinzoku (5706), JX Metals (5016), Sumitomo Metal Mining (5713).\nWhy now: 100% confirmation rate in the top quintile \u2014 the highest of any sector in any market. These are upstream suppliers to the AI/electrification cycle. EPS revisions +44% to +88%.\nNarrative: When every top-quintile name in a sector is confirmed, the market has high conviction. Japan\u2019s specialty materials are the deepest picks-and-shovels play globally.\n**Financials Pre-Breakout**\nWhat is leading: Banks and insurance. Three financials in the top quintile, 0 confirmed. But 91% sector trend breadth.\nWhy now: Japan\u2019s energy import dependency meant the war was a direct headwind for financials via inflation. The ceasefire removes this. TOPIX financials are where R1000 financials were before the ceasefire \u2014 strong breadth, no confirmation yet. Nikkei\u2019s +5.4% day should catalyse this.\nNarrative: The next sector to confirm. The breadth is already there.",
    synthesis: "TOPIX shifted to Rallying (+4.78% 1M). 18 confirmed. 12 New Leaders. Nikkei\u2019s best day since April 2025. IT has 100% confirmation in the top quintile. Materials has 100% confirmation. The ceasefire is the regime catalyst.",
    daily: "**TOPIX +3.32%, Nikkei +5.39% on 8 Apr** \u2014 Nikkei\u2019s best day since April 2025. The ceasefire rally hit Japan hardest given its 90% Middle Eastern crude dependency.\n**Regime shifted to Rallying** as 1M return hit +4.78%. Twelve New Leaders \u2014 a wave of fresh momentum.\n**Top 5 all CONFIRMED** with extreme EPS: Sumitomo Electric (#1, +94.8%), Mitsui Kinzoku (#2, +87.7%), Resonac (#3, +44.2%), JX Metals (#4), Kioxia (#5, +165%). The strongest top-of-table conviction in TOPIX\u2019s history in the screener.\n**Net read:** The ceasefire unlocked TOPIX. IT and Materials both have 100% confirmation in the top quintile. Financials (91% trend breadth) is the next catalyst."
  },
  "KOSPI": {
    sectors: "**Information Technology** \u2014 +3.6% 1M RS, 100% trend pass. One in top quintile. Perfect breadth.\n**Financials** \u2014 -1.6% 1M RS, 44% trend pass. One in top quintile, 1 confirmed. Mirae Asset anchors.\n**Consumer Staples** \u2014 -2.0% 1M RS, 100% trend pass. KT\u0026G.\n**Industrials** \u2014 -3.5% 1M RS, 45% trend pass. Seven in top quintile, 4 confirmed, 4 new. Dominant sector.\n**Communication Services** \u2014 -5.8% 1M RS, 33% trend pass. One in top quintile, 1 confirmed.\n**Materials** \u2014 -7.4% 1M RS, 33% trend pass. No leadership.\n**Health Care** \u2014 -7.8% 1M RS, 0% trend pass. No leadership.\n**Consumer Discretionary** \u2014 -11.5% 1M RS, 0% trend pass. One in top quintile but no confirmation. Avoid.\n**Energy** \u2014 -12.5% 1M RS, 50% trend pass. Ceasefire reversal risk.\n**Utilities** \u2014 -15.0% 1M RS, 0% trend pass. Weakest sector.",
    themes: "**Defence / Electrical Infrastructure**\nWhat is leading: Seven of 11 top-quintile names are Industrials (64% concentration). Key names: Hyundai E\u0026C (000720, #1), LS Electric (010120, #3), Hyosung Heavy (298040, #5), Doosan Co (000150, #4), LIG Nex1 (079550).\nWhy now: KOSPI surged 6.87% \u2014 the biggest single-day gain across all 7 markets. Korea sources 70% of crude from the Middle East, so the ceasefire is disproportionately positive. The defence/infrastructure cluster is even more dominant now: 4 New Leaders and 4 confirmed in the top quintile. Hyundai E\u0026C holds #1 with +20.6% EPS CONFIRMED.\nNarrative: KOSPI remains a defence/infrastructure index. The ceasefire doesn\u2019t weaken this theme \u2014 structural defence spending and grid electrification persist. The oil cost relief actually improves margins for industrial names.\n**Asian Financials Rotation (Korea Expression)**\nWhat is leading: Mirae Asset (006800, #2, +210% EPS CONFIRMED). One financial in the top quintile.\nWhy now: Mirae Asset\u2019s +210% EPS is the most extreme revision in KOSPI. Connects to the pan-Asian rotation: China state banks (9 in CSI 300 top quintile), Japan (91% trend breadth), Singapore (DBS, OCBC Emerging), European Polish/Nordic banks.\nNarrative: Financial rotation is the thinnest theme in KOSPI (1 name) but connects to the broadest cross-market signal. Mirae Asset is the Korean anchor.",
    synthesis: "KOSPI Rallying (+10.43% 1M). The strongest 1D gain across all markets (+6.87%). Seven confirmed. Five New Leaders. Defence/infrastructure dominates the top quintile at 64%.",
    daily: "**KOSPI surged 6.87% on 8 Apr** \u2014 the largest single-day gain across all 7 markets. Regime remains Rallying with 1M return now +10.43%.\n**Hyundai E\u0026C held #1.** Mirae Asset (#2) and LS Electric (#3) held. Seven of 11 top-quintile names are Industrials.\n**The ceasefire is the catalyst** \u2014 Korea\u2019s 70% Middle Eastern crude dependency makes this the most oil-sensitive market after Japan.\n**Net read:** KOSPI is the highest-momentum market globally. The defence/infrastructure cluster is regime-agnostic. Five New Leaders signals fresh momentum, not exhaustion."
  },
  "HSI": {
    sectors: "**Health Care** \u2014 +8.7% 1M RS, 50% trend pass. One in top quintile, 0 confirmed.\n**Industrials** \u2014 +5.1% 1M RS, 88% trend pass. One in top quintile, 1 confirmed.\n**Consumer Staples** \u2014 +4.1% 1M RS, 20% trend pass. One in top quintile.\n**Financials** \u2014 +2.7% 1M RS, 70% trend pass. Three in top quintile, 2 confirmed.\n**Utilities** \u2014 +1.3% 1M RS, 100% trend pass. Two in top quintile.\n**Consumer Discretionary** \u2014 +0.1% 1M RS, 13% trend pass. One in top quintile.\n**Energy** \u2014 -2.9% 1M RS, 75% trend pass. Two in top quintile, 2 confirmed.\n**Real Estate** \u2014 -3.9% 1M RS, 43% trend pass. Two in top quintile, 1 confirmed.\n**Information Technology** \u2014 -4.1% 1M RS, 0% trend pass. One in top quintile, 1 confirmed.\n**Communication Services** \u2014 -6.8% 1M RS, 14% trend pass.\n**Materials** \u2014 -8.2% 1M RS, 33% trend pass. One in top quintile, 1 confirmed.",
    themes: "**Post-War Recovery**\nWhat is leading: The top quintile has 15 names across 9 sectors \u2014 the most diversified top quintile in any market. No single sector dominates. SHK Properties (#1), PetroChina (#2), Hongqiao (#3), HSBC (#5). Real Estate, Financials, and Energy each have 2\u20133 names.\nWhy now: HSI surged +3.09% on the ceasefire. The regime upgraded to Range-Bound with 1M return now +1.41%. The diversified top quintile is the signal \u2014 the market is no longer a sector bet, it\u2019s a broad recovery play. SHK Properties leading confirms the real estate/domestic recovery thesis.\nNarrative: When the top quintile is this diversified, the market is pricing broad normalisation, not a single theme. The ceasefire validates it.\n**Financial Deepening**\nWhat is leading: Banks, insurance. Three financials in the top quintile, 2 confirmed. Key names: HSBC (5), AIA (1299), BOC Hong Kong (2388).\nWhy now: HSBC remains in the top 5. The ceasefire removes rate pressure. Connects to the pan-Asian rotation.\nNarrative: Financial deepening is the one identifiable cluster within HSI\u2019s diversified leadership.\n**EV Adoption**\nWhat is leading: Chinese EV makers. Geely (175) and WuXi AppTec (2359) are the sole consumer discretionary and health care names in the top quintile.\nWhy now: The EV adoption thesis is structural. Even with oil falling to $94, the consumer behaviour shift doesn\u2019t reverse. Geely\u2019s +48% RS is still the most extreme momentum globally.\nNarrative: Structural, not cyclical. The ceasefire doesn\u2019t change the thesis.",
    synthesis: "HSI Range-Bound (+1.41% 1M, +3.09% 1D). 8 confirmed. The most diversified top quintile in any market (9 sectors). SHK Properties at #1.",
    daily: "**HSI +3.09% on 8 Apr** on the ceasefire rally. Regime holds Range-Bound with 1M return now +1.41%.\n**SHK Properties held #1.** PetroChina (#2) and Hongqiao (#3) stable. HSBC remains in the top 5.\n**The top quintile spans 9 sectors** \u2014 the broadest in any market. HSI is pricing broad recovery, not a single theme.\n**Ceasefire fragility:** Drones and missiles continued hitting Iran and Gulf states during the session. The euphoria faded through the day.\n**Net read:** The diversified top quintile confirms the post-war recovery thesis. The ceasefire is the catalyst but the rotation was already underway."
  },
  "CSI300": {
    sectors: "**Energy** \u2014 +7.7% 1M RS, 89% trend pass. Two in top quintile, 1 confirmed.\n**Health Care** \u2014 +3.5% 1M RS, 13% trend pass. One in top quintile, 1 confirmed.\n**Financials** \u2014 +1.7% 1M RS, 24% trend pass. Nine in top quintile, 2 confirmed.\n**Materials** \u2014 -2.4% 1M RS, 43% trend pass. Eleven in top quintile, 3 confirmed.\n**Industrials** \u2014 -3.9% 1M RS, 24% trend pass. Nine in top quintile, 3 confirmed.\n**Information Technology** \u2014 -2.3% 1M RS, 20% trend pass. Eight in top quintile, 3 confirmed.\n**Consumer Staples** \u2014 +1.6% 1M RS, 21% trend pass. Three in top quintile.\n**Utilities** \u2014 +1.7% 1M RS, 27% trend pass. One in top quintile, 1 confirmed.\n**Consumer Discretionary** \u2014 -1.0% 1M RS, 8% trend pass. One in top quintile, 1 confirmed.\n**Communication Services** \u2014 -3.0% 1M RS, 0% trend pass.\n**Real Estate** \u2014 -14.5% 1M RS, 0% trend pass.",
    themes: "**State Bank / Financials Rotation**\nWhat is leading: Nine financials in the top quintile, 2 confirmed \u2014 the second-largest sector. Key names: Bank of Jiangsu (600926), China United Network (000617), Bank of Hangzhou (600919), CITIC Capital (601077), Ningbo Bank (002142).\nWhy now: CSI 300 surged +3.49% on the ceasefire. The financials pipeline keeps broadening \u2014 9 names in the top quintile, up from the prior session. Agricultural Bank remains at +100 acceleration. The pan-Asian financials rotation (KOSPI Mirae, Japan 91% breadth, Singapore DBS, European Polish banks) is gaining momentum everywhere simultaneously.\nNarrative: Financials are the second-largest sector in CSI 300\u2019s top quintile (behind Materials). The market is positioning for policy easing and reflation. The ceasefire accelerates this.\n**AI / Data Infrastructure (China Expression)**\nWhat is leading: PCB, optical transceivers, data connectivity. Eight IT names in the top quintile, 3 confirmed. Key names: Suzhou TFC (300394, #1), WUS Printed (002463), Suzhou Dongshan (002384), Zhongji Innolight (300308), Eoptolink (300502).\nWhy now: Four of the top 5 in CSI 300 remain data infrastructure names. This is the A-share expression of the global AI hardware theme. The ceasefire lifts the broader market but this cluster was already leading.\nNarrative: Persistent and concentrated. Data infrastructure leadership in CSI 300 has held through every regime shift.\n**Materials**\nWhat is leading: Eleven materials in the top quintile \u2014 the largest sector. Key names: China Jushi (600176, #5), Ningxia Baofeng (600989), Salt Lake Industry.\nWhy now: Materials bounced back to 11 names in the top quintile after crashing from 10 to 3 confirmed in the prior session. The confirmed count is lower (3) but the breadth recovered. The ceasefire reduces commodity supply premiums but industrial demand remains.\nNarrative: The materials rebound is a mean-reversion after the prior session\u2019s washout. The survivors are the names with genuine demand drivers, not just commodity price leverage.\n**Nuclear Power**\nWhat is leading: CGN Power (+149.5% EPS CONFIRMED).\nWhy now: Structural baseload power demand. Ceasefire-agnostic.\nNarrative: The one energy sub-theme that doesn\u2019t reverse on peace.",
    synthesis: "CSI 300 in Intermediate Downtrend (+3.49% 1D). 18 confirmed \u2014 down from 21. Materials is the largest sector in the top quintile (11 names). Financials broadening (9 in top quintile). PCB/data holds the top.",
    daily: "**CSI 300 +3.49% on 8 Apr** on the ceasefire rally. The regime remains Intermediate Downtrend but the 1M return improved to -0.99%.\n**PCB/data held the top.** Suzhou TFC (#1), Ningbo Deye (#2), China Merchants Energy (#3). Materials rebounded to 11 names in the top quintile after the prior session\u2019s washout.\n**Financials broadened** to 9 names in the top quintile. State bank rotation continues.\n**Confirmed fell to 18** \u2014 down from 21. The ceasefire rally lifted prices but the confirmation framework hasn\u2019t caught up yet.\n**Net read:** CSI 300 is the laggard \u2014 the only major market still in Intermediate Downtrend. But the top-quintile composition (Materials 11, Financials 9, IT 8) suggests the breadth is there for a regime upgrade."
  },
  "STI": {
    sectors: "**Consumer Staples** \u2014 +10.2% 1M RS, 100% trend pass. Wilmar.\n**Financials** \u2014 +4.3% 1M RS, 100% trend pass. SGX (#4), OCBC (#5).\n**Communication Services** \u2014 -3.2% 1M RS, 100% trend pass.\n**Industrials** \u2014 -3.6% 1M RS, 100% trend pass. ST Engineering (#2, CONFIRMED).\n**Real Estate** \u2014 -4.9% 1M RS, 100% trend pass. HongKong Land (#1).",
    themes: "**Post-War Recovery / Real Estate**\nWhat is leading: HongKong Land (#1), Keppel (#3), ST Engineering (#2) \u2014 the same top 3 as the prior session. Real estate at #1 mirrors HSI (SHK Properties #1).\nWhy now: STI +0.77% on the ceasefire, more muted than other Asian markets. The Rallying regime holds (+4.67% 1M). Real estate leadership confirms the post-war normalisation thesis. The ceasefire removes inflation/rate pressure that was the key overhang.\nNarrative: STI is a macro barometer for Singapore \u2014 a small, trade-dependent economy sensitive to global energy costs. Real estate at #1 is the clearest post-war signal.\n**Defence \u0026 Infrastructure**\nWhat is leading: ST Engineering (#2, CONFIRMED) \u2014 the sole confirmed name. Keppel (#3).\nWhy now: Defence spending is structural. The ceasefire doesn\u2019t reverse the geopolitical reset. Both names sit in the top quintile alongside HongKong Land.\nNarrative: Defence and real estate coexist at the top. The market is pricing both post-war recovery and continued defence procurement.\n**Singapore Bank Acceleration**\nWhat is leading: SGX (#4), OCBC (#5), DBS building. All just outside the top quintile.\nWhy now: The ceasefire removes the oil/inflation headwind. DBS acceleration at +100 is the highest reading in the index. Connects to the pan-Asian financials rotation.\nNarrative: The bank graduation remains the single biggest potential regime change in STI. If DBS and OCBC graduate, confirmed count triples.",
    synthesis: "STI Rallying (+4.67% 1M). Fourteen names, 1 confirmed. HongKong Land #1. The most muted ceasefire reaction (+0.77%) of any Asian market.",
    daily: "**STI +0.77% on 8 Apr** \u2014 the most muted ceasefire rally of any Asian market. Regime holds Rallying at +4.67% 1M.\n**HongKong Land held #1.** ST Engineering (#2, CONFIRMED) and Keppel (#3) stable. The top 3 unchanged.\n**SGX (#4) and OCBC (#5)** continue building but haven\u2019t graduated.\n**Net read:** STI\u2019s muted reaction relative to KOSPI (+6.87%) and TOPIX (+3.32%) reflects Singapore\u2019s lower oil sensitivity. The signal structure is stable. Bank graduation is the key watch."
  },
  "SXXP": {
    sectors: "**Energy** \u2014 +17.1% 1M RS, 100% trend pass. Four in top quintile, all 4 confirmed. War premium peaked and reversing.\n**Utilities** \u2014 +7.5% 1M RS, 100% trend pass. Six in top quintile, 5 confirmed. Perfect breadth.\n**Financials** \u2014 +3.3% 1M RS, 71% trend pass. Eleven in top quintile, 5 confirmed.\n**Communication Services** \u2014 +3.1% 1M RS, 69% trend pass. Six in top quintile.\n**Information Technology** \u2014 +0.8% 1M RS, 38% trend pass. Seven in top quintile, 5 confirmed.\n**Consumer Staples** \u2014 -2.7% 1M RS, 43% trend pass. Seven in top quintile, 2 confirmed.\n**Materials** \u2014 +3.3% 1M RS, 38% trend pass. Six in top quintile, 1 confirmed.\n**Health Care** \u2014 -0.3% 1M RS, 38% trend pass. Six in top quintile, 1 confirmed.\n**Industrials** \u2014 -0.5% 1M RS, 54% trend pass. Fifteen in top quintile, 4 confirmed.\n**Consumer Discretionary** \u2014 -1.4% 1M RS, 21% trend pass. Two in top quintile, 1 confirmed.\n**Real Estate** \u2014 -3.1% 1M RS, 67% trend pass. One in top quintile.",
    themes: "**Green Energy / Electrification**\nWhat is leading: Fifteen industrials in the top quintile \u2014 the largest sector. Key names: Nordex (#1, MS 91.5), Siemens Energy (#2, MS 91), Hochtief (#3), ACS (#4), Sandvik (#5), Prysmian, Vestas.\nWhy now: STOXX 600 surged +3.88% \u2014 DAX +5.06%, CAC +4.49%, each their best day since March 2022. Nordex and Siemens Energy both gained MS points to 91.5 and 91 respectively. The green energy thesis strengthens on the ceasefire: the war proved fossil fuel vulnerability, and the cost of transition just got cheaper with lower oil. Europe is the most oil-sensitive developed market, so the ceasefire is proportionally the biggest positive catalyst for SXXP.\nNarrative: The war accelerated the energy transition thesis. The ceasefire doesn\u2019t reverse it \u2014 it makes the investment case cheaper. Nordex and Siemens Energy are battle-tested leaders.\n**Financials Rotation**\nWhat is leading: Eleven financials in the top quintile, 5 confirmed. Key names: Schroders, HSBC, BCV, ING, Raiffeisen, Beazley, Danske, MBank. Polish/Nordic banks continue generating Sector Rotation signals.\nWhy now: Europe\u2019s financials benefit from the ceasefire via lower oil-driven inflation expectations and ECB flexibility. The confirmed pool rebuilt from 30 to 38 in one session (+27%). The financials rotation is part of the same pan-Asian/global signal.\nNarrative: European financials are repricing rapidly. The confirmed rebound from 30 to 38 shows the breadth is elastic \u2014 the prior session\u2019s contraction was war-fear driven, not structural.\n**Confirmed Rebound**\nWhat happened: Total confirmed rebounded from 30 to 38. The prior session\u2019s crash from 45 to 30 was partially reversed.\nWhy it matters: The rebound confirms that the prior contraction was sentiment-driven, not structural. Industrials recovered from 4 to 4 (held) but the broader pool added 8 names. If oil sustains below $100, the full 45 should be recoverable.\nNarrative: STOXX 600\u2019s confirmed pool is elastic. The war created volatility, not damage, in the signal structure.",
    synthesis: "STOXX 600 shifted to Rallying (+3.12% 1M, +3.88% 1D). Thirty-eight confirmed \u2014 rebounded from 30. DAX\u2019s best day since March 2022. Nordex and Siemens Energy both above MS 91. The ceasefire is the strongest catalyst for Europe.",
    daily: "**STOXX 600 surged +3.88% on 8 Apr** \u2014 DAX +5.06%, CAC +4.49%. Regime shifted to Rallying. Confirmed rebounded from 30 to 38.\n**Nordex (#1, MS 91.5) and Siemens Energy (#2, MS 91)** both at new highs in the screener. Green energy leadership strengthened through the ceasefire rally.\n**European financials rebuilt.** Confirmed pool +27% in one session. Polish/Nordic bank rotation persists.\n**Energy reversing.** +17.1% RS is still the highest sector reading but Exxon/Chevron equivalents fell on the day as oil crashed.\n**Net read:** STOXX 600\u2019s shift to Rallying is the broadest regime upgrade. Thirty-eight confirmed with green energy and financials leading. The ceasefire is proportionally the biggest positive for Europe\u2019s oil-sensitive economy."
  }
,
  "IBOV": {
    sectors: "**Industrials** \u2014 +2.2% 1M RS, 75% trend pass. Four names. WEG (WEGE3, Emerging +96.6). No confirmed.\n**Energy** \u2014 +2.1% 1M RS, 100% trend pass. Three names. Perfect breadth. PRIO (PRIO3, +57.2% EPS CONFIRMED).\n**Utilities** \u2014 -0.7% 1M RS, 100% trend pass. Six names \u2014 largest sector representation. Perfect breadth. Axia Energia (AXIA6, #1). No confirmed.\n**Health Care** \u2014 -0.9% 1M RS, 100% trend pass. One name. Perfect breadth.\n**Financials** \u2014 -1.4% 1M RS, 80% trend pass. Ten names \u2014 broadest sector. B3 (B3SA3, #3 CONFIRMED). 80% trend breadth.\n**Consumer Staples** \u2014 -3.3% 1M RS, 100% trend pass. Ambev. Single name.\n**Communication Services** \u2014 -3.8% 1M RS, 100% trend pass. Telef\u00f4nica Brasil and TIM.\n**Materials** \u2014 -9.1% 1M RS, 50% trend pass. Vale (#2, New Leader CONFIRMED) leads despite sector weakness.",
    themes: "**Commodity / Resource Anchor**\nWhat is leading: Vale (#2, New Leader CONFIRMED, +3.7% EPS) and Petrobras (PETR3 #10, +80.5% EPS). The two heavyweight commodity names anchor the index. Three of the top quintile\u2019s 6 names are Utilities; the rest are Materials (Vale) and Financials (B3, Itausa).\nWhy now: IBOV surged +2.09% on the ceasefire. Brazil\u2019s commodity-heavy index benefits from two angles \u2014 lower oil reduces domestic inflation pressure while iron ore demand from China remains structurally supported. Vale\u2019s graduation to New Leader CONFIRMED is the freshest momentum signal. Petrobras has the most extreme EPS revision in the index (+80.5%) but sits at MS 69 \u2014 not yet in the top quintile.\nNarrative: IBOV\u2019s leadership is resource-driven. The top quintile is dominated by Utilities (3), Financials (2), and Materials (1). Unlike Asian markets where tech/infrastructure leads, Brazil\u2019s signal structure reflects its commodity economy.\n**Brazilian Financials**\nWhat is leading: B3 SA (#3, MS 82.3, +5.2% EPS CONFIRMED), Itausa (#5, MS 73.4), BTG Pactual (#7, MS 72.2), Caixa Seguridade (#12, Emerging). Ten financials in the index \u2014 the broadest sector. Two in the top quintile.\nWhy now: Brazil\u2019s central bank (BCB) has been cutting rates aggressively. The Selic rate fell from 13.75% to current levels, directly benefiting financial names. B3 (the exchange operator, analogous to SGX in STI) benefits from elevated trading volumes during the war. The financials cluster connects to the global rotation \u2014 US (JPM, BAC Accelerating), Asia (Mirae Asset, DBS, state banks), Europe (Polish/Nordic banks).\nNarrative: Financials are the broadest sector in IBOV (10 names) but only 1 is confirmed. The gap between breadth and confirmation mirrors TOPIX financials (91% trend breadth, 0 confirmed). The BCB easing cycle is the structural driver.\n**WEG / Industrials Emergence**\nWhat is leading: WEG SA (WEGE3, #9, Emerging +96.6 acceleration). Localiza (RENT3, #11, Emerging). Four industrials in the index.\nWhy now: WEG is a global electrification play \u2014 electric motors, drives, and transformers. At +96.6 acceleration, it\u2019s the pre-breakout industrial name in Brazil. The connection to the global electrification cluster (VRT/FIX in US, Siemens Energy in Europe, LS Electric in KOSPI) is direct.\nNarrative: WEG is the bridge between IBOV and the global electrification theme. If it graduates from Emerging to leadership, it confirms that the AI/power infrastructure thesis extends to emerging markets.",
    synthesis: "IBOV in Rallying regime (+6.24% 1M). Twenty-nine names after the $10B filter \u2014 small universe. Three confirmed (Vale, B3, PRIO). The commodity anchor and BCB easing cycle are the structural drivers.",
    daily: "**IBOV +2.09% on 8 Apr** on the ceasefire rally. Regime is Rallying (+6.24% 1M).\n**Vale (#2, New Leader CONFIRMED)** leads on momentum. Petrobras (+80.5% EPS) sits at #10 but hasn\u2019t reached the top quintile yet.\n**B3 SA (#3, CONFIRMED)** is the financials anchor. Ten financials in the index but only 1 confirmed \u2014 the breadth/confirmation gap is wide.\n**WEG (WEGE3, Emerging +96.6)** is the highest acceleration in the index. The global electrification connection makes this the key pre-breakout name.\n**Net read:** IBOV is a 29-stock universe, so signal resolution is limited. The three confirmed names (Vale, B3, PRIO) cover commodity, financials, and energy. The BCB rate cutting cycle and the ceasefire are tailwinds. WEG\u2019s emergence is the development to watch."
  }
};

const DEFAULT_CFG = {
  w1m: 0.15, w3m: 0.35, w6m: 0.25, w1y: 0.25,
  minCap: 10,
  hiProx: 0.85, minTrend: 2,
  volAdj: 0.50, ind: 0.50,
  decile: 90, quartile: 75,
  winsorize: 200, accelGate: 30,
  exitThresh: 3, watchThresh: 2,
};

const FOPTS = {
  leader: ["All", "NEW LEADER", "EXISTING LEADER", "FADING LEADER", "\u2014"],
  confirm: ["All", "CONFIRMED", "UNCONFIRMED", "REVISION LEADER", "\u2014"],
  signal: ["All", "EXIT", "WATCH", "EMERGING", "ACCELERATING", "SECTOR ROTATION", "\u2014"],
  trend: ["All", "Pass", "Fail"],
};

// --- Engine (pure JS, identical to JSX version) ------------------------------

function pctRank(arr) {
  const n = arr.length;
  const sorted = arr.map((v, i) => ({ v, i })).sort((a, b) => a.v - b.v);
  const ranks = new Array(n);
  for (let k = 0; k < n; k++) {
    ranks[sorted[k].i] = ((k + 1) / n) * 100;
  }
  return ranks;
}

function computeEngine(rawData, bench, cfg) {
  const W = [cfg.w1m, cfg.w3m, cfg.w6m, cfg.w1y];
  const wSum = W[0] + W[1] + W[2] + W[3];
  const w = W.map(x => x / (wSum || 1));
  const cap = cfg.winsorize / 100;
  const bm = [bench.r1m / 100, bench.r3m / 100, bench.r6m / 100, bench.r1y / 100];

  let stocks = rawData.filter(d => d.mc >= cfg.minCap && d.r1m != null);
  if (stocks.length === 0) return { stocks: [], regime: "No Data", bench: {} };

  stocks = stocks.map(d => {
    const r = [d.r1m, d.r3m, d.r6m, d.r1y].map(v => v != null ? Math.max(-cap, Math.min(cap, v / 100)) : 0);
    const rs = r.map((v, i) => v - bm[i]);
    const vol = Math.max((Math.abs(r[0]) * 12 + Math.abs(r[1]) * 4 + Math.abs(r[2]) * 2) / 3, 0.1);
    const adj = rs.map(v => v / vol);
    return { ...d, r, rs, vol, adj };
  });

  const sectAvg = {};
  stocks.forEach(s => {
    if (!sectAvg[s.s]) sectAvg[s.s] = { sums: [0,0,0,0], n: 0 };
    sectAvg[s.s].n++;
    s.r.forEach((v, i) => sectAvg[s.s].sums[i] += v);
  });
  Object.values(sectAvg).forEach(sa => { sa.avg = sa.sums.map(v => v / sa.n); });
  stocks.forEach(s => {
    s.ind = s.r.map((v, i) => v - (sectAvg[s.s]?.avg[i] || 0));
  });

  const n = stocks.length;
  for (let h = 0; h < 4; h++) {
    const bp = pctRank(stocks.map(s => s.rs[h]));
    const ap = pctRank(stocks.map(s => s.adj[h]));
    const ip = pctRank(stocks.map(s => s.ind[h]));
    stocks.forEach((s, i) => {
      if (!s.bp) { s.bp = []; s.ap = []; s.ip = []; }
      s.bp[h] = bp[i]; s.ap[h] = ap[i]; s.ip[h] = ip[i];
    });
  }

  stocks.forEach(s => {
    s.adjComp = w.reduce((sum, wt, i) => sum + wt * s.ap[i], 0);
    s.indComp = w.reduce((sum, wt, i) => sum + wt * s.ip[i], 0);
    s.ms = cfg.volAdj * s.adjComp + cfg.ind * s.indComp;
  });

  const msP = pctRank(stocks.map(s => s.ms));
  const a1mP = pctRank(stocks.map(s => s.adj[0]));
  stocks.forEach((s, i) => { s.msP = msP[i]; s.a1mP = a1mP[i]; });

  stocks.forEach(s => {
    s.above50 = (s.ma50 != null && s.px > s.ma50) ? 1 : 0;
    s.gc = (s.ma50 != null && s.ma200 != null && s.ma50 > s.ma200) ? 1 : 0;
    s.nearHi = (s.hi52 != null && s.hi52 > 0 && s.px / s.hi52 >= cfg.hiProx) ? 1 : 0;
    s.trendScore = s.above50 + s.gc + s.nearHi;
    s.tr = s.trendScore >= cfg.minTrend ? 1 : 0;
  });

  stocks.forEach(s => {
    if (s.msP >= cfg.decile) {
      s.lf = s.a1mP >= cfg.quartile ? "NEW LEADER" : "EXISTING LEADER";
    } else if (s.msP >= cfg.quartile && s.a1mP < 50) {
      s.lf = "FADING LEADER";
    } else {
      s.lf = "\u2014";
    }
  });

  const epsVals = stocks.filter(s => s.eps != null).map(s => s.eps);
  if (epsVals.length > 0) {
    const epsArr = stocks.map(s => s.eps != null ? s.eps : -9999);
    const epsP = pctRank(epsArr);
    stocks.forEach((s, i) => {
      s.epsP = s.eps != null ? epsP[i] : null;
      if (s.eps == null) { s.cf = "\u2014"; return; }
      if (s.msP >= cfg.quartile && s.epsP >= cfg.quartile) s.cf = "CONFIRMED";
      else if (s.msP >= cfg.quartile && s.epsP < 50) s.cf = "UNCONFIRMED";
      else if (s.epsP >= cfg.quartile && s.msP < 50) s.cf = "REVISION LEADER";
      else s.cf = "\u2014";
    });
  } else {
    stocks.forEach(s => { s.cf = "\u2014"; });
  }

  stocks.forEach(s => { s.accel = s.ap[0] - s.ap[1]; });
  const accP = pctRank(stocks.map(s => s.accel));
  stocks.forEach((s, i) => {
    s.ac = s.msP >= cfg.accelGate ? Math.round(accP[i] * 10) / 10 : null;
  });

  const sectRS1m = {}, sectRS3m = {};
  stocks.forEach(s => {
    if (!sectRS1m[s.s]) { sectRS1m[s.s] = []; sectRS3m[s.s] = []; }
    sectRS1m[s.s].push(s.rs[0]); sectRS3m[s.s].push(s.rs[1]);
  });
  const inflecting = {};
  Object.keys(sectRS1m).forEach(sect => {
    const avg1 = sectRS1m[sect].reduce((a, b) => a + b, 0) / sectRS1m[sect].length;
    const avg3 = sectRS3m[sect].reduce((a, b) => a + b, 0) / sectRS3m[sect].length;
    if (avg1 > 0 && avg3 < 0) inflecting[sect] = true;
  });

  stocks.forEach((s, i) => {
    const mp = s.msP, ap1 = s.a1mP, ac = accP[i];
    if (mp >= 30 && mp < 75 && ap1 >= 60 && ac >= 70 && s.above50 === 1) { s.es = "EMERGING"; return; }
    if (mp >= 30 && mp < 75 && ac >= 80) { s.es = "ACCELERATING"; return; }
    if (inflecting[s.s] && mp >= 30 && ac >= 60 && s.rs[0] > 0) { s.es = "SECTOR ROTATION"; return; }
    s.es = "\u2014";
  });

  stocks.forEach(s => {
    const sigs = (s.above50 === 0 ? 1 : 0) + (s.rs[0] < 0 ? 1 : 0) + (s.accel < 0 ? 1 : 0);
    s.ex = sigs >= cfg.exitThresh ? "EXIT" : sigs >= cfg.watchThresh ? "WATCH" : "HOLD";
  });

  stocks.sort((a, b) => b.ms - a.ms);

  let regime = "Range-Bound";
  const b1 = bench.r1m, b3 = bench.r3m, b6 = bench.r6m, b1y = bench.r1y;
  if (b1 < 0 && b3 < 0 && b6 < 0) regime = "Intermediate Downtrend";
  else if (b1 < -8) regime = b3 > 15 ? "Sharp Pullback in Strong Rally" : b1y > 10 ? "Sharp Pullback in Uptrend" : "Sharp Pullback";
  else if (b1 < -3 && b3 < -3) regime = "Correcting";
  else if (b1 < -3) regime = b1y > 25 ? "Pullback in Strong Uptrend" : b1y > 10 ? "Pullback in Uptrend" : "Pullback";
  else if (b1 > 3) regime = "Rallying";
  if (bench.px && bench.ma200 && bench.px < bench.ma200) regime += " \u2014 Below 200DMA";

  return {
    stocks: stocks.map(s => ({
      t: s.t, c: s.c, s: s.s, px: s.px, mc: Math.round(s.mc * 10) / 10,
      ms: Math.round(s.ms * 10) / 10,
      r1m: Math.round((s.r[0] || 0) * 1000) / 10,
      r3m: Math.round((s.r[1] || 0) * 1000) / 10,
      r6m: Math.round((s.r[2] || 0) * 1000) / 10,
      r1y: Math.round((s.r[3] || 0) * 1000) / 10,
      rs1m: Math.round(s.rs[0] * 1000) / 10,
      rs3m: Math.round(s.rs[1] * 1000) / 10,
      rs6m: Math.round(s.rs[2] * 1000) / 10,
      rs1y: Math.round(s.rs[3] * 1000) / 10,
      eps: s.eps != null ? Math.round(s.eps * 10) / 10 : null,
      tr: s.tr, lf: s.lf, cf: s.cf, es: s.es, ac: s.ac, ex: s.ex,
    })),
    regime,
    bench: { "1D": bench.r1d != null ? Math.round(bench.r1d * 10) / 10 : null, "1M": Math.round(bench.r1m * 10) / 10, "3M": Math.round(bench.r3m * 10) / 10, "6M": Math.round(bench.r6m * 10) / 10, "1Y": Math.round(bench.r1y * 10) / 10 },
  };
}

// --- Helpers ----------------------------------------------------------------

function getSig(r) {
  if (r.ex === "EXIT") return "EXIT";
  if (r.ex === "WATCH") return "WATCH";
  if (r.es && r.es !== "\u2014") return r.es;
  return "\u2014";
}

// --- State -------------------------------------------------------------------

const state = {
  mkt: "R1000",
  sCol: "ms",
  sDir: "desc",
  fl: { sector: "All", leader: "All", confirm: "All", signal: "All", trend: "All", q: "" },
  showC: true,
  tab: "screener",
  cfg: { ...DEFAULT_CFG },
};

let engineCache = null;

function getEngine() {
  const raw = RAW[state.mkt];
  if (!raw) return { stocks: [], regime: "No Data", bench: {} };
  return computeEngine(raw.data, raw.bench, state.cfg);
}

function getFiltered(engine) {
  let d = [...engine.stocks];
  const fl = state.fl;
  if (fl.sector !== "All") d = d.filter(r => r.s === fl.sector);
  if (fl.leader !== "All") d = d.filter(r => r.lf === fl.leader);
  if (fl.confirm !== "All") d = d.filter(r => r.cf === fl.confirm);
  if (fl.signal !== "All") d = d.filter(r => getSig(r) === fl.signal);
  if (fl.trend !== "All") d = d.filter(r => fl.trend === "Pass" ? r.tr === 1 : r.tr === 0);
  if (fl.q) { const s = fl.q.toUpperCase(); d = d.filter(r => r.t.toUpperCase().includes(s) || r.c.toUpperCase().includes(s)); }
  d.sort((a, b) => { const va = a[state.sCol] ?? -Infinity; const vb = b[state.sCol] ?? -Infinity; return state.sDir === "desc" ? vb - va : va - vb; });
  return d;
}


// --- HTML Helpers -----------------------------------------------------------

function esc(s) { if (s == null) return ""; return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
function fmtMc(v) { if (v == null) return "\u2014"; if (v >= 1000) return (v/1000).toFixed(1)+"T"; return v.toFixed(0)+"B"; }
function pctHtml(v, bold) {
  if (v == null) return '<span class="text-n-300">\u2014</span>';
  const c = v > 0 ? "text-emerald-600" : v < 0 ? "text-red-500" : "text-n-400";
  const w = bold && Math.abs(v) > 5 ? " font-semibold" : "";
  return '<span class="font-mono '+c+w+'">'+(v > 0?"+":"")+v.toFixed(1)+'%</span>';
}
function scoreHtml(v) { if (v == null) return '<span class="text-n-300">\u2014</span>'; return '<span class="font-mono text-n-700">'+v.toFixed(1)+'</span>'; }
function badgeHtml(label) {
  if (!label || label === "\u2014") return "";
  var map = {"NEW LEADER":["NEW","badge-green"],"EXISTING LEADER":["EXISTING","badge-blue"],"FADING LEADER":["FADING","badge-amber"],"CONFIRMED":["CONFIRMED","badge-green"],"UNCONFIRMED":["UNCONF","badge-red"],"REVISION LEADER":["REV LDR","badge-violet"],"EXIT":["EXIT","badge-red"],"WATCH":["WATCH","badge-amber"],"EMERGING":["EMERGING","badge-sky"],"ACCELERATING":["ACCEL","badge-blue"],"SECTOR ROTATION":["SECT ROT","badge-violet"]};
  var m = map[label]; if (!m) return "";
  return '<span class="badge '+m[1]+'">'+m[0]+'</span>';
}
function boldTextHtml(s) { return s ? s.replace(/\n/g,"<br>").replace(/\*\*(.+?)\*\*/g,"<strong>$1</strong>") : ""; }
function sortArrow(col) { return state.sCol === col ? (state.sDir === "desc" ? " \u25BC" : " \u25B2") : ""; }

// --- Render -----------------------------------------------------------------

function renderTabButtons() {
  document.querySelectorAll("#nav-tabs .tab-btn").forEach(function(btn) {
    var id = btn.id.replace("tab-","");
    if (id === state.tab) { btn.classList.add("active"); } else { btn.classList.remove("active"); }
  });
  document.getElementById("config-panel").classList.toggle("hidden", state.tab !== "config");
  document.getElementById("guide-panel").classList.toggle("hidden", state.tab !== "guide");
  document.getElementById("screener-panel").classList.toggle("hidden", state.tab !== "screener");
}

function renderRegime(engine) {
  var el = document.getElementById("regime-bar");
  var html = '<div><div class="cmt-label" style="margin-bottom:2px">Regime</div><div class="text-[14px] font-semibold text-n-900">'+esc(engine.regime)+'</div></div>';
  var entries = Object.entries(engine.bench);
  for (var i = 0; i < entries.length; i++) {
    var k = entries[i][0], v = entries[i][1];
    if (v == null) { html += '<div class="text-center"><div class="text-[10px] text-n-400 font-medium">'+k+'</div><div class="text-[13px] font-mono text-n-300">\u2014</div></div>'; }
    else { var c = v >= 0 ? "text-emerald-600" : "text-red-500"; html += '<div class="text-center"><div class="text-[10px] text-n-400 font-medium">'+k+'</div><div class="text-[13px] font-mono font-semibold '+c+'">'+(v>=0?"+":"")+v.toFixed(1)+'%</div></div>'; }
  }
  html += '<div class="flex-1"></div>';
  html += '<button id="toggle-commentary" class="text-[11px] text-n-400 hover:text-n-700 transition-colors">'+(state.showC ? "Hide analysis" : "Show analysis")+'</button>';
  el.innerHTML = html;
}

function renderRegimeStrip() {
  var el = document.getElementById("regime-strip");
  if (!el) return;
  var mkts = ["CSI300","HSI","IBOV","KOSPI","R1000","STI","SXXP","TOPIX"];
  var html = '<div class="flex gap-4 overflow-x-auto">';
  for (var mi = 0; mi < mkts.length; mi++) {
    var mkt = mkts[mi];
    var raw = RAW[mkt]; if (!raw) continue;
    var eng = computeEngine(raw.data, raw.bench, state.cfg);
    var nw = 0, fd = 0, cf = 0;
    for (var si = 0; si < eng.stocks.length; si++) { if (eng.stocks[si].lf==="NEW LEADER") nw++; if (eng.stocks[si].lf==="FADING LEADER") fd++; if (eng.stocks[si].cf==="CONFIRMED") cf++; }
    var delta = nw - fd;
    var isSel = mkt === state.mkt;
    var rawMap = {}; for (var di = 0; di < raw.data.length; di++) { if (raw.data[di].t) rawMap[raw.data[di].t] = raw.data[di]; }
    var a50 = 0, a200 = 0, tot = eng.stocks.length;
    for (var si2 = 0; si2 < eng.stocks.length; si2++) { var rr = rawMap[eng.stocks[si2].t]; if (rr && rr.px != null && rr.ma50 != null && rr.px > rr.ma50) a50++; if (rr && rr.px != null && rr.ma200 != null && rr.px > rr.ma200) a200++; }
    var pct50 = tot > 0 ? (a50/tot)*100 : 0, pct200 = tot > 0 ? (a200/tot)*100 : 0;
    var regCol = "bg-red-400";
    if (eng.regime.indexOf("Strong Uptrend") >= 0 || eng.regime.indexOf("Rallying") >= 0) regCol = "bg-emerald-400";
    else if (eng.regime.indexOf("Uptrend") >= 0 || eng.regime.indexOf("Strong Rally") >= 0) regCol = "bg-emerald-400";
    else if (eng.regime.indexOf("Pullback") >= 0) regCol = "bg-amber-400";
    var deltaCol = delta > 0 ? "text-emerald-600" : delta < 0 ? "text-red-500" : "text-n-400";
    var deltaArrow = delta > 0 ? "\u25B2" : delta < 0 ? "\u25BC" : "";
    var sel = isSel ? "border border-n-300 bg-n-50 rounded-lg px-3" : "border border-n-100 rounded-lg px-3 hover:border-n-200 hover:bg-n-50";

    html += '<button data-regime-mkt="'+esc(mkt)+'" class="flex-shrink-0 py-2 '+sel+' cursor-pointer transition-all text-left" style="min-width:180px">';
    html += '<div class="flex items-center justify-between mb-1"><div class="flex items-center gap-1.5"><span class="w-1.5 h-1.5 rounded-full '+regCol+'"></span><span class="text-[12px] font-semibold text-n-900">'+esc(MARKET_LABELS[mkt])+'</span></div>';
    html += '<div class="flex items-center gap-1"><span class="text-[11px] font-bold text-n-800 font-mono">'+cf+'</span><span class="text-[10px] text-n-400 font-mono">/'+tot+'</span><span class="text-[9px] font-bold '+deltaCol+'">'+deltaArrow+Math.abs(delta)+'</span></div></div>';
    html += '<div class="text-[9px] text-n-400 uppercase tracking-[0.06em] mb-0.5">Breadth</div>';
    // >50D bar
    var col50 = pct50>=60?"bg-emerald-400":pct50>=40?"bg-amber-400":"bg-red-400";
    var tc50 = pct50>=60?"text-emerald-600":pct50>=40?"text-amber-600":"text-red-500";
    html += '<div class="flex items-center gap-1.5"><span class="text-[9px] text-n-400 w-7 text-right">>50D</span><div class="bar-track" style="min-width:50px"><div class="bar-fill '+col50+'" style="width:'+pct50+'%"></div></div><span class="text-[9px] font-mono font-medium '+tc50+' w-7 text-right">'+pct50.toFixed(0)+'%</span></div>';
    // >200D bar
    var col200 = pct200>=60?"bg-emerald-400":pct200>=40?"bg-amber-400":"bg-red-400";
    var tc200 = pct200>=60?"text-emerald-600":pct200>=40?"text-amber-600":"text-red-500";
    html += '<div class="flex items-center gap-1.5"><span class="text-[9px] text-n-400 w-7 text-right">>200D</span><div class="bar-track" style="min-width:50px"><div class="bar-fill '+col200+'" style="width:'+pct200+'%"></div></div><span class="text-[9px] font-mono font-medium '+tc200+' w-7 text-right">'+pct200.toFixed(0)+'%</span></div>';
    html += '</button>';
  }
  html += '</div>';
  el.innerHTML = html;
}

// --- Sector Heatmap ---------------------------------------------------------

function parseSectorCommentary(cmtText) {
  if (!cmtText) return {};
  var map = {};
  var chunks = cmtText.split(/\n\*\*/);
  for (var i = 0; i < chunks.length; i++) {
    var text = i === 0 ? chunks[i] : "**" + chunks[i];
    var m = text.match(/^\*\*([^*]+)\*\*/); if (!m) continue;
    var label = m[1].trim().replace(/\s*\u2014.*$/, "");
    var gicsMap = {"Energy":"Energy","Info Tech":"Information Technology","Information Technology":"Information Technology","Utilities":"Utilities","Financials":"Financials","Materials":"Materials","Health Care":"Health Care","Industrials":"Industrials","Real Estate":"Real Estate","Consumer Discretionary":"Consumer Discretionary","Consumer Disc":"Consumer Discretionary","Consumer Staples":"Consumer Staples","Communication Services":"Communication Services","Comm Services":"Communication Services","Communication Services and Info Tech":null,"Communication Services and Information Technology":null};
    var gics = gicsMap[label];
    if (gics === undefined) { var all = ["Energy","Materials","Industrials","Consumer Discretionary","Consumer Staples","Health Care","Financials","Information Technology","Communication Services","Utilities","Real Estate"]; for (var j = 0; j < all.length; j++) { if (all[j].toLowerCase().indexOf(label.toLowerCase().substring(0,8)) === 0 || label.toLowerCase().indexOf(all[j].toLowerCase().substring(0,8)) === 0) { gics = all[j]; break; } } }
    if (gics) { map[gics] = text.replace(/^\*\*[^*]+\*\*\s*[\u2014\-]\s*/, "").trim(); }
  }
  return map;
}

var _sectorSortOrder = [];

function renderSectorHeatmap() {
  var el = document.getElementById("sector-heatmap");
  if (!el || !engineCache) { if (el) el.innerHTML = ""; return; }
  if (!state.showC) { el.innerHTML = ""; return; }
  var stocks = engineCache.stocks;
  var sectors = {};
  for (var i = 0; i < stocks.length; i++) {
    var s = stocks[i]; if (!s.s) continue;
    if (!sectors[s.s]) sectors[s.s] = {n:0,rs1m:[],rs3m:[],above50:0,conf:0};
    var sec = sectors[s.s]; sec.n++; sec.rs1m.push(s.rs1m); sec.rs3m.push(s.rs3m);
    if (s.tr) sec.above50++; if (s.cf === "CONFIRMED") sec.conf++;
  }
  var rows = [];
  var entries = Object.entries(sectors);
  for (var i2 = 0; i2 < entries.length; i2++) {
    var name = entries[i2][0], d = entries[i2][1];
    rows.push({name:name, n:d.n, rs1m:d.rs1m.reduce(function(a,b){return a+b;},0)/d.n, rs3m:d.rs3m.reduce(function(a,b){return a+b;},0)/d.n, trend:(d.above50/d.n)*100, conf:d.conf});
  }
  if (!state._hmSort) state._hmSort = {col:"rs1m",dir:"desc"};
  var sc = state._hmSort;
  rows.sort(function(a,b) { var va=a[sc.col],vb=b[sc.col]; if(va==null)va=-999;if(vb==null)vb=-999; if(typeof va==="string")return sc.dir==="asc"?va.localeCompare(vb):vb.localeCompare(va); return sc.dir==="desc"?vb-va:va-vb; });
  var maxRs = 5, maxRs3 = 5;
  for (var i3 = 0; i3 < rows.length; i3++) { if (Math.abs(rows[i3].rs1m) > maxRs) maxRs = Math.abs(rows[i3].rs1m); if (Math.abs(rows[i3].rs3m) > maxRs3) maxRs3 = Math.abs(rows[i3].rs3m); }
  var activeSector = state.fl.sector !== "All" ? state.fl.sector : null;
  _sectorSortOrder = rows.map(function(r){return r.name;});
  var cmt = COMMENTARY[state.mkt] || {};
  var sectorCmt = state.showC ? parseSectorCommentary(cmt.sectors) : {};
  var showCmt = state.showC;

  function sHdr(label,col,align) { var arrow = sc.col===col?(sc.dir==="desc"?" \u25BC":" \u25B2"):""; return '<th data-hm-sort="'+col+'" class="'+(align||"text-left")+'">'+label+arrow+'</th>'; }

  var html = '<table class="hm-table">';
  if (showCmt) { html += '<colgroup><col style="width:18%"><col style="width:10%"><col style="width:10%"><col style="width:10%"><col style="width:2%"><col style="width:50%"></colgroup>'; }
  else { html += '<colgroup><col style="width:22%"><col style="width:24%"><col style="width:24%"><col style="width:24%"><col style="width:6%"></colgroup>'; }
  html += '<thead><tr>';
  html += sHdr("Sector","name","text-left");
  html += sHdr("1M RS","rs1m","text-left");
  html += sHdr("3M RS","rs3m","text-left");
  html += sHdr("Trend","trend","text-left");
  html += '<th></th>';
  if (showCmt) html += '<th class="text-left" style="border-left:1px solid #e5e5e5">Commentary</th>';
  html += '</tr></thead><tbody>';

  for (var ri = 0; ri < rows.length; ri++) {
    var r = rows[ri];
    var isActive = activeSector === r.name;
    var inflect = r.rs1m > 0 && r.rs3m < 0;
    var rsPct = Math.min(Math.abs(r.rs1m)/maxRs*50,50);
    var rsPos = r.rs1m >= 0;
    var rsCol = rsPos ? "bg-emerald-400" : "bg-red-400";
    var rsLeft = rsPos ? "50%" : (50-rsPct)+"%";
    var rs3Pct = Math.min(Math.abs(r.rs3m)/maxRs3*50,50);
    var rs3Pos = r.rs3m >= 0;
    var rs3Col = rs3Pos ? "bg-emerald-400" : "bg-red-400";
    var rs3Left = rs3Pos ? "50%" : (50-rs3Pct)+"%";
    var tPct = r.trend;
    var tCol = tPct >= 60 ? "bg-emerald-400" : tPct >= 40 ? "bg-amber-400" : "bg-red-400";

    html += '<tr data-hm-sector="'+esc(r.name)+'" class="'+(isActive?"active":"")+'">';
    html += '<td><div class="text-[13px] font-medium text-n-800">'+esc(r.name)+'</div><div class="text-[11px] text-n-400">'+r.n+'</div></td>';
    html += '<td><div class="flex items-center gap-1.5"><div class="bar-track"><div class="bar-center"></div><div class="bar-fill '+rsCol+'" style="left:'+rsLeft+';width:'+rsPct+'%"></div></div><span class="text-[11px] font-mono font-medium '+(rsPos?"text-emerald-600":"text-red-500")+' w-10 text-right shrink-0">'+(r.rs1m>=0?"+":"")+r.rs1m.toFixed(1)+'%</span></div></td>';
    html += '<td><div class="flex items-center gap-1.5"><div class="bar-track"><div class="bar-center"></div><div class="bar-fill '+rs3Col+'" style="left:'+rs3Left+';width:'+rs3Pct+'%"></div></div><span class="text-[11px] font-mono font-medium '+(rs3Pos?"text-emerald-600":"text-red-500")+' w-10 text-right shrink-0">'+(r.rs3m>=0?"+":"")+r.rs3m.toFixed(1)+'%</span></div></td>';
    html += '<td><div class="flex items-center gap-1.5"><div class="bar-track"><div class="bar-fill '+tCol+'" style="width:'+tPct+'%"></div></div><span class="text-[10px] font-mono font-medium text-n-400 w-7 text-right shrink-0">'+tPct.toFixed(0)+'%</span></div></td>';
    html += '<td class="text-center">'+(inflect?'<span class="text-amber-500 text-[10px]" title="Inflecting">\u21BB</span>':'')+'</td>';
    if (showCmt) {
      var body = sectorCmt[r.name];
      html += '<td style="border-left:1px solid #f5f5f5" class="align-top"><div class="cmt-text" style="font-size:11px">'+(body?boldTextHtml(body):'<span class="text-n-300">\u2014</span>')+'</div></td>';
    }
    html += '</tr>';
  }
  html += '</tbody></table>';
  el.innerHTML = html;
}

// --- Commentary -------------------------------------------------------------

function renderCommentary() {
  var cmt = COMMENTARY[state.mkt] || {};
  var dp = document.getElementById("daily-panel");
  if (dp) {
    if (!state.showC || !cmt.daily) { dp.innerHTML = ""; }
    else { dp.innerHTML = '<div class="border-t-2 border-n-900 pt-6"><div class="cmt-label" style="color:#171717">Price Action \u2014 8 Apr</div><div class="cmt-text" style="font-size:13px">'+boldTextHtml(cmt.daily)+'</div></div>'; }
  }
  var el = document.getElementById("commentary");
  if (!state.showC) { el.innerHTML = ""; return; }
  el.innerHTML = cmt.themes ? '<div class="border-t border-n-200 pt-6"><div class="cmt-label" style="color:#171717">Thematic Clusters</div><div class="cmt-text" style="font-size:13px">'+boldTextHtml(cmt.themes)+'</div></div>' : '';
}

// --- Filters ----------------------------------------------------------------

function renderFilters() {
  var fl = state.fl;
  function sel(key,label,opts) {
    var h = '<select data-filter="'+key+'" class="filter-input">';
    for (var i = 0; i < opts.length; i++) { var o = opts[i]; h += '<option value="'+esc(o)+'" '+(fl[key]===o?"selected":"")+'>'+(o==="All"?label:o==="\u2014"?"None":esc(o))+'</option>'; }
    return h + '</select>';
  }
  var sectorSet = {};
  if (engineCache) { for (var i = 0; i < engineCache.stocks.length; i++) { var s = engineCache.stocks[i].s; if (s) sectorSet[s] = 1; } }
  var sectorOpts = ["All"].concat(Object.keys(sectorSet).sort());
  document.getElementById("filter-bar").innerHTML =
    '<input type="text" id="search-input" placeholder="Search\u2026" value="'+esc(fl.q)+'" class="filter-input w-32" />' +
    sel("sector","Sector",sectorOpts) +
    sel("leader","Leader",FOPTS.leader) +
    sel("confirm","Confirm",FOPTS.confirm) +
    sel("signal","Signal",FOPTS.signal) +
    sel("trend","Trend",FOPTS.trend) +
    '<button id="clear-filters" class="text-[11px] text-n-400 hover:text-n-700 transition-colors ml-1">Clear</button>';
}

// --- Table ------------------------------------------------------------------

function renderTable(filtered, totalCount) {
  var cols = [
    {key:"t",label:"Ticker",align:"left",sort:true,w:88},{key:"c",label:"Company",align:"left",w:130},{key:"s",label:"Sector",align:"left",w:120},
    {key:"px",label:"Last Price",align:"center",sort:true,w:82},{key:"mc",label:"Mkt Cap (US$)",align:"center",sort:true,w:88},
    {key:"r1m",label:"1M",align:"center",sort:true,w:62},{key:"r3m",label:"3M",align:"center",sort:true,w:62},{key:"eps",label:"Est. EPS \u0394",align:"center",sort:true,w:72},
    {key:"rs1m",label:"RS 1M",align:"center",sort:true,w:64},{key:"rs3m",label:"RS 3M",align:"center",sort:true,w:64},{key:"rs6m",label:"RS 6M",align:"center",sort:true,w:64},{key:"rs1y",label:"RS 1Y",align:"center",sort:true,w:64},
    {key:"ms",label:"Master",align:"center",sort:true,w:62},{key:"ac",label:"Accel",align:"center",sort:true,w:62},{key:"tr",label:"Trend",align:"center",w:46},
    {key:"lf",label:"Leader",align:"center",w:90},{key:"cf",label:"Confirm",align:"center",w:90},{key:"sig",label:"Signal",align:"center",w:90},
  ];
  var cg = '<colgroup>'; for (var i = 0; i < cols.length; i++) { cg += '<col style="width:'+cols[i].w+'px">'; } cg += '</colgroup>';
  var thead = '<thead><tr>';
  for (var i2 = 0; i2 < cols.length; i2++) {
    var col = cols[i2];
    if (col.sort) { thead += '<th data-sortable data-col="'+col.key+'" class="text-'+col.align+' cursor-pointer">'+col.label+sortArrow(col.key)+'</th>'; }
    else { thead += '<th class="text-'+col.align+'">'+col.label+'</th>'; }
  }
  thead += '</tr></thead>';
  var rws = filtered.slice(0,200);
  var tbody = '<tbody>';
  if (rws.length === 0) { tbody += '<tr><td colspan="'+cols.length+'" class="px-6 py-12 text-center text-n-400 text-sm">No stocks match current filters</td></tr>'; }
  else {
    for (var idx = 0; idx < rws.length; idx++) {
      var r = rws[idx];
      var sig = getSig(r);
      var mcStr = r.mc >= 1000 ? (r.mc/1000).toFixed(1)+"T" : r.mc.toFixed(0)+"B";
      var pxStr = r.px != null ? r.px.toLocaleString(undefined,{minimumFractionDigits:r.px<10?2:r.px<1000?1:0,maximumFractionDigits:r.px<10?2:r.px<1000?1:0}) : "\u2014";
      var trStr = r.tr === 1 ? '<span class="text-emerald-500">\u2713</span>' : '<span class="text-n-300">\u2014</span>';
      tbody += '<tr>';
      tbody += '<td class="text-left font-mono font-semibold text-n-900">'+esc(r.t)+'</td>';
      tbody += '<td class="text-left text-n-500 truncate" style="max-width:130px">'+esc(r.c)+'</td>';
      tbody += '<td class="text-left text-n-500 truncate" style="max-width:120px">'+esc(r.s)+'</td>';
      tbody += '<td class="text-center font-mono text-n-600">'+pxStr+'</td>';
      tbody += '<td class="text-center font-mono text-n-600">'+mcStr+'</td>';
      tbody += '<td class="text-center">'+pctHtml(r.r1m,true)+'</td>';
      tbody += '<td class="text-center">'+pctHtml(r.r3m,true)+'</td>';
      tbody += '<td class="text-center">'+pctHtml(r.eps,true)+'</td>';
      tbody += '<td class="text-center">'+pctHtml(r.rs1m,true)+'</td>';
      tbody += '<td class="text-center">'+pctHtml(r.rs3m,true)+'</td>';
      tbody += '<td class="text-center">'+pctHtml(r.rs6m,true)+'</td>';
      tbody += '<td class="text-center">'+pctHtml(r.rs1y,true)+'</td>';
      tbody += '<td class="text-center">'+scoreHtml(r.ms)+'</td>';
      tbody += '<td class="text-center">'+scoreHtml(r.ac)+'</td>';
      tbody += '<td class="text-center">'+trStr+'</td>';
      tbody += '<td class="text-center">'+badgeHtml(r.lf)+'</td>';
      tbody += '<td class="text-center">'+badgeHtml(r.cf)+'</td>';
      tbody += '<td class="text-center">'+badgeHtml(sig)+'</td>';
      tbody += '</tr>';
    }
  }
  tbody += '</tbody>';
  document.getElementById("data-table").innerHTML = cg + thead + tbody;
  document.getElementById("table-footer").innerHTML = 'Showing '+filtered.length+' of '+totalCount+' \u2002\u00b7\u2002'+MARKET_LABELS[state.mkt]+' \u2002\u00b7\u2002Min cap US$'+state.cfg.minCap+'B';
}

// --- Config -----------------------------------------------------------------

function renderConfig() {
  var fields = [{key:"w1m",label:"1M Weight",step:0.05},{key:"w3m",label:"3M Weight",step:0.05},{key:"w6m",label:"6M Weight",step:0.05},{key:"w1y",label:"1Y Weight",step:0.05},{key:"minCap",label:"Min Market Cap ($B)",step:1},{key:"hiProx",label:"52W High Proximity (%)",step:0.05},{key:"minTrend",label:"Trend Signals Required",step:1},{key:"volAdj",label:"Volatility Adjustment",step:0.1},{key:"ind",label:"Industry Relative Weight",step:0.1},{key:"decile",label:"Leader Threshold (%)",step:5},{key:"quartile",label:"Confirm Threshold (%)",step:5},{key:"winsorize",label:"Winsorize Cap (%)",step:50},{key:"accelGate",label:"Acceleration Gate (%)",step:5},{key:"exitThresh",label:"Exit Signals Required",step:1},{key:"watchThresh",label:"Watch Signals Required",step:1}];
  var html = '<div class="grid grid-cols-2 gap-4">';
  for (var i = 0; i < fields.length; i++) { var f = fields[i]; html += '<div><label class="text-[11px] text-n-400 block mb-1">'+f.label+'</label><input type="number" data-cfg="'+f.key+'" value="'+state.cfg[f.key]+'" step="'+f.step+'" class="cfg-input"/></div>'; }
  html += '</div>';
  document.getElementById("cfg-body").innerHTML = html;
}

// --- Main -------------------------------------------------------------------

function render() {
  renderTabButtons();
  renderRegimeStrip();
  if (state.tab === "config") { renderConfig(); }
  var engine = getEngine();
  engineCache = engine;
  if (state.tab === "screener") {
    renderRegime(engine);
    renderSectorHeatmap();
    renderCommentary();
    renderFilters();
    var filtered = getFiltered(engine);
    renderTable(filtered, engine.stocks.length);
  }
}

// --- Events -----------------------------------------------------------------

document.addEventListener("click", function(e) {
  var btn = e.target.closest("button"); if (!btn) return;
  if (btn.dataset.regimeMkt) { state.mkt=btn.dataset.regimeMkt; state.tab="screener"; state.fl={sector:"All",leader:"All",confirm:"All",signal:"All",trend:"All",q:""}; state._hmSort={col:"rs1m",dir:"desc"}; render(); return; }
  if (btn.dataset.mkt) { state.mkt=btn.dataset.mkt; state.tab="screener"; state.fl={sector:"All",leader:"All",confirm:"All",signal:"All",trend:"All",q:""}; state._hmSort={col:"rs1m",dir:"desc"}; render(); return; }
  if (btn.id==="tab-screener") { state.tab="screener"; render(); return; }
  if (btn.id==="tab-config") { state.tab="config"; render(); return; }
  if (btn.id==="tab-guide") { state.tab="guide"; render(); return; }
  if (btn.id==="toggle-commentary") { state.showC=!state.showC; renderRegime(engineCache); renderSectorHeatmap(); renderCommentary(); return; }
  if (btn.id==="clear-filters") { state.fl={sector:"All",leader:"All",confirm:"All",signal:"All",trend:"All",q:""}; renderFilters(); renderSectorHeatmap(); var filtered=getFiltered(engineCache); renderTable(filtered,engineCache.stocks.length); return; }
  if (btn.id==="cfg-reset") { state.cfg={w1m:DEFAULT_CFG.w1m,w3m:DEFAULT_CFG.w3m,w6m:DEFAULT_CFG.w6m,w1y:DEFAULT_CFG.w1y,minCap:DEFAULT_CFG.minCap,hiProx:DEFAULT_CFG.hiProx,minTrend:DEFAULT_CFG.minTrend,volAdj:DEFAULT_CFG.volAdj,ind:DEFAULT_CFG.ind,decile:DEFAULT_CFG.decile,quartile:DEFAULT_CFG.quartile,winsorize:DEFAULT_CFG.winsorize,accelGate:DEFAULT_CFG.accelGate,exitThresh:DEFAULT_CFG.exitThresh,watchThresh:DEFAULT_CFG.watchThresh}; render(); return; }
});
document.addEventListener("click", function(e) { var th=e.target.closest("th[data-sortable]"); if(!th)return; var col=th.dataset.col; if(state.sCol===col){state.sDir=state.sDir==="desc"?"asc":"desc";}else{state.sCol=col;state.sDir="desc";} var filtered=getFiltered(engineCache); renderTable(filtered,engineCache.stocks.length); });
document.addEventListener("click", function(e) { var th=e.target.closest("th[data-hm-sort]"); if(!th)return; var col=th.dataset.hmSort; if(!state._hmSort)state._hmSort={col:"rs1m",dir:"desc"}; if(state._hmSort.col===col){state._hmSort.dir=state._hmSort.dir==="desc"?"asc":"desc";}else{state._hmSort={col:col,dir:"desc"};} renderSectorHeatmap(); renderCommentary(); });
document.addEventListener("click", function(e) { var row=e.target.closest("[data-hm-sector]"); if(!row||row.tagName==="TH")return; var sector=row.dataset.hmSector; state.fl.sector=state.fl.sector===sector?"All":sector; renderSectorHeatmap(); renderFilters(); var filtered=getFiltered(engineCache); renderTable(filtered,engineCache.stocks.length); });
document.addEventListener("change", function(e) { if(e.target.dataset.filter){state.fl[e.target.dataset.filter]=e.target.value;renderSectorHeatmap();var filtered=getFiltered(engineCache);renderTable(filtered,engineCache.stocks.length);return;} if(e.target.dataset.cfg){state.cfg[e.target.dataset.cfg]=parseFloat(e.target.value)||0;render();return;} });
document.addEventListener("input", function(e) { if(e.target.id==="search-input"){state.fl.q=e.target.value;var filtered=getFiltered(engineCache);renderTable(filtered,engineCache.stocks.length);return;} if(e.target.dataset.cfg){var val=parseFloat(e.target.value);if(!isNaN(val)){state.cfg[e.target.dataset.cfg]=val;var engine=getEngine();engineCache=engine;if(state.tab==="screener"){renderRegime(engine);var filtered2=getFiltered(engine);renderTable(filtered2,engine.stocks.length);}}} });

// --- Init -------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function() { render(); });
if (document.readyState !== "loading") { render(); }
