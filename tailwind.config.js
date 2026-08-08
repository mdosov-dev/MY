/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: {
          50: '#fbf8f3',
          100: '#f5efe3',
          200: '#ebe0c9',
          300: '#dcc8a1',
          400: '#c9a96f',
          500: '#b8914f',
          600: '#a37a3f',
          700: '#856234',
          800: '#6e5030',
          900: '#5c432a',
        },
        teal: {
          50: '#f0f9f8',
          100: '#d3eeec',
          200: '#a9dcda',
          300: '#74c4c1',
          400: '#4ba8a5',
          500: '#358b89',
          600: '#2a716f',
          700: '#245b5a',
          800: '#21494a',
          900: '#1e3d3e',
        },
        rust: {
          50: '#fdf5f0',
          100: '#fae6da',
          200: '#f3c9af',
          300: '#eba27d',
          400: '#e07a4f',
          500: '#d35f30',
          600: '#b94a23',
          700: '#973a1d',
          800: '#7d321e',
          900: '#682c1d',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s ease-out forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
