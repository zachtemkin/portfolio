import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import SiteHeader from "./siteHeader";
import MdxLayout from "./mdxLayout";
import PropTypes from "prop-types";
import "./page.scss";

const shortcodes = { MdxLayout };

const Page = ({ pageTitle, children, themeColor }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <MDXProvider components={shortcodes}>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='theme-color' content='#127658' />
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <link rel='canonical' href='http://zach.coffee' />
      </Helmet>
      <div className='page'>
        <main className='page__main-content'>
          <SiteHeader
            siteTitle={data.site.siteMetadata.title}
            themeColor={themeColor}
          />
          {children}
        </main>
      </div>
    </MDXProvider>
  );
};

Page.propTypes = { themeColor: PropTypes.string };

export default Page;
