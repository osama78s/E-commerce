const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },
    container: {
      center: true,
      padding: '80px'
    },
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        secondry: ["Montserrat", "sans-serif"]
      },
      colors: {
        blue: '#115573',
        offWhite: '#EDEDED',
        arrow: '#23262A',
        gray: '#808080bc',
        gray2: '#666666',
        dark: '#23262A',
        activeDark: '#082634',
        overlay: '#000000f5',
      },
      borderColor: {
        main: '#F7F7F7'
      },
      boxShadow: {
        main: '5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff',
      }
    },
  },
  plugins: [
  ],
}