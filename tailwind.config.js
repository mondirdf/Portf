/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'void-blue': '#05122e',
        'deep-ocean': '#0b1d48',
        'soft-cyan': '#7dd3fc',
      },
      boxShadow: {
        glow: '0 0 40px rgba(56, 189, 248, 0.25)',
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        drift: 'drift 18s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        drift: {
          '0%': { transform: 'translateY(0) translateX(0)' },
          '100%': { transform: 'translateY(-120vh) translateX(10vw)' },
        },
      },
    },
  },
  plugins: [],
};
