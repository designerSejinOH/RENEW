module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-1fr': 'auto 1fr',
      },
      gridTemplateRows: {
        layout: '100px auto 100px',
        mobile: '1fr 2fr 1.5fr 1fr',
        content: '1fr 3fr',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
