import React from "react";
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Layout } from "../components/Layout";
import Note from "./Note";
import Snippet from "./Snippet";

export interface PostTemplateProps {
  data: {
    mdx: {
      id: string;
      frontmatter: {
        title: string;
        date: string;
        tags: string[];
      };
      fields: {
        sourceName: "notes" | "snippets";
      };
      body: any;
    };
  };
}

const PostTemplate = ({ data }: PostTemplateProps) => {
  const { sourceName } = data.mdx.fields;
  return (
    <Layout>
      <h1>This is a note</h1>
      <MDXProvider>
        {sourceName === "notes" ? (
          <Note data={data} />
        ) : (
          <Snippet data={data} />
        )}
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  );
};

export const query = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      frontmatter {
        title
        date
        tags
      }
      fields {
        sourceName
      }
      body
    }
  }
`;

export default PostTemplate;
