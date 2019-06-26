import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {Flex, Box, Heading, Text} from 'rebass'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const siteQuery = graphql`
  query SiteAuthorQuery {
    site {
      siteMetadata {
        author
      }
    }
  }
`
const About = () => {
  const result = useStaticQuery(siteQuery)
  return (
    <Layout>
      <SEO title="About" />
      <Box mb={[4, 4, 5, 5]}>
        <Heading as="h1" fontSize={7} mb={3}>
          about,
        </Heading>
        <Text ml={3} color="grays.700">
          'cuz narcissism reigns
        </Text>
        <Box mt={5}>
          <Text my={3}>What's a blog anyway? Let's anagram this:</Text>
          <Text my={3}>B - blog, it's a blog after</Text>
          <Text my={3}>L - log, what's a blog but a [b]log?</Text>
          <Text my={3}>O - OG, 'cuz blogs certainly are the Original Gangster</Text>
        </Box>
      </Box>
      <Flex flexDirection="column" mb={5}>
        {result.site.siteMetadata.author}
      </Flex>
    </Layout>
  )
}

export default About
