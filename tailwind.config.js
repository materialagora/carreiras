/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        primary: {
          1: "#5cc7b2",
          2: "#2a3542",
        },
        secondary: {
          1: "#161616",
          2: "#202020",
          3: "#202020",
          4: "#888888",
          5: "#444444",
        },
        white: "#ffffff",
        black: "#000000",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-no-last", "& > *:not(:last-child)");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
