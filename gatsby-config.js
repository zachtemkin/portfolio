const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development";

require("dotenv").config({
  path: `.env.${activeEnv}`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Zach's Portfolio",
  },
  plugins: [
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        additionalData: `@import '${__dirname}/src/global-styles/global-utilities';`,
      },
    },
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1200,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `personalProjects`,
        path: `${__dirname}/src/content/work/personal`,
        ignore: [`${__dirname}/src/content/work/restricted/**`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `restrictedCaseStudies`,
        path: `${__dirname}/src/content/work/restricted/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `work`,
        path: `${__dirname}/src/content/work/`,
      },
    },
    {
      resolve: `gatsby-plugin-create-client-paths`,
      options: { prefixes: [`/work/restricted/*`] },
    },
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        typekit: {
          id: `gww7plm`,
        },
      },
    },
    // {
    //   resolve: "gatsby-plugin-firebase",
    //   options: {
    //     credentials: {
    //       apiKey: process.env.GATSBY_FIREBASE_APIKEY,
    //       authDomain: process.env.GATSBY_FIREBASE_AUTHDOMAIN,
    //       projectId: process.env.GATSBY_FIREBASE_PROJECTID,
    //       storageBucket: process.env.GATSBY_FIREBASE_STORAGEBUCKET,
    //       messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGINGSENDERID,
    //       appId: process.env.GATSBY_FIREBASE_APPID,
    //       userEmail: process.env.GATSBY_FIREBASE_USER_EMAIL,
    //     },
    //   },
    // },
  ],
};
