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
        totalCount
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
  `)

  result.data.allMdx.edges.forEach(({node}) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`src/templates/Post.js`),
      context: {
        id: node.id,
      },
    })
  })

  const postListPageLength = 5

  const numberOfPostListPages = Math.ceil(result.data.allMdx.totalCount / postListPageLength)

  Array.from(Array(numberOfPostListPages)).forEach((item, index) => {
    createPage({
      path: index > 0 ? `/posts/${index + 1}` : `/posts`,
      component: path.resolve(`src/templates/PostListPage.js`),
      context: {
        skip: index * postListPageLength,
        limit: postListPageLength,
        currentPage: index + 1,
      },
    })
  })
}
