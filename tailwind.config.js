/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#d4a574",    // Gold/Orange accent (from graduation stole)
        secondary: "#4a6278",  // Blue-grey highlight
        dark: "#1a2332",       // Dark navy base
        darker: "#0f1820",     // Deeper navy
        medium: "#2d3e50",     // Medium blue
        accent: "#3d5266",     // Accent blue
        light: "#e8eef3",      // Off-white text
        grey: "#8b9db0",       // Grey-blue secondary text
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        condensed: ['"Roboto Condensed"', 'sans-serif'],
      },
      animation: {
        'gradient-shift': 'gradientShift 15s ease infinite',
        'float': 'float 20s ease-in-out infinite',
        'blink': 'blink 1s infinite',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '33%': { transform: 'translate(30px, -30px) rotate(120deg)' },
          '66%': { transform: 'translate(-20px, 20px) rotate(240deg)' },
        },
        blink: {
          '0%, 50%': { borderColor: '#d4a574' },
          '51%, 100%': { borderColor: 'transparent' },
        }
      }
    },
  },
  plugins: [],
}
