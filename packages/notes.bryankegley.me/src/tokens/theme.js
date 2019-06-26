import breakpoints from './breakpoints'
import cards from './cards'
import colors from './colors'
import fonts from './fonts'
import fontSizes from './fontSizes'
import space from './space'

const theme = darkMode => ({
  breakpoints,
  cards,
  colors: colors(darkMode),
  fonts,
  fontSizes,
  space,
})

export default theme
