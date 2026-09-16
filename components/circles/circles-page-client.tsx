'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import {
  Factory,
  Building2,
  Laptop,
  ShieldPlus,
  GraduationCap,
  Palette,
  HeartHandshake,
  Layers,
  Leaf,
  Truck,
  Rocket,
  TrendingUp,
  Wallet,
  Globe,
  Store,
  Users,
  Lightbulb,
  Award,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Filter,
  UserCheck,
  ChevronLeft,
} from 'lucide-react'
import { Card, Cta, Eyebrow, SectionHead, Tag } from '@/components/site/ui'
import {
  INDUSTRY_18_CIRCLES,
  INTEREST_18_CIRCLES,
  MAIN_18_CIRCLES,
  CircleCategory,
} from '@/lib/data/main-18-circles'
import { CIRCLES, Circle } from '@/lib/data/circles'
import { ACTIVE_CITIES } from '@/lib/data/site'
import { CircleMembersModal } from '@/components/circle-members-modal'

const ICON_MAP: Record<string, React.ReactNode> = {
  Factory: <Factory className="size-6 text-amber-500" />,
  Building2: <Building2 className="size-6 text-blue-500" />,
  Laptop: <Laptop className="size-6 text-indigo-500" />,
  ShieldPlus: <ShieldPlus className="size-6 text-emerald-500" />,
  GraduationCap: <GraduationCap className="size-6 text-purple-500" />,
  Palette: <Palette className="size-6 text-pink-500" />,
  HeartHandshake: <HeartHandshake className="size-6 text-rose-500" />,
  Layers: <Layers className="size-6 text-cyan-500" />,
  Leaf: <Leaf className="size-6 text-green-500" />,
  Truck: <Truck className="size-6 text-[#b45309]" />,
  Rocket: <Rocket className="size-6 text-orange-500" />,
  TrendingUp: <TrendingUp className="size-6 text-emerald-600" />,
  Wallet: <Wallet className="size-6 text-blue-600" />,
  Globe: <Globe className="size-6 text-sky-500" />,
  Store: <Store className="size-6 text-teal-600" />,
  Users: <Users className="size-6 text-indigo-600" />,
  Lightbulb: <Lightbulb className="size-6 text-amber-400" />,
  Award: <Award className="size-6 text-violet-600" />,
}

export function CirclesPageClient({ dynamicCities }: { dynamicCities: string[] }) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [modalCategory, setModalCategory] = useState<CircleCategory | null>(null)
  const [modalSelectedCity, setModalSelectedCity] = useState<string>('Ahmedabad')

  // Selected view states from query params
  const activeCategorySlug = searchParams.get('category')
  const activeCityParam = searchParams.get('city')

  const activeCategory = MAIN_18_CIRCLES.find((c) => c.slug === activeCategorySlug) || null
  const selectedCity = activeCityParam || 'Ahmedabad'

  const cityList = dynamicCities.length > 0 ? dynamicCities : ACTIVE_CITIES

  const openCityModal = (category: CircleCategory) => {
    setModalCategory(category)
    setModalSelectedCity('Ahmedabad')
  }

  const handleConfirmCity = () => {
    if (!modalCategory) return
    router.push(`/circles?category=${modalCategory.slug}&city=${encodeURIComponent(modalSelectedCity)}`)
    setModalCategory(null)
  }

  // Filter circles mapped to the selected Category + City
  const mappedCircles = CIRCLES.filter((circle) => {
    if (!activeCategory) return false
    
    // City check
    const matchesCity = circle.cities.some(
      (c) => c.toLowerCase().trim() === selectedCity.toLowerCase().trim()
    )
    if (!matchesCity) return false

    // Category key check (industry or purpose type)
    if (activeCategory.type === 'industry' && circle.type === 'industry') return true
    if (activeCategory.type === 'interest' && ((circle.type as string) === 'purpose' || (circle.type as string) === 'cohort')) return true

    return true
  })

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Header */}
      <section className="section bg-gradient-to-b from-[#0b1b3a] via-[#122347] to-background text-white border-b border-[var(--border)] pt-16 pb-20">
        <div className="shell flex flex-col gap-6 text-center max-w-4xl mx-auto">
          {activeCategory ? (
            <div className="flex flex-col gap-4 items-center">
              <button
                onClick={() => router.push('/circles')}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#D4AF37] hover:underline"
              >
                <ChevronLeft className="size-4" />
                Back to All 18 Categories
              </button>
              <Tag tone="gold">{selectedCity} Chapter Cohort</Tag>
              <h1 className="display text-3xl sm:text-5xl lg:text-6xl text-white font-semibold tracking-tight leading-snug">
                {activeCategory.name}
              </h1>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
                Showing all active governed Circles and category seat availability mapped under{' '}
                <strong className="text-white">{activeCategory.name}</strong> for{' '}
                <strong className="text-[#D4AF37]">{selectedCity} Chapter</strong>.
              </p>
            </div>
          ) : (
            <>
              <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mx-auto">
                <Filter className="size-3.5" />
                18 PRIMARY CIRCLE CATEGORIES
              </div>
              <h1 className="display text-3xl sm:text-5xl lg:text-6xl text-white font-semibold tracking-tight leading-snug">
                18 Main Categories. <br />
                <span className="bg-gradient-to-r from-white via-blue-100 to-[#D4AF37] bg-clip-text text-transparent">
                  Governed City Chapters.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
                Select any of our 18 primary categories below and choose your city cohort to view mapped Circles and seat availability.
              </p>
            </>
          )}
        </div>
      </section>

      {/* RENDER VIEW: If Category + City Selected, show mapped Circles */}
      {activeCategory ? (
        <section className="section py-16 border-b border-[var(--border)]">
          <div className="shell flex flex-col gap-10">
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[var(--border)] pb-6">
              <div>
                <h2 className="display text-2xl sm:text-3xl font-semibold text-[var(--ink)] tracking-tight leading-snug">
                  Circles in {selectedCity} for {activeCategory.name}
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  Category exclusivity enforced. One seat per promoter in {selectedCity}.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono font-bold text-muted-foreground flex items-center gap-1">
                  <MapPin className="size-4 text-red-500" />
                  Active City: <strong className="text-foreground">{selectedCity}</strong>
                </span>
                <button
                  onClick={() => openCityModal(activeCategory)}
                  className="px-4 py-2 rounded-full border border-primary text-xs font-bold text-primary hover:bg-primary/10 transition-all"
                >
                  Change City
                </button>
              </div>
            </div>

            {mappedCircles.length > 0 ? (
              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {mappedCircles.map((circle) => (
                  <Card
                    as="li"
                    key={circle.slug}
                    className="flex flex-col justify-between gap-5 p-7 rounded-3xl border border-[var(--border)] bg-card shadow-md hover:shadow-xl transition-all"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between gap-2">
                        <Tag tone={circle.type === 'industry' ? 'blue' : 'red'}>
                          {circle.type === 'industry' ? 'Industry Circle' : 'Purpose Circle'}
                        </Tag>
                        <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                          {circle.seatsOpen} Seats Open
                        </span>
                      </div>

                      <div>
                        <h3 className="display text-xl font-semibold text-[var(--ink)] leading-snug">
                          {circle.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
                          {circle.summary}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-3">
                      <CircleMembersModal
                        circleName={circle.name}
                        cityName={selectedCity}
                        chairs={circle.chairs}
                        peerMembers={circle.peerMembers}
                      />

                      <Link
                        href={`/circles/${circle.slug}?city=${encodeURIComponent(selectedCity)}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-primary hover:text-blue-700 transition-colors"
                      >
                        View Detail & Apply
                        <ArrowRight className="size-3.5" />
                      </Link>
                    </div>
                  </Card>
                ))}
              </ul>
            ) : (
              <div className="text-center py-16 text-muted-foreground border rounded-3xl bg-muted/30">
                <p className="text-base font-bold text-foreground">No active Circles listed in {selectedCity} for this category yet.</p>
                <p className="text-xs mt-1">Be the founding member to establish this Circle in {selectedCity}.</p>
                <Cta href="/membership" variant="gold" size="md" className="mt-4">
                  Apply as Circle Founder in {selectedCity}
                </Cta>
              </div>
            )}
          </div>
        </section>
      ) : (
        /* RENDER VIEW: Default 18 Main Categories Grid */
        <>
          {/* Part 1: Industry-Specific Circles (9) */}
          <section className="section py-16 border-b border-[var(--border)]">
            <div className="shell flex flex-col gap-10">
              <SectionHead
                eyebrow="Part 1"
                title="Industry-Specific Categories (9)"
                lede="Non-competing operators from the same sector. Select a category to pick your city chapter."
              />

              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {INDUSTRY_18_CIRCLES.map((c) => (
                  <CategoryCard key={c.slug} category={c} onClick={() => openCityModal(c)} />
                ))}
              </ul>
            </div>
          </section>

          {/* Part 2: Interest-Specific Circles (9) */}
          <section className="section py-16 border-b border-[var(--border)] bg-muted/40">
            <div className="shell flex flex-col gap-10">
              <SectionHead
                eyebrow="Part 2"
                title="Interest-Specific Categories (9)"
                lede="Cross-sector chapters for promoters sharing common business goals — scaling, IPO, export, or succession."
              />

              <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {INTEREST_18_CIRCLES.map((c) => (
                  <CategoryCard key={c.slug} category={c} onClick={() => openCityModal(c)} />
                ))}
              </ul>
            </div>
          </section>
        </>
      )}

      {/* City Selection Interactive Modal */}
      {modalCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-md rounded-3xl border border-[var(--border)] bg-card p-8 shadow-2xl flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold text-primary bg-primary/10 border border-primary/20 w-fit">
                <MapPin className="size-3.5 text-red-500" />
                CHOOSE CITY CHAPTER
              </span>
              <h3 className="display text-2xl font-extrabold text-foreground">
                {modalCategory.name}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Select your city to view all mapped Circles and member rosters under <strong className="text-foreground">{modalCategory.name}</strong>. Default set to <strong className="text-foreground">Ahmedabad</strong>.
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider">
                Select City
              </label>
              <select
                value={modalSelectedCity}
                onChange={(e) => setModalSelectedCity(e.target.value)}
                className="w-full rounded-2xl border-2 border-primary bg-background px-4 py-3 text-sm font-bold text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer"
              >
                {cityList.map((c) => (
                  <option key={c} value={c} className="font-semibold">
                    {c} Chapter {c === 'Ahmedabad' ? '(Default)' : ''}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2 border-t border-[var(--border)]">
              <button
                type="button"
                onClick={() => setModalCategory(null)}
                className="px-5 py-2.5 rounded-full text-xs font-bold text-muted-foreground hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleConfirmCity}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-xs font-bold text-white hover:bg-blue-600 active:scale-95 transition-all shadow-lg shadow-blue-600/30"
              >
                Show {modalSelectedCity} Circles
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <section className="section-sm bg-primary text-primary-foreground py-16">
        <div className="shell flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="eyebrow text-white/70">Saath Chalein.</p>
            <h2 className="display mt-1 text-2xl md:text-3xl font-extrabold">
              Looking for seat availability?
            </h2>
            <p className="mt-1 text-white/80 text-sm">
              Submit your category review application. A Circle Founder will audit availability inside 7 days.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Cta href="/membership" variant="gold" size="lg">
              Apply for Category Seat
            </Cta>
            <Cta href="/contact" variant="onDark" size="lg">
              Talk to Founder
            </Cta>
          </div>
        </div>
      </section>
    </div>
  )
}

function CategoryCard({ category, onClick }: { category: CircleCategory; onClick: () => void }) {
  return (
    <div
      onClick={onClick}
      className="group relative flex flex-col justify-between gap-5 p-7 rounded-3xl border border-[var(--border)] bg-card shadow-md hover:shadow-2xl hover:border-primary/50 transition-all duration-300 cursor-pointer"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex size-14 items-center justify-center rounded-2xl bg-muted/80 border border-[var(--border)] shadow-xs group-hover:scale-110 group-hover:bg-primary/10 transition-all">
            {ICON_MAP[category.iconName] || <Factory className="size-6 text-primary" />}
          </div>
          <Tag tone={category.type === 'industry' ? 'blue' : 'red'}>
            {category.type === 'industry' ? 'Industry Category' : 'Interest Category'}
          </Tag>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="display text-xl font-extrabold text-foreground group-hover:text-primary transition-colors leading-snug">
            {category.name}
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground">
            {category.description}
          </p>
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-[var(--border)] flex items-center justify-between gap-3">
        <span className="text-xs font-mono font-bold text-muted-foreground flex items-center gap-1">
          <MapPin className="size-3.5 text-red-500" />
          Choose City
        </span>

        <span className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:text-blue-700 transition-colors">
          Select City & View Circles
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </div>
  )
}
