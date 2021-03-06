/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
    
  siteMetadata: {
    title: 'Full-Stack Bootcamp',
    author: 'Alejandro Lara Ruiz'
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`
],  
}
 
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})