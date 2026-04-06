// ============================================================================
// RELATIVE STRENGTH SCREENER — Static Site Build
// Vanilla JS, no React, no build step
// ============================================================================

// --- Constants ---------------------------------------------------------------

const MARKET_LABELS = {"CSI300":"CSI 300","HSI":"Hang Seng","KOSPI":"KOSPI","R1000":"Russell 1000","STI":"STI","SXXP":"STOXX 600","TOPIX":"TOPIX"};

const COMMENTARY = {
  "R1000": {
    sectors: "**Energy** \u2014 +8.2% 1M RS, 94% trend pass. Eight confirmed names. APA (+30.9% RS, +60.1% EPS CONFIRMED) leads. War premium intact as WTI holds above $110.\n**Materials** \u2014 +3.3% 1M RS, 57% trend pass. Eight confirmed. ALB (+6,982% EPS CONFIRMED) distorts the average. AA (+14.3% RS CONFIRMED) is the cleanest entry.\n**Information Technology** \u2014 +3.0% 1M RS, 35% trend pass. Twenty-two confirmed. CIEN (+54.5% RS CONFIRMED) is the highest-RS New Leader. Optical/data infra cluster (MKSI, SNDK, LITE, WDC, DELL, LRCX, KLAC, JBL, LSCC, ONTO) remains the deepest confirmed pool.\n**Utilities** \u2014 +2.5% 1M RS, 86% trend pass. No confirmed leaders but strongest breadth after Energy.\n**Health Care** \u2014 0.0% 1M RS, 40% trend pass. Two confirmed. ROIV (#7, Existing Leader) leads on price. Eight Sector Rotation signals \u2014 the broadest in any sector.\n**Financials** \u2014 -0.5% 1M RS, 37% trend pass. Four confirmed. WBS (#4) and MTB New Leaders. The confirmed pool contracted sharply from earlier highs.\n**Communication Services** \u2014 -0.8% 1M RS, 29% trend pass. TIGO (#6, Existing Leader UNCONFIRMED). One confirmed.\n**Consumer Staples** \u2014 -1.2% 1M RS, 45% trend pass. Four confirmed. CASY (+14.1% RS CONFIRMED) is a New Leader.\n**Industrials** \u2014 -1.2% 1M RS, 53% trend pass. Fourteen confirmed \u2014 the deepest sector pool. VRT (#2, MS 87.9 CONFIRMED) and FIX (#5, MS 86.8 CONFIRMED) hold top ranks.\n**Real Estate** \u2014 -1.4% 1M RS, 57% trend pass. Four confirmed. EQIX (+19.8% EPS CONFIRMED) anchors.\n**Consumer Discretionary** \u2014 -1.9% 1M RS, 29% trend pass. Six confirmed. BWA (#1, MS 88.2, New Leader) tops the entire index. FIVE (#3, +26.5% EPS CONFIRMED).",
    themes: "**Electrification Infrastructure** \u2014 VRT #2 (MS 87.9, +16.1% EPS CONFIRMED), FIX #5 (MS 86.8, +19.4% EPS CONFIRMED), MTZ (+20% RS CONFIRMED), GEV (+6.7% EPS CONFIRMED), CW. Five names in the top 10. Regime-agnostic.\n**Optical/Data Infrastructure** \u2014 MKSI (+12.7% EPS CONFIRMED), CIEN (+54.5% RS CONFIRMED), SNDK (+242.3% EPS CONFIRMED), LITE, WDC, DELL (+12.9% EPS CONFIRMED), LRCX, KLAC, LSCC, JBL, ONTO. Eleven confirmed.\n**Health Care Rotation** \u2014 Eight Sector Rotation signals: RPRX, MRK, UTHR (+20.4% RS), PFE, REGN, GMED, EW, ELAN. Health Care 1M RS turned flat \u2014 the inflection point.\n**BWA Breakout** \u2014 BorgWarner (#1, MS 88.2, New Leader) tops the index. EV component supplier benefiting from $100+ oil.\n**Energy War Premium** \u2014 APA (+30.9% RS, +60.1% EPS CONFIRMED), VLO, FTI. All CONFIRMED.",
    synthesis: "R1000 in intermediate downtrend below 200DMA with 73 confirmed leaders. Electrification (VRT, FIX, MTZ, GEV) and optical infrastructure (11 CONFIRMED) are the highest-conviction clusters. Health Care generated 8 Sector Rotation signals \u2014 the broadest early rotation. BWA topped the index on the EV component thesis. Pre-breakout: INSM (Emerging +93.5), DAL (Emerging +93.4), HPE (Emerging +88.7).",
    daily: "**S\u0026P 500 6,583 (+0.1%), Nasdaq +0.2%, Dow -0.1% on 2 Apr.** Markets closed Good Friday 3 Apr. Extreme intraday reversal: Dow fell 668 points at the open on Trump\u2019s war-extension speech, recovered to flat on the Iran/Oman Hormuz monitoring protocol.\n**Oil surged.** WTI +12% to $112, Brent +8% to $109. The peace trade from earlier in the week was fully reversed.\n**Tesla -5.5%** on Q1 deliveries of 358K vs 366K expected. Pharma tariff reports (up to 100%) hit Lilly and Amgen.\n**In the screener,** BWA jumped to #1 on the EV component thesis. The electrification cluster (VRT #2, FIX #5) held. Optical/data infra (MKSI, CIEN, SNDK) recovered from morning lows.\n**Health Care rotated.** Eight Sector Rotation signals emerged \u2014 the broadest in any sector. The 1M RS turned flat, suggesting the inflection is underway.\n**Net read:** The session confirmed the regime\u2019s binary structure: energy vs everything else, headline-driven. Markets reopen Monday 6 Apr."
  },
  "TOPIX": {
    sectors: "**Energy** \u2014 +12.7% 1M RS, 100% trend pass. One confirmed. INPEX (1605) leads. Dominant relative performance.\n**Health Care** \u2014 +5.5% 1M RS, 56% trend pass. Three confirmed. Astellas Pharma (4503, +51.8% EPS CONFIRMED) anchors the rotation.\n**Consumer Staples** \u2014 +2.9% 1M RS, 50% trend pass. One confirmed. Japan Tobacco (2914) flagged as Sector Rotation.\n**Utilities** \u2014 +2.4% 1M RS, 100% trend pass. Perfect breadth, no confirmed leaders.\n**Financials** \u2014 +1.2% 1M RS, 77% trend pass. No confirmed leaders but best trend breadth outside Energy and Utilities. Tokio Marine (8766, Emerging).\n**Industrials** \u2014 +0.6% 1M RS, 53% trend pass. Four confirmed. Fujikura (5803, #3, MS 89.4 CONFIRMED) holds. Marubeni (8002) graduated to New Leader.\n**Communication Services** \u2014 0.0% 1M RS, 33% trend pass. KDDI (9433, Emerging), NTT (9432, Emerging). Acceleration cluster building.\n**Information Technology** \u2014 -1.3% 1M RS, 39% trend pass. Two confirmed. Kioxia (285A, #2, +76% EPS CONFIRMED). Lasertec (6920, New Leader CONFIRMED).\n**Materials** \u2014 -2.4% 1M RS, 45% trend pass. Three confirmed with extreme EPS: Mitsui Kinzoku (5706, #5, +49.7%), Resonac (4004, #4).\n**Consumer Discretionary** \u2014 -3.5% 1M RS, 44% trend pass. Two confirmed. Sumitomo Electric (5802, #1, MS 91.6 CONFIRMED) leads the entire index.\n**Real Estate** \u2014 -9.7% 1M RS, 50% trend pass. Weakest sector. No confirmed names.",
    themes: "**Cable/Power Infrastructure** \u2014 Sumitomo Electric (5802, #1, MS 91.6 CONFIRMED), Kioxia (285A, #2, +76% EPS CONFIRMED), Fujikura (5803, #3, CONFIRMED), Furukawa Electric (5801, +34.2% EPS CONFIRMED). Top 4 all CONFIRMED.\n**Trading Houses** \u2014 Marubeni (8002, New Leader), Mitsui (8031, Existing Leader), Mitsubishi (8058). Marubeni graduated.\n**Pharma** \u2014 Astellas (4503, +51.8% EPS CONFIRMED). Health Care confirmed count tripled to 3.\n**Materials** \u2014 Mitsui Kinzoku (5706, #5, +49.7% EPS CONFIRMED), Resonac (4004, #4). Extreme EPS but price lagging.\n**Telecom Acceleration** \u2014 KDDI, NTT, Hitachi all Emerging/Accelerating. Pre-breakout cluster strengthening.",
    synthesis: "TOPIX in Range-Bound regime. 16 confirmed leaders. Sumitomo Electric displaced Fujikura at #1. Cable/power infrastructure dominates. Marubeni graduated to New Leader. Health Care confirmed tripled. Pre-breakout: KDDI, NTT, Tokio Marine.",
    daily: "**Nikkei rose 1.7%, TOPIX +0.9% on 3 Apr** as Hormuz protocol hopes reversed the prior session\u2019s losses. Microsoft announced a \u00a51.6 trillion AI partnership in Japan, lifting tech names.\n**Cable infrastructure outperformed.** Sumitomo Electric (#1), Kioxia (#2), Fujikura (#3) \u2014 top 3 all CONFIRMED. Furukawa Electric gained 9.9%.\n**Marubeni graduated to New Leader** \u2014 first sogo shosha to reach New Leader this cycle.\n**Regime shifted to Range-Bound** as 1M return improved to -1.4%. The pullback is moderating.\n**Net read:** The Hormuz protocol and Microsoft AI partnership created a double tailwind. Cable infrastructure and pharma are the highest-conviction clusters."
  },
  "KOSPI": {
    sectors: "**Consumer Staples** \u2014 +4.5% 1M RS, 100% trend pass. KT\u0026G. Single name, perfect breadth.\n**Information Technology** \u2014 +2.3% 1M RS, 80% trend pass. Two confirmed. Samsung Electro-Mechanics (009150, #5, New Leader CONFIRMED).\n**Financials** \u2014 +0.5% 1M RS, 33% trend pass. One confirmed. Mirae Asset (006800, #2, +52% EPS CONFIRMED).\n**Industrials** \u2014 -1.4% 1M RS, 55% trend pass. Three confirmed. LS Electric (010120, #1, MS 88.6, +7.3% EPS CONFIRMED) leads the index. Hyosung Heavy (298040, #4, CONFIRMED).\n**Materials** \u2014 -3.5% 1M RS, 0% trend pass. No leadership.\n**Health Care** \u2014 -3.6% 1M RS, 0% trend pass. No leadership.\n**Communication Services** \u2014 -4.8% 1M RS, 33% trend pass. SK Telecom holding.\n**Energy** \u2014 -4.9% 1M RS, 50% trend pass. One confirmed. HD Hyundai Fading.\n**Consumer Discretionary** \u2014 -8.6% 1M RS, 0% trend pass. Hyundai Motor Fading. Avoid.\n**Utilities** \u2014 -14.9% 1M RS, 0% trend pass. Weakest sector.",
    themes: "**Defence/Electrical Infrastructure** \u2014 LS Electric (010120, #1, MS 88.6, +7.3% EPS CONFIRMED), Hyosung Heavy (298040, #4, +11.1% EPS CONFIRMED), LIG Nex1 (079550, #5, Existing Leader), Hyundai E\u0026C (000720, #3, Existing Leader), Korea Aerospace (047810, CONFIRMED). Five names spanning defence, electrical grid, and construction. Double confirmation (LS Electric + Hyosung) gives this cluster the strongest fundamental backing in KOSPI. The theme connects to the global electrification trade (US: VRT/FIX, Japan: Fujikura/Sumitomo, Europe: Siemens Energy/Prysmian).\n**Semiconductor/Components Recovery** \u2014 Samsung Electro-Mechanics (009150, #5, +15.8% RS, +12.8% EPS CONFIRMED), Samsung SDI (006400, +14% RS). The first confirmed tech leader in KOSPI this cycle. Samsung Electronics (005930, WATCH) is the risk \u2014 the index heavyweight hasn\u2019t participated in the recovery.\n**Financial/Insurance** \u2014 Mirae Asset (006800, #2, +52% EPS CONFIRMED), Samsung Life (032830, +10.2% RS), KB Financial (Accelerating), Shinhan Financial (Emerging). The financial cluster is generating multiple early signals but only Mirae Asset is confirmed. Connects to the broader Asian financials rotation (China state banks, Singapore DBS/OCBC).\n**Nuclear/Energy Transition** \u2014 Doosan Enerbility (034020, Accelerating +84.9), HD Hyundai (267250, Fading). The nuclear play is building but not yet confirmed.",
    synthesis: "KOSPI in Pullback in Strong Uptrend. Confirmed count rose to 7. LS Electric leads at #1. Samsung Electro-Mechanics is the first confirmed tech leader. Defence cluster has double confirmation. Pre-breakout: KT Corp (Emerging), Shinhan Financial (Emerging).",
    daily: "**KOSPI surged 2.7% on 3 Apr,** recovering sharply from the 4.5% plunge on 2 Apr. The strongest single-session gain among all seven markets.\n**LS Electric (#1, CONFIRMED) held the top.** Both LS Electric and Hyosung Heavy now CONFIRMED \u2014 the defence/electrical cluster has its strongest backing yet.\n**Samsung Electro-Mechanics (#5)** is the first tech name to reach confirmed New Leader in KOSPI.\n**Confirmed count rose to 7** \u2014 the signal structure is materially improving despite the -3.1% 1M return.\n**Net read:** The 2.7% bounce and Pullback in Strong Uptrend regime (+19.7% 3M) suggest the correction is finding a floor. Defence and tech confirmation are the key developments."
  },
  "HSI": {
    sectors: "**Health Care** \u2014 +9.4% 1M RS, 50% trend pass. Two confirmed. WuXi AppTec (2359, #4, New Leader CONFIRMED). Hansoh Pharma (3692, Emerging).\n**Consumer Staples** \u2014 +4.3% 1M RS, 20% trend pass. WH Group (288, #2, Existing Leader CONFIRMED). One confirmed.\n**Industrials** \u2014 +3.4% 1M RS, 88% trend pass. Best breadth. No confirmed.\n**Financials** \u2014 +2.8% 1M RS, 70% trend pass. Two confirmed. BOC Hong Kong (2388, CONFIRMED). AIA (1299, #8, New Leader).\n**Energy** \u2014 +1.5% 1M RS, 75% trend pass. PetroChina (857, #1, CONFIRMED) leads the index. Two confirmed.\n**Utilities** \u2014 +0.9% 1M RS, 100% trend pass. Perfect breadth.\n**Consumer Discretionary** \u2014 +0.6% 1M RS, 13% trend pass. Geely (175, #5, +48.1% RS, New Leader UNCONFIRMED) \u2014 most extreme momentum globally. Three Sector Rotation signals.\n**Real Estate** \u2014 -4.8% 1M RS, 43% trend pass. SHK Properties (16, #3). One confirmed.\n**Information Technology** \u2014 -4.9% 1M RS, 0% trend pass. Weakest. No leaders.\n**Communication Services** \u2014 -6.3% 1M RS, 14% trend pass. China Mobile (941, Emerging +94.6).\n**Materials** \u2014 -9.8% 1M RS, 33% trend pass. Hongqiao (#6, Existing Leader CONFIRMED).",
    themes: "**Oil \u0026 Energy Infrastructure** \u2014 PetroChina (857, #1, CONFIRMED), CNOOC (883, CONFIRMED). Two confirmed energy names anchored by the Hormuz war premium. No longer the top sector on 1M RS but still leading on rank and confirmation.\n**Pharma/Biotech Rotation** \u2014 WuXi AppTec (2359, #4, New Leader CONFIRMED), CSPC Pharma (1093, CONFIRMED), Hansoh Pharma (3692, Emerging +95.9), Innovent Biologics (1801, Emerging). Health Care overtook Energy as the top sector (+9.4% RS). Four names building simultaneously \u2014 the broadest pharma cluster in any Asian market.\n**EV Adoption/Transition** \u2014 Geely (175, #5, +48.1% RS, New Leader), Li Auto (2015, Sector Rotation), BYD (1211, Emerging +82.4), Midea Group (300, Sector Rotation). The $100+ oil thesis accelerates EV cost advantages. Geely\u2019s +48.1% RS is the most extreme momentum in any market globally. Three Sector Rotation flags in Consumer Discretionary.\n**Financial Deepening** \u2014 AIA (1299, #8, New Leader), BOC Hong Kong (2388, CONFIRMED), ICBC (1398, Emerging). AIA is the first insurance name in HSI leadership. China Mobile (941, Emerging +94.6) has the highest acceleration in the index.",
    synthesis: "HSI in intermediate downtrend below 200DMA. 9 confirmed leaders. Health Care overtook Energy as top sector. WuXi AppTec and AIA both graduated to New Leader. Geely at +48.1% RS is the most extreme momentum globally.",
    daily: "**Hang Seng fell 0.7% on 2 Apr** (closed Good Friday 3 Apr). Morning selloff on Trump\u2019s speech recovered partially on the Hormuz protocol.\n**WuXi AppTec (#4) graduated to New Leader CONFIRMED.** The cleanest pharma entry in HSI.\n**Geely (#5) held** at +48.1% RS. Li Auto flagged as Sector Rotation.\n**AIA (#8) reached New Leader** \u2014 first insurance name in leadership.\n**Nine confirmed leaders.** The rotation from energy to pharma/financials/EV continues.\n**Net read:** Three New Leader graduations in one cycle suggest the signal structure is strengthening even as the index trades below its 200DMA."
  },
  "CSI300": {
    sectors: "**Energy** \u2014 +5.5% 1M RS, 89% trend pass. Three confirmed. China Merchants Energy (601872, #3, +47.7% EPS CONFIRMED) leads.\n**Health Care** \u2014 +4.2% 1M RS, 25% trend pass. One confirmed. Sichuan Biokin (688506, Emerging).\n**Utilities** \u2014 +2.6% 1M RS, 55% trend pass. One confirmed. CGN Power (+149.5% EPS CONFIRMED).\n**Financials** \u2014 +2.3% 1M RS, 26% trend pass. Two confirmed. Broadest sector (43 names). Multiple Emerging and Sector Rotation signals from state banks.\n**Consumer Staples** \u2014 +2.2% 1M RS, 21% trend pass. Inflecting. Wuliangye and Inner Mongolia Yili both Accelerating.\n**Consumer Discretionary** \u2014 -0.2% 1M RS, 8% trend pass. BYD (002594, Emerging).\n**Industrials** \u2014 -2.7% 1M RS, 28% trend pass. Three confirmed. Zhongtian Tech (600522, #6), Ningbo Deye (605117, #5).\n**Information Technology** \u2014 -2.9% 1M RS, 15% trend pass. Four confirmed. WUS Printed (002463, #1, MS 91.8, New Leader CONFIRMED) leads CSI 300. Eoptolink (300502) and Zhongji Innolight (300308) both New Leaders.\n**Communication Services** \u2014 -3.0% 1M RS, 0% trend pass. No leadership.\n**Materials** \u2014 -3.9% 1M RS, 31% trend pass. Eight confirmed. Deepest sector pool. China Jushi (600176, #7, CONFIRMED).\n**Real Estate** \u2014 -13.5% 1M RS, 0% trend pass. Weakest sector.",
    themes: "**PCB/Data Infrastructure** \u2014 WUS Printed (002463, #1, MS 91.8 CONFIRMED), Suzhou TFC (300394, #2 UNCONFIRMED), Suzhou Dongshan (002384, #4), Eoptolink (300502, New Leader), Zhongji Innolight (300308, New Leader CONFIRMED). Five in the top 10. Primary leadership cluster.\n**Electrical Infrastructure** \u2014 Zhongtian Tech (600522, #6), Ningbo Deye (605117, #5), Sieyuan Electric (002028). Electrification persists.\n**Shipping/Energy** \u2014 China Merchants Energy (601872, #3, +47.7% EPS CONFIRMED), COSCO Shipping (600026). Both Existing Leaders.\n**Financials Emerging** \u2014 Agricultural Bank (Emerging +100), China Merchants Bank (Emerging +98.6). State bank rotation continues.\n**CGN Power** (+149.5% EPS CONFIRMED) \u2014 nuclear power thesis.",
    synthesis: "CSI 300 in intermediate downtrend below 200DMA. 22 confirmed leaders. PCB/data infrastructure dominates the top. Energy regained top sector. Materials has 8 confirmed \u2014 deepest sector pool. Financials Emerging cluster is the broadest pre-breakout setup.",
    daily: "**CSI 300 fell 0.8% on the latest session.** The index remains below its 200DMA. War-extension narrative and pharma tariff threats weighed.\n**PCB/data infrastructure held the top.** WUS Printed (#1, CONFIRMED) and Suzhou TFC (#2) stable. Eoptolink and Zhongji Innolight both graduated to New Leader.\n**Energy regained the top sector** on 1M RS (+5.5%) as the Hormuz war premium returned.\n**Financials Emerging cluster strengthened.** Agricultural Bank (+100 acceleration), China Merchants Bank (+98.6). The state bank rotation is broadening.\n**Net read:** Twenty-two confirmed leaders and broadening PCB/data theme suggest the underlying signal structure is intact despite the 200DMA overhang."
  },
  "STI": {
    sectors: "**Consumer Staples** \u2014 +8.5% 1M RS, 100% trend pass. Wilmar International. Single name, strong relative performance.\n**Financials** \u2014 +4.6% 1M RS, 100% trend pass. SGX (#3, +11.9% RS), OCBC (#5, Emerging), DBS (#10, Emerging +100 acceleration). The bank cluster dominates STI breadth.\n**Communication Services** \u2014 -2.0% 1M RS, 100% trend pass. Singapore Telecom. Sole name.\n**Industrials** \u2014 -4.3% 1M RS, 100% trend pass. ST Engineering (#1, MS 83 CONFIRMED) and Keppel (#2, MS 75.9 CONFIRMED). Two confirmed \u2014 the only confirmed names in the index.\n**Real Estate** \u2014 -6.6% 1M RS, 100% trend pass. HongKong Land (#4, Fading Leader UNCONFIRMED). Three names.",
    themes: "**Defence \u0026 Infrastructure** \u2014 ST Engineering (#1, MS 83, +4.7% EPS CONFIRMED) and Keppel (#2, MS 75.9 CONFIRMED). The only two confirmed names in the index. Both benefit from the global defence spending cycle and Singapore\u2019s infrastructure investment programme. Connects to the defence/infrastructure theme across KOSPI (LS Electric, LIG Nex1) and STOXX 600 (Rheinmetall, BAE Systems).\n**Singapore Bank Acceleration** \u2014 DBS (Emerging +100 acceleration), OCBC (Emerging +78.6), UOB (Revision Leader). All three major Singapore banks are generating early signals simultaneously. DBS has the highest acceleration reading in the index. If the banks graduate to leadership, STI\u2019s confirmed count would triple. The cluster connects to the broader Asian financials rotation: China state banks (Agricultural Bank +100), Korea (Mirae Asset CONFIRMED, Shinhan Emerging), and European banks (Polish/Nordic Sector Rotation).\n**Elevated Volatility Beneficiary** \u2014 SGX (#3, +11.9% RS). Exchange operator benefiting from the war-driven trading volume surge. Wilmar International (+8.5% RS, Consumer Staples) is the other positive-RS name, gaining on commodity supply disruption.",
    synthesis: "STI in Range-Bound regime with 14 names \u2014 smallest universe. Two confirmed leaders (ST Engineering, Keppel). The bank cluster (DBS +100, OCBC Emerging) is building. Perfect trend breadth (100%) across all sectors reflects SGD stability.",
    daily: "**STI fell 0.6% on the latest session.** The index is in Range-Bound regime with the smallest screener universe (14 names).\n**ST Engineering (#1) and Keppel (#2)** are both CONFIRMED \u2014 the only two confirmed leaders in the index.\n**Singapore banks building.** DBS has +100 acceleration \u2014 the highest in the index. OCBC is Emerging. Both generating early signals but haven\u2019t reached leader status.\n**Net read:** STI\u2019s small universe limits signal resolution. The key watch is whether DBS and OCBC can graduate from Emerging to leadership."
  },
  "SXXP": {
    sectors: "**Energy** \u2014 +14.8% 1M RS, 93% trend pass. Four confirmed. War premium dominates European equities.\n**Utilities** \u2014 +6.9% 1M RS, 100% trend pass. Five confirmed. Perfect breadth \u2014 strongest in any STOXX 600 sector.\n**Financials** \u2014 +2.6% 1M RS, 70% trend pass. Seven confirmed. Schroders (#10, CONFIRMED). Polish/Nordic bank rotation broadening.\n**Materials** \u2014 +2.5% 1M RS, 43% trend pass. Four confirmed. Glencore (#5, +12.4% RS Existing Leader). Yara (#11, +30.3% EPS CONFIRMED).\n**Communication Services** \u2014 +1.1% 1M RS, 69% trend pass. Two confirmed. Telecom Italia (#15, Existing Leader).\n**Health Care** \u2014 +0.3% 1M RS, 41% trend pass. Four confirmed. Ipsen (#7, Existing Leader), Sandoz (#9, Existing Leader).\n**Information Technology** \u2014 +0.1% 1M RS, 44% trend pass. Six confirmed. ASML (#14, +12.5% EPS CONFIRMED). Nokia (#13, Existing Leader UNCONFIRMED).\n**Industrials** \u2014 -0.5% 1M RS, 56% trend pass. Eleven confirmed \u2014 deepest sector pool. Nordex (#1, MS 89.8 CONFIRMED) and Siemens Energy (#2, MS 88.5 CONFIRMED) lead the entire index.\n**Consumer Discretionary** \u2014 -1.0% 1M RS, 23% trend pass. One confirmed. Weakest breadth.\n**Consumer Staples** \u2014 -3.1% 1M RS, 46% trend pass. No confirmed names.\n**Real Estate** \u2014 -3.3% 1M RS, 67% trend pass. No confirmed names.",
    themes: "**Green Energy/Infrastructure** \u2014 Nordex (#1, MS 89.8, wind turbines CONFIRMED), Siemens Energy (#2, MS 88.5 CONFIRMED), Prysmian (#12, cables, Existing Leader). The European energy transition mirrors the US electrification cluster.\n**Commodities** \u2014 Glencore (#5, +12.4% RS), Yara (#11, +30.3% EPS CONFIRMED), Sandvik (#4, CONFIRMED). Supply disruption beneficiaries.\n**Defence** \u2014 Rheinmetall, BAE Systems, Leonardo, Saab. European defence spending accelerating.\n**ASML** (#14, +12.5% EPS CONFIRMED) \u2014 European semi anchor. Existing Leader.\n**Polish/Nordic Banks** \u2014 MBank (Sector Rotation +24.1% RS), Pekao (+8.1%), PKO BP (+6.7%), Bawag (+6.6%), Danske Bank. Broadest financials rotation in Europe.\n**Pharma** \u2014 Ipsen (#7), Sandoz (#9). Four confirmed in Health Care.",
    synthesis: "STOXX 600 in Range-Bound regime with 346 stocks and 44 confirmed leaders. Nordex and Siemens Energy lead. Energy (+14.8% RS) dominates on the war premium. Utilities have perfect breadth. Industrials has 11 confirmed \u2014 deepest pool. The Polish/Nordic bank rotation is the broadest early signal. Pre-breakout: Bayer (Sector Rotation), UCB, NN Group.",
    daily: "**STOXX 600 fell 0.2% on 2 Apr** (closed Good Friday 3 Apr). The session reversed earlier gains as Trump\u2019s war-extension speech renewed the oil premium.\n**Nordex (#1, CONFIRMED) and Siemens Energy (#2, CONFIRMED)** hold the top two ranks. The European green energy cluster mirrors the US electrification theme.\n**Polish banks surged.** MBank (+24.1% RS), Pekao (+8.1%), PKO BP (+6.7%) all Sector Rotation. Broadest financials rotation in Europe.\n**Forty-four confirmed leaders** \u2014 a solid base for a Range-Bound regime. Industrials has the deepest confirmed pool (11 names).\n**ASML (#14, CONFIRMED)** held. European semi leadership narrower than the US but ASML anchors.\n**Net read:** STOXX 600\u2019s Range-Bound regime reflects Europe\u2019s position between the energy crisis and ECB easing. Green energy and Polish bank rotation are the key actionable clusters."
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
    else { dp.innerHTML = '<div class="border-t-2 border-n-900 pt-6"><div class="cmt-label" style="color:#171717">Price Action \u2014 3 Apr</div><div class="cmt-text" style="font-size:13px">'+boldTextHtml(cmt.daily)+'</div></div>'; }
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
