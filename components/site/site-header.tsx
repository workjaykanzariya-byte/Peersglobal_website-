
'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import { Logo } from '@/components/site/logo'
import { HEADER_NAV, SITE, NavItem } from '@/lib/data/site'
import { cn } from '@/lib/utils'

export function SiteHeader() {
  const pathname = usePathname()
  const [openMenu, setOpenMenu] = React.useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  const [mobileAccordion, setMobileAccordion] = React.useState<string | null>(null)
  const hoverTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  React.useEffect(() => {
    setOpenMenu(null)
    setMobileMenuOpen(false)
  }, [pathname])

  React.useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const handleMouseEnter = (label: string) => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    setOpenMenu(label)
  }

  const handleMouseLeave = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
    hoverTimer.current = setTimeout(() => {
      setOpenMenu(null)
    }, 180)
  }

  const keepMenuOpen = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current)
  }

  const toggleMobileAccordion = (label: string) => {
    setMobileAccordion((prev) => (prev === label ? null : label))
  }

  const activeItem = HEADER_NAV.find((item) => item.label === openMenu)
  const navContainerRef = React.useRef<HTMLElement | null>(null)
  const itemRefs = React.useRef<{ [key: string]: HTMLElement | null }>({})
  const [pillStyle, setPillStyle] = React.useState<{ left: number; width: number; opacity: number }>({
    left: 0,
    width: 0,
    opacity: 0,
  })

  // Update sliding pill position smoothly
  const updatePill = React.useCallback(
    (targetLabel: string | null) => {
      const activeLabel =
        targetLabel ||
        HEADER_NAV.find(
          (it) =>
            pathname === it.href ||
            (it.href !== '/' && pathname.startsWith(it.href)) ||
            it.children?.some((c) => pathname === c.href)
        )?.label

      if (!activeLabel || !itemRefs.current[activeLabel] || !navContainerRef.current) {
        if (!targetLabel) {
          setPillStyle((prev) => ({ ...prev, opacity: 0 }))
        }
        return
      }

      const el = itemRefs.current[activeLabel]!
      const nav = navContainerRef.current
      const elRect = el.getBoundingClientRect()
      const navRect = nav.getBoundingClientRect()

      setPillStyle({
        left: elRect.left - navRect.left,
        width: elRect.width,
        opacity: 1,
      })
    },
    [pathname]
  )

  React.useEffect(() => {
    updatePill(openMenu)
  }, [openMenu, updatePill])

  React.useEffect(() => {
    // Initial pill placement on mount or route change
    const t = setTimeout(() => updatePill(null), 50)
    return () => clearTimeout(t)
  }, [pathname, updatePill])

  return (
    <>
      {/* ===================================================================== */}
      {/* PRIMARY NAVBAR                                                        */}
      {/* ===================================================================== */}
      <header
        className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/90 transition-all shadow-xs"
        onMouseLeave={handleMouseLeave}
      >
        {/* Desktop Navigation Items with Simple Anchored Floating Dropdowns */}
        <div className="mx-auto flex h-20 max-w-[1640px] items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Logo (Full Color on White) */}
          <div className="flex items-center shrink-0">
            <Logo onDark={false} className="scale-95 sm:scale-100 origin-left" />
          </div>

          {/* Center Desktop Navigation */}
          <nav
            ref={navContainerRef}
            aria-label="Primary Navigation"
            onMouseEnter={keepMenuOpen}
            className="relative hidden lg:flex items-center gap-1 xl:gap-1.5 h-full py-2"
          >
            {/* Smooth Sliding Pill Indicator */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 -translate-y-1/2 h-9 rounded-full border border-blue-500/20 bg-blue-50/80 shadow-[0_2px_8px_rgba(30,78,216,0.06)] transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
              style={{
                left: pillStyle.left,
                width: pillStyle.width,
                opacity: pillStyle.opacity,
              }}
            />

            {HEADER_NAV.map((item) => {
              const hasSubmenu = Boolean(item.children && item.children.length > 0)
              const isActive =
                pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href)) ||
                Boolean(item.children?.some((c) => pathname === c.href))
              const isHovered = openMenu === item.label

              if (item.type === 'direct') {
                return (
                  <Link
                    key={item.label}
                    ref={(el) => {
                      itemRefs.current[item.label] = el
                    }}
                    href={item.href}
                    onMouseEnter={() => {
                      if (hoverTimer.current) clearTimeout(hoverTimer.current)
                      setOpenMenu(null)
                    }}
                    className={cn(
                      'relative z-10 px-4 py-2 text-[13px] font-medium tracking-tight rounded-full transition-colors duration-200 whitespace-nowrap',
                      isHovered || (isActive && !openMenu)
                        ? 'text-[#1E4ED8] font-semibold'
                        : 'text-slate-700 hover:text-[#1E4ED8]'
                    )}
                  >
                    {item.label}
                  </Link>
                )
              }

              return (
                <div
                  key={item.label}
                  className="relative py-2"
                  onMouseEnter={() => hasSubmenu && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    ref={(el) => {
                      itemRefs.current[item.label] = el
                    }}
                    href={item.href}
                    aria-expanded={isHovered}
                    className={cn(
                      'relative z-10 inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-medium tracking-tight rounded-full transition-colors duration-200 whitespace-nowrap select-none',
                      isHovered || (isActive && !openMenu)
                        ? 'text-[#1E4ED8] font-semibold'
                        : 'text-slate-700 hover:text-[#1E4ED8]'
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        'size-3.5 transition-transform duration-200 ease-out',
                        isHovered ? 'rotate-180 text-[#1E4ED8] opacity-100' : 'text-slate-400 opacity-70'
                      )}
                    />
                  </Link>

                  {/* ================================================================= */}
                  {/* SIMPLE ANCHORED FLOATING DROPDOWN (WHITE LIGHT THEME)             */}
                  {/* ================================================================= */}
                  {hasSubmenu && (
                    <div
                      onMouseEnter={keepMenuOpen}
                      onMouseLeave={handleMouseLeave}
                      className={cn(
                        'absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 transition-all duration-200 ease-out',
                        isHovered
                          ? 'opacity-100 translate-y-0 pointer-events-auto visible'
                          : 'opacity-0 -translate-y-1.5 pointer-events-none invisible'
                      )}
                    >
                      {/* Top invisible hit bridge */}
                      <div className="absolute -top-3 left-0 right-0 h-4 bg-transparent" />

                      {/* Clean Floating White Card */}
                      <div className="w-[360px] sm:w-[440px] rounded-2xl border border-slate-200/90 bg-white/98 backdrop-blur-2xl p-3 shadow-[0_20px_45px_rgba(15,23,42,0.12),0_2px_8px_rgba(15,23,42,0.04)] text-slate-900">
                        {/* Header Label */}
                        <div className="flex items-center justify-between px-2.5 pb-2 mb-1.5 border-b border-slate-100">
                          <span className="text-[11px] font-bold uppercase tracking-wider text-[#1E4ED8]">
                            {item.label}
                          </span>
                          <span className="text-[10px] text-slate-400 font-medium">
                            {item.children?.length} sections
                          </span>
                        </div>

                        {/* Items Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                          {item.children?.map((child) => {
                            const isChildActive = pathname === child.href
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setOpenMenu(null)}
                                className={cn(
                                  'group/link flex flex-col justify-center rounded-xl px-2.5 py-2 transition-all duration-150 hover:bg-slate-50 hover:translate-x-0.5',
                                  isChildActive && 'bg-blue-50/70 text-[#1E4ED8]'
                                )}
                              >
                                <div className="flex items-center justify-between gap-1">
                                  <span className="text-[13px] font-semibold text-slate-800 group-hover/link:text-[#1E4ED8] transition-colors truncate">
                                    {child.label}
                                  </span>
                                  {child.phase === 2 && (
                                    <span className="rounded bg-slate-100 px-1 py-0.2 text-[8.5px] font-bold text-slate-500 shrink-0">
                                      P2
                                    </span>
                                  )}
                                </div>
                                {child.desc && (
                                  <p className="line-clamp-1 text-[11px] leading-normal text-slate-500 group-hover/link:text-slate-600 mt-0.5 font-normal">
                                    {child.desc}
                                  </p>
                                )}
                              </Link>
                            )
                          })}
                        </div>

                        {/* Footer Explore CTA */}
                        {item.ctaCard && (
                          <div className="mt-2 pt-2 border-t border-slate-100 px-2 flex items-center justify-between">
                            <span className="text-[11px] text-slate-500 font-medium truncate max-w-[240px]">
                              {item.ctaCard.eyebrow || 'Peers Global'}
                            </span>
                            <Link
                              href={item.ctaCard.ctaHref}
                              onClick={() => setOpenMenu(null)}
                              className="inline-flex items-center gap-1 text-[11.5px] font-bold text-[#1E4ED8] hover:text-[#1a42c0] transition-colors"
                            >
                              <span>{item.ctaCard.ctaText || 'Explore →'}</span>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </nav>

          {/* Right Side Action: ENTER PEERS GLOBAL */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Primary Blue Pill CTA */}
            <Link
              href="/apply"
              onMouseEnter={() => setOpenMenu(null)}
              className="inline-flex items-center justify-center gap-1.5 bg-[#1E4ED8] hover:bg-[#1a42c0] text-white font-bold text-xs tracking-tight px-5 py-2.5 rounded-full shadow-[0_4px_14px_rgba(30,78,216,0.25)] transition-all whitespace-nowrap active:scale-95 hover:shadow-[0_6px_18px_rgba(30,78,216,0.35)]"
            >
              <span>ENTER PEERS GLOBAL</span>
              <ArrowRight className="size-3.5" />
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
              aria-expanded={mobileMenuOpen}
              className="flex size-9 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-slate-700 lg:hidden hover:bg-slate-100 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* =================================================================== */}
        {/* 3. MOBILE DRAWER NAVIGATION                                         */}
        {/* =================================================================== */}
        {mobileMenuOpen ? (
          <div className="lg:hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl px-4 py-5 shadow-2xl text-slate-800 animate-in slide-in-from-top-2 duration-200">
            <div className="mb-4 flex flex-col gap-2.5 border-b border-slate-200 pb-4">
              <Link
                href="/apply"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-[#1E4ED8] py-3 text-xs font-bold tracking-wider text-white shadow-md"
              >
                <span>ENTER PEERS GLOBAL</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="flex flex-col divide-y divide-slate-100">
              {HEADER_NAV.map((item) => {
                const isAccordionOpen = mobileAccordion === item.label
                const hasChildren = Boolean(item.children && item.children.length > 0)

                if (item.type === 'direct') {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-3 text-[14px] font-semibold text-slate-800 hover:text-[#1E4ED8] flex items-center justify-between"
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="size-3.5 text-slate-400" />
                    </Link>
                  )
                }

                return (
                  <div key={item.label} className="py-2">
                    <button
                      type="button"
                      onClick={() => toggleMobileAccordion(item.label)}
                      className="flex w-full items-center justify-between py-2 text-left text-[14px] font-semibold text-slate-800 focus:outline-none"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          'size-4 text-slate-400 transition-transform duration-200',
                          isAccordionOpen && 'rotate-180 text-[#1E4ED8]'
                        )}
                      />
                    </button>

                    {isAccordionOpen && hasChildren ? (
                      <ul className="mt-1 flex flex-col gap-1.5 pl-3 pb-3 border-l border-blue-200 ml-1">
                        {item.children?.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1 text-[13px] text-slate-600 hover:text-[#1E4ED8]"
                            >
                              <span>{child.label}</span>
                              {child.phase === 2 ? (
                                <span className="ml-1.5 rounded bg-slate-100 px-1.5 py-0.2 text-[9px] font-semibold text-slate-500">
                                  P2
                                </span>
                              ) : null}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                )
              })}
            </div>
          </div>
        ) : null}
      </header>
    </>
  )
}
