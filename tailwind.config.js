/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        weatherBackground: "url('./assets/weatherBackground.jpg')",
      },
      keyframes: {
        shake: {
          "0%": {
            transform: "translate(5px, 0)",
          },
          "50%": {
            transform: "translate(-5px, 0)",
          },
          "100%": {
            transform: "translate(0, 0)",
          },
        },
      },
      animation: {
        shake: "shake 200ms 2 linear",
      },
      fontFamily: {
        logo: ["Manrope"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
