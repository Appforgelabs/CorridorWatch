#!/usr/bin/env python3
"""Fetch 1-year daily price data via Finnhub and write to data/prices.js"""
import json, time, urllib.request
from datetime import datetime, timedelta, timezone

FINNHUB_KEY = "d6952r9r01qs7u9kq240d6952r9r01qs7u9kq24g"

TICKERS = {
    "NVDA": "NVDA", "MSFT": "MSFT", "AMZN": "AMZN", "META": "META",
    "GOOGL": "GOOGL", "AAPL": "AAPL", "TSLA": "TSLA", "PLTR": "PLTR",
    "ORCL": "ORCL", "AMD": "AMD", "TSMC": "TSM", "AVGO": "AVGO",
    "MU": "MU", "RIVN": "RIVN", "NIO": "NIO", "XPEV": "XPEV", "RKLB": "RKLB"
}

now = int(datetime.now(timezone.utc).timestamp())
year_ago = int((datetime.now(timezone.utc) - timedelta(days=400)).timestamp())

results = {}
for label, sym in TICKERS.items():
    url = f"https://finnhub.io/api/v1/stock/candle?symbol={sym}&resolution=D&from={year_ago}&to={now}&token={FINNHUB_KEY}"
    try:
        req = urllib.request.urlopen(url, timeout=10)
        data = json.loads(req.read())
        if data.get("s") == "ok":
            pairs = list(zip(data["t"], data["c"]))
            results[label] = [{"t": int(t), "c": round(float(c), 2)} for t, c in pairs]
            print(f"✓ {label}: {len(results[label])} days")
        else:
            print(f"✗ {label}: {data.get('s')}")
            results[label] = []
    except Exception as e:
        print(f"✗ {label}: {e}")
        results[label] = []
    time.sleep(0.4)

# Write JS module
with open("data/prices.js", "w") as f:
    f.write("// Auto-generated price data — do not edit manually\n")
    f.write(f"// Generated: {datetime.now().strftime('%Y-%m-%d %H:%M')}\n")
    f.write("const PRICE_DATA = ")
    json.dump(results, f)
    f.write(";\n")

print(f"\nWritten data/prices.js ({sum(len(v) for v in results.values())} total data points)")
