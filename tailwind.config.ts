import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bone: '#F4EFE7',
        ink: '#1A1715',
        saffron: '#C8843A',
        madder: '#8B3A2E',
        indigo: '#2E3B4E',
        shadow: '#6B5D4F',
        'bone-dark': '#E8E0D3',
        'ink-light': '#3D3633',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(3rem, 8vw, 7rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'headline': ['clamp(2rem, 5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.01em' }],
        'title': ['clamp(1.5rem, 3vw, 2.5rem)', { lineHeight: '1.1' }],
        'caps': ['0.6875rem', { lineHeight: '1.4', letterSpacing: '0.12em' }],
        'caps-lg': ['0.75rem', { lineHeight: '1.4', letterSpacing: '0.14em' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '38': '9.5rem',
        '42': '10.5rem',
        '46': '11.5rem',
        '50': '12.5rem',
        '54': '13.5rem',
        '58': '14.5rem',
        '62': '15.5rem',
        '66': '16.5rem',
        '70': '17.5rem',
        '76': '19rem',
        '84': '21rem',
        '88': '22rem',
        '92': '23rem',
        '96': '24rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
        '144': '36rem',
      },
      maxWidth: {
        'prose-narrow': '38rem',
        'prose': '42rem',
        'prose-wide': '52rem',
      },
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
        '14': 'repeat(14, minmax(0, 1fr))',
        'gallery-2': 'repeat(2, 1fr)',
        'gallery-3': 'repeat(3, 1fr)',
        'gallery-4': 'repeat(4, 1fr)',
      },
      transitionTimingFunction: {
        'gallery': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'reveal': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'silk': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      boxShadow: {
        'frame': '0 1px 2px rgba(26,23,21,0.05), 0 10px 34px -14px rgba(26,23,21,0.22)',
        'frame-hover': '0 2px 8px rgba(26,23,21,0.07), 0 30px 70px -20px rgba(26,23,21,0.34)',
        'lift': '0 20px 50px -24px rgba(26,23,21,0.30)',
      },
      transitionDuration: {
        '800': '800ms',
        '1000': '1000ms',
        '1200': '1200ms',
      },
      animation: {
        'fade-rise': 'fadeRise 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'scroll-indicator': 'scrollPulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeRise: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scrollPulse: {
          '0%, 100%': { opacity: '0.3', transform: 'translateY(0)' },
          '50%': { opacity: '0.8', transform: 'translateY(4px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
