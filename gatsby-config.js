'use strict'
require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: 'Web Alexis Faivre',
    description: 'Personal site for Alexis Faivre.',
    keywords: 'Alexis Faivre, edition, video',
    siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com',
    author: {
      name: 'Alejandro Tabares',
      url: 'https://twitter.com/lord_of_freaks',
      email: 'info@amajua.com'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1rem'
            }
          },
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1140,
              quality: 90,
              linkImagesToOriginal: false
            }
          }
        ]
      }
    },
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-canonical-urls',
      options: {
        siteUrl: 'https://gatsby-starter-typescript-plus.netlify.com'
      }
    },
    {
      resolve: `gatsby-source-vimeo`,
      options: {
        clientID: '5d2529e2b954d5711606361dca4f67ab4d089418',
        clientSecret: process.env.VIMEO_CLIENT_SECRET,
        userID: '21912690'
        // searchQuery: 'INSERT_SEARCH_QUERY',               // Optional
        // transformer(video) {                              // Optional
        //   video.newField = 'value';
        //   return video;
        // },
      }
    },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-react-helmet'
  ]
}
