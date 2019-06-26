import React from 'react'
import {Link} from 'gatsby'
import {Flex, Text} from 'rebass'
import GitHub from 'react-feather/dist/icons/github'
import Twitter from 'react-feather/dist/icons/twitter'
import styled from 'styled-components'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const LinkBox = styled(Flex)`
  border: 2px solid ${props => props.theme.colors.black};
  border-radius: 0.25rem;
  padding: 8px;
  :hover {
    border-color: ${props => props.theme.colors.primary}
    color: ${props => props.theme.colors.primary};
  }
`

const FooterWrapper = styled(Flex)`
  margin-left: auto;
  margin-right: auto;
`

const Footer = () => {
  return (
    <FooterWrapper width={['100%', '100%', '75%', '75%']} alignItems="center" justifyContent="center" py={6}>
      <StyledLink to="/">
        <Text>- bk</Text>
      </StyledLink>
    </FooterWrapper>
  )
}

export default Footer
