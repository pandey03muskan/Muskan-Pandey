import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const res = await fetch(
      'https://github-contributions-api.jogruber.de/v4/pandey03muskan?y=last',
      { next: { revalidate: 3600 } }
    )
    const data = await res.json()
    return NextResponse.json(data)
  } catch (err) {
    return NextResponse.json({ contributions: [], total: {} }, { status: 500 })
  }
}
