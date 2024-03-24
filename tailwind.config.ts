import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import { default as flattenColorPalette } from 'tailwindcss/lib/util/flattenColorPalette';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...defaultTheme.fontFamily.sans],
      },

      colors: {
        text: {
          50: '#f0eff6',
          100: '#e0deed',
          200: '#c1beda',
          300: '#a29dc8',
          400: '#837cb6',
          500: '#645ca3',
          600: '#504983',
          700: '#3c3762',
          800: '#282541',
          900: '#141221',
          950: '#0a0910',
        },
        background: {
          50: '#f1f1f4',
          100: '#e2e2e9',
          200: '#c5c5d3',
          300: '#a9a9bc',
          400: '#8c8ca6',
          500: '#6f6f90',
          600: '#595973',
          700: '#434356',
          800: '#2c2c3a',
          900: '#16161d',
          950: '#0b0b0e',
        },
        primary: {
          50: '#eae9fb',
          100: '#d5d3f8',
          200: '#aba8f0',
          300: '#827ce9',
          400: '#5851e1',
          500: '#2e25da',
          600: '#251eae',
          700: '#1c1683',
          800: '#120f57',
          900: '#09072c',
          950: '#050416',
        },
        secondary: {
          50: '#e7e5ff',
          100: '#cfccff',
          200: '#9e99ff',
          300: '#6e66ff',
          400: '#3d33ff',
          500: '#0d00ff',
          600: '#0a00cc',
          700: '#080099',
          800: '#050066',
          900: '#030033',
          950: '#01001a',
        },
        accent: {
          50: '#edecf8',
          100: '#dad9f2',
          200: '#b5b4e4',
          300: '#908ed7',
          400: '#6b68ca',
          500: '#4642bd',
          600: '#383597',
          700: '#2a2871',
          800: '#1c1b4b',
          900: '#0e0d26',
          950: '#070713',
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
    },
  },
  plugins: [require('@tailwindcss/forms'), addVariablesForColors],
} satisfies Config;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme('colors'));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ':root': newVars,
  });
}
