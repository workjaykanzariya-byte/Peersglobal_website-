import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const filePath = 'C:\\Users\\Abc\\.gemini\\antigravity-ide\\brain\\565f9187-1041-476a-8f10-9f8797258ee6\\.user_uploaded\\media_1791439643257.jpg'
  
  if (!fs.existsSync(filePath)) {
    return new NextResponse('Image not found', { status: 404 })
  }

  const fileBuffer = fs.readFileSync(filePath)
  
  return new NextResponse(fileBuffer, {
    headers: {
      'Content-Type': 'image/jpeg',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  })
}
