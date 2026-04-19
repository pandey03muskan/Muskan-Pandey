'use client'

import { useEffect } from 'react'

export default function ViewTracker() {
  useEffect(() => {
    if (localStorage.getItem('portfolio-visited') === 'true') return
    fetch('/api/views', { method: 'POST' }).then(() => {
      localStorage.setItem('portfolio-visited', 'true')
    })
  }, [])

  return null
}
