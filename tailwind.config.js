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
        down: "url('/down.png')",
      },
      margin: {
        "6vh": "6vh",
        "10vh": "10vh",
        "12vh": "12vh",
        "5vw": "5vw",
      },
      padding: {
        "20vh": "20vh",
        "6vh": "6vh",
        "12vw": "12vw",
        "8vw": "8vw",
      },
      height: {
        "5vh": "5vh",
        "10vh": "10vh",
        "40vh": "40vh",
        "85vh": "85vh",
        "100vh": "100vh",
      },
      width: {
        "20vw": "20vw",
        "50vw": "50vw",
        "85vw": "85vw",
        "95vw": "95vw",
      },
      maxHeight: {
        "30vh": "30vh",
      },
      maxWidth: {
        "20vw": "20vw",
      },
    },
  },
  plugins: [],
};
