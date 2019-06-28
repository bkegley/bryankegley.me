import React from 'react'
import {ThemeProvider, Styled} from 'theme-ui'
import theme from './src/tokens/theme'
import {toTheme} from '@theme-ui/typography'

import 'typeface-lato'

export const wrapRootElement = ({element}) => {
  return (
    <ThemeProvider theme={theme}>
      <Styled.root>{element}</Styled.root>
    </ThemeProvider>
  )
}
