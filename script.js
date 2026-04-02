// ============================================================================
// RELATIVE STRENGTH SCREENER — Static Site Build
// Vanilla JS, no React, no build step
// ============================================================================

// --- Constants ---------------------------------------------------------------

const MARKET_LABELS = {"R1000":"Russell 1000","TOPIX":"TOPIX","KOSPI":"KOSPI","HSI":"Hang Seng","CSI300":"CSI 300"};

const COMMENTARY = {
  "R1000": {
    sectors: "**Energy** \u2014 dominant sector at +18.6% 1M RS, 100% trend pass, +5.5% avg EPS. 6 confirmed names. The Hormuz crisis continues to drive the only sector with perfect breadth.\n**Info Tech** \u2014 +3.3% 1M RS with the deepest leader pool (13 Existing, 5 New, 22 confirmed). Best EPS (+8.3%). 29% trend pass \u2014 market-wide drawdown is compressing even strong names.\n**Utilities** \u2014 +1.2% 1M RS, 88% trend pass. Defensive strength. 4 confirmed names but no leaders.\n**Communication Services \u2014 inflecting.** +0.8% 1M RS while 3M remains negative (-1.5%). NYT and ASTS flagged as Sector Rotation. Comm Services avg EPS is the highest of any sector (+28.6%).\n**Financials \u2014 inflecting.** +0.5% 1M RS with deeply negative 3M (-5.7%). 24 Sector Rotation signals \u2014 the largest rotation cluster. Large banks (MS, GS, JPM, BAC) all accelerating.\n**Health Care** \u2014 -1.5% 1M RS. 5 New Leaders but zero confirmed \u2014 all UNCONFIRMED. Price-led without earnings backing.\n**Industrials** \u2014 largest sector (111 names) but -3.4% 1M RS. 12 Fading Leaders and 11 Existing Leaders. The electrification cluster holds top ranks but sector-level breadth is weak.",
    themes: "**Power/Electrification** (GEV #2, VRT #4, FIX #13, MTZ #5, PWR #19, NVT #6) \u2014 deepest confirmed cluster. VRT MS 92.8 (+9.2% EPS CONFIRMED). MTZ newly promoted to #5 (+22.2% EPS CONFIRMED). FIX at +16.5% EPS. All held through the drawdown with trend pass.\n**Optical/Data Infrastructure** (CIEN #7, LITE, UI #17, WDC, JBL #11, DELL) \u2014 CIEN at MS 89.9 (+20.9% EPS CONFIRMED). DELL surging as New Leader (+24.6% 1M RS, +25.7% EPS). LITE +47% EPS. Memory names (MU now Fading at -8% 1M RS despite +112.5% EPS) splitting from fiber/optical.\n**Consumer/Off-Price** (FIVE #1, ROST #8, CASY #16, BURL, TJX, EBAY, HLT) \u2014 FIVE at MS 93.2 with +104.7% EPS CONFIRMED \u2014 strongest single EPS in the top 20. ROST, CASY, HLT, EBAY all New Leaders CONFIRMED.\n**Financials Rotation** \u2014 24 Sector Rotation signals. BK (New Leader), CFG, C, STT, NTRS all flagged. MS accelerating at +96.4. Broadest emerging theme.\n**Energy/Commodity** (APA +46.8% 1M RS, CF +39%) \u2014 explosive single-month moves, all CONFIRMED.",
    synthesis: "R1000 in intermediate downtrend below 200DMA but 66 confirmed leaders \u2014 the structure is deep. Highest-conviction: the electrification cluster (VRT, MTZ, FIX \u2014 all CONFIRMED Existing Leaders), consumer retail (FIVE +104.7% EPS, ROST, CASY, EBAY \u2014 all CONFIRMED New Leaders), and optical infra (CIEN, LITE, DELL). Biggest developing theme: Financials rotation \u2014 24 Sector Rotation signals + accelerating large banks (MS +96.4, GS, JPM, BAC). Pre-breakout: PLTR (+98.3 acceleration, +31.1% EPS), EXPE (+98.6 acceleration, +86.2% EPS \u2014 strongest combined signal), TWLO (Emerging +94.1), and NVDA (Accelerating +87.8, +6% EPS).",
    daily: "**S\u0026P 500 -1.74% to 6,477, Nasdaq -2.38% (entering correction), Dow -1.01%.** Broad risk-off as oil surged \u2014 Brent hit $108 intraday before settling around $102. ECB President Lagarde warned markets were \u201ctoo optimistic\u201d and flagged possible rate hikes in Europe. Nasdaq now down 10%+ from its October high.\n**Memory cluster hammered.** Google\u2019s TurboQuant algorithm (6x memory compression) triggered a second day of selling. MU -7% (down ~20% in 5 days), SNDK -11%, WDC -8%. In our screener, MU is now a Fading Leader despite +112.5% EPS \u2014 the widest price/fundamental divergence in the market. CIEN, LITE, DELL held better, consistent with the split between pure memory and physical infrastructure.\n**META -8%, GOOGL -3%** on the California jury ruling finding social media companies negligent in an addiction case. A new legal overhang for the ad-tech complex.\n**Energy outperformed sharply.** Oil \u0026 gas names were the clear winners. Our screener\u2019s Energy sector has 100% trend pass and +18.6% 1M RS. APA (+46.8%), CF (+39%) leading.\n**Financials Rotation visible.** The sector was one of the relative outperformers. 24 Sector Rotation signals in Financials \u2014 the broadest early signal in the market. BK newly promoted to New Leader.\n**Net read:** The session reinforced the regime \u2014 Energy accelerating, tech/memory under pressure from both Hormuz and AI-efficiency headwinds. The Financials rotation is the new development to track. Watch whether MU holds Fading Leader or rolls to EXIT."
  },
  "TOPIX": {
    sectors: "**Energy** \u2014 +17.2% 1M RS, 100% trend pass. INPEX (New Leader, UNCONFIRMED) leads. Small cluster but dominant.\n**Utilities** \u2014 +6.2% 1M RS, 100% trend pass. Defensive strength.\n**Communication Services \u2014 inflecting.** +5.7% 1M RS while 3M deeply negative (-14.6%). KDDI (Emerging +98.6 acceleration), NTT (+97.2), SoftBank Corp (+99.3) all accelerating. Broadest telecom rotation.\n**Health Care** \u2014 +4.9% 1M RS. Astellas (#9, +89.1% EPS CONFIRMED) leads the inflection.\n**Industrials** \u2014 deepest sector (34 names), +0.5% 1M RS. Trading houses (Mitsubishi #7 CONFIRMED, Marubeni #12 CONFIRMED) and cable infra (Fujikura #1, Furukawa #3) anchor the top.\n**Info Tech** \u2014 -2.6% 1M RS, 33% trend pass. Kioxia (#2, +164.1% EPS CONFIRMED) is the standout. Disco, Advantest, Screen all fading.\n**Materials** \u2014 -4.4% 1M RS but strong 3M (+23%). Resonac, JX Advanced Metals, Mitsui Kinzoku all on WATCH despite massive EPS.",
    themes: "**Cable/Power Infrastructure** \u2014 Fujikura (#1, MS 94.3, +14.9% EPS CONFIRMED), Furukawa Electric (#3, +35.6% EPS CONFIRMED), Sumitomo Electric (#4, +27.1% EPS CONFIRMED but on WATCH). Three of the top 4 names. This is the Japanese expression of the global electrification theme.\n**Kioxia** (#2, MS 92.6, +164.1% EPS CONFIRMED) \u2014 strongest single earnings confirmation in TOPIX. NAND flash recovery play.\n**Trading Houses** \u2014 Mitsubishi Corp (#7, New Leader, +15.2% EPS CONFIRMED), Mitsui \u0026 Co (#8, New Leader), Marubeni (#12, Existing Leader, +19% EPS CONFIRMED). Sogo shosha benefiting from commodity exposure and cross-holding revaluation.\n**Specialty Materials** \u2014 Resonac (#5, +44.2% EPS CONFIRMED but on WATCH), JX Advanced Metals (#6, +95.3% EPS CONFIRMED but on WATCH), Mitsui Kinzoku (#11, +58.8% EPS CONFIRMED but on WATCH). Massive EPS but losing near-term momentum.\n**Pharma** \u2014 Astellas (#9, New Leader, +89.1% EPS CONFIRMED) and Panasonic (#13, +65.1% EPS CONFIRMED). Health Care inflection strengthening.\n**Telecom rotation** \u2014 KDDI, SoftBank Corp, NTT all Emerging with 97%+ acceleration. The broadest acceleration cluster in TOPIX.",
    synthesis: "TOPIX in pullback within strong uptrend (-7.3% 1M, +6.6% 3M). 18 confirmed leaders. Cable infrastructure (Fujikura, Kioxia, Furukawa) dominates the top 3, all CONFIRMED. Key development: trading houses (Mitsubishi CONFIRMED, Marubeni CONFIRMED) freshly promoted. Specialty materials cluster has massive EPS but all on WATCH \u2014 a divergence to monitor. Freshest rotation: Health Care (Astellas +89.1% EPS) and Comm Services (KDDI, NTT, SoftBank Corp all 97%+ acceleration). Pre-breakout: SoftBank Group (Accelerating +92.2), Seven \u0026 I (Accelerating +95).",
    daily: "**Nikkei -0.4%, TOPIX +0.2%.** Mixed session as Japan digested overnight US weakness and rising oil. TOPIX outperformed the Nikkei \u2014 value over growth.\n**Cable infrastructure held.** Fujikura (#1) and Furukawa (#3) outperformed. The physical infrastructure theme is decoupled from the tech/memory selloff. Sumitomo Electric (#4) on WATCH is the one warning sign.\n**Trading houses resilient.** Mitsui (#8) and Mitsubishi (#7) benefited from commodity exposure (oil surge). Both newly confirmed as leaders.\n**Memory/semi under pressure.** Kioxia held relatively but Advantest -10.5%, Screen -9.4%, Disco -4.5% all fading. The TurboQuant selloff hit Japanese semi equipment hard.\n**Specialty materials mixed.** Resonac, JX Advanced Metals, Mitsui Kinzoku all on WATCH despite strong EPS. The near-term pullback is overriding fundamentals.\n**Telecom accelerating.** KDDI, SoftBank Corp, NTT all building momentum with near-perfect acceleration scores.\n**Net read:** The session widened the gap between confirmed leaders (cable infra, trading houses, pharma) and fading semi names. TOPIX\u2019s value tilt is performing."
  },
  "KOSPI": {
    sectors: "**Industrials** \u2014 +5.6% 1M RS, 50% trend pass. Defence/infrastructure (Hanwha Systems #1, LS Electric #3, Hyundai E\u0026C #4, Doosan #6) is the only functioning leadership.\n**Financials** \u2014 +5.5% 1M RS, 67% trend pass. Mirae Asset (#2, +172.3% EPS CONFIRMED) anchors. KB Financial and Shinhan Financial both Emerging.\n**Info Tech** \u2014 +0.7% 1M RS, 100% trend pass. Hanmi Semi (#7) is Fading. SK Hynix (#16) on WATCH at -0.2% 1M RS despite +26.7% EPS.\n**Consumer Discretionary** \u2014 -10.8%. Hyundai Motor on EXIT. Clear avoid.\n**Materials** \u2014 -10.0%. No leadership.\n**No clean sector inflections** \u2014 leadership is narrow: Industrials and Financials only.",
    themes: "**Defence/Infrastructure** \u2014 Hanwha Systems (#1, New Leader, +22.1% 1M RS), LS Electric (#3, Existing Leader), Hyundai E\u0026C (#4, +20.8% EPS CONFIRMED), Doosan (#6, +33% EPS CONFIRMED), LIG Nex1 (#8, +57.3% 1M RS), Korea Aerospace (#9, CONFIRMED). The deepest cluster in KOSPI.\n**Financials** \u2014 Mirae Asset (#2, +172.3% EPS CONFIRMED). SK Square (#10, +142% EPS CONFIRMED but on WATCH). KB Financial and Shinhan Financial both Emerging at 84%+ acceleration \u2014 Korean banks developing.\n**Semiconductors losing momentum.** Hanmi Semi Fading, SK Hynix on WATCH. Samsung Electro-Mechanics holding (+9.7% 1M RS). The semi complex is weakening but not yet broken.\n**SK Telecom** (#13, Sector Rotation signal) \u2014 the first Comm Services rotation signal in KOSPI.",
    synthesis: "KOSPI in sharp pullback (-12.9% 1M) within a strong rally (+31.7% 3M). Only 5 confirmed names \u2014 the thinnest of any market. Highest-conviction: Mirae Asset (+172.3% EPS CONFIRMED) and Doosan (+33% EPS CONFIRMED). Defence/infrastructure cluster holds but Hanwha Systems is UNCONFIRMED. The semi complex is weakening (Hanmi Fading, SK Hynix on WATCH) but hasn\u2019t fully broken yet. Emerging: KB Financial and Shinhan Financial (both 84%+ acceleration) \u2014 Korean banks are the developing rotation. Avoid: Hyundai Motor (EXIT), materials sector.",
    daily: "**KOSPI -0.4% to 5,439.** Pared earlier losses in a volatile session. Korea\u2019s 68% crude import dependence on Hormuz keeps the macro headwind intense as Brent hit $108.\n**Semiconductors under pressure.** Google\u2019s TurboQuant selloff cascaded to Korean names. Hanmi Semi is Fading, SK Hynix on WATCH despite +26.7% EPS. The price/fundamental divergence is widening.\n**Defence/infrastructure resilient.** Hanwha Systems (#1), LS Electric (#3), and LIG Nex1 (+57.3% 1M RS) showed relative strength. The defence cluster is the only leadership axis functioning.\n**Financial brokerages held.** Mirae Asset (#2, CONFIRMED) held up on elevated trading volumes. KB Financial and Shinhan Financial both Emerging.\n**Net read:** KOSPI\u2019s confirmed count at 5 is the thinnest of any market. The semi weakening is the key signal to track \u2014 if SK Hynix rolls from WATCH to EXIT, it confirms the full breakdown."
  },
  "HSI": {
    sectors: "**Energy** \u2014 +11.3% 1M RS, 75% trend pass. PetroChina (#3, New Leader CONFIRMED) and CNOOC (#8, Existing Leader CONFIRMED) anchor the sector.\n**Industrials** \u2014 +6.7% 1M RS, 88% trend pass. Best breadth in the index. ZTO Express CONFIRMED. CATL (+34.1% 1M RS) Emerging.\n**Utilities** \u2014 +2.8% 1M RS, 100% trend pass. Power Assets CONFIRMED. Fully defensive.\n**Financials** \u2014 +0.6% 1M RS. AIA (#5, New Leader). ICBC, CCB grinding higher. CM Bank at +100 acceleration.\n**Consumer Discretionary** \u2014 -0.9% 1M RS. Geely (#7, New Leader, +35.7% 1M RS!) is the dramatic exception in a weak sector.\n**Communication Services and Info Tech** \u2014 both lagging. Tech/internet (Tencent, Alibaba, Meituan) remains bottom-half. Zero confirmed leaders from HK tech.",
    themes: "**Energy** (PetroChina #3, +21.3% 1M RS CONFIRMED; CNOOC #8, +21.1% CONFIRMED) \u2014 the commodity pair riding the Hormuz oil surge.\n**WH Group** (#1, New Leader, MS 91.9) \u2014 top-ranked name in HSI. Consumer staples defensive play.\n**SHK PPT** (#2, Existing Leader, +12.5% EPS CONFIRMED) \u2014 the property anchor, but on EXIT signal.\n**Geely** (#7, +35.7% 1M RS, New Leader) \u2014 strongest short-term momentum in the index. EV adoption thesis driven by $100+ oil. Not yet earnings-confirmed.\n**State Banks** \u2014 ICBC, CCB, Bank of China all trending. CM Bank at +100 acceleration \u2014 strongest early signal in HSI.\n**EV/Logistics Emerging** \u2014 CATL (+34.1%), JD Logistics (+31.6%), JD.com (+15.2%). The strongest momentum cluster outside energy.\n**Tech/Internet absent.** Tencent, Alibaba, Meituan all bottom-half.",
    synthesis: "HSI in intermediate downtrend below 200DMA. Only 7 confirmed leaders \u2014 the weakest count of any market. Leadership is defensive: energy (PetroChina, CNOOC), materials (Hongqiao), property (SHK PPT), utilities (Power Assets). Geely\u2019s +35.7% 1M RS is the most dramatic move but lacks earnings confirmation. Emerging signals from CATL, JD Logistics, and BYD hint at EV/logistics rotation but very early. Capital allocation should favor US, Japan, and Korea over HK.",
    daily: "**Hang Seng +0.4% to 24,952.** Modest rebound after the prior selloff, within the intermediate downtrend.\n**Energy dominated.** PetroChina (#3) and CNOOC (#8) \u2014 both CONFIRMED \u2014 rallied as Brent surged past $108. The energy pair is the highest-conviction trade in HSI.\n**EV cluster building.** Geely (+35.7% 1M RS) extended its surge. CATL Emerging at +34.1%, JD Logistics at +31.6%. The EV adoption thesis driven by $100+ oil is generating the most aggressive price action.\n**Tech/internet still absent.** Tencent, Alibaba, Meituan remain bottom-half. The overnight META/GOOGL selloff carried through.\n**State banks steady.** ICBC, CCB with positive RS. CM Bank\u2019s +100 acceleration is the strongest early signal in HSI financials.\n**Net read:** Energy and EV are the active themes. Tech/internet absent. The regime is unchanged \u2014 defensive names lead."
  },
  "CSI300": {
    sectors: "**Energy** \u2014 +14.7% 1M RS, 89% trend pass. COSCO Shipping and China Merchants Energy are confirmed Existing Leaders. 3 confirmed names.\n**Utilities** \u2014 +12.5% 1M RS, 83% trend pass. Defensive but broadening with multiple Emerging signals.\n**Consumer Staples** \u2014 +3.1% 1M RS, negative 3M (-2.2%) \u2014 inflecting. Deep negative EPS (-19.3%) so price-led.\n**Financials \u2014 inflecting.** +2.4% 1M RS with negative 3M (-3.4%). 9 Sector Rotation signals from state banks. The broadest rotation in CSI 300. 3 New Leaders emerging.\n**Industrials** \u2014 deepest sector (44 names), 9 Existing Leaders. -0.4% 1M RS. Electrification cluster anchors the top ranks.\n**Info Tech** \u2014 -5.4% 1M RS, 22% trend pass. 5 Fading Leaders. GigaDevice, Range Intelligence rolling over.\n**Real Estate** \u2014 -8.7% 1M RS. Worst sector.",
    themes: "**Electrical Infrastructure** \u2014 Qinghai Salt Lake (#1, MS 91.2, +91.9% EPS CONFIRMED), Dongfang Electric (#2), Sieyuan Electric (#3, +23.8% EPS CONFIRMED), Ningbo Deye (#7, +28.7% 1M RS). The Chinese expression of the global electrification theme.\n**Specialty Materials** \u2014 Ganfeng Lithium (#12, +42.2% EPS CONFIRMED), Ningxia Baofeng (#10), China Jushi (#11), Zhejiang NHU (#19). Deep cluster.\n**Shipping/Energy** \u2014 COSCO Shipping (#6, +27.3% EPS CONFIRMED), China Merchants Energy (#4). Both Existing Leaders.\n**PCB/Connectivity** \u2014 WUS Printed (#9, +16% EPS CONFIRMED), Eoptolink, Suzhou Dongshan. Data infrastructure active in China.\n**Financials Rotation** \u2014 9 Sector Rotation signals: CNPC Capital, CCB, Shanghai Rural, Bank of Shanghai, Huaxia Bank, Bank of Chengdu. Parallels the US Financials rotation.\n**WuXi AppTec** (MS 78.9, +2.4% EPS CONFIRMED) \u2014 CDMO theme appearing in both HK and A-shares.",
    synthesis: "CSI 300 in intermediate downtrend (-4.4% 1M) but 17 confirmed leaders. Highest-conviction: Qinghai Salt Lake (#1, +91.9% EPS CONFIRMED), Sieyuan Electric (#3, +23.8% EPS), COSCO Shipping (#6, +27.3% EPS), and Ganfeng Lithium (+42.2% EPS). The electrification and materials clusters are the strongest thematic parallel to global leadership. Key developing theme: Financials rotation \u2014 9 Sector Rotation signals from state banks. Pre-breakout: ICBC (Emerging +91.3), Sungrow Power (Emerging +90), EVE Energy (Emerging, +48.9% EPS \u2014 strongest combined early signal), and Agricultural Bank (Accelerating +98.2).",
    daily: "**CSI 300 +0.6% to 4,503.** China marginally positive, partly insulated by its diplomatic channel with Iran (yuan-based toll system at Hormuz).\n**Energy/shipping strong.** COSCO Shipping and China Merchants Energy \u2014 both Existing Leaders \u2014 rallied as Brent surged. Direct energy plays remain the strongest cluster.\n**State banks gained.** 9 Sector Rotation signals from state banks continue to accumulate. The bank rotation is the broadest emerging theme in CSI 300.\n**Tech/semi under pressure.** GigaDevice Fading, Range Intelligence Fading. The Info Tech sector\u2019s -5.4% 1M RS is the weakest in the index. Google TurboQuant spillover hit Chinese memory/semi names.\n**Electrical infrastructure stable.** Qinghai Salt Lake (#1), Sieyuan, Dongfang Electric all held top ranks. TBEA on EXIT is the one warning sign.\n**Net read:** Bifurcation confirmed: energy/materials/banks vs tech/consumer. The Financials rotation (9 signals) is the biggest developing theme. China\u2019s Hormuz diplomatic channel is a unique factor."
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
    ${cmt.daily ? '<div class="p-3 bg-amber-50 rounded-lg border border-amber-200"><div class="text-xs uppercase tracking-wide text-amber-600 font-semibold mb-1">Price Action \u2014 26 Mar</div><div class="text-sm text-amber-900 leading-relaxed">' + boldTextHtml(cmt.daily) + '</div></div>' : ''}
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
  // Build sector list dynamically from current engine
  const sectorSet = new Set();
  if (engineCache) engineCache.stocks.forEach(r => { if (r.s) sectorSet.add(r.s); });
  const sectorOpts = ["All", ...Array.from(sectorSet).sort()];
  document.getElementById("filter-bar").innerHTML = `
    <input type="text" id="search-input" placeholder="Search..." value="${esc(fl.q)}" class="px-2 py-1 text-sm border border-slate-200 rounded-md w-40 focus:outline-none focus:border-slate-400" />
    ${sel("sector", "Sector", sectorOpts)}
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
    state.fl = { sector: "All", leader: "All", confirm: "All", signal: "All", trend: "All", q: "" };
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
    state.fl = { sector: "All", leader: "All", confirm: "All", signal: "All", trend: "All", q: "" };
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
