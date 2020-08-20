import { graphql } from "gatsby";

export const PostListFragment = graphql`
  fragment PostListFragment on Mdx {
    id
    frontmatter {
      title
      summary
      tags
      type
    }
    fields {
      slug
    }
  }
`;

export const SearchPostFragment = graphql`
  fragment SearchPostFragment on Mdx {
    id
    frontmatter {
      title
      summary
      tags
      type
    }
    fields {
      slug
      searchString
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
