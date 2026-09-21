import { NextResponse } from 'next/server'
import { getAllMembers } from '@/lib/api/members'

export const dynamic = 'force-dynamic'

export async function GET() {
  try {
    const members = await getAllMembers()
    return NextResponse.json({
      success: true,
      count: members.length,
      data: members,
    })
  } catch (error: any) {
    console.error('GET /api/members error:', error)
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to fetch members', data: [] },
      { status: 500 }
    )
  }
}
