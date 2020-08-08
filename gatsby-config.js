require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `GoodBooks`,
    description: `オススメのビジネス書を様々なカテゴリーごとにまとめて紹介するサイト「GoodBooks」です！定番のビジネス書、必読のビジネス書から、新刊のビジネス書まで厳選してまとめています。`,
    author: `@goodbooks`,
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
        name: `GoodBooks`,
        short_name: `GoodBooks`,
        start_url: `/`,
        background_color: `#1a237e`,
        theme_color: `#1a237e`,
        display: `minimal-ui`,
        icon: `src/images/logo-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-microcms",
      options: {
        apiKey: process.env.X_API_KEY,
        serviceId: "goodbooks",
        endpoint: "articles",
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Noto Sans JP`,
          `Roboto\:400,700`, // you can also specify font weights and styles
        ],
        display: "swap",
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
