/** @jsx jsx */
import PropTypes from 'prop-types'
import {graphql, useStaticQuery} from 'gatsby'
import {jsx, Flex, Box, Main} from 'theme-ui'

import 'typeface-noto-sans'
import 'typeface-noto-serif'

import Header from './Header'
import Footer from './Footer'
import useDarkMode from './useDarkMode'

const Layout = ({children}) => {
  const [darkMode, toggleDarkMode] = useDarkMode(true)
  const data = useStaticQuery(layoutQuery)

  return (
    <Box
      sx={{
        minHeight: '100vh',
        minWidth: '100vw',
        height: '100%',
        width: '100%',
        bg: 'white',
      }}
    >
      <Header siteTitle={data.site.siteMetadata.title} toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Flex
        sx={{
          margin: 'auto',
          width: '50rem',
          maxWidth: '90%',
          flexDirection: 'column',
        }}
      >
        <Main>{children}</Main>
        <footer>
          <Footer />
        </footer>
      </Flex>
    </Box>
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
