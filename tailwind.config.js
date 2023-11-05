const { fontFamily } = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  variants: {
    extend: {
      textOpacity: ["dark"],
    },
  },
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      mygray: "#1C1C1C",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: "#FCE300",
      purple: "#AD96DC",
      pink: "#F52789",
      green: "#93C90F",
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
