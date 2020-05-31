const generateFavicons = (sizes) => {
  return sizes.map(size => {
    return {
      src: `favicons/icon-${size}x${size}.png`,
      sizes: `${size}x${size}`,
      type: "image/png",
    };
  });
};

module.exports = {
  siteMetadata: {
    title: `Wikini for Wikipedia`,
    description: `Wikini, the best Wikipedia experience on Windows 10`,
    url: `http://wikiniapp.com`,
    image: `/cover.jpg`,
    author: `@fweinaug`,
  },
  plugins: [
    {
      resolve: '@bcgov/gatsby-source-github-raw',
      options: {
        githubAccessToken: `${process.env.GITHUB_ACCESS_TOKEN}`,
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
    `gatsby-plugin-sharp`,
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
        icons: generateFavicons([48, 72, 96, 144, 192, 256, 384, 512]),
      },
    },
    `gatsby-plugin-sass`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
