/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "slide-in-from-left": 'slide-right 150ms ease-in 251ms forwards',
        "slide-in-from-right": 'slide-left 150ms ease-in 251ms forwards',
        "fade-out": 'fade 250ms ease-in forwards',
      },
      keyframes: {
        "slide-left": {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '10%': { opacity: '0.1', transform: 'translateX(-90%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        "slide-right": {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '10%': { opacity: '0.1', transform: 'translateX(90%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        "fade": {
          '0%': { opacity: '1' },
          '90%': { opacity: '0.1' },
          '100%': { opacity: '0' },
        }
      }
    },
  },
  plugins: [],
}