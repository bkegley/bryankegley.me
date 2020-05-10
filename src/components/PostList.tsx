import React from "react";
import { Link } from "gatsby";

interface PostListProps {
  posts: Array<{
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
}

export const PostList = ({ posts }: PostListProps) => {
  return (
    <ul>
      {posts.map(({ node }) => {
        return (
          <li>
            <Link
              to={node.fields.slug}
              className="hover:text-primary hover:underline"
            >
              {node.frontmatter.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
