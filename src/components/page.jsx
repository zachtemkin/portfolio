import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import SiteHeader from "./siteHeader";
import Footer from "./footer";
import MdxLayout from "./mdxLayout";
import PropTypes from "prop-types";
import "./page.scss";

const shortcodes = { MdxLayout };

const Page = ({ pageTitle, children, themeColor, className }) => {
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
        <meta
          name='theme-color'
          media='(prefers-color-scheme: light)'
          content='#f6f6f6'
        />
        <meta
          name='theme-color'
          media='(prefers-color-scheme: dark)'
          content='#f6f6f6'
        />
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <link rel='canonical' href='http://zach.coffee' />
      </Helmet>
      <div className='page'>
        <main className={`page__main-content page__${className}`}>
          <SiteHeader
            siteTitle={data.site.siteMetadata.title}
            themeColor={themeColor}
          />
          {children}
        </main>
        <Footer />
      </div>
    </MDXProvider>
  );
};

Page.propTypes = { themeColor: PropTypes.string, className: PropTypes.string };

export default Page;
