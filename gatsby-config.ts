module.exports = {
  siteMetadata: {
    title: "Faith Specialist Hospital",
    description: "Your trusted healthcare provider.",
    siteUrl: "https://faith-specialist-hospital.com",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Faith Specialist Hospital`,
        short_name: `FSH`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000000`,
        display: `minimal-ui`,
        icon: `src/images/faithIcon.png`, // Path to your favicon file
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-smoothscroll`,
    "gatsby-plugin-postcss",
    "gatsby-plugin-mdx",
    "gatsby-transformer-remark",
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
