/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#00040f",
        secondary: "#00f6ff",
        background: "#1B1330",
        blue: "#00A3FF",
        button: "#494259",
        text_white: "#FFFFFF",
        text_gray: "#F4EEEE",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
        dimSection:"linear-gradient(90deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.06) 100%);",
      },
      zIndex: {
        100: "100",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        michroma: ["Michroma", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
