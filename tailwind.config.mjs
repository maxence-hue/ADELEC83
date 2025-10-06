import forms from '@tailwindcss/forms';
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx,md,mdx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1267A6',
          light: '#EDF2F7',
          dark: '#0B3D63'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: [
    forms
  ]
};

export default config;
