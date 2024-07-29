/** @type {import('tailwindcss').Config} */
export default {
  content: ['./inertia/**/*.tsx', './resources/**/*.edge'],
  theme: {
    extend: {
      backgroundColor: {
        dark: 'rgb(var(--bg-dark))',
      },
      textColor: {
        'accent-purple': 'rgb(var(--color-accent-1))',
        'accent-blue': 'rgb(var(--color-accent-2))',
        'accent-pink': 'rgb(var(--color-accent-3))',
        'secondary-light': 'rgb(var(--text-secondary-light))',
        'secondary-dark': 'rgb(var(--text-secondary-dark))',
      },
    },
  },
  plugins: [],
  darkMode: 'selector',
}
