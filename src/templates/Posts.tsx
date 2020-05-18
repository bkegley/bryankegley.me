import React from "react";
import { graphql } from "gatsby";
import { H1, Layout, PostList as PostListComponent } from "../components";
import { SEO } from "../components/SEO";

interface PostListProps {
  data: {
    allMdx: {
      edges: Array<{
        node: {
          id: string;
          frontmatter: {
            title: string;
            tags: string[];
          };
          fields: {
            slug: string;
          };
        };
      }>;
    };
  };
}

const PostList = ({ data }: PostListProps) => {
  return (
    <Layout>
      <SEO title="Posts" description="Summary of posts" />
      <H1>posts</H1>
      <PostListComponent posts={data.allMdx.edges} />
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
      edges {
        node {
          ...PostListFragment
        }
      }
    }
  }
`;

export default PostList;
