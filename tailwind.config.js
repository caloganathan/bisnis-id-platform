/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'indonesia-red': '#DC2626',
        'indonesia-white': '#FFFFFF', 
        'trust-blue': '#1E40AF',
        'success-green': '#059669',
        'warning-orange': '#D97706',
        'neutral-gray': '#6B7280',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
