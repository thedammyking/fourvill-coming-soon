require('dotenv').config({
  path: '.env',
})

module.exports = {
  siteMetadata: {
    title: 'Coming Soon',
    description:
      'Organize and improve social content while fostering social engagement for creatives and businesses across the web. ',
    author: '@fourvill',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        baseUrl: 'fourvill-3a5078.easywp.com',
        protocol: 'https',
        hostingWPCOM: false,
        verboseOutput: true,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'fourvill-coming-soon',
        short_name: 'fourvill',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#683A68',
        display: 'minimal-ui',
        icon: 'src/images/fourvill-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
