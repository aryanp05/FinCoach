// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          700: '#004d40',   // Darker Primary Color
          500: '#009688',   // Primary Color
          300: '#4db6ac',   // Lighter Primary Color
        },
        secondary: {
          700: '#e65100',   // Darker Secondary Color
          500: '#ff6f00',   // Secondary Color
          300: '#ffab40',   // Lighter Secondary Color
        },
      },
    },
  },
  plugins: [],
}
