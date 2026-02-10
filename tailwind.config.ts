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
      fontSize: {
      '5xl-custom': ['1.4rem', { lineHeight: '1.1' }],
      '5xl-ricustom': ['1.2rem', { lineHeight: '1.1' }],
      '5xl-tomtom': ['2.4rem', { lineHeight: '1.1' }],
      '5xl-tomcus': ['2.7rem', { lineHeight: '1.1' }],
      '4xl-custom': ['2.6rem', { lineHeight: '1.1' }],
      },  
      backgroundImage: {
      'radial-custom': 'radial-gradient(circle, #e5f4ff 0%, #eaf6ff 10%, #ffffff 100%)',
      },
    },
  },
  plugins: [],
}

export default config
