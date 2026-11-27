import pool from '@/lib/db'

export const dynamic = 'force-dynamic'

const UNITY_API_BASE = 'https://peersunity.com'

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id: rawId } = await params
    const id = rawId?.trim()

    if (!id) {
      return new Response('Missing creative ID', { status: 400 })
    }

    const { searchParams } = new URL(req.url)
    const action = searchParams.get('action') || (searchParams.get('download') === '1' ? 'download' : 'view')
    const isDownload = action === 'download'

    // 1. Resolve candidate name and creative URL from database or backend
    let candidateName = 'Candidate'
    let targetImageUrl = `${UNITY_API_BASE}/storage/creatives/leadership/nomination_${id}.png`

    try {
      const dbRes = await pool.query(
        `SELECT id, candidate_name, full_name, profile_snapshot, application_number 
         FROM public.web_leadership_nominations 
         WHERE id::text = $1 OR application_number = $1 OR candidate_slug = $1 
         LIMIT 1`,
        [id]
      )

      if (dbRes.rows.length > 0) {
        const row = dbRes.rows[0]
        const snap = row.profile_snapshot || {}
        candidateName = row.candidate_name || row.full_name || snap.full_name || 'Official-Nominee'
        if (snap.creative_url && typeof snap.creative_url === 'string' && snap.creative_url.startsWith('http')) {
          targetImageUrl = snap.creative_url
        } else {
          targetImageUrl = `${UNITY_API_BASE}/storage/creatives/leadership/nomination_${row.id}.png`
        }
      }
    } catch {}

    const sanitizedName = candidateName.replace(/[^a-zA-Z0-9_-]+/g, '-').replace(/^-+|-+$/g, '') || 'Candidate'
    const filename = `Official-Leadership-Creative-${sanitizedName}.png`

    // 2. Fetch image stream from backend
    let imgRes = await fetch(targetImageUrl, {
      cache: 'no-store',
      headers: {
        Accept: 'image/png,image/*,*/*',
      },
    })

    if (!imgRes.ok) {
      const fallbackUrl = `${UNITY_API_BASE}/storage/creatives/leadership/nomination_${id}.png`
      imgRes = await fetch(fallbackUrl, { cache: 'no-store' })
    }

    if (!imgRes.ok) {
      return new Response('Creative not found', { status: 404 })
    }

    const imageBuffer = await imgRes.arrayBuffer()

    return new Response(imageBuffer, {
      headers: {
        'Content-Type': imgRes.headers.get('content-type') || 'image/png',
        'Content-Disposition': `${isDownload ? 'attachment' : 'inline'}; filename="${filename}"`,
        'Cache-Control': 'public, max-age=86400, immutable',
        'Access-Control-Allow-Origin': '*',
      },
    })
  } catch (error: any) {
    return new Response(error?.message || 'Error fetching creative', { status: 500 })
  }
}
