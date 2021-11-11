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
    <Page pageTitle={frontmatter.title}>
      <ProjectInfo
        themeColor={frontmatter.theme_color}
        title={frontmatter.title}
        time_frame={frontmatter.time_frame}
        theme_color={frontmatter.theme_color}
        team={frontmatter.team}
        role={frontmatter.role}
        tags={frontmatter.tags}
      />
      {/* <div className='row'>
        <div className='col-12'>
          <GatsbyImage image={image} />
        </div>
      </div> */}
      <div className='row'>
        <article className='page__write-up col-12'>
          <MDXRenderer>{data.mdx.body}</MDXRenderer>
        </article>
      </div>
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
        role
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
