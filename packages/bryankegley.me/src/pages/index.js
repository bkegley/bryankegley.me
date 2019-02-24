import React from 'react'
import {Link, graphql} from 'gatsby'
import {Flex, Box, Heading} from 'rebass'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PostSnippet from '../components/PostSnippet'

const IndexPage = props => {
  const {data} = props
  return (
    <Layout pathName={props['*']}>
      <SEO title="Home" keywords={[`blog`, `technology`, `react`, `javascript`]} />
      {data.allMdx && (
        <Flex flexDirection="column">
          <Heading fontSize={4}>Recent Posts</Heading>
          {data.allMdx.edges.map(({node}) => (
            <Box my={3}>
              <PostSnippet post={node} />
            </Box>
          ))}
        </Flex>
      )}
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export const query = graphql`
  {
    allMdx(sort: {order: DESC, fields: frontmatter___date}, limit: 3) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            series
            excerpt
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default IndexPage
