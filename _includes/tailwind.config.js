module.exports = {
  purge: [],
  theme: {
    colors: {
      pink: {
        light: '#FFF1EB',
        default: '#FFE4D8'
      },
      navy: {
        light: '#15357D',
        default: '#0D2A6D'
      },
      green: {
        light: '#B1E8D2',
        default: '#71CDA9',
        dark: '#5DAC8D'
      },
      gray: '#21242C',
      white: '#FFFFFF'
    },
    container: {
      center: true,
      padding: {
        default: '1.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
      },
    },
    fontFamily: {
      'display': ['Source Sans Pro', 'sans-serif'],
      'body': ['Work Sans', 'sans-serif']
    },
    extend: {
      borderWidth: {
        '3': '3px'
      },
      boxShadow: {
        'navy': '2px 2px 0px #0D2A6D',
        'green': '2px 2px 0px #71CDA9',
      },
      screens: {
        'xxl': '1920px'
      }
    },
  },
  variants: {},
  plugins: [],
}
