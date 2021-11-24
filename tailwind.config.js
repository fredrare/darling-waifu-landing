module.exports = {
  purge: {
    content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    options: {
      safelist: ["pb-full"],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        baloo: ['"Baloo Bhaina 2"', "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        primarypeach: "#F0C1DC",
        primaryskyblue: "#ABEEFC",
        bordergray: "#4A4B5A",
        almostwhite: "#FFE9F4",
      },
      boxShadow: {
        button: "0px 8px 0px 0px #4A4B5A",
        buttonhover: "0px 10px 0px 0px #4A4B5A",
        buttonpressed: "0px 4px 0px 0px #4A4B5A",
      },
      dropShadow: {
        waifuborder: "0px 0px 1px #ffffff",
        brighttext: "1px 1px 0px #ffffff",
      },
      height: {
        hexheight: "3.45em",
      },
      spacing: {
        third: "30%",
        action: "40%",
        mdfooter: "90%",
        full: "100%",
        fuller: "135%",
      },
    },
  },
  variants: {
    extend: {
      scale: ["active"],
      shadow: ["active"],
    },
  },
  plugins: [],
};
