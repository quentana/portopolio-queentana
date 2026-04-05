/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        rose: {
          50:  '#fff1f5',
          100: '#ffe0ea',
          200: '#ffc2d4',
          300: '#F9B2D7',
          400: '#f472a0',
          500: '#e8457a',
          600: '#d12c60',
          700: '#af1f4d',
          800: '#8e1a3f',
          900: '#6e1530',
        },
        blush: '#e8c4d8',
        ink:   '#222222',
        soft:  '#666666',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: 0, transform: 'translateY(28px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        scaleFill: {
          '0%':   { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        fadeUp:    'fadeUp 0.65s ease forwards',
        scaleFill: 'scaleFill 1.1s cubic-bezier(.4,0,.2,1) forwards',
      },
    },
  },
  plugins: [],
}
