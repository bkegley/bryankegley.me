import React from 'react'
import {ThemeProvider, Styled} from 'theme-ui'
import theme from './src/tokens/theme'
import Prism from '@theme-ui/prism'

import 'typeface-lato'
import 'typeface-aileron'

const components = {
  pre: ({children}) => <>{children}</>,
  code: Prism,
}

export const wrapRootElement = ({element}) => {
  return (
    <ThemeProvider theme={theme} components={components}>
      <Styled.root>{element}</Styled.root>
    </ThemeProvider>
  )
}
