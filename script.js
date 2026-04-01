// ============================================================================
// RELATIVE STRENGTH SCREENER — Static Site Build
// Vanilla JS, no React, no build step
// ============================================================================

// --- Constants ---------------------------------------------------------------

const MARKET_LABELS = {"R1000":"Russell 1000","TOPIX":"TOPIX","KOSPI":"KOSPI","HSI":"Hang Seng","CSI300":"CSI 300"};

const COMMENTARY = {
  "R1000": {
    sectors: "**Energy** \u2014 dominant sector at +15.8% 1M RS, 100% trend pass, +13.9% avg EPS. 9 confirmed names. Still the only sector with perfect breadth despite the late-session peace rally.\n**Info Tech** \u2014 +2.4% 1M RS with the deepest leader pool (15 Existing, 3 New, 21 confirmed). Strong EPS (+8.3%) but only 30% trend pass \u2014 the market-wide drawdown is compressing even the best names. SNDK (+200.9% EPS) is the single most extreme earnings confirmation in the market.\n**Communication Services \u2014 inflecting.** +1.7% 1M RS while 3M remains negative (-1.9%). NYT (New Leader CONFIRMED), EA, ASTS all flagged as Sector Rotation signals.\n**Financials \u2014 inflecting.** +0.3% 1M RS with deeply negative 3M (-5.3%). 23 Sector Rotation signals \u2014 the largest rotation cluster. Large banks (MS, GS, JPM, BAC) all accelerating. The peace-rally day accelerated this rotation.\n**Industrials** \u2014 largest sector (111 names) but -3.9% 1M RS. 8 Fading Leaders. Strong 3M (+9.7%) \u2014 the electrification cluster (GEV, VRT, FIX, MTZ, PWR) still holds top ranks despite near-term weakness.\n**Consumer Staples** \u2014 -3.7% 1M RS. Weakening. CASY and ADM the only New Leaders.",
    themes: "**Power/Electrification** (GEV #1, VRT #3, FIX #5, MTZ #6, PWR #17, NVT #15) \u2014 the dominant confirmed cluster. GEV reclaimed #1 (MS 92.7, +6.9% EPS CONFIRMED). VRT at MS 91.7 (+16.2% EPS). FIX at +19.4% EPS. All held through the drawdown with trend pass. The electrification buildout thesis is intact.\n**Optical/Data Infrastructure** (CIEN #9, LITE #12, SNDK #13, WDC #20, JBL #14, UI) \u2014 SNDK re-entered the top 20 with +200.9% EPS CONFIRMED. LITE at +33.6% EPS. Memory names (MU now Fading at -13% 1M RS) splitting from fiber/optical names that are holding.\n**Consumer/Off-Price** (FIVE #2, ROST #18, EBAY #19, CASY, BURL, TJX) \u2014 broadest consumer cluster we\u2019ve seen. FIVE MS 92.7 with +26.1% EPS CONFIRMED. ROST, EBAY, BURL all New Leaders CONFIRMED. Domestic consumer thesis strengthening.\n**Financials Rotation** \u2014 23 Sector Rotation signals. CFG and BK both New Leaders. C, GS, STT, PNC all flagged. MS accelerating at +97.1 acceleration. Broadest emerging theme in the market.\n**Energy/Commodity** (APA +44.8% 1M RS, CF +35.5%, VLO) \u2014 explosive moves but the 31 Mar peace rally may mark peak positioning.",
    synthesis: "R1000 in intermediate downtrend below 200DMA but 75 confirmed leaders \u2014 the structure is deep. Highest-conviction: the electrification cluster (GEV, VRT, FIX, MTZ \u2014 all CONFIRMED Existing Leaders holding top ranks) and the consumer retail cluster (FIVE, ROST, EBAY, BURL \u2014 all CONFIRMED New Leaders). The 31 Mar peace-rally (+2.9% S\u0026P) may be a regime-change catalyst if Iran negotiations progress \u2014 watch whether Financials rotation accelerates and Energy gives back relative gains. Pre-breakout: PLTR (+97.6 acceleration, +30.3% EPS), TWLO (Emerging +95.2), EXPE (+98.5 acceleration), AMZN (Accelerating +98.6), and NVDA (Accelerating +91.3, +9% EPS).",
    daily: "**S\u0026P 500 +2.9%, Nasdaq +3.8%, Dow +1,100pts (+2.5%).** Best daily performance since May. WSJ reported Trump told aides he\u2019s willing to wind down military hostilities; Iranian President Pezeshkian reportedly open to ending the war. Trump later told reporters he expects US forces to leave in \u201ctwo or three weeks.\u201d End of Q1 \u2014 window dressing likely contributed to the magnitude of the bounce.\n**Broad risk-on rally.** Every sector except energy participated in relative terms. Tech bounced hardest (Nasdaq +3.8%). MRVL surged +10% on Nvidia\u2019s $2B stake announcement. Memory names (MU, SNDK, WDC) bounced but remain well off their highs.\n**Energy complex paused.** Brent settled at $118.35 (+4.9%) despite the peace headlines \u2014 oil traders remain skeptical of a rapid Hormuz resolution. But the screener\u2019s energy names (APA, CF, VLO) saw relative weakness as money rotated into beaten-down tech/financials.\n**Financials rallied.** The Financials Sector Rotation (23 signals) showed real-time confirmation. CFG and BK (both New Leaders) led. Large banks (MS, GS, JPM) all participated.\n**Consumer held.** FIVE, ROST, BURL, CASY all maintained trend pass and confirmed status through the rally.\n**Net read:** If the Iran de-escalation is real, the regime could shift from \u201cenergy-led downtrend\u201d to \u201cbroad recovery.\u201d The Financials rotation and beaten-down tech (NVDA, AMZN, PLTR all accelerating) would be the primary beneficiaries. Energy leadership may have peaked on a relative basis. Watch the Strait of Hormuz developments over the coming days as the key catalyst."
  },
  "TOPIX": {
    sectors: "**Energy** \u2014 +17.9% 1M RS, 100% trend pass. INPEX (New Leader, +10.4% EPS CONFIRMED) leads. Small cluster but dominant.\n**Utilities** \u2014 +7.2% 1M RS, 100% trend pass. Defensive strength.\n**Health Care** \u2014 +6.1% 1M RS, 56% trend pass. Astellas (#9, +43.1% EPS CONFIRMED) and Otsuka (#17, +8.5% EPS CONFIRMED) lead the Health Care inflection. Three confirmed names.\n**Communication Services \u2014 inflecting.** +4.0% 1M RS while 3M deeply negative (-15.6%). KDDI, SoftBank Corp, NTT all accelerating with 97%+ scores. Broadest telecom rotation signal.\n**Financials** \u2014 +0.8% 1M RS with strong trend pass (82%). Steady but not generating leaders.\n**Industrials** \u2014 deepest sector (34 names), +0.2% 1M RS. Cable infra (Fujikura, Furukawa) holds top ranks but Kawasaki Heavy and Toyota Tsusho fading.\n**Consumer Discretionary and Info Tech** \u2014 both negative. IT has 28% trend pass. Semi equipment (Ibiden, Disco, Advantest, Tokyo Electron) all fading.",
    themes: "**Cable/Power Infrastructure** \u2014 Fujikura (#1, MS 93.7, +6.8% EPS CONFIRMED), Kioxia (#2, +76.3% EPS CONFIRMED), Furukawa Electric (#3, +34.2% EPS CONFIRMED). The top 3 in TOPIX are all cable/semi infrastructure names. Sumitomo Electric (#11, +14.5% EPS CONFIRMED) on WATCH. The cluster is intact but narrowing.\n**Trading Houses** \u2014 Marubeni (#4, Existing Leader), Mitsui (#5, New Leader), Mitsubishi (#6, New Leader). All UNCONFIRMED this week \u2014 EPS revisions have weakened. Price-led without fundamental backing now.\n**Specialty Materials** \u2014 Resonac (#8, on WATCH), JX Advanced Metals (#12, on WATCH), Mitsui Kinzoku (#13, on WATCH). The materials cluster is under broad pressure.\n**Pharma** \u2014 Astellas (#9, New Leader, +43.1% EPS CONFIRMED), Otsuka (#17, +8.5% CONFIRMED), Shionogi (#15). The Health Care inflection is the most constructive new development.\n**Lasertec** (#7, New Leader, +7.2% EPS CONFIRMED) \u2014 the sole semi equipment name swimming against the tide.\n**Telecom rotation** \u2014 KDDI (+97.1 acceleration), SoftBank Corp (+100), NTT (Emerging +99.3). The broadest acceleration cluster in TOPIX.",
    synthesis: "TOPIX in pullback within strong uptrend (-7.8% 1M, +6.5% 3M). 19 confirmed leaders \u2014 improving from last week\u2019s 17. Cable infrastructure (Fujikura, Kioxia, Furukawa) still dominates the top 3. Trading houses remain UNCONFIRMED \u2014 the fundamental downgrade persists. Health Care is the strongest new rotation (Astellas, Otsuka both CONFIRMED). The 31 Mar peace rally \u2014 if sustained \u2014 would benefit Japan disproportionately given 93% oil import dependence on the Strait. Pre-breakout: KDDI, SoftBank Corp, NTT (all accelerating at 97%+), Tokio Marine (Emerging, +70 acceleration, +4.3% EPS).",
    daily: "**Nikkei and TOPIX rallied on peace hopes.** WSJ report that Trump is willing to wind down hostilities triggered buying across Asian markets. Japan\u2019s extreme Hormuz exposure (93% of oil imports) makes it the biggest potential beneficiary of a ceasefire.\n**Cable infrastructure led the rebound.** Fujikura (#1) and Furukawa (#3) both gained as the physical infrastructure theme benefits whether oil stays high (energy transition demand) or falls (lower input costs).\n**Trading houses rallied on commodity exposure.** Mitsui (#5), Mitsubishi (#6), and Marubeni (#4) all gained but remain UNCONFIRMED \u2014 the EPS weakness hasn\u2019t reversed.\n**Materials bounced.** Resonac, JX Advanced Metals, Mitsui Kinzoku all remain on WATCH despite the rally. The bounce is from deeply oversold levels, not a signal change.\n**Telecom accelerating.** KDDI and SoftBank Corp \u2014 both with near-perfect acceleration scores \u2014 continued to build momentum into the Comm Services inflection.\n**Net read:** The peace rally is a potential regime-change catalyst for TOPIX. If Hormuz reopens, the energy headwind reverses and the broad market uptrend resumes. Cable infra and pharma are positioned for either outcome."
  },
  "KOSPI": {
    sectors: "**Industrials** \u2014 +5.2% 1M RS, 45% trend pass. Defence/infrastructure (Hanwha Systems, LS Electric, Hyosung Heavy) anchors the only functioning leadership.\n**Financials** \u2014 +5.1% 1M RS, 67% trend pass. Mirae Asset (#1, CONFIRMED) is the anchor. Samsung Life (#5, New Leader). Shinhan, KB Financial accelerating.\n**Info Tech** \u2014 +1.7% 1M RS, 80% trend pass. Samsung Electro-Mechanics confirmed. But SK Hynix (MS 59.9, EXIT) and Samsung Electronics (WATCH) are the dominant names and they\u2019re failing.\n**Consumer Discretionary** \u2014 -11.6%. Hyundai Motor on EXIT. Clear avoid.\n**Materials, Utilities** \u2014 both deeply negative. No leadership.",
    themes: "**Defence/Infrastructure** \u2014 Hanwha Systems (#2, New Leader, +26.5% 1M RS), LS Electric (#3, Existing Leader), Hyundai E\u0026C (#4, Existing Leader), Hyosung Heavy (#6, +10.5% EPS CONFIRMED), LIG Nex1 (#8, +61.9% 1M RS). The cluster holds but Hanwha Systems is UNCONFIRMED.\n**Financials** \u2014 Mirae Asset (#1, +58.3% EPS CONFIRMED). Samsung Life Insurance (#5, New Leader). Shinhan and KB Financial both emerging/accelerating. Korean brokerages and insurers benefiting from elevated volatility.\n**Semiconductors \u2014 broken.** SK Hynix (EXIT), Samsung Electronics (WATCH), Hanmi Semi (Fading WATCH). Despite +90%+ EPS revisions, price is leading decisively lower.\n**Samsung Electro-Mechanics** (#7, +11.8% EPS CONFIRMED) is the sole tech name holding \u2014 the electronic components business is differentiated from pure memory.",
    synthesis: "KOSPI in severe pullback (-13.6% 1M). Only 5 confirmed names. Highest-conviction: Mirae Asset Securities (#1, +58.3% EPS CONFIRMED) and Hyosung Heavy (#6, +10.5% EPS CONFIRMED). The semi complex remains broken \u2014 SK Hynix and Samsung Electronics on EXIT/WATCH despite massive EPS. Defence/infrastructure holding but narrow. The peace rally on 31 Mar would benefit Korea significantly if sustained (68% Hormuz crude dependence). Pre-breakout: Shinhan Financial, KB Financial, Hana Financial (all emerging/accelerating at 80%+) \u2014 Korean banks are the developing rotation.",
    daily: "**KOSPI rallied on ceasefire hopes.** The WSJ report on Trump winding down hostilities triggered aggressive buying. Korea is the most Hormuz-dependent major market after Japan (68% of crude imports), so the peace trade is a direct macro positive.\n**Defence still held.** Hanwha Systems (#2) and LS Electric (#3) showed relative strength even on a peace rally \u2014 suggesting their leadership is structural (increased defence budgets), not just a war premium.\n**Financials led the bounce.** Mirae Asset (#1), Samsung Life (#5), and the emerging Korean bank cluster (Shinhan, KB Financial) all rallied. Trading volumes remain elevated, supporting brokerage earnings.\n**Semis bounced but remain broken.** SK Hynix and Samsung Electronics gained on the risk-on day but both remain on EXIT/WATCH in the screener. The bounce doesn\u2019t change the signal structure.\n**Net read:** If Iran de-escalation is real, KOSPI is one of the biggest beneficiaries globally. But the confirmed count (5 names) is still the thinnest of any market. Watch whether the Korean bank rotation (Shinhan, KB, Hana) graduates to leadership."
  },
  "HSI": {
    sectors: "**Energy** \u2014 +8.1% 1M RS, 75% trend pass. PetroChina (#5, CONFIRMED) and CNOOC (#10, CONFIRMED) anchor the sector.\n**Industrials** \u2014 +6.4% 1M RS, 88% trend pass. Best breadth in the index. CATL Emerging at +32.8%, JD Logistics at +31%.\n**Health Care** \u2014 +5.4% 1M RS. WuXi AppTec (#4, New Leader CONFIRMED) and CSPC Pharma (+49.6% EPS CONFIRMED) lead.\n**Financials** \u2014 +2.2% 1M RS. AIA (#6, New Leader). State banks (ICBC, CCB) grinding higher. CM Bank at +100 acceleration.\n**Consumer Discretionary** \u2014 -1.3%. Geely (#7, New Leader, +39.4% 1M RS!) is the dramatic exception in an otherwise weak sector.\n**Communication Services and Info Tech** \u2014 both negative. Tech/internet (Tencent, Alibaba, Meituan) still bottom-half.",
    themes: "**Energy** (PetroChina #5, +12.4% EPS CONFIRMED; CNOOC #10, +26.9% EPS CONFIRMED) \u2014 the defensive anchor. May face relative selling if peace holds.\n**WH Group** (#1, Existing Leader, +3.3% EPS CONFIRMED) \u2014 top-ranked name in HSI. Consumer staples defensive play.\n**WuXi AppTec** (#4, New Leader CONFIRMED, +4.4% EPS) \u2014 the pharma/CDMO theme is the freshest high-quality addition to the leader board.\n**Geely** (#7, +39.4% 1M RS, New Leader UNCONFIRMED) \u2014 the most dramatic momentum name in any HSI stock. The EV adoption thesis driven by $100+ oil. If oil falls on peace, this trade reverses.\n**EV/Logistics cluster** \u2014 CATL Emerging (+32.8%), JD Logistics Emerging (+31%), BYD Emerging (+13.4%). The strongest price action in HSI outside energy.\n**State banks** \u2014 ICBC, CCB, Bank of China all trending. CM Bank accelerating at +100 \u2014 strongest early signal in HSI financials.",
    synthesis: "HSI in intermediate downtrend below 200DMA. 7 confirmed leaders. Defensive mix: energy (PetroChina, CNOOC), materials (Hongqiao), pharma (WuXi, CSPC). Key new: Geely graduated to New Leader at +39.4% 1M RS \u2014 the most aggressive momentum name in HSI, driven by the EV/oil-price thesis. The 31 Mar peace rally creates cross-currents: energy leadership may fade but tech/internet could recover. The EV Emerging cluster (CATL, BYD, JD Logistics) and the bank rotation (CM Bank +100 acceleration) are the themes to watch. Capital allocation still favours US and Japan over HK.",
    daily: "**Hang Seng rallied on peace hopes.** Asia-Pacific markets traded up on WSJ report that Trump is willing to wind down military hostilities. China\u2019s yuan-based Hormuz toll system means the peace trade has mixed implications \u2014 a ceasefire would benefit the broad economy but reduce China\u2019s current diplomatic advantage.\n**EV names surged.** Geely (#7, +39.4% 1M RS) extended its rally. CATL and JD Logistics \u2014 both Emerging \u2014 gained on the risk-on day. The EV cluster is generating the most aggressive price action in HSI.\n**Tech/internet bounced.** Tencent, Alibaba, and JD.com all gained on the broad risk-on day, but remain firmly in the bottom half of the screener. Not a signal change.\n**Energy mixed.** PetroChina and CNOOC held up but faced relative selling as money rotated into beaten-down growth names. If peace holds, the energy leadership may have peaked.\n**WuXi AppTec steady.** The pharma/CDMO theme (#4, CONFIRMED) is positioned for either outcome \u2014 not oil-dependent.\n**Net read:** The peace rally is constructive but the screener\u2019s signal structure is unchanged \u2014 7 confirmed leaders, defensive mix. If the ceasefire materialises, watch for tech/internet to re-enter the leader board for the first time this cycle."
  },
  "CSI300": {
    sectors: "**Energy** \u2014 +14.2% 1M RS, 89% trend pass. COSCO Shipping and China Merchants Energy are confirmed Existing Leaders. 3 confirmed names.\n**Utilities** \u2014 +8.1% 1M RS, 55% trend pass. CGN Power (+150.5% EPS CONFIRMED) is the standout. Broadening with multiple Emerging signals.\n**Financials \u2014 inflecting.** +2.8% 1M RS with negative 3M (-3.7%). 7 Sector Rotation signals from state banks (CITIC, CCB, Bank of China, Bank of Nanjing, Shanghai Rural). The broadest rotation in CSI 300.\n**Consumer Staples** \u2014 +2.5% 1M RS, negative 3M (-2.5%). Inflecting but no leaders.\n**Industrials** \u2014 deepest sector (44 names), 8 Existing Leaders. -0.5% 1M RS. Electrification cluster anchors the top ranks.\n**Info Tech** \u2014 weakest at -6.1% 1M RS, 19% trend pass. 5 Fading Leaders. GigaDevice, Range Intelligence, Advanced Micro all rolling over.\n**Real Estate** \u2014 -9.9% 1M RS. Worst sector. No leadership.",
    themes: "**Electrical Infrastructure** \u2014 Dongfang Electric (#1, MS 91.5), Zhongtian Tech (#2), Sieyuan Electric (#3, +6.3% EPS CONFIRMED), Ningbo Deye (#9, +28.6% 1M RS). The electrification cluster remains the dominant theme. Sieyuan is highest-conviction with CONFIRMED status.\n**Specialty Materials** \u2014 Qinghai Salt Lake (#8, +22.3% EPS CONFIRMED), Ganfeng Lithium (#12, +62.7% EPS CONFIRMED), Ningxia Baofeng (#11), China Jushi (#10, +21.3% EPS CONFIRMED). Deep cluster with strong EPS backing.\n**Shipping/Energy** \u2014 China Merchants Energy (#4, +40.7% EPS CONFIRMED), COSCO Shipping (#6, +41.6% EPS CONFIRMED). Both Existing Leaders with massive EPS upgrades.\n**Financials Rotation** \u2014 7 Sector Rotation signals. CITIC Bank (MS 75.4, +2.3% EPS CONFIRMED) leads. ICBC Emerging at +91.3 acceleration, Agricultural Bank at +98.2. The state bank rotation parallels the US and Japan.\n**WuXi AppTec** (#20, New Leader CONFIRMED, +4.7% EPS) \u2014 the CDMO theme is appearing in both HK and A-shares.\n**CGN Power** (#18, Existing Leader, +150.5% EPS CONFIRMED) \u2014 most extreme EPS revision in the CSI 300. Nuclear power benefiting from the energy crisis.",
    synthesis: "CSI 300 in intermediate downtrend (-4.1% 1M) but 25 confirmed leaders \u2014 deeper than KOSPI or HSI. Highest-conviction: Sieyuan Electric (#3, +6.3% EPS CONFIRMED), China Merchants Energy (#4, +40.7% EPS), COSCO Shipping (#6, +41.6% EPS), and Ganfeng Lithium (+62.7% EPS). The Financials rotation (7 Sector Rotation signals) is the developing theme, paralleling the US and Japan. CGN Power\u2019s +150.5% EPS is the most extreme single revision. If the Iran de-escalation holds, energy leadership may soften but the electrification and materials clusters should persist. Pre-breakout: ICBC (Emerging +91.3), BYD (Emerging +76.3), Sungrow Power (Accelerating), and Agricultural Bank (+98.2 acceleration).",
    daily: "**CSI 300 gained on peace hopes.** Asian markets rallied on WSJ report of Trump willing to end hostilities. China\u2019s yuan-based Hormuz toll system gives it unique diplomatic positioning \u2014 a ceasefire could reduce this advantage but would benefit the broader economy.\n**Energy/shipping rallied further.** COSCO Shipping (#6, +41.6% EPS) and China Merchants Energy (#4, +40.7% EPS) gained. But if peace holds, these names may face relative selling as the oil premium deflates.\n**Financials rotation building.** State banks gained modestly. 7 Sector Rotation signals continue to accumulate. CITIC Bank and Bank of Nanjing are the earliest confirmed names. The bank rotation would accelerate in a risk-on environment.\n**Tech/semi still weak.** GigaDevice, Range Intelligence, Advanced Micro all remain Fading. The sector\u2019s -6.1% 1M RS is the worst in the index.\n**Electrification cluster steady.** Dongfang Electric (#1), Zhongtian Tech (#2), Sieyuan (#3) all held top ranks. This theme is decoupled from the oil narrative.\n**Net read:** The peace rally is constructive for China broadly but creates cross-currents for the screener. Energy names may give back relative gains while financials and beaten-down consumer/tech could recover. The electrification cluster is positioned for either outcome."
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
    ${cmt.daily ? '<div class="p-3 bg-amber-50 rounded-lg border border-amber-200"><div class="text-xs uppercase tracking-wide text-amber-600 font-semibold mb-1">Price Action \u2014 31 Mar</div><div class="text-sm text-amber-900 leading-relaxed">' + boldTextHtml(cmt.daily) + '</div></div>' : ''}
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
