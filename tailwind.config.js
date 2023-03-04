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
        layout: '200px auto 200px',
        content: '1fr 3fr',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
