/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Geologica: "'Geologica',serif",
        Pacifico: "'Pacifico', serif ",
      },
    },
  },
  plugins: [],
};
