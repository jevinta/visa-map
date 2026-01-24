# Visa Map

**Visa Map** is an interactive world map that shows visa requirements by passport. Select one or more passports to see at a glance where you can travel visa-free, with visa on arrival, via an electronic travel authorization (ETA), or where a visa is required. The map helps you compare visa access across passports and understand global travel freedom.

---

## Features

### Interactive map
- **Zoom and pan** the world map to explore any region.
- **Color-coded countries** show visa status at a glance (see [Map legend](#map-legend) below).
- **Hover tooltips** display the country name and, for each selected passport, the exact visa requirement (e.g. Visa free, ETA, Visa on arrival).

### Multi-passport selection
- **Select one or more passports** from a searchable list.
- When multiple passports are selected, each country is colored by the **best** status among them (e.g. if one passport is visa-free and another requires a visa, the country appears as visa-free).
- **Clear** selection or remove individual passports to compare different combinations.

### Passport Power score
- When at least one passport is selected, a **Passport Power** score is shown.
- The score is computed as **(Σ weight per destination ÷ number of destinations) × 100**. Higher values mean better visa-free access.
- **Weights:** Right of abode 2.0 · Visa free 1.0 · ETA 0.9 · Visa on arrival 0.75 · E-visa 0.65 · Visa required 0 · Travel restricted −1.

### Visa-free count
- The number of **Visa-free** destinations (including right-of-abode) is displayed for the selected passport(s), using the same “best status” logic as the map.

### Responsive layout
- The app works on desktop and smaller screens. The map and passport selector adapt to different viewport sizes.

---

## Map legend

| Status | Color | Description |
|--------|-------|-------------|
| **Visa free** | Green (`#10b981`) | No visa required; you can enter for the allowed period (e.g. short stays). |
| **Right of abode** | Light green (`#22c55e`) | Right to live in the destination (e.g. citizens, certain residents). |
| **ETA (Electronic Travel Authorization)** | Cyan (`#06b6d4`) | Pre-travel online authorization; no visa sticker or stamp. |
| **Visa on arrival** | Blue (`#3b82f6`) | Visa obtained at the border/airport on arrival. |
| **E-visa** | Purple (`#8b5cf6`) | Electronic visa applied for online before travel. |
| **Visa required** | Red (`#ef4444`) | A visa must be obtained in advance from an embassy/consulate. |
| **Travel restricted** | Black (`#000000`) | Entry refused or heavily restricted. |
| **No data** | Gray (`#e5e7eb`) | No visa requirement data available for that country. |

When no passport is selected, all countries appear **gray** (no data). After selecting one or more passports, countries are colored according to the legend above.

---

## Tech stack

- **React** + **Vite**
- **react-simple-maps** for the world map
- **Tailwind CSS** for styling

---

## Getting started

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

---

## Data

Visa data lives in `src/visaData.js`: `countryNames`, `passportNames`, and per-passport visa requirement mappings. The `scripts/` folder contains tooling for parsing Wikipedia visa tables (see `scripts/README.md`).

---

## License

MIT
