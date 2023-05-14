/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-orange" : "hsl(25, 97%, 53%)",
        "neutral-light-gray" : "hsl(217, 12%, 63%)",
        "neutral-medium-gray" : "hsl(216, 12%, 54%)",
        "neutral-dark-blue" : "hsl(213, 19%, 18%)",
        "neutral-very-dark-blue" : "hsl(216, 12%, 8%)"
      }
    },
  },
  plugins: [],
}
