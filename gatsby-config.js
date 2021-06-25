require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Markdown Dungeon`,
    url: 'https://markdown-dungeon.netlify.app', // No trailing slash allowed!
    image: '/images/icon.png', // Path to your image you placed in the 'static' folder
    description: `A dungeon is a room or cell in which prisoners are held, especially underground`,
  },
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}`,
        ignore: [`**/\.*`],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              noInlineHighlight: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Markdown Dungeon",
        short_name: "Markdown Dungeon",
        icon: "static/images/icon.png", // This path is relative to the root of the site.
      },
    },
  ],
};
