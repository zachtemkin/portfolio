import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import SiteHeader from "./siteHeader";
import PullQuote from "./pullQuote";
import { MdxLayout } from "./mdxLayout";
import { page, mainContent } from "./layout.module.scss";
import PropTypes from "prop-types";

const shortcodes = { PullQuote, MdxLayout };

const Layout = ({ pageTitle, children, themeColor }) => {
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
      <div className={page}>
        <SiteHeader
          siteTitle={data.site.siteMetadata.title}
          themeColor={themeColor}
        />
        <main className={mainContent}>{children}</main>
      </div>
    </MDXProvider>
  );
};

SiteHeader.propTypes = { themeColor: PropTypes.string };

export default Layout;
