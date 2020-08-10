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
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};
