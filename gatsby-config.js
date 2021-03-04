require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Rosy Rose Herbalist`,
    siteUrl: `https://www.rosyherbalist.co.uk`,
    description: `Herbalist based in Falkland, Fife`,
    author: `Rosy Rose`,
    favicon: `./src/images/favicon.ico`,
    image: `https://res.cloudinary.com/dhat0b0ey/image/upload/v1590518155/RRH/rosy-rose-herbalist.png`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `gatsby-starter-default`,
    //     short_name: `starter`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //   },
    // },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "mk4ip66s",
        dataset: "production",
      },
    },
    // {
    //   resolve: `gatsby-source-instagram`,
    //   options: {
    //     username: `11452324078`,
    //   },
    // },
    {
      resolve: "gatsby-source-shopify",
      options: {
        shopName: "rosy-herbalist",
        accessToken: "2542930ee804c495a32e6e68d0ffa365",
        apiVersion: "2020-07",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
