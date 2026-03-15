# CorridorWatch 📊

> AJ Investment Research — Corridor Method Dashboard

Live at: **https://appforgelabs.github.io/CorridorWatch**

## What is this?

CorridorWatch replicates the **Corridor Method** used by AJ Investment Research (@alojoh) to track 19 stocks across his US tech + EV coverage universe.

## How the Corridor Method works

For each stock, the method:
1. Fetches 1 year of daily close prices (Yahoo Finance)
2. Calculates the implied forward P/E = price ÷ NTM EPS estimate at each point
3. Computes rolling median + standard deviation of those multiples
4. Projects upper/lower corridor bands = (median ± 1.5σ) × current EPS estimate
5. Current price vs corridor = entry signal (above = expensive, below = attractive)

Two timeframes: **1-Year corridor** (252 trading days) and **90-Day corridor** (90 trading days).

## Stocks tracked

| Ticker | Name | Exchange |
|--------|------|----------|
| NVDA | NVIDIA | NASDAQ |
| MSFT | Microsoft | NASDAQ |
| AMZN | Amazon | NASDAQ |
| META | Meta | NASDAQ |
| GOOGL | Alphabet | NASDAQ |
| AAPL | Apple | NASDAQ |
| TSLA | Tesla | NASDAQ |
| PLTR | Palantir | NYSE |
| ORCL | Oracle | NYSE |
| AMD | AMD | NASDAQ |
| TSM | TSMC | NYSE ADR |
| AVGO | Broadcom | NASDAQ |
| MU | Micron | NASDAQ |
| RIVN | Rivian | NASDAQ |
| NIO | NIO | NYSE |
| XPEV | XPeng | NYSE |
| RKLB | Rocket Lab | NASDAQ |
| 1810.HK | Xiaomi | HKEX |

## Updating

Edit `data/corridor-data.js` to update:
- AJ's weekly rankings (from U.S. Tech Coverage Update posts)
- EPS estimates (as AJ revises them)
- Known positions

## Attribution

All rankings, positions, and analysis reflect AJ Investment Research (@alojoh) published views.
**Not financial advice.**
