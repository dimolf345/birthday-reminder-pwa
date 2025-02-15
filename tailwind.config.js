/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["Dancing Script", "serif"],
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
      },
      animation: {
        fadeOut: 'fadeOut 0.50s forwards',
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ["lofi"]
  },
};