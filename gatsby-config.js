module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "notes",
        path: `${__dirname}/notes`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "snippets",
        path: `${__dirname}/snippets`,
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require("tailwindcss")("./tailwind.config.js"),
          require("autoprefixer"),
        ],
      },
    },
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/styles/style.css"],
      },
    },
  ],
};
