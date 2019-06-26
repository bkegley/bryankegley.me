import React from 'react'
import {ThemeProvider} from 'styled-components'
import theme from './src/tokens/theme'
import CreateGlobalStyle from './src/tokens/globals'

import 'typeface-noto-sans'
import 'typeface-noto-serif'

export const wrapRootElement = ({element}) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <CreateGlobalStyle />
        {element}
      </>
    </ThemeProvider>
  )
}
