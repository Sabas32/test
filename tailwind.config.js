/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 16px 40px rgba(15, 23, 42, 0.08)',
        card: '0 12px 30px rgba(15, 23, 42, 0.08)'
      },
      colors: {
        brand: {
          50: '#f4f7ff',
          100: '#e8edff',
          200: '#c8d4ff',
          300: '#99b1ff',
          400: '#6b89ff',
          500: '#4a67ff',
          600: '#3146f5',
          700: '#2636c4',
          800: '#222f99',
          900: '#1f2b76'
        }
      }
    }
  },
  plugins: []
}
