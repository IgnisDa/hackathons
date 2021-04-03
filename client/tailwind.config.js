module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        blurple: "#7289DA",
        "spotify-green": "#1DB954",
        "dark-but-not-black": "#2C2F33",
        "not-quite-black": "#23272A",
        "almost-black": "#202225",
        "light-black": "#36393F",
      },
    },
    fontFamily: {
      kiwi: "'Kiwi Maru', serif",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
