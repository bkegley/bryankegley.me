import React from 'react'
import {Link, graphql} from 'gatsby'
import {Flex, Box, Heading, Text} from 'rebass'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PostSnippet from '../components/PostSnippet'
import PostList from '../components/PostList'

const IndexPage = props => {
  const {data} = props
  return (
    <Layout pathName={props['*']}>
      <SEO title="Home" keywords={[`blog`, `technology`, `react`, `javascript`]} />
      <Box mb={[4, 4, 5, 5]}>
        <Heading as="h1" fontSize={7} mb={3}>
          hi,
        </Heading>
        <Text ml={3} color="grays.700">
          and a hearty handshake
        </Text>
      </Box>
      {data.allMdx && (
        <Flex flexDirection="column">
          <Heading fontSize={4}>Recent Posts</Heading>
          <PostList postEdges={data.allMdx.edges} />
        </Flex>
      )}
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
