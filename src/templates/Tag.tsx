import React from "react";
import { graphql } from "gatsby";
import { H1, Layout, PostList } from "../components";
import { SEO } from "../components/SEO";

interface TagProps {
  pageContext: {
    tag: string;
  };
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

const Tag = ({ data, pageContext }: TagProps) => {
  return (
    <Layout>
      <SEO
        title={`${pageContext.tag} - Tag`}
        description={`List of posts for ${pageContext.tag}`}
      />
      <H1>{pageContext.tag.toLowerCase()},</H1>
      <PostList posts={data.allMdx.nodes} />
    </Layout>
  );
};

export const query = graphql`
  query ListPostsByTagQuery($tag: String) {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: {
        frontmatter: { tags: { in: [$tag] } }
        fields: { sourceName: { eq: "posts" } }
      }
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

export default Tag;
