import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'
export const revalidate = 0

interface PageProps {
  searchParams?: Promise<{ nomination?: string; id?: string; candidate?: string }>
}

export default async function LeadershipForm2IndexPage({ searchParams }: PageProps) {
  const resolvedSearch = searchParams ? await searchParams : {}
  const nominationId = resolvedSearch.nomination || resolvedSearch.id || resolvedSearch.candidate || ''

  if (nominationId) {
    redirect(`https://peersunity.com/leadership/form-2/${encodeURIComponent(nominationId)}`)
  }

  redirect('https://peersunity.com/leadership/form-2')
}
