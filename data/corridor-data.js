// CorridorWatch — AJ Investment Research Corridor Method Data
// Last updated: 2026-03-14 (from @alojoh U.S. Tech Coverage Update)

const CORRIDOR_DATA = {
  lastUpdated: "2026-03-14",
  source: "@alojoh — AJ Investment Research (subscriber feed)",

  // Forward EPS estimates (NTM, AJ-aligned)
  forwardEPS: {
    NVDA:  4.40,
    MSFT:  13.80,
    AMZN:  6.80,
    META:  26.00,
    GOOGL: 9.20,
    AAPL:  7.20,
    TSLA:  2.80,
    PLTR:  0.52,
    ORCL:  7.80,
    AMD:   4.80,
    TSMC:  9.50,
    AVGO:  6.20,
    MU:    9.50,
    RIVN:  -2.50,
    NIO:   -0.80,
    XPEV:  -0.20,
    RKLB:  -0.15,
    "1810.HK": null,
  },

  // Rankings as of Mar 14, 2026
  rankings: {
    entry1Y: {
      label: "Best Entry (1-Year Corridor)",
      color: "#2ea043",
      best:  ["PLTR", "MSFT", "AMZN", "NVDA", "META"],
      worst: ["GOOGL", "TSLA", "TSMC", "AVGO", "AAPL"],
    },
    entry90D: {
      label: "Best Entry (90-Day Corridor)",
      color: "#388bfd",
      best:  ["META", "NVDA", "AMZN", "AMD", "GOOGL"],
      worst: ["PLTR", "ORCL", "TSMC", "AVGO", "TSLA"],
    },
    ltUpside: {
      label: "Long-Term Upside",
      color: "#a371f7",
      best:  ["PLTR", "TSLA", "AMD", "NVDA", "ORCL"],
      worst: ["GOOGL", "AAPL", "TSMC", "AVGO", "META"],
    },
    peg: {
      label: "PEG — Cheapest Growth",
      color: "#d29922",
      best:  ["ORCL", "AMD", "MU", "MSFT", "AMZN"],
      worst: ["TSLA", "AAPL", "GOOGL", "PLTR", "AMZN"],
    },
  },

  // AJ's known positions
  positions: [
    { ticker: "NVDA",     status: "long",    note: "Conviction buy. Added aggressively on dips. #1-2 pick on both corridors.",                    updated: "Mar 9" },
    { ticker: "META",     status: "long",    note: "Re-entered at $626, added at $616. #1 on 90D corridor.",                                     updated: "Mar 13" },
    { ticker: "PLTR",     status: "long",    note: "#1 on 1Y corridor 4 consecutive weeks. Top long-term upside pick.",                           updated: "Mar 14" },
    { ticker: "MSFT",     status: "long",    note: "#2 on 1Y corridor. Volume recovering after weakness.",                                        updated: "Mar 14" },
    { ticker: "AMZN",     status: "long",    note: "#3 on both corridors. +8% since flagged as top pick.",                                        updated: "Mar 7" },
    { ticker: "ORCL",     status: "watch",   note: "Trimmed at $166-170 post-earnings. Looking to re-accumulate at $15X. Strong long-term thesis.",updated: "Mar 11" },
    { ticker: "XPEV",     status: "long",    note: "China autonomy play. AJ testing XPEG system personally. Deep dive post-earnings (~Mar 26).",   updated: "Mar 12" },
    { ticker: "1810.HK",  status: "long",    note: "Buy call at HKD 33 ahead of Q4 earnings Mar 24. Expects significant beat vs consensus.",      updated: "Mar 12" },
    { ticker: "RIVN",     status: "long",    note: "Averaged down to low $15X cost basis. Worst performer but in the green. Volatile.",            updated: "Mar 8" },
    { ticker: "AMD",      status: "watch",   note: "Cheapest on PEG. CEO guidance track record inconsistent. #2 LT upside.",                      updated: "Mar 14" },
    { ticker: "TSLA",     status: "watch",   note: "Waiting for 'epic reentry'. SpaceX IPO overhang key risk. Sells as news event expected.",      updated: "Mar 14" },
    { ticker: "NIO",      status: "short",   note: "Short thesis intact. ES8 is only thing keeping them alive. Monitor for hype rally short.",     updated: "Mar 11" },
    { ticker: "TSMC",     status: "avoid",   note: "Least attractive on both corridors. Overheated post-rally.",                                   updated: "Mar 14" },
    { ticker: "RKLB",     status: "watch",   note: "Accumulate ONLY below lower corridor band. $40B valuation has no fundamental support yet.",    updated: "Mar 11" },
    { ticker: "MU",       status: "watch",   note: "Sold out through 2027. Memory shortage play. Cheap on forward earnings.",                      updated: "Mar 14" },
    { ticker: "AVGO",     status: "watch",   note: "AJ beat WS on Q1 EPS ($2.07 vs $2.05 actual). Least attractive on 90D.",                      updated: "Mar 4" },
    { ticker: "AAPL",     status: "avoid",   note: "Limited growth at premium. 2nd least attractive long-term. Deep dive incoming.",               updated: "Mar 14" },
    { ticker: "GOOGL",    status: "watch",   note: "Moved to top 3 buys (90D) after pullback to $298. Was least attractive for 3+ weeks.",         updated: "Mar 11" },
  ],

  // Ticker metadata
  tickers: {
    NVDA:     { name: "NVIDIA",          exchange: "NASDAQ", yf: "NVDA" },
    MSFT:     { name: "Microsoft",       exchange: "NASDAQ", yf: "MSFT" },
    AMZN:     { name: "Amazon",          exchange: "NASDAQ", yf: "AMZN" },
    META:     { name: "Meta",            exchange: "NASDAQ", yf: "META" },
    GOOGL:    { name: "Alphabet",        exchange: "NASDAQ", yf: "GOOGL" },
    AAPL:     { name: "Apple",           exchange: "NASDAQ", yf: "AAPL" },
    TSLA:     { name: "Tesla",           exchange: "NASDAQ", yf: "TSLA" },
    PLTR:     { name: "Palantir",        exchange: "NYSE",   yf: "PLTR" },
    ORCL:     { name: "Oracle",          exchange: "NYSE",   yf: "ORCL" },
    AMD:      { name: "AMD",             exchange: "NASDAQ", yf: "AMD" },
    TSMC:     { name: "TSMC",            exchange: "NYSE",   yf: "TSM" },
    AVGO:     { name: "Broadcom",        exchange: "NASDAQ", yf: "AVGO" },
    MU:       { name: "Micron",          exchange: "NASDAQ", yf: "MU" },
    RIVN:     { name: "Rivian",          exchange: "NASDAQ", yf: "RIVN" },
    NIO:      { name: "NIO",             exchange: "NYSE",   yf: "NIO" },
    XPEV:     { name: "XPeng",           exchange: "NYSE",   yf: "XPEV" },
    RKLB:     { name: "Rocket Lab",      exchange: "NASDAQ", yf: "RKLB" },
    "1810.HK":{ name: "Xiaomi",          exchange: "HKEX",   yf: "1810.HK" },
  },
};
