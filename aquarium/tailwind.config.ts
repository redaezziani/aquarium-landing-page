/** @type {import('tailwindcss').Config} */
export default {
  // make it important to override preflight
  important: true,
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