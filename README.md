# Visa Map 🌍

Interactive world map that shows visa requirements based on your passport(s). Select one or more passports to see which countries you can visit visa-free, with visa on arrival, e-visa, or require a visa.

## Features

- 🗺️ Interactive world map with color-coded visa requirements
- 📘 Support for multiple passport selection
- 🎨 Color-coded legend:
  - 🟢 Green: Visa-free
  - 🔵 Blue: Visa on arrival
  - 🟣 Purple: E-visa
  - 🟠 Amber: Visa required
  - 🔴 Red: Not allowed
- 💡 Hover tooltips showing detailed visa information
- 📱 Responsive design

## Getting Started

### Prerequisites

- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect the Vite configuration and deploy

Or use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Netlify will automatically detect the build settings

Or use the Netlify CLI:
```bash
npm i -g netlify-cli
netlify deploy --prod
```

### Deploy to Other Platforms

The `dist` folder contains static files that can be deployed to any static hosting service:
- GitHub Pages
- AWS S3 + CloudFront
- Azure Static Web Apps
- Google Cloud Storage
- Any other static hosting provider

## Data

The visa data is currently stored in `src/visaData.js` as a sample dataset. To expand the data:

1. Add more countries to the `countryNames` object
2. Add visa requirements to the `visaRequirements` object
3. Format: `{ passportCode: { destinationCode: visaType } }`

For production use, consider:
- Loading data from an API
- Using a database
- Integrating with a visa requirement API service

## Tech Stack

- **React** - UI framework
- **Vite** - Build tool
- **react-simple-maps** - Interactive map component
- **Tailwind CSS** - Styling

## License

MIT
