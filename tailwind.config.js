/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#050508',
          900: '#0a0a0f',
          800: '#0f0f1a',
          700: '#161625',
          600: '#1e1e35',
          500: '#26264a',
        },
      },
      fontFamily: {
        display: ['Orbitron', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(139,92,246,0.25)',
        'glow': '0 0 30px rgba(139,92,246,0.35)',
        'glow-lg': '0 0 60px rgba(139,92,246,0.4)',
        'glow-btn': '0 0 25px rgba(139,92,246,0.5), 0 4px 15px rgba(0,0,0,0.5)',
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(139,92,246,0.25) 0%, transparent 70%)',
      },
    },
  },
}
