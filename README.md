# Appetec PWA

A Progressive Web Application built with React and Tailwind CSS, using design tokens extracted from the Appetec mobile app and admin panel.

## Features

- 🏠 **Home Page** - Welcome page with feature highlights
- 📄 **Terms & Conditions** - Comprehensive terms of service
- 🔒 **Privacy Policy** - Detailed privacy policy
- 📱 **PWA Support** - Installable as a Progressive Web App
- 🎨 **Design System** - Consistent colors, typography, and spacing based on Appetec brand

## Design Tokens

This project uses design tokens extracted from the Appetec projects:

### Colors
- **Primary Green**: `#12705F` (main brand color)
- **Primary Purple**: `#3D1D66` (secondary brand color)
- **Light Green**: `#C5FBC7` (accent color)
- **Dark Green**: `#083E34` (dark variant)

### Typography
- **Font Family**: Exo (primary), Lexend (secondary)
- **Font Sizes**: Heading 1 (35px) to Micro (8px)
- **Font Weights**: 100 (Thin) to 900 (Black)

### Spacing & Layout
- Responsive breakpoints: xs (480px) to 2xl (1600px)
- Border radius: 2px to 25px
- Consistent spacing scale

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
appetec-pwa/
├── src/
│   ├── components/
│   │   └── Layout.jsx          # Main layout with header and footer
│   ├── config/
│   │   └── designTokens.js      # Design tokens configuration
│   ├── pages/
│   │   ├── Home.jsx             # Home page
│   │   ├── TermsAndConditions.jsx
│   │   └── PrivacyPolicy.jsx
│   ├── App.jsx                  # Main app component with routing
│   ├── main.jsx                  # Entry point
│   └── index.css                 # Global styles and Tailwind directives
├── index.html
├── package.json
├── tailwind.config.js           # Tailwind configuration with design tokens
├── vite.config.js               # Vite configuration with PWA plugin
└── README.md
```

## Technologies Used

- **React 18** - UI library
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server
- **Vite PWA Plugin** - PWA support

## PWA Features

The app is configured as a Progressive Web App with:
- Service worker for offline support
- Web app manifest for installability
- Responsive design for mobile and desktop
- Fast loading and smooth navigation

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is part of the Appetec ecosystem.
