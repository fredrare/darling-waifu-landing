require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Darling Waifu`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACEID,
        accessToken: process.env.CONTENTFULTOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Darling Waifu",
        short_name: "Darling Waifu",
        start_url: "/",
        background_color: "#4A4B5A",
        theme_color: "#F0C1DC",
        display: "standalone",
        icon: "src/images/favicon.png",
      },
    },
  ],
};
