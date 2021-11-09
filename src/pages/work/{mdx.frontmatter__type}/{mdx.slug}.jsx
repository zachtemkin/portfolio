import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../../components/layout";
import ProjectInfo from "../../../components/projectInfo";
import { writeUp, projectTitle } from "../../../components/layout.module.scss";

const ProjectWriteup = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  const frontmatter = data.mdx.frontmatter;

  return (
    <Layout
      pageTitle='Super Cool Blog Posts'
      themeColor={data.mdx.frontmatter.theme_color}>
      <h1
        className={projectTitle}
        style={{ color: data.mdx.frontmatter.theme_color }}>
        {frontmatter.title}
      </h1>
      <ProjectInfo
        time_frame={data.mdx.frontmatter.time_frame}
        theme_color={data.mdx.frontmatter.theme_color}
        team={data.mdx.frontmatter.team}
        tags={data.mdx.frontmatter.tags}
      />
      <GatsbyImage image={image} />
      <article
        className={writeUp}
        style={{ color: data.mdx.frontmatter.theme_color }}>
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
        theme_color
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
