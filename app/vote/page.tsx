import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'

interface PageProps {
  searchParams?: Promise<{ candidate?: string; campaign?: string }>
}

export default async function VoteIndexPage({ searchParams }: PageProps) {
  const resolved = searchParams ? await searchParams : {}
  const candidate = resolved.candidate ? `?candidate=${encodeURIComponent(resolved.candidate)}` : ''
  redirect(`/leadership/vote${candidate}`)
}
