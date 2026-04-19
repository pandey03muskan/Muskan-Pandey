'use client'

import { useNav, SECTIONS } from '../context/NavigationContext'

export default function Sidebar() {
  const { active, setActive, mobileMenuOpen, closeMobileMenu } = useNav()

  const handleClick = (id: string) => {
    setActive(id)
    closeMobileMenu()
  }

  return (
    <>
      {/* Mobile backdrop */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30 md:hidden"
          onClick={closeMobileMenu}
        />
      )}

      <aside className={`
        fixed left-0 z-40 w-[220px]
        border-r border-gray-100 dark:border-white/10
        bg-white dark:bg-gray-950
        flex flex-col py-4 px-5
        transition-transform duration-300 ease-in-out
        top-16 h-[calc(100vh-4rem)] md:translate-x-0
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <p className="font-semibold text-gray-900 dark:text-white text-lg mb-4 px-2">
          Sections
        </p>
        <nav className="flex flex-col">
          {SECTIONS.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => handleClick(id)}
              className={`text-left px-4 py-2 rounded-lg text-sm w-full transition-colors cursor-pointer
                ${active === id
                  ? 'bg-gray-100 dark:bg-gray-800 font-medium text-gray-900 dark:text-white'
                  : 'font-normal text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white'
                }`}
            >
              {label}
            </button>
          ))}
        </nav>
      </aside>
    </>
  )
}
