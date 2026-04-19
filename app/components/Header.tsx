'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Icon } from '@iconify/react'

export default function Header() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      setDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    if (next) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 dark:bg-black/20 border-b border-white/20 dark:border-white/10">
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 2rem', height: '4rem' }}>

        {/* LEFT: Name + Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <Link href="/" className="font-bold text-xl text-gray-900 dark:text-white tracking-tight">
            Muskan Pandey
          </Link>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <Link href="/" className="font-medium text-sm text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white pb-0.5">
              Home
            </Link>
            <a
              href="https://www.linkedin.com/in/muskan-pandey-36661a220/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Resume
            </a>
          </nav>
        </div>

        {/* RIGHT: Toggle + GitHub */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <button
            onClick={toggleDark}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-300 cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <Icon icon="lucide:sun" width="18" height="18" />
            ) : (
              <Icon icon="lucide:moon" width="18" height="18" />
            )}
          </button>

          <a
            href="https://github.com/pandey03muskan"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 transition-colors text-gray-700 dark:text-gray-300"
            aria-label="GitHub"
          >
            <Icon icon="mdi:github" width="22" height="22" />
          </a>
        </div>

      </div>
    </header>
  )
}
