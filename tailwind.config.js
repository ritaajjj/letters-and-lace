/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: "#F5EBDD",
        dustyrose: "#CBA6A6",
        sage: "#9DAE8C",
        brown: "#6E4E37",
        burgundy: "#6B2E2E",
        gold: "#C6A75E",
      },
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        lora: ["Lora", "serif"],
        allura: ["Allura", "cursive"],
      },
    },
  },
  plugins: [],
}