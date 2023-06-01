/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        geo: ['Geologica', 'sans-serif'],
        lili: ['Lilita One', 'cursive'],
        shri: ['Shrikhand', 'cursive'],
        titan: ['Titan One', 'cursive']
      }
    },
  },
  plugins: [],
}