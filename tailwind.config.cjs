/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      spacing: {
        sm: "416px",
        "input-hg": "48px",
        "md-font": "32px",
      },
    },
    colors: {
      "blue-dark": "#17092C",
      blue: "#2E046D",
      green: "#52B45B",
      white: "#ffffff",
      black: "#000000",
      "gray-light": "#E5E5E5",
      "gray-medium": "#555555",
      "b-gray-light": "#dddddd",
      "active-bg": "#ECEBF0",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Roboto", "serif"],
    },
  },
  plugins: [],
};
