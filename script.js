// ============================================================================
// RELATIVE STRENGTH SCREENER — Static Site Build
// Vanilla JS, no React, no build step
// ============================================================================

// --- Constants ---------------------------------------------------------------

const MARKET_LABELS = {"R1000":"Russell 1000","TOPIX":"TOPIX","KOSPI":"KOSPI","HSI":"Hang Seng","CSI300":"CSI 300"};

const COMMENTARY = {
  "R1000": {
    sectors: "**Energy** \u2014 +8.7% 1M RS, 94% trend pass, +12.4% avg EPS. 6 confirmed names. Energy surged on the 2 Apr session (WTI +12%) after Trump\u2019s primetime speech signalling 2\u20133 more weeks of war. The sector whipsawed from peace-trade selling back to war premium.\n**Info Tech** \u2014 +2.7% 1M RS with the deepest confirmed pool (24 confirmed from 10 Existing + 10 New Leaders). SNDK at +242.3% EPS is the most extreme earnings backing. 35% trend pass \u2014 improving.\n**Utilities** \u2014 +1.7% 1M RS, 86% trend pass. 3 confirmed names. Defensive strength holding.\n**Financials** \u2014 -2.0% 1M RS but the acceleration cluster is the strongest in the market. MS +99.4, JPM +88, BAC +95, ALLY +99.8. NTRS graduated to New Leader #4 CONFIRMED. 10 confirmed names.\n**Industrials** \u2014 largest sector (112 names), -4.8% 1M RS. 12 confirmed. The electrification cluster (FIX #1, VRT #2, PWR #8, MTZ #15, CW #13) still holds the top ranks despite the steepest sector-level drawdown.\n**Consumer Discretionary** \u2014 -3.9% 1M RS but 7 confirmed. FIVE #6 (+102.3% EPS). Tesla -5.5% on weak Q1 deliveries was the session\u2019s biggest single-stock event.",
    themes: "**Power/Electrification** (FIX #1, VRT #2, PWR #8, MTZ #15, CW #13, CAT #11) \u2014 FIX reclaimed #1 (MS 90.9, +15.3% EPS CONFIRMED). VRT at +9.9% EPS. The cluster added CAT (Existing Leader). This group is the most regime-agnostic \u2014 performs whether oil stays high or peace comes.\n**Optical/Data Infrastructure** (SNDK #14, LITE #18, WDC #20, TER #16, MKSI #9, LRCX, AMAT, UI, CIEN, KLAC, LSCC, MPWR, JBL, DELL, AMKR) \u2014 the broadest confirmed tech cluster we\u2019ve recorded. 15 names, 13 CONFIRMED. SNDK +242.3% EPS and TER +73.7% EPS are the standouts. Semi/optical bounced on the 2 Apr recovery.\n**Consumer/Off-Price** (FIVE #6, ROST, HLT, CASY, DAR) \u2014 FIVE at MS 89.3 (+102.3% EPS). DAR (+23.5% EPS) is a new addition from Consumer Staples.\n**Financials Acceleration** \u2014 MS +99.4, BAC +95, ALLY +99.8, EXPE +100, SF +98 acceleration. NTRS graduated to #4 CONFIRMED. BK, CFG, STT, PNC, KEY all New Leaders. The bank cluster is the broadest we\u2019ve seen.\n**Energy** (APA +34.2% 1M RS, VLO +14.4%, CF) \u2014 surged back on 2 Apr as war premium returned.",
    synthesis: "R1000 in intermediate downtrend below 200DMA but 75 confirmed leaders \u2014 the deepest this cycle. The 2 Apr session was a microcosm of the regime: Dow -600pts at the open on Trump\u2019s war speech, then full recovery on Iran/Oman Hormuz protocol reports. The electrification cluster (FIX, VRT, CW, MTZ) is the highest-conviction axis \u2014 regime-agnostic, all CONFIRMED. The optical/data infrastructure cluster has broadened to 15 names with 13 confirmed \u2014 the most concentrated tech leadership we\u2019ve recorded. Pre-breakout: EXPE (+100 acceleration, +87% EPS \u2014 the single strongest combined signal), PLTR (Emerging +97.6, +30.5% EPS), ROKU (Emerging +98.6, +909% EPS), AMZN (+98.3), AVGO (+99.5, +10.6% EPS).",
    daily: "**S\u0026P 500 +0.11%, Nasdaq +0.18%, Dow -0.13%.** Extreme intraday volatility: Dow down 668pts at the open after Trump\u2019s primetime speech vowed to \u201cbring Iran back to the stone ages\u201d over 2\u20133 weeks. Markets clawed back to flat after Iran/Oman announced a Hormuz monitoring protocol. Last trading day before Good Friday \u2014 markets closed April 3.\n**Oil surged.** WTI +12% to $112, Brent +8% to $109. The peace trade from earlier in the week was fully reversed. Our screener\u2019s energy names (APA, VLO, CF) rallied back as the war premium returned.\n**Tesla -5.5%** on Q1 deliveries of 358K vs 366K expected. Rivian +3%. In our screener, TSLA is accelerating (MS 45, +81.9 acceleration) but far from leadership.\n**Tech recovered from the lows.** Nvidia, Microsoft, AMD all gained 1\u20133% as the morning selloff reversed. Our optical/data infra cluster (SNDK, LITE, WDC, TER, MKSI \u2014 all CONFIRMED) held through the volatility.\n**Financials mixed.** NTRS (#4, New Leader CONFIRMED) held. The bank acceleration cluster (MS +99.4, BAC +95) is intact but the war-extension narrative dampens the Financials rotation thesis near-term.\n**Weekly context:** S\u0026P +3.4% for the week \u2014 the first weekly gain since the conflict began. Markets are closed for Good Friday.\n**Net read:** The 2 Apr session crystallized the regime: energy vs everything else, driven by headline risk. The Iran/Oman Hormuz protocol is a potential game-changer \u2014 even partial Strait reopening would collapse the oil premium and accelerate the Financials/tech rotation. Until then, the electrification cluster (FIX, VRT) and optical infra are the highest-conviction themes."
  },
  "TOPIX": {
    sectors: "**Energy** \u2014 +11.1% 1M RS, 100% trend pass. INPEX (#16, UNCONFIRMED).\n**Health Care** \u2014 +6.6% 1M RS, 67% trend pass. Astellas (#12, +89.1% EPS CONFIRMED) and Otsuka (#20) lead the strongest new rotation.\n**Utilities** \u2014 +3.4% 1M RS, 100% trend pass. Defensive.\n**Financials** \u2014 +1.6% 1M RS, 73% trend pass. Tokio Marine Emerging. Steady but no leaders.\n**Consumer Staples** \u2014 +2.3% 1M RS. Japan Tobacco (Sector Rotation).\n**Industrials** \u2014 -1.1% 1M RS. Cable infra (Fujikura #1, Furukawa #3) holds top ranks. Marubeni (#4) regained CONFIRMED status.\n**Materials** \u2014 -6.0% 1M RS but 3 confirmed names with massive EPS (Mitsui Kinzoku +88.6%, JX Metals +95.3%, Resonac +44.2%). All on WATCH.\n**Info Tech** \u2014 -1.0% 1M RS, 28% trend pass. Kioxia (#2, +165.6% EPS CONFIRMED), Lasertec (#6, CONFIRMED) are the exceptions. Disco, Ibiden fading.",
    themes: "**Cable/Power Infrastructure** \u2014 Fujikura (#1, MS 92.4, +11.1% EPS CONFIRMED), Kioxia (#2, +165.6% EPS CONFIRMED), Furukawa (#3, +45.3% EPS CONFIRMED). Top 3 all CONFIRMED with massive EPS. Sumitomo Electric (#8, +94.8% EPS CONFIRMED) on WATCH.\n**Trading Houses** \u2014 Marubeni (#4, +21.6% EPS CONFIRMED) regained CONFIRMED. Mitsui (#5, UNCONFIRMED), Mitsubishi (#9, UNCONFIRMED). Mixed.\n**Pharma** \u2014 Astellas (#12, +89.1% EPS CONFIRMED), Panasonic (#11, +73.4% EPS CONFIRMED). Health Care inflection strengthening.\n**Specialty Materials** \u2014 Resonac (#7, +44.2% CONFIRMED but WATCH), Mitsui Kinzoku (#10, +88.6% CONFIRMED but WATCH), JX Metals (#15, +95.3% CONFIRMED but WATCH). The massive EPS / WATCH divergence persists.\n**Telecom rotation** \u2014 KDDI (+90.1), SoftBank Corp (+95), NTT (+98.6), LY Corp (+94.3). All Emerging with near-perfect acceleration. Hitachi accelerating at +100.",
    synthesis: "TOPIX in pullback within strong uptrend (-3.6% 1M, +6.7% 3M). 15 confirmed leaders. Cable infrastructure (Fujikura, Kioxia, Furukawa) holds the top 3 with all CONFIRMED. Marubeni regained CONFIRMED \u2014 first trading house to recover fundamental backing. Health Care inflection deepening (Astellas +89.1%, Panasonic +73.4%). Specialty materials remain the widest price/fundamental divergence \u2014 massive EPS but all on WATCH. Pre-breakout: KDDI, SoftBank Corp, NTT (all 90%+ acceleration), Hitachi (+100 acceleration, the strongest in TOPIX), Seven \u0026 I (+92.9).",
    daily: "**TOPIX gained as the 2 Apr oil surge provided a mixed backdrop.** Japan\u2019s 93% Hormuz dependence means the war-extension narrative is a macro headwind, but the Iran/Oman protocol report triggered an intraday recovery.\n**Cable infrastructure held.** Fujikura (#1) and Furukawa (#3) outperformed. The cluster is CONFIRMED across the top 3 \u2014 the strongest positioning in any Asian market.\n**Marubeni regained CONFIRMED.** The trading house (#4, +21.6% EPS) is the first sogo shosha to recover fundamental backing this cycle.\n**Materials under pressure.** Resonac, Mitsui Kinzoku, JX Metals all remain on WATCH despite massive EPS. The near-term drawdown overrides fundamentals.\n**Telecom building.** KDDI, SoftBank Corp, NTT all accelerating. Hitachi at +100 acceleration is the strongest signal in TOPIX.\n**Net read:** The war-extension speech reversed the peace trade but TOPIX\u2019s uptrend structure is intact. Cable infra and pharma are positioned for either outcome."
  },
  "KOSPI": {
    sectors: "**Info Tech** \u2014 strongest at +6.7% 1M RS, 80% trend pass. Samsung Electro-Mechanics and Hanmi Semi recovering. But Samsung Electronics (MS 62, WATCH) is the elephant in the room.\n**Industrials** \u2014 +0.5% 1M RS, 55% trend pass. Defence cluster (Hanwha Systems #5, LS Electric #3, LIG Nex1 #4, Korea Aerospace #12) anchors the only functioning leadership. 3 New Leaders and 2 confirmed.\n**Financials** \u2014 -0.4% 1M RS, 33% trend pass. Mirae Asset (#1, +172.3% EPS CONFIRMED) is the sole financial anchor.\n**Consumer Discretionary** \u2014 -10.2%. Hyundai Motor on EXIT.\n**Energy** \u2014 -6.9%. HD Hyundai Fading on EXIT.",
    themes: "**Defence/Infrastructure** \u2014 LS Electric (#3, New Leader), LIG Nex1 (#4, +41% 1M RS, New Leader), Hanwha Systems (#5, Existing Leader), Korea Aerospace (#12, CONFIRMED), Hyosung Heavy (#6, New Leader). The cluster has 3 New Leaders graduating simultaneously \u2014 the broadest defence leadership emergence in KOSPI.\n**Financials** \u2014 Mirae Asset (#1, +172.3% EPS CONFIRMED). KB Financial accelerating at +86.8. Shinhan Emerging.\n**Semiconductors** \u2014 Info Tech is the top sector by 1M RS (+6.7%) but only Samsung Electro-Mechanics is confirmed. SK Hynix off the top 20. Samsung Electronics on WATCH.\n**Samsung Life** (#7, +7.3% 1M RS) \u2014 insurance benefiting from higher rates.",
    synthesis: "KOSPI in pullback (-6.9% 1M, improved from -16% last week). Only 3 confirmed names \u2014 the thinnest of any market. Defence cluster broadened dramatically: LS Electric, LIG Nex1, Hyosung Heavy all graduated to New Leader simultaneously. Mirae Asset remains the sole confirmed financial anchor. The semi recovery is price-led (Info Tech best sector) but lacks confirmations. The regime shifted from \u201cSharp Pullback in Strong Rally\u201d to \u201cPullback in Strong Uptrend\u201d \u2014 a constructive upgrade. Pre-breakout: KB Financial (+86.8 acceleration), Samsung Heavy (Accelerating +96.2), Samsung Biologics (+92.5).",
    daily: "**KOSPI traded mixed on the 2 Apr session.** The morning selloff on Trump\u2019s war speech recovered after the Iran/Oman Hormuz protocol report. Korea\u2019s 68% Hormuz crude dependence keeps it whipsawing on every headline.\n**Defence surged again.** LIG Nex1 (#4, +41% 1M RS) and LS Electric (#3) both graduated to New Leader. Korea Aerospace (#12, CONFIRMED) held. Defence spending is structural, not just a war premium.\n**Financials stable.** Mirae Asset (#1, CONFIRMED) held. KB Financial accelerating. Trading volumes remain elevated.\n**Semis bounced.** Samsung Electro-Mechanics gained. Samsung SDI (#16, +14.1% 1M RS) is recovering on the EV battery narrative.\n**Net read:** The regime upgrade to \u201cPullback in Strong Uptrend\u201d is the most constructive KOSPI signal in weeks. Defence broadening (3 New Leaders) is the key development. The 3 confirmed names is still thin but the trajectory is improving."
  },
  "HSI": {
    sectors: "**Health Care** \u2014 +11.5% 1M RS. Strongest sector in HSI. WuXi AppTec (#5), CSPC Pharma (#13, +46.2% EPS CONFIRMED), Hansoh (Emerging).\n**Industrials** \u2014 +5.3% 1M RS, 88% trend pass. Best breadth. CATL Emerging (+31.3%), JD Logistics Emerging (+34.3%).\n**Consumer Staples** \u2014 +3.2% 1M RS. WH Group (#3, Existing Leader).\n**Financials** \u2014 +2.3% 1M RS, 70% trend pass. BOC HK (#8, CONFIRMED), AIA (#10). HSBC Fading on EXIT.\n**Energy** \u2014 flat (0.0% 1M RS). PetroChina (#2, CONFIRMED) and CNOOC (#11, CONFIRMED) holding but no longer leading.\n**Consumer Discretionary** \u2014 +1.3% 1M RS. Geely (#6, New Leader, +57.1% 1M RS!) is the dramatic exception. Li Auto (Sector Rotation).\n**Communication Services and Info Tech** \u2014 both negative. Tech/internet still absent.",
    themes: "**Hongqiao** (#1, Existing Leader, MS 86.5) \u2014 top-ranked name. Aluminum play.\n**PetroChina** (#2, +19.2% EPS CONFIRMED) and **CNOOC** (#11, +29.2% EPS CONFIRMED) \u2014 the energy pair. Still CONFIRMED but energy is no longer the top sector.\n**WuXi AppTec** (#5, Existing Leader) \u2014 pharma/CDMO theme is established.\n**Geely** (#6, +57.1% 1M RS, New Leader, Sector Rotation) \u2014 the most extreme momentum in any market globally. EV adoption thesis driven by $100+ oil. Li Auto also flagged as Sector Rotation.\n**BOC Hong Kong** (#8, Existing Leader CONFIRMED) \u2014 first HK bank to hold confirmed leader status.\n**EV/Logistics Emerging** \u2014 CATL (+31.3%), JD Logistics (+34.3%), BYD (+10.5%). Strongest price action outside energy.\n**CM Bank** Emerging at +98.6 acceleration \u2014 the strongest financial early signal.",
    synthesis: "HSI in intermediate downtrend below 200DMA. 8 confirmed leaders \u2014 improved from 7. Health Care overtook Energy as the top sector (+11.5% vs flat). Geely at +57.1% 1M RS is the most extreme momentum name in any market globally \u2014 graduated to New Leader with Sector Rotation flag. The 2 Apr war-extension narrative benefits energy but the broader market is rotating toward pharma, financials, and EV. Capital allocation still favours US and Japan over HK.",
    daily: "**Hang Seng traded mixed on the 2 Apr session.** The Trump war-extension speech triggered a morning selloff but Iran/Oman Hormuz protocol reports drove a recovery.\n**Geely exploded higher.** +57.1% 1M RS \u2014 the most dramatic move in any HSI name and any market we cover. The EV adoption thesis is accelerating as $100+ oil makes EV cost advantages more compelling. Li Auto also flagged as Sector Rotation.\n**Energy paused.** PetroChina and CNOOC held but energy is no longer the top sector. Health Care has overtaken it.\n**CATL and JD Logistics** \u2014 both Emerging at 30%+ 1M RS \u2014 continued to build. The industrial/logistics cluster is generating strong price action.\n**BOC Hong Kong** (#8, CONFIRMED) held its leadership position.\n**Net read:** The session confirmed the rotation: Health Care and EV/logistics are taking over from Energy as the active themes. Geely\u2019s Sector Rotation flag suggests the EV trade is transitioning from momentum to structural leadership."
  },
  "CSI300": {
    sectors: "**Health Care** \u2014 strongest at +4.7% 1M RS. WuXi AppTec (MS 77.5, CONFIRMED) leads.\n**Utilities** \u2014 +4.7% 1M RS, 55% trend pass. CGN Power (+149.5% EPS CONFIRMED).\n**Consumer Staples** \u2014 +3.2% 1M RS. Inflecting.\n**Financials \u2014 inflecting.** +1.7% 1M RS with negative 3M (-3.1%). 9 Sector Rotation signals from state banks. The broadest rotation in CSI 300.\n**Energy** \u2014 flat (0.0% 1M RS) but 89% trend pass. China Merchants Energy (#4, CONFIRMED) and COSCO Shipping (#10, CONFIRMED). No longer leading on 1M.\n**Industrials** \u2014 -0.9% 1M RS. Electrification cluster (Dongfang #3, Zhongtian #5, Sieyuan #11) holds top ranks. 5 confirmed.\n**Info Tech** \u2014 -2.7% 1M RS, 15% trend pass. WUS Printed (#2, New Leader, +16% EPS CONFIRMED) and Eoptolink (#16, New Leader CONFIRMED) are the new additions. But GigaDevice, Range Intelligence fading.\n**Real Estate** \u2014 -15.5% 1M RS. Worst sector by far.",
    themes: "**PCB/Connectivity** \u2014 Suzhou TFC (#1, MS 92.1), WUS Printed (#2, +16% EPS CONFIRMED), Zhongji Innolight (#14, +14.9% EPS CONFIRMED), Eoptolink (#16, +3.1% EPS CONFIRMED), Suzhou Dongshan (#9). The data infrastructure cluster has surged to the top of CSI 300 \u2014 5 names in the top 20.\n**Electrical Infrastructure** \u2014 Dongfang Electric (#3), Zhongtian Tech (#5, +10.3% EPS CONFIRMED), Sieyuan Electric (#11, +23.8% EPS CONFIRMED), Ningbo Deye (#8). The electrification theme persists.\n**Specialty Materials** \u2014 Qinghai Salt Lake (#6), Ganfeng Lithium (#17), Ningxia Baofeng (#12), China Jushi (#7, +20% EPS). Deep cluster.\n**Shipping/Energy** \u2014 China Merchants Energy (#4, +43.8% EPS CONFIRMED), COSCO Shipping (#10). Both Existing Leaders.\n**Financials Rotation** \u2014 9 Sector Rotation signals: CITIC, CCB, Bank of China, Shanghai Rural, Bank of Nanjing, Yunnan Baiyao, Bank of Beijing, Zheshang Bank, Guangdong Haid. The broadest we\u2019ve recorded.\n**CGN Power** (+149.5% EPS CONFIRMED) \u2014 most extreme single-name EPS. Nuclear power benefiting from the energy crisis.",
    synthesis: "CSI 300 in intermediate downtrend \u2014 now below 200DMA for the first time (bench 4,450 vs MA 4,452). 21 confirmed leaders. The key shift: PCB/connectivity names (Suzhou TFC, WUS Printed, Zhongji, Eoptolink) have surged to dominate the top of the index \u2014 the data infrastructure theme is now the primary leadership in China, not electrification. Financials rotation (9 Sector Rotation signals) is the broadest we\u2019ve recorded. Health Care overtook Energy as the top sector on 1M RS. Pre-breakout: ICBC (Emerging +92), Agricultural Bank (Emerging +100), BYD (Emerging +71.4), Sichuan Biokin (+84.5 acceleration).",
    daily: "**CSI 300 fell as Trump\u2019s war-extension speech reversed the peace trade.** The index slipped below its 200DMA (4,450 vs 4,452) \u2014 the first time this cycle. The Iran/Oman protocol report triggered a partial recovery.\n**PCB/connectivity surged to the top.** Suzhou TFC (#1), WUS Printed (#2, New Leader CONFIRMED), Zhongji Innolight (#14) all held or gained. The data infrastructure theme is now the primary leadership cluster in CSI 300.\n**Energy paused.** China Merchants Energy and COSCO Shipping held but energy is flat on 1M RS. The sector is no longer leading.\n**Financials rotation broadened.** 9 Sector Rotation signals from state banks. CITIC Bank and Bank of China are the most prominent names. Agricultural Bank Emerging at +100 acceleration.\n**Tech mixed.** GigaDevice and Range Intelligence still fading. But WUS Printed and Eoptolink \u2014 both New Leaders CONFIRMED \u2014 are the new tech leadership.\n**Net read:** The PCB/data infrastructure theme overtaking electrification at the top of CSI 300 is the most significant structural shift this week. The 200DMA breach is a technical deterioration but the confirmed leader count (21) remains deep."
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
    ${cmt.daily ? '<div class="p-3 bg-amber-50 rounded-lg border border-amber-200"><div class="text-xs uppercase tracking-wide text-amber-600 font-semibold mb-1">Price Action \u2014 2 Apr</div><div class="text-sm text-amber-900 leading-relaxed">' + boldTextHtml(cmt.daily) + '</div></div>' : ''}
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
