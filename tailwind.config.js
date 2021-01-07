module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: false,
    extend: {
      spacing: {
        500: '500px',
        600: '600px'
      },
      minWidth: {
        360: '360px'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '540px'
          },
          '@screen md': {
            maxWidth: '720px'
          },
          '@screen lg': {
            maxWidth: '960px'
          },
          '@screen xl': {
            maxWidth: '1200px'
          }
        }
      })
    }
  ]
}
