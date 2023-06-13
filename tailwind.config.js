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
        194: '12.125rem',
      },
      width: {
        304: '19rem',
      },
    },
  },
  plugins: [],
};
