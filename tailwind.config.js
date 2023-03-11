/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        lightblue: "#f1f5f6",
        darkenlightblue: "#E5ECEE",
        lightgray: "#8b8b8b",
        mediumgray: "#4f4f4f",
        darkgray: "#2d2d2d",
      },
      backgroundImage: {
        background: "url('/background.png')",
        notely: "url('/projects/notely/banner.png')",
        dynos: "url('/projects/dynos/banner.png')",
        portfolio: "url('/projects/portfolio/banner.png')",
        "qr-key": "url('/projects/qr-key/banner.png')",
        down: "url('/down.png')",
      },
    },
  },
  plugins: [],
};
