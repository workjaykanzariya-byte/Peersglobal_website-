import { redirect } from 'next/navigation'

export const dynamic = 'force-dynamic'
export const revalidate = 0

interface PageProps {
  params?: Promise<{ id?: string }>
  searchParams?: Promise<{ nomination?: string }>
}

export default async function LeadershipForm2DetailPage({ params, searchParams }: PageProps) {
  const resolvedParams = params ? await params : {}
  const resolvedSearch = searchParams ? await searchParams : {}
  const nominationId = resolvedParams.id || resolvedSearch.nomination || ''

  if (nominationId) {
    redirect(`https://peersunity.com/leadership/form-2/${encodeURIComponent(nominationId)}`)
  }

  redirect('https://peersunity.com/leadership/form-2')
}
