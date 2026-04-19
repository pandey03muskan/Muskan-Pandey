'use client'

import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react'

const BASE_APPRECIATIONS = 794

// Replace with your actual LinkedIn recommendations
const recommendations = [
  {
    name: 'Recommender Name',
    role: 'Role · Company',
    initials: 'RN',
    text: 'Add your LinkedIn recommendation text here. This will appear in the carousel.',
  },
]

export default function StatsSection() {
  const [appreciated, setAppreciated] = useState(false)
  const [appreciationCount, setAppreciationCount] = useState(BASE_APPRECIATIONS)
  const [views, setViews] = useState<number | null>(null)
  const [recIndex, setRecIndex] = useState(0)

  useEffect(() => {
    if (localStorage.getItem('portfolio-appreciated') === 'true') {
      setAppreciated(true)
    }

    const fetchViews = async () => {
      const alreadyVisited = localStorage.getItem('portfolio-visited') === 'true'
      const res = await fetch('/api/views', { method: alreadyVisited ? 'GET' : 'POST' })
      const data = await res.json()
      setViews(data.count ?? 0)
      if (!alreadyVisited) localStorage.setItem('portfolio-visited', 'true')
    }

    fetchViews()
  }, [])

  const handleAppreciate = () => {
    if (!appreciated) {
      setAppreciated(true)
      setAppreciationCount((c) => c + 1)
      localStorage.setItem('portfolio-appreciated', 'true')
    }
  }

  const prevRec = () =>
    setRecIndex((i) => (i - 1 + recommendations.length) % recommendations.length)
  const nextRec = () =>
    setRecIndex((i) => (i + 1) % recommendations.length)

  const rec = recommendations[recIndex]

  return (
    <div className="max-w-3xl">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Stats</h2>
      <p className="text-sm text-gray-400 dark:text-gray-500 mb-10">By the numbers.</p>

      {/* ── Stat Cards ── */}
      <div className="grid grid-cols-2 gap-4 mb-12">

        {/* Total Views */}
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40 p-6">
          <div className="flex items-center gap-2 mb-5 text-gray-700 dark:text-gray-300">
            <Icon icon="lucide:eye" width="16" height="16" className="text-purple-500" />
            <span className="text-sm font-semibold">Total Views</span>
          </div>
          <p className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-3">
            {views !== null ? views.toLocaleString() : 'Loading...'}
          </p>
          <p className="text-xs text-gray-400 dark:text-gray-500">Unique page visits since Oct-2025</p>
        </div>

        {/* Appreciation */}
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40 p-6">
          <div className="flex items-center gap-2 mb-5 text-gray-700 dark:text-gray-300">
            <Icon icon="lucide:heart" width="16" height="16" className="text-pink-500" />
            <span className="text-sm font-semibold">Appreciation Count</span>
          </div>
          <p className="text-5xl font-bold text-pink-500 mb-4">
            {appreciationCount.toLocaleString()}
          </p>
          <button
            onClick={handleAppreciate}
            disabled={appreciated}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium transition-all
              ${appreciated
                ? 'bg-gray-800 dark:bg-gray-700 text-gray-400 cursor-default'
                : 'bg-gray-900 dark:bg-gray-800 text-white hover:bg-gray-700 dark:hover:bg-gray-700 cursor-pointer'
              }`}
          >
            <span>❤️</span>
            {appreciated ? 'Much appreciated!' : 'Thank you, much appreciated!'}
          </button>
        </div>

      </div>

      {/* ── LinkedIn Recommendations ── */}
      <div className="mb-12">
        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">LinkedIn Recommendations</h3>
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-6">Kind words from people I've worked with.</p>

        <div className="relative rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40 p-6">
          {/* Quote icon */}
          <Icon icon="lucide:quote" width="24" height="24" className="text-purple-300 dark:text-purple-700 mb-4" />

          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 min-h-[72px]">
            {rec.text}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-600 dark:text-purple-400 text-xs font-bold flex items-center justify-center">
                {rec.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{rec.name}</p>
                <p className="text-xs text-gray-400 dark:text-gray-500">{rec.role}</p>
              </div>
            </div>

            {recommendations.length > 1 && (
              <div className="flex items-center gap-2">
                <button
                  onClick={prevRec}
                  className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  <Icon icon="lucide:chevron-left" width="14" height="14" />
                </button>
                <span className="text-xs text-gray-400">{recIndex + 1} / {recommendations.length}</span>
                <button
                  onClick={nextRec}
                  className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  <Icon icon="lucide:chevron-right" width="14" height="14" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── GitHub Contributions ── */}
      <div className="mb-12">
        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">GitHub Activity</h3>
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-6">Contribution history.</p>
        <div className="rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40 p-5 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://ghchart.rshah.org/7c3aed/pandey03muskan"
            alt="Muskan Pandey GitHub contribution chart"
            className="w-full"
          />
        </div>
      </div>

      {/* ── Currently ── */}
      <div>
        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1">Currently</h3>
        <p className="text-xs text-gray-400 dark:text-gray-500 mb-6">Where I am right now.</p>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40">
            <Icon icon="lucide:building-2" width="16" height="16" className="text-purple-500" />
            <div>
              <p className="text-xs text-gray-400 dark:text-gray-500">Company</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">Initializ Labs</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40">
            <Icon icon="lucide:map-pin" width="16" height="16" className="text-purple-500" />
            <div>
              <p className="text-xs text-gray-400 dark:text-gray-500">Location</p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">India</p>
            </div>
          </div>
          <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/40">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <p className="text-sm font-medium text-gray-900 dark:text-white">Open to opportunities</p>
          </div>
        </div>
      </div>

    </div>
  )
}
