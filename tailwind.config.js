/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        medical: {
          50: '#f9fafb',
          100: '#f3f4f6',
          primary: '#1c1917', // Stone 900
          secondary: '#a8a29e', // Stone 400
          accent: '#d97706', // Amber 600
          surface: '#fafaf9', // Stone 50
        }
      },
      fontFamily: {
        sans: ['"Cairo"', 'sans-serif'],
        serif: ['"Cairo"', 'serif'],
      },
      animation: {
        'scroll': 'scroll 40s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'pulse-ring': 'pulseRing 3s cubic-bezier(0.24, 0, 0.38, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(100% / 2))' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgba(217, 119, 6, 0.7)' },
          '70%': { boxShadow: '0 0 0 15px rgba(217, 119, 6, 0)' },
          '100%': { boxShadow: '0 0 0 0 rgba(217, 119, 6, 0)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        }
      }
    },
  },
  plugins: [],
}
