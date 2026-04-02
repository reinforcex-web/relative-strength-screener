// ============================================================================
// RELATIVE STRENGTH SCREENER — Static Site Build
// Vanilla JS, no React, no build step
// ============================================================================

// --- Constants ---------------------------------------------------------------

const MARKET_LABELS = {"R1000":"Russell 1000","TOPIX":"TOPIX","KOSPI":"KOSPI","HSI":"Hang Seng","CSI300":"CSI 300"};

const COMMENTARY = {
  "R1000": {
    sectors: "**Energy** \u2014 +9.2% 1M RS, 94% trend pass, +15.7% avg EPS. 9 confirmed names. Still the strongest sector but the 1M RS has pulled back from +18.6% last week as the peace narrative builds \u2014 energy gave back relative ground on the 1 Apr session (-3.7% worst S\u0026P sector).\n**Info Tech** \u2014 +1.9% 1M RS with the deepest leader pool (12 Existing, 5 New, 21 confirmed). Best EPS (+8.4%). 35% trend pass improving from 29% \u2014 the peace rally is lifting tech breadth.\n**Utilities** \u2014 +2.4% 1M RS, 85% trend pass. Defensive strength intact.\n**Communication Services** \u2014 +0.7% 1M RS while 3M remains negative (-2.8%). NYT (New Leader CONFIRMED) leads.\n**Financials \u2014 pulling back.** -1.0% 1M RS with deeply negative 3M (-6.1%). Only 6 Sector Rotation signals now (down from 24 last week), but BK and CFG both graduated to New Leaders \u2014 the rotation is maturing from early signals into actual leadership. 5 New Leaders in the sector.\n**Industrials** \u2014 -3.8% 1M RS but holds the top 3 names (VRT, FIX, GEV). 12 Existing Leaders, 13 confirmed. The electrification cluster dominates despite sector-level weakness.\n**Consumer Discretionary** \u2014 -2.1% 1M RS but 7 New Leaders and 8 confirmed \u2014 the broadest new leader generation of any sector.",
    themes: "**Power/Electrification** (VRT #1, FIX #2, GEV #3, MTZ #9, PWR #13, NVT #18) \u2014 reclaimed the top 3 positions in the entire R1000. VRT MS 93.3 (+16.3% EPS CONFIRMED). FIX MS 92.8 (+19.4% EPS CONFIRMED). GEV MS 92.1 (+6.7% EPS CONFIRMED). The electrification buildout thesis is the highest-conviction cluster globally.\n**Optical/Data Infrastructure** (SNDK #6, WDC #7, CIEN #10, KLAC #12, UI #16, JBL) \u2014 SNDK surged to #6 with +200.9% EPS CONFIRMED \u2014 most extreme EPS in the market. WDC at +15.9% EPS. CIEN +15.4% EPS. The memory names (MU now Fading at -13%) are splitting from the broader storage/fiber cluster.\n**Consumer/Off-Price** (FIVE #5, ROST, CASY, MAR, HLT, TJX, ARMK, EBAY) \u2014 broadest consumer cluster yet. FIVE at +28.1% EPS CONFIRMED. ROST +3.4% EPS CONFIRMED. MAR, HLT both New Leaders \u2014 hospitality joining the consumer rotation.\n**Financials Graduation** \u2014 BK #11 and CFG #14, both New Leaders. STT at MS 85.1. The rotation has graduated from Sector Rotation signals to actual leadership \u2014 a significant upgrade.\n**Energy/Commodity** (APA +35% 1M RS, CF +27.2%, VLO +16.9%, AA +17%) \u2014 still strong but 1M RS has compressed from the prior week\u2019s peaks. If peace holds, this cluster fades further on a relative basis.",
    synthesis: "R1000 in intermediate downtrend below 200DMA but 73 confirmed leaders \u2014 deep structure. Highest-conviction: the electrification cluster (VRT, FIX, GEV \u2014 top 3, all CONFIRMED) and the storage/optical cluster (SNDK +200.9% EPS, WDC, CIEN \u2014 all CONFIRMED). Key new development: Financials graduated from Sector Rotation to actual New Leaders (BK, CFG) \u2014 the rotation is maturing. Energy RS has compressed from +18.6% to +9.2% as peace hopes build. Consumer broadening (FIVE, ROST, MAR, HLT, CASY). Pre-breakout: PLTR (Accelerating, +30.3% EPS), NVDA (Accelerating, +9% EPS), AMZN (Accelerating), and EXPE (+98.5 acceleration, +6.3% EPS).",
    daily: "**S\u0026P 500 +0.72% to 6,575, Nasdaq +1.16%, Dow +0.48%.** Second day of the \u201cHormuz Hope\u201d rally. Trump said Iran asked for a ceasefire but demanded the Strait be \u201copen, free, and clear\u201d before the US considers it. VIX dropped to 24.5. 9 out of 11 S\u0026P sectors positive.\n**Energy was the worst sector** (-3.7%) as WTI fell to ~$99. The peace narrative is directly pressuring our screener\u2019s #1 RS sector. APA, CF, VLO all saw relative selling. Energy 1M RS has compressed from +18.6% to +9.2% in one week \u2014 the fastest RS decay we\u2019ve seen.\n**Industrials led** (+1.9%) \u2014 directly benefits the electrification cluster (VRT #1, FIX #2, GEV #3). These names perform in either oil scenario: high oil drives energy transition demand, peace drives lower input costs.\n**Tech bounced.** Nasdaq +1.16% as semis and growth recovered. SNDK and WDC rallied. MU still Fading. The split between storage/fiber names (holding) and pure memory (Fading) persists.\n**Nike -14%** on weak guidance \u2014 but our screener\u2019s consumer leaders (FIVE, ROST, CASY, MAR, HLT) are domestic/value plays insulated from Nike\u2019s global brand headwinds.\n**SpaceX filed for IPO** \u2014 signals risk appetite returning.\n**Net read:** If peace holds, the regime shifts from \u201cenergy-led downtrend\u201d to \u201cbroad recovery.\u201d Electrification and storage/optical clusters are positioned for either outcome. The Financials graduation (BK, CFG now New Leaders) is the most significant rotation development this week."
  },
  "TOPIX": {
    sectors: "**Energy** \u2014 +11.1% 1M RS, 100% trend pass. INPEX (#12, New Leader, +11.6% EPS CONFIRMED). Compression from +17.9% last week as peace hopes build.\n**Health Care** \u2014 +8.7% 1M RS, 67% trend pass \u2014 strongest non-defensive sector. Astellas (#9, +43.1% EPS CONFIRMED), Otsuka (#17, +8.5% EPS CONFIRMED), Shionogi (#15, New Leader). Three confirmed names.\n**Utilities** \u2014 +6.9% 1M RS, 100% trend pass. Defensive.\n**Communication Services \u2014 inflecting.** +3.5% 1M RS while 3M deeply negative (-16%). KDDI, SoftBank Corp, NTT all Emerging with 93%+ acceleration. LY Corp accelerating at +99.3.\n**Financials** \u2014 +2.3% 1M RS, 73% trend pass. Tokio Marine Emerging at +72.9 acceleration.\n**Industrials** \u2014 -1.2% 1M RS. Cable infra (Furukawa #2, Fujikura #7 on WATCH) and trading houses (Marubeni #3, Mitsui #4, Mitsubishi #6 \u2014 all UNCONFIRMED). Kawasaki Heavy and Toyota Tsusho Fading.\n**Materials** \u2014 -7.7% 1M RS. Sumitomo Met Min Fading on EXIT. JX Advanced Metals and Mitsui Kinzoku on WATCH. The materials cluster is under severe pressure.",
    themes: "**Cable/Power Infrastructure** \u2014 Kioxia (#1, MS 92.7, +76.2% EPS CONFIRMED), Furukawa Electric (#2, +34.2% EPS CONFIRMED), Fujikura (#7, +6.8% EPS CONFIRMED but on WATCH). Kioxia reclaimed #1. Fujikura dropping from #1 to #7 with a WATCH signal is the most significant deterioration in TOPIX this week.\n**Trading Houses** \u2014 Marubeni (#3, Existing Leader), Mitsui (#4), Mitsubishi (#6). All UNCONFIRMED \u2014 the fundamental downgrade persists. Price-led without earnings backing.\n**Pharma/Health Care** \u2014 Astellas (#9, +43.1% EPS CONFIRMED), Otsuka (#17, +8.5% CONFIRMED), Shionogi (#15, New Leader). The strongest new rotation in TOPIX.\n**Lasertec** (#5, New Leader, +7.2% EPS CONFIRMED) \u2014 the sole semi equipment name holding against the tide (Disco, Advantest, Ibiden all fading).\n**Specialty Materials** \u2014 under broad pressure. Mitsui Kinzoku (#13 WATCH), JX Advanced Metals (#14 WATCH), Resonac (#11 EXIT). All have massive EPS but price is leading decisively lower.\n**Telecom rotation** \u2014 KDDI (+93.6 acceleration), SoftBank Corp (+100), NTT (+97.9). The broadest acceleration cluster.",
    synthesis: "TOPIX in pullback within strong uptrend (-6.7% 1M, +6.7% 3M). 17 confirmed leaders. Kioxia reclaimed #1 (MS 92.7, +76.2% EPS). Fujikura dropped from #1 to #7 with WATCH signal \u2014 the cable infra cluster is narrowing. Trading houses remain UNCONFIRMED. Health Care is the strongest new rotation (Astellas, Otsuka, Shionogi). The peace rally benefits Japan disproportionately (93% Hormuz oil dependence). Pre-breakout: KDDI, SoftBank Corp, NTT (all 93%+ acceleration), Tokio Marine (Emerging, +72.9 acceleration).",
    daily: "**Nikkei and TOPIX gained as the Hormuz Hope rally extended to Asia.** Japan\u2019s 93% Hormuz oil dependence makes it one of the biggest beneficiaries of the ceasefire narrative.\n**Cable infra mixed.** Furukawa Electric (#2) held firm but Fujikura fell from #1 to #7 with a WATCH signal \u2014 the first meaningful crack in TOPIX\u2019s top name. Kioxia reclaimed #1.\n**Trading houses rallied on commodity exposure** but remain UNCONFIRMED. Marubeni (#3), Mitsui (#4), Mitsubishi (#6) all benefited from the risk-on day but without EPS backing, the leadership is fragile.\n**Health Care strengthened.** Astellas (#9, +43.1% EPS CONFIRMED) and Shionogi (#15, New Leader) both gained. Pharma is the most constructive new rotation in TOPIX.\n**Materials hammered.** Sumitomo Met Min on EXIT at -22% 1M RS. Resonac on EXIT. The materials cluster is fading fastest.\n**Net read:** The peace rally is lifting TOPIX broadly but the internal rotation matters: cable infra narrowing (Fujikura WATCH), pharma strengthening, materials breaking down. The telecom acceleration cluster (KDDI, SoftBank Corp, NTT) is the biggest pre-breakout setup."
  },
  "KOSPI": {
    sectors: "**Industrials** \u2014 +7.8% 1M RS, 45% trend pass. Defence names (Hanwha Systems #1, LS Electric #4, LIG Nex1 #5, Korea Aerospace #6) dominate. 2 New Leaders, 3 Existing.\n**Financials** \u2014 +5.7% 1M RS, 44% trend pass. Mirae Asset (#2, +58.3% EPS CONFIRMED) anchors. Samsung Life #7. Shinhan Emerging.\n**Info Tech** \u2014 +2.4% 1M RS, 80% trend pass. Samsung Electro-Mechanics confirmed. SK Hynix (MS 59, WATCH) and Samsung Electronics (MS 59, WATCH) still under pressure.\n**Consumer Discretionary** \u2014 -10.4%. Hyundai Motor EXIT. Clear avoid.\n**Materials, Utilities** \u2014 deeply negative. No leadership.",
    themes: "**Defence/Infrastructure** \u2014 Hanwha Systems (#1, +32.2% 1M RS, Existing Leader), LS Electric (#4, Existing Leader), LIG Nex1 (#5, New Leader, +71.2% 1M RS \u2014 strongest momentum in the entire KOSPI), Korea Aerospace (#6, New Leader). The cluster is broadening \u2014 LIG Nex1 and Korea Aerospace both graduated to New Leaders this week.\n**Financials** \u2014 Mirae Asset (#2, +58.3% EPS CONFIRMED). Samsung Life Insurance (#7). Shinhan Financial Emerging at +83 acceleration. Korean banks developing.\n**Semiconductors \u2014 unstable.** SK Hynix and Samsung Electronics both on WATCH with massive EPS (+76%\u201390%) but declining price RS. Hanmi Semi Fading. The semi complex hasn\u2019t broken to EXIT yet but is under sustained pressure.",
    synthesis: "KOSPI in severe pullback (-16% 1M). Only 4 confirmed names \u2014 thinnest of any market. Defence/infrastructure broadened (LIG Nex1 and Korea Aerospace graduated to New Leaders) but neither is CONFIRMED. Highest-conviction: Mirae Asset (#2, +58.3% EPS CONFIRMED) and Hyosung Heavy (#9, +10.8% EPS CONFIRMED). The semi complex is on WATCH but hasn\u2019t fully broken to EXIT. The peace rally would benefit Korea significantly (68% Hormuz crude dependence). Pre-breakout: Shinhan Financial (Emerging +83), KT\u0026G (Accelerating +98.1), Samsung Heavy Ind (Accelerating +90.6).",
    daily: "**KOSPI rallied as the Hormuz Hope extended to Asia.** Korea\u2019s 68% crude import dependence on the Strait makes it a direct beneficiary of the peace narrative.\n**Defence broadened.** LIG Nex1 graduated to New Leader with +71.2% 1M RS \u2014 the most aggressive momentum name in the entire KOSPI. Korea Aerospace also promoted to New Leader. The defence cluster is the only leadership axis expanding.\n**Mirae Asset steady.** The #2 name held its CONFIRMED status with +58.3% EPS \u2014 the financial anchor of the market.\n**Semis bounced but remain fragile.** SK Hynix and Samsung Electronics both gained on the risk-on day but remain on WATCH. The bounce doesn\u2019t change the signal structure \u2014 these names need sustained recovery to avoid rolling to EXIT.\n**Net read:** Defence/infrastructure broadening (2 new leaders) is the positive development. But only 4 confirmed names across the entire market. If the peace trade sustains, Korean banks (Shinhan Emerging) and semis could recover."
  },
  "HSI": {
    sectors: "**Health Care** \u2014 strongest at +8.9% 1M RS, 50% trend pass. WuXi AppTec (#5, +4.4% EPS CONFIRMED) and CSPC Pharma (+46.2% EPS CONFIRMED) lead. A new development \u2014 Health Care displaced Energy as the top sector.\n**Industrials** \u2014 +6.2% 1M RS, 88% trend pass. Best breadth. CATL Emerging at +34.8%, JD Logistics at +33.2%.\n**Financials** \u2014 +3.3% 1M RS, 70% trend pass. BOC HK (#6, New Leader CONFIRMED, +4.2% EPS) is the freshest quality addition. AIA (#7, New Leader). CM Bank at +100 acceleration.\n**Energy** \u2014 +2.8% 1M RS (down from +8.1% last week). PetroChina (#3) and CNOOC (#8) both CONFIRMED but the peace narrative is compressing their RS lead.\n**Consumer Staples** \u2014 +1.5% 1M RS. WH Group (#1, Existing Leader) is the top-ranked name.\n**Consumer Discretionary** \u2014 -0.9%. Geely at +48.4% 1M RS (!) is the single most extreme momentum name in the entire HSI but the sector as a whole is weak.\n**Communication Services and Info Tech** \u2014 both negative. Tech/internet still bottom-half.",
    themes: "**WH Group** (#1, Existing Leader, +3.3% EPS, MS 86.7) \u2014 top-ranked name. Defensive consumer staples.\n**Energy** (PetroChina #3, +12.3% EPS CONFIRMED; CNOOC #8, +25.9% EPS CONFIRMED) \u2014 confirmed pair but RS compressing as peace hopes build.\n**WuXi AppTec** (#5, Existing Leader CONFIRMED, +4.4% EPS) \u2014 pharma/CDMO theme holding.\n**BOC Hong Kong** (#6, New Leader CONFIRMED, +4.2% EPS) \u2014 freshest confirmed name in HSI. The bank/financial rotation is emerging.\n**Geely** (#10, +48.4% 1M RS, UNCONFIRMED) \u2014 the most extreme momentum name in any market. The $100+ oil EV adoption thesis is driving this, but if oil falls on peace, the thesis reverses.\n**EV/Logistics Emerging** \u2014 CATL (+34.8%), JD Logistics (+33.2%), BYD (+8.3%). Building but very early.\n**State banks** \u2014 ICBC, CCB, Bank of China all Emerging. CM Bank at +100 acceleration.",
    synthesis: "HSI in intermediate downtrend below 200DMA. 7 confirmed leaders. Key new: Health Care displaced Energy as the top sector on 1M RS \u2014 a rotation. BOC HK graduated to New Leader CONFIRMED. Geely\u2019s +48.4% 1M RS is the most extreme momentum in any market but lacks EPS confirmation. If peace holds, energy leadership fades and the bank/pharma rotation accelerates. Capital allocation still favours US, Japan over HK.",
    daily: "**Hang Seng gained as the Hormuz Hope rally extended to Asia.** China\u2019s yuan-based Hormuz toll system gives it unique positioning \u2014 a ceasefire would benefit the broad economy but reduce China\u2019s current diplomatic leverage.\n**Geely surged to +48.4% 1M RS** \u2014 the most extreme single-stock momentum in any market we cover. The EV adoption thesis is being turbo-charged by $100+ oil. But if peace resolves oil, this trade reverses hard.\n**BOC Hong Kong breakout.** Newly promoted to #6 as New Leader with CONFIRMED status \u2014 the first confirmed financial leader in HSI. The bank rotation is starting to materialise.\n**Energy RS compressing.** PetroChina and CNOOC both CONFIRMED but 1M RS has dropped from +8.1% to +2.8% in one week. The peace narrative is directly eroding energy\u2019s relative advantage.\n**WuXi AppTec steady.** The pharma/CDMO theme (#5, CONFIRMED) is positioned for either outcome \u2014 not oil-dependent.\n**Net read:** The session marked a rotation: Health Care displaced Energy as the top RS sector. If ceasefire materialises, the bank/pharma axis replaces energy as the leadership core."
  },
  "CSI300": {
    sectors: "**Energy** \u2014 +8.3% 1M RS, 89% trend pass. China Merchants Energy and COSCO Shipping confirmed. 3 confirmed names. RS compressing from +14.2% last week.\n**Utilities** \u2014 +6.3% 1M RS, 58% trend pass. CGN Power (#19, +150% EPS CONFIRMED). Broadening.\n**Health Care** \u2014 +5.9% 1M RS. WuXi AppTec (#18, +4.9% EPS CONFIRMED). Strongest 1M RS improvement of any sector.\n**Consumer Staples** \u2014 +5.3% 1M RS, negative 3M (-1.2%). Inflecting.\n**Financials \u2014 inflecting.** +3.2% 1M RS with negative 3M (-3.4%). 10 Sector Rotation signals from state banks. The broadest rotation in CSI 300.\n**Industrials** \u2014 deepest sector (44 names), -0.7% 1M RS. 7 Existing Leaders. Electrification cluster anchors top ranks.\n**Info Tech** \u2014 -5.6% 1M RS, 15% trend pass. Weakest sector. GigaDevice, Range Intelligence Fading.\n**Real Estate** \u2014 -10.9% 1M RS. Worst sector.",
    themes: "**Electrical Infrastructure** \u2014 Dongfang Electric (#1, MS 91.1), Zhongtian Tech (#3), Sieyuan Electric (#9, +6.3% EPS CONFIRMED), Ningbo Deye (#5). The electrification cluster holds top ranks.\n**Shipping/Energy** \u2014 China Merchants Energy (#2, +43.8% EPS CONFIRMED), COSCO Shipping (#7, +41.6% EPS CONFIRMED). Both Existing Leaders with massive EPS.\n**Specialty Materials** \u2014 Qinghai Salt Lake (#8, +22.8% EPS CONFIRMED), Ganfeng Lithium (#13, +69.4% EPS CONFIRMED), Ningxia Baofeng (#11), China Jushi (#12, +20% EPS CONFIRMED). Deep cluster.\n**Financials Rotation** \u2014 10 Sector Rotation signals (up from 7 last week). CITIC Bank, CNPC Capital, CCB, Bank of China, Bank of Nanjing, Shanghai Rural, Bank of Beijing all flagged. The broadest rotation in CSI 300, paralleling the US.\n**CGN Power** (#19, +150% EPS CONFIRMED) \u2014 most extreme EPS revision. Nuclear power benefiting from the energy crisis.\n**WuXi AppTec** (#18, +4.9% EPS CONFIRMED) \u2014 CDMO theme in both HK and A-shares.",
    synthesis: "CSI 300 in intermediate downtrend (-4.8% 1M) but 23 confirmed leaders \u2014 deeper than KOSPI or HSI. Highest-conviction: China Merchants Energy (#2, +43.8% EPS), COSCO Shipping (#7, +41.6% EPS), Sieyuan Electric (#9, +6.3% EPS), Ganfeng Lithium (+69.4% EPS). The Financials rotation broadened to 10 Sector Rotation signals (from 7 last week). If peace holds, energy may soften but electrification and materials persist. Pre-breakout: ICBC (Emerging +89), Agricultural Bank (Emerging +95.4), BYD (Emerging +71.6), Sungrow Power.",
    daily: "**CSI 300 gained as the Hormuz Hope rally reached China.** The yuan-based Hormuz toll system gives China unique positioning but a ceasefire would broadly benefit the economy.\n**Energy/shipping continued to lead** but RS is compressing. China Merchants Energy (#2) and COSCO Shipping (#7) both held top ranks. Energy 1M RS down from +14.2% to +8.3% in one week.\n**Financials rotation broadened.** 10 Sector Rotation signals now (up from 7). CITIC Bank at +22.2% 1M RS is the strongest financial momentum name. The state bank rotation parallels developments in the US and Japan.\n**Electrification stable.** Dongfang Electric (#1), Zhongtian Tech (#3), Sieyuan (#9) held. This cluster is decoupled from the oil narrative.\n**Tech/semi still weak.** GigaDevice and Range Intelligence both Fading. The sector\u2019s -5.6% 1M RS is the worst.\n**Net read:** The peace rally is constructive for China but creates cross-currents: energy RS compressing while financials, health care, and consumer staples inflect upward. The electrification cluster is positioned for either outcome."
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
    ${cmt.daily ? '<div class="p-3 bg-amber-50 rounded-lg border border-amber-200"><div class="text-xs uppercase tracking-wide text-amber-600 font-semibold mb-1">Price Action \u2014 1 Apr</div><div class="text-sm text-amber-900 leading-relaxed">' + boldTextHtml(cmt.daily) + '</div></div>' : ''}
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
