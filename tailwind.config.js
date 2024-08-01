/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./**/*.php', './assets/**/*.js'],
  theme: {
    fontFamily: {
      sans: [
        '"Inter", sans-serif',
      ],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '0rem',
      },
    },
    extend: {
      colors: {
        ...defaultTheme.colors,
        "blue-ribbon": {
          50: "#EDFAFF",
          100: "#D6F1FF",
          200: "#B7E9FF",
          300: "#85DDFF",
          400: "#4BC7FF",
          500: "#22A9FF",
          600: "#0B8AFF",
          700: "#0472F1",
          800: "#0B5BC2",
          900: "#104E98",
          950: "#0F315C",
        }
      },
    },
  },
  plugins: [
    // require('flowbite/plugin')
  ],
}
