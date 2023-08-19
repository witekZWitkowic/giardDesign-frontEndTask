/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html", "./build/js/*.js"],
  theme: {
    extend: {
      colors: {
        primary: "#F5F0EC", //Grey 
        secondary: "#1B5B31", //Green
        beige: "#DCC1AB", //Beige
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        inter: ["Inter", "sans-serif"]
      },
    },
    screens: {
      xs: "375px",
      ss: "420px",
      sm: "768px",
      md: "1024px",
      lg: "1400px",
      xl: "1700px",
    },
  },
  plugins: [],
}