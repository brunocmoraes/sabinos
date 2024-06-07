/** @type {import('tailwindcss').Config} */

export default {
  content: ["**/*.{html,js}", "./dist/index.html"],
  theme: {

    extend: {
      colors: {
        primary: '#982f34',
        secondary: '#F9D90C',
        'pagebg': '#FFF6E4',
        'pagetxt': '#393939',
        'dark': '#393939'

      }
    },
  },
  plugins: [],
};
