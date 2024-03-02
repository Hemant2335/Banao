/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:
    {
      fontFamily: {
        'IBM': ["IBM Plex Sans", 'sans-serif'],
      },
      boxShadow :{
        '3xl' : ' 0px 5px 15px rgba(0, 0, 0, 0.35)'
      },
      mixBlendMode: {
        'multiply': 'multiply', // Object of blend modes
        'screen': 'screen',
      },
    },
  },
  plugins: [],
}