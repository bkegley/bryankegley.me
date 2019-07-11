/** @jsx jsx */
import {graphql, Link} from 'gatsby'
import {jsx, Styled, Flex, Box} from 'theme-ui'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Badge from '../components/Badge'
import Label from '../components/Label'

const CaseStudySnippet = ({study}) => {
  console.log({study})
  return (
    <Flex sx={{flexDirection: 'column', alignItems: 'flex-start'}}>
      <Styled.h2>{study.frontmatter.title}</Styled.h2>
      <Flex
        sx={{
          flexDirection: ['column', 'column', 'row', 'row'],
          mb: 4,
          alignItems: ['flex-start', 'flex-start', 'center', 'center'],
        }}
      >
        <Box sx={{mr: 2}}>
          <Label>Organization</Label>
        </Box>
        <Box sx={{color: 'primary', fontSize: 4}}>{study.frontmatter.organization}</Box>
      </Flex>
      <Box sx={{mb: 3}}>{study.frontmatter.summary}</Box>
      <Flex sx={{flexWrap: 'wrap'}}>
        {study.frontmatter.tags ? study.frontmatter.tags.split(',').map(tag => <Badge>{tag}</Badge>) : null}
      </Flex>
      <Box sx={{alignSelf: 'flex-end'}}>
        <Link sx={{textDecoration: 'none', color: 'primary'}} to={study.fields.slug}>
          Read more
        </Link>
      </Box>
    </Flex>
  )
}

const CaseStudies = ({data}) => {
  return (
    <Layout>
      <SEO title="Case Studies" />
      <Styled.h1>case studies</Styled.h1>
      <Flex sx={{flexDirection: 'column', mb: 5}}>
        {data.allMdx.edges.map(({node: study}) => {
          return (
            <Box key={study.id} sx={{mb: 4}}>
              <CaseStudySnippet study={study} />
            </Box>
          )
        })}
      </Flex>
    </Layout>
  )
}

export const query = graphql`
  query ListCaseStudiesQuery($skip: Int, $limit: Int) {
    allMdx(sort: {order: DESC, fields: frontmatter___order}, limit: $limit, skip: $skip) {
      pageInfo {
        hasNextPage
      }
      edges {
        node {
          id
          excerpt
          timeToRead
          frontmatter {
            title
            organization
            summary
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default CaseStudies
