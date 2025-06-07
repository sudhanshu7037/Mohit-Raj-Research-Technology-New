/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: {
        basis: ['BasisRegular', 'sans-serif'],
        basisBold: ['BasisBold', 'sans-serif'],
        basisMedium: ['BasisMedium', 'sans-serif'],
        basisLight: ['BasisLight', 'sans-serif'],
        houschka: ['HouschkaMedium', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
