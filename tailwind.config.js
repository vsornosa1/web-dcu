/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
        colors: {
          sky: colors.sky,
          teal: colors.teal,
        },
        backgroundImage: {
          'chatPrint': "url('/src/assets/media/ChatPrint.svg')",
        }
      },
    },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
