const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode });
    const sourceName = getNode(node.parent).sourceInstanceName;

    createNodeField({
      name: "slug",
      node,
      value: `/${sourceName}${value}`
    });

    createNodeField({
      name: "searchString",
      node,
      value: `${node.frontmatter.title} ${node.frontmatter.tags.join(" ")} ${
        node.frontmatter.summary
      }`.toLowerCase()
    });

    createNodeField({
      name: "sourceName",
      node,
      value: sourceName
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error: Loading results for create pages");
  }

  createPage({
    path: "/posts",
    component: path.resolve(`${__dirname}/src/templates/Posts.tsx`)
  });

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`${__dirname}/src/templates/Post.tsx`),
      context: {
        id: node.id
      }
    });
  });
};

exports.onPreBootstrap = ({ store }) => {
  const { program } = store.getState();

  const dirs = [path.join(program.directory, "posts")];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir);
    }
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
        type Mdx implements Node {
            fields: Fields
            frontmatter: Frontmatter
        }

        type Fields {
            slug: String
            sourceName: String
        }

        type Frontmatter {
            title: String!
            date: Date
            summary: String
            type: String
            tags: [String!]
        }
    `;

  createTypes(typeDefs);
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/search/)) {
    page.matchPath = `/search/*`;
    createPage(page);
  }
};
