import { NextResponse } from 'next/server'
import { SITE } from '@/lib/data/site'

export async function GET(request: Request) {
  const userAgent = request.headers.get('user-agent') || ''

  // Detect iOS (iPhone, iPad, iPod)
  const isIOS = /iPad|iPhone|iPod/i.test(userAgent)

  if (isIOS) {
    return NextResponse.redirect(SITE.appStoreUrl, 307)
  }

  // Detect Android or fallback to Google Play Store
  return NextResponse.redirect(SITE.playStoreUrl, 307)
}
