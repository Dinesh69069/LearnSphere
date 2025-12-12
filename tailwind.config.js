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
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light Mode
        'light-bg': 'hsl(220 20% 97%)',
        'light-fg': 'hsl(220 25% 10%)',
        
        // Dark Mode
        'dark-bg': 'hsl(220 40% 8%)',
        'dark-fg': 'hsl(220 15% 95%)',
        
        // Primary Colors
        'primary': {
          light: 'hsl(190 95% 45%)',
          dark: 'hsl(190 95% 50%)',
          DEFAULT: 'hsl(190 95% 45%)',
        },
        
        // Accent Colors
        'accent': {
          light: 'hsl(270 80% 60%)',
          dark: 'hsl(270 75% 65%)',
          DEFAULT: 'hsl(270 80% 60%)',
        },
        
        // Brand Colors
        'navy': 'hsl(220 40% 13%)',
        'cyan-glow': 'hsl(190 100% 50%)',
        'violet-light': 'hsl(270 70% 70%)',
        
        // Legacy Brand Colors (for backward compatibility)
        'brand': {
          'bg': 'hsl(190, 95%, 95%)',
          'fg': 'hsl(190, 95%, 10%)',
          'primary': 'hsl(190, 95%, 45%)',
          'secondary': 'hsl(270, 80%, 60%)',
        }
      },
    },
  },
  plugins: [],
}
