/**** @type {import('tailwindcss').Config} ****/
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          pink: "#ff4ecd",
          blue: "#00e5ff",
          purple: "#7c3aed",
          green: "#22d3ee",
        },
      },
      dropShadow: {
        glow: "0 0 12px rgba(0, 229, 255, 0.6)",
        pink: "0 0 12px rgba(255, 78, 205, 0.6)",
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
};
