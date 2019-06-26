import React from 'react'
import {Link} from 'gatsby'
import {Flex, Box} from 'rebass'
import styled from 'styled-components'
import ArrowLeft from 'react-feather/dist/icons/arrow-left'
import ArrowRight from 'react-feather/dist/icons/arrow-right'

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const ArrowBox = styled(Flex)`
  border: 2px solid ${props => props.theme.colors.black};
  border-radius: 0.25rem;
  padding: 8px;
  :hover {
    border-color: ${props => props.theme.colors.primary}
    color: ${props => props.theme.colors.primary};
  }
`

const Pagination = ({previousPage, nextPage}) => {
  return (
    <Flex flexDirection="row" alignItems="center" justifyContent="space-between">
      {previousPage ? (
        <Flex flexDirection="row" alignItems="center">
          <StyledLink to={previousPage}>
            <ArrowBox alignItems="center" justifyContent="center">
              <ArrowLeft />
            </ArrowBox>
          </StyledLink>
        </Flex>
      ) : (
        <Box />
      )}
      {nextPage ? (
        <Flex flexDirection="row">
          <StyledLink to={nextPage}>
            <ArrowBox alignItems="center" justifyContent="center">
              <ArrowRight />
            </ArrowBox>
          </StyledLink>
        </Flex>
      ) : (
        <Box />
      )}
    </Flex>
  )
}

export default Pagination
