/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins-bold-italic': ['poppins-bold-italic', 'sans-serif'],
        'poppins-bold': ['poppins-bold', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

