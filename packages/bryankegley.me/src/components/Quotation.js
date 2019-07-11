/** @jsx jsx */
import {jsx} from 'theme-ui'

const Quotation = ({children}) => {
  return (
    <blockquote
      sx={{
        fontFamily: 'Aileron',
        fontWeight: 100,
        fontSize: [6, 6, '80px', '80px'],
        lineHeight: 1.15,
        textAlign: 'center',
      }}
    >
      {children}
    </blockquote>
  )
}

export default Quotation
