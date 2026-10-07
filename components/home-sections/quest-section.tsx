'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { GalaxyButton } from '@/components/ui/galaxy-button'

interface LsrPillar {
  letter: string
  pillarNumber: string
  title: string
  description: string
  tag: string
  // Color configuration
  activeBg: string
  activeText: string
  accentColor: string
  iconBgInactive: string
  iconBorderInactive: string
  iconTextInactive: string
}

const PILLARS: LsrPillar[] = [
  {
    letter: 'L',
    pillarNumber: 'Pillar One',
    title: 'Learn',
    description:
      'Masterclasses, playbooks, mentorship, and practical knowledge from entrepreneurs who have already built what you are building.',
    tag: 'Practitioner-Led Knowledge',
    activeBg: 'bg-gradient-to-br from-[#F59E0B] via-[#EA580C] to-[#D97706]',
    activeText: 'brand-gradient-text',
    accentColor: 'bg-amber-500',
    iconBgInactive: 'bg-gradient-to-br from-amber-500/20 via-orange-500/15 to-amber-500/10',
    iconBorderInactive: 'border-amber-500/35',
    iconTextInactive: 'text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600',
  },
  {
    letter: 'S',
    pillarNumber: 'Pillar Two',
    title: 'Sales',
    description:
      'Referrals, introductions, customer connections and market access — real business from people who understand your business.',
    tag: 'High-Trust Pipelines',
    activeBg: 'bg-gradient-to-br from-[#1D4ED8] via-[#3B82F6] to-[#1E40AF]',
    activeText: 'brand-gradient-text',
    accentColor: 'bg-blue-500',
    iconBgInactive: 'bg-gradient-to-br from-blue-500/20 via-indigo-500/15 to-blue-500/10',
    iconBorderInactive: 'border-blue-500/35',
    iconTextInactive: 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600',
  },
  {
    letter: 'R',
    pillarNumber: 'Pillar Three',
    title: 'Resources',
    description:
      'Talent, capital, partners, suppliers, technology and expertise, available through the community whenever you need them.',
    tag: 'Collective Infrastructure',
    activeBg: 'bg-gradient-to-br from-[#E11D48] via-[#F43F5E] to-[#BE123C]',
    activeText: 'brand-gradient-text',
    accentColor: 'bg-rose-500',
    iconBgInactive: 'bg-gradient-to-br from-rose-500/20 via-pink-500/15 to-rose-500/10',
    iconBorderInactive: 'border-rose-500/35',
    iconTextInactive: 'text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-600',
  },
]

export function QuestSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="fd-what-is-mindvalley !py-20 md:!py-28 !px-6 md:!px-12" id="lsr-section">
      <div className="fd-what-is-mindvalley__inner !mb-12">
        <div className="fd-what-is-mindvalley__intro !gap-8">
          {/* Eyebrow & Titles following the exact 'What Peers Global Is' font styling */}
          <div className="fd-what-is-mindvalley__titles !gap-5">
            <p className="fd-what-is-mindvalley__eyebrow brand-gradient-text" data-fd-rise="0">
              THE LEADERSHIP PATHWAY
            </p>

            <div className="fd-what-is-mindvalley__copy !w-full !max-w-[880px] !gap-4">
              <h2 className="fd-what-is-mindvalley__headline" data-fd-rise="80">
                <span>You can come here to grow.</span>{' '}
                <span>You can also grow into someone who helps others grow.</span>
              </h2>
              <div className="space-y-2 max-w-3xl mx-auto">
                <p className="fd-what-is-mindvalley__paragraph !text-base sm:!text-[18px] !leading-relaxed" data-fd-rise="160">
                  PEERS GLOBAL creates pathways for entrepreneurs who want to contribute beyond their own business.
                </p>
                <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed" data-fd-rise="200">
                  From participating in a Circle to taking responsibility for one, leadership can develop through service, contribution and experience. Leadership is not simply a bigger title — it is a greater responsibility for the people around you.
                </p>
              </div>
            </div>
          </div>

          {/* 3 Core Pillars: Service, Contribution, Experience */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full max-w-5xl mx-auto mt-2 text-center">
            {/* Service */}
            <div className="bg-white/85 backdrop-blur-md rounded-2xl p-7 sm:p-8 border border-white/80 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/15 to-orange-500/15 border border-amber-500/30 text-amber-600 font-bold flex items-center justify-center text-xl shadow-sm mx-auto mb-4">
                  S
                </div>
                <span className="text-[11px] uppercase tracking-widest text-amber-600 font-semibold block mb-1">Pillar One</span>
                <h3 className="fd-what-is-mindvalley__stat-value !text-3xl sm:!text-[32px] !leading-tight font-bold mb-3">
                  Service
                </h3>
                <p className="text-slate-600 text-sm sm:text-[15px] font-normal leading-relaxed">
                  From participating in a Circle to taking responsibility for one, leadership begins with selfless service to fellow entrepreneurs.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-amber-600 font-medium">
                <span>Lead By Serving</span>
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              </div>
            </div>

            {/* Contribution */}
            <div className="bg-white/85 backdrop-blur-md rounded-2xl p-7 sm:p-8 border border-white/80 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/15 to-indigo-500/15 border border-blue-500/30 text-blue-600 font-bold flex items-center justify-center text-xl shadow-sm mx-auto mb-4">
                  C
                </div>
                <span className="text-[11px] uppercase tracking-widest text-blue-600 font-semibold block mb-1">Pillar Two</span>
                <h3 className="fd-what-is-mindvalley__stat-value !text-3xl sm:!text-[32px] !leading-tight font-bold mb-3">
                  Contribution
                </h3>
                <p className="text-slate-600 text-sm sm:text-[15px] font-normal leading-relaxed">
                  Creating pathways for entrepreneurs who want to contribute beyond their own business, turning collective momentum into shared success.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-blue-600 font-medium">
                <span>Elevate The Room</span>
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-white/85 backdrop-blur-md rounded-2xl p-7 sm:p-8 border border-white/80 shadow-xl shadow-blue-900/5 hover:shadow-2xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group">
              <div>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500/15 to-pink-500/15 border border-rose-500/30 text-rose-600 font-bold flex items-center justify-center text-xl shadow-sm mx-auto mb-4">
                  E
                </div>
                <span className="text-[11px] uppercase tracking-widest text-rose-600 font-semibold block mb-1">Pillar Three</span>
                <h3 className="fd-what-is-mindvalley__stat-value !text-3xl sm:!text-[32px] !leading-tight font-bold mb-3">
                  Experience
                </h3>
                <p className="text-slate-600 text-sm sm:text-[15px] font-normal leading-relaxed">
                  Leadership is not simply a bigger title. It is a greater responsibility for the people around you, honed through real experience.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-rose-600 font-medium">
                <span>Greater Responsibility</span>
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
              </div>
            </div>
          </div>

          {/* Anchor statement & CTA Button matching design standards */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-6 pb-2 border-t border-slate-200/80 w-full max-w-5xl mx-auto mt-4">
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Closing line</p>
              <p className="text-base sm:text-lg md:text-xl font-semibold text-[#0F131A] italic tracking-wide">
                &ldquo;The question is not only: &lsquo;How far can I go?&rsquo; It is also: &lsquo;How many people can move forward because I chose to lead?&rsquo;&rdquo;
              </p>
            </div>
            <GalaxyButton
              href="/leadership"
              size="lg"
            >
              EXPLORE LEADERSHIP
            </GalaxyButton>
          </div>
        </div>
      </div>
    </section>
  )
}

