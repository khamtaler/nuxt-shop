/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'rgba(0,0,0,0)',
        blurred: 'rgba(255,255,255,0.5)',
        blurreddark: 'rgba(0,0,0,0.5)',
        lightblue: '#21AFC1',
        darkblue: '#0A687A',
        lightpurple: '#8C2678',
        darkpurple: '#9D2C82',
        sBlack: '#0C0C0C',
      },
      transitionProperty: {
        width: 'width',
      },
      boxShadow: {
        blueheader: '-7px 21px 8px -20px #21AFC1',
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /(bg|text|border|to|from)-(bluedark|bluelight|blurred|transparent)/,
    },
  ],
}
