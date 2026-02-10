import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        beau: ['"Beau Rivage"', 'cursive'],
        waterfall: ['"Waterfall"', 'cursive'],
        bonheur: ['"Bonheur Royale"', 'cursive'],
        explora: ['"Explora"', 'cursive'],
        pompiere: ['"Pompiere"', 'sans-serif'],
        ysabeau: ['"Ysabeau Infant"', 'sans-serif'],
        tangerine: ["Tangerine", 'cursive'],
        cinzel: ['"Cinzel Decorative"', 'serif'],
        baskerville: ['"Baskervville SC"', 'serif'],
        bellefair: ['"Bellefair"', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
