import React from 'react'
import {graphql, Link} from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import {Flex, Box, Heading, Text} from 'rebass'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import format from 'date-fns/format'

const Badge = styled(Text)`
  border-radius: 0.3rem;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const TitleContainer = styled(Flex)`
  border-bottom: 1px solid ${props => props.theme.colors.grays[300]};
`

const PostSeries = styled(Text)`
  text-transform: uppercase;
`

const PostSubtitle = styled(Text)``

const PostTemplate = props => {
  const {
    data: {mdx: post},
  } = props
  const {series, title, subtitle} = post.frontmatter
  return (
    <Layout>
      <SEO title={title} />
      <TitleContainer
        flexDirection={['column', 'column', 'row', 'row']}
        flexWrap="wrap"
        alignItems="center"
        justifyContent="flex-start"
        mb={[2, 2, 5]}
        pb={4}
      >
        <Flex flexDirection="column" flex={1} order={[2, 2, 1, 1]}>
          <PostSeries fontSize={2} color="primary">
            {series ? `[${series}]` : null}
          </PostSeries>
          <Heading as="h1" fontSize={6} color="primary">
            {title}
          </Heading>
          <Flex color="grays.700" mb={3} fontSize={1}>
            <Text mr={2}>{format(post.frontmatter.date, 'MMM D, YYYY')}</Text>
            <Text mr={2}>•</Text>
            <Text>{post.timeToRead} minute read</Text>
          </Flex>
          <PostSubtitle ml={3} color="grays.700">
            {subtitle}
          </PostSubtitle>
        </Flex>
      </TitleContainer>
      <Box>
        <MDXRenderer>{post.code.body}</MDXRenderer>
      </Box>
      <Flex>
        {post.frontmatter.tags.map(tag => {
          return (
            <StyledLink to={`/posts/tags/${tag}`}>
              <Badge bg="grays.900" px={2} py={1} color="grays.300" mx={2} fontSize={1}>
                {tag}
              </Badge>
            </StyledLink>
          )
        })}
      </Flex>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($id: String) {
    mdx(id: {eq: $id}) {
      id
      timeToRead
      frontmatter {
        title
        subtitle
        excerpt
        date
        tags
      }
      code {
        body
      }
    }
  }
`

export default PostTemplate
