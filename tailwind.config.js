/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'clr-primary': '#03045E',
        'clr-secondary': '#023E8A',
        'clr-success': '#00cc99',
        'clr-error': '#FF758F',
        'clr-info': '#0077B6',
        'bg-primary': '#48CAE4',
        'bg-secondary': '#90E0EF',
      },
    },
  },
  plugins: [],
};
