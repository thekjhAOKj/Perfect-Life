/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors : {
        main : '#79AC78',
        aesBlue : '#63C4DA',
        aesRed : '#FF6969',
        aesYell : '#F6E96B',
        aesPur : '#7FA1C3',
      }
    },
  },
  plugins: [
    require('tailwindcss-signals'),
  ],
}