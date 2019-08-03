/** @jsx jsx */
import {graphql, Link} from 'gatsby'
import {Flex, Box, Styled, jsx} from 'theme-ui'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Pagination from '../components/Pagination'
import NoteSnippet from './NoteSnippet'

const Notes = ({data, pageContext}) => {
  const {currentPage} = pageContext
  const previousPage = currentPage > 1 ? `/notes${currentPage - 1 === 1 ? '' : `/${currentPage - 1}`}` : null
  const nextPage = data.allMdx.pageInfo.hasNextPage ? `/notes/${currentPage + 1}` : null

  return (
    <Layout>
      <SEO title="Notes" />
      <Box sx={{mb: [4, 4, 5, 5]}}>
        <Styled.h1 sx={{mb: 3}}>notes</Styled.h1>
      </Box>
      <Flex sx={{flexDirection: 'column', mb: 5}}>
        {data.allMdx.edges.map(({node: note}) => {
          return (
            <Box key={note.id} sx={{mb: 4}}>
              <NoteSnippet note={note} />
            </Box>
          )
        })}
        <Box sx={{width: ['50%', '50%', '35%', '35%'], mx: 'auto', mt: 5}}>
          <Pagination previousPage={previousPage} nextPage={nextPage} />
        </Box>
      </Flex>
    </Layout>
  )
}

export const query = graphql`
  query ListNotesQuery($skip: Int, $limit: Int) {
    allMdx(
      sort: {order: DESC, fields: frontmatter___date}
      limit: $limit
      skip: $skip
      filter: {fields: {sourceName: {eq: "notes"}}}
    ) {
      pageInfo {
        hasNextPage
      }
      edges {
        node {
          id
          timeToRead
          frontmatter {
            title
            summary
            date
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Notes
