/** @jsx jsx */
import {graphql, Link} from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import {jsx, Flex, Box, Styled} from 'theme-ui'
import Button from '../components/Button'

const IndexPage = props => {
  const {data} = props
  return (
    <Layout pathName={props['*']}>
      <SEO title="Home" keywords={[`blog`, `technology`, `react`, `javascript`]} />
      <Box
        sx={{
          backgroundColor: 'secondary',
          backgroundBlendMode: 'multiply',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            transform: 'translate(25%, -50%)',
            color: 'white',
            fontSize: 5,
            lineHeight: '1.45rem',
            letterSpacing: '.75rem',
          }}
        >
          <Styled.h1>i'm</Styled.h1>
          <Styled.h1>
            <span sx={{color: 'primary'}}>b</span>
            <span>ryan</span>
          </Styled.h1>
          <Styled.h1>
            <span sx={{color: 'primary'}}>k</span>
            <span>egley</span>
          </Styled.h1>
        </Box>
        <Image sx={{opacity: '.25'}} fluid={data.headerImage.childImageSharp.fluid} />
      </Box>

      <Flex
        sx={{
          flexDirection: 'column',
          mb: [4, 4, 5, 5],
          fontWeight: '300',
          mt: 4,
        }}
      >
        <Box sx={{mb: 4, fontSize: 5, alignSelf: 'center'}}>
          <span>and i'm a</span>
          <br />
          <span sx={{color: 'primary'}}>full-stack dev</span>
          <br />
          <span>living in</span>
          <br />
          <span sx={{color: 'primary'}}>Sioux Falls</span>
        </Box>
      </Flex>
      <Box sx={{textAlign: 'center', mt: 4}}>
        <Link to="/contact">
          <Button variant="primary" sx={{fontSize: 3}}>
            Let's Talk
          </Button>
        </Link>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  {
    headerImage: file(relativePath: {eq: "Headshot.png"}) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
