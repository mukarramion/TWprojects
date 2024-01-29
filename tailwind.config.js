/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883'
        },
        transparentBG:"rgba(255, 99, 99,0.6)"
      },
      fontFamily:{
        body:['Nunito']
      }
    },
  },
  plugins: [],
}