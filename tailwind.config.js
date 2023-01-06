/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    maxWidth: {
      contain: "1600px",
    },
    fontFamily: {
      dm: ["DM Sans", "sans-serif"],
    },
    colors: {
      primary: "#262626",
    },
  },
  plugins: [],
};
