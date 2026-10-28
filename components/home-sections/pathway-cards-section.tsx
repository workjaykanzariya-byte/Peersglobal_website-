'use client'

import React, { useState, useEffect } from 'react'
import { fetchGalleryPhotos, resolveImageUrl, type ApiGalleryPhoto } from '@/lib/api/web-content'

const DEFAULT_COMMUNITY_PHOTOS: ApiGalleryPhoto[] = [
  { id: '1', image: '/images/real-community/real-circle-hands.jpg', title: 'Give First', caption: 'Without Keeping Score', category: 'Community', city: '', circle: '', year: '' },
  { id: '2', image: '/images/real-community/real-circle-lounge.jpg', title: 'Friends in Life', caption: 'Lifelong Bonds & Families', category: 'Community', city: '', circle: '', year: '' },
  { id: '3', image: '/images/real-community/real-circle-boardroom.jpg', title: 'The Conclave', caption: 'Confidential Forum', category: 'Community', city: '', circle: '', year: '' },
  { id: '4', image: '/images/real-community/real-circle-panel.jpg', title: 'Contribution & Trust', caption: '1 Action = 1 Life Impacted', category: 'Community', city: '', circle: '', year: '' },
  { id: '5', image: '/images/real-community/real-collab-welcome.jpg', title: 'Manufacturing & Trade Circle', caption: 'Cross-City Introductions & Corridors', category: 'Collaboration', city: '', circle: '', year: '' },
  { id: '6', image: '/images/real-community/real-collab-city-meet.jpg', title: 'City Meets & Chapters', caption: 'DevX & Pan-India Meets', category: 'Collaboration', city: '', circle: '', year: '' },
  { id: '7', image: '/images/real-community/real-collab-lamp.jpg', title: 'Joint Ventures & Alliances', caption: 'Traditions & Collaborative Scale', category: 'Collaboration', city: '', circle: '', year: '' },
  { id: '8', image: '/images/real-community/real-collab-award.jpg', title: 'Peers Entrepreneur Awards', caption: 'Partners in Business, Friends in Life', category: 'Collaboration', city: '', circle: '', year: '' },
]

type TransitionVariant = 'zoom-bloom' | 'parallax-glide' | 'diagonal-curtain' | 'vertical-lift' | 'aperture-focus'

function GalleryFadingBox({
  photos,
  currentIndex,
  variant = 'zoom-bloom',
  accentHover = 'group-hover:border-rose-500/30',
  title,
  subtitle,
  onAdvance,
}: {
  photos: { image: string; title?: string; caption?: string }[]
  currentIndex: number
  variant?: TransitionVariant
  accentHover?: string
  title: string
  subtitle: string
  onAdvance?: () => void
}) {
  if (!photos || photos.length === 0) return null

  const [displayedIndex, setDisplayedIndex] = useState(currentIndex)
  const [prevIndex, setPrevIndex] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [direction, setDirection] = useState<'next' | 'prev'>('next')

  useEffect(() => {
    if (currentIndex === displayedIndex) return

    setDirection(currentIndex > displayedIndex ? 'next' : 'prev')
    setPrevIndex(displayedIndex)
    setDisplayedIndex(currentIndex)
    setIsTransitioning(true)

    const timer = setTimeout(() => {
      setIsTransitioning(false)
      setPrevIndex(null)
    }, 820)

    return () => clearTimeout(timer)
  }, [currentIndex, displayedIndex])

  const activeIdx = Math.abs(displayedIndex) % photos.length
  const currentPhoto = photos[activeIdx]

  const prevIdx = prevIndex !== null ? Math.abs(prevIndex) % photos.length : null
  const prevPhoto = prevIdx !== null ? photos[prevIdx] : null

  // Resolve incoming & outgoing CSS animation classes per variant
  let incomingClass = ''
  let outgoingClass = ''
  let lightOverlay = null

  if (variant === 'zoom-bloom') {
    incomingClass = 'ae-in-zoom-bloom'
    outgoingClass = 'ae-out-zoom-bloom'
    lightOverlay = (
      <>
        <div className="absolute inset-0 pointer-events-none z-20 fd-gallery-bloom rounded-xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-rose-500/30 via-pink-500/10 to-transparent" />
        <div className="absolute inset-0 pointer-events-none z-20 fd-gallery-sweep bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </>
    )
  } else if (variant === 'parallax-glide') {
    incomingClass = direction === 'next' ? 'ae-in-glide-next' : 'ae-in-glide-prev'
    outgoingClass = direction === 'next' ? 'ae-out-glide-next' : 'ae-out-glide-prev'
    lightOverlay = (
      <div className="absolute inset-0 pointer-events-none z-20 fd-gallery-sweep bg-gradient-to-r from-transparent via-sky-300/25 to-transparent" />
    )
  } else if (variant === 'diagonal-curtain') {
    incomingClass = 'fd-gallery-curtain-in'
    outgoingClass = 'ae-out-curtain'
    lightOverlay = (
      <div className="absolute inset-0 pointer-events-none z-20 fd-gallery-sweep bg-gradient-to-r from-transparent via-amber-300/30 to-transparent" />
    )
  } else if (variant === 'vertical-lift') {
    incomingClass = direction === 'next' ? 'ae-in-lift-next' : 'ae-in-lift-prev'
    outgoingClass = direction === 'next' ? 'ae-out-lift-next' : 'ae-out-lift-prev'
    lightOverlay = (
      <div className="absolute inset-0 pointer-events-none z-20 fd-gallery-sweep bg-gradient-to-r from-transparent via-purple-300/25 to-transparent" />
    )
  } else if (variant === 'aperture-focus') {
    incomingClass = 'ae-in-aperture'
    outgoingClass = 'ae-out-aperture'
    lightOverlay = (
      <div className="absolute inset-0 pointer-events-none z-20 fd-gallery-sweep bg-gradient-to-r from-transparent via-emerald-300/25 to-transparent" />
    )
  }

  return (
    <div
      className="fd-pathway-cards__card group w-full select-none cursor-pointer"
      onClick={onAdvance}
      title="Click to view next image"
    >
      <div
        className={`fd-pathway-cards__media fd-pathway-cards__media--single aspect-[16/9] w-full overflow-hidden rounded-xl border border-white/10 shadow-2xl ${accentHover} transition-all duration-500 relative bg-slate-950`}
      >
        {/* Underneath layer: previous photo during transition - NO BLACK VOID */}
        {isTransitioning && prevPhoto && (
          <img
            key={`prev-${prevPhoto.image}-${prevIdx}`}
            className={`fd-pathway-cards__cover absolute inset-0 w-full h-full object-cover pointer-events-none z-0 ${outgoingClass}`}
            src={resolveImageUrl(prevPhoto.image || '')}
            alt=""
            width="520"
            height="292"
            loading="eager"
            decoding="async"
          />
        )}

        {/* Top layer: active photo */}
        <img
          key={`curr-${currentPhoto?.image}-${activeIdx}`}
          className={`fd-pathway-cards__cover absolute inset-0 w-full h-full object-cover ${
            isTransitioning ? `z-10 ${incomingClass}` : 'z-0 fd-gallery-kenburns'
          }`}
          src={resolveImageUrl(currentPhoto?.image || '')}
          alt={subtitle || title}
          width="520"
          height="292"
          loading="lazy"
          decoding="async"
        />

        {/* Thematic Light FX overlay when transition fires */}
        {isTransitioning && lightOverlay}

        {/* Permanent Film Vignette Gradient for deep contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-black/30 pointer-events-none z-20"
          aria-hidden="true"
        />

        {/* Minimal Bottom Slide Indicators */}
        <div className="absolute bottom-2.5 left-0 right-0 z-30 flex justify-center items-center gap-1.5 pointer-events-none">
          {photos.slice(0, Math.min(photos.length, 6)).map((_, dotIdx) => {
            const isDotActive = dotIdx === (activeIdx % Math.min(photos.length, 6))
            return (
              <span
                key={dotIdx}
                className={`h-1 rounded-full transition-all duration-500 ${
                  isDotActive
                    ? 'w-5 bg-white shadow-[0_0_8px_rgba(255,255,255,0.7)]'
                    : 'w-1.5 bg-white/30'
                }`}
              />
            )
          })}
        </div>
      </div>

      {/* Slide Caption & Title - Fixed tagline that sticks permanently */}
      <div className="mt-2 text-center select-none">
        <p className="fd-pathway-cards__prog text-sm sm:text-base font-semibold text-white tracking-tight line-clamp-1">
          {title}
        </p>
        <p className="fd-pathway-cards__auth text-xs text-white/70 line-clamp-1 mt-0.5">
          {subtitle}
        </p>
      </div>
    </div>
  )
}

export function PathwayCardsSection() {
  const [activeCard, setActiveCard] = useState(0)
  const [galleryPhotos, setGalleryPhotos] = useState<ApiGalleryPhoto[]>([])
  const [slideIndex0, setSlideIndex0] = useState(0)
  const [slideIndex1, setSlideIndex1] = useState(0)
  const [slideIndex2, setSlideIndex2] = useState(0)
  const [slideIndex3, setSlideIndex3] = useState(0)
  const [slideIndex4, setSlideIndex4] = useState(0)
  const [slideIndex5, setSlideIndex5] = useState(0)
  const [slideIndex6, setSlideIndex6] = useState(0)
  const [slideIndex7, setSlideIndex7] = useState(0)
  const [slideIndex8, setSlideIndex8] = useState(0)
  const [slideIndex9, setSlideIndex9] = useState(0)

  // Fetch dynamic gallery photos from the Unity Backend API
  useEffect(() => {
    fetchGalleryPhotos({ limit: 48 })
      .then((data) => {
        if (data && data.length > 0) {
          setGalleryPhotos(data)
        }
      })
      .catch((err) => {
        console.warn('Gallery photos fallback active:', err)
      })
  }, [])

  // Auto-fading slideshow timers with staggered intervals for an organic feel
  useEffect(() => {
    const t0 = setInterval(() => setSlideIndex0((prev) => prev + 1), 5200)
    const t1 = setInterval(() => setSlideIndex1((prev) => prev + 1), 5800)
    const t2 = setInterval(() => setSlideIndex2((prev) => prev + 1), 5400)
    const t3 = setInterval(() => setSlideIndex3((prev) => prev + 1), 6000)
    const t4 = setInterval(() => setSlideIndex4((prev) => prev + 1), 5300)
    const t5 = setInterval(() => setSlideIndex5((prev) => prev + 1), 5900)
    const t6 = setInterval(() => setSlideIndex6((prev) => prev + 1), 5500)
    const t7 = setInterval(() => setSlideIndex7((prev) => prev + 1), 6100)
    const t8 = setInterval(() => setSlideIndex8((prev) => prev + 1), 5600)
    const t9 = setInterval(() => setSlideIndex9((prev) => prev + 1), 6200)
    return () => {
      clearInterval(t0)
      clearInterval(t1)
      clearInterval(t2)
      clearInterval(t3)
      clearInterval(t4)
      clearInterval(t5)
      clearInterval(t6)
      clearInterval(t7)
      clearInterval(t8)
      clearInterval(t9)
    }
  }, [])

  const activePool = galleryPhotos.length >= 4 ? galleryPhotos : DEFAULT_COMMUNITY_PHOTOS

  const getBoxPool = (pool: ApiGalleryPhoto[], offset: number) => {
    if (!pool || pool.length === 0) return DEFAULT_COMMUNITY_PHOTOS
    if (pool.length >= 10) {
      const picked = pool.filter((_, i) => (i + offset) % 10 === 0)
      if (picked.length >= 2) return picked
    }
    const result: ApiGalleryPhoto[] = []
    for (let i = 0; i < pool.length; i++) {
      const idx = (offset + i * 3) % pool.length
      result.push(pool[idx])
    }
    return result.slice(0, 8)
  }

  const box0Photos = getBoxPool(activePool, 0)
  const box1Photos = getBoxPool(activePool, 1)
  const box2Photos = getBoxPool(activePool, 2)
  const box3Photos = getBoxPool(activePool, 3)
  const box4Photos = getBoxPool(activePool, 4)
  const box5Photos = getBoxPool(activePool, 5)
  const box6Photos = getBoxPool(activePool, 6)
  const box7Photos = getBoxPool(activePool, 7)
  const box8Photos = getBoxPool(activePool, 8)
  const box9Photos = getBoxPool(activePool, 9)

  useEffect(() => {
    const handleScroll = () => {
      const blocks = document.querySelectorAll<HTMLElement>('.fd-pathway-cards__block')
      if (!blocks.length) return

      let current = 0
      blocks.forEach((block, idx) => {
        const rect = block.getBoundingClientRect()
        // If the card has reached near its sticky top threshold (90px + offset)
        if (rect.top <= 130 + idx * 20) {
          current = idx
        }
      })
      setActiveCard(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTrack = (id: string, dir: number) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollBy({ left: dir * el.clientWidth, behavior: 'smooth' })
    }
  }

  return (
    <section className="fd-pathway-cards" data-active-pathway={activeCard}>
      <div className="fd-pathway-cards__tint" aria-hidden="true">
        <div className={`fd-pathway-cards__wash fd-pathway-cards__wash--1 ${activeCard === 0 ? 'is-active' : ''}`}></div>
        <div className={`fd-pathway-cards__wash fd-pathway-cards__wash--2 ${activeCard === 1 ? 'is-active' : ''}`}></div>
        <div className={`fd-pathway-cards__wash fd-pathway-cards__wash--3 ${activeCard === 2 ? 'is-active' : ''}`}></div>
        <div className={`fd-pathway-cards__wash fd-pathway-cards__wash--4 ${activeCard === 3 ? 'is-active' : ''}`}></div>
        <div className={`fd-pathway-cards__wash fd-pathway-cards__wash--5 ${activeCard === 4 ? 'is-active' : ''}`}></div>
        <div className={`fd-pathway-cards__wash fd-pathway-cards__wash--6 ${activeCard === 5 ? 'is-active' : ''}`}></div>
        <div className="fd-pathway-cards__wash fd-pathway-cards__wash--out"></div>
      </div>
      <svg className="fd-pathway-cards__defs" aria-hidden="true" focusable="false" width="0" height="0"><defs>
        <linearGradient id="fdPwChkMind" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1D4ED8"></stop><stop offset="1" stopColor="#E11D48"></stop></linearGradient>
        <linearGradient id="fdPwChkEnt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1D4ED8"></stop><stop offset="1" stopColor="#E11D48"></stop></linearGradient>
        <linearGradient id="fdPwChkAuth" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1D4ED8"></stop><stop offset="1" stopColor="#E11D48"></stop></linearGradient>
        <linearGradient id="fdPwChkConn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1D4ED8"></stop><stop offset="1" stopColor="#E11D48"></stop></linearGradient>
        <linearGradient id="fdPwChkBody" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1D4ED8"></stop><stop offset="1" stopColor="#E11D48"></stop></linearGradient>
        <linearGradient id="fdPwChkMystic" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#1D4ED8"></stop><stop offset="1" stopColor="#E11D48"></stop></linearGradient>
      </defs></svg>
      <div className="fd-pathway-cards__inner">

        <article className="fd-pathway-cards__block fd-pathway-cards__block--mind" id="our-philosophy" style={{ '--card-index': 0 } as React.CSSProperties}>
          <div className="fd-pathway-cards__left">
            <div className="fd-pathway-cards__hero overflow-hidden relative rounded-2xl bg-slate-950 shadow-lg border border-slate-800/60 group">
              <video
                className="w-full h-full object-cover rounded-2xl pointer-events-none"
                src="/videos/circle-inner-board.mp4"
                poster="/videos/circle-inner-board-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                disablePictureInPicture
              >
                <source src="/videos/circle-inner-board.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="fd-pathway-cards__body">
              <div className="fd-pathway-cards__text">
                <div className="fd-pathway-cards__head">
                  <p className="fd-pathway-cards__eyebrow !text-[#F43F5E]">YOUR CIRCLE. YOUR INNER BOARD.</p>
                  <h2 className="fd-pathway-cards__title">
                    <span>You don&apos;t need a bigger crowd.</span>{' '}
                    <span>You need the right room.</span>
                  </h2>
                </div>
                <p className="fd-pathway-cards__desc fd-pathway-cards__desc--lead">
                  A PEERS GLOBAL Circle is designed to bring together a curated group of entrepreneurs who can know, understand and support one another over time.
                </p>
                <p className="fd-pathway-cards__desc fd-pathway-cards__desc--sub">
                  A Circle becomes more than a meeting.
                </p>

                <div className="flex flex-col gap-2 mt-1">
                  <p className="fd-pathway-cards__subhead">It can become:</p>
                  <ul className="fd-pathway-cards__list">
                    <li className="fd-pathway-cards__item">
                      <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkMind)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                      <span>Your sounding board.</span>
                    </li>
                    <li className="fd-pathway-cards__item">
                      <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkMind)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                      <span>Your source of experience.</span>
                    </li>
                    <li className="fd-pathway-cards__item">
                      <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkMind)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                      <span>Your introduction to someone you should know.</span>
                    </li>
                    <li className="fd-pathway-cards__item">
                      <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkMind)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                      <span>Your place to ask for help.</span>
                    </li>
                    <li className="fd-pathway-cards__item">
                      <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkMind)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                      <span>Your place to give help.</span>
                    </li>
                    <li className="fd-pathway-cards__item">
                      <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkMind)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                      <strong>Your Inner Board.</strong>
                    </li>
                  </ul>
                  <p className="fd-pathway-cards__desc--sub pt-1 text-xs text-slate-300">
                    The existing PEERS GLOBAL model describes Circles as structured groups of approximately 20–40 entrepreneurs, with category exclusivity and defined collaboration practices.
                  </p>
                  <p className="fd-pathway-cards__quote pt-1">
                    &ldquo;The value of a Circle is not how many people are in the room. It is how deeply the people in the room can contribute to one another.&rdquo;
                  </p>
                </div>
              </div>
              <div className="pt-2">
                <a className="fd-pathway-cards__btn" href="https://peersunity.com/circles" target="_blank" rel="noopener noreferrer" aria-label="Find Your Circle">FIND YOUR CIRCLE →</a>
              </div>
            </div>
          </div>
          <div className="fd-pathway-cards__right">
            <div className="flex flex-col gap-4 sm:gap-5 w-full max-w-[520px]">
              {/* Upper Box (Card 0) */}
              <GalleryFadingBox
                photos={box0Photos}
                currentIndex={slideIndex0}
                variant="zoom-bloom"
                accentHover="group-hover:border-rose-500/30"
                title="Trusted Circles"
                subtitle="Curated Inner Board"
                onAdvance={() => setSlideIndex0((prev) => prev + 1)}
              />

              {/* Lower Box (Card 0) */}
              <GalleryFadingBox
                photos={box1Photos}
                currentIndex={slideIndex1}
                variant="zoom-bloom"
                accentHover="group-hover:border-rose-500/30"
                title="Friends in Life"
                subtitle="Lifelong Bonds & Families"
                onAdvance={() => setSlideIndex1((prev) => prev + 1)}
              />
            </div>
          </div>
        </article>


        <article className="fd-pathway-cards__block fd-pathway-cards__block--entrepreneur" id="trusted-circles" style={{ '--card-index': 1 } as React.CSSProperties}>
          <div className="fd-pathway-cards__left">
            <div className="fd-pathway-cards__hero overflow-hidden relative rounded-2xl bg-slate-950 shadow-lg border border-slate-800/60 group">
              <video
                className="w-full h-full object-cover rounded-2xl pointer-events-none"
                src="/videos/collaboration-reel.mp4"
                poster="/videos/collaboration-reel-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                disablePictureInPicture
              >
                <source src="/videos/collaboration-reel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="fd-pathway-cards__body">
              <div className="fd-pathway-cards__text">
                <div className="fd-pathway-cards__head">
                  <p className="fd-pathway-cards__eyebrow !text-[#38BDF8]">THE 10 FORMS OF COLLABORATION</p>
                  <h2 className="fd-pathway-cards__title">
                    <span>Collaboration means more than</span>{' '}
                    <span>exchanging business cards.</span>
                  </h2>
                </div>
                <p className="fd-pathway-cards__desc fd-pathway-cards__desc--lead">
                  Inside PEERS GLOBAL, collaboration can take many forms.
                </p>

                <div className="flex flex-col gap-2 mt-1">
                  <ul className="fd-pathway-cards__list max-h-[300px] overflow-y-auto scrollbar-none pr-1">
                    <li className="fd-pathway-cards__item">
                      <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkEnt)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                      <span><strong className="text-white font-semibold">01 — Business Referral.</strong> Create a trusted introduction when someone in your Circle can genuinely help.</span>
                    </li>
                    <li className="fd-pathway-cards__item">
                      <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkEnt)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                      <span><strong className="text-white font-semibold">02 — Mentorship.</strong> Share experience that can help another entrepreneur move forward.</span>
                    </li>
                    <li className="fd-pathway-cards__item">
                      <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkEnt)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                      <span><strong className="text-white font-semibold">03 — Joint Venture.</strong> Build something together that neither could create as effectively alone.</span>
                    </li>
                    <li className="fd-pathway-cards__item">
                      <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkEnt)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                      <span><strong className="text-white font-semibold">04 — Knowledge Sharing.</strong> Share what you know so another entrepreneur does not have to learn everything the hard way.</span>
                    </li>
                    <li className="fd-pathway-cards__item">
                      <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkEnt)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                      <span><strong className="text-white font-semibold">05 — Problem Solving.</strong> Become the thinking partner someone needs when a challenge becomes difficult.</span>
                    </li>
                    <li className="fd-pathway-cards__item">
                      <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkEnt)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                      <span><strong className="text-white font-semibold">06 — Vendor Connect.</strong> Help a Peer find the right resource, provider or capability.</span>
                    </li>
                    <li className="fd-pathway-cards__item">
                      <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkEnt)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                      <span><strong className="text-white font-semibold">07 — Funding Access.</strong> Open conversations that may connect the right opportunity with the right source of capital.</span>
                    </li>
                    <li className="fd-pathway-cards__item">
                      <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkEnt)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                      <span><strong className="text-white font-semibold">08 — Visibility &amp; PR.</strong> Help another entrepreneur become more visible, credible and discoverable.</span>
                    </li>
                    <li className="fd-pathway-cards__item">
                      <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkEnt)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                      <span><strong className="text-white font-semibold">09 — Emotional Support.</strong> Be present when business stops being only about business.</span>
                    </li>
                    <li className="fd-pathway-cards__item">
                      <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkEnt)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                      <span><strong className="text-white font-semibold">10 — Execution Support.</strong> Sometimes the most valuable help is simply helping someone get something done.</span>
                    </li>
                  </ul>
                  <p className="fd-pathway-cards__quote pt-1">&ldquo;Every form of collaboration begins with one human being choosing to help another.&rdquo;</p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a className="fd-pathway-cards__btn" href="/circles/find" aria-label="Find Your Circle">Find Your Circle</a>
                <a
                  className="animated-glow-btn group inline-flex p-[1.5px] rounded-full transition-all"
                  href="/start-a-circle"
                  aria-label="Start a Circle"
                  tabIndex={0}
                >
                  <svg className="animated-btn-border-svg" viewBox="0 0 100 48" preserveAspectRatio="none" aria-hidden="true">
                    <defs>
                      <linearGradient id="btnGradientStrokePathway" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#1D4ED8" />
                        <stop offset="50%" stopColor="#6366F1" />
                        <stop offset="100%" stopColor="#E11D48" />
                      </linearGradient>
                    </defs>
                    <rect
                      className="animated-btn-border-path"
                      stroke="url('#btnGradientStrokePathway')"
                      x="1"
                      y="1"
                      width="98"
                      height="46"
                      rx="23"
                    />
                  </svg>
                  <div className="px-6 py-3.5 rounded-full bg-transparent border border-white/25 group-hover:border-transparent group-hover:bg-white/15 transition-all flex items-center gap-2 text-white text-sm font-semibold">
                    <span>Start a Circle</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="fd-pathway-cards__right">
            <div className="flex flex-col gap-4 sm:gap-5 w-full max-w-[520px]">
              {/* Upper Box (Card 1) */}
              <GalleryFadingBox
                photos={box2Photos}
                currentIndex={slideIndex2}
                variant="parallax-glide"
                accentHover="group-hover:border-sky-500/30"
                title="Dominance in everyfield"
                subtitle="Hospitality & Retail"
                onAdvance={() => setSlideIndex2((prev) => prev + 1)}
              />

              {/* Lower Box (Card 1) */}
              <GalleryFadingBox
                photos={box3Photos}
                currentIndex={slideIndex3}
                variant="parallax-glide"
                accentHover="group-hover:border-sky-500/30"
                title="Partners in Business"
                subtitle="Mutual Scale & Capex"
                onAdvance={() => setSlideIndex3((prev) => prev + 1)}
              />
            </div>
          </div>
        </article>


        <article className="fd-pathway-cards__block fd-pathway-cards__block--authority" id="how-collaboration-works" style={{ '--card-index': 2 } as React.CSSProperties}>
          <div className="fd-pathway-cards__left">
            <div className="fd-pathway-cards__hero overflow-hidden relative rounded-2xl bg-slate-950 shadow-lg border border-slate-800/60 group">
              <video
                className="w-full h-full object-cover rounded-2xl pointer-events-none"
                src="/videos/year-inside-reel.mp4"
                poster="/videos/year-inside-reel-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                disablePictureInPicture
              >
                <source src="/videos/year-inside-reel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="fd-pathway-cards__body">
              <div className="fd-pathway-cards__text">
                <div className="fd-pathway-cards__head">
                  <p className="fd-pathway-cards__eyebrow !text-[#F59E0B]">YOUR YEAR INSIDE PEERS GLOBAL</p>
                  <h2 className="fd-pathway-cards__title">
                    <span>Belonging is not one meeting a month.</span>{' '}
                    <span>It is what happens between the meetings too.</span>
                  </h2>
                </div>
                <p className="fd-pathway-cards__desc fd-pathway-cards__desc--lead">
                  Your PEERS GLOBAL experience can include:
                </p>

                <ul className="fd-pathway-cards__list max-h-[260px] overflow-y-auto scrollbar-none pr-1 my-1">
                  <li className="fd-pathway-cards__item">
                    <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkAuth)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                    <span>Circle meetings</span>
                  </li>
                  <li className="fd-pathway-cards__item">
                    <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkAuth)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                    <span>Peer-to-Peer conversations</span>
                  </li>
                  <li className="fd-pathway-cards__item">
                    <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkAuth)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                    <span>Learning and masterclasses</span>
                  </li>
                  <li className="fd-pathway-cards__item">
                    <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkAuth)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                    <span>Business collaboration</span>
                  </li>
                  <li className="fd-pathway-cards__item">
                    <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkAuth)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                    <span>MindMeld experiences</span>
                  </li>
                  <li className="fd-pathway-cards__item">
                    <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkAuth)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                    <span>Family gatherings</span>
                  </li>
                  <li className="fd-pathway-cards__item">
                    <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkAuth)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                    <span>Community events</span>
                  </li>
                  <li className="fd-pathway-cards__item">
                    <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkAuth)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                    <span>Leadership opportunities</span>
                  </li>
                  <li className="fd-pathway-cards__item">
                    <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkAuth)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                    <span>Recognition</span>
                  </li>
                  <li className="fd-pathway-cards__item">
                    <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkAuth)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                    <span><strong className="text-white font-semibold">Unity</strong> — the digital community experience</span>
                  </li>
                </ul>

                <div className="pt-1 space-y-1">
                  <p className="fd-pathway-cards__desc--sub text-xs text-slate-300">
                    <strong className="text-white font-medium">The deeper idea:</strong> A strong community is not created by filling a calendar. It is created by giving people meaningful reasons to keep showing up for one another.
                  </p>
                  <p className="fd-pathway-cards__quote pt-1">
                    &ldquo;The meeting is an event. The relationship is the experience.&rdquo;
                  </p>
                </div>
              </div>
              <div className="pt-2">
                <a className="fd-pathway-cards__btn" href="/events" aria-label="Explore Your Year">EXPLORE YOUR YEAR →</a>
              </div>
            </div>
          </div>
          <div className="fd-pathway-cards__right">
            <div className="flex flex-col gap-4 sm:gap-5 w-full max-w-[520px]">
              {/* Upper Box (Card 2) */}
              <GalleryFadingBox
                photos={box4Photos}
                currentIndex={slideIndex4}
                variant="diagonal-curtain"
                accentHover="group-hover:border-amber-500/30"
                title="Industry Expertise"
                subtitle="Specialized advice without hiring for it"
                onAdvance={() => setSlideIndex4((prev) => prev + 1)}
              />

              {/* Lower Box (Card 2) */}
              <GalleryFadingBox
                photos={box5Photos}
                currentIndex={slideIndex5}
                variant="diagonal-curtain"
                accentHover="group-hover:border-amber-500/30"
                title="Build Together"
                subtitle="Never Build Alone"
                onAdvance={() => setSlideIndex5((prev) => prev + 1)}
              />
            </div>
          </div>
        </article>


        <article className="fd-pathway-cards__block fd-pathway-cards__block--connection" id="impact" style={{ '--card-index': 3 } as React.CSSProperties}>
          <div className="fd-pathway-cards__left">
            <div className="fd-pathway-cards__hero overflow-hidden relative rounded-2xl bg-slate-950 shadow-lg border border-slate-800/60 group">
              <video
                className="w-full h-full object-cover rounded-2xl pointer-events-none"
                src="/videos/impact-system-reel.mp4"
                poster="/videos/impact-system-reel-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                disablePictureInPicture
              >
                <source src="/videos/impact-system-reel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="fd-pathway-cards__body">
              <div className="fd-pathway-cards__text">
                <div className="fd-pathway-cards__head">
                  <p className="fd-pathway-cards__eyebrow !text-[#F43F5E]">THE IMPACT SYSTEM</p>
                  <h2 className="fd-pathway-cards__title">
                    <span>Success is not only what you achieve.</span>{' '}
                    <span>It is also what becomes possible for someone else because you were there.</span>
                  </h2>
                </div>
                <p className="fd-pathway-cards__desc fd-pathway-cards__desc--lead">
                  PEERS GLOBAL places collaboration at the centre of its impact philosophy.
                </p>

                <div className="flex flex-col gap-1.5 mt-1">
                  <p className="fd-pathway-cards__subhead !text-rose-400 font-bold tracking-wide">
                    1 Action = 1 Life Impacted
                  </p>
                  <ul className="fd-pathway-cards__list max-h-[220px] overflow-y-auto pr-1 my-1">
                    <li className="fd-pathway-cards__item">
                      <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkConn)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                      <span>An introduction.</span>
                    </li>
                    <li className="fd-pathway-cards__item">
                      <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkConn)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                      <span>A referral.</span>
                    </li>
                    <li className="fd-pathway-cards__item">
                      <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkConn)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                      <span>A lesson.</span>
                    </li>
                    <li className="fd-pathway-cards__item">
                      <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkConn)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                      <span>A solution.</span>
                    </li>
                    <li className="fd-pathway-cards__item">
                      <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkConn)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                      <span>A connection.</span>
                    </li>
                    <li className="fd-pathway-cards__item">
                      <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkConn)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                      <span>A conversation.</span>
                    </li>
                    <li className="fd-pathway-cards__item">
                      <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkConn)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                      <span>A contribution.</span>
                    </li>
                    <li className="fd-pathway-cards__item">
                      <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkConn)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                      <span>A moment of support.</span>
                    </li>
                  </ul>
                  <p className="fd-pathway-cards__desc--sub text-xs text-slate-300 italic pt-0.5">
                    Each can create movement in another person&apos;s journey.
                  </p>
                </div>

                <div className="flex flex-col gap-1.5 pt-1">
                  <p className="fd-pathway-cards__desc fd-pathway-cards__desc--lead !text-[14.5px]">
                    The PEERS GLOBAL Impact System is designed to make contribution visible rather than leaving it as an invisible good intention.
                  </p>
                  <p className="fd-pathway-cards__quote pt-1">
                    &ldquo;What gets recognised gets repeated. And what gets repeated can become culture.&rdquo;
                  </p>
                </div>
              </div>
              <div className="pt-2">
                <a className="fd-pathway-cards__btn" href="/how-to-earn-impact" aria-label="Discover the Impact System">DISCOVER THE IMPACT SYSTEM →</a>
              </div>
            </div>
          </div>
          <div className="fd-pathway-cards__right">
            <div className="flex flex-col gap-4 sm:gap-5 w-full max-w-[520px]">
              {/* Upper Box (Card 3) */}
              <GalleryFadingBox
                photos={box6Photos}
                currentIndex={slideIndex6}
                variant="vertical-lift"
                accentHover="group-hover:border-rose-500/30"
                title="Founder Confidence & Grit"
                subtitle="Mentorship through turnaround"
                onAdvance={() => setSlideIndex6((prev) => prev + 1)}
              />

              {/* Lower Box (Card 3) */}
              <GalleryFadingBox
                photos={box7Photos}
                currentIndex={slideIndex7}
                variant="vertical-lift"
                accentHover="group-hover:border-rose-500/30"
                title="Measure Impact"
                subtitle="Lives Transformed"
                onAdvance={() => setSlideIndex7((prev) => prev + 1)}
              />
            </div>
          </div>
        </article>

        <article className="fd-pathway-cards__block fd-pathway-cards__block--body" id="the-1-million-mission" style={{ '--card-index': 4 } as React.CSSProperties}>
          <div className="fd-pathway-cards__left">
            <div className="fd-pathway-cards__hero overflow-hidden relative rounded-2xl bg-slate-950 shadow-lg border border-slate-800/60 group">
              <video
                className="w-full h-full object-cover rounded-2xl pointer-events-none"
                src="/videos/why-choose-reel.mp4"
                poster="/videos/why-choose-reel-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                disablePictureInPicture
              >
                <source src="/videos/why-choose-reel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="fd-pathway-cards__body">
              <div className="fd-pathway-cards__text">
                <div className="fd-pathway-cards__head">
                  <p className="fd-pathway-cards__eyebrow !text-[#34D399]">WHY ENTREPRENEURS CHOOSE PEERS GLOBAL</p>
                  <h2 className="fd-pathway-cards__title">Because growth has more than one dimension.</h2>
                </div>

                <ul className="fd-pathway-cards__list max-h-[260px] overflow-y-auto pr-1 my-1">
                  <li className="fd-pathway-cards__item">
                    <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkBody)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                    <span><strong className="text-white font-semibold">01 — You don&apos;t have to build alone.</strong> Create relationships with people who understand the entrepreneurial journey.</span>
                  </li>
                  <li className="fd-pathway-cards__item">
                    <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkBody)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                    <span><strong className="text-white font-semibold">02 — You can learn from experience.</strong> Move beyond theory and learn from entrepreneurs who have lived the problem.</span>
                  </li>
                  <li className="fd-pathway-cards__item">
                    <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkBody)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                    <span><strong className="text-white font-semibold">03 — You can build trusted relationships.</strong> Trust takes time. PEERS GLOBAL is designed around repeated interaction rather than one-time transactions.</span>
                  </li>
                  <li className="fd-pathway-cards__item">
                    <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkBody)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                    <span><strong className="text-white font-semibold">04 — You can collaborate meaningfully.</strong> Turn relationships into introductions, solutions, partnerships and opportunities.</span>
                  </li>
                  <li className="fd-pathway-cards__item">
                    <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkBody)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                    <span><strong className="text-white font-semibold">05 — You can become a better leader.</strong> Growth is not only about growing a business. It is also about growing the person leading it.</span>
                  </li>
                  <li className="fd-pathway-cards__item">
                    <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkBody)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                    <span><strong className="text-white font-semibold">06 — You can contribute.</strong> Your experience may be exactly what another entrepreneur needs next.</span>
                  </li>
                  <li className="fd-pathway-cards__item">
                    <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkBody)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                    <span><strong className="text-white font-semibold">07 — You can create an impact.</strong> Business growth and human impact do not have to exist in separate worlds.</span>
                  </li>
                  <li className="fd-pathway-cards__item">
                    <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkBody)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                    <span><strong className="text-white font-semibold">08 — You can grow from local to global.</strong> A Circle can become a doorway to relationships beyond your immediate geography.</span>
                  </li>
                </ul>

                <div className="flex flex-col gap-1 pt-1">
                  <p className="fd-pathway-cards__desc--sub text-xs text-slate-300">
                    <strong className="text-white font-medium">The thought that brings the section together:</strong>
                  </p>
                  <p className="fd-pathway-cards__quote pt-0.5">
                    &ldquo;You may join for what you need today. You may stay for what you are able to create together tomorrow.&rdquo;
                  </p>
                </div>
              </div>
              <div className="pt-2">
                <a className="fd-pathway-cards__btn" href="/why-peers-global" aria-label="Why Choose Peers Global">WHY CHOOSE PEERS GLOBAL →</a>
              </div>
            </div>
          </div>
          <div className="fd-pathway-cards__right">
            <div className="flex flex-col gap-4 sm:gap-5 w-full max-w-[520px]">
              {/* Upper Box (Card 4) */}
              <GalleryFadingBox
                photos={box8Photos}
                currentIndex={slideIndex8}
                variant="aperture-focus"
                accentHover="group-hover:border-emerald-500/30"
                title="1 Million Mission"
                subtitle="Empowering 1M Entrepreneurs by 2030"
                onAdvance={() => setSlideIndex8((prev) => prev + 1)}
              />

              {/* Lower Box (Card 4) */}
              <GalleryFadingBox
                photos={box9Photos}
                currentIndex={slideIndex9}
                variant="aperture-focus"
                accentHover="group-hover:border-emerald-500/30"
                title="Multidimensional Growth"
                subtitle="From Local to Global Reach"
                onAdvance={() => setSlideIndex9((prev) => prev + 1)}
              />
            </div>
          </div>
        </article>


        <article className="fd-pathway-cards__block fd-pathway-cards__block--mystic" id="real-collaborations" style={{ '--card-index': 5 } as React.CSSProperties}>
          <div className="fd-pathway-cards__left">
            <div className="fd-pathway-cards__hero overflow-hidden relative rounded-2xl bg-slate-950 shadow-lg border border-slate-800/60 group">
              <video
                className="w-full h-full object-cover rounded-2xl pointer-events-none"
                src="/videos/member-to-peer-reel.mp4"
                poster="/videos/member-to-peer-reel-poster.jpg"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                disablePictureInPicture
              >
                <source src="/videos/member-to-peer-reel.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="fd-pathway-cards__body">
              <div className="fd-pathway-cards__text">
                <div className="fd-pathway-cards__head">
                  <p className="fd-pathway-cards__eyebrow !text-[#C084FC]">FROM MEMBER TO PEER</p>
                  <h2 className="fd-pathway-cards__title">Membership is where the journey begins.</h2>
                </div>
                <p className="fd-pathway-cards__desc fd-pathway-cards__desc--lead">
                  A Member enters the ecosystem. A Peer becomes part of a relationship. And over time, contribution creates something deeper: <strong className="text-white font-semibold">trust</strong>.
                </p>
                <p className="fd-pathway-cards__desc--sub text-xs text-slate-300">
                  The PEERS GLOBAL language intentionally distinguishes between the two:
                </p>

                <ul className="fd-pathway-cards__list max-h-[220px] overflow-y-auto pr-1 my-1">
                  <li className="fd-pathway-cards__item">
                    <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkMystic)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                    <span><strong className="text-white font-semibold">Member</strong> is a status.</span>
                  </li>
                  <li className="fd-pathway-cards__item">
                    <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkMystic)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                    <span><strong className="text-white font-semibold">Peer</strong> is a relationship.</span>
                  </li>
                  <li className="fd-pathway-cards__item">
                    <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkMystic)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                    <span><strong className="text-white font-semibold">Belonging</strong> is an experience.</span>
                  </li>
                  <li className="fd-pathway-cards__item">
                    <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkMystic)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                    <span><strong className="text-white font-semibold">Contribution</strong> is a culture.</span>
                  </li>
                  <li className="fd-pathway-cards__item">
                    <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkMystic)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                    <span><strong className="text-white font-semibold">Collaboration</strong> is an action.</span>
                  </li>
                  <li className="fd-pathway-cards__item">
                    <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkMystic)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                    <span><strong className="text-white font-semibold">Impact</strong> is an outcome.</span>
                  </li>
                  <li className="fd-pathway-cards__item">
                    <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkMystic)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
                    <span><strong className="text-white font-semibold">Recognition</strong> is appreciation.</span>
                  </li>
                </ul>

                <div className="flex flex-col gap-1 pt-1">
                  <p className="fd-pathway-cards__desc--sub text-xs text-slate-300">
                    <strong className="text-white font-medium">Closing line:</strong>
                  </p>
                  <p className="fd-pathway-cards__quote pt-0.5">
                    &ldquo;Membership is what you buy. Peer is what you become.&rdquo;
                  </p>
                </div>
              </div>
              <div className="pt-2">
                <a className="fd-pathway-cards__btn" href="/why-peers-global" aria-label="From Member To Peer">BECOME A PEER →</a>
              </div>
            </div>
          </div>
          <div className="fd-pathway-cards__right">
            <div className="fd-pathway-cards__carousel">
              <div className="fd-pathway-cards__track" id="track-stories" tabIndex={0} role="group" aria-label="Peers Global Real Collaborations">
                <div className="fd-pathway-cards__page !grid-cols-1 md:!grid-cols-3 !gap-3.5">
                  {/* Card 1: Jignesh Shah & Rohit Mehta */}
                  <div className="group relative rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-white/25 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/10 p-3.5 flex flex-col justify-between h-full">
                    <div>
                      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 border border-white/10 shadow-md">
                        <img src="/images/story_packaging_auto.jpg" alt="Jignesh Shah and Rohit Mehta" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-rose-300 border border-rose-500/30">
                          PACKAGING &amp; AUTOMOTIVE
                        </div>
                      </div>
                      <div className="space-y-1.5 mb-2.5">
                        <p className="text-white text-xs sm:text-[13px] font-semibold leading-snug">
                          <span className="text-white font-bold">Jignesh Shah</span>, <span className="text-rose-300">Shah Packaging</span>, <span className="text-slate-300">Ahmedabad</span>
                          <span className="text-white/60 mx-1">and</span>
                          <span className="text-white font-bold">Rohit Mehta</span>, <span className="text-rose-300">Mehta Trading</span>, <span className="text-slate-300">Mumbai</span>
                        </p>
                        <p className="text-slate-300 text-[11.5px] leading-relaxed">
                          <strong className="text-white/90 font-medium">What they built together:</strong> A cross-Circle continuous packaging supply partnership connecting idle high-precision plant capacity directly with regional tier-1 automotive client demand.
                        </p>
                      </div>
                    </div>
                    <div className="pt-2.5 border-t border-white/10 mt-auto">
                      <p className="text-[10px] uppercase tracking-wider text-white/50 font-medium mb-1">What it produced:</p>
                      <div className="flex items-baseline justify-between bg-white/[0.04] rounded-lg px-2.5 py-1.5 border border-white/5">
                        <span className="text-base font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">₹1.2 Crore</span>
                        <span className="text-[10px] text-white/70">Recurring Annual Revenue</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Priya Desai & Karan Malhotra */}
                  <div className="group relative rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-white/25 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/10 p-3.5 flex flex-col justify-between h-full">
                    <div>
                      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 border border-white/10 shadow-md">
                        <img src="/images/story_export_corridor.jpg" alt="Priya Desai and Karan Malhotra" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-blue-300 border border-blue-500/30">
                          CROSS-BORDER EXPORTS
                        </div>
                      </div>
                      <div className="space-y-1.5 mb-2.5">
                        <p className="text-white text-xs sm:text-[13px] font-semibold leading-snug">
                          <span className="text-white font-bold">Priya Desai</span>, <span className="text-blue-300">Desai Global Exports</span>, <span className="text-slate-300">Surat</span>
                          <span className="text-white/60 mx-1">and</span>
                          <span className="text-white font-bold">Karan Malhotra</span>, <span className="text-blue-300">Malhotra Logistics</span>, <span className="text-slate-300">Mumbai</span>
                        </p>
                        <p className="text-slate-300 text-[11.5px] leading-relaxed">
                          <strong className="text-white/90 font-medium">What they built together:</strong> A joint 50:50 multimodal export corridor combining organic textile manufacturing with bonded European customs clearing and warehousing.
                        </p>
                      </div>
                    </div>
                    <div className="pt-2.5 border-t border-white/10 mt-auto">
                      <p className="text-[10px] uppercase tracking-wider text-white/50 font-medium mb-1">What it produced:</p>
                      <div className="flex items-baseline justify-between bg-white/[0.04] rounded-lg px-2.5 py-1.5 border border-white/5">
                        <span className="text-base font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">3 Global Markets</span>
                        <span className="text-[10px] text-white/70">₹8.5 Cr Top-Line Exports</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 3: Amit Trivedi & Sandeep Kulkarni */}
                  <div className="group relative rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-white/25 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/10 p-3.5 flex flex-col justify-between h-full">
                    <div>
                      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 border border-white/10 shadow-md">
                        <img src="/images/story_chemical_review.jpg" alt="Amit Trivedi and Sandeep Kulkarni" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-amber-300 border border-amber-500/30">
                          OPERATIONAL WISDOM
                        </div>
                      </div>
                      <div className="space-y-1.5 mb-2.5">
                        <p className="text-white text-xs sm:text-[13px] font-semibold leading-snug">
                          <span className="text-white font-bold">Amit Trivedi</span>, <span className="text-amber-300">Trivedi Chemicals</span>, <span className="text-slate-300">Vadodara</span>
                          <span className="text-white/60 mx-1">and</span>
                          <span className="text-white font-bold">Sandeep Kulkarni</span>, <span className="text-amber-300">Kulkarni Solutions</span>, <span className="text-slate-300">Pune</span>
                        </p>
                        <p className="text-slate-300 text-[11.5px] leading-relaxed">
                          <strong className="text-white/90 font-medium">What they built together:</strong> A confidential 45-minute peer review avoiding an unviable imported recovery column, deploying a compliant modified catalytic system.
                        </p>
                      </div>
                    </div>
                    <div className="pt-2.5 border-t border-white/10 mt-auto">
                      <p className="text-[10px] uppercase tracking-wider text-white/50 font-medium mb-1">What it produced:</p>
                      <div className="flex items-baseline justify-between bg-white/[0.04] rounded-lg px-2.5 py-1.5 border border-white/5">
                        <span className="text-base font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">₹38 Lakhs Saved</span>
                        <span className="text-[10px] text-white/70">18 Months Time Saved</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="fd-pathway-cards__page !grid-cols-1 md:!grid-cols-3 !gap-3.5">
                  {/* Card 4: Neha Patel & Simran Kaur */}
                  <div className="group relative rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-white/25 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/10 p-3.5 flex flex-col justify-between h-full">
                    <div>
                      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 border border-white/10 shadow-md">
                        <img src="/images/story-neha-simran.jpg" alt="Neha Patel and Simran Kaur" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-emerald-300 border border-emerald-500/30">
                          TECH &amp; TALENT
                        </div>
                      </div>
                      <div className="space-y-1.5 mb-2.5">
                        <p className="text-white text-xs sm:text-[13px] font-semibold leading-snug">
                          <span className="text-white font-bold">Neha Patel</span>, <span className="text-emerald-300">Patel Talent Labs</span>, <span className="text-slate-300">Bengaluru</span>
                          <span className="text-white/60 mx-1">and</span>
                          <span className="text-white font-bold">Simran Kaur</span>, <span className="text-emerald-300">Kaur Tech Systems</span>, <span className="text-slate-300">Hyderabad</span>
                        </p>
                        <p className="text-slate-300 text-[11.5px] leading-relaxed">
                          <strong className="text-white/90 font-medium">What they built together:</strong> A cross-city tech engineering delivery pod pooling specialized cloud architects for rapid enterprise deployment.
                        </p>
                      </div>
                    </div>
                    <div className="pt-2.5 border-t border-white/10 mt-auto">
                      <p className="text-[10px] uppercase tracking-wider text-white/50 font-medium mb-1">What it produced:</p>
                      <div className="flex items-baseline justify-between bg-white/[0.04] rounded-lg px-2.5 py-1.5 border border-white/5">
                        <span className="text-base font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-300">60 Engineers</span>
                        <span className="text-[10px] text-white/70">Multi-Year Enterprise Retainer</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 5: Nayan Shah & Vikramaditya Solanki */}
                  <div className="group relative rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-white/25 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/10 p-3.5 flex flex-col justify-between h-full">
                    <div>
                      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 border border-white/10 shadow-md">
                        <img src="/images/story_procurement_syndicate.jpg" alt="Nayan Shah and Vikramaditya Solanki" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-purple-300 border border-purple-500/30">
                          BULK PROCUREMENT
                        </div>
                      </div>
                      <div className="space-y-1.5 mb-2.5">
                        <p className="text-white text-xs sm:text-[13px] font-semibold leading-snug">
                          <span className="text-white font-bold">Nayan Shah</span>, <span className="text-purple-300">Apex Electricals</span>, <span className="text-slate-300">Rajkot</span>
                          <span className="text-white/60 mx-1">and</span>
                          <span className="text-white font-bold">Vikramaditya Solanki</span>, <span className="text-purple-300">Solanki Ceramics</span>, <span className="text-slate-300">Morbi</span>
                        </p>
                        <p className="text-slate-300 text-[11.5px] leading-relaxed">
                          <strong className="text-white/90 font-medium">What they built together:</strong> A joint raw material bulk-procurement syndicate for ceramic glazes and industrial components.
                        </p>
                      </div>
                    </div>
                    <div className="pt-2.5 border-t border-white/10 mt-auto">
                      <p className="text-[10px] uppercase tracking-wider text-white/50 font-medium mb-1">What it produced:</p>
                      <div className="flex items-baseline justify-between bg-white/[0.04] rounded-lg px-2.5 py-1.5 border border-white/5">
                        <span className="text-base font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-300">14% Cost Cut</span>
                        <span className="text-[10px] text-white/70">₹2.4 Cr Pooled Buying</span>
                      </div>
                    </div>
                  </div>

                  {/* Card 6: Pradeep Joshi & Fatima Khan */}
                  <div className="group relative rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-white/25 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/10 p-3.5 flex flex-col justify-between h-full">
                    <div>
                      <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 border border-white/10 shadow-md">
                        <img src="/images/story_farmer_logistics.jpg" alt="Pradeep Joshi and Fatima Khan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-semibold text-rose-300 border border-rose-500/30">
                          AGRI-LOGISTICS
                        </div>
                      </div>
                      <div className="space-y-1.5 mb-2.5">
                        <p className="text-white text-xs sm:text-[13px] font-semibold leading-snug">
                          <span className="text-white font-bold">Pradeep Joshi</span>, <span className="text-rose-300">Joshi Logistics</span>, <span className="text-slate-300">Surat</span>
                          <span className="text-white/60 mx-1">and</span>
                          <span className="text-white font-bold">Fatima Khan</span>, <span className="text-rose-300">Khan Agro Foods</span>, <span className="text-slate-300">Indore</span>
                        </p>
                        <p className="text-slate-300 text-[11.5px] leading-relaxed">
                          <strong className="text-white/90 font-medium">What they built together:</strong> A refrigerated distribution network linking Central India food processing directly to Western ports.
                        </p>
                      </div>
                    </div>
                    <div className="pt-2.5 border-t border-white/10 mt-auto">
                      <p className="text-[10px] uppercase tracking-wider text-white/50 font-medium mb-1">What it produced:</p>
                      <div className="flex items-baseline justify-between bg-white/[0.04] rounded-lg px-2.5 py-1.5 border border-white/5">
                        <span className="text-base font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-300">800+ Farmers</span>
                        <span className="text-[10px] text-white/70">₹3.1 Cr Farm Produce Moved</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="fd-pathway-cards__nav">
                <button className="fd-pathway-cards__navbtn" type="button" onClick={() => scrollTrack('track-stories', -1)} aria-label="Previous real collaboration stories"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M15.884 5.116a1.25 1.25 0 0 0-1.768 0l-6 6a1.25 1.25 0 0 0 0 1.768l6 6a1.25 1.25 0 0 0 1.768-1.768L10.768 12l5.116-5.116a1.25 1.25 0 0 0 0-1.768"></path></svg></button>
                <button className="fd-pathway-cards__navbtn" type="button" onClick={() => scrollTrack('track-stories', 1)} aria-label="More real collaboration stories"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M9.884 5.116a1.25 1.25 0 1 0-1.768 1.768L13.232 12l-5.116 5.116a1.25 1.25 0 0 0 1.768 1.768l6-6a1.25 1.25 0 0 0 0-1.768z"></path></svg></button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
