// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      brown: {
        light: "#8B231C",
        dark: "#630606;",
      },
      yellow: {
        light: "#F9A628",
      },
      gray: {
        light: "#F9F9F9",
        dark: "#656C73",
      },
      white: {
        light: "#ffffff",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
