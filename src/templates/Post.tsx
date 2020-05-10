import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Badge, H1, Label, Layout } from "../components";

export interface PostTemplateProps {
  data: {
    mdx: {
      id: string;
      frontmatter: {
        title: string;
        date?: string;
        summary?: string;
        tags?: string[];
      };
      fields: {
        sourceName: "posts";
      };
      body: any;
    };
  };
}

const PostTemplate = ({ data }) => {
  const {
    frontmatter: { summary },
    body,
  } = data.mdx;
  console.log({ data });
  return (
    <Layout>
      <H1>{data.mdx.frontmatter.title}</H1>
      <div className="flex flex-col lg:flex-row my-6 lg:my-12">
        <div className="w-1/4 order-1 lg:order-none mb-4">
          <div className="mb-1">
            <Label>Tags</Label>
          </div>
          <div>
            {data.mdx.frontmatter.tags.map((tag) => {
              return <Badge key={tag}>{tag}</Badge>;
            })}
          </div>
        </div>
        <div className="w-3/4 order-none lg:order-1 lg:ml-4 mb-2 lg:mb-5">
          <div className="text-xl lg:text-2xl">{summary}</div>
        </div>
      </div>
      <div>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query PostQuery($id: String) {
    mdx(id: { eq: $id }) {
      ...PostDetailFragment
    }
  }
`;

export default PostTemplate;
