const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["./src/**/*.{html,js,jsx,tx,tsx}"], // Atur lokasi file Anda
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', ...defaultTheme.fontFamily.sans], // Tambahkan font Poppins
      },
    },
  },
  plugins: [],
  assetsInclude: ['**/*.jpg', '**/*.JPG'],
};
