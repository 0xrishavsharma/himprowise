/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3B82F6', // Blue color for primary actions
          dark: '#1E40AF',
          light: '#93C5FD',
        },
        secondary: {
          DEFAULT: '#10B981', // Green color for environmental aspects
          dark: '#047857',
          light: '#6EE7B7',
        },
        accent: {
          DEFAULT: '#EC4899', // Pink/purple for accent elements
          dark: '#BE185D',
          light: '#F9A8D4',
        },
        dark: {
          DEFAULT: '#111827',
          lighter: '#1F2937',
          lightest: '#374151',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': "url('/images/hero-bg.jpg')",
      },
    },
  },
  plugins: [],
}
