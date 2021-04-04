const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'telegraf': ['telegraf', 'sans-seif']
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      indigo: colors.indigo,
      blue: colors.blue,
      pink: colors.pink,
      green: colors.green,
      red: colors.red,
      yellow: colors.yellow,
      fuchsia: colors.fuchsia,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
