/** @jsx jsx */
import {jsx, Box} from 'theme-ui'

const Quotation = ({children}) => {
  return (
    <Box sx={{position: 'relative', fontStyle: 'italic'}}>
      <span sx={{position: 'absolute', fontSize: 128, opacity: 0.25}}>"</span>
      <Box sx={{padding: 4, color: 'primary'}}>{children}</Box>
    </Box>
  )
}

export default Quotation
