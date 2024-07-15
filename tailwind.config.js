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
        fbBlue: "#1876F2",
        twBlue: "#1DA1F2",
        instaPink: "#C13584",
        scOrange: "#FF5500",
        emailGray: "#c0a491"
      }
    },
    container: {
      padding: '2rem',
    },
  },
  plugins: [],
}
