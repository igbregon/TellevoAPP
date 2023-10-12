/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    fontFamily: {
      'sans': ['Helvetica', 'Arial', 'sans-serif']
    },
    colors: {
      'amarillo-ppal': '#ffbd59',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      green: colors.green,
      purple: colors.violet,
      yellow: colors.yellow,
      pink: colors.pink,
      zinc: colors.zinc,
      slate: colors.slate,
      stone: colors.stone,
      indigo: colors.indigo,
      neutral: colors.neutral,
      red: colors.red,
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio')
,require('@tailwindcss/forms')
,require('@tailwindcss/line-clamp')
,require('@tailwindcss/typography')
],
};
