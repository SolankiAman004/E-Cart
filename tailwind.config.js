/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  extend: {
      fontFamily: {
      sans: ["Poppins", "sans-serif"],
      heading: ["Poppins", "sans-serif"],
    },
    },
  plugins: [],
}