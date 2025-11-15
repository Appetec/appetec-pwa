/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,jsx}",
  ],
  theme: {
    screens: {
      xs: '480px',
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1600px',
    },
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: '#12705F',
          dark: '#083E34',
          light: '#C5FBC7',
          'very-light': '#C5FCC7',
          'very-dark': '#14705F',
        },
        // Secondary Colors
        purple: {
          DEFAULT: '#3D1D66',
          light: '#BF99D6',
          'disable-light': '#E4D8EE',
        },
        // Neutral Colors
        gray: {
          DEFAULT: '#B6B6B6',
          dark: '#707070',
          light: '#D8D8D8',
          '100': '#F9FAFB',
          '200': '#F4F6F8',
          '300': '#DFE3E8',
          '400': '#C4CDD5',
          '500': '#F9FAFB',
          '600': '#637381',
          '700': '#454F5B',
          '800': '#212B36',
          '900': '#161C24',
        },
        // Accent Colors
        orange: {
          light: '#F9C18A',
        },
        red: {
          DEFAULT: '#BE0000',
          'very-light': '#FDECEA',
        },
        // Status Colors
        success: '#22c55e',
        warning: '#ff7849',
        error: '#ff5630',
        info: '#00b8d9',
      },
      fontFamily: {
        sans: ['Exo', 'sans-serif'],
        lexend: ['Lexend', 'sans-serif'],
      },
      fontSize: {
        'heading-1': ['35px', { lineHeight: '42px', fontWeight: '700' }],
        'heading-2': ['29px', { lineHeight: '35px', fontWeight: '700' }],
        'heading-3': ['24px', { lineHeight: '29px', fontWeight: '600' }],
        'heading-4': ['20px', { lineHeight: '24px', fontWeight: '600' }],
        'body-large': ['19px', { lineHeight: '24px' }],
        'body-medium': ['16px', { lineHeight: '22px' }],
        'body-regular': ['14px', { lineHeight: '20px' }],
        'body-small': ['13px', { lineHeight: '18px' }],
        caption: ['12px', { lineHeight: '16px' }],
        tiny: ['10px', { lineHeight: '14px' }],
        micro: ['8px', { lineHeight: '12px' }],
      },
      borderRadius: {
        'sm': '2px',
        'md': '4px',
        'lg': '8px',
        'xl': '16px',
        '2xl': '20px',
        '3xl': '25px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      transitionDuration: {
        'fast': '125ms',
        'normal': '250ms',
        'slow': '500ms',
      },
    },
  },
  plugins: [],
}
