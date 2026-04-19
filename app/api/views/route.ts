import { NextResponse } from 'next/server'

const BASE = 'https://api.counterapi.dev/v2/first-counter-3801'

export async function GET() {
  try {
    const res = await fetch(`${BASE}/`, { cache: 'no-store' })
    const data = await res.json()
    return NextResponse.json({ count: data.count ?? 0 })
  } catch {
    return NextResponse.json({ count: 0 })
  }
}

export async function POST() {
  try {
    const res = await fetch(`${BASE}/up`, { cache: 'no-store' })
    const data = await res.json()
    return NextResponse.json({ count: data.count ?? 0 })
  } catch {
    return NextResponse.json({ count: 0 })
  }
}
