/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}', './node_modules/flowbite/**/*.js'],
  theme: {
    extend: {},
    colors: {
      'white':'#ffffff',
      'blue': {
        50: '#fff8eb',
        100: '#fdebc8',
        200: '#fcd48b',
        300: '#fab84f',
        400: '#f8991d',
        500: '#f27a0e',
        600: '#d65709',
        700: '#b2390b',
        800: '#902c10',
        900: '#772510',
        950: '#441004'
      }
    }
  },
  plugins: []
}
