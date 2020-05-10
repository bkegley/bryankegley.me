import { graphql } from "gatsby";

export const PostListFragment = graphql`
  fragment PostListFragment on Mdx {
    id
    frontmatter {
      title
      tags
      type
    }
    fields {
      slug
    }
  }
`;

export const PostDetailFragment = graphql`
  fragment PostDetailFragment on Mdx {
    id
    frontmatter {
      title
      date
      summary
      tags
      type
    }
    fields {
      sourceName
    }
    body
  }
`;
