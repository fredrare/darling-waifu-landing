require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Darling Waifu`,
  },
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.SPACEID,
        accessToken: process.env.CONTENTFULTOKEN,
      },
    },
  ],
};
