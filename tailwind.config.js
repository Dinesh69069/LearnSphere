/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
    "./home/**/*.{html,js}",
    "./about/**/*.{html,js}",
    "./courses/**/*.{html,js}",
    "./dashboard/**/*.{html,js}",
    "./roadmap/**/*.{html,js}",
    "./notes/**/*.{html,js}",
    "./signup/**/*.{html,js}",
    "./login/**/*.{html,js}",
    "./blog/**/*.{html,js}",
    "./shared/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': {
          'bg': 'hsl(190, 95%, 95%)',
          'fg': 'hsl(190, 95%, 10%)',
          'primary': 'hsl(190, 95%, 45%)',
          'secondary': 'hsl(270, 80%, 60%)',
        }
      }
    },
  },
  plugins: [],
}
