/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'mobile': '425px',
      },
      colors: {
        'main': '#4f46e5',
        'sec': '#4f16f5'
      }
    },
  },
  plugins: [],
}

