/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "Daniel Astudillo",
    author: "Daniel Astudillo",
    description: "Daniel Astudillo's Personal Site",
    keywords: [
      "Daniel",
      "Astudillo",
      "Personal",
      "Site",
      "Blog",
      "Resume",
      "Projects",
      "Work",
    ],
    siteUrl:
      process.env.NODE_ENV === "production"
        ? "https://danielast.gatsbyjs.io/"
        : "http://localhost:8000",
    unemployed: true,
    menuLinks: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "about",
        link: "/about",
      },
      {
        name: "projects",
        link: "/projects",
      },
      {
        name: "blog",
        link: "/blog",
      },
      {
        name: "resume",
        link: "/resume.pdf",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "DanielAst",
        short_name: "DanAst",
        description: "Daniel Astudillo's Personal Site",
        start_url: "/",
        background_color: "#6b37bf",
        theme_color: "#6b37bf",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/icon.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
  ],
}
