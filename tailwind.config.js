/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        luxury: {
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        gold: {
          light: "#D4C192",
          DEFAULT: "#B4A670",
          dark: "#9A8C55",
        },
        accent: {
          light: "#D5C3B0",
          DEFAULT: "#C7AD94",
          dark: "#A48A72",
        },
        primary: {
          DEFAULT: "#B4A670",
        },
        background: {
          light: "#FDF8F1",
          DEFAULT: "#F9F8F4",
          soft: "#F5EDE3",
          dark: "#262626",
        },
        accent: {
          pink: "#FFB6B9",
          blueGray: "#7E969A",
        },
      },
      animation: {
        "pulse-slow": "pulse-slow 2s infinite",
      },
      keyframes: {
        "pulse-slow": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.05)" },
        },
      },
    },
  },
  plugins: [],
};
