'use client'

import { Icon } from '@iconify/react'
import type { Project } from '../../data/projects'

type Props = {
  project: Project
  onBack: () => void
}

export default function ProjectDetail({ project, onBack }: Props) {
  const hasFeatureOrChallenge = (project.features?.length ?? 0) > 0 || (project.challenges?.length ?? 0) > 0
  const hasLearningOrLinks = (project.learnings?.length ?? 0) > 0 || project.liveUrl || project.codeUrl

  return (
    <div className="max-w-3xl animate-fade">

      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8 cursor-pointer"
      >
        <Icon icon="lucide:arrow-left" width="16" height="16" />
        Back to Projects
      </button>

      {/* Title */}
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">{project.title}</h2>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-6">{project.description}</p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mb-10">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-medium rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 border border-purple-300 dark:border-purple-800"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Features & Challenges */}
      {hasFeatureOrChallenge && (
        <div className="grid grid-cols-2 gap-8 mb-10">
          {(project.features?.length ?? 0) > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Features</h3>
              <ul className="flex flex-col gap-2 list-disc list-inside">
                {project.features!.map((f, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-gray-400">{f}</li>
                ))}
              </ul>
            </div>
          )}

          {(project.challenges?.length ?? 0) > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Challenges</h3>
              <ul className="flex flex-col gap-2 list-disc list-inside">
                {project.challenges!.map((c, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-gray-400">{c}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}

      {/* Learnings & Links */}
      {hasLearningOrLinks && (
        <div className="grid grid-cols-2 gap-8">
          {(project.learnings?.length ?? 0) > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Learnings</h3>
              <ul className="flex flex-col gap-2 list-disc list-inside">
                {project.learnings!.map((l, i) => (
                  <li key={i} className="text-sm text-gray-600 dark:text-gray-400">{l}</li>
                ))}
              </ul>
            </div>
          )}

          {(project.liveUrl || project.codeUrl) && (
            <div>
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-3">Links</h3>
              <div className="flex flex-col gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium transition-colors w-fit"
                  >
                    <Icon icon="lucide:external-link" width="14" height="14" />
                    Live Site
                  </a>
                )}
                {project.codeUrl && (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 text-sm font-medium transition-colors w-fit"
                  >
                    <Icon icon="mdi:github" width="16" height="16" />
                    GitHub
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      )}

    </div>
  )
}
