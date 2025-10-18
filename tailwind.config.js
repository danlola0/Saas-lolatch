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
        background: '#0a0a0a', // Fond principal très sombre
        surface: '#1a1a1a',    // Pour les cartes, modales, etc.
        'copy-primary': '#f2f2f2', // Texte principal
        'copy-secondary': '#a6a6a6', // Texte secondaire
        stroke: '#262626', // Bordures fines
        'stroke-light': '#363636', // Bordures plus douces

        // Couleurs sémantiques
        success: '#22c55e', // Vert
        warning: '#f59e0b', // Ambre
        danger: '#ef4444',  // Rouge

        // Couleur d'accentuation
        accent: '#06b6d4', // Cyan
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Lexend', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
