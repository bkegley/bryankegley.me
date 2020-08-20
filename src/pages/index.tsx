import React from "react";
import { graphql, Link } from "gatsby";
import { H1, H2, Layout, PostList } from "../components";
import { SEO } from "../components/SEO";

interface IndexPageProps {
  data: {
    allPosts: Mdx;
  };
}

interface Mdx {
  nodes: Array<{
    id: string;
    frontmatter: {
      title: string;
      summary: string;
      tags: string[];
    };
    fields: {
      slug: string;
    };
  }>;
}

const IndexPage = ({ data }: IndexPageProps) => {
  return (
    <Layout>
      <SEO title="Home" />
      <div className="mb-4 lg:mb-5">
        <div className="mb-5">
          <H1>hi there,</H1>
        </div>
        <div className="mb-2 lg:mb-5">
          <div className="font-heading">
            My name is Bryan. Currently, you'll find me hacking around in
            Typescript, React, and GraphQL.
          </div>
        </div>
      </div>
      <div className="my-4">
        <H2>Recent Posts</H2>
        <div className="mb-6">
          <PostList posts={data.allPosts.nodes} />
        </div>
        <Link to="/posts" className="hover:text-primary hover:underline">
          View all
        </Link>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query IndexPageQuery {
    allPosts: allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      limit: 5
      filter: { fields: { sourceName: { eq: "posts" } } }
    ) {
      nodes {
        ...PostListFragment
      }
    }
  }
`;

export default IndexPage;
