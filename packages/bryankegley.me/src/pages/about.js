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
          about
        </Heading>
        <Text ml={3} color="grays.700">
          narcissism reigns
        </Text>
      </Box>
      <Flex flexDirection="column" mb={5}>
        {result.site.siteMetadata.author}
      </Flex>
    </Layout>
  )
}

export default About
