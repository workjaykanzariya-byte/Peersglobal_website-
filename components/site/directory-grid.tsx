'use client'

import React, { useState, useMemo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MapPin, User, ChevronDown, Search, Heart, Briefcase } from 'lucide-react'
import { Tag } from '@/components/site/ui'
import { PeerMember } from '@/lib/api/unity'

interface DirectoryGridProps {
  members: PeerMember[]
}

const PAGE_SIZE = 12

export function DirectoryGrid({ members }: DirectoryGridProps) {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedRole, setSelectedRole] = useState('all')
  const [selectedCircle, setSelectedCircle] = useState('all')

  const circleOptions = useMemo(() => {
    const set = new Set<string>()
    members.forEach((m) => {
      if (m.active_circle_name) set.add(m.active_circle_name)
    })
    return Array.from(set)
  }, [members])

  const filteredMembers = useMemo(() => {
    return members.filter((m) => {
      if (selectedCircle !== 'all' && m.active_circle_name !== selectedCircle) return false
      if (selectedRole === 'founder' && !m.designation?.toLowerCase().includes('founder') && !m.designation?.toLowerCase().includes('director')) return false
      if (selectedRole === 'promoter' && !m.designation?.toLowerCase().includes('promoter') && !m.designation?.toLowerCase().includes('ceo')) return false

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase()
        const matchName = m.name?.toLowerCase().includes(q)
        const matchComp = m.company?.toLowerCase().includes(q)
        const matchDesig = m.designation?.toLowerCase().includes(q)
        const matchCircle = m.active_circle_name?.toLowerCase().includes(q)
        if (!matchName && !matchComp && !matchDesig && !matchCircle) return false
      }
      return true
    })
  }, [members, searchQuery, selectedRole, selectedCircle])

  if (members.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center text-center py-16 border border-dashed border-[var(--border)] rounded-2xl p-8 bg-card">
        <User className="size-12 text-muted-foreground mb-3" />
        <h3 className="display text-xl font-bold text-foreground">No dynamic leaders fetched right now.</h3>
        <p className="text-sm text-muted-foreground mt-1 max-w-md">
          Make sure the Unity App server is active and the API token is valid.
        </p>
      </div>
    )
  }

  const visibleMembers = filteredMembers.slice(0, visibleCount)
  const hasMore = visibleCount < filteredMembers.length

  return (
    <div className="flex flex-col gap-8">
      {/* Interactive Leader Filters Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-muted/40 border border-[var(--border)] shadow-xs">
        <div className="relative flex-1">
          <Search className="absolute left-3.5 top-3 size-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search leaders by name, company, or title..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl border border-[var(--border)] bg-background pl-10 pr-4 py-2 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <select
            value={selectedCircle}
            onChange={(e) => setSelectedCircle(e.target.value)}
            className="rounded-xl border border-[var(--border)] bg-background px-4 py-2 text-xs font-bold text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="all">All Circles</option>
            {circleOptions.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>

          <div className="flex items-center gap-1 bg-background border border-[var(--border)] rounded-xl p-1 text-xs">
            <button
              type="button"
              onClick={() => setSelectedRole('all')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                selectedRole === 'all' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              All Leaders
            </button>
            <button
              type="button"
              onClick={() => setSelectedRole('founder')}
              className={`px-3 py-1.5 rounded-lg font-bold transition-colors ${
                selectedRole === 'founder' ? 'bg-primary text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Founders & Directors
            </button>
          </div>
        </div>
      </div>

      {/* Filtered Count Banner */}
      <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
        <span>Showing {visibleMembers.length} of {filteredMembers.length} verified leaders</span>
      </div>

      {/* Grid View */}
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visibleMembers.map((m) => {
          const profileSlug = m.slug || `peer-${m.id}`
          return (
            <li
              key={m.id}
              className="surface group relative flex flex-col gap-4 p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/40 rounded-3xl border border-[var(--border)] bg-card"
            >
              <div className="flex items-start gap-4">
                {/* Avatar Photo */}
                <div className="relative size-16 shrink-0 overflow-hidden rounded-2xl border border-[var(--border)] bg-muted shadow-sm">
                  {m.photo ? (
                    <Image
                      src={m.photo}
                      alt={m.name}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex size-full items-center justify-center text-xl font-extrabold text-primary bg-primary/10">
                      {m.name ? m.name.charAt(0) : 'P'}
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-1 min-w-0 pr-8">
                  <Link
                    href={`/${profileSlug}`}
                    className="font-bold text-lg text-foreground hover:text-primary transition-colors truncate"
                  >
                    {m.name}
                  </Link>
                  {m.designation && (
                    <p className="text-xs font-bold text-primary flex items-center gap-1">
                      <Briefcase className="size-3 shrink-0" />
                      <span className="truncate">{m.designation}</span>
                    </p>
                  )}
                  {m.company && (
                    <p className="text-xs font-semibold text-foreground/80 truncate">{m.company}</p>
                  )}
                  {m.address && (
                    <p className="text-[11px] text-muted-foreground flex items-center gap-1">
                      <MapPin className="size-3 text-red-500 shrink-0" />
                      <span className="truncate">{m.address}</span>
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <Tag tone="gold">Verified Leader</Tag>
                {m.active_circle_name && (
                  <Tag tone="blue">{m.active_circle_name}</Tag>
                )}
              </div>

              {m.business_description && (
                <p className="text-xs leading-relaxed text-muted-foreground line-clamp-2">
                  {m.business_description}
                </p>
              )}

              <div className="mt-auto pt-4 border-t border-[var(--border)] flex items-center justify-between">
                <span className="text-[11px] font-mono text-muted-foreground truncate max-w-[160px]">
                  {m.email || m.company || 'Peers Global'}
                </span>
                <Link
                  href={`/${profileSlug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-blue-700 transition-colors"
                >
                  View Profile →
                </Link>
              </div>
            </li>
          )
        })}
      </ul>

      {/* Load More Button */}
      {hasMore && (
        <div className="flex justify-center pt-4">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => prev + PAGE_SIZE)}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-bold hover:bg-blue-700 transition-all shadow-lg active:scale-95"
          >
            <span>Load More Leaders</span>
            <ChevronDown className="size-4" />
          </button>
        </div>
      )}
    </div>
  )
}
