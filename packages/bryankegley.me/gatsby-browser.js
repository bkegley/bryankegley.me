import React from 'react'
import {ThemeProvider, Styled} from 'theme-ui'
import theme from './src/tokens/theme'

import 'typeface-lato'
import 'typeface-aileron'

export const wrapRootElement = ({element}) => {
  return (
    <ThemeProvider theme={theme}>
      <Styled.root>{element}</Styled.root>
    </ThemeProvider>
  )
}
