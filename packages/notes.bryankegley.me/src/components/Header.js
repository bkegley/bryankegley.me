import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import {Flex, Box, Heading} from 'rebass'
import styled from 'styled-components'
import Toggle from './ThemeToggle'

const HeaderWrapper = styled.header`
  border-bottom: 1px solid ${props => props.theme.colors.grays[300]};
`

const HeaderInner = styled(Flex)`
  width: 60rem;
  max-width: 90%;
  margin: auto;
`

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  text-transform: lowercase;
`

const Header = ({siteTitle = '', toggleDarkMode, darkMode}) => {
  return (
    <HeaderWrapper>
      <HeaderInner flexDirection="row" alignItems="center" justifyContent="space-between" flexWrap="wrap" py={3}>
        <Heading as="h1" fontSize={5}>
          <StyledLink to="/">{siteTitle}</StyledLink>
        </Heading>
        <Flex>
          <Box mx={2}>
            <StyledLink to="/posts">Posts</StyledLink>
          </Box>
          <Box mx={2}>
            <StyledLink to="/about">About</StyledLink>
          </Box>
          <Box mx={2}>
            <Toggle darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
              Theme
            </Toggle>
          </Box>
        </Flex>
      </HeaderInner>
    </HeaderWrapper>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
