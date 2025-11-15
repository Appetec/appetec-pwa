# Quick Start Guide

## Installation

1. Navigate to the project directory:
```bash
cd "/home/dev/Office/Mobile Apps/Apptec App/appetec-pwa"
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port).

## Building for Production

Build the production-ready version:
```bash
npm run build
```

The built files will be in the `dist` directory.

## Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## Project Structure

```
appetec-pwa/
├── public/                 # Static assets (favicon, PWA icons)
├── src/
│   ├── components/         # Reusable components
│   │   └── Layout.jsx     # Main layout wrapper
│   ├── config/            # Configuration files
│   │   └── designTokens.js # Design system tokens
│   ├── pages/             # Page components
│   │   ├── Home.jsx
│   │   ├── TermsAndConditions.jsx
│   │   └── PrivacyPolicy.jsx
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind configuration
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## Available Routes

- `/` - Home page
- `/terms` - Terms and Conditions
- `/privacy` - Privacy Policy

## Customization

### Colors
Edit `tailwind.config.js` or `src/config/designTokens.js` to modify colors.

### Typography
Font sizes and families are configured in `tailwind.config.js` under the `fontSize` and `fontFamily` sections.

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add a route in `src/App.jsx`
3. Optionally add a navigation link in `src/components/Layout.jsx`

## PWA Features

The app is configured as a Progressive Web App. To test PWA features:

1. Build the app: `npm run build`
2. Serve the `dist` folder using a local server
3. Open in a browser that supports PWA installation
4. Look for the "Install" prompt in the browser

## Notes

- The app uses Google Fonts (Exo and Lexend) - ensure internet connection for fonts to load
- PWA icons need to be added to the `public` folder (pwa-192x192.png, pwa-512x512.png)
- Replace the placeholder favicon.ico with an actual icon
