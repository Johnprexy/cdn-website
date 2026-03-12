/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0d1225',
        'ink-mid': '#1a2355',
        navy: '#1e2d6b',
        royal: '#2a52be',
        'royal-lt': '#4070e0',
        purple: '#5c2fa0',
        'purple-lt': '#7b4ec8',
        gold: '#c9a020',
        'gold-lt': '#e8c040',
        cream: '#faf8f3',
        offwhite: '#f2f0f8',
        border: '#e0ddf0',
      },
    },
  },
  plugins: [],
}
