'use client'

import { useState } from 'react'
import { Icon } from '@iconify/react'
import { projects, type Project } from '../../data/projects'
import ProjectDetail from './ProjectDetail'

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  return (
    <div className="border border-gray-300 dark:border-gray-800 rounded-xl p-5 flex flex-col gap-3 hover:border-purple-300 dark:hover:border-purple-800 hover:shadow-sm transition-all">

      <div className="flex items-center justify-between gap-2">
        <h3 className="text-base font-semibold text-gray-900 dark:text-white">{project.title}</h3>
        <span className={`shrink-0 px-2 py-0.5 text-[10px] font-medium rounded-full border
          ${project.type === 'personal'
            ? 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800'
            : 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800'
          }`}>
          {project.type}
        </span>
      </div>

      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed" style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
        {project.description}
      </p>

      <button
        onClick={onClick}
        className="text-xs text-purple-600 dark:text-purple-400 hover:underline text-left w-fit cursor-pointer"
      >
        Learn more →
      </button>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-1.5 mt-1">
        {project.techStack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-300 dark:border-gray-700"
          >
            {tech}
          </span>
        ))}
        {project.techStack.length > 3 && (
          <span className="px-2 py-0.5 text-xs rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-500 border border-gray-300 dark:border-gray-700">
            +{project.techStack.length - 3}
          </span>
        )}
      </div>

      {/* Links */}
      <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gray-50 dark:border-gray-800">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <Icon icon="lucide:external-link" width="12" height="12" />
            Live
          </a>
        )}
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
          >
            <Icon icon="mdi:github" width="13" height="13" />
            Code
          </a>
        )}
      </div>
    </div>
  )
}

export default function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null)

  if (selected) {
    return <ProjectDetail project={selected} onBack={() => setSelected(null)} />
  }

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Projects</h2>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">Work I&apos;m proud of.</p>

      <div className="grid grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelected(project)}
          />
        ))}
      </div>
    </div>
  )
}
