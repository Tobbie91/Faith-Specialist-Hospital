/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
 module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
    "gatsby-plugin-postcss",
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`, // Adjust this path if your stories.json is located elsewhere
        name: `data`,
      },
    },
  ],
};
