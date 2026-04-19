'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

export const SECTIONS = [
  { label: 'Introduction', id: 'introduction' },
  // { label: 'About Me', id: 'about-me' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills & Tools', id: 'skills-and-tools' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
  { label: 'Stats', id: 'stats' },
]

type NavContextType = {
  active: string
  setActive: (id: string) => void
  goNext: () => void
  goPrev: () => void
  currentIndex: number
}

const NavContext = createContext<NavContextType | null>(null)

export function NavigationProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState('introduction')
  const currentIndex = SECTIONS.findIndex((s) => s.id === active)

  const goNext = () => {
    if (currentIndex < SECTIONS.length - 1) setActive(SECTIONS[currentIndex + 1].id)
  }

  const goPrev = () => {
    if (currentIndex > 0) setActive(SECTIONS[currentIndex - 1].id)
  }

  return (
    <NavContext.Provider value={{ active, setActive, goNext, goPrev, currentIndex }}>
      {children}
    </NavContext.Provider>
  )
}

export const useNav = () => {
  const ctx = useContext(NavContext)
  if (!ctx) throw new Error('useNav must be used within NavigationProvider')
  return ctx
}
