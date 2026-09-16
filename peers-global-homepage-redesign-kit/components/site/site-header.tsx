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
      {/* 1. BLACK FADE BACKDROP OVERLAY                                       */}
      {/* Fades in smoothly when any submenu opens, putting full focus on nav  */}
      {/* ===================================================================== */}
      <div
        onClick={() => setOpenMenu(null)}
        className={cn(
          'fixed inset-0 top-20 bg-black/65 backdrop-blur-[2px] transition-opacity duration-300 z-40',
          openMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      />

      {/* ===================================================================== */}
      {/* 2. PRIMARY NAVBAR                                                     */}
      {/* ===================================================================== */}
      <header
        className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#071324]/92 backdrop-blur-md supports-[backdrop-filter]:bg-[#071324]/85 transition-all shadow-md"
        onMouseLeave={handleMouseLeave}
      >
        <div className="mx-auto flex h-20 max-w-[1640px] items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Logo (White on Dark Navy) */}
          <div className="flex items-center shrink-0">
            <Logo onDark={true} className="scale-95 sm:scale-100 origin-left" />
          </div>

          {/* Center Desktop Navigation (Strict 7 Items) */}
          <nav
            ref={navContainerRef}
            aria-label="Primary Navigation"
            onMouseEnter={keepMenuOpen}
            className="relative hidden lg:flex items-center gap-1 xl:gap-1.5 h-full py-2"
          >
            {/* Smooth Sliding Glow Pill Indicator */}
            <span
              aria-hidden="true"
              className="pointer-events-none absolute top-1/2 -translate-y-1/2 h-9 rounded-full border border-sky-400/90 bg-sky-500/20 shadow-[0_0_16px_rgba(56,189,248,0.5),inset_0_0_10px_rgba(56,189,248,0.25)] transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]"
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
                        ? 'text-white'
                        : 'text-white/80 hover:text-white'
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
                        ? 'text-white'
                        : 'text-white/80 hover:text-white'
                    )}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={cn(
                        'size-3.5 transition-transform duration-300 ease-out',
                        isHovered
                          ? 'rotate-180 text-sky-300 opacity-100'
                          : 'opacity-70 group-hover:opacity-100'
                      )}
                    />
                  </Link>
                </div>
              )
            })}
          </nav>

          {/* Right Side Action: ENTER PEERS GLOBAL */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Primary Golden Pill CTA */}
            <Link
              href="/apply"
              onMouseEnter={() => setOpenMenu(null)}
              className="inline-flex items-center justify-center gap-1.5 bg-[#f5b82e] hover:bg-[#ffc233] text-[#071324] font-bold text-xs tracking-tight px-5 py-2.5 rounded-full shadow-[0_2px_12px_rgba(245,184,46,0.35)] transition-all whitespace-nowrap active:scale-95 hover:shadow-[0_4px_16px_rgba(245,184,46,0.5)]"
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
              className="flex size-9 items-center justify-center rounded-lg border border-white/20 bg-white/10 text-white lg:hidden hover:bg-white/20 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* =================================================================== */}
        {/* 3. SHARED SUBMENU CONTAINER (Smooth Cross-Fade Between Menus)       */}
        {/* Zero flicker, unified positioning, continuous smooth transitions    */}
        {/* =================================================================== */}
        <div
          onMouseEnter={keepMenuOpen}
          onMouseLeave={handleMouseLeave}
          className={cn(
            'absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]',
            openMenu
              ? 'opacity-100 translate-y-0 pointer-events-auto visible'
              : 'opacity-0 -translate-y-2 pointer-events-none invisible'
          )}
        >
          {/* Invisible hit bridge to prevent mouse leaving while moving down */}
          <div className="absolute -top-3 left-0 right-0 h-4 bg-transparent" />

          {/* Unified Submenu Glass Card (Stays mounted so it never flickers) */}
          <div className="w-[48rem] xl:w-[52rem] rounded-2xl border border-white/15 bg-[#071324]/98 backdrop-blur-2xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.7),0_0_30px_rgba(12,32,61,0.6)] text-white relative min-h-[300px]">
            {HEADER_NAV.filter((item) => item.children && item.children.length > 0).map(
              (item) => {
                const isCurrent = openMenu === item.label
                return (
                  <div
                    key={item.label}
                    className={cn(
                      'transition-all duration-250 ease-out',
                      isCurrent
                        ? 'opacity-100 translate-y-0 pointer-events-auto relative z-10'
                        : 'opacity-0 translate-y-1 pointer-events-none absolute inset-6'
                    )}
                  >
                    <div className="grid grid-cols-12 gap-6">
                      {/* Links Grid (7 cols) */}
                      <div className="col-span-7 xl:col-span-8">
                        <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2">
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-sky-400">
                            {item.label} Directory
                          </span>
                          <span className="text-[10px] text-gray-400">
                            {item.children?.length} sections
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                          {item.children?.map((child) => {
                            const isChildActive = pathname === child.href
                            return (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setOpenMenu(null)}
                                className={cn(
                                  'group/link flex flex-col rounded-lg p-2 transition-all duration-150 hover:bg-white/10 hover:translate-x-0.5',
                                  isChildActive && 'bg-white/10'
                                )}
                              >
                                <div className="flex items-center gap-1.5 text-[13px] font-medium text-gray-100 group-hover/link:text-sky-300">
                                  <span>{child.label}</span>
                                  {child.phase === 2 ? (
                                    <span className="rounded bg-white/10 px-1.5 py-0.2 text-[9px] font-semibold text-gray-400">
                                      P2
                                    </span>
                                  ) : null}
                                </div>
                                <p className="line-clamp-1 text-[11px] leading-snug text-gray-400 group-hover/link:text-gray-200">
                                  {child.desc}
                                </p>
                              </Link>
                            )
                          })}
                        </div>
                      </div>

                      {/* Visual CTA Panel (Right Side, 5 cols) */}
                      {item.ctaCard ? (
                        <div className="col-span-5 xl:col-span-4 flex flex-col justify-between rounded-xl bg-gradient-to-br from-[#0c203d] via-[#08172c] to-[#040d1a] p-5 border border-white/10 shadow-lg">
                          <div>
                            {item.ctaCard.eyebrow ? (
                              <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#e5b850]">
                                {item.ctaCard.eyebrow}
                              </span>
                            ) : null}
                            <h4 className="mt-1 text-sm font-bold leading-snug text-white">
                              {item.ctaCard.title}
                            </h4>
                            <p className="mt-2 text-[11px] leading-relaxed text-gray-300">
                              {item.ctaCard.desc}
                            </p>
                          </div>

                          <div className="mt-4 pt-4 border-t border-white/10">
                            <Link
                              href={item.ctaCard.ctaHref}
                              onClick={() => setOpenMenu(null)}
                              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e5b850] hover:text-white transition-colors"
                            >
                              <span>{item.ctaCard.ctaText}</span>
                            </Link>
                          </div>
                        </div>
                      ) : null}
                    </div>
                  </div>
                )
              }
            )}
          </div>
        </div>

        {/* =================================================================== */}
        {/* 4. MOBILE DRAWER NAVIGATION                                         */}
        {/* =================================================================== */}
        {mobileMenuOpen ? (
          <div className="lg:hidden border-t border-white/10 bg-[#071324]/98 backdrop-blur-xl px-4 py-5 shadow-2xl text-white animate-in slide-in-from-top-2 duration-200">
            <div className="mb-4 flex flex-col gap-2.5 border-b border-white/15 pb-4">
              <Link
                href="/apply"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-full bg-[#f5b82e] py-3 text-xs font-bold tracking-wider text-[#071324] shadow-md"
              >
                <span>ENTER PEERS GLOBAL</span>
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="flex flex-col divide-y divide-white/10">
              {HEADER_NAV.map((item) => {
                const isAccordionOpen = mobileAccordion === item.label
                const hasChildren = Boolean(item.children && item.children.length > 0)

                if (item.type === 'direct') {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-3 text-[14px] font-semibold text-white/90 hover:text-white flex items-center justify-between"
                    >
                      <span>{item.label}</span>
                      <ArrowRight className="size-3.5 text-gray-400" />
                    </Link>
                  )
                }

                return (
                  <div key={item.label} className="py-2">
                    <button
                      type="button"
                      onClick={() => toggleMobileAccordion(item.label)}
                      className="flex w-full items-center justify-between py-2 text-left text-[14px] font-semibold text-white/90 focus:outline-none"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={cn(
                          'size-4 text-gray-400 transition-transform duration-200',
                          isAccordionOpen && 'rotate-180 text-sky-400'
                        )}
                      />
                    </button>

                    {isAccordionOpen && hasChildren ? (
                      <ul className="mt-1 flex flex-col gap-1.5 pl-3 pb-3 border-l border-sky-400/40 ml-1">
                        {item.children?.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-1 text-[13px] text-gray-300 hover:text-white"
                            >
                              <span>{child.label}</span>
                              {child.phase === 2 ? (
                                <span className="ml-1.5 rounded bg-white/10 px-1.5 py-0.2 text-[9px] font-semibold text-gray-400">
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
