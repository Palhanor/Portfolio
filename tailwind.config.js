/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        background: "url('/background.png')",
        notely: "url('/projects/notely/banner.png')",
        dynos: "url('/projects/dynos/banner.png')",
        portfolio: "url('/projects/portfolio/banner.png')",
        "qr-key": "url('/projects/qr-key/banner.png')",
      },
    },
  },
  plugins: [],
};
