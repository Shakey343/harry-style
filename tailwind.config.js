/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hsBlack: "#36393A",
        hsRed: "#BF223C",
        hsBeige: "#fce4ce",
        hsLink: "#63C3D4",
        hsLinkHov: "#A5DCE4",
      }
    },
  },
  plugins: [],
}
