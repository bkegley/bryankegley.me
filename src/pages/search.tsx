import React from "react";
import { graphql } from "gatsby";
import { H1, Layout, PostList } from "../components";
import { SEO } from "../components/SEO";
import { useLocation } from "@reach/router";

interface SearchPageProps {
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
      searchString: string;
    };
  }>;
}

const SearchPage = ({ data }: SearchPageProps) => {
  const { pathname } = useLocation();
  const searchQuery = decodeURI(pathname).replace("/search/", "");
  const posts = data.allPosts.nodes.filter(post => {
    return post.fields.searchString.match(searchQuery);
  });
  return (
    <Layout>
      <SEO title="Search" />
      <div className="mb-4 lg:mb-5">
        <div className="mb-5">
          <H1>search,</H1>
        </div>
        <div className="text-3xl">
          Ooooo! You're interested in {searchQuery}?
        </div>
      </div>
      <div className="my-4">
        <div className="mb-6">
          {posts.length ? (
            <div>
              <PostList posts={posts} />
            </div>
          ) : (
            <div>
              <p>Bummer! I couldn't find anything for you.</p>
              <p>Maybe try these instead</p>
              <PostList posts={data.allPosts.nodes.slice(0, 3)} />
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query SearchPageQuery {
    allPosts: allMdx(
      sort: { order: DESC, fields: frontmatter___date }
      filter: { fields: { sourceName: { eq: "posts" } } }
    ) {
      nodes {
        ...SearchPostFragment
      }
    }
  }
`;

export default SearchPage;
