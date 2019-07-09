/** @jsx jsx */
import {jsx, Box} from 'theme-ui'

const Label = ({children}) => {
  return <Box sx={{textTransform: 'uppercase', fontSize: 2, opacity: 0.5}}>{children}</Box>
}

export default Label
