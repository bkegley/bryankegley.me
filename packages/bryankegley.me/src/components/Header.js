import {Link} from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import {Box, Heading} from 'rebass'
import styled from 'styled-components'

const HeaderWrapper = styled.header`
  background: rebeccapurple;
  margin-bottom: 1.45rem;
`

const HeaderInner = styled(Box)`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const StyledHeading = styled(Heading)`
  margin: 0;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = ({siteTitle = ''}) => (
  <HeaderWrapper>
    <HeaderInner>
      <StyledHeading as="h1" fontSize={5}>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </StyledHeading>
    </HeaderInner>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
