const path = require('path')
const {createFilePath} = require('gatsby-source-filesystem')

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions

  // create slugs for .mdx files
  if (node.internal.type === 'Mdx') {
    const value = createFilePath({node, getNode})

    createNodeField({
      name: 'slug',
      node,
      value: `/studies${value}`,
    })
  }
}

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions

  const result = await graphql(`
    {
      allMdx {
        totalCount
        edges {
          node {
            id
            frontmatter {
              tags
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  // Create Case Study pages
  result.data.allMdx.edges.forEach(({node}) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`src/templates/CaseStudy.js`),
      context: {
        id: node.id,
      },
    })
  })
}
