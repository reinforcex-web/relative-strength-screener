# Relative Strength Screener — Static Site

## Files

```
index.html   — Main page (loads Tailwind CDN + Google Fonts, Guide tab content)
style.css    — Custom styles (minimal, Tailwind does the heavy lifting)
data.js      — Bloomberg raw data (27 Mar 2026, ~3,900 stocks across 5 markets)
script.js    — RS engine + full UI logic (vanilla JS, no dependencies)
```

## Markets

- Russell 1000 (R1000)
- TOPIX
- KOSPI
- Hang Seng (HSI)
- CSI 300 (CSI300)

## Deploy to Cloudflare Pages

### Option 1: Direct Upload (easiest)

1. Go to https://dash.cloudflare.com → **Workers & Pages** → **Create**
2. Click **Pages** tab → **Upload assets**
3. Name your project (e.g. `rs-screener`)
4. Drag and drop all 4 files: `index.html`, `style.css`, `data.js`, `script.js`
5. Click **Deploy site**
6. Done — your site is live at `rs-screener.pages.dev`

### Option 2: Git (for ongoing updates)

1. Create a GitHub repo (e.g. `rs-screener`)
2. Push all 4 files to the repo root
3. In Cloudflare dashboard → **Workers & Pages** → **Create** → **Connect to Git**
4. Select your repo
5. Build settings: leave everything blank (no build step needed)
6. Deploy — auto-deploys on every push

## Daily Update Workflow

1. Bloomberg exports Excel (5 sheets: RIY Index, TPX Index, KOSPI Index, HSI Index, CSI 300)
2. Open a new Claude chat in this project
3. Upload the Excel + daily market notes in one message
4. Claude outputs all 5 files (4 source files + combined HTML)
5. Download, push to GitHub → Cloudflare auto-deploys

See `PROJECT_SYSTEM_PROMPT.md` for the full prompt that drives the daily workflow.

## Architecture

- **No build step** — runs directly in the browser
- **No React** — pure vanilla JavaScript
- **Tailwind via CDN** — no npm/node required
- **Engine runs client-side** — all stocks computed in ~50ms on page load
- **Config changes recalculate live** — no server round-trip
- **Fixed table layout** — consistent column widths across all 5 markets

## Key Design Decisions

- `minCap` default: US$10B (adjustable in Config)
- `minPrice` filter removed — doesn't apply across multi-currency markets
- EPS column = Bloomberg consensus 3-month % change ("Est. EPS △")
- Columns from Last Price through Trend: center-aligned
- Table uses `table-layout: fixed` with `<colgroup>` pixel widths
- Daily price action panel (amber) renders only when `daily` commentary field exists
- Guide tab contains full documentation of all columns, signals, and workflow tips

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).
Tailwind CDN requires an internet connection on first load.
