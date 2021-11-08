import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import IntroBlock from "../components/introBlock";
import ProjectPreview from "../components/projectPreview";
import { projectList } from "../components/layout.module.scss";

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle='Zach Temkin, Product Designer'>
      <IntroBlock />
      <div className={projectList}>
        {data.allMdx.nodes.map((node) => (
          <ProjectPreview
            id={node.id}
            slug={node.slug}
            type={node.frontmatter.type}
            title={node.frontmatter.title}
            team={node.frontmatter.team}
            time_frame={node.frontmatter.time_frame}
            hero_image={
              node.frontmatter.hero_image.childImageSharp.gatsbyImageData
            }
            tags={node.frontmatter.tags}
          />
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___date, order: ASC }
      filter: { frontmatter: { type: { eq: "professional" } } }
    ) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          time_frame
          team
          type
          tags {
            tag
          }
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
      }
    }
  }
`;

export default IndexPage;
