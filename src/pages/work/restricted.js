import React from "react";
import { Router, Redirect } from "@reach/router";
import { graphql } from "gatsby";

import PrivateRoute from "../../components/PrivateRoute";
// import RestrictedProjectTemplate from "../../templates/restrictedProjectTemplate";
import ProjectWriteupTemplate from "../../templates/projectWriteupTemplate";

const Restricted = ({ data }) => {
  return (
    <Router>
      {data.allMdx.edges.map(({ node }) => {
        switch (node.parent.sourceInstanceName) {
          case "restrictedCaseStudies":
            return (
              <PrivateRoute
                path={node.fields.slug}
                key={node.id}
                component={() => (
                  <ProjectWriteupTemplate data={{ mdx: node }} />
                  // <RestrictedProjectTemplate data={{ mdx: node }} />
                )}
              />
            );
          default:
            return [];
        }
      })}
      <Redirect from='/work/restricted' to='/work' default noThrow />
    </Router>
  );
};

export default Restricted;

export const query = graphql`
  query {
    allMdx(
      filter: { fields: { slug: { glob: "/work/restricted/**/*" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      totalCount
      edges {
        node {
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          fields {
            slug
          }
          id
          frontmatter {
            title
            date
            time_frame
            team
            role
            hero_image {
              childImageSharp {
                gatsbyImageData
              }
            }
            background {
              heading
              text
            }
            tags {
              tag
            }
          }
          body
        }
      }
    }
  }
`;
