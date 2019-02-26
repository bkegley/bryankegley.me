import React from 'react'
import {graphql} from 'gatsby'
import {Flex, Box, Heading, Text} from 'rebass'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PostList from '../components/PostList'

const TagTemplate = ({data, pageContext}) => {
  console.log({data})
  return (
    <Layout>
      <SEO title="Posts" />
      <Box mb={[4, 4, 5, 5]}>
        <Heading as="h1" fontSize={7} mb={3}>
          {`tag: ${pageContext.tag}`},
        </Heading>
        <Text ml={3} color="grays.700">
          gotta' catch 'em all
        </Text>
      </Box>
      <Flex flexDirection="column" mb={5}>
        <PostList postEdges={data.allMdx.edges} />
      </Flex>
    </Layout>
  )
}

export const query = graphql`
  query TagQuery($tag: [String]) {
    allMdx(sort: {order: DESC, fields: frontmatter___date}, filter: {frontmatter: {tags: {in: $tag}}}) {
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            subtitle
            series
            excerpt
            date
            tags
          }
          fields {
            slug
          }
          code {
            body
          }
        }
      }
    }
  }
`

export default TagTemplate
