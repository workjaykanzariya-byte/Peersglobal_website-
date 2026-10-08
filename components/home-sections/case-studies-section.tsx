'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  Play,
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Quote,
  Sparkles,
  Award,
} from 'lucide-react'
import {
  fetchSuccessStories,
  SuccessStory,
  FALLBACK_STORIES,
  buildYoutubeEmbedUrl,
} from '@/lib/api/success-stories'

export function CaseStudiesSection() {
  const [stories, setStories] = useState<SuccessStory[]>(FALLBACK_STORIES)
  const [loading, setLoading] = useState(true)
  const [selectedStory, setSelectedStory] = useState<SuccessStory | null>(null)
  const [activeStoryIndex, setActiveStoryIndex] = useState<number>(0)

  useEffect(() => {
    let isMounted = true
    async function loadStories() {
      try {
        const data = await fetchSuccessStories(12)
        if (isMounted && Array.isArray(data) && data.length > 0) {
          setStories(data)
        }
      } catch (err) {
        console.warn('Failed to load dynamic success stories, using fallback:', err)
      } finally {
        if (isMounted) setLoading(false)
      }
    }
    loadStories()
    return () => {
      isMounted = false
    }
  }, [])

  // Keyboard navigation for video modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedStory) return
      if (e.key === 'Escape') {
        setSelectedStory(null)
      } else if (e.key === 'ArrowRight') {
        nextStory()
      } else if (e.key === 'ArrowLeft') {
        prevStory()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedStory, stories, activeStoryIndex])

  const openStory = (story: SuccessStory, index: number) => {
    setSelectedStory(story)
    setActiveStoryIndex(index)
  }

  const nextStory = () => {
    if (!stories.length) return
    const nextIdx = (activeStoryIndex + 1) % stories.length
    setActiveStoryIndex(nextIdx)
    setSelectedStory(stories[nextIdx])
  }

  const prevStory = () => {
    if (!stories.length) return
    const prevIdx = (activeStoryIndex - 1 + stories.length) % stories.length
    setActiveStoryIndex(prevIdx)
    setSelectedStory(stories[prevIdx])
  }

  // Divide available stories between left and right sides of collage
  const half = Math.ceil(stories.length / 2)
  const leftStories = stories.slice(0, half)
  const rightStories = stories.slice(half)

  return (
    <section
      id="success-stories"
      className="relative w-full overflow-hidden bg-white py-16 md:py-24 font-sans select-none"
    >
      {/* Background radial gradient glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(59, 130, 246, 0.08) 0%, rgba(225, 29, 72, 0.04) 40%, rgba(255, 255, 255, 0) 70%)',
        }}
      />

      {/* Main Container */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Desktop / Large Screen Layout: Floating collage with centered content */}
        <div className="hidden lg:grid grid-cols-12 items-center gap-6 min-h-[640px]">
          {/* Left Collage Columns */}
          <div className="col-span-4 grid grid-cols-2 gap-4 items-center">
            {/* Col 1 */}
            <div className="flex flex-col gap-4 -translate-y-4 animate-float-slow">
              {leftStories.slice(0, 3).map((story, i) => (
                <StoryCard
                  key={story.id}
                  story={story}
                  index={i}
                  onOpen={() => openStory(story, i)}
                  aspectClass={i === 1 ? 'aspect-[3/4]' : 'aspect-square'}
                />
              ))}
            </div>

            {/* Col 2 */}
            <div className="flex flex-col gap-4 translate-y-6 animate-float-reverse">
              {leftStories.slice(3, 6).map((story, i) => {
                const actualIdx = i + 3
                return (
                  <StoryCard
                    key={story.id}
                    story={story}
                    index={actualIdx}
                    onOpen={() => openStory(story, actualIdx)}
                    aspectClass={i === 0 ? 'aspect-[4/5]' : 'aspect-square'}
                  />
                )
              })}
            </div>
          </div>

          {/* Center Content Box (Figma specification) */}
          <div className="col-span-4 flex flex-col items-center text-center px-4 z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold mb-4 tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Verified Member Case Studies
            </div>

            {/* Stat */}
            <h2 className="text-6xl sm:text-7xl font-bold tracking-tight text-slate-900 leading-none mb-3">
              25,959
            </h2>

            {/* Subtitle */}
            <h3 className="text-2xl sm:text-3xl font-semibold text-slate-700 tracking-tight mb-4">
              Global Stories of Success
            </h3>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-sm mb-8 leading-relaxed font-normal">
              Take a look at how our platform helps leaders find answers to everyday problems
              and connect with other leaders worldwide.
            </p>

            {/* Primary Action Button */}
            <button
              onClick={() => openStory(stories[0], 0)}
              className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-base font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 hover:from-blue-700 hover:via-indigo-700 hover:to-rose-700 shadow-lg shadow-blue-500/25 hover:shadow-rose-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              <span>Watch their journey</span>
              <div className="w-6 h-6 rounded-full bg-white/20 group-hover:bg-white/30 flex items-center justify-center transition-colors">
                <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
              </div>
            </button>
          </div>

          {/* Right Collage Columns */}
          <div className="col-span-4 grid grid-cols-2 gap-4 items-center">
            {/* Col 3 */}
            <div className="flex flex-col gap-4 translate-y-3 animate-float-slow">
              {rightStories.slice(0, 3).map((story, i) => {
                const actualIdx = half + i
                return (
                  <StoryCard
                    key={story.id}
                    story={story}
                    index={actualIdx}
                    onOpen={() => openStory(story, actualIdx)}
                    aspectClass={i === 1 ? 'aspect-[4/5]' : 'aspect-square'}
                  />
                )
              })}
            </div>

            {/* Col 4 */}
            <div className="flex flex-col gap-4 -translate-y-6 animate-float-reverse">
              {rightStories.slice(3, 6).map((story, i) => {
                const actualIdx = half + 3 + i
                return (
                  <StoryCard
                    key={story.id}
                    story={story}
                    index={actualIdx}
                    onOpen={() => openStory(story, actualIdx)}
                    aspectClass={i === 0 ? 'aspect-[3/4]' : 'aspect-square'}
                  />
                )
              })}
            </div>
          </div>
        </div>

        {/* Mobile & Tablet Layout */}
        <div className="lg:hidden flex flex-col items-center">
          {/* Top Marquee Collage of Faces */}
          <div className="w-full overflow-x-auto pb-4 scrollbar-none flex gap-3 px-2 snap-x snap-mandatory">
            {stories.slice(0, 6).map((story, i) => (
              <div key={story.id} className="flex-shrink-0 w-36 sm:w-44 snap-center">
                <StoryCard
                  story={story}
                  index={i}
                  onOpen={() => openStory(story, i)}
                  aspectClass="aspect-[4/5]"
                />
              </div>
            ))}
          </div>

          {/* Center Copy */}
          <div className="flex flex-col items-center text-center py-8 px-4 max-w-lg">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Verified Member Case Studies
            </span>
            <p className="text-5xl sm:text-6xl font-extrabold text-slate-900 tracking-tight mb-2">
              25,959
            </p>
            <p className="text-xl sm:text-2xl font-semibold text-slate-700 mb-3">
              Global Stories of Success
            </p>
            <p className="text-sm sm:text-base text-slate-600 mb-6 leading-relaxed">
              Take a look at how our platform helps leaders find answers to everyday problems
              and connect with other leaders worldwide.
            </p>
            <button
              onClick={() => openStory(stories[0], 0)}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600 shadow-md"
            >
              <span>Watch their journey</span>
              <Play className="w-3.5 h-3.5 fill-white" />
            </button>
          </div>

          {/* Bottom Marquee Collage */}
          <div className="w-full overflow-x-auto pt-2 scrollbar-none flex gap-3 px-2 snap-x snap-mandatory">
            {stories.slice(6, 12).map((story, i) => {
              const actualIdx = 6 + i
              return (
                <div key={story.id} className="flex-shrink-0 w-36 sm:w-44 snap-center">
                  <StoryCard
                    story={story}
                    index={actualIdx}
                    onOpen={() => openStory(story, actualIdx)}
                    aspectClass="aspect-[4/5]"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Interactive YouTube Video Player Modal */}
      {selectedStory && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedStory(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-800/80 bg-slate-900/90 text-white">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full overflow-hidden bg-slate-800 border border-slate-700 flex-shrink-0">
                  <img
                    src={selectedStory.coverImageUrl || selectedStory.youtubeThumbnailUrl}
                    alt={selectedStory.personName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-white line-clamp-1">
                    {selectedStory.personName}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-1">
                    {selectedStory.designation} {selectedStory.company && `• ${selectedStory.company}`}
                  </p>
                </div>
              </div>

              {/* Navigation & Close */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevStory}
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition"
                  title="Previous story (Left Arrow)"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs text-slate-400 font-mono">
                  {activeStoryIndex + 1}/{stories.length}
                </span>
                <button
                  onClick={nextStory}
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition"
                  title="Next story (Right Arrow)"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="h-4 w-px bg-slate-800 mx-1" />
                <button
                  onClick={() => setSelectedStory(null)}
                  className="w-8 h-8 rounded-full bg-slate-800 hover:bg-rose-600/80 text-slate-300 hover:text-white flex items-center justify-center transition"
                  title="Close (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Video Player (16:9 responsive embed) */}
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src={selectedStory.youtubeEmbedUrl || buildYoutubeEmbedUrl(selectedStory.youtubeUrl)}
                title={`${selectedStory.personName} - Success Story`}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Story Details Footer */}
            <div className="p-4 sm:p-6 bg-slate-900 border-t border-slate-800/80 text-slate-200">
              {selectedStory.storyTitle && (
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <h5 className="text-sm sm:text-base font-semibold text-white">
                    {selectedStory.storyTitle}
                  </h5>
                </div>
              )}

              {selectedStory.quote && (
                <div className="relative pl-6 italic text-xs sm:text-sm text-slate-300 leading-relaxed">
                  <Quote className="w-4 h-4 text-blue-400/60 absolute left-0 top-0" />
                  &ldquo;{selectedStory.quote}&rdquo;
                </div>
              )}

              {/* Thumbnails strip to jump to another story */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-500 whitespace-nowrap mr-1">
                  More Stories:
                </span>
                {stories.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      setSelectedStory(s)
                      setActiveStoryIndex(idx)
                    }}
                    className={`flex-shrink-0 relative w-12 h-12 rounded-lg overflow-hidden border transition-all ${
                      idx === activeStoryIndex
                        ? 'border-rose-500 scale-105 shadow-md shadow-rose-500/20'
                        : 'border-slate-800 hover:border-slate-600 opacity-60 hover:opacity-100'
                    }`}
                    title={s.personName}
                  >
                    <img
                      src={s.coverImageUrl || s.youtubeThumbnailUrl}
                      alt={s.personName}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating animation keyframes */}
      <style jsx global>{`
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        @keyframes floatReverse {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(8px);
          }
        }
        .animate-float-slow {
          animation: floatSlow 7s ease-in-out infinite;
        }
        .animate-float-reverse {
          animation: floatReverse 8s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}

// Subcomponent: Individual Story Portrait Card in Collage
interface StoryCardProps {
  story: SuccessStory
  index: number
  onOpen: () => void
  aspectClass?: string
}

function StoryCard({ story, index, onOpen, aspectClass = 'aspect-square' }: StoryCardProps) {
  const [imgError, setImgError] = useState(false)
  const imageSrc =
    !imgError && story.coverImageUrl
      ? story.coverImageUrl
      : story.youtubeThumbnailUrl || '/images/circle-founder-hero.jpg'

  return (
    <div
      onClick={onOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpen()}
      className={`group relative ${aspectClass} w-full rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.03] bg-slate-100 border border-slate-200/60`}
      title={`${story.personName} - Watch Story`}
    >
      {/* Photo */}
      <img
        src={imageSrc}
        alt={story.personName}
        onError={() => setImgError(true)}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />

      {/* Hover Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Centered Play Button Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center transform scale-75 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 border border-white/40">
          <Play className="w-5 h-5 fill-rose-600 text-rose-600 ml-0.5" />
        </div>
      </div>

      {/* Leader Name Badge (on hover) */}
      <div className="absolute bottom-2.5 left-2.5 right-2.5 transform translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
        <p className="text-xs font-bold text-white line-clamp-1 drop-shadow-md">
          {story.personName}
        </p>
        {story.company && (
          <p className="text-[10px] text-slate-300 line-clamp-1 drop-shadow-sm font-medium">
            {story.company}
          </p>
        )}
      </div>

      {/* Corner Play Indicator for subtle affordance */}
      <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/80 group-hover:hidden transition">
        <Play className="w-3 h-3 fill-white text-white ml-0.5 opacity-90" />
      </div>
    </div>
  )
}
