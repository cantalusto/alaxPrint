import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          900: '#06080F',
          800: '#0A0E1A',
          700: '#0F1524',
          600: '#141C30',
          500: '#1B2540',
        },
        brand: {
          DEFAULT: '#FF6A1A',
          soft: '#FF8A47',
          deep: '#E14A00',
        },
        paper: '#F4F1EA',
        paperDim: '#A8A294',
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'marquee-reverse': 'marquee-reverse 30s linear infinite',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        shine: 'shine 3s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.8)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(-8px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        shine: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
