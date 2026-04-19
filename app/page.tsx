'use client'

import { useNav, SECTIONS } from './context/NavigationContext'
import { Icon } from '@iconify/react'
import IntroductionSection from './components/mainSection/IntroductionSection'
import AboutMeSection from './components/mainSection/AboutMeSection'
import ProjectsSection from './components/mainSection/ProjectsSection'
import SkillsSection from './components/mainSection/SkillsSection'
import ExperienceSection from './components/mainSection/ExperienceSection'
import EducationSection from './components/mainSection/EducationSection'
import ContactSection from './components/mainSection/ContactSection'
import StatsSection from './components/mainSection/StatsSection'

const SECTION_MAP: Record<string, React.ComponentType> = {
  'introduction': IntroductionSection,
  'about-me': AboutMeSection,
  'projects': ProjectsSection,
  'skills-and-tools': SkillsSection,
  'experience': ExperienceSection,
  'education': EducationSection,
  'contact': ContactSection,
  'stats': StatsSection,
}

export default function Home() {
  const { active, goNext, goPrev, currentIndex } = useNav()

  const prevSection = currentIndex > 0 ? SECTIONS[currentIndex - 1] : null
  const nextSection = currentIndex < SECTIONS.length - 1 ? SECTIONS[currentIndex + 1] : null

  const SectionContent = SECTION_MAP[active]

  return (
    <div className="relative flex flex-col" style={{ minHeight: 'calc(100vh - 4rem)' }}>

      {/* Section content */}
      <div key={active} className="flex-1 px-12 py-16 section-fade">
        <SectionContent />
      </div>

      {/* Bottom navigation */}
      <div className="flex items-center justify-between px-12 py-6 border-t border-gray-100 dark:border-gray-800">
        <button
          onClick={goPrev}
          className={`flex items-center gap-2 text-sm font-medium transition-all duration-200
            ${prevSection
              ? 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer'
              : 'invisible'
            }`}
        >
          <Icon icon="lucide:chevron-left" width="18" height="18" />
          {prevSection?.label}
        </button>

        <button
          onClick={goNext}
          className={`flex items-center gap-2 text-sm font-medium transition-all duration-200
            ${nextSection
              ? 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer'
              : 'invisible'
            }`}
        >
          {nextSection?.label}
          <Icon icon="lucide:chevron-right" width="18" height="18" />
        </button>
      </div>

    </div>
  )
}
