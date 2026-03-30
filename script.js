// ============================================================================
// RELATIVE STRENGTH SCREENER — Static Site Build
// Vanilla JS, no React, no build step
// ============================================================================

// --- Constants ---------------------------------------------------------------

const MARKET_LABELS = {"R1000":"Russell 1000","TOPIX":"TOPIX","KOSPI":"KOSPI","HSI":"Hang Seng","CSI300":"CSI 300"};

const COMMENTARY = {
  "R1000": {
    sectors: "**Energy** \u2014 dominant sector. +21.5% avg 1M RS, 100% trend pass, +12.5% avg EPS revision. Broad, persistent outperformance across all horizons with the strongest fundamental confirmation of any sector. Only sector with perfect trend participation.\n**Utilities** \u2014 second strongest at +3.2% 1M RS, 88% trend pass. Defensive but persistent. ETR is a New Leader. EPS is flat (-0.6%) so the bid is positioning-driven.\n**Info Tech** \u2014 third on 1M RS (+2.5%) but the deepest leader pool: 13 Existing + 6 New Leaders, 18 confirmed. Best combined price + EPS profile (+8.4% avg EPS). Trend pass is only 25% reflecting the broad drawdown, but leaders are holding.\n**Communication Services \u2014 inflecting.** 1M RS just turned positive (+1.1%) while 3M remains negative (-2.0%). NYT (#12 CONFIRMED), TIGO (#3), ASTS (#21), and EA (#35) all New Leaders. Sector Rotation signals active (4 names).\n**Financials** \u2014 near-flat 1M RS (-0.2%) with 3 New Leaders and 5 confirmed. Largest sector (103 names) but leadership is thin. MS, JPM, and SCHW are all Accelerating signals.\n**Industrials** \u2014 largest sector (111 names) with the most Existing Leaders (8) and most Fading Leaders (13). Strong 3M RS (+9.7%) but negative 1M (-3.2%) signals near-term weakness within a medium-term uptrend. The power/infrastructure cluster (VRT, GEV, FIX, MTZ, PWR) continues to dominate.\n**Consumer Discretionary and Consumer Staples** \u2014 both lagging on 1M RS. Discretionary at -3.5% despite strong individual leaders (FIVE #1, ROST #6, BURL #17). Staples slightly better (-1.5%) with CASY and TGT confirmed.",
    themes: "**Power/Electrification** (VRT #2, GEV #5, FIX #7, PWR #8, MTZ #4, NVT #15, EME #19, BWXT #29) \u2014 deepest cluster in the market. All with trend pass. VRT (+16.2% EPS CONFIRMED), FIX (+19.4% EPS CONFIRMED), MTZ (#4 New Leader, +5.7% EPS CONFIRMED), PWR (+6.8% EPS CONFIRMED) are the confirmed core. GEV (+7.3% EPS CONFIRMED) holds #5. Eight names in the top 30 \u2014 this cluster continues to lead through the drawdown.\n**Optical/Data Infrastructure** (CIEN #13, WDC #9, LITE #10, SNDK #22, UI #14, JBL #18, DELL #41, COHR #38, FLEX #28) \u2014 massive cluster with CIEN surging to #13 as New Leader (+22.6% 1M RS, +15.4% EPS CONFIRMED). WDC and LITE are Existing Leaders with strong EPS (+15.3%, +33.6%). SNDK at +205% EPS is the most extreme earnings inflection in the entire R1000. DELL emerging as New Leader (#41, +23.4% 1M RS, +12.7% EPS CONFIRMED).\n**Consumer/Off-Price Retail** (FIVE #1, ROST #6, BURL #17, CASY #20, TGT #55) \u2014 FIVE is #1 in the entire R1000 with +26.8% EPS CONFIRMED and trend pass. All New Leaders. The domestic consumer is strengthening.\n**Materials Recovery** (ALB #23, CF #52, APA #51) \u2014 ALB (Albemarle) at +539.8% EPS is the single most extreme earnings revision in the market. CF (+39% EPS) and APA (+41.1% EPS) both New Leaders CONFIRMED. Commodity cyclical recovery with massive fundamental backing.\n**Healthcare Bifurcation** \u2014 MRNA (#39 Existing Leader CONFIRMED, +4.7% EPS), JAZZ (#47 CONFIRMED +8.9%), RPRX (#11 New Leader UNCONFIRMED). Ten leaders total but only 4 confirmed \u2014 the sector leads on price more than fundamentals.",
    synthesis: "Market in intermediate downtrend below 200DMA but leadership structure remains deep \u2014 71 confirmed leaders. Highest-conviction positions: the power/electrification cluster (VRT, FIX, MTZ, GEV, PWR \u2014 all CONFIRMED with trend pass through the drawdown) and FIVE (#1, +26.8% EPS CONFIRMED). The optical/data infrastructure cluster (CIEN, WDC, LITE, SNDK, DELL) provides the second axis of confirmed leadership with extreme EPS revisions. Biggest developing theme: Communication Services inflecting with 4 Sector Rotation signals \u2014 NYT (#12 CONFIRMED) is the lead name. Materials cyclical recovery (ALB +540% EPS, CF +39% EPS) is a new development. Pre-breakout watch: FANG (Emerging, +99.7 acceleration, +17.6% EPS), EOG (Emerging, +88.7 acceleration), TWLO (Accelerating, +97.9 acceleration), and NET (#171 Emerging, +25.3% 1M RS).",
    daily: null
  },
  "TOPIX": {
    sectors: "**Energy** \u2014 strongest sector at +20.0% 1M RS, 100% trend pass. Small cluster (3 names) but INPEX (#13 New Leader, +40.1% 1M RS, +10.4% EPS CONFIRMED) is the standout. Persistent outperformance across all horizons.\n**Utilities** \u2014 second at +9.5% 1M RS, 100% trend pass. Osaka Gas (9532 JT) and Tokyo Gas (9531 JT) both holding but neither confirmed. Defensive positioning.\n**Communication Services \u2014 inflecting.** 1M RS positive (+5.9%) while 3M deeply negative (-13.2%). Classic rotation signal. KDDI (9433 JT) and NTT (9432 JT) both Emerging. SoftBank (9434 JT) Accelerating.\n**Health Care** \u2014 positive 1M RS (+5.7%) with strong +4.2% avg EPS. Astellas (4503 JT, #12 New Leader, +43.1% EPS CONFIRMED) is the lead name. Otsuka (4578 JT, +8.7% EPS CONFIRMED) also strong at #15.\n**Consumer Staples \u2014 inflecting.** 1M RS positive (+2.2%) while 3M negative (-1.7%). Japan Tobacco (2914 JT, #16, +84.4 acceleration) is the Sector Rotation lead name.\n**Industrials** \u2014 deepest sector (33 names) with 5 leaders (3 Existing, 2 New). The cable/power infrastructure cluster dominates: Fujikura #1, Furukawa Electric #2, Sumitomo Electric #7. Trading houses Mitsubishi Corp (#4) and Mitsui & Co (#6) are New Leaders.\n**Information Technology** \u2014 weakest trend pass (11%) despite having the strongest individual names. Kioxia (#3 Existing Leader, +84.4% EPS CONFIRMED) anchors but Lasertec (#5 New Leader) is the fresh addition. DISCO and IBIDEN are Fading Leaders.",
    themes: "**Cable/Power Infrastructure** \u2014 Fujikura (#1, MS 93.6, +6.8% EPS CONFIRMED), Furukawa Electric (#2, +34.2% EPS CONFIRMED), Sumitomo Electric (#7, +14.5% EPS CONFIRMED). Three of the top seven names are cable infrastructure. All CONFIRMED. This is the Japanese expression of the global electrification/data center theme. Highest-conviction cluster in TOPIX.\n**Trading Houses** \u2014 Mitsubishi Corp (#4, +17.8% 1M RS, New Leader UNCONFIRMED), Mitsui & Co (#6, +17.3% 1M RS, New Leader UNCONFIRMED), Marubeni (#11, Existing Leader UNCONFIRMED). All three freshly promoted to New/Existing Leader status with trend pass. Price-led without EPS confirmation so far \u2014 the trading house rally is momentum-driven.\n**Specialty Materials** \u2014 JX Advanced Metals (#10, +11.7% EPS CONFIRMED), Resonac (#8, +5.6% EPS), Mitsui Kinzoku (#14, +49.7% EPS CONFIRMED), Sumitomo Metal Mining (#20 Fading, +56.9% EPS CONFIRMED). Semiconductor materials chain with strong EPS backing.\n**Kioxia** (#3, MS 91.7, +84.4% EPS CONFIRMED) \u2014 strongest single EPS confirmation in the TOPIX top 5. NAND flash recovery anchor.\n**Pharma** \u2014 Astellas (#12, +43.1% EPS CONFIRMED) and Otsuka (#15, +8.7% EPS CONFIRMED) lead the Health Care inflection. Fresh cluster emergence.\n**Semi Equipment splitting** \u2014 Lasertec (#5 New Leader CONFIRMED) rising while DISCO (#23 Fading), IBIDEN (#21 Fading), and Tokyo Electron (#31 Fading CONFIRMED) all losing near-term momentum. Stock selection critical in Japanese semis.",
    synthesis: "TOPIX in sharp pullback (-11.0% 1M) within an uptrend (+27.1% 1Y). Only 18 confirmed leaders \u2014 narrow but high-quality. Cable infrastructure remains the dominant cluster: Fujikura/Furukawa/Sumitomo Electric hold the top ranks, all CONFIRMED. Key new development: trading houses (Mitsubishi Corp, Mitsui & Co) both promoted to New Leaders but still UNCONFIRMED \u2014 watch for EPS revisions to validate. Kioxia anchors the semi materials theme at +84.4% EPS. Freshest rotations: Comm Services inflecting (KDDI and NTT Emerging), Health Care (Astellas +43% EPS CONFIRMED), and Consumer Staples (Japan Tobacco leading Sector Rotation). Pre-breakout: INPEX (#13, +40.1% 1M RS \u2014 the single strongest short-term momentum among leaders), SoftBank (Accelerating into Comm Services inflection), and Mitsui OSK Lines (9104 JT, +26.8% 1M RS CONFIRMED).",
    daily: null
  },
  "KOSPI": {
    sectors: "**Consumer Staples** \u2014 highest 1M RS (+12.0%) but only 1 name (KT&G). Positive 1M / deeply negative 3M (-14.1%) is a classic inflection signal, but the sample is too thin for high confidence.\n**Financials** \u2014 second at +5.4% 1M RS with the best trend pass outside Consumer Staples (22%). Mirae Asset Securities (#3 Existing Leader, +63.8% EPS CONFIRMED) is the highest-conviction name in the entire KOSPI. Shinhan Financial and KB Financial are both Accelerating.\n**Industrials** \u2014 the dominant sector with 5 leaders and 3 confirmed. +2.9% 1M RS and 33% trend pass \u2014 best breadth in the market. LS Electric (#1 New Leader), Hanwha Systems (#2 New Leader), Hyundai E&C (#4 Existing Leader), and Hyosung Heavy (#5 Existing Leader CONFIRMED) are the core.\n**Energy \u2014 inflecting.** 1M RS positive (+2.3%) with 3M negative (-3.5%). HD Hyundai (#13 Fading Leader, +15.4% EPS CONFIRMED) is the lead name. Both names are still below 50DMA.\n**Information Technology** \u2014 flat 1M RS (+0.7%) with strong 3M (+34.8%). Samsung Electro-Mechanics (#9 CONFIRMED) is holding but Hanmi Semiconductor (#8) is now a Fading Leader. SK Hynix (#16) is mid-pack and Accelerating (+86.3 acceleration).\n**Everything else is lagging.** Consumer Discretionary (-10.7%), Materials (-6.4%), Utilities (-11.9%). KOSPI leadership remains narrow \u2014 Industrials and Financials only.",
    themes: "**Defence/Infrastructure** \u2014 LS Electric (#1, MS 90.9, +14.8% 1M RS, New Leader), Hanwha Systems (#2, MS 90.6, +19.9% 1M RS, New Leader UNCONFIRMED), Hyundai E&C (#4, Existing Leader UNCONFIRMED), Doosan (#6, +10.9% EPS CONFIRMED), Hyosung Heavy (#5, +8.9% EPS CONFIRMED), Korea Aerospace (#7, +1.4% EPS UNCONFIRMED). EPS confirmation is selective \u2014 Doosan and Hyosung Heavy confirmed; LS Electric and Hanwha Systems lack confirmation.\n**Financials** \u2014 Mirae Asset Securities (#3, +63.8% EPS CONFIRMED) has the highest-conviction fundamental backing of any KOSPI name. Samsung Life (#12) also strong. Shinhan Financial (#25, Accelerating +98.0 acceleration) and KB Financial (#26, Accelerating +58.8) are the strongest early signals in the market.\n**Semi Complex Fading** \u2014 Hanmi Semiconductor (#8, Fading Leader UNCONFIRMED, -3.8% 1M RS) and SK Square (#11, Fading Leader, +170.8% EPS CONFIRMED but -4.9% 1M RS). SK Hynix (#16) not yet a leader but its +86.3 acceleration score is the highest in the KOSPI \u2014 worth monitoring.\n**Shipping** \u2014 Hanwha Aerospace (#17, +24.6% 1M RS, +100.0 acceleration) is the single most accelerating name in the entire KOSPI but is not yet a leader by composite. HMM and HD Korea Shipbuilding are mid-pack.",
    synthesis: "KOSPI in sharp pullback (-16.8% 1M) within a strong rally (+103.1% 1Y). Only 6 confirmed names \u2014 the narrowest leadership of any market. Highest-conviction: Mirae Asset Securities (#3, +63.8% EPS CONFIRMED, strongest fundamental backing in KOSPI) and Doosan (#6, +10.9% EPS CONFIRMED). Key development: LS Electric and Hanwha Systems are both New Leaders but still lack EPS confirmation \u2014 the defence/infrastructure thesis is price-led. The semiconductor complex is losing relative momentum: Hanmi Semi fading, SK Hynix mid-pack. Lean toward the confirmed industrials (Doosan, Hyosung Heavy) and the lone confirmed financial (Mirae Asset). Emerging signals in Shinhan and KB Financial (+98.0 and +58.8 acceleration) suggest Korean banks may be the next rotation. Avoid: LG Energy Solution, Naver, Kakao \u2014 all non-participants with negative RS.",
    daily: null
  },
  "HSI": {
    sectors: "**Energy** \u2014 strongest sector at +13.6% 1M RS with 75% trend pass. PetroChina (#4) and CNOOC (#7) are both Existing Leaders CONFIRMED. China Shenhua (#20) also strong.\n**Industrials** \u2014 second at +5.9% 1M RS, 75% trend pass \u2014 best breadth in the index. ZTO Express (#14) and Orient Overseas (#18 CONFIRMED +62.8% EPS) are the standouts. CATL (#21, +35.3% 1M RS) Emerging.\n**Utilities** \u2014 100% trend pass, +3.6% 1M RS. Power Assets (#12) and CLP Holdings (#17) anchoring. CKI Holdings (#19) is a Fading Leader. Defensive but persistent.\n**Financials** \u2014 positive 1M RS (+0.5%) with AIA (#3, New Leader) and ICBC (#6, New Leader). State banks (CCB #11, Bank of China #15) with positive 1M RS. CM Bank (3968 HK) further back but CCB's +81.1 acceleration is notable.\n**Consumer Staples** \u2014 WH Group (#1, +9.5% 1M RS, New Leader CONFIRMED) is the top-ranked name in the entire HSI. Nongfu Spring further back.\n**Consumer Discretionary** \u2014 mixed. Geely (#8, New Leader, +35.4% 1M RS) is the strongest short-term momentum in the index but UNCONFIRMED. Sector average is negative (-1.0% 1M RS).\n**Communication Services and Information Technology** \u2014 both lagging. CommServ at -1.7%, IT at -5.4%. Tencent, Alibaba, Meituan, Xiaomi \u2014 the entire tech/internet complex remains bottom-half. Zero confirmed leaders from HK tech.",
    themes: "**Energy** (PetroChina #4, +24.9% 1M RS CONFIRMED; CNOOC #7, +24.9% 1M RS CONFIRMED; China Shenhua #20, +13.2% 1M RS) \u2014 the most dynamic confirmed leadership in HSI. Both PetroChina and CNOOC hold Existing Leader status with earnings backing.\n**WH Group** (#1, MS 93.1, +9.5% 1M RS, +3.3% EPS, New Leader CONFIRMED) \u2014 highest-ranked name in the entire HSI. Consumer staples leader with trend pass. Isolated consumer strength in a weak consumer landscape.\n**China Hongqiao** (#2, MS 86.7, +11.5% 1M RS, +13.9% EPS, New Leader CONFIRMED) \u2014 aluminium producer newly promoted. Materials leadership with strong fundamental backing.\n**Insurance/Banks** \u2014 AIA (#3, New Leader, +6.6% 1M RS) and ICBC (#6, New Leader, +8.8% 1M RS) newly promoted. State banks (CCB, Bank of China) with positive RS and trend pass but not yet leaders.\n**Geely** (#8, +35.4% 1M RS) is the single strongest momentum name in the entire HSI \u2014 New Leader but UNCONFIRMED with -3.6% EPS. Price-led without fundamental support.\n**Tech/Internet absent.** Tencent, Alibaba, Meituan, Xiaomi, Baidu, NetEase all bottom-half. JD.com (#40 Emerging, +98.6 acceleration) and BYD (#22 Emerging) show the earliest green shoots but are far from confirmed.\n**Property weakening.** SHK PPT (#5, Existing Leader) but below 50DMA and no trend pass. CK Asset (#16 Fading Leader CONFIRMED). The property cluster is losing momentum.",
    synthesis: "HSI in intermediate downtrend below 200DMA \u2014 weakest major market in our coverage. Only 8 confirmed leaders. Leadership mixes defensive (energy, consumer staples, utilities) with selective financials (AIA, ICBC newly promoted). WH Group (#1 CONFIRMED) and China Hongqiao (#2 CONFIRMED) are the freshest New Leaders with earnings backing. PetroChina and CNOOC continue to anchor the energy axis. Geely's +35.4% 1M RS is the most dramatic short-term move but lacks EPS confirmation. Emerging signals from JD.com (+98.6 acceleration), BYD, and CATL hint at tech/EV rotation but these are very early. Capital allocation should still favour other markets \u2014 US, Japan, and Korea all have stronger regimes and deeper confirmed leader pools.",
    daily: null
  },
  "CSI300": {
    sectors: "**Energy** \u2014 strongest sector at +16.3% 1M RS with 89% trend pass. COSCO Shipping (601872 CH, #6) and Zhongyuan Oilfield (600026 CH, #7) are both Existing Leaders CONFIRMED. Five confirmed names in the sector \u2014 the deepest energy confirmation of any market.\n**Utilities** \u2014 second at +13.2% 1M RS, 83% trend pass. CGN Power (003816 CH, #22 Existing Leader) anchors. Multiple Emerging signals (ICBC, Sungrow Power) suggest broadening.\n**Consumer Staples \u2014 inflecting.** 1M RS positive (+3.9%) while 3M negative (-1.6%). Price-led with weak EPS (-4.3%). Henan Shuanghui (#32, Sector Rotation) and Foshan Haitian (#47, Sector Rotation) are the lead names.\n**Financials \u2014 inflecting.** 1M RS positive (+2.7%) while 3M negative (-3.2%). Eleven Sector Rotation signals \u2014 the most concentrated rotation burst of any CSI 300 sector, led by CNPC Capital (000617 CH, New Leader), Bank of Hangzhou (600926 CH, New Leader), and CITIC Securities (601998 CH, CONFIRMED). State banks broadly participating.\n**Industrials** \u2014 deepest sector (44 names) with 8 Existing Leaders but near-flat 1M RS (-0.3%). Strong 3M RS (+8.4%). Sieyuan Electric (#3 CONFIRMED), Dongfang Electric (#2), and multiple electrical infrastructure names dominate.\n**Information Technology and Materials** \u2014 IT negative on 1M (-5.1%) with 3 Fading Leaders. Materials also negative (-4.2%) but has the most confirmed names (8) from strong 3M RS (+13.2%). Qinghai Salt Lake (#1 CONFIRMED) leads.\n**Consumer Discretionary, Communication Services, Real Estate** \u2014 all lagging. Real Estate weakest (-8.3% 1M RS).",
    themes: "**Electrical Infrastructure** \u2014 Sieyuan Electric (#3, +6.3% EPS CONFIRMED), Dongfang Electric (#2, Existing Leader UNCONFIRMED), China XD Electric (#14, Existing Leader), Zhejiang Chint (#16, +98.2 acceleration), Zhongtian Tech (#8, +30.7% 1M RS). This is the Chinese expression of the same global electrification theme leading the US and Japan. Deepest cluster in the CSI 300.\n**Specialty Materials** \u2014 Qinghai Salt Lake (#1, MS 91.8, +15.7% EPS CONFIRMED \u2014 highest-ranked name in the entire CSI 300), Ganfeng Lithium (#11, +24.7% EPS CONFIRMED), Zhejiang NHU (#19, Existing Leader), China Molybdenum (600176 CH, #15, +19.6% EPS CONFIRMED), Nanji E-Commerce (600989 CH, #10, +6.5% EPS CONFIRMED). Lithium, potash, and specialty chemicals with strong EPS backing.\n**Shipping/Energy** \u2014 COSCO Shipping (#6, +13.9% EPS CONFIRMED), Zhongyuan Oilfield (#7, +33.3% EPS CONFIRMED), China Coal (601898 CH, +4.0% EPS CONFIRMED at #36), CNOOC (600938 CH, +9.0% EPS). All Existing Leaders with trend pass.\n**Financials Rotation** \u2014 11 Sector Rotation signals led by CNPC Capital (New Leader), Bank of Hangzhou (New Leader), CITIC Securities (CONFIRMED). The broadest emerging theme. State banks (ICBC Emerging at #75, Bank of China at #62 Emerging) are in the earliest stages.\n**PCB/Connectivity** \u2014 WUS Printed Circuit (#5, +2.8% EPS CONFIRMED), Eoptolink (#21, New Leader +1.4% EPS CONFIRMED), Suzhou Dongshan (#4, +25.3% 1M RS Existing Leader UNCONFIRMED). The data infrastructure supply chain is also active in China.",
    synthesis: "CSI 300 in intermediate downtrend (negative on all horizons) but with 22 confirmed leaders \u2014 deeper than either KOSPI or HSI. Highest-conviction positions: Qinghai Salt Lake (#1, +15.7% EPS CONFIRMED), Sieyuan Electric (#3, +6.3% EPS CONFIRMED), COSCO Shipping (#6, +13.9% EPS CONFIRMED), and Ganfeng Lithium (#11, +24.7% EPS CONFIRMED). The electrical infrastructure cluster is the strongest thematic parallel to global leadership in the US and Japan. Key developing theme: Financials rotation \u2014 11 Sector Rotation signals from state banks and brokerages suggest the same pattern emerging in US Communication Services is also developing in China. Consumer Staples also inflecting (Henan Shuanghui, Foshan Haitian). Pre-breakout: BYD (Emerging, +91.8 acceleration, +23.2% 1M RS), CATL (#46 CONFIRMED, +27.0% 1M RS), and Sungrow Power (#84 Emerging, +18.3% 1M RS).",
    daily: null
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
    ${cmt.daily ? '<div class="p-3 bg-amber-50 rounded-lg border border-amber-200"><div class="text-xs uppercase tracking-wide text-amber-600 font-semibold mb-1">Price Action — 30 Mar</div><div class="text-sm text-amber-900 leading-relaxed">' + boldTextHtml(cmt.daily) + '</div></div>' : ''}
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
