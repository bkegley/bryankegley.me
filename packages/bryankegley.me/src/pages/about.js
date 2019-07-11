/** @jsx jsx */
import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import {jsx, Styled, Flex, Box} from 'theme-ui'
import Label from '../components/Label'

const Meta = () => {
  return (
    <>
      <Box sx={{mb: 4}}>
        <Box sx={{mb: 1}}>
          <Label>Currently</Label>
        </Box>
        <Box sx={{color: 'primary', fontSize: 4}}>on the job hunt</Box>
      </Box>
      <Box sx={{my: 4}}>
        <Box sx={{mb: 1}}>
          <Label>Reading</Label>
        </Box>
        <Box sx={{color: 'primary', fontSize: 4}}>Atomic Habits - James Clear</Box>
      </Box>
    </>
  )
}

const About = () => {
  return (
    <Layout>
      <SEO title="About" />
      <Box sx={{mb: [4, 4, 5, 5]}}>
        <Styled.h1 sx={{fontSize: 7, mb: 5}}>Hi there,</Styled.h1>
        <Flex sx={{flexDirection: ['column', 'column', 'row', 'row'], mb: [4, 4, 5, 5]}}>
          <Box sx={{flex: 3, mr: [0, 0, 5, 5], mb: [2, 2, 5, 5]}}>
            <Box
              sx={{
                fontSize: [4, 4, 5, 5],
                fontWeight: 400,
                fontFamily: 'Aileron',
                letterSpacing: 1.25,
              }}
            >
              My name is Bryan Kegley. I'm a full-stack web developer based in Sioux Falls, SD. My unique background in
              leading people and organizations enables me to write software that meets real business and human needs.
              Currently, you'll find me hacking around in Node, GraphQL and React.
            </Box>
          </Box>
          <Box sx={{flex: 1}}>
            <Meta />
          </Box>
        </Flex>
        <Box mt={5}>
          <Styled.h3>My Background</Styled.h3>
          <p>
            If you're here, then skimming those bigger words up there must not have satisfied you. Welcome then, to the
            curious occupational upbringing of Bryan Kegley. Prepare for some forks in the road.
          </p>
          <p>
            My love (let's be honest, addiction) for problem-solving was nearly innate but grew to full strength during
            my time studying philosophy in college. Encountered with the world's most timeless problems and esoteric
            vocabulary, I dove head first into the wild world of philosophy and became fascinated with thinking and
            solving along with history's greatest minds.
          </p>
          <p>
            After school, I took a position as interim pastor of a small, rural church going through a difficult
            transition. Here, I learned how to translate lofty ideas into practical encouragments. Here, I learned that
            Kierkegaard both mattered and could be comprehended by farmers and cashiers when communicated with empathy.
            This time of my life proved to be highly valuable as I learned the practical, rubber-on-the-road skills of
            compassion and care in communicating.
          </p>
          <p>
            The next five years I spent leading a specialty coffeee roaster/retailer as CEO. Like a good German
            philosophy lover, I recognized the influence language has on culture. We often assume that language is
            passive, just describing the world around us, but my years leading taught me that language is creative,
            forming reality and perception. Faced with difficulties, clear and concise language helped a large team
            navigate, not only in the moment, but to use that rudder to navigate in years to come. Of all the things
            about these years that make me smile, my heart sings the most when I hear defining cultural language used by
            employees that I didn't have direct contact with.
          </p>
          <p>
            It was during these years that I grew curious about coding to the point of devloping (puns...) a knack for
            finding ways to integrate (more puns...) code into our business operations. Automating accounting, lead
            generation, order fulfillment, and sales reporting solved real business problems but (perhaps wrongly)
            solved my need to code.
          </p>
        </Box>
      </Box>
    </Layout>
  )
}

export default About
