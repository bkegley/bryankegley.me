import React from 'react'
import PropTypes from 'prop-types'
import {graphql, useStaticQuery} from 'gatsby'
import {Flex, Box} from 'rebass'
import styled from 'styled-components'

import Header from './Header'
import Footer from './Footer'

const SiteWrapper = styled(Flex)`
  margin: auto;
  max-width: 1080px;
`
const Layout = ({children}) => {
  const data = useStaticQuery(layoutQuery)
  return (
    <SiteWrapper flexDirection="column">
      <Header siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </SiteWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

const layoutQuery = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Layout
