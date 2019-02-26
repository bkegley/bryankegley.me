import React from 'react'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import {Flex, Box, Heading, Text} from 'rebass'
import styled from 'styled-components'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PostMeta from './PostMeta'

const TitleContainer = styled(Flex)`
  border-bottom: 1px solid ${props => props.theme.colors.grays[300]};
`

const PostSeries = styled(Text)`
  text-transform: uppercase;
`

const PostSubtitle = styled(Text)``

const SideColumnWrapper = styled(Box)`
  min-width: 140px;
`

const PostTemplate = props => {
  const {
    data: {mdx: post},
  } = props
  const {series, title, subtitle, tags} = post.frontmatter
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
            [{series}]
          </PostSeries>
          <Heading as="h1" fontSize={6}>
            {title}
          </Heading>
          <PostSubtitle ml={3} color="grays.700">
            {subtitle}
          </PostSubtitle>
        </Flex>
      </TitleContainer>
      <Flex flexDirection="row" justifyContent="flex-start">
        <SideColumnWrapper mr={5}>
          <PostMeta post={post} />
        </SideColumnWrapper>
        <Box>
          <MDXRenderer>{post.code.body}</MDXRenderer>
        </Box>
        <SideColumnWrapper />
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
        series
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
