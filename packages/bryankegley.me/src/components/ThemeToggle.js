import React from 'react'
import {Box} from 'rebass'
import Sun from 'react-feather/dist/icons/sun'
import Moon from 'react-feather/dist/icons/moon'

const ThemeToggle = ({toggleDarkMode, darkMode}) => {
  return <Box onClick={toggleDarkMode}>{darkMode ? <Moon /> : <Sun />}</Box>
}

export default ThemeToggle
