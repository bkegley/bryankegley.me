/** @jsx jsx */
import {Link} from 'gatsby'
import {Flex, Box, jsx} from 'theme-ui'
import ArrowLeft from 'react-feather/dist/icons/arrow-left'
import ArrowRight from 'react-feather/dist/icons/arrow-right'

const arrowBoxStyles = {
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid black',
  borderRadius: '0.25rem',
  padding: '8px',
  ':hover': {
    borderColor: 'primary',
    color: 'primary',
  },
}

const Pagination = ({previousPage, nextPage}) => {
  return (
    <Flex sx={{alignItems: 'center', justifyContent: 'space-between'}}>
      {previousPage ? (
        <Flex sx={{flexDirection: 'row', alignItems: 'center'}}>
          <Link sx={{textDecoration: 'none', color: 'inherit'}} to={previousPage}>
            <Flex sx={arrowBoxStyles}>
              <ArrowLeft />
            </Flex>
          </Link>
        </Flex>
      ) : (
        <Box />
      )}
      {nextPage ? (
        <Flex>
          <Link sx={{textDecoration: 'none', color: 'inherit'}} to={nextPage}>
            <Flex sx={arrowBoxStyles}>
              <ArrowRight />
            </Flex>
          </Link>
        </Flex>
      ) : (
        <Box />
      )}
    </Flex>
  )
}

export default Pagination
