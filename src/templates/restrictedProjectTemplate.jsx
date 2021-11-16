import React from "react";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import MdxLayout from "../components/mdxLayout";
const shortcodes = { MdxLayout };

const RestrictedProjectTemplate = ({ data }) => {
  return (
    <MDXProvider components={shortcodes}>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </MDXProvider>
  );
};

export default RestrictedProjectTemplate;
