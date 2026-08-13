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
          DEFAULT: '#0F4C81',
          dark: '#0B3A63',
          light: '#1E6CB0',
          50: '#F0F6FB',
          100: '#E1EDF7',
        },
        secondary: {
          DEFAULT: '#17A2B8',
          dark: '#138496',
          light: '#36B6CB',
          50: '#EBF9FC',
        },
        clinic: {
          bg: '#FFFFFF',
          section: '#F8F9FA',
          dark: '#222222',
          grey: '#6B7280',
          border: '#E5E7EB',
          gold: '#D4AF37',
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(15, 76, 129, 0.08)',
        'card-hover': '0 20px 40px -15px rgba(15, 76, 129, 0.12)',
        'glow': '0 0 25px rgba(23, 162, 184, 0.35)',
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
