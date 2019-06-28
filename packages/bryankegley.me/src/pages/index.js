/** @jsx jsx */
import {graphql, Link} from 'gatsby'
import Image from 'gatsby-image'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import {jsx, Flex, Box} from 'theme-ui'
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
          <h1>i'm</h1>
          <h1>
            <span sx={{color: 'primary'}}>b</span>
            <span>ryan</span>
          </h1>
          <h1>
            <span sx={{color: 'primary'}}>k</span>
            <span>egley</span>
          </h1>
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
          <span>and i write</span>
          <br />
          <span sx={{color: 'primary'}}>software</span>
          <br />
          <span>to give coffee brands</span>
          <br />
          <span sx={{color: 'primary'}}>superpowers</span>
        </Box>
        <Box sx={{alignSelf: 'flex-start', fontSize: 3}}>
          <p>
            Coffee brands face unique challenges. Spanning continents and languages, coffee professionals are united by
            one thing: making all of coffee better. Creating a transparent, efficient, and effective coffee business
            with global impact isn't easy but I'm here to help.
          </p>
        </Box>
        <Box sx={{alignSelf: 'flex-start', fontSize: 3}}>
          <p>
            Why me? I've been there. I've turned on the lights at 5am only to turn them off again at close. I've
            scrutinized cost of goods and negotiated with vendors. I've built cafés, programs and lots of friendships.
            I'm a coffee professional at heart using software to make coffee better.
          </p>
          <p>From finca to drinka' I've done it all and I'm here to help.</p>
        </Box>
        <Box sx={{alignSelf: 'center', mt: 4}}>
          <Link to="/contact">
            <Button variant="primary" sx={{fontSize: 3}}>
              Let's Talk
            </Button>
          </Link>
        </Box>
      </Flex>
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
