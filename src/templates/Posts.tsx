import React from "react";
import { graphql } from "gatsby";
import { H1, Layout, PostList } from "../components";
import { SEO } from "../components/SEO";

interface PostsProps {
  data: {
    allMdx: {
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
    };
  };
}

const Posts = ({ data }: PostsProps) => {
  return (
    <Layout>
      <SEO title="Posts" description="Summary of posts" />
      <H1>posts</H1>
      <PostList posts={data.allMdx.nodes} />
    </Layout>
  );
};

export const query = graphql`
  query ListPostsQuery {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fields: { sourceName: { eq: "posts" } } }
    ) {
      pageInfo {
        hasNextPage
      }
      nodes {
        ...PostListFragment
      }
    }
  }
`;

export default Posts;
