/** @jsx jsx */
import {jsx, Flex, Box, Styled} from 'theme-ui'

const CaseStudySection = ({children, title}) => {
  return (
    <Flex sx={{flexDirection: ['column', 'column', 'row', 'row'], mb: 4}}>
      <Box sx={{flex: 1}}>
        <Styled.h3 sx={{wordWrap: 'break-word'}}>{title}</Styled.h3>
      </Box>
      <Box sx={{flex: 3}}>{children}</Box>
    </Flex>
  )
}

export default CaseStudySection
