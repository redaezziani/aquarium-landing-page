/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#0d0c22",
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
    },
  },
},
  plugins: [],
}