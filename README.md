# Relative Strength Screener — Static Site

## Files

```
index.html   — Main page (loads Tailwind CDN + Google Fonts)
style.css    — Custom styles (minimal, Tailwind does the heavy lifting)
data.js      — Bloomberg raw data (267KB, 1,439 stocks across 4 markets)
script.js    — RS engine + full UI logic (vanilla JS, no dependencies)
```

## Deploy to Cloudflare Pages (beginner guide)

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

## Updating Weekly Data

Each week when you have new Bloomberg data:
1. Re-run the data processing to generate a new `data.js`
2. Replace the `data.js` file and re-deploy
3. The commentary in `script.js` should be updated manually to reflect the new week's analysis

## Architecture

- **No build step** — runs directly in the browser
- **No React** — pure vanilla JavaScript
- **Tailwind via CDN** — no npm/node required
- **Engine runs client-side** — all 1,439 stocks computed in ~50ms on page load
- **Config changes recalculate live** — no server round-trip

## Browser Support

Works in all modern browsers (Chrome, Firefox, Safari, Edge).
Tailwind CDN requires an internet connection on first load.
