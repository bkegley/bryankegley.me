const path = require('path')
const {createFilePath} = require('gatsby-source-filesystem')

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions

  if (node.internal.type === 'Mdx') {
    const filePath = createFilePath({node, getNode})

    const parent = getNode(node.parent)
    let sourceName
    switch (parent.sourceInstanceName) {
      case 'caseStudies': {
        sourceName = 'studies'
        break
      }
      default: {
        break
      }
    }

    if (sourceName) {
      // create slugs for .mdx files
      createNodeField({
        name: 'slug',
        node,
        value: `/${sourceName}${filePath}`,
      })

      // create source file name reference
      createNodeField({
        name: 'sourceName',
        node,
        value: sourceName,
      })
    }
  }
}

exports.createPages = async ({graphql, actions}) => {
  const {createPage} = actions

  const allCaseStudyMdx = await graphql(`
    {
      allMdx(filter: {fields: {sourceName: {eq: "studies"}}}) {
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
  allCaseStudyMdx.data.allMdx.edges.forEach(({node}) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`src/templates/CaseStudy.js`),
      context: {
        id: node.id,
      },
    })
  })

  // Create Case Study List pages

  // paginated case studies
  // const caseStudiesListPageLength = 5
  // const numberOfCaseStudiesPages = Math.ceil(allCaseStudyMdx.data.allMdx.totalCount / caseStudiesListPageLength)

  // Array.from(Array(numberOfCaseStudiesPages)).forEach((item, index) => {
  //   createPage({
  //     path: index > 0 ? `/studies/${index + 1}` : `/studies`,
  //     component: path.resolve(`src/templates/CaseStudyListPage.js`),
  //     context: {
  //       skip: index * caseStudiesListPageLength,
  //       limit: caseStudiesListPageLength,
  //       currentPage: index + 1,
  //     },
  //   })
  // })

  // single case study list page
  createPage({
    path: `/studies`,
    component: path.resolve(`src/templates/CaseStudyListPage.js`),
    context: {
      skip: 0,
      limit: null,
      currentPage: 1,
    },
  })
}
