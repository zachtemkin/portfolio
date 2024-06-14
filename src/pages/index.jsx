import * as React from "react";
import { graphql } from "gatsby";
import Page from "../components/page";
import IntroBlock from "../components/introBlock";
import ProjectPreview from "../components/projectPreview";

const IndexPage = ({ data }) => {
  return (
    <Page pageTitle='Zach Temkin, Product Designer'>
      <IntroBlock />
      {data.allMdx.nodes.map((node) => (
        <ProjectPreview
          id={node.id}
          slug={node.fields.slug}
          title={node.frontmatter.title}
          team={node.frontmatter.team}
          time_frame={node.frontmatter.time_frame}
          order_index={node.frontmatter.order_index}
          blurb={node.frontmatter.background.text}
          accent_color={node.frontmatter.accent_color}
          hero_image={
            node.frontmatter.hero_image.childImageSharp.gatsbyImageData
          }
          tags={node.frontmatter.tags}
        />
      ))}
    </Page>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___order_index, order: ASC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          order_index
          time_frame
          team
          background {
            text
          }
          tags {
            tag
          }
          accent_color
          hero_image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        id
        fields {
          slug
        }
      }
    }
  }
`;

export default IndexPage;
