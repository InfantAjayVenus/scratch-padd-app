module.exports = {
  // Uncomment the line below to enable the experimental Just-in-Time ("JIT") mode.
  // https://tailwindcss.com/docs/just-in-time-mode
  // mode: "jit",
  theme: {
<<<<<<< HEAD
    colors: {
      paddBlueDark: "#2541B2",
      paddBlueAccent: "#3E7CB1",
      paddBlueSecondary: "#81A4CD",
      paddBlueLight: "#DBE4EE",
      paddWarnYellow: "#F1D900",
      paddRedAccent: "#F17300",
      paddGreen: "#089105",
      paddBlack: "#011529",
      paddBluePrimary: "#006FF1",
      paddLight: "#F0F4F9",
    },
=======
>>>>>>> 4720011 (WIP [home] feat: Fetch and List)
    maxWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      "1/3": "33%",
      "2/3": "66%",
    },
    extend: {
<<<<<<< HEAD
=======
      colors: {
        paddBlueDark: "#2541B2",
        paddBlueAccent: "#3E7CB1",
        paddBlueSecondary: "#81A4CD",
        paddBlueLight: "#DBE4EE",
        paddWarnYellow: "#F1D900",
        paddRedAccent: "#F17300",
        paddGreen: "#089105",
        paddBlack: "#011529",
        paddBluePrimary: "#006FF1",
        paddLight: "#F0F4F9",
      },
>>>>>>> 4720011 (WIP [home] feat: Fetch and List)
      width: {
        "19/20": "95%",
      },
      zIndex: {
        '-1': '-1'
      }
    },
  },
  variants: {},
  plugins: [],
  purge: {
    // Filenames to scan for classes
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html",
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // safelist: [],
    },
  },
};
