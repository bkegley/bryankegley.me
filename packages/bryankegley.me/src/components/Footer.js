/** @jsx jsx */
import {Link} from 'gatsby'
import {jsx, Flex} from 'theme-ui'

const Footer = () => {
  return (
    <Flex
      sx={{
        display: 'flex',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: ['100%', '100%', '75%', '75%'],
        alignItems: 'center',
        justifyContent: 'center',
        py: 6,
      }}
    >
      <Link
        to="/"
        sx={{
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
        <div>
          - <span sx={{color: 'primary'}}>bk</span> -
        </div>
      </Link>
    </Flex>
  )
}

export default Footer
