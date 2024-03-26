/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        "btncolor": "#F4F7FE",
        "btnyellow": "#FFE458",
      }
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      jost: ["Jost", "sans-serif"],
      "public-sans": ["Public Sans", "sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};

