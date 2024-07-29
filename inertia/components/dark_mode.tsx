import { useState, useEffect } from 'react'

export default function DarkMode() {
  const [dark, setDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme')
      return storedTheme === 'dark'
    }
    return false
  })

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
      document.documentElement.classList.toggle('dark', dark)
    }
  }, [dark])

  const darkModeHandler = () => {
    setDark((prevDark) => !prevDark)
  }

  return (
    <div className="bg-yellow-300">
      <button onClick={darkModeHandler}>{dark ? 'Light mode' : 'Dark mode'}</button>
    </div>
  )
}
