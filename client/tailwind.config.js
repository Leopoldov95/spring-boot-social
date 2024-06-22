/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        colorPrimary: "#3b9678",
        colorSecondary: "#f45b69",
        greyLight: "#f9f9f9",
        greyDefault: "#d2d2d0",
        textDefault: "#22240f",
      },
      borderRadius: {
        default: "1.25rem",
      },
      boxShadow: {
        default: "0px 8px 24px 0px rgba(140, 149, 159, 0.2)",
      },
    },
  },
  plugins: [],
};
