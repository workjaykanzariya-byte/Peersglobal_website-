'use client'

import React from 'react'
import Link from 'next/link'

import { GalaxyButton } from '@/components/ui/galaxy-button'

const ROW_1_IMAGES = [
  { src: '/images/community-photos/482246083_946533084348493_5844435869118561170_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/482246111_946531391015329_2690440088090712281_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/482246905_946529991015469_2267656097195740385_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/484641390_946524197682715_832803514511033748_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/484792632_946526447682490_7163267046336246211_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/484797037_946525474349254_1118109512507801686_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/484805749_946532771015191_5283089485645972386_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/484808186_946526427682492_284229498758524502_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/484838252_946530361015432_45354535807844174_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/484841718_946533184348483_5094806848348098371_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/484845426_946531054348696_3994146422047216207_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/484847121_946529997682135_6197572839027412484_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/484973431_946530444348757_7311024280508694754_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/484989192_946532964348505_2316053033645724384_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/487479848_958449359823532_4667520611152931536_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/487480707_958441536490981_6455034829200596447_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/487492658_958450003156801_1430598349796329023_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/487508824_958438093157992_5549921363803141716_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/487799297_958442013157600_8401411830639657604_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/487854913_958451273156674_8246249448530006939_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/487858651_958444206490714_8896324776136098469_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/488251942_958443909824077_95392815136740590_n.jpg', alt: 'Peers Global Community' },
]

const ROW_2_IMAGES = [
  { src: '/images/community-photos/527982359_1051867693815031_5888010159494356896_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/528657827_17976531020906134_3166340335029720089_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/542294898_1074536308214836_2074636593885157546_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/584554470_1137173378617795_8586516540531144560_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/585109504_1137171938617939_234264130472445062_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/585143756_1137173088617824_22851807520069926_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/585172314_1137174685284331_8459137204672640215_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/585328687_1137175951950871_2056751489480985741_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/643353359_1215461027455696_3985490485793828181_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/648813198_1223924559942676_6900853329131405715_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/649821523_1223916443276821_8051871709603529169_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/649905732_1223915203276945_4971184262322461453_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/656727194_1236784205323378_245838233516439276_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/657250618_1236790118656120_6898799562915837704_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/657391093_1236779491990516_4359640937223971271_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/658108455_1236780288657103_936169591323871490_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/658185866_1236789815322817_1841912587957917034_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/658787463_1236779488657183_346062008561364793_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/658858691_1236788471989618_7168049815195264013_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/658930485_1236789255322873_6512154340956832719_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/666301172_1246860504315748_4150483950195770000_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/739187728_1320608963607568_6467807191985511179_n.jpg', alt: 'Peers Global Community' },
]

const ROW_3_IMAGES = [
  { src: '/images/community-photos/739312489_1320610746940723_5810054040868469915_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/739547867_1320610273607437_3676260158836727538_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/740153479_1320608676940930_3376520058425118425_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/740769965_1320611980273933_3488198070806128505_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/741556468_1320612166940581_5898813537017111321_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/741918453_1320609576940840_2256711642714096269_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/778124092_1359324819735982_1498766550236110109_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/778565363_1359364089732055_747541804994686936_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/778625128_1359338993067898_6481877602583492992_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/778625129_1359334949734969_4046893844981344982_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/778958062_1359326713069126_5189462967373223219_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/778972218_1359332809735183_7012204278636022025_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/778972330_1359328136402317_9115517873714009359_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/780486757_1359361563065641_1423517818254640590_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/783686254_1359366576398473_925054187188550486_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/784310042_1359337739734690_8134705123811363339_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/800842038_1388435773491553_4223885938468565897_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/820017320_1388430506825413_6137215758749678240_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/822639776_1388431050158692_3533989331688621529_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/822919860_1388428870158910_1343413403262896179_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/823091677_1388428830158914_1750165240580668128_n.jpg', alt: 'Peers Global Community' },
  { src: '/images/community-photos/823222066_1388428860158911_8148856490147399883_n.jpg', alt: 'Peers Global Community' },
]

export function MeditationsSection() {
  return (
    <section className="fd-med-menu !py-20 md:!py-28" id="fd-med-menu" aria-label="The 1 Million Mission">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center gap-6 mb-14">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#E11D48] animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#E11D48]">
            THE 1 MILLION MISSION
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0F131A] leading-[1.18] max-w-3xl">
          One entrepreneur can change more than a business.
        </h2>

        {/* Core Subtitle / Philosophy */}
        <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed font-normal">
          An entrepreneur creates employment, solves problems, supports families, and inspires the next generation to begin.
        </p>

        {/* 3 Structured Benefit / Impact Cards with Signature Animated Gradient Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full text-left mt-4">
          {/* Card 1: Multiplier Effect */}
          <div className="animated-glow-card group" tabIndex={0} role="article">
            <svg className="animated-border-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="medCardGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1D4ED8" />
                  <stop offset="50%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#E11D48" />
                </linearGradient>
              </defs>
              <path
                className="animated-border-path"
                d="M 0.8 6 Q 0.8 0.8 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 Z"
              />
            </svg>
            <div className="p-6 sm:p-7 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="mb-1">
                  <span className="text-xl font-black tracking-widest bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-200 inline-block">
                    01
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200">
                  Multiplier Effect
                </h3>
                <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                  When one person’s growth creates the possibility for another person’s growth, impact compounds across industries and cities.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: 1M Entrepreneurs */}
          <div className="animated-glow-card group" tabIndex={0} role="article">
            <svg className="animated-border-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="medCardGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1D4ED8" />
                  <stop offset="50%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#E11D48" />
                </linearGradient>
              </defs>
              <path
                className="animated-border-path animated-border-path-2"
                d="M 0.8 6 Q 0.8 0.8 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 Z"
              />
            </svg>
            <div className="p-6 sm:p-7 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="mb-1">
                  <span className="text-xl font-black tracking-widest bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-200 inline-block">
                    02
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200">
                  1M Entrepreneurs
                </h3>
                <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                  PEERS GLOBAL’s stated mission is to impact 1 million entrepreneurs by 2030 through governed Circles and real collaboration.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3: 1 Action = 1 Life */}
          <div className="animated-glow-card group" tabIndex={0} role="article">
            <svg className="animated-border-svg" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <defs>
                <linearGradient id="medCardGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#1D4ED8" />
                  <stop offset="50%" stopColor="#6366F1" />
                  <stop offset="100%" stopColor="#E11D48" />
                </linearGradient>
              </defs>
              <path
                className="animated-border-path animated-border-path-3"
                d="M 0.8 6 Q 0.8 0.8 6 0.8 L 94 0.8 Q 99.2 0.8 99.2 6 L 99.2 94 Q 99.2 99.2 94 99.2 L 6 99.2 Q 0.8 99.2 0.8 94 Z"
              />
            </svg>
            <div className="p-6 sm:p-7 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="mb-1">
                  <span className="text-xl font-black tracking-widest bg-gradient-to-r from-[#1D4ED8] via-[#6366F1] to-[#E11D48] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-200 inline-block">
                    03
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:bg-gradient-to-r group-hover:from-[#1D4ED8] group-hover:to-[#E11D48] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-200">
                  1 Action = 1 Life
                </h3>
                <p className="text-xs sm:text-sm text-cool-grey-600 leading-relaxed font-normal">
                  Every introduction made, every perspective shared, and every seat taken at a Circle changes a founder’s journey.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <GalaxyButton
            href="/leadership"
            size="lg"
            aria-label="Explore Leadership"
          >
            Explore Leadership
          </GalaxyButton>

          <GalaxyButton
            href="/start-a-circle"
            variant="transparent-light"
            size="lg"
            aria-label="Start a Circle"
          >
            Start a Circle
          </GalaxyButton>
        </div>
      </div>

      <div className="fd-med-menu__rows">
        {/* Row 1 */}
        <div className="fd-med-menu__row">
          {[0, 1, 2, 3].map((copyIndex) => (
            <div
              key={`r1-strip-${copyIndex}`}
              className="fd-med-menu__strip"
              aria-hidden={copyIndex > 0 ? 'true' : undefined}
            >
              {ROW_1_IMAGES.map((img, i) => (
                <img
                  key={`r1-${copyIndex}-${i}`}
                  src={img.src}
                  alt={copyIndex === 0 ? img.alt : ''}
                  width="126"
                  height="126"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          ))}
        </div>

        {/* Row 2 (reverse) */}
        <div className="fd-med-menu__row fd-med-menu__row--rev">
          {[0, 1, 2, 3].map((copyIndex) => (
            <div
              key={`r2-strip-${copyIndex}`}
              className="fd-med-menu__strip"
              aria-hidden={copyIndex > 0 ? 'true' : undefined}
            >
              {ROW_2_IMAGES.map((img, i) => (
                <img
                  key={`r2-${copyIndex}-${i}`}
                  src={img.src}
                  alt={copyIndex === 0 ? img.alt : ''}
                  width="126"
                  height="126"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          ))}
        </div>

        {/* Row 3 (alternate speed) */}
        <div className="fd-med-menu__row fd-med-menu__row--alt">
          {[0, 1, 2, 3].map((copyIndex) => (
            <div
              key={`r3-strip-${copyIndex}`}
              className="fd-med-menu__strip"
              aria-hidden={copyIndex > 0 ? 'true' : undefined}
            >
              {ROW_3_IMAGES.map((img, i) => (
                <img
                  key={`r3-${copyIndex}-${i}`}
                  src={img.src}
                  alt={copyIndex === 0 ? img.alt : ''}
                  width="126"
                  height="126"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
