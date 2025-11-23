/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark theme base
        dark: {
          bg: '#0a0a0a',
          surface: '#111111',
          border: '#1a1a1a',
        },
        // Neon accent colors - easy to change
        neon: {
          primary: '#00ff88',
          secondary: '#00d4ff',
          accent: '#ff00ff',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

