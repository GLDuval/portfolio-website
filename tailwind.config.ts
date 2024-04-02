import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        text: {
          50: '#f2f4f0',
          100: '#e4eae1',
          200: '#c9d4c4',
          300: '#aebfa6',
          400: '#94a989',
          500: '#79946b',
          600: '#617656',
          700: '#485940',
          800: '#303b2b',
          900: '#181e15',
          950: '#0c0f0b',
        },
        background: {
          50: '#f1f4f0',
          100: '#e3e9e2',
          200: '#c8d3c5',
          300: '#acbda8',
          400: '#90a78b',
          500: '#75916e',
          600: '#5d7458',
          700: '#465742',
          800: '#2f3a2c',
          900: '#171d16',
          950: '#0c0f0b',
        },
        primary: {
          50: '#eceef9',
          100: '#d9def2',
          200: '#b3bde6',
          300: '#8c9cd9',
          400: '#667acc',
          500: '#4059bf',
          600: '#334799',
          700: '#263673',
          800: '#19244d',
          900: '#0d1226',
          950: '#060913',
        },
        secondary: {
          50: '#f0f4f4',
          100: '#e1e9ea',
          200: '#c4d2d4',
          300: '#a6bcbf',
          400: '#89a6a9',
          500: '#6b8f94',
          600: '#567376',
          700: '#405659',
          800: '#2b393b',
          900: '#151d1e',
          950: '#0b0e0f',
        },
        accent: {
          50: '#f0f2f4',
          100: '#e1e5ea',
          200: '#c4ccd4',
          300: '#a6b2bf',
          400: '#8998a9',
          500: '#6b7f94',
          600: '#566576',
          700: '#404c59',
          800: '#2b333b',
          900: '#15191e',
          950: '#0b0d0f',
        },
      },
      keyframes: {
        flicker: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': {
            opacity: '0.99',
            filter:
              'drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))',
          },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': {
            opacity: '0.4',
            filter: 'none',
          },
        },
        shimmer: {
          '0%': {
            backgroundPosition: '-700px 0',
          },
          '100%': {
            backgroundPosition: '700px 0',
          },
        },
      },
      animation: {
        flicker: 'flicker 3s linear infinite',
        shimmer: 'shimmer 1.3s linear infinite',
      },
      boxShadow: {
        primary: '0 5px 5px 0 rgba(233, 240, 243, 0.5), 0 0 0 1px #E6ECF8',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
} satisfies Config;
