/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // primary brand green from the original site
        brand: '#00d084',
        'brand-dark': '#00b374',
      },
    },
  },
  plugins: [],
};
