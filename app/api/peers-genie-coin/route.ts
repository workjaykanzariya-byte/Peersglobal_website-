import { NextResponse } from 'next/server'

// Legacy endpoint: previously read the coin image from a local developer
// machine path, which does not exist on production. The image now lives in
// /public/images and is served statically; redirect any old references there.
export function GET(request: Request) {
  return NextResponse.redirect(new URL('/images/peers-coin-gold.jpg', request.url), 308)
}
