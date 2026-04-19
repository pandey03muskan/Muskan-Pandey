'use client'

import { useState, useEffect } from 'react'

type Day = { date: string; count: number; level: number }

const LEVEL_COLORS = [
  'bg-gray-100 dark:bg-gray-800',
  'bg-purple-200 dark:bg-purple-900',
  'bg-purple-400 dark:bg-purple-700',
  'bg-purple-600 dark:bg-purple-500',
  'bg-purple-800 dark:bg-purple-300',
]

export default function GitHubContributions() {
  const [weeks, setWeeks] = useState<Day[][]>([])
  const [total, setTotal] = useState<number | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/github-contributions')
      .then((r) => r.json())
      .then((data) => {
        const contributions: Day[] = data.contributions ?? []
        const totalCount: number = data.total?.lastYear ?? data.total?.['2025'] ?? 0
        setTotal(totalCount)

        // Group into weeks (columns of 7 days)
        const chunked: Day[][] = []
        for (let i = 0; i < contributions.length; i += 7) {
          chunked.push(contributions.slice(i, i + 7))
        }
        setWeeks(chunked)
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <div className="h-32 flex items-center justify-center text-xs text-gray-400 dark:text-gray-600">
        Loading contributions...
      </div>
    )
  }

  if (!weeks.length) {
    return (
      <div className="h-32 flex items-center justify-center text-xs text-gray-400 dark:text-gray-600">
        No contribution data available.
      </div>
    )
  }

  return (
    <div>
      {total !== null && (
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">
          {total.toLocaleString()} contributions in the last year
        </p>
      )}
      <div className="overflow-x-auto">
        <div className="flex gap-[3px] min-w-max">
          {weeks.map((week, wi) => (
            <div key={wi} className="flex flex-col gap-[3px]">
              {week.map((day) => (
                <div
                  key={day.date}
                  title={`${day.date}: ${day.count} contributions`}
                  className={`w-3 h-3 rounded-sm ${LEVEL_COLORS[day.level] ?? LEVEL_COLORS[0]}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-1 mt-3 justify-end">
        <span className="text-xs text-gray-400 dark:text-gray-600">Less</span>
        {LEVEL_COLORS.map((cls, i) => (
          <div key={i} className={`w-3 h-3 rounded-sm ${cls}`} />
        ))}
        <span className="text-xs text-gray-400 dark:text-gray-600">More</span>
      </div>
    </div>
  )
}
