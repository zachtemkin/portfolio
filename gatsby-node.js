const path = require("path");

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
            slug
          }
        }
      }
    }
  `);

  result.data.allMdx.edges.forEach(({ node }) => {
    if (!node.slug.match(/^\/work\/restricted/)) {
      createPage({
        path: node.slug,
        component: path.resolve("./src/templates/projectWriteupTemplate.jsx"),
        matchPath:
          node.slug.match(/^\/work\/restricted/) && "/work/restricted/*",
        context: {
          id: node.id,
          slug: node.slug,
        },
      });
    }
  });
};
