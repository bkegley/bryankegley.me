import React from "react";
import { Link } from "gatsby";
import { H3 } from "./H3";
import { Badge } from "./Badge";

interface PostListProps {
  posts: Array<{
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

export const PostList = ({ posts }: PostListProps) => {
  return (
    <ul className="space-y-4">
      {posts.map(post => {
        return (
          <li>
            <Link
              to={post.fields.slug}
              className="hover:text-primary hover:underline"
            >
              <H3>{post.frontmatter.title}</H3>
            </Link>
            <div className="w-full grid grid-cols-3">
              <div className="px-4 text-gray-500 col-span-2">
                {post.frontmatter.summary}
              </div>
              <div className="px-4 col-span-1">
                <div className="flex flex-wrap items-center">
                  {post.frontmatter.tags.map(tag => {
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
            </div>
          </li>
        );
      })}
    </ul>
  );
};
