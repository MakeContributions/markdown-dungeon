require('dotenv').config({
  path: '.env',
});

module.exports = {
  siteMetadata: {
    title: `Markdown Dungeon`,
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
        plugins: [`gatsby-remark-autolink-headers`, `gatsby-remark-prismjs`],
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
  ],
};
