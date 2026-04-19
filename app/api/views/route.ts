import { NextResponse } from 'next/server'

const BASE = 'https://api.counterapi.dev/v2/muskan-pandeys-team-3801/first-counter-3801'

const headers = {
  'Authorization': `Bearer ${process.env.COUNTERAPI_KEY}`,
  'Content-Type': 'application/json',
}

export async function GET() {
  try {
    const res = await fetch(BASE, { headers, cache: 'no-store' })
    const data = await res.json()
    return NextResponse.json({ count: data.data?.up_count ?? 0 })
  } catch (err) {
    return NextResponse.json({ count: 0, _error: String(err) })
  }
}

export async function POST() {
  try {
    const res = await fetch(`${BASE}/up`, { headers, cache: 'no-store' })
    const data = await res.json()
    return NextResponse.json({ count: data.data?.up_count ?? 0 })
  } catch (err) {
    return NextResponse.json({ count: 0, _error: String(err) })
  }
}
