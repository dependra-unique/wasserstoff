/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#8b5cf6',
          light: '#a78bfa',
          dark: '#7c3aed',
        },
        secondary: '#ec4899',
        accent: '#f97316',
        background: '#0f0f29',
        card: 'rgba(30, 27, 75, 0.7)',
        success: '#10b981',
        error: '#ef4444',
        warning: '#f59e0b',
      },
      backgroundImage: {
        'cosmic': "radial-gradient(circle at 50% 50%, #1e1b4b, #0f0f29)",
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}