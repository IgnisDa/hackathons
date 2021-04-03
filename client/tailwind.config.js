module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        blurple: "#E3AFBC",
        "spotify-green": "rgba(221, 99, 232, 1)",
        "dark-but-not-black": "#2C2F33",
        "not-quite-black": "rgba(154, 23, 80,1)",
        "paper": "rgba(154, 23, 80,0.3)",
        "paperLight": "rgba(227, 175, 188, 0.3)",
        "almost-black": "#5D001E",
        "light-black": "#E3E2DF",
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
