/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#0a192f',
          dark: '#0f172a',
          slate: '#1e293b',
          blue: '#1d4ed8',
          blueHover: '#1e40af',
          red: '#dc2626',
          redHover: '#b91c1c',
        },
      },
    },
  },
  plugins: [],
};
