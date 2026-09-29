import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getMemberProfile, getAllMembers, PeerMemberProfile } from '@/lib/api/members'
import { PeerProfileClient } from '@/components/peers/peer-profile-client'

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

// Default Fallback Profile for Genie / Demo
const DEFAULT_GENIE_PROFILE: PeerMemberProfile = {
  id: 'peers-global-genie',
  public_profile_slug: 'peers',
  name: 'Peers Global Genie',
  first_name: 'Peers Global',
  last_name: 'Genie',
  designation: 'Verified Peer Member',
  company: 'Peers Global Member Company',
  company_name: 'Peers Global Member Company',
  email: 'genie@peersglobal.com',
  mobile: null,
  city: 'Ahmedabad, India',
  photo: '/images/floating-trigger-emblem.png',
  profile_image_url: '/images/floating-trigger-emblem.png',
  cover_photo_url: '/images/navbar-earth-bg.jpg',
  membership_status: 'Free Trial Peer',
  membership_status_label: 'Free Trial Peer',
  active_circle_name: 'Peers Global Circle',
  bio: 'Peers Global Genie is the Verified Peer Member at Peers Global Member Company based in Ahmedabad, India. Active verified Free Trial Peer holding a governed category seat in Peers Global Circle.',
  business_description: 'Active verified Free Trial Peer holding a governed category seat in Peers Global Circle.',
  industry_tags: ['General Business', 'Community'],
  skills: ['Collaboration', 'Leadership'],
  experience_years: '5+',
  business_type: 'Member Organization',
  website: 'https://peersglobal.com',
  social_links: {
    website: 'https://peersglobal.com',
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params
  const identifier = parseSlug(username)
  
  if (identifier === 'peers' || identifier === 'peers-global-genie') {
    return {
      title: 'Peers Global Genie — Verified Peer Member | Peers Global',
      description: 'Peers Global Genie is the Verified Peer Member at Peers Global Member Company based in Ahmedabad, India.',
    }
  }

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
    return {
      title: `${decodeURIComponent(username)} — Peer Member | Peers Global`,
      description: `View ${decodeURIComponent(username)}'s verified Peer Profile on Peers Global.`,
    }
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

  // If identifier is 'peers' or 'peers-global-genie' or if no member matched, provide default template profile
  if (!profile) {
    if (identifier === 'peers' || identifier === 'peers-global-genie' || identifier === 'genie') {
      profile = DEFAULT_GENIE_PROFILE
    } else {
      // Create customized dynamic profile with the requested name
      const formattedName = decodeURIComponent(username)
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase())

      profile = {
        ...DEFAULT_GENIE_PROFILE,
        id: identifier,
        name: formattedName,
        public_profile_slug: identifier,
        bio: `${formattedName} is the Verified Peer Member at Peers Global Member Company based in Ahmedabad, India. Active verified Free Trial Peer holding a governed category seat in Peers Global Circle.`,
      }
    }
  }

  return <PeerProfileClient profile={profile} username={username} />
}
