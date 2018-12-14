module.exports = {
  siteMetadata: {
    title: 'Fourvill',
    description:
      'Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.',
    author: '@fourvill',
  },
  plugins: [
    'gatsby-plugin-react-helmet', 
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
