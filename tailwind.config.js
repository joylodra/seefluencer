/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#0d65c0", // Primary Brand Color
        secondary: "#00509e", // Accent Color
        light: "#f8f9fa", // Light Background
        dark: "#212529", // Dark Background
        muted: "#6c757d", // Muted Text
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"], // Main Font
      },
      spacing: {
        container: "1200px", // Max container width
        section: "4rem", // Consistent section spacing
      },
      borderRadius: {
        xl: "1.5rem", // Rounded corners for components
      },
      screens: {
        xs: "480px", // For very small screens
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
