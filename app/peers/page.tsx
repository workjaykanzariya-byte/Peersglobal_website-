import type { Metadata } from 'next'
import { PeerProfileClient } from '@/components/peers/peer-profile-client'
import { PeerMemberProfile } from '@/lib/api/members'

export const metadata: Metadata = {
  title: 'Peers Global Genie — Verified Peer Member | Peers Global',
  description:
    'Peers Global Genie is the Verified Peer Member at Peers Global Member Company based in Ahmedabad, India.',
  openGraph: {
    title: 'Peers Global Genie — Verified Peer Member | Peers Global',
    description:
      'Peers Global Genie is the Verified Peer Member at Peers Global Member Company based in Ahmedabad, India.',
    images: ['/images/floating-trigger-emblem.png'],
  },
}

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
  business_description:
    'Active verified Free Trial Peer holding a governed category seat in Peers Global Circle.',
  industry_tags: ['General Business', 'Community'],
  skills: ['Collaboration', 'Leadership'],
  experience_years: '5+',
  business_type: 'Member Organization',
  website: 'https://peersglobal.com',
  social_links: {
    website: 'https://peersglobal.com',
  },
}

export default function PeersPage() {
  return <PeerProfileClient profile={DEFAULT_GENIE_PROFILE} username="peers" />
}
