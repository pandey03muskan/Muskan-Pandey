'use client'

import { Icon } from '@iconify/react'

function IntroductionSection() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Muskan Pandey</h1>
      <p className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-1">Software Development Engineer</p>
      <p className="text-xs text-gray-400 dark:text-gray-500 mb-6 flex items-center gap-1">
        <span className="text-gray-300 dark:text-gray-600">&lt;&gt;</span>
        dev by choice
        <span className="text-gray-300 dark:text-gray-600">&lt;/&gt;</span>
      </p>
      <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed max-w-2xl mb-8">
        Software Development Engineer building scalable web applications with Next.js, React, and TypeScript, with hands-on exposure to backend development in Golang. Focused on clean architecture, performant systems, and AI-driven solutions like RAG workflows.
      </p>

      <div className="flex items-center gap-4">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-2 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-xs font-medium transition-colors"
        >
          Get Resume
          <Icon icon="lucide:external-link" width="12" height="12" />
        </a>

        <a
          href="mailto:pandey03muskan@gmail.com"
          className="flex items-center gap-2 px-2 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 text-xs font-medium transition-colors"
        >
          <Icon icon="lucide:mail" width="12" height="12" />
          Send Mail
        </a>
      </div>
    </div>
  )
}
export default IntroductionSection;