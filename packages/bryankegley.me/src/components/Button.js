/** @jsx jsx */
import {jsx} from 'theme-ui'

const Button = ({variant, children, sx = {}, ...props}) => {
  const sxProp = Object.assign(
    {
      color: variant === 'primary' ? 'white' : 'primary',
      bg: variant === 'primary' ? 'primary' : 'white',
      border: 'none',
      borderRadius: '5px',
      py: 2,
      px: 3,
      textTransform: 'uppercase',
    },
    sx,
  )
  return (
    <button sx={sxProp} {...props}>
      {children}
    </button>
  )
}

export default Button
