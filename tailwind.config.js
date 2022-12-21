/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        headerTop:
          "0 16px 24px rgb(55 71 79 / 8%), 0 8px 8px rgb(55 71 79 / 12%)",
      },
      transitionProperty: {
        opacity: "opacity",
      },
    },
  },
  plugins: [],
};
