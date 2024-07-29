import { useState, useEffect } from 'react'
import { Moon, Sun } from 'lucide-react'

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

  const darkModeHandler = (theme: boolean) => {
    setDark(theme)
  }

  return (
    <div
      className={`flex px-4 py-2 space-x-4 rounded-full max-w-max ${dark ? 'bg-white text-black' : 'bg-bg-dark text-white'}`}
    >
      <button
        onClick={() => darkModeHandler(false)}
        className={`${dark ? '' : 'text-yellow-400'} transition-colors duration-500 `}
      >
        <Sun size={24} />
      </button>
      <button
        onClick={() => darkModeHandler(true)}
        className={`${dark ? 'text-yellow-400' : ''} transition-colors duration-500`}
      >
        <Moon size={24} />
      </button>
    </div>
  )
}
