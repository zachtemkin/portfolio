const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");

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

  const posts = result.data.allMdx.edges;

  posts.forEach(({ node }, index) => {
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
