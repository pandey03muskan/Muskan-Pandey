'use client'

const education = [
  {
    institution: 'Dr. A.P.J. Abdul Kalam Technical University',
    degree: 'B.Tech, Computer Science',
    period: null,
    grade: null,
    current: true,
  },
  {
    institution: 'Government Girls Polytechnic Ayodhya',
    degree: 'Diploma, Information Technology',
    period: 'Jul 2019 – Apr 2022',
    grade: '84%',
    current: false,
  },
  {
    institution: 'Gramodya Inter College',
    degree: 'High School',
    period: 'Jul 2018 – Apr 2019',
    grade: '90.83%',
    current: false,
  },
]

export default function EducationSection() {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Education</h2>
      <p className="text-sm text-gray-400 dark:text-gray-500 mb-10">Where it all started.</p>

      <div className="relative">
        {/* Route line */}
        <div className="absolute left-[7px] top-2 bottom-6 w-px bg-gradient-to-b from-purple-400 via-purple-300 to-gray-200 dark:from-purple-500 dark:via-purple-700 dark:to-gray-700" />

        <div className="flex flex-col gap-8">
          {education.map((edu, index) => (
            <div key={index} className="flex gap-6">

              {/* Marker */}
              <div className="relative shrink-0 mt-1 z-10">
                {edu.current ? (
                  <div className="w-4 h-4 rounded-full bg-purple-600 border-2 border-white dark:border-gray-950 shadow-md shadow-purple-200 dark:shadow-purple-900/40" />
                ) : (
                  <div className="w-4 h-4 rounded-full bg-white dark:bg-gray-950 border-2 border-purple-400 dark:border-purple-600" />
                )}
              </div>

              {/* Content */}
              <div className="pb-1">
                <div className="flex flex-wrap items-center gap-2 mb-0.5">
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white">{edu.institution}</h3>
                  {edu.current && (
                    <span className="px-2 py-0.5 text-[10px] font-medium rounded-full bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border border-purple-200 dark:border-purple-800">
                      Latest
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{edu.degree}</p>

                <div className="flex items-center gap-3 flex-wrap">
                  {edu.period && (
                    <span className="text-xs text-gray-400 dark:text-gray-500">{edu.period}</span>
                  )}
                  {edu.period && edu.grade && (
                    <span className="text-gray-200 dark:text-gray-700">·</span>
                  )}
                  {edu.grade && (
                    <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                      Grade: {edu.grade}
                    </span>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
