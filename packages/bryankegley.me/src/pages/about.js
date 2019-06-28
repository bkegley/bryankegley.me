/** @jsx jsx */
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import {jsx, Flex, Box} from 'theme-ui'

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Box sx={{mb: [4, 4, 5, 5]}}>
        <h1 sx={{fontSize: 7, mb: 5}}>about</h1>
        <Box mt={5}>
          <p>Hi! My name is Bryan Kegley. Nice to meet you.</p>
          <p>For the last 5 years I was the CEO of Coffea Roasterie, a roaster/retailer located in Sioux Falls, SD.</p>
        </Box>
      </Box>
    </Layout>
  )
}

export default About
