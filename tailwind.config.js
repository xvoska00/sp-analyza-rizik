/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/ui/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      gray: colors.neutral,
      white: colors.white,
      blue: colors.blue,
      red: colors.red,
      orange: colors.orange,
      yellow: colors.yellow,
      green: colors.green,
    },
    extend: {
      fontSize: {
        "2xs": [
          "0.625rem",
          {
            lineHeight: "0.875rem",
          },
        ],
      },
      maxWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
