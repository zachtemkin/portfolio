import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Page from "../../../components/page";
import ProjectInfo from "../../../components/projectInfo";

const ProjectWriteup = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  const frontmatter = data.mdx.frontmatter;

  return (
    <Page
      pageTitle='Super Cool Blog Posts'
      themeColor={data.mdx.frontmatter.theme_color}>
      <h1
        className='project-title col-8 col-offset-2'
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
      <article className='write-up'>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </article>
    </Page>
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
