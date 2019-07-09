/** @jsx jsx */
import {jsx, Box} from 'theme-ui'

const Badge = ({children}) => {
  return (
    <Box
      sx={{
        py: 0,
        px: 2,
        bg: 'primary',
        borderRadius: '5px',
        color: 'white',
        fontSize: 1,
        m: 1,
        display: 'inline-block',
      }}
    >
      {children}
    </Box>
  )
}

export default Badge
