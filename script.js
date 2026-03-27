// ============================================================================
// RELATIVE STRENGTH SCREENER — Static Site Build
// Vanilla JS, no React, no build step
// ============================================================================

// --- Constants ---------------------------------------------------------------

const MARKET_LABELS = {"R1000":"Russell 1000","TOPIX":"TOPIX","KOSPI":"KOSPI","HSI":"Hang Seng","CSI300":"CSI 300"};

const COMMENTARY = {
  "R1000": {
    sectors: "**Energy** — strongest sector. +18.4% avg 1M RS, 100% above 50DMA. Deep and broad: E&P (APA #12 RS1M +46.8%, CHRD RS1M +38.7%, OVV RS1M +26.9%), refining (VLO RS1M +27.1%, MPC RS1M +31.1%), and services (FTI #17 RS1M +11.9%) all leading. EPS confirmation is split — E&P names are the highest conviction (APA +20.9%, CHRD +42.6%, OVV +38.1%); refiners have strong price RS but MPC EPS is negative.
**Info Tech** — second strongest sector (+2.4% RS1M), leading on 3M and beyond. Deepest leader concentration. Optical/data names dominate the top of the screener. +5.7% avg EPS revision, 28% above 50DMA — breadth compressed but leadership quality remains high.
**Utilities** — third strongest (+1.8% RS1M, +13.3% RS3M), 71% above 50DMA. Steady defensive bid in a market below 200DMA.
**Financials — inflecting.** RS1M just turned positive (+1.1%) while RS3M remains negative (-4.8%) — the cleanest new rotation signal in the R1000. Virtu Financial (#155, EPS +20.2%), Citigroup (#209, RS1M +7.8%), BPOP (#222, EPS +11.1%) are the leading names. Sector EPS is modestly negative overall but the top names have genuine fundamental support.
**Comm Services** — leading on both horizons (+1.1% RS1M, +0.8% RS3M). Highest sector-level EPS revision in the market (+20.7%). No longer inflecting — already in motion. ASTS, TIGO, NYT all in top decile.
**Consumer Discretionary, Industrials, Consumer Staples** — all lagging on 1M RS. Financials (8% above 50DMA) and Consumer Discretionary (17%) have the worst breadth.",
    themes: "**Optical/Data Infrastructure** (SNDK #1, LITE #2, CIEN #3, WDC #4, COHR #8, TER #7, GLW #11, MKSI #14) — highest-conviction cluster. Dominates the entire top of the screener. EPS revisions are extraordinary (SNDK +264%, MU +113%, TER +74%, LITE +47%, CIEN +21%, WDC +21%) — price leadership fully backed by fundamental improvement.
**Power/Electrification** (FIX #6, VRT #9, GEV #18, MTZ #25, PWR #44, ECG #13) — infrastructure buildout cluster holding top-decile. MTZ now confirmed (#25, EPS +22.2%) — upgraded to high conviction alongside FIX and VRT. GEV and PWR are still price-led with negative EPS — lower conviction holds.
**Energy E&P** (APA #12, OVV #45, CHRD #52, VLO #33, FTI #17) — the deepest new cluster by count. APA is the highest-momentum name (+46.8% RS1M) with confirmed EPS (+20.9%). CHRD (+42.6% EPS) and OVV (+38.1% EPS) are the strongest EPS confirmations in the energy cluster. FTI leads services with multi-horizon confirmation.
**Comm Services** (ASTS #10, TIGO #27, NYT #72, VZ #189) — ASTS leads on short-term momentum but carries negative EPS (-6.6%). TIGO (#27, EPS +7.3%) and NYT (#72, EPS +4.9%) are the cleaner holds. VZ is the large-cap defensive anchor with confirmed positive EPS.
**Defence** (KRMN #50, CW #63, LMT #108) — broadening but still confirmed only at CW (EPS +6.5%). KRMN has become modestly EPS-positive (+0.9%). LMT has moved up strongly on 3M RS (+36.3%) but EPS remains slightly negative.
**Financials inflection** (VIRT #155, C #209, BPOP #222) — the freshest rotation. VIRT is the best-confirmed name (EPS +20.2%). Treat as early-stage; most names below the top-decile threshold.",
    synthesis: "Market correcting below 200DMA — regime: -5.8% 1M, -6.4% 3M. 100 leaders, 69 EPS-confirmed. The sell-off has sharpened relative rankings: optical/data infrastructure names held through the drawdown and remain the highest-conviction cluster (SNDK, LITE, CIEN, WDC, TER all in top 10). Energy has become the broadest sector by RS with deep E&P confirmation — APA, CHRD, OVV are now among the most fundamentally-anchored names in the screen. Key regime change vs. prior read: **Financials is now inflecting** (RS1M +1.1%, RS3M -4.8%) — the first new sector-level rotation signal. Comm Services is no longer a rotation watch; it is leading with the highest sector EPS revision (+20.7%). MTZ has graduated to high conviction with EPS +22.2% confirmed. MRVL (#126, RS1M +25.4%) is the closest near-graduation name. PLTR has dropped to rank 336 as 3M RS turned negative — downgrade from watch. NDAQ remains mid-universe (rank 551) — remove from watch."
  },
  "TOPIX": {
    sectors: "**Energy** — strongest sector, 93% above 50DMA. +9.1% RS1M and +17.7% RS3M. MODEC (#20, RS1M +18.9%) is the lead name. Small cluster but persistent.
**Utilities** — second strongest (+6.4% RS1M, +7.6% RS3M), 78% above 50DMA. Consistent positive RS on both horizons. Defensive quality.
**Comm Services — inflecting.** RS1M +4.7%, RS3M -12.3%. The sharpest new rotation signal in TOPIX. Sky Perfect JSAT (#9412, top-30) is the lead name with confirmed EPS (+16.2%).
**Consumer Staples — inflecting.** RS1M +3.3%, RS3M -5.1%, EPS +5.0%. Broad sector with 145 names — the largest inflection by stock count. Positive EPS revision gives this signal fundamental support.
**Health Care — inflecting.** RS1M +3.1%, RS3M -4.2%, EPS +7.6%. Three consecutive inflection reads — now the most credible rotation in the market. Astellas (rank 138, EPS +89.1%) is the confirmed lead name. Health Care has the best EPS backing of any inflecting sector.
**Real Estate and Info Tech — inflecting** on price alone. RS1M positive but RS3M deeply negative and EPS mixed. Treat as noise at this stage.
**Financials** — leading on both horizons (+1.1% RS1M, +8.0% RS3M, EPS +3.7%, 52% above 50DMA). Strong and fundamentally-supported — the broadest sector combining positive RS, positive EPS, and adequate breadth.
**Materials** — pulling back on 1M (-3.2% RS1M) within a strong 3M uptrend (+5.0%). The specialty materials cluster is consolidating after a major run.",
    themes: "**Cable/Power Infrastructure** — Furukawa Electric (#4, EPS +35.6%), Fujikura (#9, EPS +14.9%), Sumitomo Electric (#15, EPS +27.1%). All three earnings-confirmed, all trend pass. This is the Japanese expression of the global electrification/AI buildout theme. Highest-conviction cluster in TOPIX.
**Kioxia** (#2, EPS +164.1%) — single strongest earnings confirmation in TOPIX. NAND flash recovery with extraordinary fundamental backing and top composite score.
**New entrants at the top** — Unitika (#1, RS3M +322.6%) and Japan Display (#3, RS1M +182.3%) have surged into the top 3 but both lack EPS data entirely. These are high-RS, zero-fundamental reads — treat as speculative momentum only, not confirmed leaders.
**Meiko Electronic** (#7, RS1M +37.5%, RS3M +157.9%) and **Samco** (#12, RS1M +42.0%) — high short-term momentum, no EPS. Same caveat: watch until fundamentals confirm.
**Specialty Materials** — JX Advanced Metals (#10, EPS +95.3%), Resonac (#16, EPS +44.2%), Mitsui Kinzoku (#5, EPS +58.8%). All CONFIRMED with massive EPS upgrades. These remain the most fundamentally-anchored names in the screen outside the cable infrastructure cluster.
**Health Care / Pharma** — Astellas (#138, EPS +89.1%) is the standout — confirmed EPS upgrade despite being below top-decile on composite score. The Health Care inflection signal has now fired on three consecutive reads; Astellas is the cleanest expression.
**Semi Equipment** — Lasertec (#57, RS1M +11.2%) climbing; Advantest (#55, RS1M -10.5%) fading despite EPS +25.8%. Continued divergence. Lasertec over Advantest.",
    synthesis: "TOPIX is ABOVE its 200DMA (px 3,650 vs MA200 3,261) — strongest regime of any market we screen. 165 leaders, 29 EPS-confirmed. Bench: -7.3% 1M, +6.6% 3M. The core thesis is unchanged: cable infrastructure (Furukawa/Fujikura/Sumitomo) and specialty materials (JX/Resonac/Mitsui Kinzoku) dominate the confirmed leader pool. The key update is **three simultaneous inflection signals with EPS support** — Comm Services, Consumer Staples, and Health Care are all inflecting with positive sector-level EPS revisions. Health Care (Astellas, EPS +89%) is the most credible of the three given the depth of the fundamental upgrade. Two high-RS names with no EPS — Unitika and Japan Display — have catapulted to the top of the screener; treat as speculative until fundamentals confirm. Financials continues to lead quietly with the best combination of breadth, RS, and EPS of any established sector."
  },
  "KOSPI": {
    sectors: "**Utilities** — strongest sector (+15.9% RS1M), inflecting (RS3M -1.4%). SK Eternix (#11, RS1M +94.8%) and SGC Energy (#13, RS1M +44.8%) are extraordinary momentum names — both new to the top of the screen with no EPS data. 57% above 50DMA. Price-only signal but the velocity is exceptional.
**Information Technology** — second strongest (+10.9% RS1M), inflecting (RS3M -3.7%). 55% above 50DMA. Korea Circuit (#2, RS1M +55.5%), Daeduck Electronics (#7, RS1M +49.3%), and HD Hyundai Energy (#8, RS1M +31.4%) lead — all new entrants with no EPS confirmation. SK Hynix (#17, EPS +26.7%) is the only confirmed anchor in this cluster.
**Industrials** — the deepest sector. +8.9% RS1M, inflecting (RS3M -15.0%). 51% above 50DMA. Defence and construction names dominate the top. The 3M RS gap is wide — this is a fresh short-term rotation within a sector that had already corrected significantly.
**Financials** — only sector with positive RS on both horizons (+4.8% RS1M, +2.0% RS3M, EPS +10.3%, 78% above 50DMA). The most reliable sector in KOSPI. Mirae Asset (#3, EPS +172.3%) is the confirmed anchor.
**Health Care, Consumer Staples, Materials, Consumer Discretionary** — all inflecting (RS1M positive, RS3M deeply negative). These reads are context-dependent: KOSPI's 3M bench return is +31.7%, meaning most sectors corrected hard near-term after a very strong medium-term move. The inflection signals are plentiful but many are reversions within a correction, not genuine new rotations.
**Avoids** — Naver (rank 694/835, RS1M -3.6%, RS3M -39.9%), Samsung Biologics (rank 524, RS3M -36.8%), Celltrion (rank 359, RS3M -16.8%). The internet and biotech complex is trailing the broader market on every horizon.",
    themes: "**Defence/Infrastructure** — Daewoo E&C (#1, RS1M +83.1%, RS3M +334.8%), Hanwha Systems (#19, RS1M +22.1%, EPS flat), LIG Nex1 (#29, RS1M +57.3%, EPS +8.0%), Hyundai E&C (#12, EPS +20.8% CONFIRMED), Korea Aerospace (#52, EPS confirmed). The single most dominant thematic cluster in any market we screen. Defence and construction names continue to generate the highest absolute RS in KOSPI. Hyundai E&C is the strongest EPS-confirmed name in the cluster.
**Utilities surge** — SK Eternix (#11, RS1M +94.8%) and SGC Energy (#13, RS1M +44.8%) are the two most explosive short-term names in the entire KOSPI universe. Neither has EPS data — pure price momentum plays. Watch closely for fundamental confirmation.
**PCB/Electronics** — Korea Circuit (#2, RS1M +55.5%), Daeduck Electronics (#7, RS1M +49.3%), HD Hyundai Energy (#8, RS1M +31.4%) — all new entrants with extraordinary short-term RS. These names weren't in the prior top-decile. No EPS data on any of them — the move is price-led and may reflect sector rotation into beaten-down tech hardware. SK Hynix (#17, EPS +26.7%) remains the only confirmed semi anchor.
**Financials** — Mirae Asset (#3, EPS +172.3% CONFIRMED), SK Square (#9, EPS +141.9% CONFIRMED). Two of the most fundamentally-anchored positions in the entire screen. Multi-horizon confirmation, positive EPS on both. The highest-conviction KOSPI holdings.
**Avoids** — LG Energy Solution (rank 447, RS3M -28.8%), Naver (rank 694), Samsung Biologics (rank 524). The EV battery, internet, and biotech complex is structurally lagging.",
    synthesis: "KOSPI is ABOVE its 200DMA (px 5,439 vs MA200 3,998) — strong regime despite the 1M correction (-12.9%). 83 leaders, 22 EPS-confirmed. The key update: **utilities and PCB/electronics have erupted to the top of the screen** with extraordinary short-term RS — SK Eternix (+94.8% RS1M), SGC Energy (+44.8%), Korea Circuit (+55.5%), Daeduck (+49.3%). All are price-only with no EPS confirmation. These are the highest-velocity signals in any market we screen but carry the least fundamental anchoring. The highest-conviction positions remain Mirae Asset (EPS +172%, confirmed) and SK Square (EPS +142%, confirmed) — nothing has displaced them. Defence/infrastructure (Daewoo E&C, LIG Nex1, Hyundai E&C) remains the deepest confirmed cluster. Financials is the only sector positive on both RS1M and RS3M with confirmed EPS — the most reliable sector read in KOSPI. Monitor SK Eternix and Korea Circuit closely for any EPS confirmation that would elevate them from speculation to conviction."
  },
  "HSI": {
    sectors: "**Energy** — strongest sector, 75% above 50DMA. PetroChina (#1, RS1M +21.3%, EPS +2.5%), CNOOC-H (#2, RS1M +21.1%, EPS +6.2%), China Shenhua (#6, RS1M +12.6%). Both PetroChina and CNOOC are now EPS-confirmed — upgraded from the prior read where CNOOC carried negative EPS. The two-name E&P pair is the highest-conviction position in the HSI.
**Industrials** — second strongest (+6.5% RS1M, +16.7% RS3M), 56% above 50DMA. CATL-H (#16, RS1M +34.1%), JD Logistics (#20, RS1M +31.5%), ZTO Express (#13, EPS +2.9%), Xinyi Glass (#15, EPS +3.5%). The sector has broadened — CATL-H is a significant new entrant to the top 20.
**Utilities** — +2.4% RS1M, +6.4% RS3M, 33% above 50DMA. Defensive bid persists. Power Assets (#19, EPS +0.1%) is the confirmed anchor.
**Consumer Staples** — marginally positive on both horizons (+0.7% RS1M, +1.0% RS3M). WH Group (#7) leads. EPS is negative — breadth signal only.
**Financials** — +0.6% RS1M, +3.3% RS3M, 50% above 50DMA, EPS +4.8%. AIA (#17) is the lead name. State banks providing steady RS underpinning.
**Health Care** — +0.4% RS1M, +4.9% RS3M, EPS +3.6%. CSPC Pharma (#8), WuXi AppTec (#9), Innovent (#11) all in the top half. A quiet positive read.
**Consumer Discretionary, Comm Services, Info Tech, Real Estate** — all lagging. Tencent (rank 77, RS1M +1.6%, RS3M -14.8%) remains bottom-half. Communication Services is 0% above 50DMA.",
    themes: "**Energy** (PetroChina #1, CNOOC-H #2, China Shenhua #6) — upgraded read. PetroChina (EPS +2.5% CONFIRMED) and CNOOC-H (EPS +6.2% CONFIRMED) are now both earnings-confirmed. This is the highest-conviction pair in the HSI — persistent RS leadership now backed by fundamental improvement on both names.
**CATL-H** (#16, RS1M +34.1%, RS3M +28.0%) — the most significant new entrant in HSI. The A-H listed EV battery giant has surged into the top 20 with strong absolute RS on both horizons. No EPS data yet — price-only but the velocity is notable given CATL's size ($269B market cap). Watch for EPS confirmation.
**Geely Automobile** (#10, RS1M +35.7%, RS3M +26.9%) — remains the highest single-name short-term momentum in HSI. No EPS data. Consistent across reads but unconfirmed.
**JD Logistics** (#20, RS1M +31.5%) — new to top 20. No EPS data but strong short-term RS. Logistics/supply chain theme.
**SHK PPT** (#4, EPS +12.5% CONFIRMED) — highest-conviction property name, confirmed EPS, strong 3M RS. The one real estate name worth holding.
**China Hongqiao** (#3, EPS +22.8% CONFIRMED) — aluminium producer, confirmed EPS, the strongest materials name. Worth noting despite materials sector being weak overall.
**Avoids** — Tencent (rank 77), Alibaba (bottom half), Meituan, Xiaomi. Comm Services 0% above 50DMA. The HK tech/internet complex continues to underperform on every horizon.",
    synthesis: "HSI remains below 200DMA (px 24,952 vs MA200 25,722) — regime: -6.3% 1M, -3.4% 3M. 9 leaders, 4 EPS-confirmed. Two meaningful updates vs. prior read: (1) **CNOOC-H EPS turned positive** (+6.2%) — both energy anchors are now confirmed, making the PetroChina/CNOOC pair the most fundamentally-supported position in HSI; (2) **CATL-H has entered the top 20** with strong absolute RS (+34.1% RS1M) at $269B market cap — the largest new entrant by size, though unconfirmed by EPS. The structural assessment is unchanged: HSI is the weakest market in our coverage with the fewest leaders, worst sector breadth, and no inflection signals. If positioned here, concentrate in the energy pair (PetroChina + CNOOC) and SHK PPT — the only three EPS-confirmed leaders with persistent multi-horizon RS. CATL-H is the one speculative watch. Everything else, including Tencent and the internet complex, continues to lag."
  },
  "CSI300": {
    sectors: "**Energy** — strongest sector, 73% above 50DMA. COSCO Shipping (#5, RS1M +19.5%, RS3M +105.3%, EPS +27.3%) and China Merchant (#4, RS3M +95.2%) dominate. China Coal (#15, EPS +5.3%), CNOOC-A (#19, EPS +7.5%), and China Shenhua (#55) round out a broad, fundamentally-supported cluster. The earnings-confirmed names here are the highest-conviction positions in the entire CSI300 screen.\n**Utilities** — second strongest sector and the most consistent. 100% above 50DMA. CGN Power (#45), ENN Natural (#67), Huaneng Lancang (#78), Huadian New Energy (#96), China Three Gorges (#97) — all in positive RS territory on both horizons. EPS support is thin (most lack revision data) but breadth is exceptional. Defensive quality bid.\n**Power/Electrification Industrials** — Ningbo Deye (#11, RS3M +50%), Dongfang Electric (#9, RS3M +48.5%), Sieyuan Electric (#6, EPS +23.8%), TBEA (#12, EPS +0.5%), Zhongtian Tech (#16, EPS +4.9%), China Energy Engineering (#36) — the A-share expression of the global grid and power infrastructure buildout theme. Strong on 3M RS; the EPS overlay is mixed but Sieyuan and Zhongtian are confirmed.\n**Consumer Staples — inflecting.** RS1M positive (+1.4%) while RS3M remains negative (-4.7%). Foshan Haitian (#103, RS1M +14.8%), Henan Shuanghui (#94, RS1M +10.7%), and Wens Foodstuff (#136) are leading the turn. Sector-level EPS is negative — the move is price-led, treat as early watch.\n**Financials — inflecting.** RS1M positive (+1.1%) while RS3M remains negative (-4.7%). CNPC Capital (#48, RS1M +21.5%), China CITIC Bank (#65, RS1M +20.0%), Chongqing Rural (#72, RS1M +12.3%) leading. No EPS confirmation on the top names — purely a price rotation signal.\n**Real Estate, Consumer Discretionary, and broad Info Tech — lagging on both horizons.** Real Estate is 0% above 50DMA. China Vanke (#298) is near the bottom of the entire universe. The broad IT sector (-5.6% RS1M) masks the fibre optic outliers at the very top.",
    themes: "**Fibre Optic / Optical Infrastructure** (Eoptolink #1, RS1M +28.7%; Suzhou TFC Opt #2, RS3M +52.2%; Zhongji Innolight #3, RS1M +16.4%) — the three top-ranked names in CSI300 are all optical fibre and transceiver companies. This is the Chinese A-share expression of the exact same theme leading the R1000 (CIEN, LITE, COHR). EPS support is light (Eoptolink and Zhongji modestly positive, Suzhou TFC negative) — the cluster is price-led but the thematic alignment with global data infrastructure demand is clear.\n**Energy/Shipping** — COSCO Shipping (#5, EPS +27.3% CONFIRMED) is the standout confirmed leader. China Coal (#15, EPS +5.3%), CNOOC-A (#19, EPS +7.5%) are the other confirmed names. China Merchant (#4) and Yankuang Energy (#21) lead on RS but lack EPS data. Lean toward COSCO, China Coal, and CNOOC for the EPS-anchored positions.\n**Power Infrastructure Industrials** — Sieyuan Electric (#6, EPS +23.8% CONFIRMED), Zhongtian Tech (#16, EPS +4.9% CONFIRMED), Ningbo Deye (#11), Dongfang Electric (#9). Sieyuan and Zhongtian are the highest-conviction names — confirmed price and fundamental leadership. Ningbo Deye and Dongfang Electric lead on RS but lack EPS data.\n**Materials — lithium and specialty chemicals** — Qinghai Salt (#8, EPS +91.9% CONFIRMED), Ganfeng Lithium (#14, EPS +42.2% CONFIRMED), Zhejiang NHU (#26, EPS +3.7% CONFIRMED), Satellite Chem (#24, RS3M +63.1%). The EPS confirmation on Qinghai Salt and Ganfeng is among the strongest in the entire screen. Lithium recovery trade with real fundamental backing.\n**Utilities breadth** — 13 names with consistent positive RS across both horizons and 100% above 50DMA. Not a high-momentum cluster but the most reliable RS persistence in the market. CGN Power and ENN Natural are the cleanest holdings.\n**Avoid** — Real Estate (China Vanke #298, 0% sector breadth above 50DMA), broad consumer internet and software (bottom of IT universe), Kweichow Moutai (#153) despite its brand status — negative EPS revision and negative RS on both horizons.",
    synthesis: "CSI300 is marginally above its 200DMA (px 4,503 vs MA200 4,436) — the regime is constructive but fragile, -4.4% 1M and -3.3% 3M. 30 leaders, 13 EPS-confirmed. The market is narrow: leadership is concentrated in three clusters — fibre optic infrastructure (top 3 names), energy/shipping (COSCO, China Coal, CNOOC-A), and power grid industrials (Sieyuan, Zhongtian Tech, Dongfang Electric). The strongest single position by combined RS and EPS is COSCO Shipping (RS3M +105%, EPS +27.3%, CONFIRMED). Two inflection signals firing simultaneously — Consumer Staples and Financials — but both are price-only with no EPS support; treat as watch, not buy. Clear avoids: Real Estate, broad IT software, and the well-known consumer names (Moutai, Kweichow). The A-share market is telling the same story as global peers: infrastructure and energy over consumer and real estate."
  }
};

const DEFAULT_CFG = {
  w1m: 0.15, w3m: 0.35, w6m: 0.25, w1y: 0.25,
  minCap: 5,
  hiProx: 0.85, minTrend: 2,
  volAdj: 0.50, ind: 0.50,
  decile: 90, quartile: 75,
  winsorize: 200, accelGate: 30,
  exitThresh: 3, watchThresh: 2,
};

const FOPTS = {
  leader: ["All", "NEW LEADER", "EXISTING LEADER", "FADING LEADER", "\u2014"],
  confirm: ["All", "CONFIRMED", "UNCONFIRMED", "REVISION LEADER", "\u2014"],
  early: ["All", "EMERGING", "ACCELERATING", "SECTOR ROTATION", "\u2014"],
  exit: ["All", "EXIT", "WATCH", "HOLD"],
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

// --- State -------------------------------------------------------------------

const state = {
  mkt: "R1000",
  sCol: "ms",
  sDir: "desc",
  fl: { leader: "All", confirm: "All", early: "All", exit: "All", trend: "All", q: "" },
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
  if (fl.early !== "All") d = d.filter(r => r.es === fl.early);
  if (fl.exit !== "All") d = d.filter(r => r.ex === fl.exit);
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
  s.className = "px-3 py-1.5 text-sm font-medium rounded-md " + (state.tab === "screener" ? "bg-slate-800 text-white" : "text-slate-500 hover:bg-slate-200");
  c.className = "px-3 py-1.5 text-sm font-medium rounded-md " + (state.tab === "config" ? "bg-slate-800 text-white" : "text-slate-500 hover:bg-slate-200");
  document.getElementById("screener-panel").classList.toggle("hidden", state.tab !== "screener");
  document.getElementById("config-panel").classList.toggle("hidden", state.tab !== "config");
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
    ${sel("early", "Early", FOPTS.early)}
    ${sel("exit", "Exit", FOPTS.exit)}
    ${sel("trend", "Trend", FOPTS.trend)}
    <button id="clear-filters" class="text-xs text-slate-400 hover:text-slate-700 px-2 py-1">Clear</button>
  `;
}

function renderTable(filtered, totalCount) {
  const cols = [
    { key: "t", label: "Ticker", align: "left", sort: true },
    { key: "c", label: "Company", align: "left" },
    { key: "s", label: "Sector", align: "left" },
    { key: "px", label: "Last Price", align: "right", sort: true },
    { key: "mc", label: "Mkt Cap (US$)", align: "right", sort: true },
    { key: "r1m", label: "1M", align: "right", sort: true, border: true },
    { key: "r3m", label: "3M", align: "right", sort: true },
    { key: "eps", label: "EPS", align: "right", sort: true },
    { key: "rs1m", label: "RS 1M", align: "right", sort: true, border: true },
    { key: "rs3m", label: "RS 3M", align: "right", sort: true },
    { key: "rs6m", label: "RS 6M", align: "right", sort: true },
    { key: "rs1y", label: "RS 1Y", align: "right", sort: true },
    { key: "ms", label: "Master", align: "right", sort: true, border: true },
    { key: "ac", label: "Acceleration", align: "right", sort: true },
    { key: "tr", label: "Trend", align: "center" },
    { key: "lf", label: "Leader", align: "center", border: true },
    { key: "cf", label: "Confirm", align: "center" },
    { key: "es", label: "Early", align: "center" },
    { key: "ex", label: "Exit", align: "center" },
  ];

  // Group headers
  let thead = '<thead><tr class="bg-slate-800 text-white">';
  thead += '<th class="px-2 py-2 text-left text-xs font-semibold" colspan="5">IDENTIFICATION</th>';
  thead += '<th class="px-2 py-2 text-center text-xs font-semibold border-l border-slate-600" colspan="3">RETURNS</th>';
  thead += '<th class="px-2 py-2 text-center text-xs font-semibold border-l border-slate-600" colspan="4">RELATIVE STRENGTH</th>';
  thead += '<th class="px-2 py-2 text-center text-xs font-semibold border-l border-slate-600" colspan="3">SCORES</th>';
  thead += '<th class="px-2 py-2 text-center text-xs font-semibold border-l border-slate-600" colspan="4">SIGNALS</th>';
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
    tbody += '<tr><td colspan="19" class="px-4 py-8 text-center text-slate-400">No Names Match Filters</td></tr>';
  } else {
    for (let idx = 0; idx < rows.length; idx++) {
      const r = rows[idx];
      const rowCls = r.ex === "EXIT" ? "bg-red-50" : r.ex === "WATCH" ? "bg-amber-50" : idx % 2 === 1 ? "bg-slate-50" : "";
      const mcStr = r.mc >= 1000 ? (r.mc / 1000).toFixed(1) + "T" : r.mc.toFixed(0) + "B";
      const trStr = r.tr === 1 ? '<span class="text-emerald-600 font-bold">\u2713</span>' : '<span class="text-slate-300">\u2014</span>';
      tbody += `<tr class="border-b border-slate-100 hover:bg-slate-50 ${rowCls}">`;
      tbody += `<td class="px-2 py-1.5 font-mono font-semibold text-slate-900">${esc(r.t)}</td>`;
      tbody += `<td class="px-2 py-1.5 text-slate-600 truncate max-w-[130px]">${esc(r.c)}</td>`;
      tbody += `<td class="px-2 py-1.5 text-slate-500 truncate max-w-[110px]">${esc(r.s)}</td>`;
      const pxStr = r.px != null ? r.px.toLocaleString(undefined, { minimumFractionDigits: r.px < 10 ? 2 : r.px < 1000 ? 1 : 0, maximumFractionDigits: r.px < 10 ? 2 : r.px < 1000 ? 1 : 0 }) : "\u2014";
      tbody += `<td class="px-2 py-1.5 text-right text-slate-600 font-mono">${pxStr}</td>`;
      tbody += `<td class="px-2 py-1.5 text-right text-slate-600 font-mono">${mcStr}</td>`;
      tbody += `<td class="px-2 py-1.5 text-right border-l border-slate-100">${pctHtml(r.r1m, true)}</td>`;
      tbody += `<td class="px-2 py-1.5 text-right">${pctHtml(r.r3m, true)}</td>`;
      tbody += `<td class="px-2 py-1.5 text-right">${pctHtml(r.eps, true)}</td>`;
      tbody += `<td class="px-2 py-1.5 text-right border-l border-slate-100">${pctHtml(r.rs1m, true)}</td>`;
      tbody += `<td class="px-2 py-1.5 text-right">${pctHtml(r.rs3m, true)}</td>`;
      tbody += `<td class="px-2 py-1.5 text-right">${pctHtml(r.rs6m, true)}</td>`;
      tbody += `<td class="px-2 py-1.5 text-right">${pctHtml(r.rs1y, true)}</td>`;
      tbody += `<td class="px-2 py-1.5 text-right border-l border-slate-100">${scoreHtml(r.ms)}</td>`;
      tbody += `<td class="px-2 py-1.5 text-right">${scoreHtml(r.ac)}</td>`;
      tbody += `<td class="px-2 py-1.5 text-center">${trStr}</td>`;
      tbody += `<td class="px-2 py-1.5 text-center border-l border-slate-100">${badgeHtml(r.lf)}</td>`;
      tbody += `<td class="px-2 py-1.5 text-center">${badgeHtml(r.cf)}</td>`;
      tbody += `<td class="px-2 py-1.5 text-center">${badgeHtml(r.es)}</td>`;
      tbody += `<td class="px-2 py-1.5 text-center">${badgeHtml(r.ex)}</td>`;
      tbody += '</tr>';
    }
  }
  tbody += '</tbody>';

  document.getElementById("data-table").innerHTML = thead + tbody;
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
    state.fl = { leader: "All", confirm: "All", early: "All", exit: "All", trend: "All", q: "" };
    render();
    return;
  }

  // Screener / Config tabs
  if (btn.id === "tab-screener") { state.tab = "screener"; render(); return; }
  if (btn.id === "tab-config") { state.tab = "config"; render(); return; }

  // Toggle commentary
  if (btn.id === "toggle-commentary") { state.showC = !state.showC; renderKPIs(engineCache); renderCommentary(); return; }

  // Clear filters
  if (btn.id === "clear-filters") {
    state.fl = { leader: "All", confirm: "All", early: "All", exit: "All", trend: "All", q: "" };
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
