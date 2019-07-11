/** @jsx jsx */
import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import {jsx, Flex, Box} from 'theme-ui'

const StyledLink = ({children, to}) => {
  return (
    <Link to={to} sx={{color: 'inherit', textDecoration: 'none', textTransform: 'lowercase'}}>
      {children}
    </Link>
  )
}

const Header = ({siteTitle = '', toggleDarkMode, darkMode}) => {
  return (
    <Box>
      <Flex
        sx={{
          width: '60rem',
          maxWidth: '90%',
          margin: 'auto',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          py: 3,
        }}
      >
        <h1 sx={{fontSize: 5, color: 'primary', my: 1}}>
          <StyledLink to="/">{siteTitle}</StyledLink>
        </h1>
        <Flex>
          <Box sx={{mx: 2}}>
            <StyledLink to="/about">about</StyledLink>
          </Box>
          <Box sx={{mx: 2}}>
            <StyledLink to="/studies">work</StyledLink>
          </Box>
          {/* <Box sx={{mx: 2}}>
            <StyledLink to="/blog">blog</StyledLink>
          </Box> */}
          <Box sx={{mx: 2}}>
            <StyledLink to="/contact">contact</StyledLink>
          </Box>
        </Flex>
      </Flex>
    </Box>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
