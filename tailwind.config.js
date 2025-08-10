const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js,jsx,tx,tsx}"], // Atur lokasi file Anda
  theme: {
    extend: {
      fontFamily: {
        figtree: ['Figtree', ...defaultTheme.fontFamily.sans],
        // jadikan default untuk font figtree:
        sans: ['Figtree', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
  assetsInclude: ['**/*.jpg', '**/*.JPG'],
};
