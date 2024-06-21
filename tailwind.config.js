/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./src/*.{css,js}"],
  theme: {
    extend: {
      colors: {
        "col-AW": "hsl(0, 0%, 98%)",
        "col-MG": "hsl(0, 0%, 41%)",
        "col-AB": "hsl(0, 0%, 8%)",
      },
      fontFamily: {
        "Epilogue": "Epilogue",
      }
    },
  },
  plugins: [],
}

