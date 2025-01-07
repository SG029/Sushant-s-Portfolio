/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        instrumentSerif: ['InstrumentSerif-Italic', 'serif'], 
        foundersGrotesk: ['FoundersGrotesk-Regular', 'sans-serif'],
        'foundersGrotesk-bold': ['FoundersGrotesk-Bold', 'sans-serif'], 
      },
    },
  },
  plugins: [],
};