import React from 'react'

const useDarkTheme = initialValue => {
  const [isDarkMode, setIsDarkMode] = React.useState(() => {
    try {
      const localDarkMode = JSON.parse(window.localStorage.getItem('darkMode'))
      return localDarkMode
    } catch {
      return initialValue
    }
  })

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode)

  React.useLayoutEffect(() => {
    window.localStorage.setItem('darkMode', isDarkMode)
  }, [isDarkMode])

  return [isDarkMode, toggleDarkMode]
}

export default useDarkTheme
