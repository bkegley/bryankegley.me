import React from 'react'
import {Link} from 'gatsby'
import {Flex, Box, Heading, Text} from 'rebass'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;

  :hover {
    text-decoration: underline ${props => props.theme.colors.primary};
  }
`

const PostSnippet = ({post}) => {
  return (
    <Flex flexDirection="column" alignItems="flex-start">
      <StyledLink to={post.fields.slug}>
        <Heading color="primary">{post.frontmatter.title}</Heading>
      </StyledLink>
      <Box my={2}>
        <Text fontSize={1} color="grays.700">
          {post.frontmatter.date} • {post.timeToRead} min read
        </Text>
      </Box>
      <Box>{post.frontmatter.excerpt}</Box>
    </Flex>
  )
}

export default PostSnippet
