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
          blue: '#1a8bcc',
          'blue-light': '#4da8e0',
          'blue-dark': '#156a9e',
          yellow: '#fcd12a',
          'yellow-light': '#fde05c',
          'yellow-dark': '#d4ad15',
          gray: '#1e1e1e',
          light: '#F7FAFC',
          dark: '#0B3D63'
        },
        primary: {
          DEFAULT: '#1a8bcc',
          foreground: '#FFFFFF'
        },
        accent: {
          DEFAULT: '#fcd12a',
          foreground: '#1e1e1e'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    }
  },
  plugins: [
    forms
  ]
};

export default config;
