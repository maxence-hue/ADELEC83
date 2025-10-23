import forms from '@tailwindcss/forms';

const config = {
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
          blue: '#0047AB',
          orange: '#FF8C42',
          gray: '#1e1e1e',
          light: '#EDF2F7',
          dark: '#0B3D63'
        },
        adelec: {
          blue: '#0047AB',
          orange: '#FF8C42',
          gray: '#1e1e1e'
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
