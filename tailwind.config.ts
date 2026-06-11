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
        bonheur: ['"Bonheur Royale"', 'cursive'],
        explora: ['"Explora"', 'cursive'],
        ysabeau: ['"Ysabeau Infant"', 'sans-serif'],
        tangerine: ["Tangerine", 'cursive'],
        cinzel: ['"Cinzel Decorative"', 'serif'],
      },
      fontSize: {
      '5xl-custom': ['1.4rem', { lineHeight: '1.1' }],
      '5xl-ricustom': ['1.2rem', { lineHeight: '1.1' }],
      '5xl-tomtom': ['2.6rem', { lineHeight: '1.1' }],
      '5xl-tomcus': ['2.9rem', { lineHeight: '1.1' }],
      '4xl-custom': ['2.6rem', { lineHeight: '1.1' }],
      },  
      backgroundImage: {
            'radial-custom': 'radial-gradient(circle, #FFEBD4 20%, #FDF5EB 30%, #ffffff 100%)'
      },
    },
  },
  plugins: [],
}

export default config
