module.exports = {
    purge: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.jsx',
    ],
    darkMode: "class",
    variants: {
      extend: {
        textOpacity: ["dark"],
      },
      backgroundColor: ["dark"],
      borderColor: ["dark"],
      textColor: ["dark"],
    },
    theme: {
      fill: {
        main: '#0073C7',
      },
      textColor:{
        primary: '#0073C7',
        'primary-light': '#F5FBFF',
        "light-gray": "#565656a3",
        "white":"#ffffff"
      },
      extend: {
        backgroundImage: theme => ({
          'splash': "url('/assets/images/vectors/splash_bg.svg')",
        }),
        maxWidth: {
          '9/10': '90%',
        },
        width:{
          '3/10': '310px',
          '155':'155px'
        },
        height:{
          '42': '42px'
        },
        inset:{
          '185':'185px',
          '120':'120px'
        },
        colors: {
          light: {
            'splash-overlay':'#2d2c2c4d',
            'light':'#FFF',
            'primary': '#0073C7',
            'primary-light':'#F5FBFF',
            'card':'#0f2d44',
            'hr': '#2d1f3b'
          },
          dark: {
            'dark':'#030108',
            'primary': '#0073C7',
            'card':'#161129',
            'hr': '#2d1f3b'
          }
        },
      },
    },
    plugins: [
      require("@tailwindcss/forms")({
        strategy: 'class',
      })
    ],
};
  