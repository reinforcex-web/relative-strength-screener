// ============================================================================
// RELATIVE STRENGTH SCREENER — Static Site Build
// Vanilla JS, no React, no build step
// ============================================================================

// --- Constants ---------------------------------------------------------------

const MARKET_LABELS = {"R1000":"Russell 1000","TOPIX":"TOPIX","KOSPI":"KOSPI","HSI":"Hang Seng","CSI300":"CSI 300"};

const COMMENTARY = {
  "R1000": {
    sectors: "**Energy** \u2014 dominant sector by a wide margin. +19.8% 1M RS, 100% trend pass, +12.7% avg EPS revision. 10 confirmed names. The Hormuz crisis continues to drive broad, persistent outperformance backed by fundamentals. The only sector with perfect breadth.\n**Utilities** \u2014 second strongest at +3.8% 1M RS, 85% trend pass. Defensive posture consistent with the regime. Three New Leaders (ETR, SRE, NEE) but all UNCONFIRMED \u2014 price-led without earnings support.\n**Communication Services \u2014 inflecting.** +2.1% 1M RS while 3M remains negative (-1.3%) \u2014 the classic rotation signal. NYT (New Leader, CONFIRMED, +3.8% EPS) and VZ (CONFIRMED) are the lead names.\n**Info Tech** \u2014 +1.2% 1M RS with the deepest leader pool (7 Existing, 4 New, 19 confirmed) but only 16% trend pass \u2014 the worst breadth of any sector. EPS revision is strong (+8.4%) so fundamentals are holding even as prices lag. 13 Fading Leaders \u2014 the most of any sector.\n**Financials \u2014 inflecting.** +1.2% 1M RS with deeply negative 3M (-4.4%). 25 Sector Rotation signals \u2014 the largest rotation cluster in the market. Large banks (GS, MS, JPM, BAC, WFC) all accelerating.\n**Industrials** \u2014 largest sector (110 names) but weakest 1M RS (-4.1%). 12 Fading Leaders, 11 Existing Leaders. Strong 3M RS (+8.9%) \u2014 near-term pullback within a medium-term uptrend.",
    themes: "**Power/Electrification** (MTZ #3, GEV #13, VRT #11, PWR #12) \u2014 remains the deepest confirmed cluster. MTZ (+5.7% EPS CONFIRMED), GEV (+7.1%), PWR (+6.8%), VRT (+16.2%) all holding through the drawdown. VRT on WATCH signal \u2014 monitor for deterioration but still CONFIRMED.\n**Optical/Data Infrastructure** (CIEN #5, LITE #17, DELL New Leader, UI, FLEX) \u2014 CIEN anchors at MS 91.6 (+15.4% EPS CONFIRMED). DELL surging as New Leader (+19% 1M RS, +12.7% EPS CONFIRMED). LITE at +33.6% EPS CONFIRMED. Semi fading names (AMAT, LRCX, KLAC, COHR all Fading) create separation \u2014 the fiber/optical names are holding while pure semi is not.\n**Consumer/Off-Price Retail** (ROST #4, FIVE #1, BURL #10, CASY #9, TJX, QSR) \u2014 broadening cluster. ROST, BURL, CASY all New Leaders with trend pass and CONFIRMED. FIVE Existing Leader at MS 93.3. Domestic consumer thesis is the strongest non-energy theme.\n**Energy/Commodity** (APA +51.8% 1M RS, CF +46%, VLO +30.1%, PR +25.3%, ALB +408.9% EPS) \u2014 explosive moves. ALB (lithium) has the most extreme EPS revision in the market. All CONFIRMED.\n**Financials Rotation** \u2014 25 Sector Rotation signals led by BK, CFG, C, STT, HIG. Large banks (GS, MS, JPM, BAC) all accelerating. Broadest early signal in the market.",
    synthesis: "Market in intermediate downtrend below 200DMA but leadership structure remains deep \u2014 71 confirmed leaders. Highest-conviction positions: the consumer retail cluster (FIVE MS 93.3, ROST, BURL, CASY \u2014 all CONFIRMED New Leaders with trend pass) and the electrification cluster (MTZ, GEV, PWR, VRT \u2014 all CONFIRMED Existing Leaders through the drawdown). Energy names (APA, CF, VLO, ALB) are the strongest single-month movers but more cyclical. Key developing theme: Financials rotation \u2014 25 Sector Rotation signals + accelerating large banks (GS, MS, JPM). Pre-breakout watch: EXPE (+99.7 acceleration, +6.3% EPS), TWLO (Emerging, +98.9 acceleration), MEDP (+99.8 acceleration), and PLTR (+99.1 acceleration, +30.3% EPS \u2014 strongest combined signal in the market).",
    daily: "**S\u0026P 500 -0.39% to 6,344, Nasdaq -0.73%, Dow +0.11%.** Third straight losing session. Brent surged to $115+, WTI hit $103. Fed Chair Powell spoke at Harvard, saying rates are in a \u201cgood place\u201d and cautioning against hiking to fight oil-driven inflation \u2014 markets briefly rallied on the comments before fading. Tech led the losses (sector -1%+) while financials and utilities gained.\n**Memory carnage deepened.** Micron -10% (down 30% in 8 sessions), SanDisk -9%+, WDC -9%+. MU and SNDK have now rolled off the leader board entirely in our screener. The fiber/optical names (CIEN, LITE, DELL) held up better \u2014 the split between physical infrastructure and pure memory continues to widen.\n**Energy extended.** Oil names rallied again as Brent pushed past $115 on Monday. Our screener\u2019s energy cluster (APA +51.8% 1M RS, CF +46%, VLO +30%) is the strongest single-sector performer globally with 100% trend pass and 10 confirmed names.\n**Financials gained.** The Financials rotation (25 Sector Rotation signals) showed real-time confirmation as the sector was one of the few to close green. Large banks (GS, MS, JPM) all accelerating.\n**Consumer retail resilient.** ROST, BURL, CASY, FIVE all held with trend intact. Domestic consumer is decoupled from the geopolitical selloff.\n**Net read:** The regime is intact \u2014 Energy leadership accelerating, tech/memory under pressure, Financials rotation gaining traction. Powell\u2019s dovish hold removes the rate-hike tail risk and supports the view that the drawdown is oil-driven, not policy-driven."
  },
  "TOPIX": {
    sectors: "**Energy** \u2014 strongest sector at +19.1% 1M RS, 100% trend pass. Small cluster (3 names) but INPEX is a New Leader with +10.4% EPS CONFIRMED \u2014 the freshest energy leadership in any Asian market.\n**Utilities** \u2014 +7.5% 1M RS, 100% trend pass. Fully defensive but persistent.\n**Communication Services \u2014 inflecting.** +6.6% 1M RS while 3M remains deeply negative (-12.8%). KDDI (Emerging, +91.2 acceleration) and NTT (Emerging, +97.1 acceleration) are the key names. SoftBank Corp also Emerging at +98.5 acceleration.\n**Health Care** \u2014 +6.3% 1M RS, 56% trend pass. Astellas (#9, Existing Leader, +43.1% EPS CONFIRMED) and Otsuka (#14, New Leader, +8.8% EPS CONFIRMED) leading. Three confirmed names in the sector.\n**Consumer Staples \u2014 inflecting.** +2.5% 1M RS but negative 3M (-1.5%). Japan Tobacco and Kirin Holdings both flagged as Sector Rotation signals.\n**Industrials** \u2014 deepest sector (34 names), flat 1M RS with strong 3M (+13.3%). Four Existing Leaders but also 2 Fading. Selectivity required.\n**Consumer Discretionary and Info Tech** \u2014 both negative 1M RS. IT has the weakest trend (17%) despite strong individual names. Semi equipment (Disco, Ibiden) fading.",
    themes: "**Cable/Power Infrastructure** \u2014 Furukawa Electric (#1, MS 91.8, +34.2% EPS CONFIRMED), Fujikura (#3, +6.8% EPS CONFIRMED), Sumitomo Electric (#11, +14.5% EPS CONFIRMED but on EXIT signal). Three of the top names in TOPIX. This is the Japanese expression of the global electrification theme. Note: Sumitomo Electric has rolled to EXIT \u2014 monitor closely despite strong EPS.\n**Trading Houses** \u2014 Mitsubishi Corp (#4, Existing Leader), Mitsui \u0026 Co (#5, New Leader), Marubeni (#7, Existing Leader). Mitsubishi and Marubeni both UNCONFIRMED this week (EPS weakened). Mitsui also UNCONFIRMED. The sogo shosha are still holding on price RS but losing fundamental backing \u2014 a divergence to watch.\n**Kioxia** (#2, MS 91.4, +76.1% EPS CONFIRMED) \u2014 still the strongest single earnings confirmation in TOPIX. On WATCH signal as trend weakens.\n**Specialty Materials** \u2014 JX Advanced Metals (#12, +11.7% EPS CONFIRMED but on WATCH), Resonac (#10, on EXIT), Mitsui Kinzoku (Fading, +51.3% EPS CONFIRMED but on WATCH). The materials cluster is losing near-term momentum despite strong EPS.\n**Pharma** \u2014 Astellas (#9, +43.1% EPS CONFIRMED) and Otsuka (#14, New Leader, +8.8% CONFIRMED) \u2014 the Health Care inflection is strengthening with two confirmed names.\n**Semi Equipment** \u2014 Lasertec (#6, New Leader, +7.2% EPS CONFIRMED) is the clear standout. Disco and Ibiden both fading.",
    synthesis: "TOPIX in sharp pullback within an uptrend (-9.7% 1M, +4.3% 3M). 17 confirmed leaders \u2014 narrower than the prior week\u2019s 25. The cable infrastructure cluster (Furukawa, Fujikura) still holds the top ranks but Sumitomo Electric has rolled to EXIT \u2014 the first crack in the electrification theme. Trading houses (Mitsui, Mitsubishi, Marubeni) have lost CONFIRMED status this week, reverting to UNCONFIRMED \u2014 a notable downgrade. Freshest leadership: INPEX (Energy New Leader, CONFIRMED) and Lasertec (Semi New Leader, CONFIRMED). Health Care inflection strengthening with Astellas and Otsuka both confirmed. Pre-breakout: KDDI and NTT (both Emerging with 91%+ acceleration), SoftBank Corp (+98.5 acceleration) \u2014 telecom rotation accelerating.",
    daily: "**Nikkei marginally lower, TOPIX flat.** Oil at $115+ adds a macro headwind \u2014 Japan imports 93% of its crude through the Strait of Hormuz, making it the most energy-exposed major economy. Yen weakening provided some offset for exporters.\n**Cable infrastructure held.** Fujikura (#3) and Furukawa Electric (#1) outperformed the index. The physical infrastructure theme remains decoupled from the tech/semi selloff. However, Sumitomo Electric rolling to EXIT is the first warning sign for this cluster.\n**Trading houses steady but losing fundamental backing.** Mitsui (#5) and Mitsubishi (#4) held on commodity exposure (oil surge) but have lost CONFIRMED status this week as EPS revisions weakened. The sogo shosha are still leading on price but the fundamental support is eroding.\n**Materials under pressure.** Resonac on EXIT, Mitsui Kinzoku on WATCH \u2014 the specialty materials cluster is fading fastest in TOPIX.\n**Pharma resilient.** Astellas (#9, +43.1% EPS CONFIRMED) and Otsuka (#14, New Leader CONFIRMED) held their positions \u2014 the Health Care inflection is the most constructive new development.\n**Net read:** Confirmed leaders dropped from 25 to 17 week-over-week. Cable infra and pharma are the most resilient clusters. The trading house downgrade from CONFIRMED to UNCONFIRMED is the session\u2019s most significant signal."
  },
  "KOSPI": {
    sectors: "**Consumer Staples** \u2014 strongest 1M RS (+16.7%) but only 1 name (KT\u0026G, Emerging signal). Thin and unreliable.\n**Financials** \u2014 +5.2% 1M RS, but only 22% trend pass. Mirae Asset Securities is the sole confirmed Existing Leader.\n**Industrials** \u2014 +2.2% 1M RS with 29% trend pass. Five confirmed names including Hyosung Heavy (+10.5% EPS CONFIRMED). The defence/infrastructure complex remains the broadest leadership.\n**Info Tech** \u2014 flat 1M RS (+0.2%) with strong 3M (+33.7%). Samsung Electro-Mechanics is the Existing Leader but SK Hynix (MS 58, EXIT signal) and Samsung Electronics (MS 56, EXIT) are firmly in the breakdown column.\n**Consumer Discretionary** \u2014 -11.5% 1M RS. Hyundai Motor on EXIT. Bottom of the market.\n**Materials and Utilities** \u2014 both deeply negative. No leadership anywhere.\n**No sectors are cleanly inflecting** \u2014 the market is under broad pressure with leadership concentrated in just Industrials and Financials.",
    themes: "**Defence/Infrastructure** \u2014 Hanwha Systems (#1, sole New Leader, MS 90.3), LS Electric (#2, Existing Leader), Hyundai E\u0026C (#3, Existing Leader), Hyosung Heavy (#5, +10.5% EPS CONFIRMED), Doosan (#8, Fading Leader but +10.9% EPS CONFIRMED). The cluster is thinning \u2014 only 1 New Leader now vs multiple last week. But the confirmed core (Mirae Asset, Hyosung Heavy, Samsung Electro-Mechanics) is holding.\n**Financials** \u2014 Mirae Asset Securities (#4, +64.9% EPS CONFIRMED, Existing Leader). Shinhan Financial and KB Financial both accelerating with 80%+ acceleration scores. Korean brokerages benefiting from elevated market volatility and trading volumes.\n**Semiconductors \u2014 breaking down.** SK Hynix (MS 58, EXIT), Samsung Electronics (MS 56, EXIT), Hanmi Semi (#9, Fading, WATCH). The entire semi complex has rolled over. SK Hynix lost 5.8% relative last month despite +91% EPS \u2014 price is leading down while fundamentals lag.\n**Hyundai Motor** \u2014 on EXIT at -15.7% 1M RS. The auto sector is a clear avoid.",
    synthesis: "KOSPI in severe pullback (-16.7% 1M) within a strong multi-month rally. Only 5 confirmed names in the entire market \u2014 the thinnest leadership of any market we cover. The semiconductor complex has fully broken down (SK Hynix, Samsung Electronics, Hanmi Semi all on EXIT or WATCH). Highest-conviction: Mirae Asset Securities (+64.9% EPS CONFIRMED, sole financial anchor) and Hyosung Heavy (+10.5% EPS CONFIRMED, infrastructure play). The defence/infrastructure cluster is holding but thinning. Emerging signals: Shinhan Financial and KB Financial (both accelerating at 80%+ \u2014 Korean banks may be the next rotation). Clear avoid: SK Hynix, Samsung Electronics, Hyundai Motor \u2014 all on EXIT.",
    daily: "**KOSPI under pressure in Monday session.** The index remains near 5,200 \u2014 down 16.7% over the past month, the steepest drawdown of any market we cover. Brent at $115+ and OECD cutting Korea\u2019s 2026 growth forecast to 1.7% (from 2.1%) weigh on sentiment.\n**Semiconductors continued to bleed.** SK Hynix and Samsung Electronics both on EXIT in our screener. Micron\u2019s -10% on the US Monday session cascades through to the Korean semi complex. The TurboQuant overhang + oil-driven inflation create a double headwind.\n**Defence/infrastructure resilient.** Hanwha Systems (#1), LS Electric (#2), and Hyosung Heavy (#5) showed relative strength. The defence cluster is the only leadership axis still functioning.\n**Financial brokerages held.** Mirae Asset Securities (#4, CONFIRMED) supported by elevated trading volumes from broader market volatility. Shinhan Financial and KB Financial both accelerating.\n**Net read:** KOSPI\u2019s confirmed leader count at just 5 is the thinnest of any market. The semi breakdown is fully confirmed. The defence/infrastructure + financials axis is all that\u2019s left."
  },
  "HSI": {
    sectors: "**Energy** \u2014 strongest at +9.9% 1M RS, 75% trend pass. PetroChina (Existing Leader, +12.1% EPS CONFIRMED) and CNOOC (+27.1% EPS CONFIRMED) anchor the sector.\n**Industrials** \u2014 +6.5% 1M RS, 88% trend pass \u2014 best breadth in the index. ZTO Express and Xinyi Glass lead. CATL (+33.8% 1M RS) Emerging.\n**Health Care** \u2014 +3.1% 1M RS. WuXi AppTec (New Leader, +4.4% EPS CONFIRMED) and CSPC Pharma (+49.6% EPS CONFIRMED) are the strongest earnings-backed names in the index.\n**Utilities** \u2014 +2.9% 1M RS, 100% trend pass. Fully defensive.\n**Financials** \u2014 +1.8% 1M RS. AIA (Existing Leader), ICBC (+11.2%), CCB (+10.3%) grinding higher. CM Bank Emerging at +100 acceleration.\n**Consumer Discretionary and Communication Services** \u2014 both negative. The tech/internet complex (Tencent, Alibaba, Meituan, JD.com) remains bottom-half. Zero confirmed leaders from HK tech.\n**Real Estate** \u2014 mixed. SHK PPT on EXIT despite being #4 by MS. CK Asset Fading. China Resources Mix (New Leader) is the only positive signal.\n**Info Tech** \u2014 weakest sector at -5.5% 1M RS. No leadership.",
    themes: "**Energy** (PetroChina #3, +12.1% EPS CONFIRMED; CNOOC #8, +27.1% EPS CONFIRMED) \u2014 both Existing Leaders riding the Hormuz oil surge. Highest-conviction pair in the index.\n**Selective Consumer/Health** \u2014 WH Group (#1, New Leader, +3.3% EPS CONFIRMED) is the top-ranked name in HSI. WuXi AppTec (#2, New Leader, +4.4% EPS CONFIRMED) is the freshest high-quality addition. These are stock-specific stories, not sector themes.\n**Geely** (#9, +38.8% 1M RS) \u2014 strongest short-term momentum in the index by a wide margin but not yet a leader by composite. The EV theme is price-led without earnings confirmation.\n**State Banks** \u2014 ICBC, CCB, Bank of China all with positive 1M RS and trend pass. Steady but not accelerating. CM Bank at +100 acceleration is the standout early signal.\n**Tech/Internet absent.** Tencent, Alibaba, Meituan, Xiaomi all bottom-half. JD.com Emerging but far from confirmed.\n**CATL and JD Logistics** (both Emerging, +33.8% and +30.9% 1M RS) \u2014 the strongest short-term momentum names outside energy, signalling potential EV/logistics rotation.",
    synthesis: "HSI in intermediate downtrend below 200DMA. Only 7 confirmed leaders \u2014 the weakest confirmed count of any market. Leadership is defensive: energy (PetroChina, CNOOC), materials (China Hongqiao), and selective stock-picks (WH Group, WuXi AppTec). Key new development: WuXi AppTec graduated to New Leader with CONFIRMED status \u2014 the first high-quality Health Care name to lead in HSI. Geely\u2019s +38.8% 1M RS surge is the most dramatic move but lacks composite confirmation. Emerging signals from CATL, JD Logistics, and BYD hint at a possible EV/logistics rotation but these are very early. Capital allocation should still favour US, Japan, and Korea over HK.",
    daily: "**Hang Seng -0.8% to 24,751.** Weaker than Friday\u2019s session as Brent surging past $115 weighed on the import-heavy HK economy. China\u2019s yuan-based toll system at Hormuz provides marginal diplomatic insulation but not enough to offset the broader oil shock.\n**Energy held up.** PetroChina (#3) and CNOOC (#8) \u2014 both CONFIRMED Existing Leaders \u2014 rallied as oil climbed. The energy pair continues to be the highest-conviction trade in HSI.\n**EV/auto momentum building.** Geely (#9, +38.8% 1M RS) extended its surge. CATL Emerging at +33.8% 1M RS, JD Logistics Emerging at +30.9%. The EV cluster is generating the most aggressive price action, driven by the thesis that $100+ oil accelerates EV adoption.\n**WuXi AppTec breakout.** Newly promoted to #2 in the screener as a New Leader with CONFIRMED status. The pharma/biotech CDMO theme is emerging as a counter-cyclical play.\n**Tech/internet still absent.** Tencent, Alibaba, Meituan remain firmly bottom-half. No change.\n**Net read:** Energy and selective health care/consumer are the only leadership. The EV Emerging cluster (Geely, CATL, BYD) is the one new development worth monitoring."
  },
  "CSI300": {
    sectors: "**Energy** \u2014 strongest at +13.5% 1M RS, 89% trend pass. COSCO Shipping and China Merchants Energy are confirmed Existing Leaders. Four confirmed names.\n**Utilities** \u2014 +10.4% 1M RS, 75% trend pass. Defensive but broadening with 4 Emerging signals (Yangtze Power, Huaneng, GD Power, Huadian New Energy). One Existing Leader.\n**Consumer Staples** \u2014 +3.9% 1M RS but negative 3M (-1.3%) \u2014 inflecting. EPS deeply negative (-5.1%) so the turn is price-led.\n**Financials \u2014 inflecting.** +2.9% 1M RS with negative 3M (-3.5%). Seven Sector Rotation signals from state banks (CITIC, Jiangsu, CNPC Capital, CCB, Bank of China, Bank of Beijing). The broadest rotation signal in the CSI 300. Four confirmed names.\n**Industrials** \u2014 deepest sector (45 names), 9 Existing Leaders. Slightly negative 1M RS (-0.3%) but positive 3M (+7.8%). Electrification cluster anchors the sector.\n**Information Technology** \u2014 weakest sector at -7.2% 1M RS with 17% trend pass. 4 Fading Leaders. The GigaDevice/Advanced Micro/Range Intelligence group is rolling over.\n**Real Estate** \u2014 -8.6% 1M RS. Weakest sector. No leadership.",
    themes: "**Electrical Infrastructure** \u2014 Zhongtian Tech (#1, MS 89.8), Dongfang Electric (#3), Sieyuan Electric (#4, +6.3% EPS CONFIRMED), TBEA (#11, on EXIT), Ningbo Deye (#7, +29.2% 1M RS), Zhejiang Chint (#19). The Chinese expression of the global electrification theme. Sieyuan is the highest-conviction name. TBEA rolling to EXIT is a warning sign.\n**Specialty Materials** \u2014 Qinghai Salt Lake (#2, +23.9% EPS CONFIRMED), Ganfeng Lithium (#10, +60.6% EPS CONFIRMED), Ningxia Baofeng (#8, +7.6% EPS CONFIRMED), China Jushi (#17, +19.6% EPS CONFIRMED), Zhejiang NHU (#20). Deep cluster with strong EPS backing.\n**Shipping/Energy** \u2014 COSCO Shipping (#9, +36.8% EPS CONFIRMED), China Merchants Energy (#6, +33.2% EPS CONFIRMED). Both Existing Leaders with massive EPS.\n**Financials Rotation** \u2014 7 Sector Rotation signals from state banks. CITIC Bank (MS 75.9, +2.3% EPS CONFIRMED) and Bank of Jiangsu (MS 75.9, CONFIRMED) are the earliest confirmed names. ICBC Emerging at +91.4 acceleration. The state bank rotation parallels the US Financials rotation.\n**PCB/Connectivity** \u2014 Eoptolink (#16, New Leader, +1.6% EPS CONFIRMED), NAURA Tech (#15, New Leader but UNCONFIRMED). Data infrastructure supply chain active in China.",
    synthesis: "CSI 300 in intermediate downtrend (-4.3% 1M, -2.6% 3M) but with 25 confirmed leaders \u2014 deeper than either KOSPI or HSI. Highest-conviction: Qinghai Salt Lake (#2, +23.9% EPS CONFIRMED), Sieyuan Electric (#4, +6.3% EPS CONFIRMED), COSCO Shipping (#9, +36.8% EPS CONFIRMED), and Ganfeng Lithium (+60.6% EPS CONFIRMED). The electrical infrastructure and specialty materials clusters are the strongest thematic parallel to global leadership. Key developing theme: Financials rotation \u2014 7 Sector Rotation signals from state banks, paralleling the US. TBEA and Sieyuan both on EXIT/WATCH \u2014 the electrification cluster is showing its first cracks. Pre-breakout: Sungrow Power (Accelerating, +95.5 acceleration), ICBC (Emerging, +91.4), and Agricultural Bank (Accelerating, +97.3 \u2014 strongest bank acceleration).",
    daily: "**CSI 300 +0.2% to 4,508.** China marginally positive, continuing to outperform global markets as the yuan-based Hormuz toll system and diplomatic channel with Iran provide relative insulation.\n**Energy/shipping strong.** COSCO Shipping (#9, +36.8% EPS CONFIRMED) and China Merchants Energy (#6, +33.2% EPS CONFIRMED) rallied further as Brent surged past $115. Direct energy plays remain the strongest cluster in the index.\n**Financials rotation building.** State banks gained modestly. CITIC Bank and Bank of Jiangsu are the earliest confirmed Sector Rotation names. ICBC Emerging at +91.4 acceleration, Agricultural Bank accelerating at +97.3. The 7 Sector Rotation signals from state banks parallel the US Financials rotation.\n**Tech/semi weakness persisted.** GigaDevice Fading at -13.9% 1M RS, Advanced Micro -6.2%. The Info Tech sector\u2019s -7.2% 1M RS is the weakest in the index. The Micron selloff in the US (-10% Monday) will carry through.\n**Electrification splitting.** Zhongtian Tech (#1) and Dongfang Electric (#3) stable at the top. But TBEA and Sieyuan both on EXIT \u2014 the cluster is no longer uniformly strong.\n**Net read:** Bifurcation confirmed: energy/materials/banks vs tech/consumer. The Financials rotation is the biggest developing theme. The electrification cluster\u2019s first cracks (TBEA, Sieyuan on EXIT) are the key deterioration to watch."
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
    bench: { "1M": Math.round(bench.r1m * 10) / 10, "3M": Math.round(bench.r3m * 10) / 10, "6M": Math.round(bench.r6m * 10) / 10, "1Y": Math.round(bench.r1y * 10) / 10 },
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
  fl: { leader: "All", confirm: "All", signal: "All", trend: "All", q: "" },
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
  if (fl.leader !== "All") d = d.filter(r => r.lf === fl.leader);
  if (fl.confirm !== "All") d = d.filter(r => r.cf === fl.confirm);
  if (fl.signal !== "All") d = d.filter(r => getSig(r) === fl.signal);
  if (fl.trend !== "All") d = d.filter(r => fl.trend === "Pass" ? r.tr === 1 : r.tr === 0);
  if (fl.q) { const s = fl.q.toUpperCase(); d = d.filter(r => r.t.toUpperCase().includes(s) || r.c.toUpperCase().includes(s)); }
  d.sort((a, b) => { const va = a[state.sCol] ?? -Infinity; const vb = b[state.sCol] ?? -Infinity; return state.sDir === "desc" ? vb - va : va - vb; });
  return d;
}

// --- HTML Helpers ------------------------------------------------------------

function esc(s) {
  if (s == null) return "";
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");
}

function pctHtml(v, bold) {
  if (v == null) return '<span class="text-slate-300">\u2014</span>';
  const c = v > 0 ? "text-emerald-700" : v < 0 ? "text-red-700" : "text-slate-500";
  const w = bold && Math.abs(v) > 5 ? " font-semibold" : "";
  return `<span class="${c}${w}">${v > 0 ? "+" : ""}${v.toFixed(1)}%</span>`;
}

function scoreHtml(v) {
  if (v == null) return '<span class="text-slate-300">\u2014</span>';
  const bg = v >= 85 ? "bg-emerald-100 text-emerald-800" : v >= 70 ? "bg-lime-100 text-lime-800" : v <= 25 ? "bg-red-100 text-red-800" : "text-slate-700";
  return `<span class="px-1 rounded text-xs font-mono ${bg}">${v.toFixed(1)}</span>`;
}

function badgeHtml(text) {
  if (!text || text === "\u2014" || text === "HOLD") return '<span class="text-slate-300 text-xs">\u2014</span>';
  const styles = {
    "NEW LEADER": "bg-emerald-100 text-emerald-800 border-emerald-200",
    "EXISTING LEADER": "bg-blue-100 text-blue-800 border-blue-200",
    "FADING LEADER": "bg-amber-100 text-amber-800 border-amber-200",
    "CONFIRMED": "bg-emerald-100 text-emerald-800 border-emerald-200",
    "UNCONFIRMED": "bg-red-100 text-red-800 border-red-200",
    "REVISION LEADER": "bg-violet-100 text-violet-800 border-violet-200",
    "EMERGING": "bg-rose-100 text-rose-800 border-rose-200",
    "ACCELERATING": "bg-violet-100 text-violet-800 border-violet-200",
    "SECTOR ROTATION": "bg-amber-100 text-amber-800 border-amber-200",
    "EXIT": "bg-red-200 text-red-900 border-red-300",
    "WATCH": "bg-amber-200 text-amber-900 border-amber-300",
    "HOLD": "bg-slate-50 text-slate-500 border-slate-200",
  };
  return `<span class="text-xs px-1.5 py-0.5 rounded border font-medium ${styles[text] || "bg-slate-100"}">${esc(text)}</span>`;
}

function boldTextHtml(text) {
  if (!text) return "";
  return text.split("\n").map(para =>
    '<p class="mb-2 last:mb-0">' + esc(para).replace(/\*\*([^*]+)\*\*/g, '<strong class="text-slate-900">$1</strong>') + '</p>'
  ).join("");
}

function sortArrow(col) {
  return state.sCol === col ? (state.sDir === "desc" ? " \u2193" : " \u2191") : "";
}

// --- Render Functions --------------------------------------------------------

function renderMarketTabs() {
  const el = document.getElementById("market-tabs");
  el.innerHTML = Object.entries(MARKET_LABELS).map(([k, v]) =>
    `<button data-mkt="${k}" class="px-3 py-1.5 text-sm font-medium rounded-md ${state.mkt === k ? "bg-slate-800 text-white shadow-sm" : "text-slate-600 hover:bg-slate-200"}">${esc(v)}</button>`
  ).join("");
}

function renderTabButtons() {
  const s = document.getElementById("tab-screener");
  const c = document.getElementById("tab-config");
  const g = document.getElementById("tab-guide");
  s.className = "px-3 py-1.5 text-sm font-medium rounded-md " + (state.tab === "screener" ? "bg-slate-800 text-white" : "text-slate-500 hover:bg-slate-200");
  c.className = "px-3 py-1.5 text-sm font-medium rounded-md " + (state.tab === "config" ? "bg-slate-800 text-white" : "text-slate-500 hover:bg-slate-200");
  g.className = "px-3 py-1.5 text-sm font-medium rounded-md " + (state.tab === "guide" ? "bg-slate-800 text-white" : "text-slate-500 hover:bg-slate-200");
  document.getElementById("screener-panel").classList.toggle("hidden", state.tab !== "screener");
  document.getElementById("config-panel").classList.toggle("hidden", state.tab !== "config");
  document.getElementById("guide-panel").classList.toggle("hidden", state.tab !== "guide");
}

function renderRegime(engine) {
  const el = document.getElementById("regime-bar");
  let html = `<div><div class="text-xs text-slate-500 uppercase tracking-wide">Regime</div><div class="text-sm font-semibold text-slate-800">${esc(engine.regime)}</div></div>`;
  html += '<div class="h-8 w-px bg-slate-200"></div>';
  for (const [k, v] of Object.entries(engine.bench)) {
    const c = v >= 0 ? "text-emerald-700" : "text-red-700";
    html += `<div class="text-center"><div class="text-xs text-slate-400">${k}</div><div class="text-sm font-mono font-semibold ${c}">${v >= 0 ? "+" : ""}${v.toFixed(1)}%</div></div>`;
  }
  el.innerHTML = html;
}

function renderKPIs(engine) {
  const d = engine.stocks;
  const st = {
    n: d.length,
    nw: d.filter(r => r.lf === "NEW LEADER").length,
    ex: d.filter(r => r.lf === "EXISTING LEADER").length,
    fd: d.filter(r => r.lf === "FADING LEADER").length,
    cf: d.filter(r => r.cf === "CONFIRMED").length,
    xt: d.filter(r => r.ex === "EXIT").length,
    wt: d.filter(r => r.ex === "WATCH").length,
  };
  let html = `<span class="text-slate-400 text-xs">Universe</span><span class="font-bold text-slate-800">${st.n}</span><div class="h-4 w-px bg-slate-200"></div>`;
  html += `<span class="text-xs text-emerald-600">New</span><span class="font-bold text-emerald-700">${st.nw}</span>`;
  html += `<span class="text-xs text-blue-600">Existing</span><span class="font-bold text-blue-700">${st.ex}</span>`;
  html += `<span class="text-xs text-amber-600">Fading</span><span class="font-bold text-amber-700">${st.fd}</span><div class="h-4 w-px bg-slate-200"></div>`;
  html += `<span class="text-xs text-emerald-600">Confirmed</span><span class="font-bold text-emerald-700">${st.cf}</span>`;
  if (st.xt > 0) html += `<div class="h-4 w-px bg-slate-200"></div><span class="text-xs text-red-600">EXIT</span><span class="font-bold text-red-700">${st.xt}</span>`;
  if (st.wt > 0) html += `<span class="text-xs text-amber-600">WATCH</span><span class="font-bold text-amber-700">${st.wt}</span>`;
  html += '<div class="flex-1"></div>';
  html += `<button id="toggle-commentary" class="text-xs text-slate-500 hover:text-slate-800 px-2 py-1 rounded border border-slate-200">${state.showC ? "Hide" : "Show"} Commentary</button>`;
  document.getElementById("kpi-strip").innerHTML = html;
}

function renderCommentary() {
  const el = document.getElementById("commentary");
  if (!state.showC) { el.innerHTML = ""; return; }
  const cmt = COMMENTARY[state.mkt] || {};
  el.innerHTML = `
    ${cmt.daily ? '<div class="p-3 bg-amber-50 rounded-lg border border-amber-200"><div class="text-xs uppercase tracking-wide text-amber-600 font-semibold mb-1">Price Action \u2014 30 Mar</div><div class="text-sm text-amber-900 leading-relaxed">' + boldTextHtml(cmt.daily) + '</div></div>' : ''}
    <div class="p-3 bg-slate-50 rounded-lg border border-slate-200"><div class="text-xs uppercase tracking-wide text-slate-400 font-semibold mb-1">Sector Leadership</div><div class="text-sm text-slate-700 leading-relaxed">${boldTextHtml(cmt.sectors || "")}</div></div>
    <div class="p-3 bg-slate-50 rounded-lg border border-slate-200"><div class="text-xs uppercase tracking-wide text-slate-400 font-semibold mb-1">Thematic Clusters</div><div class="text-sm text-slate-700 leading-relaxed">${boldTextHtml(cmt.themes || "")}</div></div>
    <div class="p-3 bg-blue-50 rounded-lg border border-blue-200"><div class="text-xs uppercase tracking-wide text-blue-500 font-semibold mb-1">Synthesis</div><div class="text-sm text-blue-900 leading-relaxed">${boldTextHtml(cmt.synthesis || "")}</div></div>
  `;
}

function renderFilters() {
  const fl = state.fl;
  function sel(key, label, opts) {
    return `<select data-filter="${key}" class="px-2 py-1 text-xs border border-slate-200 rounded-md bg-white focus:outline-none">` +
      opts.map(o => `<option value="${esc(o)}" ${fl[key] === o ? "selected" : ""}>${o === "All" ? label + ": All" : o === "\u2014" ? "None" : esc(o)}</option>`).join("") +
      `</select>`;
  }
  document.getElementById("filter-bar").innerHTML = `
    <input type="text" id="search-input" placeholder="Search..." value="${esc(fl.q)}" class="px-2 py-1 text-sm border border-slate-200 rounded-md w-40 focus:outline-none focus:border-slate-400" />
    ${sel("leader", "Leader", FOPTS.leader)}
    ${sel("confirm", "Confirm", FOPTS.confirm)}
    ${sel("signal", "Signal", FOPTS.signal)}
    ${sel("trend", "Trend", FOPTS.trend)}
    <button id="clear-filters" class="text-xs text-slate-400 hover:text-slate-700 px-2 py-1">Clear</button>
  `;
}

function renderTable(filtered, totalCount) {
  const cols = [
    { key: "t", label: "Ticker", align: "left", sort: true, w: 88 },
    { key: "c", label: "Company", align: "left", w: 130 },
    { key: "s", label: "Sector", align: "left", w: 120 },
    { key: "px", label: "Last Price", align: "center", sort: true, w: 82 },
    { key: "mc", label: "Mkt Cap (US$)", align: "center", sort: true, w: 82 },
    { key: "r1m", label: "1M", align: "center", sort: true, border: true, w: 66 },
    { key: "r3m", label: "3M", align: "center", sort: true, w: 66 },
    { key: "eps", label: "Est. EPS \u0394", align: "center", sort: true, w: 74 },
    { key: "rs1m", label: "RS 1M", align: "center", sort: true, border: true, w: 66 },
    { key: "rs3m", label: "RS 3M", align: "center", sort: true, w: 66 },
    { key: "rs6m", label: "RS 6M", align: "center", sort: true, w: 66 },
    { key: "rs1y", label: "RS 1Y", align: "center", sort: true, w: 66 },
    { key: "ms", label: "Master", align: "center", sort: true, border: true, w: 64 },
    { key: "ac", label: "Acceleration", align: "center", sort: true, w: 84 },
    { key: "tr", label: "Trend", align: "center", w: 52 },
    { key: "lf", label: "Leader", align: "center", border: true, w: 108 },
    { key: "cf", label: "Confirm", align: "center", w: 104 },
    { key: "sig", label: "Signal", align: "center", w: 120 },
  ];

  // Colgroup for fixed widths
  let colgroup = '<colgroup>';
  for (const col of cols) {
    colgroup += `<col style="width:${col.w}px">`;
  }
  colgroup += '</colgroup>';

  // Group headers
  let thead = '<thead><tr class="bg-slate-800 text-white">';
  thead += '<th class="px-2 py-2 text-left text-xs font-semibold" colspan="5">IDENTIFICATION</th>';
  thead += '<th class="px-2 py-2 text-center text-xs font-semibold border-l border-slate-600" colspan="3">RETURNS</th>';
  thead += '<th class="px-2 py-2 text-center text-xs font-semibold border-l border-slate-600" colspan="4">RELATIVE STRENGTH</th>';
  thead += '<th class="px-2 py-2 text-center text-xs font-semibold border-l border-slate-600" colspan="3">SCORES</th>';
  thead += '<th class="px-2 py-2 text-center text-xs font-semibold border-l border-slate-600" colspan="3">SIGNALS</th>';
  thead += '</tr><tr class="bg-slate-100 border-b border-slate-200">';
  for (const col of cols) {
    const bdr = col.border ? " border-l border-slate-200" : "";
    if (col.sort) {
      thead += `<th data-sortable data-col="${col.key}" class="px-2 py-1.5 text-xs font-semibold text-slate-500 cursor-pointer hover:text-slate-800 select-none whitespace-nowrap text-${col.align}${bdr}">${col.label}${sortArrow(col.key)}</th>`;
    } else {
      thead += `<th class="px-2 py-1.5 text-xs text-slate-500 text-${col.align}${bdr}">${col.label}</th>`;
    }
  }
  thead += '</tr></thead>';

  // Body rows
  const rows = filtered.slice(0, 200);
  let tbody = '<tbody>';
  if (rows.length === 0) {
    tbody += '<tr><td colspan="18" class="px-4 py-8 text-center text-slate-400">No Names Match Filters</td></tr>';
  } else {
    for (let idx = 0; idx < rows.length; idx++) {
      const r = rows[idx];
      const sig = getSig(r);
      const rowCls = sig === "EXIT" ? "bg-red-50" : sig === "WATCH" ? "bg-amber-50" : idx % 2 === 1 ? "bg-slate-50" : "";
      const mcStr = r.mc >= 1000 ? (r.mc / 1000).toFixed(1) + "T" : r.mc.toFixed(0) + "B";
      const trStr = r.tr === 1 ? '<span class="text-emerald-600 font-bold">\u2713</span>' : '<span class="text-slate-300">\u2014</span>';
      tbody += `<tr class="border-b border-slate-100 hover:bg-slate-50 ${rowCls}">`;
      tbody += `<td class="px-2 py-1.5 font-mono font-semibold text-slate-900 truncate">${esc(r.t)}</td>`;
      tbody += `<td class="px-2 py-1.5 text-slate-600 truncate">${esc(r.c)}</td>`;
      tbody += `<td class="px-2 py-1.5 text-slate-500 truncate">${esc(r.s)}</td>`;
      const pxStr = r.px != null ? r.px.toLocaleString(undefined, { minimumFractionDigits: r.px < 10 ? 2 : r.px < 1000 ? 1 : 0, maximumFractionDigits: r.px < 10 ? 2 : r.px < 1000 ? 1 : 0 }) : "\u2014";
      tbody += `<td class="px-2 py-1.5 text-center text-slate-600 font-mono">${pxStr}</td>`;
      tbody += `<td class="px-2 py-1.5 text-center text-slate-600 font-mono">${mcStr}</td>`;
      tbody += `<td class="px-2 py-1.5 text-center border-l border-slate-100">${pctHtml(r.r1m, true)}</td>`;
      tbody += `<td class="px-2 py-1.5 text-center">${pctHtml(r.r3m, true)}</td>`;
      tbody += `<td class="px-2 py-1.5 text-center">${pctHtml(r.eps, true)}</td>`;
      tbody += `<td class="px-2 py-1.5 text-center border-l border-slate-100">${pctHtml(r.rs1m, true)}</td>`;
      tbody += `<td class="px-2 py-1.5 text-center">${pctHtml(r.rs3m, true)}</td>`;
      tbody += `<td class="px-2 py-1.5 text-center">${pctHtml(r.rs6m, true)}</td>`;
      tbody += `<td class="px-2 py-1.5 text-center">${pctHtml(r.rs1y, true)}</td>`;
      tbody += `<td class="px-2 py-1.5 text-center border-l border-slate-100">${scoreHtml(r.ms)}</td>`;
      tbody += `<td class="px-2 py-1.5 text-center">${scoreHtml(r.ac)}</td>`;
      tbody += `<td class="px-2 py-1.5 text-center">${trStr}</td>`;
      tbody += `<td class="px-2 py-1.5 text-center border-l border-slate-100">${badgeHtml(r.lf)}</td>`;
      tbody += `<td class="px-2 py-1.5 text-center">${badgeHtml(r.cf)}</td>`;
      tbody += `<td class="px-2 py-1.5 text-center">${badgeHtml(sig)}</td>`;
      tbody += '</tr>';
    }
  }
  tbody += '</tbody>';

  const tableEl = document.getElementById("data-table");
  tableEl.style.tableLayout = "fixed";
  tableEl.innerHTML = colgroup + thead + tbody;
  document.getElementById("table-footer").textContent = `Showing ${Math.min(filtered.length, 200)} of ${totalCount} \u2022 Computed from Raw Bloomberg Data`;
}

function renderConfig() {
  const c = state.cfg;
  function row(label, key, step, min, max, desc) {
    return `<div class="flex items-center py-2 border-b border-slate-100">
      <div class="w-52 text-sm text-slate-700">${label}</div>
      <input type="number" data-cfg="${key}" value="${c[key]}" step="${step || 0.01}" ${min != null ? `min="${min}"` : ""} ${max != null ? `max="${max}"` : ""}
        class="w-20 px-2 py-1 text-sm font-mono font-semibold text-blue-700 border border-blue-200 rounded bg-blue-50 focus:outline-none focus:border-blue-400" />
      ${desc ? `<div class="text-xs text-slate-400 italic ml-3">${desc}</div>` : ""}
    </div>`;
  }

  function section(title, content) {
    return `<div class="mb-5"><h3 class="text-xs uppercase tracking-wide text-slate-400 font-semibold mb-2 pb-1 border-b border-slate-200">${title}</h3>${content}</div>`;
  }

  let html = section("Composite Weights",
    row("1M Weight", "w1m", 0.05, 0, 1, "Short-term momentum") +
    row("3M Weight", "w3m", 0.05, 0, 1, "Primary signal") +
    row("6M Weight", "w6m", 0.05, 0, 1, "Medium-term") +
    row("1Y Weight", "w1y", 0.05, 0, 1, "Secular (skip-month)") +
    `<div class="text-xs text-slate-400 mt-1">Sum: ${(c.w1m + c.w3m + c.w6m + c.w1y).toFixed(2)} (Auto-Normalized)</div>`
  );
  html += section("Universe Filters",
    row("Min Market Cap (US$B)", "minCap", 1, 0)
  );
  html += section("Trend Thresholds",
    row("52-Week High Proximity", "hiProx", 0.05, 0.5, 1) +
    row("Min Trend Score (of 3)", "minTrend", 1, 1, 3)
  );
  html += section("Master Score Blend",
    row("VolAdj Weight", "volAdj", 0.05, 0, 1) +
    row("Industry Weight", "ind", 0.05, 0, 1)
  );
  html += section("Leader Thresholds (percentile)",
    row("Top Decile", "decile", 5, 50, 99) +
    row("Top Quartile", "quartile", 5, 25, 95)
  );
  html += section("Signal Parameters",
    row("Winsorize Cap (%)", "winsorize", 50, 50, 500) +
    row("Accel Gate (Percentile)", "accelGate", 5, 0, 75)
  );
  html += section("Exit Signals",
    row("EXIT Threshold (of 3)", "exitThresh", 1, 1, 3) +
    row("WATCH Threshold (of 3)", "watchThresh", 1, 1, 3)
  );

  document.getElementById("cfg-body").innerHTML = html;
}

// --- Main Render -------------------------------------------------------------

function render() {
  renderMarketTabs();
  renderTabButtons();

  if (state.tab === "config") {
    renderConfig();
  }

  // Always compute engine for regime bar / KPIs even when on config tab
  const engine = getEngine();
  engineCache = engine;

  if (state.tab === "screener") {
    renderRegime(engine);
    renderKPIs(engine);
    renderCommentary();
    renderFilters();
    const filtered = getFiltered(engine);
    renderTable(filtered, engine.stocks.length);
  }
}

// --- Event Handling ----------------------------------------------------------

document.addEventListener("click", function(e) {
  const btn = e.target.closest("button");
  if (!btn) return;

  // Market tab
  if (btn.dataset.mkt) {
    state.mkt = btn.dataset.mkt;
    state.tab = "screener";
    state.fl = { leader: "All", confirm: "All", signal: "All", trend: "All", q: "" };
    render();
    return;
  }

  // Screener / Config / Guide tabs
  if (btn.id === "tab-screener") { state.tab = "screener"; render(); return; }
  if (btn.id === "tab-config") { state.tab = "config"; render(); return; }
  if (btn.id === "tab-guide") { state.tab = "guide"; render(); return; }

  // Toggle commentary
  if (btn.id === "toggle-commentary") { state.showC = !state.showC; renderKPIs(engineCache); renderCommentary(); return; }

  // Clear filters
  if (btn.id === "clear-filters") {
    state.fl = { leader: "All", confirm: "All", signal: "All", trend: "All", q: "" };
    renderFilters();
    const filtered = getFiltered(engineCache);
    renderTable(filtered, engineCache.stocks.length);
    return;
  }

  // Reset config
  if (btn.id === "cfg-reset") {
    state.cfg = { ...DEFAULT_CFG };
    render();
    return;
  }
});

// Sort headers (delegated)
document.addEventListener("click", function(e) {
  const th = e.target.closest("th[data-sortable]");
  if (!th) return;
  const col = th.dataset.col;
  if (state.sCol === col) { state.sDir = state.sDir === "desc" ? "asc" : "desc"; }
  else { state.sCol = col; state.sDir = "desc"; }
  const filtered = getFiltered(engineCache);
  renderTable(filtered, engineCache.stocks.length);
});

// Filter dropdowns
document.addEventListener("change", function(e) {
  // Filter selects
  if (e.target.dataset.filter) {
    state.fl[e.target.dataset.filter] = e.target.value;
    const filtered = getFiltered(engineCache);
    renderTable(filtered, engineCache.stocks.length);
    return;
  }

  // Config inputs
  if (e.target.dataset.cfg) {
    const key = e.target.dataset.cfg;
    state.cfg[key] = parseFloat(e.target.value) || 0;
    render();
    return;
  }
});

// Search input (live filtering)
document.addEventListener("input", function(e) {
  if (e.target.id === "search-input") {
    state.fl.q = e.target.value;
    const filtered = getFiltered(engineCache);
    renderTable(filtered, engineCache.stocks.length);
    return;
  }

  // Config inputs (live recalc)
  if (e.target.dataset.cfg) {
    const key = e.target.dataset.cfg;
    const val = parseFloat(e.target.value);
    if (!isNaN(val)) {
      state.cfg[key] = val;
      // Debounce-like: only re-render if value actually changed
      const engine = getEngine();
      engineCache = engine;
      if (state.tab === "screener") {
        renderRegime(engine);
        renderKPIs(engine);
        const filtered = getFiltered(engine);
        renderTable(filtered, engine.stocks.length);
      }
      // Update weight sum display
      const sumEl = document.querySelector(".text-xs.text-slate-400.mt-1");
      if (sumEl) sumEl.textContent = `Sum: ${(state.cfg.w1m + state.cfg.w3m + state.cfg.w6m + state.cfg.w1y).toFixed(2)} (Auto-Normalized)`;
    }
  }
});

// --- Init --------------------------------------------------------------------

document.addEventListener("DOMContentLoaded", function() {
  render();
});

// Also fire immediately if DOM is already ready
if (document.readyState !== "loading") {
  render();
}
