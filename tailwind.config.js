module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
        mdfooter: "75%",
        full: "100%",
        fuller: "120%",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(-5%)",
          },
          "50%": {
            transform: "translateY(0%)",
          },
        },
      },
      animation: {
        float: "float 2s ease-in-out infinite",
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
