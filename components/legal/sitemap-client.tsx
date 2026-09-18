'use client'

import React from 'react'
import Link from 'next/link'
import {
  Map,
  ChevronRight,
  Globe,
  Users,
  Compass,
  GraduationCap,
  Coins,
  ShieldCheck,
  Building,
  Briefcase,
  ArrowRight,
} from 'lucide-react'

const SITEMAP_SECTIONS = [
  {
    title: 'Our World & Movement',
    icon: Globe,
    links: [
      { name: 'About Peers Global', href: '/about' },
      { name: 'Our Story', href: '/our-story' },
      { name: 'The Idea & Philosophy', href: '/the-idea' },
      { name: 'The Founder', href: '/founder' },
      { name: '1 Million Mission', href: '/1-million-mission' },
      { name: 'Social Impact & SDGs', href: '/social-impact' },
      { name: 'Podcast & Media', href: '/media' },
      { name: 'Stories of Transformation', href: '/stories' },
    ],
  },
  {
    title: 'Circles & Chapters',
    icon: Users,
    links: [
      { name: 'Explore Circles', href: '/circles' },
      { name: 'How a Circle Works', href: '/how-a-circle-works' },
      { name: 'Roles Inside a Circle', href: '/circle-roles' },
      { name: 'Circle Meeting Experience', href: '/circle-meeting-experience' },
      { name: 'Start a Circle', href: '/start-a-circle' },
      { name: 'Circle Magazines', href: '/circle-magazines' },
    ],
  },
  {
    title: 'The Territory & Map',
    icon: Compass,
    links: [
      { name: 'The Live Map', href: '/map' },
      { name: 'Cities Network', href: '/cities' },
      { name: 'Districts & Regions', href: '/regions' },
      { name: 'India Network', href: '/india' },
      { name: 'International Expansion', href: '/international' },
      { name: 'Bring to My City', href: '/bring-to-my-city' },
    ],
  },
  {
    title: 'Growth & Learning',
    icon: GraduationCap,
    links: [
      { name: 'Learning Pillar', href: '/learning' },
      { name: 'Impact Masterclasses', href: '/masterclasses' },
      { name: 'Business Playbooks', href: '/playbooks' },
      { name: 'Mentors & Guides', href: '/mentors' },
      { name: 'Watchlist Resources', href: '/watchlist' },
      { name: 'Marketplace Deals', href: '/marketplace' },
    ],
  },
  {
    title: 'The Currency System',
    icon: Coins,
    links: [
      { name: 'The Currency Overview', href: '/the-currency' },
      { name: 'Life Impact Score', href: '/life-impact-score' },
      { name: 'How to Earn Impact', href: '/how-to-earn-impact' },
      { name: 'Impact Confirmation Ledger', href: '/impact-confirmation' },
      { name: 'Peer Standing Tiers', href: '/peer-standing' },
      { name: 'Peers Coin Standard', href: '/peers-coin' },
    ],
  },
  {
    title: 'Community Culture & Unity App',
    icon: Building,
    links: [
      { name: 'The Unity App', href: '/unity' },
      { name: 'The Give-First Principle', href: '/give-first' },
      { name: 'Peer-to-Peer Collaborations', href: '/peer-to-peer' },
      { name: '10 Forms of Collaboration', href: '/10-ways-of-collaboration' },
      { name: 'Culture & Code', href: '/culture-and-code' },
      { name: 'Lexicon of Collaboration', href: '/lexicon' },
    ],
  },
  {
    title: 'Leadership & Opportunities',
    icon: Briefcase,
    links: [
      { name: 'Leadership Overview', href: '/leadership' },
      { name: 'The Peers Board of Advisory', href: '/leadership/advisory-board' },
      { name: 'Awards & Recognition', href: '/awards' },
      { name: 'Speak at Peers Global', href: '/events/speak' },
      { name: 'Partner With Us', href: '/partner' },
      { name: 'Careers & Hiring', href: '/careers' },
      { name: 'Investor Relations', href: '/investors' },
    ],
  },
  {
    title: 'Governance, Legal & Compliance',
    icon: ShieldCheck,
    links: [
      { name: 'The Peers Code', href: '/peers-code' },
      { name: 'Community Guidelines', href: '/community-guidelines' },
      { name: 'Terms of Use', href: '/terms-of-use' },
      { name: 'Membership Terms', href: '/membership-terms' },
      { name: 'Refund & Cancellation Policy', href: '/refund-policy' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Grievance Redressal', href: '/grievance' },
      { name: 'Security & Data', href: '/security' },
      { name: 'Disclaimer', href: '/disclaimer' },
    ],
  },
]

export function SitemapClient() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1A1A1A] antialiased">
      {/* Breadcrumb */}
      <div className="border-b border-[#EADFC7]/60 bg-[#FAF6EE]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-2 text-xs text-neutral-600">
          <Link href="/" className="hover:text-neutral-900 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
          <span className="text-neutral-900 font-semibold">Sitemap</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative pt-12 pb-14 border-b border-[#EADFC7]/60 overflow-hidden bg-[#FAF7F0]/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FAF4E8] border border-[#E8DFC9] text-xs font-bold uppercase tracking-wider text-[#8C6422]">
            <Map className="w-3.5 h-3.5 text-[#8C6422]" />
            DIRECTORY &amp; INDEX
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#162039] tracking-tight leading-tight font-bold">
            Sitemap
          </h1>

          <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl">
            A comprehensive index of all portals, pillars, governance frameworks, and resources across Peers Global.
          </p>
        </div>
      </section>

      {/* Sitemap Sections Grid */}
      <section className="py-14 border-b border-[#EADFC7]/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SITEMAP_SECTIONS.map((section, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-[#E8DFC9] shadow-2xs space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-2.5 pb-2 border-b border-[#E8DFC9]">
                    <section.icon className="w-5 h-5 text-[#0D6EFD]" />
                    <h2 className="text-base font-serif font-bold text-[#142038]">
                      {section.title}
                    </h2>
                  </div>

                  <ul className="space-y-2 text-xs">
                    {section.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <Link
                          href={link.href}
                          className="text-neutral-700 hover:text-[#0D6EFD] hover:underline transition-colors flex items-center justify-between"
                        >
                          <span>{link.name}</span>
                          <ChevronRight className="w-3 h-3 text-neutral-300 shrink-0" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
