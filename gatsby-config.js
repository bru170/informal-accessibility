module.exports = {
  siteMetadata: {
    title: `Informal Accessibility`,
    description: `Kick off yoInfrastructures for partially digital citizens: Supporting informal welfare work in the digitized state `,
    author: `@antoniabruno`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`
      }
    },
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `http://localhost:10018/graphql`
      }
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Fira Sans\:200, 400, 500, 600, 700, 800, 900`,
          `Helvetica Neue\:200, 400, 500, 600, 700, 800, 900`,
          `sans-serif\:200, 400, 500, 600, 700, 800, 900`
        ],
        display: `swap`
      }
    }
  ]
}
