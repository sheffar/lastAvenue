/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
<<<<<<< HEAD
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      jost: ["Jost", "sans-serif"],
      "public-sans": ["Public Sans", "sans-serif"],
    },
=======
>>>>>>> add465ee12940d07cd85733d602b36eb77c18bb1
  },
  plugins: [require("daisyui")],
};

