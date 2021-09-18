// tailwind.config.js
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      brown: {
        light: "#8B231C",
      },
      yellow: {
        light: "#F9A628",
      },
      gray: {
        light: "#F9F9F9",
      },
      white: {
        light: "#ffffff",
      },
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
