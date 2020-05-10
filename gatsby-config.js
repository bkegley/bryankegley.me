module.exports = {
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: 'posts',
        path: `${__dirname}/posts`
      }
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
