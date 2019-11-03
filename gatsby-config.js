module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: '@bcgov/gatsby-source-github-raw',
      options: {
        githubAccessToken: 'c90f665cef9de66bb02c45884c66e4054510e35a',
        files: [
          'https://github.com/fweinaug/wikini/blob/master/src/WikipediaApp/WikipediaApp/Data/versions.json',
          'https://github.com/fweinaug/wikini/blob/master/src/WikipediaApp/WikipediaApp/Data/en/changelog.json',
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-json`,
      options: {
        // upper case first character and truncate .json extension
        typeName: ({ node, object, isArray }) => node.name.charAt(0).toUpperCase() + node.name.slice(1, node.name.length - 5),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
