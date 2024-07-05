/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#025556",
        secondary: "#B6F501",
        tertiary: "#EFEEC9",
        "dark-green": "#012222",
        "light-green": "#FDFDF7",
        "light-gray": "#D9D9D9"
      },
      backgroundImage: {
        'underline-pattern': "url('/src/assets/images/svg/underline.svg')",
        'underline-small-pattern': "url('/src/assets/images/svg/underline-small.svg')",
        'bg-why': "url('/src/assets/images/svg/bg-why.svg')",
        'bg-how': "url('/src/assets/images/svg/bg-how.svg')",
        'arrow-green': "url('/src/assets/images/svg/arrow-green.svg')",
        'line-footer': "url('/src/assets/images/svg/line-bottom.svg')",
        'footer-desktop': "url('/src/assets/images/svg/footer-desktop.svg')",
        'underline-green': "url('/src/assets/images/svg/underline-green.svg')",
        'left-pattern': "url('/src/assets/images/svg/left.svg')",
        'right-pattern': "url('/src/assets/images/svg/right.svg')",
        'wave-left': "url('/src/assets/images/svg/wave-left.svg')",
        'wave-right': "url('/src/assets/images/svg/wave-right.svg')",
        'sandwich-pattern': "url('/src/assets/images/png/sandwich.png')",
        'join-us-pattern': "url('/src/assets/images/svg/join-us.svg')",
      },
      listStyleImage: {
        checkmark: 'url("/src/assets/images/svg/arrow-green.svg")',
        arrow: 'url("/src/assets/images/svg/right-arrow.svg")',
      },
      fontFamily: {
        sans: ['"Graphik"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

