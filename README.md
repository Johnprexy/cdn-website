# Campus Discipleship Network — React Website

A full React + TypeScript + Tailwind CSS website for the Campus Discipleship Network (CDN).

## Stack

- **Vite** — build tool
- **React 19 + TypeScript** — UI framework
- **Tailwind CSS v4** — utility-first styling
- **Framer Motion** — animations & transitions
- **React Router v7** — client-side routing
- **Lucide React** — icons
- **react-countup** — animated stat counters
- **react-intersection-observer** — scroll reveal triggers

## Pages (16 total)

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About CDN |
| `/vision` | Vision & Mission |
| `/bridge` | Bridge Reformation Model |
| `/academy` | The Academy |
| `/membership` | Membership Training |
| `/workers` | Workers Training |
| `/leadership` | Leadership |
| `/campus` | Campus Network |
| `/chapters` | Campus Chapters |
| `/start` | Start a Fellowship |
| `/resources` | Articles & Resources |
| `/videos` | Teaching Videos |
| `/faith` | Statement of Faith |
| `/contact` | Contact |
| `/join` | Join the Network |

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

The `dist/` folder can be deployed to any static host:
- **Netlify** — drag & drop `dist/` or connect repo
- **Vercel** — connect GitHub repo, set framework to Vite
- **GitHub Pages** — see below

### GitHub Pages (with SPA support)

Add `"homepage": "https://johnprexy.github.io/cdn-website"` to `package.json` and use a 404.html redirect hack, or deploy via Netlify/Vercel for full SPA routing support.
