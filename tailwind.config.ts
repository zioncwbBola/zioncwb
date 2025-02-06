/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Theme 1: Planets in Open Space Synthwave Neon Glowing
        space: {
          1: '#081640',
          2: '#050E26',
          3: '#0D378C',
          4: '#265DA6',
          5: '#63D8F2',
        },
        // Theme 2: Mountain Range Against Giant Moon in Synthwave Style
        mountain: {
          1: '#8C2A6A',
          2: '#F266E9',
          3: '#762EA6',
          4: '#230A59',
          5: '#110E26',
        },
      },
      fontFamily: {
        sans: ['Muli', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        heading: ['Saira Extra Condensed', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
      },
      borderRadius: {
        sm: '0.25rem',
        DEFAULT: '0.375rem',
        lg: '0.5rem',
        xl: '1rem',
        '2xl': '2rem',
        pill: '50rem',
      },
    },
  },
  plugins: [],
};
