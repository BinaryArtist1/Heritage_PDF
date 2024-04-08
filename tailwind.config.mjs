/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: ['./src/**/*.{mjs,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        tahiti: {
          50: '#E8EDF8',
          100: '#D0DAF1',
          200: '#9DB3E1',
          300: '#6E8ED3',
          400: '#3B66C4',
          500: '#2D4E95',
          600: '#1E3463',
          700: '#17274A',
          800: '#0F1B33',
          900: '#070C17',
          950: '#04060C'
        }
      }
    }
  },
  plugins: []
}
