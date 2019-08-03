/** @jsx jsx */
import React from 'react'
import MDXRenderer from 'gatsby-plugin-mdx/mdx-renderer'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import {Styled, Flex, Box, jsx} from 'theme-ui'
import Label from '../components/Label'
import Badge from '../components/Badge'
import ChevronDown from 'react-feather/dist/icons/chevron-down'
import ChevronUp from 'react-feather/dist/icons/chevron-up'

const Meta = ({data}) => {
  return (
    <>
      <Box sx={{mb: 4}}>
        <Box sx={{mb: 1}}>
          <Label>Organization</Label>
        </Box>
        <Box sx={{color: 'primary', fontSize: 4}}>{data.mdx.frontmatter.organization}</Box>
      </Box>
      <Box sx={{my: 4}}>
        <Box sx={{mb: 1}}>
          <Label>Technologies</Label>
        </Box>
        <Box>
          {data.mdx.frontmatter.tags.map(tag => {
            return <Badge key={tag}>{tag}</Badge>
          })}
        </Box>
      </Box>
    </>
  )
}

const CaseStudy = ({data}) => {
  const [showMeta, setShowMeta] = React.useState(false)
  return (
    <Layout>
      <Styled.h1>{data.mdx.frontmatter.title}</Styled.h1>
      <Flex sx={{flexDirection: ['column', 'column', 'row', 'row'], mb: [4, 4, 5, 5]}}>
        <Box sx={{flex: 1, order: [1, 1, 0, 0], display: ['none', 'none', 'block', 'block']}}>
          <Meta data={data} />
        </Box>
        <Box sx={{flex: 1, order: [1, 1, 0, 0], display: ['block', 'block', 'none', 'none']}}>
          <Box sx={{my: 3}}>
            <button sx={{bg: 'none', border: 'none', color: 'primary'}} onClick={() => setShowMeta(old => !old)}>
              <Flex sx={{flexDirection: 'row', alignItems: 'center'}}>
                <span sx={{textTransform: 'uppercase', mr: 1}}>{showMeta ? 'Hide' : 'Show'} Info</span>
                {showMeta ? <ChevronUp /> : <ChevronDown />}
              </Flex>
            </button>
          </Box>
          <Box>{showMeta ? <Meta data={data} /> : null}</Box>
        </Box>
        <Box sx={{flex: 3, order: [0, 0, 1, 1], ml: [0, 0, 4, 4], mb: [2, 2, 5, 5]}}>
          <Box
            sx={{
              fontSize: [4, 4, 5, 5],
              fontWeight: 400,
              fontFamily: 'Aileron',
              letterSpacing: 1.25,
            }}
          >
            {data.mdx.frontmatter.summary}
          </Box>
        </Box>
      </Flex>
      <Box sx={{textAlign: 'center'}}>
        <Styled.h2 sx={{textTransform: 'uppercase'}}>Case Study</Styled.h2>
      </Box>
      <Box>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Box>
    </Layout>
  )
}

export const query = graphql`
  query CaseStudyQuery($id: String) {
    mdx(id: {eq: $id}) {
      ...CaseStudyFragment
    }
  }
`

export default CaseStudy
