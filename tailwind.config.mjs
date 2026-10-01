/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          orange: '#ea580c',        // Krasis Vibrant Accent Orange
          orangeHover: '#c2410c',   // Deep burnt orange
          orangeLight: '#fff7ed',   // Warm soft orange tint
          orangeBorder: '#fdba74',  // Light orange border
          dark: '#0f172a',          // Obsidian slate
          slate: '#334155',         // Muted body text
          surface: '#f8fafc',       // Crisp light background
          border: '#e2e8f0',        // Subtle card border
          navy: '#0a192f',
        },
      },
    },
  },
  plugins: [],
};
