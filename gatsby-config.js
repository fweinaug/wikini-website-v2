module.exports = {
  siteMetadata: {
    title: `Wikini for Wikipedia`,
    description: `Wikini, the best Wikipedia experience on Windows 10`,
    author: `@schwatzgelber`,
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
        icon: `src/images/wikini-icon.png`,
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
