import * as React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { getImage } from "gatsby-plugin-image";
import Page from "../components/page";
import ProjectInfo from "../components/projectInfo";
import ProjectBackground from "../components/projectBackground";

const ProjectWriteupTemplate = ({ data }) => {
  const post = data.mdx;

  if (post) {
    const image = getImage(post.frontmatter.hero_image);
    const frontmatter = post.frontmatter;

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
        <ProjectBackground
          heroImage={image}
          backgroundHeading={frontmatter.background.heading}
          backgroundText={frontmatter.background.text}
        />
        <article className='page__write-up row'>
          <MDXRenderer>{post.body}</MDXRenderer>
        </article>
      </Page>
    );
  }
  return null;
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        time_frame
        team
        role
        background {
          heading
          text
        }
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

export default ProjectWriteupTemplate;
