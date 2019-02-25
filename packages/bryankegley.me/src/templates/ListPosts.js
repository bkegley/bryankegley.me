import React from 'react'
import {graphql} from 'gatsby'
import {Flex, Box, Heading, Text} from 'rebass'
import styled from 'styled-components'
import Layout from '../components/Layout'
import PostSnippet from '../components/PostSnippet'
import Pagination from '../components/Pagination'

const CenteredBox = styled(Box)`
  margin-right: auto;
  margin-left: auto;
`

const Posts = ({data, pageContext}) => {
  const {currentPage} = pageContext
  const previousPage = currentPage > 1 ? `/posts${currentPage - 1 === 1 ? '' : `/${currentPage - 1}`}` : null
  const nextPage = data.allMdx.pageInfo.hasNextPage ? `/posts/${currentPage + 1}` : null

  const posts = data.allMdx.edges.map(({node}) => {
    return (
      <Box my={4} key={node.id}>
        <PostSnippet post={node} />
      </Box>
    )
  })

  return (
    <Layout>
      <Box mb={[4, 4, 5, 5]}>
        <Heading as="h1" fontSize={7} mb={3}>
          posts
        </Heading>
        <Text ml={3} color="grays.700">
          Read 'em and weep...
        </Text>
      </Box>
      <Flex flexDirection="column" mb={5}>
        {posts}
        <CenteredBox width={['50%', '50%', '35%', '35%']} mt={5}>
          <Pagination previousPage={previousPage} nextPage={nextPage} />
        </CenteredBox>
      </Flex>
    </Layout>
  )
}

export const query = graphql`
  query ListPostsQuery($skip: Int, $limit: Int) {
    allMdx(sort: {order: DESC, fields: frontmatter___date}, limit: $limit, skip: $skip) {
      pageInfo {
        hasNextPage
      }
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

export default Posts
