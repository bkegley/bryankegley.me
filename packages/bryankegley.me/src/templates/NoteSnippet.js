/** @jsx jsx */
import {jsx, Flex, Box, Styled} from 'theme-ui'
import {Link} from 'gatsby'
import Badge from '../components/Badge'

const NoteSnippet = ({note}) => {
  return (
    <Flex sx={{flexDirection: 'column', alignItems: 'flex-start'}}>
      <Link sx={{textDecoration: 'none', color: 'inherit', ':hover': {color: 'primary'}}} to={note.fields.slug}>
        <Styled.h2>{note.frontmatter.title}</Styled.h2>
      </Link>
      <Box sx={{mb: 3}}>{note.frontmatter.summary}</Box>
      <Flex sx={{flexWrap: 'wrap'}}>
        {note.frontmatter.tags ? note.frontmatter.tags.map(tag => <Badge>{tag}</Badge>) : null}
      </Flex>
      <Box sx={{alignSelf: 'flex-end'}}>
        <Link sx={{textDecoration: 'none', color: 'primary'}} to={note.fields.slug}>
          Read more
        </Link>
      </Box>
    </Flex>
  )
}

export default NoteSnippet
