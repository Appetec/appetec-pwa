# Design Tokens Extraction Summary

This document summarizes the design tokens extracted from the Appetec projects (`appetec` and `appetec-admin`).

## Colors

### Primary Colors
- **Primary Green**: `#12705F` - Main brand color
- **Very Dark Green**: `#14705F` - Darker variant
- **Dark Green**: `#083E34` - Darkest variant
- **Light Green**: `#C5FBC7` - Light accent
- **Very Light Green**: `#C5FCC7` - Lightest variant

### Secondary Colors
- **Primary Purple**: `#3D1D66` - Secondary brand color
- **Light Purple**: `#BF99D6` - Light variant
- **Disable Light Purple**: `#E4D8EE` - Disabled state

### Neutral Colors
- **White**: `#FFFFFF`
- **Black**: `#000000`
- **Gray**: `#B6B6B6`
- **Dark Gray**: `#707070`
- **Light Gray**: `#D8D8D8`
- **Light White Color**: `#FFFFFF99` (with opacity)

### Accent Colors
- **Light Orange**: `#F9C18A`
- **Red**: `#BE0000`
- **Very Light Red**: `#FDECEA`

### Status Colors
- **Success**: `#22c55e`
- **Warning**: `#ff7849`
- **Error**: `#ff5630`
- **Info**: `#00b8d9`

### Gray Scale (from admin panel)
- **Gray 100**: `#F9FAFB`
- **Gray 200**: `#F4F6F8`
- **Gray 300**: `#DFE3E8`
- **Gray 400**: `#C4CDD5`
- **Gray 500**: `#F9FAFB`
- **Gray 600**: `#637381`
- **Gray 700**: `#454F5B`
- **Gray 800**: `#212B36`
- **Gray 900**: `#161C24`

## Typography

### Font Families
- **Primary**: `Exo` (sans-serif)
  - Available weights: 100 (Thin) to 900 (Black)
  - Includes italic variants for Medium, SemiBold, and Bold
- **Secondary**: `Lexend` (sans-serif)
  - Available weights: 100 (Thin) to 900 (Black)

### Font Sizes
- **Heading 1**: 35px (line-height: 42px, weight: 700)
- **Heading 2**: 29px (line-height: 35px, weight: 700)
- **Heading 3**: 24px (line-height: 29px, weight: 600)
- **Heading 4**: 20px (line-height: 24px, weight: 600)
- **Body Large**: 19px (line-height: 24px)
- **Body Medium**: 16px (line-height: 22px)
- **Body Regular**: 14px (line-height: 20px)
- **Body Small**: 13px (line-height: 18px)
- **Caption**: 12px (line-height: 16px)
- **Tiny**: 10px (line-height: 14px)
- **Micro**: 8px (line-height: 12px)

### Line Heights
- **Tight**: 1.2
- **Normal**: 1.5
- **Loose**: 1.8

### Letter Spacing
- **Tight**: -0.5px
- **Normal**: 0px
- **Wide**: 0.5px

## Spacing

Common spacing values used throughout the app:
- **XS**: 4px (0.25rem)
- **SM**: 8px (0.5rem)
- **MD**: 16px (1rem)
- **LG**: 24px (1.5rem)
- **XL**: 32px (2rem)
- **2XL**: 48px (3rem)
- **3XL**: 64px (4rem)

## Border Radius

- **SM**: 2px
- **MD**: 4px
- **LG**: 8px
- **XL**: 16px
- **2XL**: 20px
- **3XL**: 25px
- **Full**: 9999px (for circular elements)

## Breakpoints

Responsive breakpoints for different screen sizes:
- **XS**: 480px
- **SM**: 576px
- **MD**: 768px
- **LG**: 992px
- **XL**: 1200px
- **2XL**: 1600px

## Transitions

- **Fast**: 0.125s (125ms)
- **Normal**: 0.25s (250ms)
- **Slow**: 0.5s (500ms)

## Shadows

Common shadow styles (can be extended):
- **SM**: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- **MD**: `0 4px 6px -1px rgba(0, 0, 0, 0.1)`
- **LG**: `0 10px 15px -3px rgba(0, 0, 0, 0.1)`
- **XL**: `0 20px 25px -5px rgba(0, 0, 0, 0.1)`

## Source Files Analyzed

1. `/appetec/constants/theme/colors.js` - Color definitions
2. `/appetec/constants/typography.js` - Typography system
3. `/appetec/constants/theme/fonts.js` - Font family definitions
4. `/appetec-admin/tailwind.config.js` - Admin panel Tailwind config
5. `/appetec-admin/src/theme/antd/theme.ts` - Ant Design theme config
6. `/appetec-admin/src/theme/index.css` - Global font styles

## Implementation Notes

- All design tokens are centralized in `src/config/designTokens.js`
- Tailwind configuration extends the default theme with these tokens
- The PWA uses Google Fonts to load Exo and Lexend font families
- Colors are mapped to Tailwind's color system for easy use in classes
- Typography sizes are configured as Tailwind utilities for consistency
