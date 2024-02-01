/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#1cb1fe",
      },
    },
    fontFamily: {
      primaryFont: ["DM Sans", "sans-serif"],
    },
  },
  plugins: [],
};
