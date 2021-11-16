const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      externals: getConfig().externals.concat(function (
        context,
        request,
        callback
      ) {
        const regex = /^@?firebase(\/(.+))?/;
        // exclude firebase products from being bundled, so they will be loaded using require() at runtime.
        if (regex.test(request)) {
          return callback(null, "umd " + request);
        }
        callback();
      }),
    });
  }
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (
    node.internal.type === "Mdx" &&
    getNode(node.parent).sourceInstanceName !== "images"
  ) {
    // get the name of the gatsby-source-filesystem entry that resulted in this node being queried
    const instanceType = getNode(node.parent).sourceInstanceName;
    const slug = createFilePath({ node, getNode, basePath: `work` });

    const getSlug = (instanceType, slug) => {
      switch (instanceType) {
        case "personalProjects":
          return `/work${slug}`;
        case "restrictedCaseStudies":
          return `/work/restricted${slug}`;
        case "pages":
          return slug;
        default:
          return;
      }
    };

    createNodeField({
      node,
      name: "slug",
      value: getSlug(instanceType, slug),
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            parent {
              ... on File {
                sourceInstanceName
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMdx.edges.forEach(({ node }) => {
    if (!node.fields.slug.match(/^\/work\/restricted/)) {
      createPage({
        path: node.fields.slug,
        component: path.resolve("./src/templates/projectWriteupTemplate.jsx"),
        matchPath:
          node.fields.slug.match(/^\/work\/restricted/) && "/work/restricted/*",
        context: {
          id: node.id,
          slug: node.fields.slug,
        },
      });
    }
  });
};
