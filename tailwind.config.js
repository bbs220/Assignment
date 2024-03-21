/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        p01: "#e0e1dd",
        p02: "#778da9",
        p03: "#415a77",
        p04: "#1b263b",
        p05: "#0d1b2a",
        offWhite: "#f0dddd",
      },
      keyframes: {
        slightBounce: {
          "0%": { transform: "translate(0, -50%) scale(1)" },
          "50%": { transform: "translate(0, -50%) scale(1.2)" },
        },
      },
      animation: {
        slightBounce: "slightBounce 1200ms infinite ease-in-out",
      },
    },
  },
  plugins: [],
};
