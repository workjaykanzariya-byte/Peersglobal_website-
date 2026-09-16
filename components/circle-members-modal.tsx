'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/site/ui'
import { UserCheck, X, Building2, MapPin, ShieldCheck, Loader2 } from 'lucide-react'
import { getAllMembers, PeerMemberProfile } from '@/lib/api/members'

interface CircleMembersModalProps {
  circleName: string
  cityName?: string
  chairs?: any[]
  peerMembers?: any[]
}

function isMatchingCircle(memberCircleStr: string | null | undefined, targetCircleName: string): boolean {
  if (!memberCircleStr) return false
  const m = memberCircleStr.toLowerCase().trim()
  const t = targetCircleName.toLowerCase().trim()

  if (!m || !t) return false

  if (m === t || m.includes(t) || t.includes(m)) return true

  const stopWords = new Set(['circle', 'circles', 'group', 'chapter', 'the', 'and', 'for', 'ltd', 'pvt', 'inc', 'one'])
  const mTokens = m.split(/[^a-z0-9]+/).filter((w) => w.length >= 3 && !stopWords.has(w))
  const tTokens = t.split(/[^a-z0-9]+/).filter((w) => w.length >= 3 && !stopWords.has(w))

  if (mTokens.length === 0 || tTokens.length === 0) return false

  return mTokens.some((tok) => tTokens.includes(tok))
}

export function CircleMembersModal({ circleName, cityName }: CircleMembersModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [dynamicMembers, setDynamicMembers] = useState<PeerMemberProfile[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    async function loadCircleMembers() {
      try {
        const all = await getAllMembers()
        const targetCity = (cityName || 'Ahmedabad').toLowerCase().trim()
        
        // 1. Filter strictly by City + Circle
        let matched = all.filter((m) => {
          const memberCity = (m.city || m.city_name || 'Ahmedabad').toLowerCase().trim()
          if (targetCity && memberCity !== targetCity) return false

          if (isMatchingCircle(m.active_circle_name, circleName)) return true
          if (isMatchingCircle(m.active_circle?.name, circleName)) return true
          if (m.circles && m.circles.some((c) => isMatchingCircle(c.circle_name, circleName))) return true
          return false
        })

        // 2. If no direct circle match found, fallback strictly to members in that specific city
        if (matched.length === 0 && all.length > 0) {
          matched = all.filter((m) => {
            const memberCity = (m.city || m.city_name || 'Ahmedabad').toLowerCase().trim()
            return memberCity === targetCity
          })
        }

        if (isMounted) {
          setDynamicMembers(matched)
        }
      } catch (err) {
        console.error('Failed to load circle roster:', err)
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    loadCircleMembers()

    return () => {
      isMounted = false
    }
  }, [circleName, cityName])

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-700 hover:to-teal-700 active:scale-95 transition-all shadow-md hover:shadow-lg border border-emerald-500/20"
      >
        <UserCheck className="size-4" />
        View Circle Members ({loading ? '...' : dynamicMembers.length})
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="relative w-full max-w-4xl max-h-[85vh] flex flex-col bg-background rounded-2xl shadow-2xl border border-[var(--border)] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--border)] bg-muted/40">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center font-bold">
                  <ShieldCheck className="size-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground">
                    Circle Roster ({dynamicMembers.length} Members)
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    Governed category seat holders in <span className="font-semibold text-foreground">{circleName}</span>
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-xl hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Close modal"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {loading ? (
                <div className="flex flex-col items-center justify-center py-16 gap-3 text-muted-foreground">
                  <Loader2 className="size-8 text-primary animate-spin" />
                  <p className="text-xs font-mono">Syncing circle roster from Unity App PostgreSQL backend...</p>
                </div>
              ) : dynamicMembers.length > 0 ? (
                /* Dynamic Members from Unity App API */
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {dynamicMembers.map((member) => {
                    const profileLink = `/${member.public_profile_slug || member.slug || `peer-${member.id}`}`
                    const photo = member.photo || member.profile_image_url
                    const company = member.company || member.company_name || 'Member Enterprise'
                    
                    // Match circle role
                    const matchedCircleObj = member.circles?.find((c) =>
                      isMatchingCircle(c.circle_name, circleName)
                    )
                    const role = matchedCircleObj?.role || 'Circle Member'
                    const isChair = role.toLowerCase().includes('chair')

                    return (
                      <Card
                        key={member.id}
                        className={`group flex flex-col justify-between p-5 transition-all rounded-2xl border ${
                          isChair
                            ? 'border-emerald-500/40 bg-gradient-to-b from-emerald-50/80 to-background dark:from-emerald-950/20 dark:to-background'
                            : 'border-[var(--border)] bg-card'
                        } shadow-sm hover:shadow-md`}
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between gap-2">
                            <span
                              className={`inline-flex items-center gap-1.5 text-[11px] font-bold px-2.5 py-0.5 rounded-md border ${
                                isChair
                                  ? 'text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/60 border-emerald-300 dark:border-emerald-700'
                                  : 'text-slate-700 dark:text-slate-300 bg-muted border-[var(--border)]'
                              }`}
                            >
                              <span className={`size-1.5 rounded-full ${isChair ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`} />
                              {role}
                            </span>
                            {member.membership_status_label && (
                              <span className="text-[10px] text-muted-foreground font-mono">
                                {member.membership_status_label}
                              </span>
                            )}
                          </div>

                          <div className="flex items-start gap-3">
                            <div className="relative size-11 rounded-xl overflow-hidden border border-[var(--border)] bg-muted shrink-0">
                              {photo ? (
                                <Image
                                  src={photo}
                                  alt={member.name}
                                  fill
                                  sizes="44px"
                                  className="object-cover"
                                />
                              ) : (
                                <div className="flex size-full items-center justify-center font-bold text-primary bg-primary/10 text-sm">
                                  {member.name.charAt(0)}
                                </div>
                              )}
                            </div>

                            <div className="min-w-0">
                              <Link
                                href={profileLink}
                                className="text-base font-bold text-foreground group-hover:text-primary transition-colors block truncate"
                              >
                                {member.name}
                              </Link>
                              {member.designation && (
                                <p className="text-xs text-primary font-medium truncate">{member.designation}</p>
                              )}
                              <div className="flex items-center gap-1.5 mt-0.5 text-xs text-muted-foreground">
                                <Building2 className="size-3.5 shrink-0 text-muted-foreground/70" />
                                <span className="truncate">{company}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between text-[11px]">
                          <span className="text-muted-foreground flex items-center gap-1">
                            <MapPin className="size-3 text-red-500" />
                            {member.city || 'Ahmedabad'}
                          </span>
                          <Link href={profileLink} className="font-bold text-primary hover:underline">
                            View Profile →
                          </Link>
                        </div>
                      </Card>
                    )
                  })}
                </div>
              ) : (
                <div className="text-center py-12 text-muted-foreground">
                  <p>No active members currently listed in Unity App PostgreSQL backend for this Circle.</p>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-[var(--border)] bg-muted/30">
              <span className="text-xs text-muted-foreground">
                Exclusive non-competing seats verified by Peers Global Governance.
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-xs font-semibold rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-colors shadow-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
