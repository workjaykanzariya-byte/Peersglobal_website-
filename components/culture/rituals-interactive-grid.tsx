'use client'

import React, { useState, useRef } from 'react'
import {
  MessageSquare,
  Coffee,
  UserPlus,
  Trophy,
  CheckCheck,
  Volume2,
  VolumeX,
  Play,
  LucideIcon,
} from 'lucide-react'

interface RitualItem {
  num: string
  name: string
  headline: string
  desc: string
  video: string
  poster: string
  icon: LucideIcon
}

const RITUALS_DATA: RitualItem[] = [
  {
    num: '01',
    name: 'GIVE AND ASK',
    headline: 'Begin with contribution. Then ask for what you need.',
    desc: 'The Give and Ask ritual creates space for both sides of entrepreneurial relationships. Give — What can I contribute to someone here? Ask — What help, experience, connection or perspective do I need? A healthy community makes room for both generosity and vulnerability.',
    video: '/videos/ritual-01-give-and-ask.mp4',
    poster: '/images/give-first-card.jpg',
    icon: MessageSquare,
  },
  {
    num: '02',
    name: 'PEER-TO-PEER',
    headline: 'One relationship at a time.',
    desc: 'A Circle can introduce many people, but meaningful relationships are built one conversation at a time. Peer-to-Peer creates space for entrepreneurs to move beyond introductions to understand the business, the journey, the challenge, the ambition, and the person behind the business.',
    video: '/videos/ritual-02-peer-to-peer.mp4',
    poster: '/images/who-we-are-friends.jpg',
    icon: Coffee,
  },
  {
    num: '03',
    name: 'WELCOME',
    headline: 'Every new person deserves to feel that they belong.',
    desc: 'The first experience of a community matters. A new Peer should not have to fight their way into the room. Someone should introduce them, make space for them, help them understand how things work, and make the first interaction feel human: "We are glad you are here."',
    video: '/videos/ritual-03-welcome.mp4',
    poster: '/images/hero_global_conclave.jpg',
    icon: UserPlus,
  },
  {
    num: '04',
    name: 'RECOGNITION',
    headline: 'Notice the contribution.',
    desc: 'People do not contribute only for recognition, but recognition tells people that their contribution was seen. A thoughtful introduction, a meaningful collaboration, a helpful conversation, or a difficult problem solved. Notice and appreciate what was given.',
    video: '/videos/ritual-04-recognition.mp4',
    poster: '/images/who-we-are-boardroom.jpg',
    icon: Trophy,
  },
  {
    num: '05',
    name: 'CLOSING',
    headline: 'Leave the room with gratitude and possibility.',
    desc: 'Every gathering eventually ends, but the relationship continues. The Closing ritual reflects: What did I learn? Who did I meet? Who helped me? Whom can I help next? What should I carry forward? Leave knowing what you will do differently.',
    video: '/videos/ritual-05-closing.mp4',
    poster: '/images/outcomes-peers-group.png',
    icon: CheckCheck,
  },
]

function RitualCard({
  ritual,
  isAudible,
  onToggleAudio,
}: {
  ritual: RitualItem
  isAudible: boolean
  onToggleAudio: () => void
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const RitualIcon = ritual.icon

  const handleTogglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play()
        setIsPlaying(true)
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-cool-grey-250 shadow-xs hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col group">
      {/* Video Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-950">
        <video
          ref={videoRef}
          src={ritual.video}
          poster={ritual.poster}
          autoPlay
          loop
          muted={!isAudible}
          playsInline
          preload="metadata"
          className="size-full object-cover object-center filter brightness-[0.94] contrast-[1.05] group-hover:scale-105 transition-transform duration-500 cursor-pointer"
          onClick={handleTogglePlay}
        />

        {/* Subtle Vignette Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30 pointer-events-none" />

        {/* Top-Left Ritual Number Badge */}
        <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 shadow-sm">
          <span className="size-1.5 rounded-full bg-gradient-to-r from-blue-400 to-rose-400 animate-pulse" />
          <span className="text-[11px] font-bold font-mono tracking-wider brand-gradient-text uppercase">
            RITUAL {ritual.num}
          </span>
        </div>

        {/* Top-Right Audio Mute/Unmute Toggle */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onToggleAudio()
          }}
          className="absolute top-3.5 right-3.5 z-20 size-8 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/20 flex items-center justify-center hover:bg-black/85 hover:scale-105 transition-all cursor-pointer shadow-md"
          aria-label={isAudible ? 'Mute sound' : 'Unmute sound'}
          title={isAudible ? 'Mute sound' : 'Unmute sound'}
        >
          {isAudible ? (
            <Volume2 className="size-3.5 text-rose-300" />
          ) : (
            <VolumeX className="size-3.5 text-slate-300" />
          )}
        </button>

        {/* Pause Overlay Indicator */}
        {!isPlaying && (
          <div
            onClick={handleTogglePlay}
            className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 backdrop-blur-2xs cursor-pointer transition-opacity"
          >
            <div className="size-12 rounded-full bg-white/95 text-[#040F24] flex items-center justify-center shadow-xl hover:scale-110 transition-transform pl-0.5">
              <Play className="size-5 fill-current" />
            </div>
          </div>
        )}

        {/* Bottom-Right Ritual Icon */}
        <div className="absolute bottom-3.5 right-3.5 size-10 rounded-xl bg-white/95 backdrop-blur-sm border border-white/60 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform z-10 pointer-events-none">
          <RitualIcon className="size-5 stroke-[url(#cultureCardGrad)]" />
        </div>
      </div>

      {/* Content Details */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-[#0f131a] leading-snug">
            {ritual.name}
          </h3>
          <p className="text-xs font-bold uppercase tracking-wider brand-gradient-text">
            {ritual.headline}
          </p>
          <p className="text-xs sm:text-sm text-cool-grey-600 font-normal leading-relaxed pt-1">
            {ritual.desc}
          </p>
        </div>
      </div>
    </div>
  )
}

export function RitualsInteractiveGrid() {
  const [activeAudioIndex, setActiveAudioIndex] = useState<number | null>(null)

  const handleToggleAudio = (index: number) => {
    setActiveAudioIndex((prev) => (prev === index ? null : index))
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {RITUALS_DATA.map((ritual, idx) => (
        <RitualCard
          key={ritual.num}
          ritual={ritual}
          isAudible={activeAudioIndex === idx}
          onToggleAudio={() => handleToggleAudio(idx)}
        />
      ))}
    </div>
  )
}
