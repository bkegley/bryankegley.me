/** @jsx jsx */
import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import {jsx, Flex, Box} from 'theme-ui'
import Button from '../components/Button'

const ContactPage = () => {
  const [state, setState] = React.useState({})
  const handleChange = e => {
    setState({...state, [e.target.name]: e.target.value})
  }
  return (
    <Layout>
      <SEO title="Contact" />
      <div sx={{mb: [4, 4, 5, 5]}}>
        <h1 sx={{fontSize: 7, mb: 3}}>contact</h1>
        <Flex sx={{flexDirection: 'row', mt: 5, flexWrap: 'wrap'}}>
          <Box>
            <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/success">
              <input type="hidden" name="form-name" value="contact" />
              <p hidden>
                <label>
                  Don't fill this out
                  <input type="hidden" name="bot-field" onChange={handleChange} />
                </label>
              </p>
              <Box>
                <label>
                  Name
                  <input type="text" name="name" onChange={handleChange} />
                </label>
              </Box>
              <Box>
                <label>
                  Email
                  <input type="email" name="email" onChange={handleChange} />
                </label>
              </Box>
              <Box>
                <label>
                  Phone
                  <input type="phone" name="phone" onChange={handleChange} />
                </label>
              </Box>
              <Box>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Box>
            </form>
          </Box>
          <Box>
            <p sx={{my: 3}}>What's a blog anyway? Let's anagram this:</p>
            <p sx={{my: 3}}>B - blog, it's a blog after</p>
            <p sx={{my: 3}}>L - log, what's a blog but a [b]log?</p>
            <p sx={{my: 3}}>O - OG, 'cuz blogs certainly are the Original Gangster</p>
          </Box>
        </Flex>
      </div>
    </Layout>
  )
}

export default ContactPage
