/** @jsx jsx */
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import {jsx, Flex, Box} from 'theme-ui'
import Button from '../components/Button'

const inputStyles = {
  px: 3,
  py: 2,
  fontSize: 2,
  boxShadow: 'none',
  width: '100%',
  outline: '0px',
  resize: 'none',
  boxSizing: 'border-box',
  border: '1px solid lightgrey',
  ':focus': {
    borderColor: 'primary',
  },
}

const ContactPage = () => {
  return (
    <Layout>
      <SEO title="Contact" />
      <div sx={{width: '100%', mb: [4, 4, 5, 5]}}>
        <h1 sx={{fontSize: 7, mb: 3}}>contact</h1>
        <form sx={{flexDirection: 'column', alignItems: 'center', mt: 5, flexWrap: 'wrap'}}>
          <Box sx={{flex: 1, mb: 3}}>
            <p>I'd love to chat. Drop your info here and I'll be in touch shortly.</p>
          </Box>
          <Box sx={{flex: 1}}>
            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don't fill this out
                  <input type="hidden" name="bot-field" />
                </label>
              </p>
              <Flex sx={{flexDirection: 'column', alignItems: 'center'}}>
                <Flex sx={{flexDirection: ['column', 'column', 'row', 'row'], width: '100%'}}>
                  <Box sx={{mr: [0, 0, 4, 4], flex: 1}}>
                    <label htmlFor="firstName" />
                    <input sx={inputStyles} type="text" name="firstName" placeholder="First Name" />
                  </Box>
                  <Box sx={{flex: 1, my: [3, 3, 0, 0], ml: [0, 0, 4, 4]}}>
                    <label htmlFor="lastName">
                      <input sx={inputStyles} type="text" name="lastName" placeholder="Last Name" />
                    </label>
                  </Box>
                </Flex>
                <Box sx={{width: '100%', my: 3}}>
                  <label htmlFor="email" />
                  <input sx={inputStyles} type="email" name="email" placeholder="Email" />
                </Box>
                <Box sx={{width: '100%', my: 3}}>
                  <label htmlFor="phone" />
                  <input sx={inputStyles} type="phone" name="phone" placeholder="Phone" />
                </Box>
                <Box sx={{width: '100%', my: 3}}>
                  <label htmlFor="message" />
                  <textarea sx={inputStyles} rows={8} type="text" name="message" placeholder="Message" />
                </Box>
                <Box sx={{alignSelf: 'flex-end'}}>
                  <Button variant="primary" type="submit" sx={{fontSize: 2}}>
                    Submit
                  </Button>
                </Box>
              </Flex>
            </form>
          </Box>
        </form>
      </div>
    </Layout>
  )
}

export default ContactPage
