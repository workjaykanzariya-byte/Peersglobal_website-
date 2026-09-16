import type { Metadata } from 'next'
import { Suspense } from 'react'
import { BlogsPageClient } from '@/components/blogs/blogs-page-client'

export const metadata: Metadata = {
  title: 'Blogs & Articles | Peers Global',
  description:
    'Explore the latest articles, growth guides, founder insights, and business strategies from the official Peers Global Blog.',
}

export default function BlogsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center text-xs font-mono text-muted-foreground">Loading Articles...</div>}>
      <BlogsPageClient />
    </Suspense>
  )
}
