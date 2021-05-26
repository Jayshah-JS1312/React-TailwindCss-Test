module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      width:{
        'search-bar': '600px',
        'tempe': '1px',
        'line': '1350px'
      },
      margin:{
        'series':'2px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
