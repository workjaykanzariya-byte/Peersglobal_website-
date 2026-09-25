'use client'

import React, { useRef, useEffect } from 'react'

export function PathwayCardsSection() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) return

    const pathwayCards = Array.from(document.querySelectorAll<HTMLElement>('.fd-pathway-cards__block'))
    if (!pathwayCards.length) return

    let rafId: number | null = null

    const updateCardScrollAnimation = () => {
      const windowHeight = window.innerHeight
      const stickyTop = 96

      pathwayCards.forEach((card, index) => {
        const rect = card.getBoundingClientRect()
        const nextCard = pathwayCards[index + 1]

        // 1. Outgoing stacked card transition as next card overlaps it
        if (nextCard) {
          const nextRect = nextCard.getBoundingClientRect()

          if (nextRect.top < windowHeight && nextRect.top > stickyTop) {
            const overlapProgress = Math.max(0, Math.min(1, (windowHeight - nextRect.top) / (windowHeight - stickyTop)))
            const scale = 1.0 - (0.05 * overlapProgress)
            const opacity = 1.0 - (0.25 * overlapProgress)

            card.style.transform = `translate3d(0, 0, 0) scale(${scale.toFixed(4)})`
            card.style.opacity = `${opacity.toFixed(3)}`
            return
          } else if (nextRect.top <= stickyTop) {
            card.style.transform = `translate3d(0, 0, 0) scale(0.95)`
            card.style.opacity = `0.75`
            return
          }
        }

        // 2. Incoming card transition as it rises from screen bottom
        if (rect.top > stickyTop) {
          const totalDistance = windowHeight - stickyTop
          const currentDistance = rect.top - stickyTop
          const progress = Math.max(0, Math.min(1, 1 - currentDistance / totalDistance))

          const scale = 0.96 + (0.04 * progress)
          const opacity = 0.85 + (0.15 * progress)
          const translateY = (1 - progress) * 24

          card.style.transform = `translate3d(0, ${translateY.toFixed(1)}px, 0) scale(${scale.toFixed(4)})`
          card.style.opacity = `${opacity.toFixed(3)}`
        } else {
          // 3. Active card pinned at sticky top
          card.style.transform = `translate3d(0, 0, 0) scale(1)`
          card.style.opacity = `1`
        }
      })
    }

    let isScrolling = false
    let timeoutId: NodeJS.Timeout | null = null

    const onScroll = () => {
      updateCardScrollAnimation()
      isScrolling = true
      if (!rafId) {
        rafId = requestAnimationFrame(function loop() {
          updateCardScrollAnimation()
          if (isScrolling) {
            rafId = requestAnimationFrame(loop)
          }
        })
      }
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        isScrolling = false
        if (rafId) {
          cancelAnimationFrame(rafId)
          rafId = null
        }
      }, 150)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    updateCardScrollAnimation()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (timeoutId) clearTimeout(timeoutId)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [])

  const scrollTrack = (id: string, dir: number) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollBy({ left: dir * el.clientWidth, behavior: 'smooth' })
    }
  }

  return (
    <section className="fd-pathway-cards">
<div className="fd-pathway-cards__tint" aria-hidden="true"><div className="fd-pathway-cards__wash fd-pathway-cards__wash--1"></div><div className="fd-pathway-cards__wash fd-pathway-cards__wash--2"></div><div className="fd-pathway-cards__wash fd-pathway-cards__wash--3"></div><div className="fd-pathway-cards__wash fd-pathway-cards__wash--4"></div><div className="fd-pathway-cards__wash fd-pathway-cards__wash--5"></div><div className="fd-pathway-cards__wash fd-pathway-cards__wash--6"></div><div className="fd-pathway-cards__wash fd-pathway-cards__wash--out"></div></div>
  <svg className="fd-pathway-cards__defs" aria-hidden="true" focusable="false" width="0" height="0"><defs>
    <linearGradient id="fdPwChkMind" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1D4ED8"></stop><stop offset="1" stop-color="#E11D48"></stop></linearGradient>
    <linearGradient id="fdPwChkEnt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1D4ED8"></stop><stop offset="1" stop-color="#E11D48"></stop></linearGradient>
    <linearGradient id="fdPwChkAuth" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1D4ED8"></stop><stop offset="1" stop-color="#E11D48"></stop></linearGradient>
    <linearGradient id="fdPwChkConn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1D4ED8"></stop><stop offset="1" stop-color="#E11D48"></stop></linearGradient>
    <linearGradient id="fdPwChkBody" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1D4ED8"></stop><stop offset="1" stop-color="#E11D48"></stop></linearGradient>
    <linearGradient id="fdPwChkMystic" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#1D4ED8"></stop><stop offset="1" stop-color="#E11D48"></stop></linearGradient>
  </defs></svg>
  <div className="fd-pathway-cards__inner">

    
    <article className="fd-pathway-cards__block fd-pathway-cards__block--mind" id="our-philosophy">
      <div className="fd-pathway-cards__left">
        <img className="fd-pathway-cards__hero" src="/images/who-we-are-friends.jpg" alt="Peers are Partners in Business and Friends in Life" width="461" height="259" loading="lazy" decoding="async" />
        <div className="fd-pathway-cards__body">
          <div className="fd-pathway-cards__text">
          <div className="fd-pathway-cards__head">
            <p className="fd-pathway-cards__eyebrow !text-[#F43F5E]">— OUR PHILOSOPHY</p>
            <h2 className="fd-pathway-cards__title">Peers are Partners in Business and Friends in Life.</h2>
          </div>
          <p className="fd-pathway-cards__desc fd-pathway-cards__desc--lead">This is the sentence the whole community runs on.</p>
          <p className="fd-pathway-cards__desc fd-pathway-cards__desc--sub">A Peer gives an introduction without keeping score. Shares a hard-won lesson without charging for it. Celebrates another Peer&apos;s win as if it were their own. Over time, business partners become friends, and friends become the reason the business grows.</p>
          
          <div className="flex flex-col gap-2 mt-1">
            <p className="fd-pathway-cards__subhead">How growth works here:</p>
            <ul className="fd-pathway-cards__list">
              <li className="fd-pathway-cards__item"><svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkMind)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg><span>Business grows through relationships.</span></li>
              <li className="fd-pathway-cards__item"><svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkMind)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg><span>Relationships grow through trust.</span></li>
              <li className="fd-pathway-cards__item"><svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkMind)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg><span>Trust grows through contribution.</span></li>
              <li className="fd-pathway-cards__item"><svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkMind)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg><span>And contribution creates impact.</span></li>
            </ul>
            <p className="fd-pathway-cards__quote pt-1">&ldquo;Give first. Everything else follows.&rdquo;</p>
          </div>
          </div>
          <div className="pt-2">
            <a className="fd-pathway-cards__btn" href="/apply" aria-label="Become a Peer">Become a Peer</a>
          </div>
        </div>
      </div>
      <div className="fd-pathway-cards__right">
        <div className="fd-pathway-cards__carousel">
          <div className="fd-pathway-cards__track" id="track-philosophy" tabIndex={0} role="group" aria-label="Peers Global Philosophy Pillars">
            <div className="fd-pathway-cards__page">
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/give-first-card.jpg" alt="Give First" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/amit-desai.jpg" alt="Amit Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Give First</p>
                <p className="fd-pathway-cards__auth">Without Keeping Score</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/who-we-are-friends.jpg" alt="Friends in Life" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/neha-kothari.jpg" alt="Neha Kothari" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Friends in Life</p>
                <p className="fd-pathway-cards__auth">Lifelong Bonds & Families</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/who-we-are-inner-board.jpg" alt="Partners in Business" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/rajesh-shah.jpg" alt="Rajesh Shah" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Partners in Business</p>
                <p className="fd-pathway-cards__auth">Mutual Scale & Capex</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/who-we-are-impact.jpg" alt="Contribution & Trust" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/priya-desai.jpg" alt="Priya Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Contribution & Trust</p>
                <p className="fd-pathway-cards__auth">1 Action = 1 Life Impacted</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/conclave.png" alt="The Conclave" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/vikram-patel.jpg" alt="Vikram Patel" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The Conclave</p>
                <p className="fd-pathway-cards__auth">Confidential Forum</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/circle-meeting.png" alt="Category Exclusivity" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/anand-sharma.jpg" alt="Anand Sharma" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Category Exclusivity</p>
                <p className="fd-pathway-cards__auth">Zero Room Competition</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/industry-cross-city-handshake.jpg" alt="Cross-City Access" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/fatima-khan.jpg" alt="Fatima Khan" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Cross-City Access</p>
                <p className="fd-pathway-cards__auth">Local-to-Global Reach</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/origin-story-office-bg.jpg" alt="Build Together" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/pradeep-joshi.jpg" alt="Pradeep Joshi" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Build Together</p>
                <p className="fd-pathway-cards__auth">Never Build Alone</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/lsr-city-sunrise.jpg" alt="LSR Growth Model" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/amit-desai.jpg" alt="Amit Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">LSR Growth Model</p>
                <p className="fd-pathway-cards__auth">Learn, Sales, Resources</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/outcomes-peers-group.png" alt="Shared Wins" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/neha-kothari.jpg" alt="Neha Kothari" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Shared Wins</p>
                <p className="fd-pathway-cards__auth">Celebrate as Your Own</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/circle-roundtable-topdown.jpg" alt="Trusted Circles" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/rajesh-shah.jpg" alt="Rajesh Shah" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Trusted Circles</p>
                <p className="fd-pathway-cards__auth">Curated Inner Board</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/philosophy-conference-event.jpg" alt="Measure Impact" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/vikram-patel.jpg" alt="Vikram Patel" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Measure Impact</p>
                <p className="fd-pathway-cards__auth">Lives Transformed</p>
              </div>
            </div>
            <div className="fd-pathway-cards__page">
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/industry-cross-city-handshake.jpg" alt="Cross-City Access" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/fatima-khan.jpg" alt="Fatima Khan" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Cross-City Access</p>
                <p className="fd-pathway-cards__auth">Local-to-Global Reach</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/origin-story-office-bg.jpg" alt="Build Together" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/pradeep-joshi.jpg" alt="Pradeep Joshi" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Build Together</p>
                <p className="fd-pathway-cards__auth">Never Build Alone</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/lsr-city-sunrise.jpg" alt="LSR Growth Model" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/amit-desai.jpg" alt="Amit Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">LSR Growth Model</p>
                <p className="fd-pathway-cards__auth">Learn, Sales, Resources</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/outcomes-peers-group.png" alt="Shared Wins" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/neha-kothari.jpg" alt="Neha Kothari" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Shared Wins</p>
                <p className="fd-pathway-cards__auth">Celebrate as Your Own</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/circle-roundtable-topdown.jpg" alt="Trusted Circles" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/rajesh-shah.jpg" alt="Rajesh Shah" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Trusted Circles</p>
                <p className="fd-pathway-cards__auth">Curated Inner Board</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/philosophy-conference-event.jpg" alt="Measure Impact" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/vikram-patel.jpg" alt="Vikram Patel" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Measure Impact</p>
                <p className="fd-pathway-cards__auth">Lives Transformed</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/story-amit-sandeep.jpg" alt="Amit & Sandeep" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/amit-desai.jpg" alt="Amit Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Joint Capex</p>
                <p className="fd-pathway-cards__auth">Amit & Sandeep</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/story-jignesh-rohit.jpg" alt="Jignesh & Rohit" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/rajesh-shah.jpg" alt="Rajesh Shah" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Cross-Industry Ties</p>
                <p className="fd-pathway-cards__auth">Jignesh & Rohit</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/story-neha-simran.jpg" alt="Neha & Simran" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/neha-kothari.jpg" alt="Neha Kothari" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Shared Logistics</p>
                <p className="fd-pathway-cards__auth">Neha & Simran</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/story-priya-karan.jpg" alt="Priya & Karan" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/priya-desai.jpg" alt="Priya Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Global Exports</p>
                <p className="fd-pathway-cards__auth">Priya & Karan</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/unity-hero-phones.jpg" alt="Unity App" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/anand-sharma.jpg" alt="Anand Sharma" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Everyday Unity</p>
                <p className="fd-pathway-cards__auth">Connect Anytime</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/who-we-are-friends.jpg" alt="Family Meetups" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/fatima-khan.jpg" alt="Fatima Khan" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Family Meetups</p>
                <p className="fd-pathway-cards__auth">Friends in Life</p>
              </div>
            </div>
          </div>
          <div className="fd-pathway-cards__nav">
            <button className="fd-pathway-cards__navbtn" type="button" onClick={() => scrollTrack('track-philosophy', -1)} aria-label="Previous Philosophy Pillars"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M15.884 5.116a1.25 1.25 0 0 0-1.768 0l-6 6a1.25 1.25 0 0 0 0 1.768l6 6a1.25 1.25 0 0 0 1.768-1.768L10.768 12l5.116-5.116a1.25 1.25 0 0 0 0-1.768"></path></svg></button>
            <button className="fd-pathway-cards__navbtn" type="button" onClick={() => scrollTrack('track-philosophy', 1)} aria-label="More Philosophy Pillars"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M9.884 5.116a1.25 1.25 0 1 0-1.768 1.768L13.232 12l-5.116 5.116a1.25 1.25 0 0 0 1.768 1.768l6-6a1.25 1.25 0 0 0 0-1.768z"></path></svg></button>
          </div>
        </div>
      </div>
    </article>

    
    <article className="fd-pathway-cards__block fd-pathway-cards__block--entrepreneur" id="trusted-circles">
      <div className="fd-pathway-cards__left">
        <img className="fd-pathway-cards__hero" src="/images/circle-meeting.png" alt="Every Peer belongs to a Circle" width="461" height="259" loading="lazy" decoding="async" />
        <div className="fd-pathway-cards__body">
          <div className="fd-pathway-cards__text">
          <div className="fd-pathway-cards__head">
            <p className="fd-pathway-cards__eyebrow !text-[#38BDF8]">— TRUSTED CIRCLES</p>
            <h2 className="fd-pathway-cards__title">Every Peer belongs to a Circle.</h2>
          </div>
          <p className="fd-pathway-cards__desc fd-pathway-cards__desc--lead">A Circle brings together the right entrepreneurs around a common industry, interest, location or business opportunity. It is the heart of the community and the place where relationships are actually built.</p>
          
          <div className="flex flex-col gap-2 mt-1">
            <p className="fd-pathway-cards__subhead">How a Circle works:</p>
            <ul className="fd-pathway-cards__list">
              <li className="fd-pathway-cards__item"><svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkEnt)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg><span><strong className="text-white font-semibold">The right people.</strong> Each Circle is composed of entrepreneurs from complementary businesses, chosen for fit and relevance.</span></li>
              <li className="fd-pathway-cards__item"><svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkEnt)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg><span><strong className="text-white font-semibold">A fixed rhythm.</strong> The same Peers meet on a regular schedule, so trust has time to build.</span></li>
              <li className="fd-pathway-cards__item"><svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkEnt)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg><span><strong className="text-white font-semibold">A structure for giving.</strong> Every meeting has a defined space for Peers to share what they can offer and what they need.</span></li>
              <li className="fd-pathway-cards__item"><svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkEnt)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg><span><strong className="text-white font-semibold">Continuity.</strong> The Circle carries on inside the Unity App between meetings.</span></li>
            </ul>
            <p className="fd-pathway-cards__quote pt-1">&ldquo;We put the right people in the room.&rdquo;</p>
          </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a className="fd-pathway-cards__btn" href="/circles/find" aria-label="Find Your Circle">Find Your Circle</a>
            <a className="fd-pathway-cards__btn fd-pathway-cards__btn--secondary" href="/start-a-circle" aria-label="Start a Circle">Start a Circle</a>
          </div>
        </div>
      </div>
      <div className="fd-pathway-cards__right">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5 px-1 text-xs">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-white/60 font-medium mr-1 text-[11px] uppercase tracking-wider">Filter Grid:</span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white font-medium cursor-pointer border border-white/25">All Circles</span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 cursor-pointer border border-white/10 transition-colors">Industry</span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 cursor-pointer border border-white/10 transition-colors">City</span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 cursor-pointer border border-white/10 transition-colors">Purpose</span>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Open Seats Available
          </span>
        </div>
        <div className="fd-pathway-cards__carousel">
          <div className="fd-pathway-cards__track" id="track-circles" tabIndex={0} role="group" aria-label="Peers Global Trusted Circles">
            <div className="fd-pathway-cards__page">
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/circle-meeting.png" alt="Manufacturing Circle" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/amit-desai.jpg" alt="Amit Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Manufacturing Circle</p>
                <p className="fd-pathway-cards__auth">Mumbai · 24 Peers · 2 Open Seats</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/circle-roundtable-topdown.jpg" alt="Fintech & BFSI Circle" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/rajesh-shah.jpg" alt="Rajesh Shah" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Fintech &amp; BFSI Circle</p>
                <p className="fd-pathway-cards__auth">Bengaluru · 28 Peers · 1 Open Seat</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/industry-panel-leaders.jpg" alt="Health & Pharma Circle" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/neha-kothari.jpg" alt="Neha Kothari" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Health &amp; Pharma Circle</p>
                <p className="fd-pathway-cards__auth">Delhi NCR · 22 Peers · Next Tue</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/industry-cross-city-handshake.jpg" alt="Cross-Border Exports" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/fatima-khan.jpg" alt="Fatima Khan" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Cross-Border Exports</p>
                <p className="fd-pathway-cards__auth">Dubai · 30 Peers · 3 Open Seats</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/conclave.png" alt="D2C Brands Circle" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/vikram-patel.jpg" alt="Vikram Patel" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">D2C Brands Circle</p>
                <p className="fd-pathway-cards__auth">Ahmedabad · 25 Peers · Next Thu</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/who-we-are-inner-board.jpg" alt="Tech Founders Circle" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/priya-desai.jpg" alt="Priya Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Tech Founders Circle</p>
                <p className="fd-pathway-cards__auth">Pune · 26 Peers · 2 Open Seats</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/give-first-card.jpg" alt="CleanTech & Energy" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/anand-sharma.jpg" alt="Anand Sharma" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">CleanTech &amp; Energy</p>
                <p className="fd-pathway-cards__auth">Hyderabad · 24 Peers · 2 Open Seats</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/origin-story-office-bg.jpg" alt="Infra & Engineering" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/pradeep-joshi.jpg" alt="Pradeep Joshi" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Infra &amp; Engineering</p>
                <p className="fd-pathway-cards__auth">Surat · 28 Peers · Next Wed</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/cities-skyline-banner.jpg" alt="Global Enterprise Circle" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/fatima-khan.jpg" alt="Fatima Khan" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Global Enterprise Circle</p>
                <p className="fd-pathway-cards__auth">London · 20 Peers · 1 Open Seat</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/outcomes-peers-group.png" alt="Hospitality & Retail" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/neha-kothari.jpg" alt="Neha Kothari" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Hospitality &amp; Retail</p>
                <p className="fd-pathway-cards__auth">Singapore · 22 Peers · Next Mon</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/story-jignesh-rohit.jpg" alt="Agri & Supply Chain" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/rajesh-shah.jpg" alt="Rajesh Shah" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Agri &amp; Supply Chain</p>
                <p className="fd-pathway-cards__auth">Rajkot · 25 Peers · 2 Open Seats</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/who-we-are-friends.jpg" alt="Family Business Board" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/amit-desai.jpg" alt="Amit Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Family Business Board</p>
                <p className="fd-pathway-cards__auth">Chennai · 20 Peers · 1 Open Seat</p>
              </div>
            </div>
            <div className="fd-pathway-cards__page">
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/industry-director-speaker.jpg" alt="Specialty Chemicals" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/amit-desai.jpg" alt="Amit Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Specialty Chemicals</p>
                <p className="fd-pathway-cards__auth">Vadodara · 21 Peers · 1 Open Seat</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/origin-story-office-bg.jpg" alt="Logistics & Supply Chain" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/pradeep-joshi.jpg" alt="Pradeep Joshi" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Logistics &amp; Supply Chain</p>
                <p className="fd-pathway-cards__auth">Kolkata · 26 Peers · 2 Open Seats</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/story-priya-karan.jpg" alt="Women Entrepreneurs" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/priya-desai.jpg" alt="Priya Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Women Entrepreneurs</p>
                <p className="fd-pathway-cards__auth">Bengaluru · 24 Peers · Next Thu</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/leadership-entrepreneurs-meeting.jpg" alt="AI & Enterprise SaaS" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/anand-sharma.jpg" alt="Anand Sharma" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">AI &amp; Enterprise SaaS</p>
                <p className="fd-pathway-cards__auth">Gurugram · 25 Peers · 2 Open Seats</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/who-we-are-boardroom.jpg" alt="Private Equity & Angels" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/rajesh-shah.jpg" alt="Rajesh Shah" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Private Equity &amp; Angels</p>
                <p className="fd-pathway-cards__auth">Mumbai · 18 Peers · Next Fri</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/lexicon-team-understanding.jpg" alt="EdTech & Learning" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/fatima-khan.jpg" alt="Fatima Khan" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">EdTech &amp; Learning</p>
                <p className="fd-pathway-cards__auth">Pune · 20 Peers · 1 Open Seat</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/cities-skyline-banner.jpg" alt="Textiles & Apparel" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/vikram-patel.jpg" alt="Vikram Patel" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Textiles &amp; Apparel</p>
                <p className="fd-pathway-cards__auth">Surat · 27 Peers · Next Wed</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/who-we-are-mountain.jpg" alt="Heavy Engineering" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/anand-sharma.jpg" alt="Anand Sharma" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Heavy Engineering</p>
                <p className="fd-pathway-cards__auth">Coimbatore · 22 Peers · 3 Open Seats</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/story-neha-simran.jpg" alt="Digital Media Agencies" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/neha-kothari.jpg" alt="Neha Kothari" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Digital Media Agencies</p>
                <p className="fd-pathway-cards__auth">Delhi NCR · 23 Peers · 1 Open Seat</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/circle-roundtable-topdown.jpg" alt="Auto Components & EV" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/pradeep-joshi.jpg" alt="Pradeep Joshi" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Auto Components &amp; EV</p>
                <p className="fd-pathway-cards__auth">Chennai · 24 Peers · Next Mon</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/story-amit-sandeep.jpg" alt="FMCG & Packaged Goods" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/amit-desai.jpg" alt="Amit Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">FMCG &amp; Packaged Goods</p>
                <p className="fd-pathway-cards__auth">Indore · 22 Peers · 2 Open Seats</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/membership-hero-peers.jpg" alt="Scaleup CXO Circle" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/rajesh-shah.jpg" alt="Rajesh Shah" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Scaleup CXO Circle</p>
                <p className="fd-pathway-cards__auth">Global Virtual · 20 Peers · 1 Open Seat</p>
              </div>
            </div>
          </div>
          <div className="fd-pathway-cards__nav">
            <button className="fd-pathway-cards__navbtn" type="button" onClick={() => scrollTrack('track-circles', -1)} aria-label="Previous Circles"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M15.884 5.116a1.25 1.25 0 0 0-1.768 0l-6 6a1.25 1.25 0 0 0 0 1.768l6 6a1.25 1.25 0 0 0 1.768-1.768L10.768 12l5.116-5.116a1.25 1.25 0 0 0 0-1.768"></path></svg></button>
            <button className="fd-pathway-cards__navbtn" type="button" onClick={() => scrollTrack('track-circles', 1)} aria-label="More Circles"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M9.884 5.116a1.25 1.25 0 1 0-1.768 1.768L13.232 12l-5.116 5.116a1.25 1.25 0 0 0 1.768 1.768l6-6a1.25 1.25 0 0 0 0-1.768z"></path></svg></button>
          </div>
        </div>
      </div>
    </article>

    
    <article className="fd-pathway-cards__block fd-pathway-cards__block--authority" id="how-collaboration-works">
      <div className="fd-pathway-cards__left">
        <img className="fd-pathway-cards__hero" src="/images/industry-cross-city-handshake.jpg" alt="Eleven ways a Peer creates value for another Peer" width="461" height="259" loading="lazy" decoding="async" />
        <div className="fd-pathway-cards__body">
          <div className="fd-pathway-cards__text">
          <div className="fd-pathway-cards__head">
            <p className="fd-pathway-cards__eyebrow !text-[#F59E0B]">— HOW COLLABORATION WORKS</p>
            <h2 className="fd-pathway-cards__title">Eleven ways a Peer creates value for another Peer.</h2>
          </div>
          <p className="fd-pathway-cards__desc fd-pathway-cards__desc--lead">Collaboration at Peers Global is a defined practice. These are the forms it takes.</p>
          
          <ul className="fd-pathway-cards__list my-1">
            <li className="fd-pathway-cards__item">
              <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkAuth)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
              <span><strong className="text-white font-semibold">Introductions:</strong> People who can open a door</span>
            </li>
            <li className="fd-pathway-cards__item">
              <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkAuth)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
              <span><strong className="text-white font-semibold">Referrals:</strong> Direct leads that become long-term clients</span>
            </li>
            <li className="fd-pathway-cards__item">
              <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkAuth)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
              <span><strong className="text-white font-semibold">Partnerships:</strong> Between complementary businesses</span>
            </li>
            <li className="fd-pathway-cards__item">
              <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkAuth)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
              <span><strong className="text-white font-semibold">Knowledge &amp; Mentorship:</strong> From lived experience &amp; seasoned leaders</span>
            </li>
            <li className="fd-pathway-cards__item">
              <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkAuth)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
              <span><strong className="text-white font-semibold">Scale &amp; Resources:</strong> Capital, capacity, tools &amp; global market access</span>
            </li>
          </ul>

          <p className="fd-pathway-cards__quote pt-1">
            &ldquo;A connection becomes valuable when it creates an opportunity, solves a problem or improves a life. Every one of these does exactly that.&rdquo;
          </p>
          </div>
          <div className="pt-2">
            <a className="fd-pathway-cards__btn" href="/10-forms-of-collaboration" aria-label="Explore Collaboration">Explore Collaboration</a>
          </div>
        </div>
      </div>
      <div className="fd-pathway-cards__right">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5 px-1 text-xs">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-white/60 font-medium mr-1 text-[11px] uppercase tracking-wider">Forms:</span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white font-medium cursor-pointer border border-white/25">All 11 Ways</span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 cursor-pointer border border-white/10 transition-colors">Access &amp; Referrals</span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 cursor-pointer border border-white/10 transition-colors">Knowledge &amp; Scale</span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 cursor-pointer border border-white/10 transition-colors">Global Reach</span>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span> Defined Practice
          </span>
        </div>
        <div className="fd-pathway-cards__carousel">
          <div className="fd-pathway-cards__track" id="track-collaboration" tabIndex={0} role="group" aria-label="Eleven ways a Peer creates value">
            <div className="fd-pathway-cards__page">
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/industry-cross-city-handshake.jpg" alt="Strategic Introductions" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/amit-desai.jpg" alt="Amit Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Strategic Introductions</p>
                <p className="fd-pathway-cards__auth">To people who can open a door</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/story-jignesh-rohit.jpg" alt="Client Referrals" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/rajesh-shah.jpg" alt="Rajesh Shah" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Client Referrals</p>
                <p className="fd-pathway-cards__auth">Referrals that become long-term clients</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/who-we-are-friends.jpg" alt="Business Partnerships" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/vikram-patel.jpg" alt="Vikram Patel" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Business Partnerships</p>
                <p className="fd-pathway-cards__auth">Between complementary businesses</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/lexicon-team-understanding.jpg" alt="Knowledge Sharing" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/priya-desai.jpg" alt="Priya Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Knowledge Sharing</p>
                <p className="fd-pathway-cards__auth">Hard-won lessons from lived experience</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/executive-director-hero.jpg" alt="Peer Mentorship" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/anand-sharma.jpg" alt="Anand Sharma" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Peer Mentorship</p>
                <p className="fd-pathway-cards__auth">From entrepreneurs further along</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/outcomes-peers-group.png" alt="Customer Connections" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/neha-kothari.jpg" alt="Neha Kothari" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Customer Connections</p>
                <p className="fd-pathway-cards__auth">Customer leads in new market segments</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/who-we-are-boardroom.jpg" alt="Investor Connections" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/fatima-khan.jpg" alt="Fatima Khan" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Investor Connections</p>
                <p className="fd-pathway-cards__auth">Right capital at the right stage</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/origin-story-office-bg.jpg" alt="Shared Resources" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/pradeep-joshi.jpg" alt="Pradeep Joshi" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Shared Resources</p>
                <p className="fd-pathway-cards__auth">Teams, tools, capacity &amp; licences</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/cities-skyline-banner.jpg" alt="Market Access" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/amit-desai.jpg" alt="Amit Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Market Access</p>
                <p className="fd-pathway-cards__auth">Access into a new city or country</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/industry-director-speaker.jpg" alt="Industry Expertise" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/rajesh-shah.jpg" alt="Rajesh Shah" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Industry Expertise</p>
                <p className="fd-pathway-cards__auth">Specialized advice without hiring for it</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/circle-meeting.png" alt="Local-to-Global" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/vikram-patel.jpg" alt="Vikram Patel" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Local-to-Global</p>
                <p className="fd-pathway-cards__auth">Borderless opportunities across community</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/who-we-are-impact.jpg" alt="Life Impact Outcomes" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/priya-desai.jpg" alt="Priya Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Life Impact Outcomes</p>
                <p className="fd-pathway-cards__auth">1 Action = 1 Life Impacted metric</p>
              </div>
            </div>
            <div className="fd-pathway-cards__page">
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/industry-panel-leaders.jpg" alt="Capex Co-Financing" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/amit-desai.jpg" alt="Amit Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Capex Co-Financing</p>
                <p className="fd-pathway-cards__auth">Mehta Multispeciality · Healthcare</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/conclave.png" alt="Global Export Consortia" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/rajesh-shah.jpg" alt="Rajesh Shah" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Global Export Consortia</p>
                <p className="fd-pathway-cards__auth">Solanki Ceramics · Morbi to Dubai</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/who-we-are-inner-board.jpg" alt="Cross-Selling Network" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/priya-desai.jpg" alt="Priya Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Cross-Selling Network</p>
                <p className="fd-pathway-cards__auth">SaaS &amp; FinTech Integration</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/story-jignesh-rohit.jpg" alt="Direct Agri Supply Link" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/anand-sharma.jpg" alt="Anand Sharma" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Direct Agri Supply</p>
                <p className="fd-pathway-cards__auth">Farm to Processing Hub Direct</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/who-we-are-mountain.jpg" alt="Manufacturing Automation" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/pradeep-joshi.jpg" alt="Pradeep Joshi" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Manufacturing Automation</p>
                <p className="fd-pathway-cards__auth">Robotics Consortium Tooling</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/story-neha-simran.jpg" alt="D2C Omnichannel Alliance" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/neha-kothari.jpg" alt="Neha Kothari" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">D2C Omnichannel Alliance</p>
                <p className="fd-pathway-cards__auth">Retail Shelf Sharing Syndicate</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/give-first-card.jpg" alt="Licence & Certification" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/fatima-khan.jpg" alt="Fatima Khan" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Licence &amp; Certification</p>
                <p className="fd-pathway-cards__auth">Pharma Joint Compliance Hub</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/story-priya-karan.jpg" alt="Talent & Studio Exchange" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/vikram-patel.jpg" alt="Vikram Patel" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Talent Exchange Pool</p>
                <p className="fd-pathway-cards__auth">Creative &amp; Tech Shared Benches</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/who-we-are-boardroom.jpg" alt="Angel Syndicate Round" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/rajesh-shah.jpg" alt="Rajesh Shah" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Angel Syndicate Round</p>
                <p className="fd-pathway-cards__auth">CleanTech Seed Round Bridge</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/circle-roundtable-topdown.jpg" alt="Cross-Border JV" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/amit-desai.jpg" alt="Amit Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Cross-Border JV</p>
                <p className="fd-pathway-cards__auth">Infrastructure UAE-India Corridor</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/membership-hero-peers.jpg" alt="Family Governance Council" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/anand-sharma.jpg" alt="Anand Sharma" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Family Governance Council</p>
                <p className="fd-pathway-cards__auth">Second-Gen Transition Playbook</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/story-amit-sandeep.jpg" alt="National Distribution Win" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/pradeep-joshi.jpg" alt="Pradeep Joshi" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">National Distribution Win</p>
                <p className="fd-pathway-cards__auth">FMCG Modern Trade Rollout</p>
              </div>
            </div>
          </div>
          <div className="fd-pathway-cards__nav">
            <button className="fd-pathway-cards__navbtn" type="button" onClick={() => scrollTrack('track-collaboration', -1)} aria-label="Previous collaboration forms"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M15.884 5.116a1.25 1.25 0 0 0-1.768 0l-6 6a1.25 1.25 0 0 0 0 1.768l6 6a1.25 1.25 0 0 0 1.768-1.768L10.768 12l5.116-5.116a1.25 1.25 0 0 0 0-1.768"></path></svg></button>
            <button className="fd-pathway-cards__navbtn" type="button" onClick={() => scrollTrack('track-collaboration', 1)} aria-label="More collaboration forms"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M9.884 5.116a1.25 1.25 0 1 0-1.768 1.768L13.232 12l-5.116 5.116a1.25 1.25 0 0 0 1.768 1.768l6-6a1.25 1.25 0 0 0 0-1.768z"></path></svg></button>
          </div>
        </div>
      </div>
    </article>

    
    <article className="fd-pathway-cards__block fd-pathway-cards__block--connection" id="impact">
      <div className="fd-pathway-cards__left">
        <img className="fd-pathway-cards__hero" src="/images/who-we-are-impact.jpg" alt="We count lives impacted" width="461" height="259" loading="lazy" decoding="async" />
        <div className="fd-pathway-cards__body">
          <div className="fd-pathway-cards__text">
          <div className="fd-pathway-cards__head">
            <p className="fd-pathway-cards__eyebrow !text-[#F43F5E]">— IMPACT</p>
            <h2 className="fd-pathway-cards__title">We count lives impacted.</h2>
          </div>
          <p className="fd-pathway-cards__desc fd-pathway-cards__desc--lead">Impact at Peers Global is practical. It is what happens when one entrepreneur helps another.</p>
          
          <ul className="fd-pathway-cards__list my-1">
            <li className="fd-pathway-cards__item">
              <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkConn)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
              <span>An introduction that lands a first major client.</span>
            </li>
            <li className="fd-pathway-cards__item">
              <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkConn)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
              <span>A conversation that prevents a costly mistake.</span>
            </li>
            <li className="fd-pathway-cards__item">
              <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkConn)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
              <span>A partnership that opens a new market.</span>
            </li>
            <li className="fd-pathway-cards__item">
              <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkConn)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
              <span>A mentor who gives someone the confidence to keep going.</span>
            </li>
            <li className="fd-pathway-cards__item">
              <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkConn)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
              <span>A business that grows and hires twelve more people.</span>
            </li>
          </ul>

          <div className="flex flex-col gap-1.5 pt-1">
            <p className="fd-pathway-cards__desc fd-pathway-cards__desc--lead !text-[15px]">
              Every one of those is a life changed. Every one begins with a Peer choosing to contribute.
            </p>
            <p className="fd-pathway-cards__desc fd-pathway-cards__desc--sub">
              Contribution is recognised across the community — in your Circle, in the Unity App, and in the recognition Peers receive from other Peers.
            </p>
          </div>
          </div>
          <div className="pt-2">
            <a className="fd-pathway-cards__btn" href="/social-impact" aria-label="See Our Impact">See Our Impact</a>
          </div>
        </div>
      </div>
      <div className="fd-pathway-cards__right">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5 px-1 text-xs">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-white/60 font-medium mr-1 text-[11px] uppercase tracking-wider">Metrics:</span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white font-medium cursor-pointer border border-white/25">All Impact (24)</span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 cursor-pointer border border-white/10 transition-colors">Jobs &amp; Growth</span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 cursor-pointer border border-white/10 transition-colors">Capital &amp; Client</span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 cursor-pointer border border-white/10 transition-colors">Mentorship</span>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 text-[11px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span> 1M+ by 2030
          </span>
        </div>
        <div className="fd-pathway-cards__carousel">
          <div className="fd-pathway-cards__track" id="track-impact" tabIndex={0} role="group" aria-label="Peers Global Lives Impacted">
            <div className="fd-pathway-cards__page">
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/industry-cross-city-handshake.jpg" alt="Major Client Landing" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/amit-desai.jpg" alt="Amit Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Major Client Landing</p>
                <p className="fd-pathway-cards__auth">First 8-figure enterprise contract · Mumbai</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/who-we-are-boardroom.jpg" alt="Preventing Costly Mistake" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/rajesh-shah.jpg" alt="Rajesh Shah" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Preventing Costly Mistake</p>
                <p className="fd-pathway-cards__auth">Governance advice saved ₹4.2 Cr · Delhi</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/conclave.png" alt="Cross-Border Market Entry" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/vikram-patel.jpg" alt="Vikram Patel" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Cross-Border Market Entry</p>
                <p className="fd-pathway-cards__auth">Dubai distribution partnership · UAE</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/story-jignesh-rohit.jpg" alt="Founder Confidence & Grit" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/anand-sharma.jpg" alt="Anand Sharma" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Founder Confidence &amp; Grit</p>
                <p className="fd-pathway-cards__auth">Mentorship through turnaround · Pune</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/origin-story-office-bg.jpg" alt="12 Jobs Created" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/pradeep-joshi.jpg" alt="Pradeep Joshi" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">12 Jobs Created</p>
                <p className="fd-pathway-cards__auth">Manufacturing plant expansion · Surat</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/story-priya-karan.jpg" alt="Scaling Women Founders" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/priya-desai.jpg" alt="Priya Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Scaling Women Founders</p>
                <p className="fd-pathway-cards__auth">Scaling D2C healthcare brand · Bengaluru</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/who-we-are-mountain.jpg" alt="Clean Energy Microgrid" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/neha-kothari.jpg" alt="Neha Kothari" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Clean Energy Deployment</p>
                <p className="fd-pathway-cards__auth">Collaborative rural solar · Hyderabad</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/outcomes-peers-group.png" alt="Direct Farm Sourcing" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/fatima-khan.jpg" alt="Fatima Khan" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Direct Farm Sourcing</p>
                <p className="fd-pathway-cards__auth">Fair pricing for 800+ farmers · Rajkot</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/put-collaboration-into-action.png" alt="Life Impact Score: 100+" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/amit-desai.jpg" alt="Amit Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Life Impact Score: 100+</p>
                <p className="fd-pathway-cards__auth">Measured on Unity App · Top Peer</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/industry-panel-leaders.jpg" alt="Emergency Capex Bridge" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/rajesh-shah.jpg" alt="Rajesh Shah" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Emergency Capex Bridge</p>
                <p className="fd-pathway-cards__auth">Peer equipment syndicate · Ahmedabad</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/cities-skyline-banner.jpg" alt="Global Tech Syndicate" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/vikram-patel.jpg" alt="Vikram Patel" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Global Tech Syndicate</p>
                <p className="fd-pathway-cards__auth">6 cross-city founders co-investing · London</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/mission-2030.jpg" alt="The 1 Million Mission" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/anand-sharma.jpg" alt="Anand Sharma" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The 1 Million Mission</p>
                <p className="fd-pathway-cards__auth">Impacting 1M entrepreneurs by 2030</p>
              </div>
            </div>
            <div className="fd-pathway-cards__page">
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/circle-director-hero.jpg" alt="Circle Director Recognition" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/amit-desai.jpg" alt="Amit Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Director Recognition</p>
                <p className="fd-pathway-cards__auth">Honoring top contributors · Mumbai</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/unity-hero-phones.jpg" alt="Unity App Impact Badge" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/priya-desai.jpg" alt="Priya Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Unity Impact Badge</p>
                <p className="fd-pathway-cards__auth">10 Collaborations Logged · Gold Tier</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/story-amit-sandeep.jpg" alt="Peer Appreciation" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/rajesh-shah.jpg" alt="Rajesh Shah" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Peer Appreciation</p>
                <p className="fd-pathway-cards__auth">Unprompted peer testimonial · Delhi</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/story-jignesh-rohit.jpg" alt="Supply Chain Contract" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/pradeep-joshi.jpg" alt="Pradeep Joshi" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Supply Chain Deal</p>
                <p className="fd-pathway-cards__auth">₹18 Cr long-term volume · Surat</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/cities-skyline-banner.jpg" alt="Cross-City Hub" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/vikram-patel.jpg" alt="Vikram Patel" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Cross-City Hub</p>
                <p className="fd-pathway-cards__auth">New branch in Singapore · Chennai</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/executive-director-hero.jpg" alt="Mentorship Pay-It-Forward" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/anand-sharma.jpg" alt="Anand Sharma" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Mentorship Network</p>
                <p className="fd-pathway-cards__auth">Founder guiding 4 scaleups · Pune</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/who-we-are-friends.jpg" alt="Youth Founder Grant" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/fatima-khan.jpg" alt="Fatima Khan" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Youth Founder Grant</p>
                <p className="fd-pathway-cards__auth">Seed pool for founders · Ahmedabad</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/industry-panel-leaders.jpg" alt="Healthcare Diagnostics Capex" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/amit-desai.jpg" alt="Amit Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Healthcare Capex</p>
                <p className="fd-pathway-cards__auth">3 clinics equipped · Vadodara</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/give-first-card.jpg" alt="Export License Clearance" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/rajesh-shah.jpg" alt="Rajesh Shah" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Export Clearance</p>
                <p className="fd-pathway-cards__auth">Solved in 48 hours · Dubai</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/circle-meeting.png" alt="Circle Impact Roll" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/neha-kothari.jpg" alt="Neha Kothari" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Circle Impact Roll</p>
                <p className="fd-pathway-cards__auth">Monthly giving tally · Kolkata</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/leadership-entrepreneurs-meeting.jpg" alt="Tech Stack Sharing" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/priya-desai.jpg" alt="Priya Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Tech Stack Sharing</p>
                <p className="fd-pathway-cards__auth">AI infrastructure sharing · Bengaluru</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/conclave.png" alt="Annual Impact Conclave" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/anand-sharma.jpg" alt="Anand Sharma" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Annual Impact Conclave</p>
                <p className="fd-pathway-cards__auth">Celebrating 25,000+ lives · Global</p>
              </div>
            </div>
          </div>
          <div className="fd-pathway-cards__nav">
            <button className="fd-pathway-cards__navbtn" type="button" onClick={() => scrollTrack('track-impact', -1)} aria-label="Previous impact metrics"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M15.884 5.116a1.25 1.25 0 0 0-1.768 0l-6 6a1.25 1.25 0 0 0 0 1.768l6 6a1.25 1.25 0 0 0 1.768-1.768L10.768 12l5.116-5.116a1.25 1.25 0 0 0 0-1.768"></path></svg></button>
            <button className="fd-pathway-cards__navbtn" type="button" onClick={() => scrollTrack('track-impact', 1)} aria-label="More impact metrics"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M9.884 5.116a1.25 1.25 0 1 0-1.768 1.768L13.232 12l-5.116 5.116a1.25 1.25 0 0 0 1.768 1.768l6-6a1.25 1.25 0 0 0 0-1.768z"></path></svg></button>
          </div>
        </div>
      </div>
    </article>

    <article className="fd-pathway-cards__block fd-pathway-cards__block--body" id="the-1-million-mission">
      <div className="fd-pathway-cards__left">
        <img className="fd-pathway-cards__hero" src="/images/climbers-clean.jpg" alt="The 1 Million Mission" width="461" height="259" loading="lazy" decoding="async" />
        <div className="fd-pathway-cards__body">
          <div className="fd-pathway-cards__text">
          <div className="fd-pathway-cards__head">
            <p className="fd-pathway-cards__eyebrow !text-[#34D399]">— THE 1 MILLION MISSION</p>
            <h2 className="fd-pathway-cards__title">One million lives impacted.</h2>
          </div>
          <p className="fd-pathway-cards__desc fd-pathway-cards__desc--lead">Our mission is to impact one million lives through entrepreneurship, collaboration and opportunity.</p>
          
          <ul className="fd-pathway-cards__list my-1">
            <li className="fd-pathway-cards__item">
              <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkBody)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
              <span>Every referral that builds long-term clients.</span>
            </li>
            <li className="fd-pathway-cards__item">
              <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkBody)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
              <span>Every introduction to key decision-makers.</span>
            </li>
            <li className="fd-pathway-cards__item">
              <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkBody)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
              <span>Every hour of mentorship that prevents costly mistakes.</span>
            </li>
            <li className="fd-pathway-cards__item">
              <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkBody)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
              <span>Every partnership formed inside this community moves that number forward.</span>
            </li>
          </ul>

          <div className="flex flex-col gap-1.5 pt-1">
            <p className="fd-pathway-cards__desc fd-pathway-cards__desc--lead !text-[15px]">
              When you become a Peer, your contribution becomes part of it.
            </p>
          </div>
          </div>
          <div className="pt-2">
            <a className="fd-pathway-cards__btn" href="/1-million-mission" aria-label="Join the 1 Million Mission">Join the 1 Million Mission</a>
          </div>
        </div>
      </div>
      <div className="fd-pathway-cards__right">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5 px-1 text-xs">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-white/60 font-medium mr-1 text-[11px] uppercase tracking-wider">Mission Levers:</span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white font-medium cursor-pointer border border-white/25">All Levers (24)</span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 cursor-pointer border border-white/10 transition-colors">Mentorship</span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 cursor-pointer border border-white/10 transition-colors">Global Trade</span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 cursor-pointer border border-white/10 transition-colors">Job Creation</span>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[11px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span> Target: 1,000,000 Lives
          </span>
        </div>
        <div className="fd-pathway-cards__carousel">
          <div className="fd-pathway-cards__track" id="track-mission" tabIndex={0} role="group" aria-label="Peers Global 1 Million Mission Initiatives">
            <div className="fd-pathway-cards__page">
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/give-first-card.jpg" alt="100,000 Mentorship Hours" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/amit-desai.jpg" alt="Amit Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">100,000 Mentorship Hours</p>
                <p className="fd-pathway-cards__auth">Master founders giving first · Worldwide</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/cities-skyline-banner.jpg" alt="Cross-Border Market Corridors" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/vikram-patel.jpg" alt="Vikram Patel" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Cross-Border Market Corridors</p>
                <p className="fd-pathway-cards__auth">Bilateral founder trade routes · India &amp; UAE</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/origin-story-office-bg.jpg" alt="250,000 Jobs Catalyzed" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/pradeep-joshi.jpg" alt="Pradeep Joshi" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">250,000 Jobs Catalyzed</p>
                <p className="fd-pathway-cards__auth">Indirect employment through SME scaling · India</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/conclave.png" alt="Next-Gen Founder Incubator" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/anand-sharma.jpg" alt="Anand Sharma" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Next-Gen Founder Circles</p>
                <p className="fd-pathway-cards__auth">Incubating college &amp; youth ventures · Multi-city</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/story-priya-karan.jpg" alt="Women Entrepreneurship Council" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/priya-desai.jpg" alt="Priya Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Women Entrepreneurship Council</p>
                <p className="fd-pathway-cards__auth">300+ female-led enterprises scaling · Bengaluru</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/industry-panel-leaders.jpg" alt="Emergency Capex Syndicate" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/rajesh-shah.jpg" alt="Rajesh Shah" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Emergency Capex Syndicate</p>
                <p className="fd-pathway-cards__auth">Asset &amp; equipment sharing network · Ahmedabad</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/outcomes-peers-group.png" alt="Rural Supply Chain Integration" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/fatima-khan.jpg" alt="Fatima Khan" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Rural Supply Chain Integration</p>
                <p className="fd-pathway-cards__auth">Connecting farm producers to D2C · Rajkot</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/who-we-are-mountain.jpg" alt="CleanTech Alliances" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/neha-kothari.jpg" alt="Neha Kothari" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">CleanTech Alliances</p>
                <p className="fd-pathway-cards__auth">Microgrids &amp; zero-waste manufacturing · Hyderabad</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/who-we-are-boardroom.jpg" alt="Peer Seed & Angel Network" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/amit-desai.jpg" alt="Amit Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Peer Seed &amp; Angel Network</p>
                <p className="fd-pathway-cards__auth">Zero-brokerage capital introductions · Mumbai</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/who-we-are-impact.jpg" alt="Global Chapter Expansion" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/vikram-patel.jpg" alt="Vikram Patel" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Global Chapter Expansion</p>
                <p className="fd-pathway-cards__auth">50+ hub cities across 14 nations · London &amp; Dubai</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/unity-app-phone.png" alt="AI & Tech Modernization" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/anand-sharma.jpg" alt="Anand Sharma" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">AI &amp; Tech Modernization</p>
                <p className="fd-pathway-cards__auth">Practical AI adoption playbooks for SMEs · Pune</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/executive-director-conclave.jpg" alt="Leadership Conclave 2030" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/rajesh-shah.jpg" alt="Rajesh Shah" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Leadership Conclave 2030</p>
                <p className="fd-pathway-cards__auth">Annual summit of 2,000+ Peers · New Delhi</p>
              </div>
            </div>
            <div className="fd-pathway-cards__page">
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/industry-cross-city-handshake.jpg" alt="₹5,000 Cr Collaborative Commerce" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/pradeep-joshi.jpg" alt="Pradeep Joshi" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">₹5,000 Cr Collaborative Commerce</p>
                <p className="fd-pathway-cards__auth">Peer-to-peer ecosystem trade value · Global</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/who-we-are-inner-board.jpg" alt="Deep-Tech Shared Labs & IP" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/neha-kothari.jpg" alt="Neha Kothari" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Deep-Tech Shared Labs &amp; IP</p>
                <p className="fd-pathway-cards__auth">Shared testing equipment &amp; tech licenses · Bengaluru</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/who-we-are-friends.jpg" alt="First-Time Exporter Readiness" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/priya-desai.jpg" alt="Priya Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">First-Time Exporter Readiness</p>
                <p className="fd-pathway-cards__auth">Overcoming foreign customs &amp; compliance · Surat</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/culture-hero-desk.jpg" alt="Community Ethics & Governance" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/fatima-khan.jpg" alt="Fatima Khan" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Community Ethics &amp; Governance</p>
                <p className="fd-pathway-cards__auth">Safe, high-trust circle accountability · All Hubs</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/unity-hero-phones.jpg" alt="The Unity App Platform" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/amit-desai.jpg" alt="Amit Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The Unity App Platform</p>
                <p className="fd-pathway-cards__auth">Global opportunity exchange 24/7 · Digital</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/hot-seat.png" alt="Founder Health & Well-being" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/anand-sharma.jpg" alt="Anand Sharma" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Founder Health &amp; Well-being</p>
                <p className="fd-pathway-cards__auth">Preventative health and founder longevity · Mumbai</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/circle-meeting.png" alt="Lean Factory Benchmarking" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/rajesh-shah.jpg" alt="Rajesh Shah" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Lean Factory Benchmarking</p>
                <p className="fd-pathway-cards__auth">Zero-defect manufacturing audits · Vadodara</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/put-collaboration-into-action.png" alt="Working Capital Liquidity" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/vikram-patel.jpg" alt="Vikram Patel" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Working Capital Liquidity</p>
                <p className="fd-pathway-cards__auth">Receivables factoring between vendors · Chennai</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/story-jignesh-rohit.jpg" alt="Family Business Succession" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/pradeep-joshi.jpg" alt="Pradeep Joshi" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Family Business Succession</p>
                <p className="fd-pathway-cards__auth">Seamless Gen-2 founder transitions · Delhi</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/story-amit-sandeep.jpg" alt="Direct Bulk Sourcing Marketplace" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/priya-desai.jpg" alt="Priya Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Direct Bulk Sourcing Marketplace</p>
                <p className="fd-pathway-cards__auth">Removing brokers for industrial inputs · Pan-India</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/story-neha-simran.jpg" alt="Venture Resilience Hot Seats" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/neha-kothari.jpg" alt="Neha Kothari" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Venture Resilience Hot Seats</p>
                <p className="fd-pathway-cards__auth">Unfiltered peer counsel during crises · All Chapters</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="/images/membership-mountain-closing.jpg" alt="1M Lives Milestone Summit" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="/images/peers-avatars/amit-desai.jpg" alt="Amit Desai" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">1M Lives Milestone Summit</p>
                <p className="fd-pathway-cards__auth">Global celebration of collective impact · 2030</p>
              </div>
            </div>
          </div>
          <div className="fd-pathway-cards__nav">
            <button className="fd-pathway-cards__navbtn" type="button" onClick={() => scrollTrack('track-mission', -1)} aria-label="Previous mission initiatives"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M15.884 5.116a1.25 1.25 0 0 0-1.768 0l-6 6a1.25 1.25 0 0 0 0 1.768l6 6a1.25 1.25 0 0 0 1.768-1.768L10.768 12l5.116-5.116a1.25 1.25 0 0 0 0-1.768"></path></svg></button>
            <button className="fd-pathway-cards__navbtn" type="button" onClick={() => scrollTrack('track-mission', 1)} aria-label="More mission initiatives"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M9.884 5.116a1.25 1.25 0 1 0-1.768 1.768L13.232 12l-5.116 5.116a1.25 1.25 0 0 0 1.768 1.768l6-6a1.25 1.25 0 0 0 0-1.768z"></path></svg></button>
          </div>
        </div>
      </div>
    </article>

    
    <article className="fd-pathway-cards__block fd-pathway-cards__block--mystic" id="real-collaborations">
      <div className="fd-pathway-cards__left">
        <img className="fd-pathway-cards__hero" src="/images/industry-cross-city-handshake.jpg" alt="Real Collaborations at Peers Global" width="461" height="259" loading="lazy" decoding="async" />
        <div className="fd-pathway-cards__body">
          <div className="fd-pathway-cards__text">
          <div className="fd-pathway-cards__head">
            <p className="fd-pathway-cards__eyebrow !text-[#C084FC]">— REAL COLLABORATIONS</p>
            <h2 className="fd-pathway-cards__title">What this looks like in real life.</h2>
          </div>
          <p className="fd-pathway-cards__desc fd-pathway-cards__desc--lead">Three real stories. Each: two named Peers, their businesses, their cities, what happened, what it produced. Photograph of the two of them together.</p>
          
          <ul className="fd-pathway-cards__list my-1">
            <li className="fd-pathway-cards__item">
              <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkMystic)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
              <span>Two named Peers in complementary industries.</span>
            </li>
            <li className="fd-pathway-cards__item">
              <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkMystic)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
              <span>Cross-city partnerships without transactional friction.</span>
            </li>
            <li className="fd-pathway-cards__item">
              <svg className="fd-pathway-cards__check shrink-0" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkMystic)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg>
              <span>Every outcome backed by verified business numbers.</span>
            </li>
          </ul>

          <div className="flex flex-col gap-1.5 pt-1">
            <p className="fd-pathway-cards__desc fd-pathway-cards__desc--lead !text-[15px]">
              When business partners become friends, friends become the reason the business grows.
            </p>
          </div>
          </div>
          <div className="pt-2">
            <a className="fd-pathway-cards__btn" href="/stories" aria-label="Read More Peer Stories">Read More Peer Stories</a>
          </div>
        </div>
      </div>
      <div className="fd-pathway-cards__right">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5 px-1 text-xs">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-white/60 font-medium mr-1 text-[11px] uppercase tracking-wider">Stories:</span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white font-medium cursor-pointer border border-white/25">Featured Stories (6)</span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 cursor-pointer border border-white/10 transition-colors">Packaging &amp; Supply</span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 cursor-pointer border border-white/10 transition-colors">Global Exports</span>
            <span className="px-2.5 py-0.5 rounded-full bg-white/5 hover:bg-white/15 text-white/80 cursor-pointer border border-white/10 transition-colors">Capital Savings</span>
          </div>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[11px] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Verified Outcomes
          </span>
        </div>
        <div className="fd-pathway-cards__carousel">
          <div className="fd-pathway-cards__track" id="track-stories" tabIndex={0} role="group" aria-label="Peers Global Real Collaborations">
            <div className="fd-pathway-cards__page !grid-cols-1 md:!grid-cols-3 !gap-3.5">
              {/* Card 1: Jignesh Shah & Rohit Mehta */}
              <div className="group relative rounded-2xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-white/25 transition-all duration-300 hover:shadow-xl hover:shadow-rose-500/10 p-3.5 flex flex-col justify-between h-full">
                <div>
                  <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden mb-3 border border-white/10 shadow-md">
                    <img src="/images/story-jignesh-rohit.jpg" alt="Jignesh Shah and Rohit Mehta" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
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
                    <img src="/images/story-priya-karan.jpg" alt="Priya Desai and Karan Malhotra" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
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
                    <img src="/images/story-amit-sandeep.jpg" alt="Amit Trivedi and Sandeep Kulkarni" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
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
                    <img src="/images/story-hero.jpg" alt="Nayan Shah and Vikramaditya Solanki" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
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
                    <img src="/images/who-we-are-friends.jpg" alt="Pradeep Joshi and Fatima Khan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
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
