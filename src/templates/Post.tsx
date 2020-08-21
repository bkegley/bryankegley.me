import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { Badge, H1, Label, Layout } from "../components";
import { SEO } from "../components/SEO";
import { Link } from "gatsby";

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
    frontmatter: { summary, title },
    body
  } = data.mdx;
  return (
    <Layout>
      <SEO title={title} description={summary} />
      <H1>{data.mdx.frontmatter.title}</H1>
      <div className="flex flex-col my-6 lg:flex-row lg:my-12">
        <div className="order-1 w-1/4 mb-4 lg:order-none">
          <div className="mb-1">
            <Label>Tags</Label>
          </div>
          <div className="flex flex-wrap items-center">
            {data.mdx.frontmatter.tags.map(tag => {
              const slug = `/tags/${tag.replace(" ", "-").toLowerCase()}`;
              return (
                <Link to={slug} className="mb-px mr-1">
                  <Badge type="secondary" size="sm">
                    {tag}
                  </Badge>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="order-none w-3/4 mb-2 lg:order-1 lg:ml-4 lg:mb-5">
          <div className="text-xl lg:text-2xl">{summary}</div>
        </div>
      </div>
      <div className="lg:mx-24">
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
