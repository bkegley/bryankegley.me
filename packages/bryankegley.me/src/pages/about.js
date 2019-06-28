/** @jsx jsx */
import {useStaticQuery, graphql} from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import {jsx, Flex, Box} from 'theme-ui'

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
      <Box sx={{mb: [4, 4, 5, 5]}}>
        <h1 sx={{fontSize: 7, mb: 3}}>about</h1>
        <div sx={{ml: 3}}>'cuz narcissism reigns</div>
        <Box mt={5}>
          <div sx={{my: 3}}>What's a blog anyway? Let's anagram this:</div>
          <div sx={{my: 3}}>B - blog, it's a blog after</div>
          <div sx={{my: 3}}>L - log, what's a blog but a [b]log?</div>
          <div sx={{my: 3}}>O - OG, 'cuz blogs certainly are the Original Gangster</div>
        </Box>
      </Box>
      <Flex flexDirection="column" mb={5}>
        {result.site.siteMetadata.author}
      </Flex>
    </Layout>
  )
}

export default About
