'use client'

import React, { useState, useEffect } from 'react'
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
} from 'lucide-react'

type GalleryPhoto = ApiGalleryPhoto

export function GalleryPageClient() {
  const [photos, setPhotos] = useState<GalleryPhoto[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasLoadedMore, setHasLoadedMore] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  // Fetch dynamic photos from Unity backend API on mount
  const loadData = async () => {
    setIsLoading(true)
    try {
      const photoData = await fetchGalleryPhotos({ limit: 48 })
      setPhotos(photoData || [])
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

  const handleLoadMore = async () => {
    try {
      const nextPage = Math.floor(photos.length / 12) + 1
      const moreApiData = await fetchGalleryPhotos({ page: nextPage, limit: 12 })
      if (moreApiData && moreApiData.length > 0) {
        setPhotos((prev) => [...prev, ...moreApiData])
      } else {
        setHasLoadedMore(true)
      }
    } catch {
      setHasLoadedMore(true)
    }
  }

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxIndex(null)
  }

  const nextPhoto = () => {
    if (lightboxIndex !== null && photos.length > 0) {
      setLightboxIndex((lightboxIndex + 1) % photos.length)
    }
  }

  const prevPhoto = () => {
    if (lightboxIndex !== null && photos.length > 0) {
      setLightboxIndex((lightboxIndex - 1 + photos.length) % photos.length)
    }
  }

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

      {/* ─── SECTION 1: HERO SECTION ─── */}
      <section
        className="fd-hero relative overflow-hidden bg-slate-950 text-white min-h-[460px] sm:min-h-[520px] flex items-center"
        style={{
          background: 'linear-gradient(135deg, #030712 0%, #07132B 35%, #0B1120 70%, #150618 100%)',
        }}
      >
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-rose-600/18 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.08),transparent_60%)] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 w-full">
          <div className="max-w-3xl space-y-6">
            
            {/* Category / Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <span className="inline-block size-2 rounded-full bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.22em] uppercase bg-gradient-to-r from-[#38BDF8] via-[#818CF8] to-[#FB7185] bg-clip-text text-transparent">
                COMMUNITY LIFE &amp; ARCHIVES
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="!text-3xl sm:!text-5xl lg:!text-[52px] !leading-[1.14] font-semibold tracking-tight text-white">
              Gallery
            </h1>

            {/* Subtitle */}
            <p className="!text-base sm:!text-xl font-medium leading-relaxed bg-gradient-to-r from-white via-slate-100 to-sky-200 bg-clip-text text-transparent">
              Moments, conclaves, and community gatherings captured across our network.
            </p>

            {/* Quote with Brand Accent */}
            <p className="text-sm sm:text-base text-white/95 font-medium italic border-l-2 border-[#E11D48] pl-3.5 py-0.5 max-w-2xl">
              &ldquo;Every photo here is a real moment from a real room. Circle meetings, conclaves, and lifelong friendships forged in business.&rdquo;
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <GalaxyButton
                href="#gallery-grid"
                variant="white-gradient"
                size="lg"
                className="text-xs sm:text-sm uppercase tracking-wider font-bold"
              >
                BROWSE GALLERY
              </GalaxyButton>
              <GalaxyButton
                href="https://unity.peersglobal.com"
                target="_blank"
                rel="noopener noreferrer"
                variant="gradient-white"
                size="lg"
                className="text-xs sm:text-sm uppercase tracking-wider font-bold text-white"
              >
                DOWNLOAD UNITY APP
              </GalaxyButton>
            </div>

          </div>
        </div>
      </section>

      {/* ─── SECTION 2: COMMUNITY GALLERY (PHOTO + CAPTION) ─── */}
      <section id="gallery-grid" className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200/80 scroll-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="mb-1">
                <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.25em] bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] bg-clip-text text-transparent inline-block">
                  COMMUNITY MOMENTS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-bold text-slate-900 tracking-tight leading-tight">
                Moments from across our community
              </h2>
            </div>

            <div className="flex items-center gap-3">
              {photos.length > 0 && (
                <span className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                  {photos.length} {photos.length === 1 ? 'Moment' : 'Moments'}
                </span>
              )}
              <button
                onClick={loadData}
                disabled={isLoading}
                title="Refresh from Admin Panel"
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer hover:shadow-xs group"
              >
                <RotateCcw className={`size-3.5 text-slate-500 group-hover:text-[#1D4ED8] transition-colors ${isLoading ? 'animate-spin text-blue-600' : ''}`} />
                <span className="group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all">
                  {isLoading ? 'Updating...' : 'Refresh'}
                </span>
              </button>
            </div>
          </div>

          {/* Photo Grid & Dynamic Empty State */}
          {isLoading ? (
            <div className="py-24 text-center space-y-3">
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
                  Photos and captions uploaded from the admin panel will appear here automatically.
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
          ) : (
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
                      
                      {/* Subtle hover overlay to view full size */}
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

          {/* Load More Button */}
          {photos.length >= 12 && !hasLoadedMore && (
            <div className="pt-8 text-center">
              <GalaxyButton
                onClick={handleLoadMore}
                size="lg"
                icon={false}
                variant="transparent"
                className="text-xs uppercase tracking-wider border-slate-300 hover:border-slate-400 text-slate-800"
              >
                LOAD MORE PHOTOS
              </GalaxyButton>
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

      {/* ─── LIGHTBOX MODAL: FULL PHOTO + CAPTION ─── */}
      {lightboxIndex !== null && photos[lightboxIndex] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md animate-in fade-in duration-200">
          <div className="max-w-4xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-20 size-9 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="size-5" />
            </button>

            {photos.length > 1 && (
              <>
                <button
                  onClick={prevPhoto}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-20 size-10 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft className="size-5" />
                </button>

                <button
                  onClick={nextPhoto}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-20 size-10 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight className="size-5" />
                </button>
              </>
            )}

            <div className="relative max-h-[75vh] w-full flex items-center justify-center bg-slate-950 p-2 sm:p-4">
              <img
                src={resolveImageUrl(photos[lightboxIndex].image)}
                alt={photos[lightboxIndex].caption || photos[lightboxIndex].title || 'Gallery Photo'}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-lg shadow-2xl mx-auto"
              />
            </div>

            {(photos[lightboxIndex].caption || photos[lightboxIndex].title) && (
              <div className="p-5 sm:p-6 bg-slate-950 text-white border-t border-white/10 text-center w-full">
                <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed max-w-2xl mx-auto">
                  {photos[lightboxIndex].caption || photos[lightboxIndex].title}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
