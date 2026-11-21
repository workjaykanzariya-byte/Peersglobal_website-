import type { Metadata } from 'next'
import { Form2Client } from '@/components/leadership/form-2-client'

export const dynamic = 'force-dynamic'
export const revalidate = 0

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  return {
    title: 'Jury Evaluation Dossier (Form 2) | Peers Global Leadership',
    description: 'Official Jury Evaluation Dossier submission portal for shortlisted Peers Global Leadership candidates.',
    robots: {
      index: false,
      follow: false,
      nocache: true,
    },
  }
}

export default async function LeadershipForm2DetailPage({ params }: PageProps) {
  const { id } = await params

  return <Form2Client nominationId={id} />
}
