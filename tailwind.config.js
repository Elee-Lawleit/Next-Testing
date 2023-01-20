/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    'node_modules/daisyui/dist/**/*.js',
    'node_modules/react-daisyui/dist/**/*.js'
  ],
  theme: {
    extend: {
      fontFamily: {
        'Roboto' : ['Roboto', 'sans-serif'],
        'Hack' : ['Hack', 'sans-serif'],
        'Montserrat': ['Montserrat']
      },
      backgroundImage:{
        'bglayer' : 'url(../assets/layers/bglayer.svg)'
      },
      animation:{
        loadingBackwards: "loadingBackwards 5s linear infinite forwards"
      },
      keyframes:{
        loadingBackwards:{
          '0%':{width: "100%"},
          '100%': {width: "0%", backgroundColor: "#fff"}
        }
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "light",
  },
}
