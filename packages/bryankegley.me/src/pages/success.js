/** @jsx jsx */
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import {jsx, Flex} from 'theme-ui'

const SuccessPage = () => {
  return (
    <Layout>
      <SEO title="Success!" />
      <Flex sx={{flexDirection: 'column', alignItems: 'center'}}>
        <div sx={{mb: [4, 4, 5, 5]}}>
          <h1 sx={{fontSize: 7, mb: 3}}>Success!</h1>
          <p>Thank you for reaching out! We'll be in touch shortly.</p>
        </div>
      </Flex>
    </Layout>
  )
}

export default SuccessPage
