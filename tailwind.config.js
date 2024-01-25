/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
  // eslint-disable-next-line no-dupe-keys
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      cinzel: ["Cinzel", "serif"],
      Raleway: ["Raleway", "sans-serif"],
    },
  },
};
