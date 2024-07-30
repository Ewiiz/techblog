import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [dark, setDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === 'dark') {
      setDark(true)
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', dark ? 'dark' : 'light')
      document.documentElement.classList.toggle('dark', dark)
    }
  }, [dark, mounted])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const darkModeHandler = (theme: boolean) => {
    setDark(theme)
  }

  return (
    <div>
      <div
        className={`flex items-center justify-between py-6 px-5 transition-colors duration-500 ${
          dark ? 'bg-dark text-white' : 'bg-white text-black'
        }`}
      >
        <span>YOUR LOGO</span>
        <Menu size={32} className="md:hidden" onClick={toggleMenu} />
        <ul className="hidden md:flex space-x-5 text-lg lg:space-x-12">
          <li>Blog</li>
          <li>Projects</li>
          <li>About</li>
          <li>Newsletter</li>
        </ul>
        <div className="hidden md:block">
          <div
            className={`flex px-4 py-2 space-x-4 rounded-full max-w-max transition-colors duration-500 ${
              dark ? 'bg-white text-black' : 'bg-dark text-white'
            }`}
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
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center space-y-6 transition-all duration-700 ease-in-out ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        } ${dark ? 'bg-dark text-white' : 'bg-white text-black'}`}
      >
        {isOpen && (
          <>
            <button onClick={toggleMenu} className="absolute top-6 right-6">
              <X size={32} />
            </button>
            <span className="text-2xl font-bold">Your Logo</span>
            <ul className="space-y-4 text-lg text-center">
              <li>Blog</li>
              <li>Projects</li>
              <li>About</li>
              <li>Newsletter</li>
            </ul>
            <div
              className={`flex px-4 py-2 space-x-4 rounded-full max-w-max transition-colors duration-500 ${
                dark ? 'bg-white text-black' : 'bg-dark text-white'
              }`}
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
          </>
        )}
      </div>
    </div>
  )
}
