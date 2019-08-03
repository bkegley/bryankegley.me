/** @jsx jsx */
import {graphql} from 'gatsby'
import {jsx, Flex, Box, Styled} from 'theme-ui'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import NoteSnippet from './NoteSnippet'

const TagTemplate = ({data, pageContext}) => {
  return (
    <Layout>
      <SEO title="Posts" />
      <Box sx={{mb: [4, 4, 5, 5]}}>
        <Styled.h1 sx={{mb: 3}}>{`tag: ${pageContext.tag}`},</Styled.h1>
      </Box>
      <Flex sx={{flexDirection: 'column', mb: 5}}>
        {data.allMdx.edges.map(({node: note}) => {
          return (
            <Box key={note.id} sx={{mb: 4}}>
              <NoteSnippet note={note} />
            </Box>
          )
        })}
      </Flex>
    </Layout>
  )
}

export const query = graphql`
  query TagQuery($tag: [String]) {
    allMdx(sort: {order: DESC, fields: frontmatter___date}, filter: {frontmatter: {tags: {in: $tag}}}) {
      edges {
        node {
          ...NoteFragment
          fields {
            slug
          }
        }
      }
    }
  }
`

export default TagTemplate
