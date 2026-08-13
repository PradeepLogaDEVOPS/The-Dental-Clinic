/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2B211B', // Dark Espresso
          dark: '#1E1713',
          light: '#4A3025',   // Primary Brown
          50: '#FAF8F3',      // Warm Ivory
          100: '#F3EEE6',     // Cream
        },
        secondary: {
          DEFAULT: '#B89B67', // Champagne Gold
          dark: '#9A7F4F',
          light: '#D4BC8A',   // Soft Gold
          50: '#FAF8F3',
        },
        clinic: {
          bg: '#FFFFFF',
          section: '#FAF8F3', // Warm Ivory
          cream: '#F3EEE6',   // Cream
          dark: '#241C18',    // Main Text
          grey: '#75675F',    // Muted Text
          taupe: '#8B7568',   // Warm Taupe
          border: '#E6DED5',  // Border Light
          gold: '#B89B67',    // Champagne Gold
          softgold: '#D4BC8A'
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(43, 33, 27, 0.06)',
        'card-hover': '0 20px 40px -15px rgba(43, 33, 27, 0.1)',
        'glow': '0 0 25px rgba(184, 155, 103, 0.25)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
