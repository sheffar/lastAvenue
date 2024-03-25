/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize:{
        '10': "10px",
        '11': "11px",
        '13': "13px",
        '15': "15px",
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

