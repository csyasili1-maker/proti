/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          brand: {
            DEFAULT: '#BD2928',
            dark: '#9A1E1E',
            light: '#E89090',
            red: '#BD2928',
            navy: '#0D1B3E',
          },
          dark: {
            DEFAULT: '#0F3160',
            lighter: '#1A4278',
          },
          light: {
            DEFAULT: '#F5F7FA',
            warm: '#FFF0F0',
          }
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          display: ['DM Sans', 'system-ui', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }