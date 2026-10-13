import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronLeft, Trophy, Sparkles, ShieldCheck } from 'lucide-react'
import { leadershipApi } from '@/lib/api/leadership'
import { WinnerCard } from '@/components/leadership/elections/winner-card'
import { GalaxyButton } from '@/components/ui/galaxy-button'

interface PageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params
  const { data: campaign } = await leadershipApi.getCampaignById(id)

  return {
    title: `Official Election Winners — ${campaign?.name || 'Election Results'} | Peers Global`,
    description: `Official results declaration and celebration creatives for ${campaign?.name}.`,
  }
}

export default async function CampaignWinnersPage({ params }: PageProps) {
  const { id } = await params
  const { data: campaign } = await leadershipApi.getCampaignById(id)
  const { data: winners } = await leadershipApi.getCampaignWinners(id)

  if (!campaign) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] py-8 sm:py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
          <Link
            href={`/leadership/campaigns/${campaign.id}`}
            className="hover:text-[#1D4ED8] flex items-center gap-1 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            {campaign.name}
          </Link>
          <span>/</span>
          <span className="text-slate-900 font-bold">Official Election Winners</span>
        </div>

        {/* Master Dark Hero Banner */}
        <div className="relative rounded-3xl bg-[#040F24] text-white p-7 sm:p-10 lg:p-12 border border-slate-800 shadow-xl overflow-hidden text-center">
          {/* Full Bleed Video Background */}
          <div className="absolute inset-0 size-full overflow-hidden pointer-events-none">
            <video
              src="/videos/homepage-hero-bg.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="size-full object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,8,23,0.92)_0%,rgba(4,15,36,0.85)_45%,rgba(4,15,36,0.70)_100%)]" />
          </div>

          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1D4ED8]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-[#E11D48]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-rose-400">
                OFFICIAL ELECTION RESULTS CERTIFIED
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
              {campaign.name}
            </h1>

            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-2xl mx-auto">
              The Election Governance Board certifies the democratic selection of our new leadership stewards. Below are the official winners, verified vote counts, and high-resolution celebration creatives.
            </p>

            <div className="pt-2 flex justify-center gap-3">
              <GalaxyButton
                href={`/leadership/campaigns/${campaign.id}`}
                variant="transparent"
                size="default"
                className="text-xs sm:text-sm"
              >
                Campaign Overview
              </GalaxyButton>
            </div>
          </div>
        </div>

        {/* Winners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {winners.map((winner, idx) => (
            <WinnerCard key={winner.id || idx} winner={winner} />
          ))}
        </div>

        {/* Certification Seal Footer */}
        <div className="p-6 md:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-[#1D4ED8] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            Governance &amp; Scrutiny Board Seal
          </div>
          <p className="text-xs text-slate-600 max-w-xl mx-auto leading-relaxed font-normal">
            All ballots have been cryptographically verified, authenticated via 2-factor OTP, and tallied alongside weighted jury recommendation scores under the Peers Global Election Governance Protocol.
          </p>
        </div>
      </div>
    </div>
  )
}
