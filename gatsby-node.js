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
      value: `/${sourceName}${value}`,
    });

    createNodeField({
      name: "sourceName",
      node,
      value: sourceName,
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
    path: "/notes",
    component: path.resolve(`${__dirname}/src/templates/NoteList.tsx`),
  });

  createPage({
    path: "/snippets",
    component: path.resolve(`${__dirname}/src/templates/SnippetList.tsx`),
  });

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`${__dirname}/src/templates/Post.tsx`),
      context: {
        id: node.id,
      },
    });
  });
};

exports.onPreBootstrap = ({ store }) => {
  const { program } = store.getState();

  const dirs = [
    path.join(program.directory, "notes"),
    path.join(program.directory, "snippets"),
  ];

  dirs.forEach((dir) => {
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
            tags: [String!]
        }
    `;

  createTypes(typeDefs);
};
