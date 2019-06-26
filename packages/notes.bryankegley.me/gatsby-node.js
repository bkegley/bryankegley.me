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

  // Create Post pages
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

  // Create PostList pages
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

  // Create TagList pages
  const tags = result.data.allMdx.edges.reduce((tagArray, {node}) => {
    const newTags = node.frontmatter.tags.filter(tag => tagArray.indexOf(tag) === -1)
    return tagArray.concat(newTags)
  }, [])

  tags.forEach(tag => {
    createPage({
      path: `/posts/tags/${tag}`,
      component: path.resolve(`src/templates/Tag.js`),
      context: {
        tag: [tag],
      },
    })
  })
}
