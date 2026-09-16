import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Building2, MapPin, ShieldCheck, Sparkles, UserCheck, Briefcase, Award, Globe, ExternalLink, CheckCircle2 } from 'lucide-react'
import { Card, Cta, Tag } from '@/components/site/ui'
import { getMemberProfile, getAllMembers, PeerMemberProfile } from '@/lib/api/members'

type Props = {
  params: Promise<{ username: string }>
}

function parseSlug(usernameParam: string): string {
  let slug = decodeURIComponent(usernameParam).trim().toLowerCase()
  if (slug.startsWith('peer-') || slug.startsWith('peer_')) {
    slug = slug.replace(/^peer[-_]/, '')
  }
  return slug
}

function findMatchingMember(allMembers: PeerMemberProfile[], identifier: string): PeerMemberProfile | undefined {
  const cleanId = identifier.toLowerCase().replace(/[^a-z0-9]+/g, '')
  if (!cleanId) return undefined

  return allMembers.find((m) => {
    if (m.id === identifier) return true
    const mSlug = (m.slug || m.public_profile_slug || '').toLowerCase().replace(/[^a-z0-9]+/g, '')
    const mName = m.name.toLowerCase().replace(/[^a-z0-9]+/g, '')

    if (mSlug.length > 0) {
      if (mSlug === cleanId || mSlug.startsWith(cleanId) || cleanId.startsWith(mSlug)) return true
    }
    if (mName.length > 0) {
      if (mName === cleanId || mName.startsWith(cleanId) || cleanId.startsWith(mName)) return true
    }
    return false
  })
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params
  const identifier = parseSlug(username)
  let profile = await getMemberProfile(identifier)

  if (!profile) {
    const allMembers = await getAllMembers()
    const matchedMember = findMatchingMember(allMembers, identifier)

    if (matchedMember) {
      const fullDetail = await getMemberProfile(matchedMember.id || matchedMember.public_profile_slug || matchedMember.slug || '')
      profile = fullDetail || matchedMember
    }
  }

  if (!profile) {
    return { title: 'Peer Profile Not Found | Peers Global' }
  }

  return {
    title: `${profile.name} — ${profile.designation || 'Peer Member'} | Peers Global`,
    description: `${profile.name} is a verified ${profile.membership_status_label || 'Member'} at Peers Global in ${profile.city || 'India'}. ${profile.company || profile.company_name || ''}.`,
  }
}

export default async function PeerProfilePage({ params }: Props) {
  const { username } = await params
  const identifier = parseSlug(username)

  // 1. Fetch live dynamic profile directly from Unity App PostgreSQL backend API
  let profile: PeerMemberProfile | null = await getMemberProfile(identifier)

  // Fallback search across live member list if exact slug lookup didn't match directly
  if (!profile) {
    const allMembers = await getAllMembers()
    const matchedMember = findMatchingMember(allMembers, identifier)

    if (matchedMember) {
      const fullDetail = await getMemberProfile(matchedMember.id || matchedMember.public_profile_slug || matchedMember.slug || '')
      profile = fullDetail || matchedMember
    }
  }

  // If member does NOT exist in live Unity App PostgreSQL database, trigger 404
  if (!profile) {
    notFound()
  }

  // Extract live fields strictly from Unity App PostgreSQL backend
  const name = profile.name
  const photo = profile.photo || profile.profile_image_url || null
  const coverPhoto = profile.cover_photo_url || null
  const designation = profile.designation || 'Verified Peer Member'
  const company = profile.company || profile.company_name || 'Peers Global Member Company'
  const membershipStatusLabel = profile.membership_status_label || 'Verified Member'
  const activeCircleName = profile.active_circle_name || profile.active_circle?.name || 'Peers Global Circle'
  const city = profile.city || 'Ahmedabad, India'
  
  // Circle role check (e.g. Chair vs Member)
  const matchedCircleObj = profile.circles?.find((c) => c.circle_name === activeCircleName || c.role === 'chair')
  const circleRole = matchedCircleObj?.role
  const isChair = circleRole?.toLowerCase() === 'chair'

  // Dynamic Rich Bio Construction from live fields
  const bio =
    profile.bio ||
    profile.business_description ||
    (profile as any).experience_summary ||
    `${name} is the ${designation} at ${company}${city ? ` based in ${city}` : ''}. ${
      isChair
        ? `Serving as Circle Chair for ${activeCircleName} in the Peers Global network.`
        : `Active verified ${membershipStatusLabel} holding a governed category seat in ${activeCircleName}.`
    }`

  const website = profile.website || profile.social_links?.website || null
  const linkedin = profile.social_links?.linkedin || null
  const instagram = profile.social_links?.instagram || null
  const twitter = profile.social_links?.twitter || null
  const industryTags = profile.industry_tags || []
  const skills = profile.skills || []
  const businessType = (profile as any).business_type || null
  const experienceYears = (profile as any).experience_years ? `${(profile as any).experience_years} Years` : null
  const publicSlug = profile.public_profile_slug || profile.slug || username

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Top Banner - Cover Photo or Dynamic Gradient */}
      <section className="relative bg-gradient-to-b from-[#0b1b3a] via-[#122347] to-background text-white pt-12 pb-24 overflow-hidden border-b border-[var(--border)]">
        {coverPhoto ? (
          <div className="absolute inset-0 z-0">
            <Image
              src={coverPhoto}
              alt={`${name} Cover`}
              fill
              className="object-cover opacity-25"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b1b3a]/80 via-[#0b1b3a]/90 to-background z-10" />
          </div>
        ) : (
          <>
            <div className="absolute -top-24 -left-24 size-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
            <div className="absolute top-10 right-10 size-80 rounded-full bg-[#D4AF37]/10 blur-3xl pointer-events-none" />
          </>
        )}

        <div className="shell relative z-20 flex flex-col gap-6">
          <Link
            href="/leaders"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white/70 hover:text-white transition-colors self-start"
          >
            <ArrowLeft className="size-4" /> Back to Leader Directory
          </Link>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pt-2">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              {/* Profile Avatar / Photo */}
              <div className="relative size-28 sm:size-36 rounded-3xl overflow-hidden border-2 border-[#D4AF37]/60 shadow-2xl bg-[#0b1b3a] shrink-0">
                {photo ? (
                  <Image
                    src={photo}
                    alt={name}
                    fill
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="flex size-full flex-col items-center justify-center bg-gradient-to-br from-primary via-[#0b1b3a] to-[#122347] text-white p-2 text-center">
                    <span className="text-3xl sm:text-4xl font-extrabold tracking-wider">
                      {name.split(' ').map((n) => n[0]).join('')}
                    </span>
                    <span className="text-[10px] text-white/70 font-mono mt-1">Unity Member</span>
                  </div>
                )}
                <div className="absolute bottom-2 right-2 bg-emerald-500 text-white rounded-full p-1 shadow-lg" title="Verified Unity App Member">
                  <ShieldCheck className="size-4" />
                </div>
              </div>

              {/* Title & Info */}
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#0b1b3a] bg-[#D4AF37]">
                    <Sparkles className="size-3.5" />
                    {isChair ? 'Circle Chair' : membershipStatusLabel}
                  </span>
                  {activeCircleName && <Tag tone="blue">{activeCircleName}</Tag>}
                  {businessType && <Tag tone="neutral">{businessType}</Tag>}
                </div>

                <h1 className="display text-3xl sm:text-4xl md:text-5xl text-white font-extrabold">
                  {name}
                </h1>

                <p className="text-base sm:text-lg font-medium text-white/80 flex items-center gap-2">
                  <Briefcase className="size-4 text-[#D4AF37]" />
                  {designation} — <span className="text-white font-bold">{company}</span>
                </p>

                <div className="flex flex-wrap items-center gap-4 text-xs text-white/70 mt-1">
                  <span className="flex items-center gap-1">
                    <MapPin className="size-3.5 text-[#D4AF37]" /> {city}
                  </span>
                  {website && (
                    <a href={website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline text-primary">
                      <Globe className="size-3.5" /> Website
                    </a>
                  )}
                  {linkedin && (
                    <a href={linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline text-blue-400">
                      <ExternalLink className="size-3.5" /> LinkedIn
                    </a>
                  )}
                  {instagram && (
                    <a href={instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline text-pink-400">
                      <ExternalLink className="size-3.5" /> Instagram
                    </a>
                  )}
                  {twitter && (
                    <a href={twitter} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline text-sky-400">
                      <ExternalLink className="size-3.5" /> Twitter
                    </a>
                  )}
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap md:flex-col gap-3 shrink-0">
              <Cta
                href="/membership"
                variant="gold"
                size="md"
                className="font-bold shadow-lg shadow-amber-500/20"
              >
                Connect on Unity App →
              </Cta>
              <Cta
                href="/contact"
                variant="onDark"
                size="md"
                className="text-xs"
              >
                Request 1-to-1 Meeting
              </Cta>
            </div>
          </div>
        </div>
      </section>

      {/* Main Profile Body */}
      <section className="section py-16">
        <div className="shell grid gap-10 lg:grid-cols-[1.8fr_1fr]">
          {/* Left Column: Bio & Business Description */}
          <div className="flex flex-col gap-8">
            <Card className="flex flex-col gap-4 p-8 rounded-3xl border border-[var(--border)] shadow-md bg-card">
              <h2 className="display text-2xl font-bold text-[var(--ink)] flex items-center gap-2">
                <UserCheck className="size-5 text-primary" /> About & Executive Bio
              </h2>
              <p className="text-base leading-relaxed text-muted-foreground whitespace-pre-line">
                {bio}
              </p>
            </Card>

            {/* Industry Tags & Skills */}
            {(industryTags.length > 0 || skills.length > 0) && (
              <Card className="flex flex-col gap-5 p-8 rounded-3xl border border-[var(--border)] bg-card shadow-md">
                {industryTags.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                      Industry Sectors
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {industryTags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-xs font-semibold text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {skills.length > 0 && (
                  <div className="flex flex-col gap-2 pt-2">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">
                      Key Competencies & Skills
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full border border-[var(--border)] bg-muted text-xs font-medium text-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            )}

            {/* Governed Seat Info */}
            <Card className="flex flex-col gap-5 p-8 rounded-3xl border border-primary/20 bg-gradient-to-br from-card via-card to-primary/5 shadow-md">
              <div className="flex items-center justify-between">
                <h3 className="display text-xl font-bold text-[var(--ink)]">Governed Seat Details</h3>
                <Tag tone="blue">1 Category / Seat</Tag>
              </div>

              <dl className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col p-4 rounded-xl bg-background border border-[var(--border)]">
                  <dt className="text-xs font-semibold text-muted-foreground uppercase">City / Location</dt>
                  <dd className="text-lg font-bold text-primary mt-1">{city}</dd>
                </div>
                <div className="flex flex-col p-4 rounded-xl bg-background border border-[var(--border)]">
                  <dt className="text-xs font-semibold text-muted-foreground uppercase">Active Circle</dt>
                  <dd className="text-lg font-bold text-[var(--ink)] mt-1">{activeCircleName || 'General Business'}</dd>
                </div>
                <div className="flex flex-col p-4 rounded-xl bg-background border border-[var(--border)]">
                  <dt className="text-xs font-semibold text-muted-foreground uppercase">Membership Tier</dt>
                  <dd className="text-sm font-semibold text-primary mt-1">{membershipStatusLabel}</dd>
                </div>
                <div className="flex flex-col p-4 rounded-xl bg-background border border-[var(--border)]">
                  <dt className="text-xs font-semibold text-muted-foreground uppercase">Governance Status</dt>
                  <dd className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1">
                    <span className="size-2 rounded-full bg-emerald-500 animate-pulse" /> Verified Active Member
                  </dd>
                </div>
                {businessType && (
                  <div className="flex flex-col p-4 rounded-xl bg-background border border-[var(--border)]">
                    <dt className="text-xs font-semibold text-muted-foreground uppercase">Business Sector</dt>
                    <dd className="text-sm font-bold text-foreground mt-1">{businessType}</dd>
                  </div>
                )}
                {experienceYears && (
                  <div className="flex flex-col p-4 rounded-xl bg-background border border-[var(--border)]">
                    <dt className="text-xs font-semibold text-muted-foreground uppercase">Experience</dt>
                    <dd className="text-sm font-bold text-foreground mt-1">{experienceYears}</dd>
                  </div>
                )}
              </dl>
            </Card>
          </div>

          {/* Right Column: Sidebar */}
          <div className="flex flex-col gap-6">
            <Card className="flex flex-col gap-5 p-7 rounded-3xl border border-[var(--border)] bg-card shadow-sm">
              <h3 className="display text-lg font-bold text-[var(--ink)]">Public Profile Link</h3>
              <p className="text-xs text-muted-foreground">Shareable public web profile URL:</p>
              
              <div className="p-3 rounded-xl bg-muted border border-[var(--border)] text-xs font-mono font-semibold text-primary break-all">
                https://peersglobal.com/[{publicSlug}]
              </div>

              <div className="flex items-center gap-2 pt-2">
                <Cta href="/membership" variant="primary" size="sm" className="w-full justify-center rounded-xl font-bold">
                  Join Circle with {name.split(' ')[0]}
                </Cta>
              </div>
            </Card>

            <Card className="flex flex-col gap-4 p-7 rounded-3xl border border-[var(--border)] bg-muted/40 shadow-sm">
              <h4 className="display text-base font-bold text-[var(--ink)] flex items-center gap-2">
                <Award className="size-4 text-[#D4AF37]" /> Verified Leadership Standards
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  Category Exclusivity seat holder in {city}
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  Zero open sales pitch policy inside Circle room
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="size-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  Synchronized real-time with Unity App backend
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
