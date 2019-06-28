module.exports = {
  siteMetadata: {
    title: `bk`,
    description: `A personal blog by Bryan Kegley`,
    author: `@bkegley`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `bryankegley.me`,
        short_name: `bkegley`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/archive.svg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-mdx`,
      options: {},
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // `gatsby-plugin-offline`,
  ],
}
