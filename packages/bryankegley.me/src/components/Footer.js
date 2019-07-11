/** @jsx jsx */
import {Link} from 'gatsby'
import {jsx, Flex, Box} from 'theme-ui'
import Twitter from 'react-feather/dist/icons/twitter'
import GitHub from 'react-feather/dist/icons/github'
import LinkedIn from 'react-feather/dist/icons/linkedin'

const Footer = () => {
  return (
    <Flex sx={{flexDirection: 'column', alignItems: 'center', py: 6}}>
      <Flex
        sx={{
          marginLeft: 'auto',
          marginRight: 'auto',
          width: ['100%', '100%', '75%', '75%'],
          alignItems: 'center',
          justifyContent: 'center',
          mb: 4,
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
      <Flex sx={{flexDirection: 'row', alignItems: 'center'}}>
        <Box sx={{mr: 4}}>
          <a
            href="https://mobile.twitter.com/bkegley"
            target="_blank"
            rel="noopener noreferrer"
            sx={{':hover': {color: 'primary'}}}
          >
            <Twitter />
          </a>
        </Box>
        <Box sx={{mr: 4}}>
          <a
            href="https://github.com/bkegley"
            target="_blank"
            rel="noopener noreferrer"
            sx={{':hover': {color: 'primary'}}}
          >
            <GitHub />
          </a>
        </Box>
        <Box>
          <a
            href="https://www.linkedin.com/in/bryan-kegley-120649b5/"
            target="_blank"
            rel="noopener noreferrer"
            x={{':hover': {color: 'primary'}}}
          >
            <LinkedIn />
          </a>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Footer
