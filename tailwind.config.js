const { violet } = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          ...violet,
          DEFAULT: '#7c3aed',
        },
        background: '#0a0a0a',
        surface: '#1a1a1a',
        'copy-primary': '#f2f2f2',
        'copy-secondary': '#a6a6a6',
        stroke: '#262626',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
