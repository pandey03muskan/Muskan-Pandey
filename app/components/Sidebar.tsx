'use client'

import { useNav, SECTIONS } from '../context/NavigationContext'

export default function Sidebar() {
  const { active, setActive } = useNav()

  return (
    <aside className="fixed top-16 left-0 h-[calc(100vh-4rem)] w-[220px] border-r border-gray-100 dark:border-white/10 bg-white dark:bg-gray-950 flex flex-col py-4 px-5">
      <p className="font-semibold text-gray-900 dark:text-white text-lg mb-4 px-2">
        Sections
      </p>
      <nav className="flex flex-col">
        {SECTIONS.map(({ label, id }) => (
          <button
            key={id}
            onClick={() => setActive(id)}
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
  )
}
