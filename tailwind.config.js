/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./templates/**/*.html",
      "./static/js/**/*.js",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#080909c2',       // first-color
          secondary: '#C0C0C0',       // second-color
          dark: '#1C1C1C',            // white-color (background)
          light: '#D3D3D3',           // text-color
        },
        fontFamily: {
          roboto: ['Roboto', 'sans-serif'],
          poppins: ['Poppins', 'sans-serif'],
          montserrat: ['Montserrat', 'sans-serif'],
        }
      },
    },
    plugins: [],
    darkMode: 'class',
  }
  