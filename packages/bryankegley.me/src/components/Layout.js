import React from 'react'
import PropTypes from 'prop-types'
import {graphql, useStaticQuery} from 'gatsby'
import {Flex, Box} from 'rebass'
import styled, {ThemeProvider} from 'styled-components'
import theme from '../tokens/theme'
import CreateGlobalStyle from '../tokens/globals'

import 'typeface-noto-sans'
import 'typeface-noto-serif'

import Header from './Header'
import Footer from './Footer'
import useDarkMode from './useDarkMode'

const SiteWrapper = styled(Box)`
  min-height: 100vh;
  min-width: 100vw;
  height: 100%;
  width: 100%;
`

const LayoutWrapper = styled(Flex)`
  margin: auto;
  width: 60rem;
  max-width: 90%;
`

const Main = styled.main`
  margin-top: 7rem;
`

const Layout = ({children, pathName}) => {
  const [darkMode, toggleDarkMode] = useDarkMode(true)
  const data = useStaticQuery(layoutQuery)

  return (
    <ThemeProvider theme={theme(darkMode)}>
      <>
        <CreateGlobalStyle />
        <SiteWrapper bg="white">
          <Header siteTitle={data.site.siteMetadata.title} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <LayoutWrapper flexDirection="column">
            <Main>{children}</Main>
            <footer>
              <Footer />
            </footer>
          </LayoutWrapper>
        </SiteWrapper>
      </>
    </ThemeProvider>
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
