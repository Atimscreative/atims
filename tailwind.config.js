/** @type {import('tailwindcss').Config} */
import Forms from "@tailwindcss/forms";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        urbanist: "'Urbanist', sans-serif",
      },

      colors: {
        main: {
          100: "#339af0",
          200: "#228be6",
        },
        primary: {
          50: "#e9ecef",
          100: "#adb5bd",
          200: "#212529",
          300: "#1a1a1a",
          400: "#090a0a",
        },
      },
      boxShadow: {
        btn: "0 10px 30px -10px rgba(51, 154, 240, 0.3)",
      },
    },
  },
  plugins: [Forms],
};
