module.exports = {
  siteMetadata: {
    title: "Bryan Kegley",
    author: {
      name: "Bryan Kegley",
      description: "Bryan writes things and codes things",
    },
    sitUrl: "https://bryankegley.me",
    social: {
      twitter: "bkegley",
      github: "bkegley",
      twitch: "bjkegley",
    },
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-mdx",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "glossary",
        path: `${__dirname}/glossary`,
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
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-142995105-1",
      },
    },
  ],
};
