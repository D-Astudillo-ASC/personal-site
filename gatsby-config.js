const path = require("path");
module.exports = {
  siteMetadata: {
    title: "Daniel Astudillo's Personal Site",
    author: "Daniel Astudillo",
    description: "Daniel Astudillo's Personal Site",
    menuLinks: [
      {
        name: "home",
        link: "/",
      },
      {
        name: "about",
        link: "/about",
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "DanielDev",
        short_name: "DanDev",
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
    "gatsby-plugin-offline",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-preact",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
  ],
};
