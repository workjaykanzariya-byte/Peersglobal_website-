
'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, Menu, X, ArrowRight, Download } from 'lucide-react'
import { Logo } from '@/components/site/logo'
import { HEADER_NAV, SITE, NavItem } from '@/lib/data/site'
import { cn } from '@/lib/utils'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import { handleSmartAppDownload, useSmartAppUrl } from '@/lib/utils/app-link'

export function SiteHeader() {
  const pathname = usePathname()
  const smartAppUrl = useSmartAppUrl(SITE.playStoreUrl)
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
        className="sticky top-0 z-[101] w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md supports-[backdrop-filter]:bg-white/90 transition-all shadow-xs"
        onMouseLeave={handleMouseLeave}
      >
        {/* Desktop Navigation Items with Simple Anchored Floating Dropdowns */}
        <div className="mx-auto flex h-16 sm:h-20 max-w-[1640px] items-center justify-between px-3 sm:px-6 lg:px-8">
          {/* Brand Logo (Full Color on White) */}
          <div className="flex items-center shrink-0">
            <Logo onDark={false} />
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
              className="pointer-events-none absolute top-1/2 -translate-y-1/2 h-9 rounded-full border border-[#1D4ED8]/20 bg-[#EFF6FF]/90 shadow-[0_2px_8px_rgba(29,78,216,0.08)] transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
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
                  <div
                    key={item.label}
                    className="relative py-2"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link
                      ref={(el) => {
                        itemRefs.current[item.label] = el
                      }}
                      href={item.href}
                      className={cn(
                        'relative z-10 px-4 py-2 text-[13.5px] font-medium tracking-tight rounded-full transition-colors duration-200 whitespace-nowrap inline-flex items-center',
                        isHovered || (isActive && !openMenu)
                          ? 'text-[#1D4ED8] font-bold'
                          : 'text-slate-700 hover:text-[#1D4ED8]'
                      )}
                    >
                      {item.label}
                    </Link>
                  </div>
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
                      'relative z-10 inline-flex items-center gap-1.5 px-4 py-2 text-[13.5px] font-medium tracking-tight rounded-full transition-colors duration-200 whitespace-nowrap select-none',
                      isHovered || (isActive && !openMenu)
                        ? 'text-[#1D4ED8] font-bold'
                        : 'text-slate-700 hover:text-[#1D4ED8]'
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        'size-3.5 transition-transform duration-200 ease-out',
                        isHovered ? 'rotate-180 text-[#1D4ED8] opacity-100' : 'text-slate-400 opacity-70'
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
                      <div className="w-[360px] sm:w-[440px] rounded-2xl border border-slate-200/90 bg-white/98 backdrop-blur-2xl p-3.5 shadow-[0_20px_45px_rgba(15,23,42,0.12),0_2px_8px_rgba(15,23,42,0.04)] text-slate-900">
                        {/* Header Label */}
                        <div className="flex items-center justify-between px-2.5 pb-2.5 mb-1.5 border-b border-slate-100">
                          <span className="text-[11.5px] font-bold uppercase tracking-wider text-[#1D4ED8] flex items-center gap-1.5">
                            <span className="size-1.5 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48]" />
                            {item.label}
                          </span>
                          <span className="text-[10.5px] text-slate-400 font-medium">
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
                                  'group/link flex flex-col justify-center rounded-xl px-3 py-2 transition-all duration-150 hover:bg-[#EFF6FF]/70 hover:translate-x-0.5',
                                  isChildActive && 'bg-[#EFF6FF] text-[#1D4ED8]'
                                )}
                              >
                                <div className="flex items-center justify-between gap-1">
                                  <span className="text-[13.5px] font-semibold text-slate-800 group-hover/link:text-[#1D4ED8] transition-colors truncate">
                                    {child.label}
                                  </span>
                                  {child.phase === 2 && (
                                    <span className="rounded bg-slate-100 px-1 py-0.2 text-[8.5px] font-bold text-slate-500 shrink-0">
                                      P2
                                    </span>
                                  )}
                                </div>
                                {child.desc && (
                                  <p className="line-clamp-1 text-[11.5px] leading-normal text-slate-500 group-hover/link:text-slate-600 mt-0.5 font-normal">
                                    {child.desc}
                                  </p>
                                )}
                              </Link>
                            )
                          })}
                        </div>

                        {/* Footer Explore CTA */}
                        {item.ctaCard && (
                          <div className="mt-2.5 pt-2.5 border-t border-slate-100 px-2 flex items-center justify-between">
                            <span className="text-[11.5px] text-slate-500 font-medium truncate max-w-[240px]">
                              {item.ctaCard.eyebrow || 'Peers Global'}
                            </span>
                            <Link
                              href={item.ctaCard.ctaHref}
                              onClick={() => setOpenMenu(null)}
                              className="inline-flex items-center gap-1 text-[12px] font-bold text-[#1D4ED8] hover:text-[#E11D48] transition-colors"
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

          {/* Right Side Actions: DESKTOP ONLY CTAs & MINIMALIST MOBILE MENU */}
          <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            {/* GET UNITY APP: Desktop only (lg:), hidden on mobile */}
            <div className="hidden lg:inline-flex">
              <GalaxyButton
                href={smartAppUrl}
                onClick={(e: any) => handleSmartAppDownload(e, smartAppUrl)}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="sm"
                icon={true}
                aria-label="Get Unity App"
                className="uppercase tracking-wider font-bold"
              >
                GET UNITY APP
              </GalaxyButton>
            </div>

            {/* ENTER PEERS GLOBAL: Desktop only (lg:), hidden on mobile */}
            <div className="hidden lg:inline-flex">
              <GalaxyButton
                href="/apply"
                onMouseEnter={() => setOpenMenu(null)}
                size="sm"
              >
                ENTER PEERS GLOBAL
              </GalaxyButton>
            </div>

            {/* Mindvalley-Style Minimalist Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              className="p-2 -mr-1 rounded-lg text-[#0F131A] hover:bg-black/[0.04] active:bg-black/[0.08] transition-colors focus:outline-none flex items-center justify-center shrink-0 cursor-pointer lg:hidden"
            >
              {mobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0F131A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0F131A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 12H21M3 6H21M3 18H21" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* =================================================================== */}
      {/* 3. MINDVALLEY-STYLE FULL-HEIGHT MOBILE OVERLAY DRAWER               */}
      {/* =================================================================== */}
      {mobileMenuOpen ? (
        <div
          id="mobile-nav-menu"
          className="lg:hidden fixed inset-x-0 top-16 sm:top-20 bottom-0 z-[100] bg-white flex flex-col justify-between overflow-y-auto overscroll-contain px-5 py-6 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200"
          style={{ height: 'calc(100dvh - 4rem)' }}
        >
          <div>
            {/* Top Action CTAs inside Drawer */}
            <div className="mb-6 flex flex-col gap-3 pb-5 border-b border-slate-100">
              <GalaxyButton
                href={smartAppUrl}
                onClick={(e: any) => {
                  setMobileMenuOpen(false)
                  handleSmartAppDownload(e, smartAppUrl)
                }}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="default"
                icon={true}
                className="w-full justify-center uppercase tracking-wider font-bold shadow-md"
              >
                GET UNITY APP
              </GalaxyButton>

              <GalaxyButton
                href="/apply"
                onClick={() => setMobileMenuOpen(false)}
                variant="transparent-light"
                className="w-full justify-center font-semibold border border-slate-200"
              >
                ENTER PEERS GLOBAL
              </GalaxyButton>
            </div>

            {/* Navigation Items (Mindvalley Typography & Spacing) */}
            <div className="flex flex-col">
              <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-1">
                Explore Peers Global
              </span>

              <div className="flex flex-col divide-y divide-slate-100/90">
                {HEADER_NAV.map((item) => {
                  const isAccordionOpen = mobileAccordion === item.label
                  const hasChildren = Boolean(item.children && item.children.length > 0)

                  if (item.type === 'direct') {
                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="py-3.5 text-[16px] font-medium text-slate-900 hover:text-[#1D4ED8] flex items-center justify-between transition-colors"
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="size-4 text-slate-300" />
                      </Link>
                    )
                  }

                  return (
                    <div key={item.label} className="py-1">
                      <button
                        type="button"
                        onClick={() => toggleMobileAccordion(item.label)}
                        className="flex w-full items-center justify-between py-3 text-left text-[16px] font-medium text-slate-900 hover:text-[#1D4ED8] focus:outline-none transition-colors"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={cn(
                            'size-4 text-slate-400 transition-transform duration-200',
                            isAccordionOpen && 'rotate-180 text-[#1D4ED8]'
                          )}
                        />
                      </button>

                      {isAccordionOpen && hasChildren ? (
                        <div className="mb-2.5 flex flex-col gap-1 pl-3.5 border-l-2 border-[#1D4ED8]/25 ml-1 pt-1 animate-in fade-in duration-150">
                          {item.children?.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="group flex flex-col py-1.5 px-2 rounded-md hover:bg-slate-50 transition-colors"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-[14px] font-medium text-slate-700 group-hover:text-[#1D4ED8] transition-colors">
                                  {child.label}
                                </span>
                                {child.phase === 2 ? (
                                  <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[9px] font-semibold text-slate-500">
                                    P2
                                  </span>
                                ) : null}
                              </div>
                              {child.description && (
                                <p className="text-[12px] text-slate-400 line-clamp-1 mt-0.5">
                                  {child.description}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Bottom Utilities */}
          <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col gap-3">
            <div className="flex items-center justify-center text-[13px] text-slate-500 font-medium">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-slate-900 transition-colors"
              >
                Contact & Support
              </Link>
            </div>
            <p className="text-[11px] text-slate-400 text-center">
              © {new Date().getFullYear()} Peers Global. Community of Collaboration.
            </p>
          </div>
        </div>
      ) : null}
    </>
  )
}
