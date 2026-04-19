'use client'

const experiences = [
  {
    role: 'Software Development Engineer – I',
    company: 'Initializ Labs',
    period: 'July 2025 – Present',
    current: true,
    points: [
      'Developed frontend modules for agentic workflow implementation using Next.js and MUI.',
      'Led frontend setup for a new client CRM project with agentic workflows, implementing role-based access, dynamic font sizing, dark/light mode, and theme configuration.',
      'Implemented Auth0 authentication from the frontend for secure user login and session management.',
    ],
  },
  {
    role: 'Software Development Engineer Intern',
    company: 'Initializ Labs',
    period: 'May 2024 – June 2025',
    current: false,
    points: [
      'Developed a command-line tool using Golang and Cobra CLI, integrating platform APIs for authentication, workspace management, and AI endpoint control.',
      'Collaborated with the frontend team to enhance UI components using Next.js and MUI, implementing features for RAG responses and multiple context sources (Local Storage, Zendesk, Jira).',
      'Developed frontend modules for MCP server integrations with Jira and Slack using Next.js and MUI.',
      'Built frontend for a standalone external knowledge-base assistant (RAG) using Next.js and MUI, enabling external users to share inferences with chat history support.',
      'Contributed to product documentation including CLI usage guides and feature walkthroughs, while exploring RAG concepts and gaining foundational understanding of its architecture.',
    ],
  },
]

export default function ExperienceSection() {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Experience</h2>
      <p className="text-sm text-gray-400 dark:text-gray-500 mb-10">The journey so far.</p>

      <div className="relative">
        {/* Route line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-purple-400 via-purple-300 to-gray-200 dark:from-purple-500 dark:via-purple-700 dark:to-gray-700" />

        <div className="flex flex-col gap-10">
          {experiences.map((exp, index) => (
            <div key={index} className="flex gap-6">

              {/* Map pin marker */}
              <div className="relative shrink-0 mt-1">
                {exp.current ? (
                  <div className="w-4 h-4 rounded-full bg-purple-600 border-2 border-white dark:border-gray-950 shadow-md shadow-purple-200 dark:shadow-purple-900/40 z-10 relative" />
                ) : (
                  <div className="w-4 h-4 rounded-full bg-white dark:bg-gray-950 border-2 border-purple-400 dark:border-purple-600 z-10 relative" />
                )}
              </div>

              {/* Content */}
              <div className="pb-2">
                <div className="flex flex-wrap items-center gap-2 mb-0.5">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                  {exp.current && (
                    <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
                      Current
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-400">{exp.company}</span>
                  <span className="text-gray-300 dark:text-gray-600">·</span>
                  <span className="text-xs text-gray-400 dark:text-gray-500">{exp.period}</span>
                </div>

                <ul className="flex flex-col gap-2">
                  {exp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      <span className="mt-2 w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* End destination marker */}
        <div className="flex gap-6 mt-4">
          <div className="shrink-0">
            <div className="w-4 h-4 rounded-full bg-gray-100 dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600" />
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500 italic pt-1">Journey continues...</p>
        </div>
      </div>
    </div>
  )
}
