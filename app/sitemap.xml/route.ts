import { NextResponse } from 'next/server'

const STATIC_ROUTES = [
  '',
  '/about',
  '/our-story',
  '/the-idea',
  '/founder',
  '/1-million-mission',
  '/social-impact',
  '/media',
  '/stories',
  '/circles',
  '/how-a-circle-works',
  '/circle-roles',
  '/circle-meeting-experience',
  '/start-a-circle',
  '/circle-magazines',
  '/map',
  '/cities',
  '/regions',
  '/india',
  '/international',
  '/bring-to-my-city',
  '/learning',
  '/masterclasses',
  '/playbooks',
  '/mentors',
  '/watchlist',
  '/marketplace',
  '/the-currency',
  '/life-impact-score',
  '/how-to-earn-impact',
  '/impact-confirmation',
  '/peer-standing',
  '/peers-coin',
  '/unity',
  '/give-first',
  '/peer-to-peer',
  '/10-ways-of-collaboration',
  '/culture-and-code',
  '/lexicon',
  '/leadership',
  '/leadership/advisory-board',
  '/awards',
  '/events/speak',
  '/partner',
  '/careers',
  '/investors',
  '/peers-code',
  '/community-guidelines',
  '/terms-of-use',
  '/membership-terms',
  '/refund-policy',
  '/privacy-policy',
  '/grievance',
  '/security',
  '/disclaimer',
  '/sitemap',
]

export async function GET() {
  const baseUrl = 'https://peersglobal.com'
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${STATIC_ROUTES.map(
    (route) => `
    <url>
      <loc>${baseUrl}${route}</loc>
      <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${route === '' ? '1.0' : route === '/learning' || route === '/map' ? '0.9' : '0.8'}</priority>
    </url>`
  ).join('')}
</urlset>`

  return new NextResponse(xml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  })
}
