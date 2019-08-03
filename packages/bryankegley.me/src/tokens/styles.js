import nightOwl from '@theme-ui/prism/presets/night-owl.json'
const styles = {
  root: {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    height: '100%',
    width: '100%',
    fontFamily: 'Lato',
    fontSize: 2,
    lineHeight: 1.65,
  },
  h1: {
    fontFamily: 'Aileron',
    fontWeight: 700,
    fontSize: [5, 6, '80px', '100px'],
  },
  h2: {
    fontFamily: 'Aileron',
    fontWeight: 100,
    fontSize: [6, 6, 7, 7],
  },
  h3: {
    fontFamily: 'Lato',
    fontWeight: 400,
    fontSize: 5,
    color: 'primary',
  },
  pre: {
    padding: 3,
    ...nightOwl,
  },
}

export default styles
