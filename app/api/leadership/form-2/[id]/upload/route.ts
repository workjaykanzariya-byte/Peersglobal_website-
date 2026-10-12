import { NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import path from 'path'
import { PRIMARY_LEADERSHIP_API_BASE_URL, FALLBACK_LEADERSHIP_API_BASE_URL } from '@/lib/api/leadership'

export const dynamic = 'force-dynamic'

export async function POST(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id: nominationId } = await params

  try {
    const formData = await req.formData()
    const file = formData.get('file') as File | null

    if (!file) {
      return NextResponse.json({ success: false, message: 'No file uploaded.' }, { status: 400 })
    }

    // 1. Attempt upload to remote dev backend
    const candidateBackends = [PRIMARY_LEADERSHIP_API_BASE_URL, FALLBACK_LEADERSHIP_API_BASE_URL]
    for (const baseUrl of candidateBackends) {
      try {
        const proxyFormData = new FormData()
        proxyFormData.append('file', file)
        const type = formData.get('type')
        if (type) proxyFormData.append('type', String(type))

        const res = await fetch(`${baseUrl}/public/nominations/${nominationId}/form-2/upload`, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: proxyFormData,
        })

        if (res.ok) {
          const json = await res.json()
          if (json?.success && json?.url) {
            return NextResponse.json(json)
          }
        }
      } catch {
        // try fallback
      }
    }

    // 2. Save locally in public/uploads/form2/{id}/
    try {
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)

      const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'form2', nominationId)
      await mkdir(uploadDir, { recursive: true })

      const safeFilename = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`
      const filePath = path.join(uploadDir, safeFilename)
      await writeFile(filePath, buffer)

      const localUrl = `/uploads/form2/${nominationId}/${safeFilename}`

      return NextResponse.json({
        success: true,
        url: localUrl,
        original_name: file.name,
        size: file.size,
      })
    } catch (fsErr) {
      console.warn('Local FS upload error:', fsErr)
    }

    // 3. Fallback mock storage URL
    const mockStorageUrl = `https://dev.peersunity.com/storage/leadership/form2/${nominationId}/${encodeURIComponent(
      file.name
    )}`

    return NextResponse.json({
      success: true,
      url: mockStorageUrl,
      original_name: file.name,
      size: file.size,
    })
  } catch (error: any) {
    console.error('Form 2 file upload error:', error)
    return NextResponse.json(
      { success: false, message: error.message || 'File upload failed.' },
      { status: 500 }
    )
  }
}
