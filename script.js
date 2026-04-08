// ============================================================================
// RELATIVE STRENGTH SCREENER — Static Site Build
// Vanilla JS, no React, no build step
// ============================================================================

// --- Constants ---------------------------------------------------------------

const MARKET_LABELS = {"CSI300":"CSI 300","HSI":"Hang Seng","KOSPI":"KOSPI","R1000":"Russell 1000","STI":"STI","SXXP":"STOXX 600","TOPIX":"TOPIX"};

const COMMENTARY = {
  "R1000": {
    sectors: "**Energy** \u2014 +9.1% 1M RS, 94% trend pass. Eight confirmed. The strongest sector but faces reversal risk after the post-close ceasefire.\n**Information Technology** \u2014 +3.1% 1M RS, 41% trend pass. Twenty-two confirmed. Trend improved from 35% to 41% over the week.\n**Materials** \u2014 +2.5% 1M RS, 51% trend pass. Six confirmed.\n**Utilities** \u2014 +1.8% 1M RS, 86% trend pass. Three confirmed \u2014 up from zero.\n**Health Care** \u2014 -0.3% 1M RS, 37% trend pass. Two confirmed.\n**Communication Services** \u2014 -0.4% 1M RS, 40% trend pass. One confirmed.\n**Financials** \u2014 -0.5% 1M RS, 39% trend pass. Eleven confirmed \u2014 surged from five.\n**Real Estate** \u2014 -1.5% 1M RS, 59% trend pass. Four confirmed.\n**Industrials** \u2014 -1.6% 1M RS, 52% trend pass. Ten confirmed.\n**Consumer Staples** \u2014 -2.2% 1M RS, 40% trend pass. Three confirmed.\n**Consumer Discretionary** \u2014 -3.0% 1M RS, 27% trend pass. Seven confirmed.",
    themes: "**AI / Data Infrastructure**\nWhat is leading: The full data centre stack \u2014 optics, test and measurement, storage, memory, semicap, and server assembly. Twenty-nine IT names sit in the top quintile, 21 of them confirmed. Key names: COHR, MKSI, TER, MTSI, AMAT, WDC, SNDK, KEYS, UI, LITE, CIEN, LRCX, MU, KLAC, JBL, LSCC, MPWR, ENTG, ONTO, ADI, DELL.\nWhy now: The market has moved past the first-order GPU trade and is repricing the rest of the hardware stack. Twenty-two confirmed IT names is the deepest sector pool in the index, and breadth is still widening \u2014 trend pass improved from 35% to 41% this week. Broadcom\u2019s expanded AI collaboration with Anthropic reinforces the thesis.\nNarrative: This is the picks-and-shovels of AI deployment. The breadth and depth of confirmation (21 of 29 top-quintile IT names are confirmed) is unlike any other theme in any market. This isn\u2019t a few leaders \u2014 the entire stack is participating.\n**Electrification / Power Infrastructure**\nWhat is leading: Power delivery, cooling, grid equipment, and electrical construction. Twenty-eight industrials sit in the top quintile. Key names: VRT, FIX, CW, GEV, MTZ, WWD, PWR, EME, NVT, HUBB, BWXT.\nWhy now: AI build-out is shifting from chips to physical bottlenecks. The same theme runs through TOPIX (Fujikura, Furukawa), KOSPI (LS Electric, Hyosung Heavy), and STOXX 600 (Siemens Energy, Prysmian). Demand is tied to real build cycles, not sentiment.\nNarrative: The market is pricing AI as an infrastructure story. The top quintile has 28 industrials with 8 confirmed \u2014 the second-deepest pool after IT.\n**Financials Rotation**\nWhat is leading: Banks, capital markets, and insurance. Nineteen financials sit in the top quintile, 8 confirmed. Confirmed count jumped from 5 to 11 in one session. Key names: WBS, XP, CFG, RNR, NTRS, BK, CBOE, C, CME, MTB, STT, USB, GS. Beyond the top quintile, a massive Accelerating pipeline: JPM, BAC, WFC all above +98 acceleration.\nWhy now: The improving labour market (March +178K) and the post-close ceasefire remove the two key overhangs simultaneously. This connects to the pan-Asian financials rotation: KOSPI (Mirae Asset), China (state banks), Singapore (DBS, OCBC), Europe (Polish/Nordic banks). Financial RS is improving in every market simultaneously.\nNarrative: The signal structure shows financials as the next leadership class. The confirmed count already surged, and the pre-breakout pipeline (JPM, BAC, WFC) is enormous. If oil sustains below $100, this becomes the dominant rotation.\n**Consumer Recovery**\nWhat is leading: Discount retail, luxury, travel, and food services. Twelve consumer discretionary names sit in the top quintile, 7 confirmed. Key names: BWA, FIVE, ROST, HLT, TPR, MAR, VIK, EBAY, BURL.\nWhy now: Consumer names are outperforming despite the oil shock, suggesting the market is looking through the near-term inflation hit. FIVE Below at #2 with +97% EPS is the standout. The ceasefire, if it holds, is directly positive for consumer spending via lower gas prices.\nNarrative: Seven confirmed consumer discretionary names in the top quintile is a real cluster, not noise. The market is pricing resilient consumer demand.\n**Health Care Inflection**\nWhat is leading: Diversified pharma and biotech. Nine health care names sit in the top quintile but only 1 is confirmed. Key names: JAZZ, ROIV, MRNA, JNJ, RPRX, UTHR, MRK, CAH.\nWhy now: Health Care 1M RS crossed flat \u2014 the classic inflection point. Nine names in the top quintile with only 1 confirmed means the price rotation is running ahead of fundamentals. This is the early stage of a potential leadership shift.\nNarrative: The depth of names in the top quintile (9) combined with the lack of confirmation (1) is the textbook setup for a sector rotation. Worth monitoring closely.",
    synthesis: "R1000 in intermediate downtrend below 200DMA with 77 confirmed leaders. Financials confirmed surged from 5 to 11. The post-close ceasefire (WTI to $94, futures +2.5%) is the most significant regime event since the war began.",
    daily: "**S\u0026P 500 6,617 (+0.08%), Nasdaq +0.1%, Dow -0.2% on 7 Apr.** Extreme intraday swing: S\u0026P fell 1.2% on Kharg Island strikes, then recovered to flat after Pakistan requested a 2-week deadline extension.\n**AFTER THE CLOSE: Trump agreed to a 2-week ceasefire.** WTI crashed 15% to $94. S\u0026P futures +2.5%, Dow futures +1,000, Nasdaq futures +3%.\n**In the screener,** BWA held #1. FIVE Below entered #2 with the strongest EPS revision in the top 10. Financials confirmed jumped from 5 to 11. Broadcom +6.1% on the Anthropic AI partnership, reinforcing the data infrastructure cluster.\n**Oil whipsawed.** WTI hit $117 intraday, fell to $111 by close, crashed to $94 post-close.\n**Net read:** The screener was already positioned for the ceasefire: Financials surging, Tech broadening (35% to 41%), Health Care inflecting. Tomorrow\u2019s data will show whether the regime shifts."
  },
  "TOPIX": {
    sectors: "**Energy** \u2014 +5.3% 1M RS, 100% trend pass. No confirmed.\n**Health Care** \u2014 +4.7% 1M RS, 56% trend pass. One confirmed.\n**Financials** \u2014 +1.7% 1M RS, 91% trend pass. No confirmed but 91% trend \u2014 best breadth outside Energy/Utilities.\n**Consumer Staples** \u2014 +1.6% 1M RS, 50% trend pass.\n**Information Technology** \u2014 +1.2% 1M RS, 50% trend pass. Seven confirmed \u2014 surged from three.\n**Utilities** \u2014 +1.1% 1M RS, 100% trend pass. Perfect breadth.\n**Industrials** \u2014 +0.5% 1M RS, 68% trend pass. Three confirmed.\n**Materials** \u2014 -1.1% 1M RS, 82% trend pass. Four confirmed.\n**Communication Services** \u2014 -1.1% 1M RS, 33% trend pass.\n**Consumer Discretionary** \u2014 -3.8% 1M RS, 42% trend pass. Three confirmed.\n**Real Estate** \u2014 -8.4% 1M RS, 75% trend pass. Weakest sector.",
    themes: "**AI / Data Infrastructure (Japan Expression)**\nWhat is leading: Power cables, optical fibre, memory, semicap, and electronic substrates. The top quintile has 5 IT names (all 5 confirmed) and 7 industrials (3 confirmed) \u2014 12 names spanning the full AI hardware supply chain. Key names: Kioxia (285A), Ibiden (4062), Lasertec (6920), Murata (6981), Advantest (6857), Fujikura (5803), Furukawa Electric (5801).\nWhy now: Japan\u2019s cable and component makers sit at the intersection of AI data centre build-out and yen-driven export competitiveness. IT confirmed surged from 3 to 7. EPS revisions are extreme: Kioxia +165%, Sumitomo Electric +94.8%, Furukawa +45.3%. The Microsoft \u00a51.6 trillion AI partnership in Japan is a direct catalyst.\nNarrative: The top quintile shows IT and Industrials together account for 12 of 29 names, all connected by the same AI infrastructure build. The market is saying Japan\u2019s comparative advantage is physical connectivity and materials, not chips.\n**Specialty Materials**\nWhat is leading: Electronic materials, specialty chemicals, and metals. Four materials names sit in the top quintile, all 4 confirmed. Key names: Resonac (4004), Mitsui Kinzoku (5706), JX Metals (5016), Sumitomo Metal Mining (5713).\nWhy now: Upstream materials suppliers benefit from the same AI/electrification cycle. EPS revisions of +44% to +88%. A perfect confirmation rate (4 of 4) in the top quintile is the highest of any sector.\nNarrative: The materials bottleneck is as real as the power bottleneck. Japan\u2019s specialty materials sector is the picks-and-shovels of the picks-and-shovels.\n**Financials Pre-Breakout**\nWhat is leading: Banks and insurance. Four financials sit in the top quintile with 0 confirmed \u2014 but the sector has 91% trend breadth and multiple Emerging signals.\nWhy now: No confirmed yet, but 91% trend breadth is the highest of any sector in any market except those at 100%. Japan imports 90% of crude from the Middle East \u2014 the ceasefire removes the inflation overhang. Nikkei futures +3% on the ceasefire.\nNarrative: TOPIX financials are where R1000 financials were a week ago. The breadth is there, confirmation hasn\u2019t arrived yet. The ceasefire is the catalyst.",
    synthesis: "TOPIX in Range-Bound with 1M return positive (+0.97%). 18 confirmed. IT confirmed surged to 7. Nikkei futures +3% on the ceasefire.",
    daily: "**TOPIX +0.25% on 7 Apr.** Muted session ahead of the US deadline.\n**IT confirmed surged from 3 to 7** \u2014 broadest tech confirmation in TOPIX this cycle. Kioxia (285A, #2) EPS hit +165%.\n**Sumitomo Electric (#1)** EPS surged to +94.8%.\n**Post-close ceasefire:** Nikkei futures +3%. Japan\u2019s 90% Middle Eastern crude reliance makes this disproportionately positive.\n**Net read:** Signal structure already improving (18 confirmed, IT breakout). The ceasefire accelerates the thesis."
  },
  "KOSPI": {
    sectors: "**Information Technology** \u2014 +3.6% 1M RS, 100% trend pass. One confirmed. Perfect breadth.\n**Financials** \u2014 -1.6% 1M RS, 44% trend pass. One confirmed.\n**Consumer Staples** \u2014 -2.0% 1M RS, 100% trend pass.\n**Industrials** \u2014 -3.5% 1M RS, 45% trend pass. Four confirmed.\n**Communication Services** \u2014 -5.8% 1M RS, 33% trend pass.\n**Materials** \u2014 -7.4% 1M RS, 33% trend pass.\n**Health Care** \u2014 -7.8% 1M RS, 0% trend pass.\n**Consumer Discretionary** \u2014 -11.5% 1M RS, 0% trend pass. Avoid.\n**Energy** \u2014 -12.5% 1M RS, 50% trend pass.\n**Utilities** \u2014 -15.0% 1M RS, 0% trend pass. Weakest.",
    themes: "**Defence / Electrical Infrastructure**\nWhat is leading: Defence systems, electrical grid, heavy electrical, and construction. Seven of the 11 top-quintile names are Industrials, with 4 confirmed and 4 New Leaders. Key names: Hyundai E\u0026C (000720), LS Electric (010120), Hyosung Heavy (298040), Doosan Co (000150), SK Square (402340), Hanwha Systems (272210), LIG Nex1 (079550).\nWhy now: KOSPI\u2019s top quintile is 64% Industrials \u2014 the most concentrated sector exposure in any market. These names benefit from two converging drivers: structurally rising global defence budgets and electrification of grids for AI data centres. Hyundai E\u0026C\u2019s EPS flipped from -8% to +20.6%. The theme connects to VRT/FIX (US), Siemens Energy (Europe), and Fujikura (Japan).\nNarrative: KOSPI is a defence/infrastructure index right now. Nearly two-thirds of its top quintile is in one sector. The market is pricing Korea as a manufacturing base for both defence systems and grid infrastructure.\n**Asian Financials Rotation (Korea Expression)**\nWhat is leading: Brokerage and insurance. Two financials in the top quintile, 1 confirmed. Key names: Mirae Asset (006800), Samsung Life (032830).\nWhy now: Mirae Asset\u2019s +210% EPS is the most extreme in KOSPI. This connects to the broader pan-Asian financials rotation \u2014 China state banks, Singapore banks (DBS, OCBC), Japan (91% trend breadth), European banks (Polish/Nordic). Korea sources 70% of crude from the Middle East \u2014 the ceasefire removes the recession fear capping the sector.\nNarrative: Financial RS is improving across every Asian market simultaneously. KOSPI\u2019s financials are thinner (only 2 in the top quintile) but Mirae Asset\u2019s EPS revision is the most extreme signal anywhere.",
    synthesis: "KOSPI shifted to Rallying (+4.05% 1M). 7 confirmed. 5 New Leaders \u2014 freshest momentum in any market. Ceasefire is disproportionately positive for Korea.",
    daily: "**KOSPI +0.82% on 7 Apr, regime shifted to Rallying** (+4.05% 1M).\n**Hyundai E\u0026C took #1** at MS 88.5. EPS flipped to +20.6%, gaining CONFIRMED.\n**Mirae Asset (#3)** EPS hit +210%. Doosan Co (#5) entered the top 5.\n**Post-close ceasefire:** KOSPI futures sharply higher. Korea\u2019s 70% Middle Eastern crude dependency makes this disproportionately positive.\n**Net read:** Rallying regime with 5 New Leaders and a ceasefire catalyst. The strongest positioning of any market."
  },
  "HSI": {
    sectors: "**Health Care** \u2014 +8.7% 1M RS, 50% trend pass. No confirmed.\n**Industrials** \u2014 +5.1% 1M RS, 88% trend pass. One confirmed. Best breadth.\n**Consumer Staples** \u2014 +4.1% 1M RS, 20% trend pass.\n**Financials** \u2014 +2.7% 1M RS, 70% trend pass. Two confirmed.\n**Utilities** \u2014 +1.3% 1M RS, 100% trend pass. Perfect breadth.\n**Consumer Discretionary** \u2014 +0.1% 1M RS, 13% trend pass.\n**Energy** \u2014 -2.9% 1M RS, 75% trend pass. Two confirmed.\n**Real Estate** \u2014 -3.9% 1M RS, 43% trend pass. One confirmed. SHK Properties #1.\n**Information Technology** \u2014 -4.1% 1M RS, 0% trend pass. One confirmed.\n**Communication Services** \u2014 -6.8% 1M RS, 14% trend pass.\n**Materials** \u2014 -8.2% 1M RS, 33% trend pass. One confirmed.",
    themes: "**Post-War Recovery**\nWhat is leading: The top quintile is unusually diversified \u2014 15 names across 9 sectors, with no single sector dominating. Real Estate (3 names), Financials (3), and Energy (2) are the largest, but the spread itself is the signal. SHK Properties (#1), HSBC (#5), and Geely are the standouts.\nWhy now: SHK Properties displacing PetroChina at #1 is a regime shift. Capital is rotating from war beneficiaries to domestic recovery and rate-sensitive assets. Energy 1M RS dropped from +1.5% to -2.9%. The ceasefire removes the rate pressure overhang.\nNarrative: When the top quintile is this diversified and a real estate name leads the index, the market is making a macro call. It\u2019s pricing normalisation.\n**Pharma / Biotech**\nWhat is leading: CRO/CDMO and innovative biotech. Health Care is the top sector on 1M RS (+8.7%) but has zero confirmed names in the top quintile (1 name, not confirmed).\nWhy now: The momentum is there but EPS hasn\u2019t kept pace. This is price-led rotation without fundamental backing. WuXi AppTec, Hansoh Pharma, and Innovent are building but haven\u2019t reached the top quintile with confirmation.\nNarrative: Worth monitoring, not yet actionable. Pharma in HSI is a theme with momentum but no conviction from the confirmation framework.\n**Financial Deepening**\nWhat is leading: Global banks and insurance. Three financials in the top quintile, 2 confirmed. Key names: HSBC, AIA, BOC Hong Kong.\nWhy now: HSBC entering the top 5 for the first time signals global banking flows favouring Hong Kong again. Connects to the pan-Asian financials rotation.\nNarrative: Financial deepening in HSI is part of the same global rotation. The ceasefire accelerates it.\n**EV Adoption**\nWhat is leading: Chinese EV makers. Geely (175) is the sole consumer discretionary name in the top quintile, with +48.1% RS \u2014 the most extreme momentum in any market globally.\nWhy now: $100+ oil accelerated the cost advantage of EVs. Three Sector Rotation flags in Consumer Discretionary. The EV adoption thesis is structural, not cyclical.\nNarrative: Even if oil falls on the ceasefire, the consumer behaviour shift doesn\u2019t reverse.",
    synthesis: "HSI upgraded to Range-Bound (1M: +0.06%). 8 confirmed. SHK Properties at #1 is the clearest regime shift signal across all markets.",
    daily: "**HSI in Range-Bound** \u2014 upgraded from Intermediate Downtrend. HK closed for Easter on 7 Apr.\n**SHK Properties (#1, CONFIRMED)** displaced PetroChina. Energy RS dropped from +1.5% to -2.9%.\n**HSBC (#5, CONFIRMED)** entered the top 5 for the first time.\n**Health Care lost confirmations** \u2014 top sector on RS but 0 confirmed. Momentum without EPS is fragile.\n**Net read:** Regime upgrade and real estate at #1 were already signalling the energy unwind. The ceasefire validates it."
  },
  "CSI300": {
    sectors: "**Energy** \u2014 +7.7% 1M RS, 89% trend pass. Two confirmed.\n**Health Care** \u2014 +3.5% 1M RS, 13% trend pass. One confirmed.\n**Financials** \u2014 +1.7% 1M RS, 24% trend pass. Four confirmed \u2014 doubled.\n**Utilities** \u2014 +1.7% 1M RS, 27% trend pass. One confirmed.\n**Consumer Staples** \u2014 +1.6% 1M RS, 21% trend pass.\n**Consumer Discretionary** \u2014 -1.0% 1M RS, 8% trend pass. One confirmed.\n**Information Technology** \u2014 -2.3% 1M RS, 20% trend pass. Five confirmed.\n**Materials** \u2014 -2.4% 1M RS, 43% trend pass. Three confirmed \u2014 crashed from ten.\n**Communication Services** \u2014 -3.0% 1M RS, 0% trend pass.\n**Industrials** \u2014 -3.9% 1M RS, 24% trend pass. Four confirmed.\n**Real Estate** \u2014 -14.5% 1M RS, 0% trend pass. Weakest.",
    themes: "**State Bank / Financials Rotation**\nWhat is leading: Large-cap state-owned and commercial banks. Ten financials sit in the top quintile \u2014 the largest sector, ahead of IT (6), Materials (9), and Industrials (9). Key names: Bank of Jiangsu (600926), China Merchants (600036), Agricultural Bank (601288), CITIC Securities (600030), Bank of China (601988).\nWhy now: Financials confirmed doubled from 2 to 4. Ten names in the top quintile makes this the dominant sector in CSI 300\u2019s top-quintile composition. Agricultural Bank has +100 acceleration. This is the A-share expression of the pan-Asian financials rotation (KOSPI Mirae Asset, Singapore DBS, Japan 91% trend breadth, European Polish banks).\nNarrative: When the largest sector in the top quintile is financials, the market is positioning for policy easing and domestic reflation. Financial RS is improving in every market simultaneously \u2014 CSI 300 is the deepest pool.\n**AI / Data Infrastructure (China Expression)**\nWhat is leading: PCB, optical transceivers, and data connectivity. Six IT names in the top quintile, 3 confirmed. Key names: Suzhou TFC (300394), WUS Printed (002463), Suzhou Dongshan (002384), Zhongji Innolight (300308), Eoptolink (300502).\nWhy now: China\u2019s PCB and optical transceiver makers are the domestic supply chain for the global AI data centre build. Four of the top 5 in CSI 300 are data infrastructure names. This is the A-share expression of the same theme driving R1000 (CIEN, MKSI) and TOPIX (Kioxia, Fujikura).\nNarrative: The market is pricing China\u2019s role as a manufacturing base for AI-adjacent hardware. Concentrated and persistent.\n**Materials Contraction**\nWhat happened: Nine materials names remain in the top quintile but confirmed crashed from 10 to 3 \u2014 the sharpest single-sector contraction across all 7 markets.\nWhy it matters: The broad commodity rally narrowed sharply as the market started pricing ceasefire possibilities. The survivors (China Jushi, Ningxia Baofeng) are the highest-conviction names. The rest were crowded.\nNarrative: A warning signal. When 70% of a sector\u2019s confirmed leaders disappear in one session, the trade was overcrowded.\n**Nuclear Power**\nWhat is leading: Nuclear energy generation. Key name: CGN Power (+149.5% EPS CONFIRMED).\nWhy now: The energy crisis structurally accelerated China\u2019s nuclear build programme. This thesis holds regardless of the ceasefire \u2014 baseload power demand is structural.\nNarrative: Nuclear is the one energy sub-theme that doesn\u2019t reverse on a ceasefire.",
    synthesis: "CSI 300 in Intermediate Downtrend below 200DMA. 21 confirmed. Financials are the largest sector in the top quintile (10 names). Materials confirmed crashed from 10 to 3. PCB/data holds the top.",
    daily: "**CSI 300 flat on 7 Apr.** Still below 200DMA.\n**Materials confirmed crashed from 10 to 3** \u2014 biggest single-session contraction across all markets.\n**Financials confirmed doubled from 2 to 4.** Ten financials in the top quintile \u2014 the largest sector.\n**PCB/data held the top 4.** Suzhou TFC (#1), WUS Printed (#2, CONFIRMED), Suzhou Dongshan (#3), Zhongtian Tech (#4, CONFIRMED).\n**Net read:** The rotation from materials to financials is the key signal. The ceasefire benefits sentiment broadly."
  },
  "STI": {
    sectors: "**Consumer Staples** \u2014 +10.2% 1M RS, 100% trend pass. Wilmar.\n**Financials** \u2014 +4.3% 1M RS, 100% trend pass. SGX (#4), OCBC (#5).\n**Communication Services** \u2014 -3.2% 1M RS, 100% trend pass.\n**Industrials** \u2014 -3.6% 1M RS, 100% trend pass. ST Engineering (#3, CONFIRMED).\n**Real Estate** \u2014 -4.9% 1M RS, 100% trend pass. HongKong Land (#1).",
    themes: "**Post-War Recovery / Real Estate**\nWhat is leading: The top quintile has just 3 names: HongKong Land (#1), Keppel (#2), and ST Engineering (#3). HongKong Land displaced ST Engineering at the top. Mirrors HSI where SHK Properties also took #1.\nWhy now: Real estate names leading both STI and HSI simultaneously is a cross-market regime shift signal. Capital is rotating toward domestic recovery and rate-sensitive assets. The ceasefire removes the inflation/rate overhang.\nNarrative: When real estate displaces defence at the top of a small, concentrated index, it\u2019s a macro call. The market is pricing post-war recovery.\n**Defence \u0026 Infrastructure**\nWhat is leading: ST Engineering and Keppel \u2014 both in the top quintile. ST Engineering is the sole confirmed name in the index.\nWhy now: Both benefit from structural defence spending that persists regardless of the Iran ceasefire. Singapore\u2019s military modernisation and Keppel\u2019s energy infrastructure pivot are multi-year cycles. Connects to KOSPI (LS Electric, LIG Nex1) and STOXX 600 (Siemens Energy, BAE Systems).\nNarrative: Defence holds as the confirmed base even as real estate takes #1. Both themes coexist.\n**Singapore Bank Acceleration**\nWhat is leading: Banks and exchange operator. SGX (#4), OCBC (#5), and DBS sit just outside the top quintile but are generating Emerging signals. DBS has +100 acceleration.\nWhy now: All three major Singapore banks are building simultaneously. This is part of the pan-Asian financials rotation: China state banks (10 in top quintile), Korea (Mirae Asset), Europe (Polish/Nordic). If the banks graduate to leadership, STI\u2019s confirmed count would jump from 1 to 4.\nNarrative: The bank graduation is the single biggest potential regime change in any market.",
    synthesis: "STI in Rallying (+3.24% 1M). 14 names, 1 confirmed. HongKong Land at #1. Real estate mirrors HSI.",
    daily: "**STI in Rallying regime** \u2014 one of two markets (with KOSPI) in Rallying.\n**HongKong Land (#1)** displaced ST Engineering. Real estate leading mirrors HSI.\n**Confirmed count at 1** \u2014 ST Engineering is the sole confirmed name.\n**SGX (#4) and OCBC (#5)** continue building.\n**Net read:** Rallying regime and real estate leadership suggest post-war recovery positioning. The ceasefire validates this."
  },
  "SXXP": {
    sectors: "**Energy** \u2014 +17.1% 1M RS, 100% trend pass. Three confirmed. War premium peaked.\n**Utilities** \u2014 +7.5% 1M RS, 100% trend pass. Six confirmed. Perfect breadth.\n**Financials** \u2014 +3.3% 1M RS, 71% trend pass. Six confirmed.\n**Materials** \u2014 +3.3% 1M RS, 38% trend pass. One confirmed.\n**Communication Services** \u2014 +3.1% 1M RS, 69% trend pass.\n**Information Technology** \u2014 +0.8% 1M RS, 38% trend pass. Five confirmed.\n**Health Care** \u2014 -0.3% 1M RS, 38% trend pass. Two confirmed.\n**Industrials** \u2014 -0.5% 1M RS, 54% trend pass. Four confirmed.\n**Consumer Discretionary** \u2014 -1.4% 1M RS, 21% trend pass. One confirmed.\n**Consumer Staples** \u2014 -2.7% 1M RS, 43% trend pass. Two confirmed.\n**Real Estate** \u2014 -3.1% 1M RS, 67% trend pass.",
    themes: "**Green Energy / Electrification**\nWhat is leading: Wind turbines, gas turbines, and power cables. Seventeen industrials sit in the top quintile (the largest sector), led by Nordex (#1) and Siemens Energy (#2). Key names: Nordex, Siemens Energy, Sandvik, Hochtief, ACS, Prysmian, Vestas, Bouygues, Ackermans.\nWhy now: The energy transition thesis was reinforced by the war \u2014 energy independence became a security imperative. Nordex and Siemens Energy held #1 and #2 through the worst selloff of the cycle (SXXP -1%, confirmed crashed 45 to 30). Mirrors the US electrification cluster (VRT, FIX, GEV) and Japan cable/power cluster (Fujikura, Furukawa).\nNarrative: The structural shift toward renewable and distributed energy accelerates regardless of the ceasefire. The leaders that survived the selloff are battle-tested.\n**Financials Rotation**\nWhat is leading: Ten financials in the top quintile, 4 confirmed. Key names: Schroders, HSBC, BCV, ING, Raiffeisen, Beazley, Danske Bank, MBank. Beyond the top quintile, Polish/Nordic banks generating Sector Rotation signals: MBank (+24.1% RS), Pekao, PKO BP, Bawag.\nWhy now: Part of the same pan-Asian/global financials rotation. European financials benefit from high domestic rates (especially CEE) and the ceasefire removing the macro overhang. Commerzbank, Prudential, Intesa Sanpaolo, and UBS are all Accelerating at +98-100.\nNarrative: The market is differentiating within European banking. CEE and Nordic banks are outperforming Western European banks. The ceasefire compresses rate differentials and accelerates the rotation.\n**Confirmed Contraction**\nWhat happened: Total confirmed crashed from 45 to 30. Industrials (11\u21924) and Materials (4\u21921) hit hardest.\nWhy it matters: Europe is the most oil-sensitive developed market. The Kharg Island strikes and Iran rejecting talks hit European equities disproportionately. STOXX 600 futures +2%+ on the post-close ceasefire.\nNarrative: The contraction is a data point, not a trend. The leaders that held (Nordex, Siemens Energy, Glencore, Sandvik) are the highest-conviction names. If oil sustains below $100, the pool rebuilds rapidly.",
    synthesis: "STOXX 600 in Range-Bound. 30 confirmed \u2014 down from 45. Nordex and Siemens Energy held. The ceasefire is the strongest catalyst for European equities.",
    daily: "**STOXX 600 fell 1.01% on 7 Apr** \u2014 sharpest drop this cycle. Confirmed crashed from 45 to 30. Industrials from 11 to 4, Materials from 4 to 1.\n**Nordex (#1) and Siemens Energy (#2)** both held. Green energy leadership is resilient.\n**Energy RS peaked at +17.1%** \u2014 highest of the conflict.\n**Post-close:** Oil crashed 15%. STOXX 600 futures +2%+.\n**Net read:** Worst session of the cycle but the ceasefire changes the outlook. Green energy and financials positioned for recovery."
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
  var mkts = ["CSI300","HSI","KOSPI","R1000","STI","SXXP","TOPIX"];
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
    else { dp.innerHTML = '<div class="border-t-2 border-n-900 pt-6"><div class="cmt-label" style="color:#171717">Price Action \u2014 7 Apr</div><div class="cmt-text" style="font-size:13px">'+boldTextHtml(cmt.daily)+'</div></div>'; }
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
