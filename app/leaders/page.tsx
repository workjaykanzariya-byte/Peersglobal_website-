import type { Metadata } from 'next'
import { Eyebrow, SectionHead } from '@/components/site/ui'
import { fetchMembers, PeerMember } from '@/lib/api/unity'
import { DirectoryGrid } from '@/components/site/directory-grid'

export const metadata: Metadata = {
  title: 'Leader Directory',
  description:
    'The public Peers Global leader directory — Circle Founders, Circle Chairs, and Peer Members from the Unity App network.',
}

export const revalidate = 300 // Revalidate page every 5 minutes

export default async function LeadersPage() {
  const members: PeerMember[] = await fetchMembers()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Header */}
      <section className="section bg-muted border-b border-[var(--border)]">
        <div className="shell flex flex-col gap-6 max-w-2xl">
          <Eyebrow tone="blue">Peers Directory</Eyebrow>
          <h1 className="display text-3xl sm:text-5xl font-semibold tracking-tight leading-snug">Who leads which Circle, and where.</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Live directory of verified founders, promoters, and leadership members fetched dynamically from the Unity App platform.
          </p>
        </div>
      </section>

      {/* Directory Grid with Load More */}
      <section className="section border-b border-[var(--border)]">
        <div className="shell flex flex-col gap-8">
          <SectionHead eyebrow="The Community" title="Peers Global Directory" />

          <DirectoryGrid members={members} />

          <p className="text-xs text-muted-foreground text-center pt-4">
            Full member profiles and contact details synchronized directly from Unity App.
          </p>
        </div>
      </section>
    </div>
  )
}
