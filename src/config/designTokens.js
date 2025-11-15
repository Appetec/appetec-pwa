/**
 * Design Tokens extracted from Appetec projects
 * Based on analysis of appetec and appetec-admin projects
 */

export const Colors = {
  // Primary Colors
  primaryGreen: '#12705F',
  veryDarkGreen: '#14705F',
  darkGreen: '#083E34',
  lightGreen: '#C5FBC7',
  veryLightGreen: '#C5FCC7',
  
  // Secondary Colors
  primaryPurple: '#3D1D66',
  lightPurple: '#BF99D6',
  disableLightPurple: '#E4D8EE',
  
  // Neutral Colors
  white: '#FFFFFF',
  black: '#000000',
  gray: '#B6B6B6',
  darkGray: '#707070',
  lightGray: '#D8D8D8',
  lightWhiteColor: '#FFFFFF99',
  
  // Accent Colors
  lightOrange: '#F9C18A',
  red: '#BE0000',
  veryLightRed: '#FDECEA',
  
  // Admin Colors (from appetec-admin)
  primary: '#387160',
  primary_2: '#c2f3c7',
  primary_3: '#dbdbdb',
  primary_4: '#3f2a66',
  primary_5: '#ffffff',
  
  // Status Colors
  success: '#22c55e',
  warning: '#ff7849',
  error: '#ff5630',
  info: '#00b8d9',
  
  // Gray Scale (from admin)
  gray100: '#F9FAFB',
  gray200: '#F4F6F8',
  gray300: '#DFE3E8',
  gray400: '#C4CDD5',
  gray500: '#F9FAFB',
  gray600: '#637381',
  gray700: '#454F5B',
  gray800: '#212B36',
  gray900: '#161C24',
};

export const Typography = {
  // Font Families
  fontFamily: {
    primary: 'Exo, sans-serif',
    secondary: 'Lexend, sans-serif',
  },
  
  // Font Sizes (in pixels)
  fontSize: {
    heading1: '35px',
    heading2: '29px',
    heading3: '24px',
    heading4: '20px',
    bodyLarge: '19px',
    bodyMedium: '16px',
    bodyRegular: '14px',
    bodySmall: '13px',
    caption: '12px',
    tiny: '10px',
    micro: '8px',
  },
  
  // Font Weights
  fontWeight: {
    thin: 100,
    extraLight: 200,
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
    black: 900,
  },
  
  // Line Heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    loose: 1.8,
  },
  
  // Letter Spacing
  letterSpacing: {
    tight: '-0.5px',
    normal: '0px',
    wide: '0.5px',
  },
};

export const Spacing = {
  // Common spacing values (in pixels, converted to rem for web)
  xs: '0.25rem',    // 4px
  sm: '0.5rem',     // 8px
  md: '1rem',       // 16px
  lg: '1.5rem',     // 24px
  xl: '2rem',       // 32px
  '2xl': '3rem',    // 48px
  '3xl': '4rem',    // 64px
};

export const BorderRadius = {
  sm: '2px',
  md: '4px',
  lg: '8px',
  xl: '16px',
  '2xl': '20px',
  '3xl': '25px',
  full: '9999px',
};

export const Breakpoints = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  '2xl': '1600px',
};

export const Transitions = {
  fast: '0.125s',
  normal: '0.25s',
  slow: '0.5s',
};

export const Shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
};
