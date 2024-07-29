/** @type {import('tailwindcss').Config} */
export default {
  content: ['./inertia/**/*.tsx', './resources/**/*.edge'],
  theme: {
    extend: {
      backgroundColor: {
        'bg-dark': 'rgb(var(--bg-dark))',
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
}
