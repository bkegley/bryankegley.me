import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { PostTemplateProps } from "./Post";

interface SnippetProps extends PostTemplateProps {}

const Snippet = ({ data }: SnippetProps) => {
  return (
    <div>
      <h1>This is a Snippet</h1>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </div>
  );
};

export default Snippet;
