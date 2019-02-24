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
      value: `/posts${value}`,
    })
  }
}

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions

  const result = await graphql(`
    {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              imagePath
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMdx.edges.forEach(({node}) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`src/templates/Post/index.js`),
      context: {
        id: node.id,
        imagePath: node.frontmatter.imagePath,
      },
    })
  })
}
