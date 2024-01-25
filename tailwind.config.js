/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Recursive: "Recursive",
      },
      backgroundImage: {
        landing_bg: 'url("./src/assets/landing_bg.jpg")',
      },
      screens: {
        xs: "380px",
      },
    },
  },
  plugins: [],
};
