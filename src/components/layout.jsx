import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import { page, mainContent } from "./layout.module.scss";
import SiteHeader from "./siteHeader";

const Layout = ({ pageTitle, children }) => {
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
    <div className={page}>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='theme-color' content='#127658' />
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
        <link rel='canonical' href='http://zach.coffee' />
      </Helmet>

      <SiteHeader siteTitle={data.site.siteMetadata.title} />
      <main className={mainContent}>{children}</main>
    </div>
  );
};

export default Layout;
