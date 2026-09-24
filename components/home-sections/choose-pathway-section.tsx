'use client'

import React, { useState } from 'react'

const pathways = [
  {
    id: 'mind',
    title: 'The Extraordinary Mind',
    subtitle: 'Rewrite the beliefs you never chose',
    meta: '24 Programs · 19 Teachers',
    image: 'https://a.storyblok.com/f/312081/1920x1080/2540700ff4/pathway_theextraordinarymind-keyart.webp/m/830x0/filters:format(webp):quality(80)',
    yearlyPrice: '$299',
    monthlyPrice: '$49',
  },
  {
    id: 'business',
    title: 'The Exponential Entrepreneur',
    subtitle: 'Build with AI as your workforce',
    meta: '26 Programs · 23 Teachers',
    image: 'https://a.storyblok.com/f/312081/1920x1080/1655b376ee/pathway_theexponentialentrepreneur-keyart.webp/m/830x0/filters:format(webp):quality(80)',
    yearlyPrice: '$299',
    monthlyPrice: '$49',
  },
  {
    id: 'influence',
    title: 'The Expert & Authority',
    subtitle: 'Lead with influence',
    meta: '14 Programs · 15 Teachers',
    image: 'https://a.storyblok.com/f/312081/1920x1080/e542ef843a/pathway_theexpertandauthority-keyart.webp/m/830x0/filters:format(webp):quality(80)',
    yearlyPrice: '$299',
    monthlyPrice: '$49',
  },
  {
    id: 'relationships',
    title: 'The Art of Connection',
    subtitle: 'Build deep, authentic relationships',
    meta: '16 Programs · 12 Teachers',
    image: 'https://a.storyblok.com/f/312081/1920x1080/1908aa3420/pathway_theartofconnection-keyart.webp/m/830x0/filters:format(webp):quality(80)',
    yearlyPrice: '$299',
    monthlyPrice: '$49',
  },
  {
    id: 'body',
    title: 'The Ageless Body',
    subtitle: 'Optimize your energy and longevity',
    meta: '18 Programs · 14 Teachers',
    image: 'https://a.storyblok.com/f/312081/1920x1080/a9b8ff5e91/pathway_theagelessbody-keyart.webp/m/830x0/filters:format(webp):quality(80)',
    yearlyPrice: '$299',
    monthlyPrice: '$49',
  },
  {
    id: 'spirit',
    title: 'The Modern Mystic',
    subtitle: 'Expand your consciousness and intuition',
    meta: '20 Programs · 16 Teachers',
    image: 'https://a.storyblok.com/f/312081/1920x1080/be11cb5561/pathway_themodernmystic-keyart.webp/m/830x0/filters:format(webp):quality(80)',
    yearlyPrice: '$299',
    monthlyPrice: '$49',
  },
]

export function ChoosePathwaySection() {
  const sectionRef = React.useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [billing, setBilling] = useState<'yearly' | 'monthly'>('yearly')
  const [selectedIds, setSelectedIds] = useState<string[]>([])
  const [scrollProgress, setScrollProgress] = useState(0)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    const handleMotionChange = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches)
    mediaQuery.addEventListener('change', handleMotionChange)

    let animationFrameId: number

    const handleScroll = () => {
      if (!sectionRef.current) return
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight || document.documentElement.clientHeight
      const totalDistance = windowHeight + rect.height
      const currentPos = windowHeight - rect.top
      const progress = Math.max(0, Math.min(1, currentPos / (totalDistance * 0.7)))
      setScrollProgress(progress)
    }

    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )
    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    handleScroll()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(animationFrameId)
      mediaQuery.removeEventListener('change', handleMotionChange)
    }
  }, [])

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const isAllAccess = selectedIds.length >= 2

  const contentTranslateY = prefersReducedMotion ? 0 : (1 - scrollProgress) * 32
  const contentOpacity = prefersReducedMotion ? 1 : Math.max(0, Math.min(1, scrollProgress * 1.5))

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#061320] text-white py-24 px-6 md:px-12 relative overflow-hidden font-sans"
    >
      {/* Header */}
      <div
        style={{
          transform: prefersReducedMotion ? 'none' : `translate3d(0, ${contentTranslateY}px, 0)`,
          opacity: contentOpacity,
          transition: 'transform 0.12s ease-out, opacity 0.15s ease-out',
          willChange: 'transform, opacity',
        }}
        className="max-w-[800px] mx-auto text-center mb-12 flex flex-col items-center gap-3"
      >
        <p className="text-xs md:text-sm font-semibold tracking-widest text-[#E2CEA0] uppercase">
          CHOOSE YOUR PATHWAY
        </p>
        <h2 className="text-3xl md:text-5xl font-semibold text-white tracking-tight">
          Pick a Pathway or Take All Six
        </h2>
        <p className="text-base md:text-lg text-[#9CA3AF] max-w-[620px]">
          Choose the one area you most want to grow in, or take all six and go all-in.
        </p>
        <p className="text-sm text-[#9CA3AF]">
          Yearly or monthly. <span className="font-semibold text-white">Cancel anytime.</span>
        </p>

        {/* Toggle Yearly / Monthly */}
        <div className="inline-flex items-center p-1 rounded-full bg-white/10 border border-white/10 mt-4 backdrop-blur-md">
          <button
            type="button"
            onClick={() => setBilling('yearly')}
            className={`px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
              billing === 'yearly'
                ? 'bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white shadow-md'
                : 'text-[#9CA3AF] hover:text-white'
            }`}
          >
            Yearly (Save up to 58%)
          </button>
          <button
            type="button"
            onClick={() => setBilling('monthly')}
            className={`px-5 py-2 rounded-full text-xs md:text-sm font-medium transition-all ${
              billing === 'monthly'
                ? 'bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white shadow-md'
                : 'text-[#9CA3AF] hover:text-white'
            }`}
          >
            Monthly
          </button>
        </div>
      </div>

      {/* Pathways List Cards */}
      <div
        style={{
          transform: prefersReducedMotion ? 'none' : `translate3d(0, ${contentTranslateY * 0.7}px, 0)`,
          opacity: contentOpacity,
          transition: 'transform 0.12s ease-out, opacity 0.15s ease-out',
          willChange: 'transform, opacity',
        }}
        className="max-w-[1000px] mx-auto flex flex-col gap-4 mb-20"
      >
        {pathways.map((item) => {
          const isSelected = selectedIds.includes(item.id)
          const price = billing === 'yearly' ? item.yearlyPrice : item.monthlyPrice
          const period = billing === 'yearly' ? '/year' : '/month'

          return (
            <div
              key={item.id}
              onClick={() => toggleSelect(item.id)}
              className={`flex items-center justify-between p-4 md:p-6 rounded-2xl border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-white/10 border-[#1D4ED8] shadow-lg shadow-[#1D4ED8]/20'
                  : 'bg-white/[0.04] border-white/10 hover:border-white/20 hover:bg-white/[0.06]'
              }`}
            >
              <div className="flex items-center gap-4 md:gap-6 min-w-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-12 md:w-24 md:h-16 rounded-xl object-cover flex-shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="text-base md:text-lg font-semibold text-white truncate">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-[#9CA3AF] truncate">{item.subtitle}</p>
                  <p className="text-[11px] md:text-xs text-[#6B7280] mt-1">{item.meta}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 md:gap-6 flex-shrink-0">
                <div className="text-right">
                  <p className="text-base md:text-xl font-bold text-white">
                    {price}
                    <span className="text-xs md:text-sm font-normal text-[#9CA3AF]">{period}</span>
                  </p>
                  <p className="text-[10px] md:text-xs text-[#6B7280]">
                    {billing === 'yearly' ? 'Annual Subscription' : 'Monthly Subscription'}
                  </p>
                </div>

                <div
                  className={`w-6 h-6 rounded-md border flex items-center justify-center transition-colors ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] border-none text-white'
                      : 'border-white/30 bg-transparent'
                  }`}
                >
                  {isSelected && (
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Dynamic Sticky Bottom Bar - Appears smoothly when section is active */}
      <div
        className={`fixed bottom-0 inset-x-0 z-50 bg-[#081827]/95 border-t border-white/10 backdrop-blur-xl py-3 md:py-4 px-6 md:px-12 shadow-2xl transition-all duration-300 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <div className="max-w-[1000px] mx-auto flex items-center justify-between gap-4">
          <div className="text-left">
            <p className="text-sm md:text-base font-semibold text-white">
              {isAllAccess
                ? 'Get All 6 Pathways with All Access Membership'
                : selectedIds.length === 1
                ? `1 Pathway Selected (${pathways.find((p) => p.id === selectedIds[0])?.title})`
                : 'Select a Pathway To Begin'}
            </p>
            <p className="text-xs text-[#9CA3AF]">
              {isAllAccess
                ? 'Unlimited access to all 110+ programs, teachers & community'
                : 'Or take all six together for $399'}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <a
              href="https://www.mindvalley.com/membership"
              className={`px-7 py-2.5 rounded-full text-sm font-semibold transition-all ${
                selectedIds.length > 0
                  ? 'bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] hover:opacity-90 text-white shadow-lg shadow-[#1D4ED8]/30'
                  : 'bg-[#152438] hover:bg-[#1C2F49] text-[#8EA2B6]'
              }`}
            >
              Select Pathway
            </a>
            <div className="flex items-center gap-1.5 text-[11px] text-[#8EA2B6] mt-1.5">
              <svg
                className="w-3.5 h-3.5 stroke-current fill-none"
                viewBox="0 0 24 24"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span>15 day money back guarantee</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
