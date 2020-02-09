module.exports = {
  siteMetadata: {
    title: `Mbk starter`,
    description: `This is a gatsby starter with sanity.io as a backend`,
    author: `Mouaad Boukiaou`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en"
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `src/images`
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        purgeOnly: ["styles/", "components/"]
      }
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "js0m3ln8",
        dataset: "production",
        overlayDrafts: true,
        watchMode: true
      }
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `433`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Mbk`,
        short_name: `Mbk`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/logo.png`
      }
    }
  ]
};
