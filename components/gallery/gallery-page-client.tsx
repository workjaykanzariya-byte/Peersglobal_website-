'use client'

import React, { useState, useEffect, useRef } from 'react'
import '@/app/sections.css'
import { GalaxyButton } from '@/components/ui/galaxy-button'
import {
  fetchGalleryPhotos,
  resolveImageUrl,
  type ApiGalleryPhoto,
} from '@/lib/api/web-content'
import {
  Camera,
  RotateCcw,
  X,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  LayoutGrid,
  Sparkles,
} from 'lucide-react'

type GalleryPhoto = ApiGalleryPhoto

export function GalleryPageClient() {
  const [photos, setPhotos] = useState<GalleryPhoto[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)
  const [viewMode, setViewMode] = useState<'coverflow' | 'grid'>('coverflow')
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const [touchStart, setTouchStart] = useState<number | null>(null)

  // Fetch dynamic photos from Unity backend API on mount
  const loadData = async () => {
    setIsLoading(true)
    try {
      const photoData = await fetchGalleryPhotos({ limit: 48 })
      setPhotos(photoData || [])
      setActiveIndex(0)
    } catch (err) {
      console.warn('Failed to load dynamic gallery photos:', err)
      setPhotos([])
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    loadData()
  }, [])

  // Body scroll lock during full screen overlay
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [lightboxIndex])

  // Keyboard navigation for coverflow and full screen overlay
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex !== null) {
        if (e.key === 'Escape') closeLightbox()
        if (e.key === 'ArrowLeft') prevLightboxPhoto()
        if (e.key === 'ArrowRight') nextLightboxPhoto()
        return
      }
      if (photos.length <= 1) return
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [photos.length, lightboxIndex])

  const handlePrev = () => {
    if (photos.length <= 1) return
    setActiveIndex((prev) => (prev - 1 + photos.length) % photos.length)
  }

  const handleNext = () => {
    if (photos.length <= 1) return
    setActiveIndex((prev) => (prev + 1) % photos.length)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null || photos.length <= 1) return
    const touchEnd = e.changedTouches[0].clientX
    const distance = touchStart - touchEnd
    if (distance > 45) {
      handleNext()
    } else if (distance < -45) {
      handlePrev()
    }
    setTouchStart(null)
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const nextLightboxPhoto = () => {
    if (lightboxIndex !== null && photos.length > 0) {
      setLightboxIndex((lightboxIndex + 1) % photos.length)
    }
  }

  const prevLightboxPhoto = () => {
    if (lightboxIndex !== null && photos.length > 0) {
      setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length)
    }
  }

  // Calculate 3D coverflow styling for each card relative to activeIndex
  const getCardStyle = (index: number): React.CSSProperties => {
    if (photos.length === 1) {
      return {
        transform: 'translateX(0%) scale(1.05) translateZ(0)',
        zIndex: 30,
        opacity: 1,
        visibility: 'visible',
        filter: 'drop-shadow(0 25px 40px rgba(15, 23, 42, 0.35))',
      }
    }

    const N = photos.length
    let diff = index - activeIndex

    // Wrap circular offset into [-N/2, N/2]
    while (diff > N / 2) diff -= N
    while (diff < -N / 2) diff += N

    if (diff === 0) {
      // Center focused card (largest, elevated, sharp)
      return {
        transform: 'translateX(0%) scale(1.08)',
        zIndex: 30,
        opacity: 1,
        visibility: 'visible',
        filter: 'drop-shadow(0 25px 45px rgba(15, 23, 42, 0.4))',
        cursor: 'pointer',
      }
    }

    if (diff === 1) {
      // Right immediate card
      return {
        transform: 'translateX(58%) scale(0.88)',
        zIndex: 20,
        opacity: 0.88,
        visibility: 'visible',
        filter: 'brightness(0.9) drop-shadow(0 15px 30px rgba(15, 23, 42, 0.25))',
        cursor: 'pointer',
      }
    }

    if (diff === -1) {
      // Left immediate card
      return {
        transform: 'translateX(-58%) scale(0.88)',
        zIndex: 20,
        opacity: 0.88,
        visibility: 'visible',
        filter: 'brightness(0.9) drop-shadow(0 15px 30px rgba(15, 23, 42, 0.25))',
        cursor: 'pointer',
      }
    }

    if (diff === 2) {
      // Right outer card
      return {
        transform: 'translateX(105%) scale(0.74)',
        zIndex: 10,
        opacity: 0.65,
        visibility: 'visible',
        filter: 'brightness(0.78) drop-shadow(0 10px 20px rgba(15, 23, 42, 0.2))',
        cursor: 'pointer',
      }
    }

    if (diff === -2) {
      // Left outer card
      return {
        transform: 'translateX(-105%) scale(0.74)',
        zIndex: 10,
        opacity: 0.65,
        visibility: 'visible',
        filter: 'brightness(0.78) drop-shadow(0 10px 20px rgba(15, 23, 42, 0.2))',
        cursor: 'pointer',
      }
    }

    // Completely off-screen
    return {
      transform: diff > 0 ? 'translateX(160%) scale(0.6)' : 'translateX(-160%) scale(0.6)',
      zIndex: 0,
      opacity: 0,
      visibility: 'hidden',
      pointerEvents: 'none',
    }
  }

  const activePhoto = photos[activeIndex]

  return (
    <div className="min-h-screen bg-[#FBFCFE] text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Global Gradient Definition for Brand Icons */}
      <svg width="0" height="0" className="absolute pointer-events-none" style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1D4ED8" />
            <stop offset="100%" stopColor="#E11D48" />
          </linearGradient>
        </defs>
      </svg>

      {/* ─── GALLERY SHOWCASE (PRIMARY 3D COVERFLOW SECTION) ─── */}
      <section id="gallery-showcase" className="pt-24 sm:pt-28 md:pt-32 pb-16 sm:pb-20 lg:pb-24 bg-white border-b border-slate-200/80 scroll-mt-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Header matching reference */}
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent inline-block">
                GALLERY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
              Moments Across Our Community
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-xl mx-auto">
              A living visual record of{' '}
              <span className="font-semibold bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] bg-clip-text text-transparent">
                conversations, conclaves, and entrepreneurial milestones
              </span>.
            </p>

            {/* Controls Bar: Unique Gradient View Mode Toggle & Refresh */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3.5">
              {photos.length > 1 && (
                <div className="relative p-[1.5px] rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] shadow-md shadow-blue-900/10 hover:shadow-lg hover:shadow-blue-900/15 transition-all">
                  <div className="p-1 rounded-full bg-white flex items-center gap-1 text-xs font-semibold">
                    <button
                      onClick={() => setViewMode('coverflow')}
                      className={`px-4 py-1.5 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                        viewMode === 'coverflow'
                          ? 'bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] text-white shadow-sm font-bold'
                          : 'text-slate-800 hover:text-black hover:bg-slate-100/70 font-semibold'
                      }`}
                    >
                      <Sparkles className={`size-3.5 stroke-[2.2] transition-colors ${viewMode === 'coverflow' ? 'text-white' : 'text-black'}`} />
                      <span>3D Showcase</span>
                    </button>
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`px-4 py-1.5 rounded-full transition-all duration-300 cursor-pointer flex items-center gap-1.5 ${
                        viewMode === 'grid'
                          ? 'bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] text-white shadow-sm font-bold'
                          : 'text-slate-800 hover:text-black hover:bg-slate-100/70 font-semibold'
                      }`}
                    >
                      <LayoutGrid className={`size-3.5 stroke-[2.2] transition-colors ${viewMode === 'grid' ? 'text-white' : 'text-black'}`} />
                      <span>Grid Gallery</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Refresh Button with Matching Gradient Luxury Style */}
              <button
                onClick={loadData}
                disabled={isLoading}
                title="Refresh from Admin Panel"
                className="relative p-[1.5px] rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] shadow-md shadow-blue-900/10 hover:shadow-lg hover:shadow-rose-900/20 hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer group"
              >
                <div className="px-4 py-1.5 rounded-full bg-white group-hover:bg-transparent transition-colors duration-300 flex items-center gap-2 text-xs font-bold uppercase tracking-wider">
                  <RotateCcw
                    className={`size-3.5 stroke-[2.2] text-black group-hover:text-white transition-colors duration-300 ${
                      isLoading ? 'animate-spin text-rose-500' : 'group-hover:rotate-180'
                    }`}
                  />
                  <span className="bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent group-hover:text-white transition-colors duration-300">
                    {isLoading ? 'Updating...' : 'Refresh'}
                  </span>
                </div>
              </button>
            </div>
          </div>

          {/* Content States */}
          {isLoading ? (
            <div className="py-28 text-center space-y-3">
              <div className="size-10 rounded-full border-2 border-blue-600 border-t-transparent animate-spin mx-auto" />
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Loading community moments...
              </p>
            </div>
          ) : photos.length === 0 ? (
            <div className="text-center py-20 px-6 bg-white rounded-3xl border border-slate-200/90 shadow-2xs space-y-4 max-w-xl mx-auto my-4">
              <div className="size-16 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 flex items-center justify-center mx-auto text-blue-600 shadow-xs">
                <Camera className="size-7" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  No Moments Uploaded Yet
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-light leading-relaxed max-w-md mx-auto">
                  Photos and captions uploaded from the admin panel will appear here automatically in this 3D visual showcase.
                </p>
              </div>
              <div className="pt-2 flex items-center justify-center gap-3">
                <button
                  onClick={loadData}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer shadow-sm"
                >
                  <RotateCcw className="size-3.5" />
                  <span>Refresh Gallery</span>
                </button>
              </div>
            </div>
          ) : viewMode === 'coverflow' ? (
            /* ─── 3D COVERFLOW PERSPECTIVE STAGE ─── */
            <div className="space-y-8 select-none">
              <div
                className="relative w-full h-[420px] sm:h-[480px] md:h-[540px] flex items-center justify-center overflow-visible"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {photos.map((photo, idx) => {
                  const style = getCardStyle(idx)
                  const isCenter = idx === activeIndex

                  return (
                    <div
                      key={photo.id || idx}
                      onClick={(e) => {
                        e.stopPropagation()
                        if (isCenter) {
                          openLightbox(idx)
                        } else {
                          setActiveIndex(idx)
                        }
                      }}
                      className="absolute inset-0 m-auto w-[270px] sm:w-[320px] md:w-[370px] lg:w-[400px] h-[380px] sm:h-[440px] md:h-[500px] rounded-[28px] sm:rounded-[32px] overflow-hidden bg-slate-900 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer group shadow-2xl"
                      style={style}
                    >
                      {/* Full Click Hit-Area for Side Cards */}
                      {!isCenter && (
                        <button
                          type="button"
                          aria-label={`Show moment ${idx + 1}`}
                          onClick={(e) => {
                            e.stopPropagation()
                            setActiveIndex(idx)
                          }}
                          className="absolute inset-0 z-30 size-full bg-transparent border-0 cursor-pointer p-0 focus:outline-none"
                        />
                      )}

                      {/* Image */}
                      {photo.image ? (
                        <img
                          src={resolveImageUrl(photo.image)}
                          alt={photo.caption || photo.title || 'Community Moment'}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                          loading="lazy"
                        />
                      ) : (
                        <div className="size-full flex items-center justify-center bg-slate-900 text-slate-600">
                          <Camera className="size-12 opacity-30 text-blue-400" />
                        </div>
                      )}

                      {/* Subtle Vignette Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                      {/* Expand Indicator on Hover (Center Card only) */}
                      {isCenter && (
                        <div className="absolute inset-0 bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                          <span className="px-4 py-2 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                            <Maximize2 className="size-3.5 text-blue-600" />
                            <span>View Full Size</span>
                          </span>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>

              {/* Active Caption & Counter */}
              {activePhoto && (
                <div className="text-center max-w-xl mx-auto px-4 space-y-1.5">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-900 tracking-tight leading-snug">
                    {activePhoto.caption || activePhoto.title || 'Community Moment'}
                  </h3>
                  {photos.length > 1 && (
                    <p className="text-xs text-slate-500 font-mono">
                      {activeIndex + 1} of {photos.length}
                    </p>
                  )}
                </div>
              )}

              {/* Navigation Arrows: Styled with Logo Gradient */}
              {photos.length > 1 && (
                <div className="flex items-center justify-center gap-4 pt-3">
                  <button
                    onClick={handlePrev}
                    aria-label="Previous Photo"
                    className="size-12 sm:size-14 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] text-white shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-rose-600/35 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
                  >
                    <ChevronLeft className="size-6 sm:size-7 text-white stroke-[2.5] group-hover:-translate-x-0.5 transition-transform" />
                  </button>
                  <button
                    onClick={handleNext}
                    aria-label="Next Photo"
                    className="size-12 sm:size-14 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] text-white shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-rose-600/35 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
                  >
                    <ChevronRight className="size-6 sm:size-7 text-white stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              )}

              {/* Thumbnail Strip */}
              {photos.length > 1 && (
                <div className="pt-4 flex items-center justify-center gap-2 overflow-x-auto max-w-2xl mx-auto py-2 px-4 no-scrollbar">
                  {photos.map((p, idx) => (
                    <button
                      key={p.id || idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`relative size-12 sm:size-14 rounded-2xl overflow-hidden shrink-0 border-2 transition-all cursor-pointer ${
                        idx === activeIndex
                          ? 'border-blue-600 ring-2 ring-blue-500/30 scale-105'
                          : 'border-transparent opacity-60 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={resolveImageUrl(p.image)}
                        alt={p.caption || 'Thumbnail'}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* ─── GRID VIEW ALTERNATIVE ─── */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo, idx) => (
                <div
                  key={photo.id || idx}
                  onClick={() => openLightbox(idx)}
                  className="group/card relative rounded-3xl p-[1px] bg-slate-200/80 hover:bg-gradient-to-r hover:from-[#1D4ED8] hover:to-[#E11D48] transition-all duration-300 shadow-2xs hover:shadow-xl hover:-translate-y-1 cursor-pointer"
                >
                  <div className="rounded-[23px] bg-white overflow-hidden h-full flex flex-col justify-between group">
                    <div className="relative h-64 sm:h-72 w-full bg-slate-950 overflow-hidden">
                      <img
                        src={resolveImageUrl(photo.image)}
                        alt={photo.caption || photo.title || 'Gallery Photo'}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-[11px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                          <Maximize2 className="size-3.5 text-sky-400" />
                          <span>View Full Size</span>
                        </span>
                      </div>
                    </div>

                    <div className="p-4 sm:p-5">
                      <p className="text-slate-900 font-medium text-xs sm:text-sm line-clamp-2">
                        {photo.caption || photo.title || 'Gallery Photo'}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* ─── SECTION 3: SIGNATURE LUXURY CLOSING HERO BANNER ─── */}
      <section
        id="download-unity"
        className="relative py-20 lg:py-28 text-white overflow-hidden border-t border-slate-800/80"
        style={{
          background: 'linear-gradient(135deg, #030712 0%, #07132B 35%, #0B1120 70%, #150618 100%)',
        }}
      >
        {/* Ambient Glows */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-rose-600/18 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.08),transparent_60%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl flex flex-col items-start space-y-5">
            <div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent inline-block">
                WITNESS THE MOVEMENT
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-white tracking-tight leading-tight">
              Build Your Business. Build Your Relationships. Build Your Circle.
            </h2>

            <div className="space-y-3.5 text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl">
              <p>
                Join verified entrepreneurs across India. Experience the energy of governed peer circles in your city.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <GalaxyButton
                href="/membership"
                size="lg"
                className="text-xs sm:text-sm font-semibold uppercase tracking-wider"
              >
                Apply for Membership
              </GalaxyButton>
              <GalaxyButton
                href="https://unity.peersglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                variant="transparent"
                size="lg"
                className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white"
              >
                Open Unity App
              </GalaxyButton>
            </div>
          </div>
        </div>
      </section>

      {/* ─── EDGE-TO-EDGE FULL SCREEN OVERLAY: LOGO GRADIENT BACKDROP, NO MODEL BOX/FRAME ─── */}
      {lightboxIndex !== null && photos[lightboxIndex] && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-[9999] w-screen h-screen flex flex-col justify-between p-4 sm:p-8 select-none animate-in fade-in duration-300 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #030712 0%, #07132B 35%, #0B1120 70%, #150618 100%)',
          }}
        >
          {/* Ambient Brand Logo Gradient Glows */}
          <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-blue-600/25 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[550px] h-[550px] bg-rose-600/22 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(79,70,229,0.12),transparent_75%)] pointer-events-none" />

          {/* Top Bar: Floating Counter Pill & Close Button */}
          <div className="relative z-30 flex items-center justify-between w-full max-w-7xl mx-auto pt-1 sm:pt-2">
            {/* Logo Gradient Pill Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs font-semibold tracking-wider">
              <span className="size-2 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] animate-pulse" />
              <span>{lightboxIndex + 1} / {photos.length}</span>
            </div>

            {/* Close Button with Logo Gradient hover */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                closeLightbox()
              }}
              aria-label="Close full screen"
              className="size-11 sm:size-12 rounded-full bg-white/10 hover:bg-gradient-to-r hover:from-[#1D4ED8] hover:to-[#E11D48] text-white border border-white/20 backdrop-blur-md flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer shadow-lg group"
            >
              <X className="size-5 sm:size-6 stroke-[2.5] transition-transform group-hover:rotate-90" />
            </button>
          </div>

          {/* Center Stage: Floating Edge-to-Edge Image (No Box, No Frame) */}
          <div
            className="relative z-20 flex-1 w-full flex items-center justify-center p-2 sm:p-4 my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left Nav Arrow with Logo Gradient */}
            {photos.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevLightboxPhoto()
                }}
                aria-label="Previous Photo"
                className="absolute left-2 sm:left-6 md:left-10 z-30 size-12 sm:size-14 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] text-white shadow-2xl shadow-blue-600/30 hover:shadow-rose-600/40 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
              >
                <ChevronLeft className="size-6 sm:size-7 text-white stroke-[2.5] group-hover:-translate-x-0.5 transition-transform" />
              </button>
            )}

            {/* The Image Itself - floating seamlessly with zero frame/box */}
            <img
              src={resolveImageUrl(photos[lightboxIndex].image)}
              alt={photos[lightboxIndex].caption || photos[lightboxIndex].title || 'Community Moment'}
              className="max-h-[76vh] sm:max-h-[80vh] md:max-h-[84vh] max-w-[92vw] md:max-w-[88vw] w-auto h-auto object-contain rounded-2xl drop-shadow-[0_25px_60px_rgba(0,0,0,0.85)] transition-all duration-300 pointer-events-auto"
            />

            {/* Right Nav Arrow with Logo Gradient */}
            {photos.length > 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextLightboxPhoto()
                }}
                aria-label="Next Photo"
                className="absolute right-2 sm:right-6 md:right-10 z-30 size-12 sm:size-14 rounded-full bg-gradient-to-r from-[#1D4ED8] via-[#4F46E5] to-[#E11D48] text-white shadow-2xl shadow-blue-600/30 hover:shadow-rose-600/40 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer group"
              >
                <ChevronRight className="size-6 sm:size-7 text-white stroke-[2.5] group-hover:translate-x-0.5 transition-transform" />
              </button>
            )}
          </div>

          {/* Bottom Bar: Clean Floating Caption (No Box, No Card Footer) */}
          <div
            className="relative z-30 text-center w-full max-w-3xl mx-auto py-2 px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {(photos[lightboxIndex].caption || photos[lightboxIndex].title) && (
              <p className="text-sm sm:text-base md:text-lg text-white font-medium tracking-wide drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                {photos[lightboxIndex].caption || photos[lightboxIndex].title}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
