import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'gatsby'
import {Flex, Heading, Text} from 'rebass'
import styled from 'styled-components'

const MetaTitle = styled(Heading)`
  text-transform: uppercase;
`

const MetaContainer = styled(Flex)`
  border-bottom: 1px solid ${props => props.theme.colors.grays[300]};
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const RelatedPosts = ({post}) => {
  console.log({post})
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="flex-end" width="100%">
      <MetaContainer flexDirection="column" my={3} alignItems="flex-end" width="100%" pb={3}>
        <MetaTitle as="h4" fontSize={2} color="grays.700">
          Date
        </MetaTitle>
        <Text color="grays.900" fontSize={2}>
          {post.frontmatter.date}
        </Text>
      </MetaContainer>
      <MetaContainer flexDirection="column" my={3} alignItems="flex-end" width="100%" pb={3}>
        <MetaTitle as="h4" fontSize={2} color="grays.700">
          Reading Time
        </MetaTitle>
        <Text color="grays.900" fontSize={2}>
          {`${post.timeToRead} min`}
        </Text>
      </MetaContainer>
      <MetaContainer flexDirection="column" my={3} alignItems="flex-end" width="100%" pb={3}>
        <MetaTitle as="h4" fontSize={2} color="grays.700">
          Tags
        </MetaTitle>
        {post.frontmatter.tags &&
          post.frontmatter.tags.map(tag => {
            return (
              <StyledLink to={`/posts/tags/${tag}`} key={tag}>
                <Text color="grays.900" fontSize={2}>
                  {tag}
                </Text>
              </StyledLink>
            )
          })}
      </MetaContainer>
    </Flex>
  )
}

RelatedPosts.propTypes = {
  post: PropTypes.object.isRequired,
}

export default RelatedPosts
