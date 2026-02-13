/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      backgroundImage: {
        notely: "url('/projects/notely/banner.png')",
        dynos: "url('/projects/dynos/banner.png')",
        portfolio: "url('/projects/portfolio/banner.png')",
        "qr-key": "url('/projects/qr-key/banner.png')",
        "dot-pattern":
          "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-sm": "24px 24px",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(10px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-out forwards",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
