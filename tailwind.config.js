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
        260: "16.25rem",
      },
      width: {
        350: "21.875rem",
      },
    },
  },
  plugins: [],
};
