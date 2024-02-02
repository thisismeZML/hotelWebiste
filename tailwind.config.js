/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primaryColor: "#1cb1fe",
      },
    },
    container: {
      center: true,
    },
    fontFamily: {
      primaryFont: ["DM Sans", "sans-serif"],
    },
  },
  plugins: [],
};
