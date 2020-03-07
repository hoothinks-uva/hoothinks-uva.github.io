/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'HooThinks Consulting',
    description: 'A UVA CIO'
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'Raleway',
          'Open Sans'
        ],
        display: 'swap'
      }
    }
  ]
}
