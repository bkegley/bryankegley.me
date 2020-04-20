import React from "react";
import { graphql } from "gatsby";
import { Layout } from "../components/Layout";

interface NoteListProps {
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

const NoteList = ({ data }: NoteListProps) => {
  return (
    <Layout>
      <h1>Notes</h1>
      {data.allMdx.edges.map(({ node }) => {
        return (
          <div>
            <h3>{node.frontmatter.title}</h3>
          </div>
        );
      })}
    </Layout>
  );
};

export const query = graphql`
  query ListNotesQuery {
    allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fields: { sourceName: { eq: "notes" } } }
    ) {
      pageInfo {
        hasNextPage
      }
      edges {
        node {
          id
          frontmatter {
            title
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default NoteList;
