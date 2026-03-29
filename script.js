// ============================================================================
// RELATIVE STRENGTH SCREENER — Static Site Build
// Vanilla JS, no React, no build step
// ============================================================================

// --- Constants ---------------------------------------------------------------

const MARKET_LABELS = {"R1000":"Russell 1000","TOPIX":"TOPIX","KOSPI":"KOSPI","HSI":"Hang Seng","CSI300":"CSI 300"};

const COMMENTARY = {
  "R1000": {
    sectors: "**Energy** — dominant sector. +18.4% 1M RS, 100% above 50DMA. Broad, persistent outperformance across all horizons with +5.1% average EPS revision — commodity-driven but with fundamental confirmation. Only sector with perfect trend participation.\n**Info Tech** — second strongest on 1M and 3M RS with the deepest leader pool (14 Existing, 7 New Leaders, 28 confirmed). Best combined price + fundamental profile: +7.6% average EPS revision. 28% trend pass reflects market-wide drawdown pressure but leaders are holding.\n**Utilities** — quietly outperforming with +1.7% 1M RS and 88% trend pass — second-best breadth in the market. Defensive but persistent.\n**Financials — inflecting.** 1M RS just turned positive (+0.9%) while 3M remains negative (-4.8%) — the classic rotation signal. Generating 30 Sector Rotation early signals, the largest rotation cluster of any sector. EPS is modestly negative (-0.9%) so the turn is price-led, but the breadth of the signal is notable.\n**Consumer Discretionary and Consumer Staples** — both lagging on 1M RS despite some individual leaders. Staples pulling back harder (-4.1% 1M RS) despite some strong New Leaders (CASY, SEB).\n**Industrials** — largest sector with the most Fading Leaders (19). Strong 3M RS (+7.2%) but negative 1M (-3.8%) signals near-term weakness within a medium-term uptrend.",
    themes: "**Power/Electrification** (GEV #1, VRT #3, FIX #12, MTZ #5, NVT #6) — deepest cluster in the market. All leaders with trend pass. EPS splits the group: VRT (+9.2%), FIX (+16.5%), MTZ (+22.2%) are the confirmed core; GEV (-2.9%) is price-led. This cluster continues to lead through the drawdown.\n**Optical/Data Infrastructure** (CIEN #7, DELL, UI, JBL, FLEX, CRUS) — refreshed leadership with DELL emerging as New Leader (+24.6% 1M RS, +25.7% EPS). CIEN remains anchor Existing Leader (+17.1% 1M RS, +20.9% EPS CONFIRMED). Tech hardware broadly holding.\n**Consumer/Off-Price Retail** (FIVE #2, ROST #11, CASY #19, BURL) — all New Leaders with trend pass. FIVE has the strongest EPS in the entire top 20 (+104.7% CONFIRMED). Domestic consumer thesis strengthening.\n**Financials Rotation** — 30 names flagged as Sector Rotation signals led by BK, CFG, C, STT, NTRS. Not yet leaders but the broadest early signal in the market. Large banks (MS, GS, JPM, BAC) all accelerating.\n**Healthcare** (MRNA, RPRX, BIIB, JAZZ, UTHR, HOLX) — multiple New Leaders but all UNCONFIRMED with negative EPS revisions. Leading on price, not fundamentals — a divergence to monitor.",
    synthesis: "Market in intermediate downtrend below 200DMA but leadership structure is deep — 90 confirmed leaders. Highest-conviction positions: the power/electrification cluster (VRT, FIX, MTZ — all CONFIRMED with trend pass through the drawdown) and the consumer retail cluster (FIVE at +105% EPS, ROST, CASY — all freshly confirmed New Leaders). Biggest developing theme: the Financials rotation — 30 Sector Rotation signals, the most concentrated rotation burst in any US sector, supported by accelerating large banks (MS, GS, JPM). Pre-breakout watch: PLTR (+13.4% 1M RS, +31.1% EPS, dual accelerating signal), TWLO (Emerging, +93.3 acceleration), DDOG (Emerging, +91.8 acceleration), and EXPE (+98.5 acceleration, +86.2% EPS — strongest combined acceleration + EPS in the market).",
    daily: "**26 Mar session: S&P 500 -1.7%, Nasdaq -2.4%, Dow -1.0%.** Broad risk-off as Iran rejected the U.S. 15-point peace framework — Brent crude surged +5.7% to $108 intraday before closing around $102. VIX above 30. Fifth consecutive weekly decline.\n**Memory/Data Infrastructure cluster hit hardest.** Google's TurboQuant algorithm — compressing AI memory requirements by 6x — triggered a second day of selling across the entire memory chain. Micron -6.9% (down ~20% over 5 days), SanDisk -11%, Western Digital -7.7%, Seagate -4%. In Asia, SK Hynix -6%, Samsung -5%, Kioxia -6%. This directly pressures our screener's optical/data infrastructure cluster (SNDK, MU, WDC all Existing Leaders) — but analysts argue this is evolutionary, not revolutionary, and may actually be a Jevons Paradox setup where efficiency drives higher total adoption.\n**Social media legal risk.** META -8% and GOOGL -3% after a California jury ruling found them negligent in a social media addiction case. Both plan to appeal, but the precedent creates a new overhang for the ad-tech complex.\n**Energy outperformed sharply.** Oil & gas names were the clear winners as the Hormuz blockade tightens — OXY rallied on CEO succession news, and the energy sector extended its multi-week RS dominance. This is consistent with our screener's Energy leadership (100% trend pass, +18.4% 1M RS).\n**Defensive rotation visible.** Utilities and consumer staples held up relatively better. Rental car stocks surged (Avis +13%) on airport disruption — idiosyncratic but notable.\n**Net read for the screener:** The session reinforced the regime — Energy leadership accelerating, tech/growth under pressure from both geopolitical and AI-efficiency headwinds. The memory cluster selloff creates a near-term test for the data infrastructure theme, though the confirmed leaders (CIEN, DELL, UI) were less affected than the pure memory plays. Watch whether MU and SNDK hold their Existing Leader status or roll into Fading."
  },
  "TOPIX": {
    sectors: "**Energy** — strongest sector at +17.6% 1M RS, 100% above 50DMA. Small cluster (4 names) but persistent outperformance across all horizons.\n**Communication Services — inflecting.** 1M RS just turned positive (+6.6%) while 3M remains deeply negative (-10.0%) — the classic rotation signal. SKY Perfect JSAT is the confirmed lead name.\n**Utilities** — positive 1M RS with 83% trend pass. Two New Leaders (Osaka Gas, Tokyo Gas) but both UNCONFIRMED — price-led without fundamental backing.\n**Health Care — also inflecting.** Positive 1M RS (+3.1%) with negative 3M (-3.0%) and strong +10.8% EPS revision. Astellas (+89.1% EPS CONFIRMED) and Otsuka are the lead names.\n**Financials** — positive on both horizons with the best sector EPS revision (+13.5%). Regional banks (Gunma, Hachijuni Nagano, Kyoto Financial) generating New Leaders.\n**Industrials** — deepest sector (60 names) with strong 3M RS but pulling back on 1M (-1.5%). Four Existing Leaders but also 5 Fading Leaders — selectivity matters.\n**Consumer Discretionary and Information Technology** — both negative on 1M and 3M RS. IT has the weakest trend pass (32%) despite having strong individual names.",
    themes: "**Cable/Power Infrastructure** — Fujikura (#1, Master 94.8, +14.9% EPS CONFIRMED), Furukawa Electric (#3, +35.6% EPS), Sumitomo Electric (#5, +27.1% EPS). Three of the top five names are cable infrastructure. All CONFIRMED. This is the Japanese expression of the global electrification/data center buildout theme. Highest-conviction cluster in TOPIX.\n**Trading Houses** — Mitsui & Co (#7, New Leader, +7.8% EPS CONFIRMED), Mitsubishi Corp (#8, New Leader, +15.2% EPS CONFIRMED), Marubeni (#13, Existing Leader, +19% EPS). All three freshly confirmed with trend pass — the strongest new development this week. Sogo shosha are benefiting from commodity exposure and cross-holding revaluation.\n**Specialty Materials** — JX Advanced Metals (#9, +95.3% EPS), Resonac (#6, +44.2%), Mitsui Kinzoku (#15, +58.8%). Semiconductor materials supply chain — all CONFIRMED with massive EPS upgrades.\n**Kioxia** (#4, Master 92.4, +164.1% EPS CONFIRMED) — strongest single earnings confirmation in the entire TOPIX screen. NAND flash recovery play.\n**Pharma** — Astellas (New Leader, +89.1% EPS CONFIRMED) leading the Health Care inflection. Otsuka (+13.8% 1M RS) also emerging.\n**Semi Equipment splitting** — Lasertec and Rohm rising as New Leaders (both CONFIRMED), while Advantest, Disco, and Screen Holdings all fading despite Advantest's strong +25.8% EPS. Stock selection critical.",
    synthesis: "TOPIX in pullback within a strong uptrend. Cable infrastructure remains the dominant cluster — Fujikura/Furukawa/Sumitomo Electric hold the top ranks, all CONFIRMED. Key new development: trading houses (Mitsui, Mitsubishi, Marubeni) all upgraded to confirmed leaders simultaneously — the broadest fresh leadership emergence in TOPIX this week. Kioxia anchors the semi materials theme with +164% EPS. Freshest rotations: Communication Services (SKY Perfect JSAT confirmed) and Health Care (Astellas +89% EPS). Pre-breakout: NTT and SoftBank Corp (both Emerging with 97%+ acceleration — telecom names accelerating into the Comm Services inflection).",
    daily: "**26 Mar session: Nikkei -0.4%, TOPIX +0.2%.** Mixed session as Japan digested overnight U.S. weakness and rising oil prices. TOPIX outperformed the Nikkei — value over growth.\n**Memory/semi chain under pressure.** Google's TurboQuant selloff hit Japanese names hard: Kioxia -6%, Advantest and other semi equipment names sold off. This directly affects our screener's Kioxia (#4) and the fading semi equipment cluster (Advantest, Disco, Screen). Lasertec and Rohm (both New Leaders) held up relatively better.\n**Cable infrastructure and trading houses resilient.** The Fujikura/Furukawa/Sumitomo Electric cluster held ground as electrification and data center demand remains unaffected by the TurboQuant news — these are physical infrastructure, not memory. Trading houses (Mitsui, Mitsubishi) benefited from the oil surge given their commodity exposure.\n**Energy/commodity complex strong.** INPEX and other oil names continued to rally on the Brent surge. Japan's acute energy import dependence (93% of oil transits the Strait) makes the Hormuz crisis a macro headwind but a stock-level tailwind for the energy sector.\n**Net read:** The session widened the gap between the screener's confirmed leaders (cable infra, trading houses, pharma) and the fading semi names. TOPIX's value tilt is performing — consistent with the pullback-in-uptrend regime."
  },
  "KOSPI": {
    sectors: "**Industrials** — leading with +5.4% 1M RS and 4 Existing Leaders, 5 confirmed names. This is the defence/infrastructure complex. 50% trend pass in a sharply pulling-back market signals relative resilience.\n**Financials** — second strongest at +5.3% 1M RS with 67% trend pass — best breadth in the market. Mirae Asset Securities is the confirmed anchor.\n**Consumer Staples** — strong 1M RS (+11.4%) but deep negative 3M (-14.6%) — a sharp short-term bounce, not yet a sustainable trend. APR Corp is the sole New Leader.\n**Info Tech** — flat 1M RS (+0.1%) with positive 3M (+9.2%). Samsung Electro-Mechanics is holding but SK Hynix and Hanmi Semiconductor are now Fading Leaders — the semiconductor complex is losing near-term momentum.\n**Everything else is lagging.** Consumer Discretionary (-11.1% 1M RS), Materials (-10.0%), Utilities (-12.1%), Health Care (-1.1%). KOSPI leadership remains narrow — Industrials and Financials only.\n**No sectors are cleanly inflecting** — Consumer Staples shows a positive 1M / negative 3M pattern but the signal is thin (only 4 names).",
    themes: "**Defence/Infrastructure** — remains the dominant theme. Hanwha Systems (#1, Existing Leader), LS Electric (#2, Existing Leader), Hyosung Heavy (#7), Doosan (#9, +33% EPS CONFIRMED), Korea Aerospace (#12, CONFIRMED), LIG Nex1 (+57.3% 1M RS, strongest short-term momentum in the entire KOSPI). EPS confirmation is selective — Doosan and Korea Aerospace confirmed, LS Electric and Hanwha Systems unconfirmed.\n**Financials** — Mirae Asset Securities (#3, +172% EPS CONFIRMED) is the highest-conviction name in the entire KOSPI screen. Kiwoom Securities also CONFIRMED at +99.9% EPS. Korean brokerages are benefiting from the equity market boom.\n**Construction** — Hyundai E&C (#4, +20.8% EPS CONFIRMED) is a strong addition to the infrastructure cluster.\n**Semiconductors fading** — SK Hynix now Fading Leader (still CONFIRMED at +26.7% EPS) and Hanmi Semiconductor also fading (UNCONFIRMED). Samsung Electro-Mechanics holding better. The semi complex is losing relative momentum after the sharp pullback.\n**Consumer/Internet/Biotech — absent.** Naver, Kakao, Samsung Biologics, Celltrion all in the lower half. Zero leadership from the tech/growth complex.",
    synthesis: "KOSPI in sharp pullback (-12.9% 1M) within a strong rally (+31.7% 3M). Only 9 confirmed names in the entire market — very narrow leadership. Highest-conviction: Mirae Asset Securities (+172% EPS, CONFIRMED, strongest fundamental backing of any KOSPI name) and Doosan (+33% EPS, CONFIRMED infrastructure anchor). Key development: the semiconductor complex is fading — SK Hynix and Hanmi Semi both lost New Leader status. Lean toward the defence/infrastructure names that held through the drawdown (Hanwha Systems, LS Electric) and the confirmed financials. Emerging signals in KB Financial, Shinhan Financial, and Woori suggest Korean banks may be the next rotation. Avoid: LG Energy Solution, Naver, Samsung Biologics — all non-participants.",
    daily: "**26 Mar session: KOSPI -0.4% to 5,438.** Pared earlier losses in a volatile session. The index remains under heavy pressure from the global risk-off environment.\n**Semiconductors were the epicentre.** SK Hynix -6% and Samsung Electronics -5% on the TurboQuant selloff — both are now Fading Leaders in our screener. Hanmi Semiconductor also sold off. The Korean semi complex, which had been the dominant theme for months, is rolling over on both price and fundamental concerns. Korea's heavy dependence on Strait of Hormuz energy imports (68% of crude) adds a macro headwind on top.\n**Defence/infrastructure held up.** Hanwha Systems, LS Electric, and the defence cluster showed relative resilience — consistent with their Existing Leader status and the sector's +5.4% 1M RS. LIG Nex1's recent +57% 1M surge continues to stand out.\n**Financial brokerages stable.** Mirae Asset and Kiwoom Securities avoided the worst of the selling, supported by elevated trading volumes from the broader market volatility.\n**Net read:** The session accelerated the leadership rotation from semis to defence/infrastructure. The screener's signal — SK Hynix and Hanmi Semi fading while Hanwha Systems and LS Electric hold — was confirmed in real time by the day's price action."
  },
  "HSI": {
    sectors: "**Energy** — strongest sector at +11.3% 1M RS with 75% trend pass. PetroChina and CNOOC both New Leaders — fresh leadership emerging, not just persistence.\n**Industrials** — second strongest at +6.5% 1M RS, 89% trend pass — best breadth in the index. ZTO Express and Xinyi Glass are the confirmed anchors. CATL (+34.1% 1M RS) emerging.\n**Utilities** — 100% trend pass, +2.4% 1M RS. Power Assets CONFIRMED but the sector is small and defensive.\n**Financials** — positive on both horizons with AIA as New Leader. State banks (ICBC +8.9%, CCB +7.6% 1M RS) continuing their steady grind. CM Bank accelerating (+100 acceleration score).\n**Consumer Discretionary** — mixed signals. New Oriental Education and Li Ning are confirmed leaders at the top of the screen, but the sector average is negative (-0.3% 1M RS). Selective, not broad.\n**Communication Services and Information Technology — lagging** on both horizons. This matters: Tencent, Alibaba, Meituan, Xiaomi, and the entire tech/internet complex remains firmly in the bottom half. Zero confirmed leaders from HK tech.\n**No clean sector inflections** this week.",
    themes: "**Energy** (PetroChina #6, +21.3% 1M RS, CONFIRMED; CNOOC #9, +21.1% 1M RS, CONFIRMED) — both New Leaders with fresh momentum. The commodity pair is the most dynamic leadership in HSI right now.\n**Selective Consumer** — New Oriental Education (#2, CONFIRMED) and Li Ning (#3, CONFIRMED) are the top-ranked consumer names, both with earnings backing. Not a broad consumer theme — isolated stock-picking within a weak sector.\n**Property** — SHK PPT (#4, CONFIRMED, +12.5% EPS) remains the lone confirmed property leader, but CK Asset is now Fading.\n**Insurance** — AIA (New Leader, #8) newly promoted with positive RS across all horizons.\n**State Banks** — ICBC, CCB, Bank of China all with positive 1M RS and trend pass. Steady but not accelerating.\n**Geely** (+35.7% 1M RS) is the single strongest momentum name in the entire HSI — not yet a leader by composite but the short-term surge is dramatic.\n**Tech/Internet** — Tencent, Alibaba, Meituan, Xiaomi all bottom-half. JD.com and BYD both Emerging, suggesting the earliest green shoots of potential rotation, but far from confirmed.",
    synthesis: "HSI in intermediate downtrend below 200DMA — weakest major market in our coverage. Only 10 confirmed leaders. The leadership that exists mixes defensive (energy, utilities, state banks) with selective consumer picks (New Oriental, Li Ning). Key development: PetroChina and CNOOC both graduated to New Leaders — energy leadership is freshening, not just persisting. Geely's +35.7% 1M RS surge is the most dramatic short-term move in the index but lacks composite confirmation. Emerging signals from JD.com, BYD, and CATL hint at a possible tech/EV rotation but these are very early. Capital allocation should still favor other markets — US, Japan, and Korea all have stronger regimes and deeper confirmed leader pools.",
    daily: "**26 Mar session: Hang Seng +0.4% to 24,952.** A modest rebound after the prior session's selloff, but well within the intermediate downtrend.\n**Energy dominated again.** PetroChina and CNOOC — both New Leaders — continued to benefit from the Brent surge past $108. The energy complex remains the strongest thematic in Hong Kong and was the primary driver of the index's positive session.\n**Tech/internet still selling.** The overnight META and GOOGL selloff on the social media addiction ruling carried through to HK-listed tech. Tencent, Alibaba, and Meituan remain firmly bottom-half in the screener. Kuaishou was notably weak. The China-U.S. trade tension (China upping the ante on tariffs) adds another headwind to the internet complex.\n**EV names mixed.** Geely continued its surge, consistent with its +35.7% 1M RS. BYD and Li Auto were less decisive — the EV cluster remains an Emerging signal, not confirmed.\n**State banks steady.** ICBC and CCB continue their slow grind higher with positive RS. CM Bank's +100 acceleration score stands out as the strongest early signal in HSI financials.\n**Net read:** The session reinforced the existing regime — energy leadership, tech weakness, defensive posture. No change to the screener's signal structure."
  },
  "CSI300": {
    sectors: "**Energy** — strongest sector at +12.3% 1M RS with 82% trend pass. COSCO Shipping and China Merchants Energy are confirmed Existing Leaders. Persistent commodity strength.\n**Utilities** — second strongest at +11.9% 1M RS, 77% trend pass. CGN Power is a New Leader. Multiple Emerging signals (Yangtze Power, Huaneng, Huadian, GD Power) suggest the sector is broadening.\n**Financials — inflecting.** 1M RS just turned positive (+1.1%) while 3M remains negative (-4.7%). Twelve Sector Rotation signals — the most concentrated rotation burst of any CSI 300 sector, dominated by state banks (CCB, Bank of China, Bank of Shanghai, Huaxia Bank) and brokerages. Four New Leaders emerging.\n**Consumer Staples** — positive 1M RS (+2.1%) but deep negative EPS (-18.4%). Price-led without fundamental support.\n**Industrials** — deepest sector (56 names) with the most Existing Leaders (10) but pulling back on 1M (-1.0%). Strong 3M RS (+6.2%) — near-term weakness in medium-term uptrend.\n**Information Technology and Materials** — both negative on 1M RS despite having the most confirmed names. Both pulling back within medium-term uptrends.\n**Consumer Discretionary, Communication Services, Real Estate** — all lagging on both horizons. Real Estate is the weakest sector (-9.5% 1M RS).",
    themes: "**Electrical Infrastructure** — Sieyuan Electric (#4, +23.8% EPS CONFIRMED), Dongfang Electric (#2), TBEA (#14), Zhongtian Tech (#13), Zhejiang Chint (#15), Ningbo Deye (#8). This is the Chinese expression of the same global electrification theme leading the US and Japan. Deepest and most confirmed cluster in the CSI 300.\n**Specialty Materials** — Qinghai Salt Lake (#1, +91.9% EPS CONFIRMED — highest-ranked name in the entire CSI 300), Ganfeng Lithium (#12, +42.2% EPS CONFIRMED), Zhejiang NHU (#20), Ningxia Baofeng (#9). Lithium and potash producers benefiting from cyclical recovery. EPS backing is strong.\n**Shipping/Energy** — COSCO Shipping (#5, +27.3% EPS CONFIRMED), China Merchants Energy (#3), CNOOC, China Coal. All Existing Leaders with trend pass.\n**Financials Rotation** — 12 Sector Rotation signals led by state banks and brokerages. Not yet leaders but the broadest emerging theme. CCB and Bank of China are the largest names in the rotation. New Leaders Bank of Hangzhou and Bank of Jiangsu are the earliest confirmed names.\n**PCB/Connectivity** — WUS Printed Circuit (#7, +16% EPS CONFIRMED), Eoptolink (#New Leader, +3.1% EPS), Suzhou Dongshan (New Leader). The data infrastructure supply chain theme is also active in China.",
    synthesis: "CSI 300 in intermediate downtrend (negative on all horizons) but with 26 confirmed leaders — a deeper pool than either KOSPI or HSI. Highest-conviction positions: Qinghai Salt Lake (#1, +92% EPS CONFIRMED), Sieyuan Electric (#4, +24% EPS CONFIRMED), and COSCO Shipping (#5, +27% EPS CONFIRMED) — all Existing Leaders that held through the downturn. The electrical infrastructure cluster is the strongest thematic parallel to global leadership in the US and Japan. Key developing theme: Financials rotation — 12 Sector Rotation signals from state banks suggest the same pattern emerging in US Financials is also developing in China. Pre-breakout: ICBC (Emerging, +91.2 acceleration), Sungrow Power (Emerging, +90.2 acceleration), and EVE Energy (Emerging, +48.9% EPS — the strongest combined early signal).",
    daily: "**26 Mar session: CSI 300 +0.6% to 4,503.** Modest bounce — China markets were relatively insulated from the worst of the global selloff.\n**Memory/semiconductor names hit.** GigaDevice -5.9%, Montage Technology -3.5% on the Google TurboQuant spillover. Chinese semi names in our screener's Info Tech cluster (already -5.6% 1M RS) took another hit. The fading leaders (Range Intelligence, Shennan Circuit, Montage) all extended losses.\n**Energy and shipping strong.** COSCO Shipping and China Merchants Energy — both Existing Leaders in the screener — rallied as Brent crude surged. The oil price spike is a double-edged sword for China (net importer), but direct energy plays are outperforming.\n**State banks ticked higher.** ICBC, CCB, and Bank of China all gained modestly, consistent with the Financials rotation signal (12 names flagged as Sector Rotation). Iran allowing select Chinese vessels through the Strait of Hormuz may have provided a marginal positive for sentiment.\n**Electrical infrastructure held.** Sieyuan Electric, TBEA, Zhongtian Tech — the electrification cluster — were stable despite broader market volatility. Physical infrastructure demand is decoupled from the AI efficiency narrative.\n**Net read:** Session confirmed the screener's bifurcation: energy/electrical infrastructure/banks are the leadership axis, while tech/semi and consumer discretionary remain under pressure. China's partial diplomatic channel with Iran (vessel exceptions) is a unique factor not present in other markets."
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
    ${cmt.daily ? '<div class="p-3 bg-amber-50 rounded-lg border border-amber-200"><div class="text-xs uppercase tracking-wide text-amber-600 font-semibold mb-1">Price Action — 26 Mar</div><div class="text-sm text-amber-900 leading-relaxed">' + boldTextHtml(cmt.daily) + '</div></div>' : ''}
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
