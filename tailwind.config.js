/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Geologica: "'Geologica',serif",
        Pacifico: "'Pacifico', serif ",
      },
      height: {
        100: "6.25rem",
      },
      width: {
        100: "6.25rem",
      },
    },
  },
  plugins: [],
};
