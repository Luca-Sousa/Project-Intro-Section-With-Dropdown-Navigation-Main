/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/*.{css,js}"],
  theme: {
    extend: {
      colors: {
        "col-AW": "hsl(0, 0%, 98%)",
        "col-MG": "hsl(0, 0%, 41%)",
        "col-AB": "hsl(0, 0%, 8%)",
        "col-MB": "rgb(80,80,80)",
      },
      fontFamily: {
        "Epilogue": "Epilogue",
      },
      boxShadow: {
        'BS': "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
      screens: {
        "dk": "1440px",
        "xs": "520px",
      }
    },
  },
  plugins: [],
}