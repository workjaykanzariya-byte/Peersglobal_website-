'use client'

import React from 'react'

interface CaseStudyAvatar {
  id: string
  img: string
  className: string
  animClass: string
  rounded: string
  size: string
}

const AVATARS: CaseStudyAvatar[] = [
  // --- LEFT SIDE (Matching exact positions & scale) ---
  // Top left trophy portrait
  {
    id: 'l1',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    className: 'top-[3%] left-[7%] sm:left-[8%]',
    animClass: 'fd-float-1',
    rounded: 'rounded-[28px]',
    size: 'w-28 h-36 sm:w-32 sm:h-40 lg:w-[155px] lg:h-[190px]',
  },
  // Upper mid left man in suit
  {
    id: 'l2',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    className: 'top-[26%] left-[17%] sm:left-[19%]',
    animClass: 'fd-float-2',
    rounded: 'rounded-[28px]',
    size: 'w-28 h-36 sm:w-32 sm:h-40 lg:w-[150px] lg:h-[185px]',
  },
  // Mid left woman with earrings
  {
    id: 'l3',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    className: 'top-[38%] left-[4%] sm:left-[5%]',
    animClass: 'fd-float-3',
    rounded: 'rounded-[28px]',
    size: 'w-28 h-36 sm:w-32 sm:h-40 lg:w-[150px] lg:h-[185px]',
  },
  // Lower mid left smiling woman
  {
    id: 'l4',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    className: 'top-[54%] left-[16%] sm:left-[18%]',
    animClass: 'fd-float-4',
    rounded: 'rounded-[28px]',
    size: 'w-28 h-36 sm:w-32 sm:h-40 lg:w-[155px] lg:h-[190px]',
  },
  // Bottom left young smiling man
  {
    id: 'l5',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    className: 'bottom-[4%] left-[7%] sm:left-[8%]',
    animClass: 'fd-float-5',
    rounded: 'rounded-[28px]',
    size: 'w-28 h-36 sm:w-32 sm:h-40 lg:w-[150px] lg:h-[185px]',
  },
  // Bottom left woman in purple
  {
    id: 'l6',
    img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    className: 'bottom-[2%] left-[18%] sm:left-[20%]',
    animClass: 'fd-float-6',
    rounded: 'rounded-[28px]',
    size: 'w-28 h-36 sm:w-32 sm:h-40 lg:w-[150px] lg:h-[185px]',
  },

  // --- RIGHT SIDE (Matching exact positions & scale) ---
  // Top right man with mic
  {
    id: 'r1',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    className: 'top-[3%] right-[7%] sm:right-[8%]',
    animClass: 'fd-float-3',
    rounded: 'rounded-[28px]',
    size: 'w-28 h-36 sm:w-32 sm:h-40 lg:w-[150px] lg:h-[185px]',
  },
  // Upper right woman with red hat
  {
    id: 'r2',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80&fit=facearea&facepad=2',
    className: 'top-[15%] right-[18%] sm:right-[20%]',
    animClass: 'fd-float-1',
    rounded: 'rounded-[28px]',
    size: 'w-28 h-36 sm:w-32 sm:h-40 lg:w-[150px] lg:h-[185px]',
  },
  // Mid right woman on boat with sunglasses
  {
    id: 'r3',
    img: 'https://images.unsplash.com/photo-1548142813-c348350df52b?auto=format&fit=crop&w=400&q=80',
    className: 'top-[29%] right-[9%] sm:right-[10%]',
    animClass: 'fd-float-5',
    rounded: 'rounded-[28px]',
    size: 'w-28 h-36 sm:w-32 sm:h-40 lg:w-[150px] lg:h-[185px]',
  },
  // Mid right man in navy blazer with chin on hand
  {
    id: 'r4',
    img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
    className: 'top-[42%] right-[18%] sm:right-[20%]',
    animClass: 'fd-float-2',
    rounded: 'rounded-[28px]',
    size: 'w-28 h-36 sm:w-32 sm:h-40 lg:w-[150px] lg:h-[185px]',
  },
  // Lower right young man in black tee
  {
    id: 'r5',
    img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
    className: 'bottom-[18%] right-[8%] sm:right-[9%]',
    animClass: 'fd-float-6',
    rounded: 'rounded-[28px]',
    size: 'w-28 h-36 sm:w-32 sm:h-40 lg:w-[150px] lg:h-[185px]',
  },
  // Lower right black & white portrait
  {
    id: 'r6',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=400&q=80',
    className: 'bottom-[3%] right-[17%] sm:right-[19%]',
    animClass: 'fd-float-4',
    rounded: 'rounded-[28px]',
    size: 'w-28 h-36 sm:w-32 sm:h-40 lg:w-[150px] lg:h-[185px]',
  },
  // Bottom right woman with scarf
  {
    id: 'r7',
    img: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80',
    className: 'bottom-[0%] right-[7%] sm:right-[8%]',
    animClass: 'fd-float-1',
    rounded: 'rounded-[28px]',
    size: 'w-28 h-36 sm:w-32 sm:h-40 lg:w-[145px] lg:h-[180px]',
  },
]

export function CaseStudiesSection() {
  return (
    <section className="fd-case-studies relative">
      <div className="fd-case-studies__band !h-[760px] md:!h-[820px] lg:!h-[860px] overflow-hidden">
        
        {/* Individual Floating Portrait Cards */}
        <div className="hidden md:block absolute inset-0 max-w-[1560px] mx-auto pointer-events-none select-none">
          {AVATARS.map((item) => (
            <div
              key={item.id}
              className={`absolute ${item.className} ${item.animClass} z-10`}
            >
              <div
                className={`relative ${item.size} ${item.rounded} overflow-hidden bg-slate-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.22)] border border-white/80 transition-transform duration-500 hover:scale-105 pointer-events-auto`}
              >
                <img
                  src={item.img}
                  alt="Mindvalley Success Story"
                  className="w-full h-full object-cover select-none pointer-events-none"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Center Content Wrapper (Identical to original) */}
        <div className="fd-case-studies__wrapper relative z-20">
          <div className="fd-case-studies__title" data-fd-rise="0">
            <p className="fd-case-studies__stat">25,959</p>
            <p className="fd-case-studies__subtitle">Case Studies of Success</p>
          </div>
          <p className="fd-case-studies__body" data-fd-rise="80">
            Mindvalley has some of the highest success rates in the world at transforming our learners.
            Browse case studies and stories of success on{' '}
            <a className="fd-case-studies__link" href="https://stories.mindvalley.com/">
              stories.mindvalley.com
            </a>
            .
          </p>
          <div className="fd-case-studies__cta" data-fd-rise="160">
            <a
              className="fd-case-studies__btn fd-case-studies__btn--neutral"
              href="https://stories.mindvalley.com/"
            >
              Read Our Stories
            </a>
          </div>
        </div>
      </div>

      <style jsx global>{`
        /* Staggered Floating Keyframes - Float One by One */
        .fd-float-1 {
          animation: floatStagger1 5.2s ease-in-out infinite alternate;
          will-change: transform;
        }
        .fd-float-2 {
          animation: floatStagger2 6.1s ease-in-out infinite alternate;
          animation-delay: 0.7s;
          will-change: transform;
        }
        .fd-float-3 {
          animation: floatStagger3 5.8s ease-in-out infinite alternate;
          animation-delay: 1.4s;
          will-change: transform;
        }
        .fd-float-4 {
          animation: floatStagger4 6.5s ease-in-out infinite alternate;
          animation-delay: 2.1s;
          will-change: transform;
        }
        .fd-float-5 {
          animation: floatStagger5 5.5s ease-in-out infinite alternate;
          animation-delay: 2.8s;
          will-change: transform;
        }
        .fd-float-6 {
          animation: floatStagger6 6.3s ease-in-out infinite alternate;
          animation-delay: 3.5s;
          will-change: transform;
        }

        @keyframes floatStagger1 {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
          100% { transform: translateY(4px); }
        }
        @keyframes floatStagger2 {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(5px); }
        }
        @keyframes floatStagger3 {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(6px); }
        }
        @keyframes floatStagger4 {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-14px); }
          100% { transform: translateY(3px); }
        }
        @keyframes floatStagger5 {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-11px); }
          100% { transform: translateY(7px); }
        }
        @keyframes floatStagger6 {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-13px); }
          100% { transform: translateY(4px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .fd-float-1, .fd-float-2, .fd-float-3, .fd-float-4, .fd-float-5, .fd-float-6 {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}


