import React from "react";
import { Link } from "gatsby";

interface PostListProps {
  posts: Array<{
    id: string;
    frontmatter: {
      title: string;
      tags: string[];
    };
    fields: {
      slug: string;
    };
  }>;
}

export const PostList = ({ posts }: PostListProps) => {
  return (
    <ul>
      {posts.map(post => {
        return (
          <li>
            <Link
              to={post.fields.slug}
              className="hover:text-primary hover:underline"
            >
              {post.frontmatter.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
