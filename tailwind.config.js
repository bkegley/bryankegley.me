module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#F92672",
        secondary: "#AE81FF",
        gray: {
          100: "#F8FAFD",
          200: "#F1EFF7",
          300: "#D7DAE0",
          400: "#9DA5B4",
          500: "#5A6375",
          600: "#495162",
          700: "#404754",
          800: "#292A44",
          900: "#212136",
        },
      },
      fontSize: {
        "7xl": "5rem",
        "8xl": "6rem",
      },
      typography: (theme) => {
        return {
          DEFAULT: {
            css: {
              color: theme("colors.gray.300"),
              h1: {
                color: theme("colors.primary"),
                fontSize: "1rem",
              },
              h2: {
                color: theme("colors.secondary"),
              },
              a: {
                color: theme("colors.gray.300"),
              },
            },
          },
          lg: {
            css: {
              h1: {
                fontSize: "2rem",
              },
            },
          },
          xl: {
            css: {
              h1: {
                fontSize: "3rem",
              },
            },
          },
        };
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
