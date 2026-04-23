'use client'

const skills = [
  {
    category: 'Languages',
    items: ['JavaScript (ES6+)', 'TypeScript', 'Golang', 'Python'],
  },
  {
    category: 'Frontend',
    items: ['React.js', 'Next.js', 'Redux', 'Material-UI', 'Responsive UI'],
  },
  {
    category: 'Backend & APIs',
    items: ['RESTful APIs', 'Auth & Token Management'],
  },
  {
    category: 'Architecture & Concepts',
    items: ['Component-Based Architecture', 'State Management', 'Clean Code Practices', 'Performance Optimization'],
  },
  {
    category: 'Tools & Version Control',
    items: ['Git', 'GitHub', 'Vercel'],
  },
]

export default function SkillsSection() {
  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Skills &amp; Tools</h2>
      <p className="text-sm text-gray-400 dark:text-gray-500 mb-10">The stack I reach for.</p>

      <div className="flex flex-col divide-y divide-gray-100 dark:divide-gray-800">
        {skills.map(({ category, items }) => (
          <div key={category} className="flex flex-col md:flex-row gap-2 md:gap-8 py-3 items-start">
            <span className="w-full md:w-44 shrink-0 text-xs font-medium uppercase tracking-widest text-gray-400 dark:text-gray-500 md:pt-1">
              {category}
            </span>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1 text-xs rounded-full bg-gray-50 dark:bg-gray-800/60 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
