/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        dancing: ["Dancing Script", "serif"],
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: ["lofi"]
  },
};