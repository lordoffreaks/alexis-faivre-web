'use strict'
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Web Alexis Faivre',
    description: 'Personal site for Alexis Faivre.',
    keywords: 'Alexis Faivre, edition, direction, video',
    siteUrl: 'https://alexis-faivre-web.netlify.com',
    author: {
      name: 'Alejandro Tabares',
      url: 'https://twitter.com/lord_of_freaks',
      email: 'info@amajua.com'
    }
  },
  plugins: [
    'gatsby-transformer-json',
    'gatsby-plugin-material-ui',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://alexis-faivre-web.netlify.com'
      }
    },
    {
      resolve: `gatsby-source-vimeo`,
      options: {
        clientID: '5d2529e2b954d5711606361dca4f67ab4d089418',
        clientSecret: process.env.VIMEO_CLIENT_SECRET,
        // userID: '3302175' // Kåre
        userID: '104142469' // Alexis
        // searchQuery: 'INSERT_SEARCH_QUERY',               // Optional
        // transformer(video) {                              // Optional
        //   video.newField = 'value';
        //   return video;
        // },
      }
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Montserrat', 'Raleway']
        }
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Web Alexis Faivre`,
        short_name: `Alexis Faivre`,
        start_url: `/`,
        background_color: `#f1f1f1`,
        theme_color: `#000000`,
        display: `standalone`,
        icon: `src/svg/logo-alexis.svg`
      }
    },
    'gatsby-plugin-react-helmet'
  ]
}
