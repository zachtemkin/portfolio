import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../../components/layout";
import { writeUp, projectTitle } from "../../../components/layout.module.scss";

const ProjectWriteup = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  const frontmatter = data.mdx.frontmatter;

  return (
    <Layout pageTitle='Super Cool Blog Posts'>
      <h1 className={projectTitle}>{frontmatter.title}</h1>
      <GatsbyImage image={image} />
      <article className={writeUp}>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        time_frame
        team
        tags {
          tag
        }
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`;

export default ProjectWriteup;
