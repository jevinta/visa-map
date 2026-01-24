# Visa Map

Interactive world map of visa requirements by passport. Select one or more passports to see visa-free, visa-on-arrival, ETA, e-visa, or visa-required status per country.

## Features

- Interactive map (zoom, pan) with color-coded visa status
- Multi-passport selection
- Passport Power score when passports are selected
- Hover tooltips with country name and visa info per passport
- Responsive layout

## Tech Stack

- React, Vite
- react-simple-maps, Tailwind CSS

## Getting Started

**Prerequisites:** Node.js 16+ and npm

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

**Build:**

```bash
npm run build
```

Output is in `dist/`.

## Deployment

- **Vercel:** See [DEPLOYMENT_VERCEL.md](./DEPLOYMENT_VERCEL.md).

**Netlify:** Import the repo; build command `npm run build`, publish `dist`. The `netlify.toml` in the repo configures this.

**Other platforms:** Deploy the `dist` folder to any static host (GitHub Pages, S3 + CloudFront, etc.).

## Data

Visa data lives in `src/visaData.js`: `countryNames`, `passportNames`, and per-passport visa requirement mappings. The `scripts/` folder has tooling for parsing Wikipedia visa tables.

## License

MIT
