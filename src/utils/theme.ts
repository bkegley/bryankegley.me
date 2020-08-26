import { PrismTheme } from "prism-react-renderer";

export const theme: PrismTheme = {
  plain: {
    color: "#f1eff7",
    backgroundColor: "#212136"
  },
  styles: [
    {
      types: ["punctuation", "inserted", "string"],
      style: {
        color: "#6DFEDF"
      }
    },
    {
      types: ["variable", "property"],
      style: {
        color: "#F1EFF7"
      }
    },
    {
      types: ["comment"],
      style: {
        color: "#6D6DB5",
        fontStyle: "italic"
      }
    },
    {
      types: ["changed"],
      style: {
        color: "#E0C285"
      }
    },
    {
      types: ["deleted"],
      style: {
        color: "#FF6F9F"
      }
    },
    {
      types: ["keyword", "selector"],
      style: {
        color: "#7AA5FF"
      }
    },
    {
      types: ["attr-name"],
      style: {
        fontStyle: "italic"
      }
    },
    {
      types: ["operator", "class-name", "symbol"],
      style: {
        color: "#2DE0A7"
      }
    },
    {
      types: ["builtin", "constant", "char"],
      style: {
        color: "#AE81FF"
      }
    },
    {
      types: ["namespace", "tag"],
      style: {
        color: "#66D9EF"
      }
    },
    {
      types: ["number"],
      style: {
        color: "#FFDB7D"
      }
    }
  ]
};
