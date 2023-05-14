/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {
      borderRadius: {
        xl: "0.75rem",
      },
      fontFamily: {
        nohemi: ["../fonts/Nohemi-Regular.ttf", "../fonts/Nohemi-Bold.ttf"],
      },
      colors: {
        yellow: {
          300: "rgba(249, 219, 187, 1)",
        },
        white: "#ffffff",
        red: "rgba(249, 219, 187, 0.33)",
        transparent: "rgba(0,0,0,0)",
        black: "#000000",
        blue: {
          500: "#2E3840",
        },
      },
    },
  },
  plugins: [],
};
