/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0px 10px 11px 0px rgba(0, 0, 0, 0.34)',
      },
      colors: {
        'primary': '#436850'
      },
      backgroundColor: {
        'primary': '#436850'
      }
    },
  },
  plugins: [],
}

