/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        phone: { min: "320px", max: "480px" },
        tablet: { min: "481px", max: "768px" },
        laptob: { min: "769px", max: "1024px" },
      },
    },
  },
  plugins: [],
};
