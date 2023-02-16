/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'toast-push': {
          '0%': {
            opacity: 1,
            transform: 'scale(1)',
          },
          to: {
            opacity: 0,
            transform: 'scale(0.9)',
          },
        },
        'error-shake': {
          '0%': { transform: 'translateX(0.3rem)' },
          '33%': { transform: 'translateX(-0.3rem)' },
          '66%': { transform: 'translateX(0.3rem)' },
          to: { transform: 'translateX(-0.3rem)' },
        },
      },
    },
    fontFamily: {
      sans: [
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
      serif: ['Roboto Slab'],
    },
  },
  daisyui: {
    themes: ['light', 'dark'],
    darkTheme: 'dark',
  },
  plugins: [require('daisyui'), require('@tailwindcss/typography')],
}
