/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        myron:"myron",
        wes:"wes",
        livia_medium:'livia_medium',
        lemon_milk_B:'lemon_milk_B',
        lemon_milk_m:'lemon_milk_m',
        
      },
      colors:{
        crystal:'#EEF5FF',
        Electric_Azure:'#0C99FF',
        drugh_light:'#489D7B'
      }
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};