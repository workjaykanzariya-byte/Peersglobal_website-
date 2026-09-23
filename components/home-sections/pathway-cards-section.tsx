'use client'

import React, { useRef } from 'react'

export function PathwayCardsSection() {
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
    <linearGradient id="fdPwChkMind" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#5fb0fb"></stop><stop offset="1" stop-color="#92cdfe"></stop></linearGradient>
    <linearGradient id="fdPwChkEnt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7979ff"></stop><stop offset="1" stop-color="#adbfff"></stop></linearGradient>
    <linearGradient id="fdPwChkAuth" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f7ce18"></stop><stop offset="1" stop-color="#fbe149"></stop></linearGradient>
    <linearGradient id="fdPwChkConn" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#e086af"></stop><stop offset="1" stop-color="#edb4cf"></stop></linearGradient>
    <linearGradient id="fdPwChkBody" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#48bf8f"></stop><stop offset="1" stop-color="#7dd8b1"></stop></linearGradient>
    <linearGradient id="fdPwChkMystic" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#c079ff"></stop><stop offset="1" stop-color="#d8adff"></stop></linearGradient>
  </defs></svg>
  <div className="fd-pathway-cards__inner">

    
    <article className="fd-pathway-cards__block fd-pathway-cards__block--mind">
      <div className="fd-pathway-cards__left">
        <img className="fd-pathway-cards__hero" src="https://a.storyblok.com/f/312081/1920x1080/2540700ff4/pathway_theextraordinarymind-keyart.webp/m/830x0/filters:format(webp):quality(80)" alt="The Extraordinary Mind Pathway" width="461" height="259" loading="lazy" decoding="async" />
        <div className="fd-pathway-cards__body">
          <div className="fd-pathway-cards__text">
          <div className="fd-pathway-cards__head">
            <p className="fd-pathway-cards__eyebrow">THE EXTRAORDINARY MIND</p>
            <h3 className="fd-pathway-cards__title">Mastering Your Mind</h3>
          </div>
          <p className="fd-pathway-cards__desc">Your mind shapes the life you create. Break free from limiting beliefs, build empowering habits, and unlock greater clarity and resilience.</p>
          <ul className="fd-pathway-cards__list">
            <li className="fd-pathway-cards__item"><svg className="fd-pathway-cards__check" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkMind)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg><span>Break free from overthinking and self-doubt</span></li>
            <li className="fd-pathway-cards__item"><svg className="fd-pathway-cards__check" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkMind)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg><span>Build habits that help you stay calm and focused</span></li>
            <li className="fd-pathway-cards__item"><svg className="fd-pathway-cards__check" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkMind)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg><span>Develop a mindset that supports your whole life</span></li>
          </ul>
          </div>
          <a className="fd-pathway-cards__btn" href="https://www.mindvalley.com/pathways/extraordinary-mind" aria-label="Explore This Pathway: Extraordinary Mind">Explore This Pathway</a>
        </div>
      </div>
      <div className="fd-pathway-cards__right">
        <div className="fd-pathway-cards__carousel">
          <div className="fd-pathway-cards__track" tabIndex="0" role="group" aria-label="The Extraordinary Mind Pathway programs">
            <div className="fd-pathway-cards__page">
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/75022a748d/prog_be-extraordinary.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/7bf03257b2/auth_vishen-2-3-4.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Be Extraordinary</p>
                <p className="fd-pathway-cards__auth">Vishen Lakhiani</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/a70ffe4913/prog_life-visioning-mastery.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/7cd4b2411f/auth_michael-beckwith-2-3.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Life Visioning Mastery</p>
                <p className="fd-pathway-cards__auth">Michael B. Beckwith</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/b667bd5325/prog_tapping-into-emotional-mastery.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/df93abda6e/auth_jennifer-partridge-2-3-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Tapping into Emotional Mastery</p>
                <p className="fd-pathway-cards__auth">Jennifer Partridge</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/12354b7643/prog_the-integral-life.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/bdf8bf79d5/auth_ken-wilber-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The Integral Life</p>
                <p className="fd-pathway-cards__auth">Ken Wilber</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/88a47ad844/prog_the-silva-ultramind-system.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/7bf03257b2/auth_vishen-2-3-4.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The Silva Ultramind System</p>
                <p className="fd-pathway-cards__auth">Vishen Lakhiani, Jose Silva</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/f70297bb18/prog_everyday-bliss.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/5bd4e971f3/auth_paul-mckenna-2-3.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Everyday Bliss</p>
                <p className="fd-pathway-cards__auth">Paul McKenna</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/74ea1c267a/prog_magical-living.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/75208e7e1d/auth_tim-storey-2-3.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Magical Living</p>
                <p className="fd-pathway-cards__auth">Tim Storey</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/db919d3e2b/prog_rapid-transformation-hypnotheraphy-for-abundance.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/a7113b92cd/auth_marisa-peer-2-3.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Rapid Transformational Hypnotherapy for Abundance</p>
                <p className="fd-pathway-cards__auth">Marisa Peer</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/5a9be30bf6/prog_the-m-word.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/b89f7071a5/auth_emily-fletcher-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The M Word</p>
                <p className="fd-pathway-cards__auth">Emily Fletcher</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/5f9b60c5c1/prog_creative-visualization.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/7bf03257b2/auth_vishen-2-3-4.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Creative Visualization</p>
                <p className="fd-pathway-cards__auth">Vishen Lakhiani, Lisa Nichols</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/51e47c3630/prog_from-awesome-to-flawsome.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/84cdc0b4ae/auth_kristina-ma-nd-lakhiani-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">From Awesome to Flawesome</p>
                <p className="fd-pathway-cards__auth">Kristina Mand-Lakhiani</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/fc86176fc1/prog_be-extraordinary-for-teens.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/7bf03257b2/auth_vishen-2-3-4.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Be Extraordinary for Teens</p>
                <p className="fd-pathway-cards__auth">Vishen Lakhiani, Gahmya Drummond-Bey</p>
              </div>
            </div>
            <div className="fd-pathway-cards__page">
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/b42b7669ca/prog_the-values-factor.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/0a6e25bdfd/auth_dr-john-demartini-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The Values Factor</p>
                <p className="fd-pathway-cards__auth">Dr. John DeMartini</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/44dd30090c/prog_live-by-your-own-rules.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/84cdc0b4ae/auth_kristina-ma-nd-lakhiani-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Live By Your Own Rules</p>
                <p className="fd-pathway-cards__auth">Kristina Mand-Lakhiani</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/eaa270c2c5/prog_forgiveness.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/56789e788b/auth_marie-diamond-2-3-2.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Forgiveness</p>
                <p className="fd-pathway-cards__auth">Marie Diamond</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/27fc638a90/prog_the-5-elements-of-happiness.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/0613991817/auth_tal-ben-shahar-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The 5 Elements of Happiness</p>
                <p className="fd-pathway-cards__auth">Dr. Tal Ben-Shahar</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/2e412763b1/prog_the-6-phase-meditation.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/7bf03257b2/auth_vishen-2-3-4.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The 6 Phase Meditation</p>
                <p className="fd-pathway-cards__auth">Vishen Lakhiani</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/eef2138fbd/prog_unshakeable.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/330c9e32a4/auth_shade-zahrai-faysal-sekkouah-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">UNSHAKEABLE</p>
                <p className="fd-pathway-cards__auth">Dr. Shadé Zahrai, Fayçal Sekkouah</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/1d42a7418e/prog_10-questions-for-self-love.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/84cdc0b4ae/auth_kristina-ma-nd-lakhiani-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">10 Questions for Self-Love</p>
                <p className="fd-pathway-cards__auth">Kristina Mand-Lakhiani</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/552c1d5562/prog_uncompromised-life.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/a7113b92cd/auth_marisa-peer-2-3.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Uncompromised Life</p>
                <p className="fd-pathway-cards__auth">Marisa Peer</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/844b0eb3fc/prog_becoming-more-loving.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/80bc4f3439/auth_gelong-thubten-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Becoming More Loving</p>
                <p className="fd-pathway-cards__auth">Gelong Thubten</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/0dbfac2eaf/prog_mastering-the-growth-mindset.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/7bf03257b2/auth_vishen-2-3-4.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Mastering the Growth Mindset</p>
                <p className="fd-pathway-cards__auth">Vishen Lakhiani</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/f265f2ec09/prog_calm-mind.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/f97d18fc92/auth_dr-caroline-leaf-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Calm Mind</p>
                <p className="fd-pathway-cards__auth">Dr. Caroline Leaf</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/c09cd7741d/prog_3-most-important-questions.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/7bf03257b2/auth_vishen-2-3-4.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The 3 Most Important Questions</p>
                <p className="fd-pathway-cards__auth">Vishen Lakhiani</p>
              </div>
            </div>
          </div>
          <div className="fd-pathway-cards__nav">
            <button className="fd-pathway-cards__navbtn" type="button" data-nav="prev" aria-label="Previous programs in Mastering Your Mind"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M15.884 5.116a1.25 1.25 0 0 0-1.768 0l-6 6a1.25 1.25 0 0 0 0 1.768l6 6a1.25 1.25 0 0 0 1.768-1.768L10.768 12l5.116-5.116a1.25 1.25 0 0 0 0-1.768"></path></svg></button>
            <button className="fd-pathway-cards__navbtn" type="button" data-nav="next" aria-label="More programs in Mastering Your Mind"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M9.884 5.116a1.25 1.25 0 1 0-1.768 1.768L13.232 12l-5.116 5.116a1.25 1.25 0 0 0 1.768 1.768l6-6a1.25 1.25 0 0 0 0-1.768z"></path></svg></button>
          </div>
        </div>
      </div>
    </article>

    
    <article className="fd-pathway-cards__block fd-pathway-cards__block--entrepreneur">
      <div className="fd-pathway-cards__left">
        <img className="fd-pathway-cards__hero" src="https://a.storyblok.com/f/312081/1920x1080/0e361e220e/pathway_theexponentialentrepreneur-keyart.webp/m/830x0/filters:format(webp):quality(80)" alt="The Exponential Entrepreneur Pathway" width="461" height="259" loading="lazy" decoding="async" />
        <div className="fd-pathway-cards__body">
          <div className="fd-pathway-cards__text">
          <div className="fd-pathway-cards__head">
            <p className="fd-pathway-cards__eyebrow">THE EXPONENTIAL ENTREPRENEUR</p>
            <h3 className="fd-pathway-cards__title">Scaling Your Business</h3>
          </div>
          <p className="fd-pathway-cards__desc">Build a business that grows beyond your time. Leverage AI, automation, and modern strategies to scale your impact, income, and freedom.</p>
          <ul className="fd-pathway-cards__list">
            <li className="fd-pathway-cards__item"><svg className="fd-pathway-cards__check" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkEnt)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg><span>Build systems that scale with you</span></li>
            <li className="fd-pathway-cards__item"><svg className="fd-pathway-cards__check" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkEnt)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg><span>Multiply your productivity with AI</span></li>
            <li className="fd-pathway-cards__item"><svg className="fd-pathway-cards__check" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkEnt)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg><span>Scale your business with confidence</span></li>
          </ul>
          </div>
          <a className="fd-pathway-cards__btn" href="https://www.mindvalley.com/pathways/exponential-entrepreneur" aria-label="Explore This Pathway: Exponential Entrepreneur">Explore This Pathway</a>
        </div>
      </div>
      <div className="fd-pathway-cards__right">
        <div className="fd-pathway-cards__carousel">
          <div className="fd-pathway-cards__track" tabIndex="0" role="group" aria-label="The Exponential Entrepreneur Pathway programs">
            <div className="fd-pathway-cards__page">
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/a89d8008f6/prog_business-freedom-blueprint.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/825503285f/auth_eric-edmeades-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Business Freedom Blueprint</p>
                <p className="fd-pathway-cards__auth">Eric Edmeades</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/df4e6d5aae/prog_the-new-psychology-of-winning.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/77e2373985/auth_denis-waitley-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The New Psychology of Winning</p>
                <p className="fd-pathway-cards__auth">Denis Waitley</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/68f95d7d82/prog_zero-to-100-million.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/91564b8650/auth_miki-agrawal-2-3-2.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Zero to $100 Million</p>
                <p className="fd-pathway-cards__auth">Miki Agrawal</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/d07edb928c/prog_building-an-unstoppable-brand.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/5d8171a4a7/auth_jeffrey-perlman-1-1-2.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Building an Unstoppable Brand</p>
                <p className="fd-pathway-cards__auth">Jeffrey Perlman</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/1ce1cd1417/prog_the-habit-of-ferocity.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/ce713fd300/auth_steven-kotler-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The Habit of Ferocity</p>
                <p className="fd-pathway-cards__auth">Steven Kotler</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/a7a08cbb24/prog_the-quest-for-personal-mastery.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/fbb7513ea7/auth_srikumar-rao-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The Quest for Personal Mastery</p>
                <p className="fd-pathway-cards__auth">Srikumar Rao</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/57783877d3/prog_ultimate-leadership.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/cebc5f82fe/auth_keith-ferrazzi-2-3.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Ultimate Leadership</p>
                <p className="fd-pathway-cards__auth">Keith Ferrazzi</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/5231712343/prog_becoming-focused-indistractable.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/d539ca68ba/auth_nir-eyal-2-3.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Becoming Focused and Indistractable</p>
                <p className="fd-pathway-cards__auth">Nir Eyal</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/cd9439baa4/prog_amplify-with-ai.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/7bf03257b2/auth_vishen-2-3-4.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Amplify with AI</p>
                <p className="fd-pathway-cards__auth">Vishen Lakhiani, Manon Dave, Vykintas Glodenis</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/63c030a6c8/prog_super-reading.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/3d465e5107/auth_jim-kwik-2-3.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Super Reading</p>
                <p className="fd-pathway-cards__auth">Jim Kwik</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/f1a2427527/prog_money-eq.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/0025a189b1/auth_ken-honda-2-3.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Money EQ</p>
                <p className="fd-pathway-cards__auth">Ken Honda</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/8ef6dbb360/prog_scale-your-business-to-1m.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/a6614812cd/auth_verne-harnish-2-3-2.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Scale Your Business to $1 Million</p>
                <p className="fd-pathway-cards__auth">Verne Harnish</p>
              </div>
            </div>
            <div className="fd-pathway-cards__page">
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/21d79c9462/prog_mastering-authentic-networking.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/cebc5f82fe/auth_keith-ferrazzi-2-3.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Mastering Authentic Networking</p>
                <p className="fd-pathway-cards__auth">Keith Ferrazzi</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/d13913c7fb/prog_superbrain.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/3d465e5107/auth_jim-kwik-2-3.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Superbrain</p>
                <p className="fd-pathway-cards__auth">Jim Kwik</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/f9b56ab1b5/prog_negotiate-with-confidence.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/1c4884ce97/auth_kwame-christian-2x3-2.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Negotiate with Confidence</p>
                <p className="fd-pathway-cards__auth">Kwame Christian</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/8d57b2b607/prog_smart-money.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/64eff58139/auth_jaspreet-singh-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Smart Money</p>
                <p className="fd-pathway-cards__auth">Jaspreet Singh</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/ab1ad9bda3/prog_the-maestro-s-guide-to-leadership.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/1b953d8688/auth_itay-talgam-2x3-2.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The Maestro's Guide to Leadership</p>
                <p className="fd-pathway-cards__auth">Itay Talgam</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/4e14af10a5/prog_the-power-of-boldness.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/94b9e47b52/auth_naveen-jain-2-3.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The Power of Boldness</p>
                <p className="fd-pathway-cards__auth">Naveen Jain</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/df45a03ecf/prog_the-transformational-leader.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/efaedb8d4e/auth_monty-moran-2-3.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The Transformational Leader</p>
                <p className="fd-pathway-cards__auth">Monty Moran</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/5c5abb3c10/prog_vivid-vision.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/6f3aa06fd5/auth_cameron-herold-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Vivid Vision</p>
                <p className="fd-pathway-cards__auth">Cameron Herold</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/6b0de98ace/prog_bold-conversations.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/c8cf080946/auth_verna-myers-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Bold Conversations</p>
                <p className="fd-pathway-cards__auth">Verna Myers</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/ab44b5e168/prog_healing-burnout.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/a736cbe295/auth_dr-romie-mushtaq-2-3-2.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Healing Burnout</p>
                <p className="fd-pathway-cards__auth">Dr. Romie Mushtaq</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/9f83d4cb0a/prog_maye-musk-s-5-rules-of-life.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/761aaf03d0/auth_maye-musk-2-3.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Maye Musk's 5 Rules of Life</p>
                <p className="fd-pathway-cards__auth">Maye Musk</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/eb84fdce0e/prog_super-productivity.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/7bf03257b2/auth_vishen-2-3-4.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Super Productivity</p>
                <p className="fd-pathway-cards__auth">Vishen Lakhiani</p>
              </div>
            </div>
            <div className="fd-pathway-cards__page">
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/06d6f052ec/prog_5-days-to-a-powerful-memory.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/3d465e5107/auth_jim-kwik-2-3.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">5 Days To A Powerful Memory</p>
                <p className="fd-pathway-cards__auth">Jim Kwik</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://assets.mindvalley.com/api/v1/assets/4c0f6ed8-6c37-40b1-8902-c1aa48cd2467.jpg" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/7bf03257b2/auth_vishen-2-3-4.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">AI First Founder</p>
                <p className="fd-pathway-cards__auth">Vishen</p>
              </div>
            </div>
          </div>
          <div className="fd-pathway-cards__nav">
            <button className="fd-pathway-cards__navbtn" type="button" data-nav="prev" aria-label="Previous programs in Scaling Your Business"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M15.884 5.116a1.25 1.25 0 0 0-1.768 0l-6 6a1.25 1.25 0 0 0 0 1.768l6 6a1.25 1.25 0 0 0 1.768-1.768L10.768 12l5.116-5.116a1.25 1.25 0 0 0 0-1.768"></path></svg></button>
            <button className="fd-pathway-cards__navbtn" type="button" data-nav="next" aria-label="More programs in Scaling Your Business"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M9.884 5.116a1.25 1.25 0 1 0-1.768 1.768L13.232 12l-5.116 5.116a1.25 1.25 0 0 0 1.768 1.768l6-6a1.25 1.25 0 0 0 0-1.768z"></path></svg></button>
          </div>
        </div>
      </div>
    </article>

    
    <article className="fd-pathway-cards__block fd-pathway-cards__block--authority">
      <div className="fd-pathway-cards__left">
        <img className="fd-pathway-cards__hero" src="https://a.storyblok.com/f/312081/1920x1080/7b71c2c41a/pathway_theexpertandauthority-keyart.webp/m/830x0/filters:format(webp):quality(80)" alt="The Expert & Authority Pathway" width="461" height="259" loading="lazy" decoding="async" />
        <div className="fd-pathway-cards__body">
          <div className="fd-pathway-cards__text">
          <div className="fd-pathway-cards__head">
            <p className="fd-pathway-cards__eyebrow">THE EXPERT & AUTHORITY</p>
            <h3 className="fd-pathway-cards__title">Establishing Your Expertise</h3>
          </div>
          <p className="fd-pathway-cards__desc">Turn your knowledge into influence. Build your personal brand, share ideas that matter, and become the trusted voice people look to for guidance.</p>
          <ul className="fd-pathway-cards__list">
            <li className="fd-pathway-cards__item"><svg className="fd-pathway-cards__check" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkAuth)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg><span>Build a personal brand with purpose</span></li>
            <li className="fd-pathway-cards__item"><svg className="fd-pathway-cards__check" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkAuth)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg><span>Communicate with clarity and confidence</span></li>
            <li className="fd-pathway-cards__item"><svg className="fd-pathway-cards__check" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkAuth)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg><span>Grow your influence and credibility</span></li>
          </ul>
          </div>
          <a className="fd-pathway-cards__btn" href="https://www.mindvalley.com/pathways/expert-and-authority" aria-label="Explore This Pathway: Expert & Authority">Explore This Pathway</a>
        </div>
      </div>
      <div className="fd-pathway-cards__right">
        <div className="fd-pathway-cards__carousel">
          <div className="fd-pathway-cards__track" tabIndex="0" role="group" aria-label="The Expert & Authority Pathway programs">
            <div className="fd-pathway-cards__page">
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/b5d8de0364/prog_course-pro.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/7bf03257b2/auth_vishen-2-3-4.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Course Pro</p>
                <p className="fd-pathway-cards__auth">Vishen Lakhiani, Jimmy Naraine</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/a5a98051be/prog_speak-and-inspire.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/30c98a865b/auth_lisa-nichols-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Speak and Inspire</p>
                <p className="fd-pathway-cards__auth">Lisa Nichols</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/381d598bfd/prog_the-stage-effect.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/825503285f/auth_eric-edmeades-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The Stage Effect</p>
                <p className="fd-pathway-cards__auth">Eric Edmeades</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/5bb38c98d1/prog_the-queen-effect.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/929470f197/auth_rolene-strausss-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The Queen Effect</p>
                <p className="fd-pathway-cards__auth">Rolene Strauss</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/c56ec24bb9/prog_the-science-of-personal-branding.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/7cfd12a6f5/auth_gerard-adams-2-3-2.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The Science of Personal Branding</p>
                <p className="fd-pathway-cards__auth">Gerard Adams</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/e7c66cec79/prog_build-your-dream-community.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/f0d3796f50/auth_radha-agrawal-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Build Your Dream Community</p>
                <p className="fd-pathway-cards__auth">Radha Agrawal</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/730cc5cc5b/prog_magnetic-charisma.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/8eaa028609/auth_vanessa-van-edwards-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Magnetic Charisma</p>
                <p className="fd-pathway-cards__auth">Vanessa Van Edwards</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/3906b2a778/prog_mastering-body-language.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/f6e7eb4338/auth_barbara-allan-pease-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Mastering Body Language</p>
                <p className="fd-pathway-cards__auth">Allan & Barbara Pease</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/584f48be4e/prog_reinventing-yourself.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/feab55268b/auth_dorie-clark-2x3-1.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Reinventing Yourself</p>
                <p className="fd-pathway-cards__auth">Dorie Clark</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/e58f86e4d8/prog_the-7-figure-creator.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/46fb7178fb/auth_john-lee-1-1-2.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The 7-Figure Creator</p>
                <p className="fd-pathway-cards__auth">John Lee</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/95031e277c/prog_the-champion-mindset.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/090ffde12f/auth_florencia-andre-s-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The Champion Mindset</p>
                <p className="fd-pathway-cards__auth">Florencia Andrés</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/3b870ddc9f/prog_total-self-confidence.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/5bd4e971f3/auth_paul-mckenna-2-3.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Total Self-Confidence</p>
                <p className="fd-pathway-cards__auth">Paul McKenna</p>
              </div>
            </div>
            <div className="fd-pathway-cards__page">
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/d6a188856c/prog_digital-body-language.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/748f36ddc3/auth_erica-dhawan-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Digital Body Language</p>
                <p className="fd-pathway-cards__auth">Erica Dhawan</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/de17d0ba48/prog_picture-perfect.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/84532a8b0f/auth_paulius-staniunas-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Picture Perfect</p>
                <p className="fd-pathway-cards__auth">Paulius Staniunas</p>
              </div>
            </div>
          </div>
          <div className="fd-pathway-cards__nav">
            <button className="fd-pathway-cards__navbtn" type="button" data-nav="prev" aria-label="Previous programs in Establishing Your Expertise"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M15.884 5.116a1.25 1.25 0 0 0-1.768 0l-6 6a1.25 1.25 0 0 0 0 1.768l6 6a1.25 1.25 0 0 0 1.768-1.768L10.768 12l5.116-5.116a1.25 1.25 0 0 0 0-1.768"></path></svg></button>
            <button className="fd-pathway-cards__navbtn" type="button" data-nav="next" aria-label="More programs in Establishing Your Expertise"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M9.884 5.116a1.25 1.25 0 1 0-1.768 1.768L13.232 12l-5.116 5.116a1.25 1.25 0 0 0 1.768 1.768l6-6a1.25 1.25 0 0 0 0-1.768z"></path></svg></button>
          </div>
        </div>
      </div>
    </article>

    
    <article className="fd-pathway-cards__block fd-pathway-cards__block--connection">
      <div className="fd-pathway-cards__left">
        <img className="fd-pathway-cards__hero" src="https://a.storyblok.com/f/312081/1920x1080/270e676249/pathway_theartofconnection-keyart.webp/m/830x0/filters:format(webp):quality(80)" alt="The Art of Connection Pathway" width="461" height="259" loading="lazy" decoding="async" />
        <div className="fd-pathway-cards__body">
          <div className="fd-pathway-cards__text">
          <div className="fd-pathway-cards__head">
            <p className="fd-pathway-cards__eyebrow">THE ART OF CONNECTION</p>
            <h3 className="fd-pathway-cards__title">Building Your Relationships</h3>
          </div>
          <p className="fd-pathway-cards__desc">Strong relationships are the foundation of a fulfilling life. Deepen your connections, communicate with authenticity, and create lasting bonds with the people who matter most.</p>
          <ul className="fd-pathway-cards__list">
            <li className="fd-pathway-cards__item"><svg className="fd-pathway-cards__check" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkConn)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg><span>Communicate with empathy and confidence</span></li>
            <li className="fd-pathway-cards__item"><svg className="fd-pathway-cards__check" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkConn)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg><span>Build deeper, healthier relationships</span></li>
            <li className="fd-pathway-cards__item"><svg className="fd-pathway-cards__check" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkConn)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg><span>Strengthen trust and emotional connection</span></li>
          </ul>
          </div>
          <a className="fd-pathway-cards__btn" href="https://www.mindvalley.com/pathways/art-of-connection" aria-label="Explore This Pathway: Art of Connection">Explore This Pathway</a>
        </div>
      </div>
      <div className="fd-pathway-cards__right">
        <div className="fd-pathway-cards__carousel">
          <div className="fd-pathway-cards__track" tabIndex="0" role="group" aria-label="The Art of Connection Pathway programs">
            <div className="fd-pathway-cards__page">
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/9f768db4de/prog_conscious-parenting-mastery.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/20f63d7c50/auth_shefali-tsabary-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Conscious Parenting Mastery</p>
                <p className="fd-pathway-cards__auth">Dr. Shefali</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/037423f19f/prog_conscious-uncoupling.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/ded963fdef/auth_katherine-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Conscious Uncoupling</p>
                <p className="fd-pathway-cards__auth">Katherine Woodward Thomas</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/04cab38d47/prog_the-energies-of-love.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/08a3a7ff05/auth_donna-eden-1-1.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The Energies of Love</p>
                <p className="fd-pathway-cards__auth">Donna Eden & David Feinstein</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/5eb3d3ba89/prog_becoming-irresistibly-sexy.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/6c9504dc2d/auth_sheila-kelley-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Becoming Irresistibly Sexy</p>
                <p className="fd-pathway-cards__auth">Sheila Kelley</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/0606db1b78/prog_neo-tantra.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/bf73e426b1/auth_layla-martin-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Neo-Tantra</p>
                <p className="fd-pathway-cards__auth">Layla Martin</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/73ef994bff/prog_tantra-touch.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/82ca0e2b2a/auth_psalm-isadora-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Tantra Touch</p>
                <p className="fd-pathway-cards__auth">Psalm Isadora</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/17fe722305/prog_calling-in-the-one.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/ded963fdef/auth_katherine-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Calling in “The One”</p>
                <p className="fd-pathway-cards__auth">Katherine Woodward Thomas</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/0e7c723b65/prog_healing-from-heartbreak.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/af0c6cf0e7/auth_sheleana-aiyanah-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Healing from Heartbreak</p>
                <p className="fd-pathway-cards__auth">Sheleana Aiyana</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/ee5ec355ac/prog_quantum-love.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/b6bae67338/auth_dr-laura-berman-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Quantum Love</p>
                <p className="fd-pathway-cards__auth">Dr. Laura Berman</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/623cb44f9c/prog_body-language-for-dating-attraction.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/7f38aaba16/auth_linda-clemons-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Body Language for Dating & Attraction</p>
                <p className="fd-pathway-cards__auth">Linda Clemons®</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/f3de647186/prog_creating-friendships-deep-connections.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/a57e8e28b0/auth_gahmya-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Creating Friendships and Deep Connections for Teens</p>
                <p className="fd-pathway-cards__auth">Gahmya Drummond-Bey</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/bb86770df9/prog_wild-woman-sensuality.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/5a5efa41d4/auth_rachel-pringle-2-3-2.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Wild Woman Sensuality</p>
                <p className="fd-pathway-cards__auth">Rachel Pringle</p>
              </div>
            </div>
            <div className="fd-pathway-cards__page">
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/bfbb9abe68/prog_the-science-of-great-sex.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/14b80d1cee/auth_amy-killen-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The Science of Great Sex</p>
                <p className="fd-pathway-cards__auth">Dr. Amy Killen</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/4f6866ebf0/prog_waves-of-pleasure.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/bb5bd9b186/auth_bibi-brzozka-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Waves of Pleasure</p>
                <p className="fd-pathway-cards__auth">Bibi Brzozka</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/723550cce3/prog_zivakids-grow.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/b89f7071a5/auth_emily-fletcher-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">ZivaKids Grow</p>
                <p className="fd-pathway-cards__auth">Emily Fletcher</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/328aa50d36/prog_zivakids-play.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/b89f7071a5/auth_emily-fletcher-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">ZivaKids Play</p>
                <p className="fd-pathway-cards__auth">Emily Fletcher</p>
              </div>
            </div>
          </div>
          <div className="fd-pathway-cards__nav">
            <button className="fd-pathway-cards__navbtn" type="button" data-nav="prev" aria-label="Previous programs in Building Your Relationships"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M15.884 5.116a1.25 1.25 0 0 0-1.768 0l-6 6a1.25 1.25 0 0 0 0 1.768l6 6a1.25 1.25 0 0 0 1.768-1.768L10.768 12l5.116-5.116a1.25 1.25 0 0 0 0-1.768"></path></svg></button>
            <button className="fd-pathway-cards__navbtn" type="button" data-nav="next" aria-label="More programs in Building Your Relationships"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M9.884 5.116a1.25 1.25 0 1 0-1.768 1.768L13.232 12l-5.116 5.116a1.25 1.25 0 0 0 1.768 1.768l6-6a1.25 1.25 0 0 0 0-1.768z"></path></svg></button>
          </div>
        </div>
      </div>
    </article>

    
    <article className="fd-pathway-cards__block fd-pathway-cards__block--body">
      <div className="fd-pathway-cards__left">
        <img className="fd-pathway-cards__hero" src="https://a.storyblok.com/f/312081/1920x1080/dd9d2a0b36/pathway_theagelessbody-keyart.webp/m/830x0/filters:format(webp):quality(80)" alt="The Ageless Body Pathway" width="461" height="259" loading="lazy" decoding="async" />
        <div className="fd-pathway-cards__body">
          <div className="fd-pathway-cards__text">
          <div className="fd-pathway-cards__head">
            <p className="fd-pathway-cards__eyebrow">THE AGELESS BODY</p>
            <h3 className="fd-pathway-cards__title">Enhancing Your Longevity</h3>
          </div>
          <p className="fd-pathway-cards__desc">Build a body that supports a lifetime of energy and vitality. Strengthen your health, move with confidence, and create habits that help you thrive for years to come.</p>
          <ul className="fd-pathway-cards__list">
            <li className="fd-pathway-cards__item"><svg className="fd-pathway-cards__check" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkBody)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg><span>Increase your energy and resilience</span></li>
            <li className="fd-pathway-cards__item"><svg className="fd-pathway-cards__check" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkBody)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg><span>Build healthy habits that last</span></li>
            <li className="fd-pathway-cards__item"><svg className="fd-pathway-cards__check" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkBody)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg><span>Support long-term health and vitality</span></li>
          </ul>
          </div>
          <a className="fd-pathway-cards__btn" href="https://www.mindvalley.com/pathways/ageless-body" aria-label="Explore This Pathway: Ageless Body">Explore This Pathway</a>
        </div>
      </div>
      <div className="fd-pathway-cards__right">
        <div className="fd-pathway-cards__carousel">
          <div className="fd-pathway-cards__track" tabIndex="0" role="group" aria-label="The Ageless Body Pathway programs">
            <div className="fd-pathway-cards__page">
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/e50d4360e5/prog_10x-fitness.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/fd276fe2d6/auth_ronan-diego-2-3-2.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">10X Fitness</p>
                <p className="fd-pathway-cards__auth">Ronan Diego, Lorenzo Delano</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/6093e03719/prog_the-longevity-blueprint.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/20243eb18c/auth_ben-greenfield-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The Longevity Blueprint</p>
                <p className="fd-pathway-cards__auth">Ben Greenfield, Ronan Diego</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/d21a3748e9/prog_the-mastery-of-sleep.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/cfeef8a9ce/auth_michael-breus-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The Mastery of Sleep</p>
                <p className="fd-pathway-cards__auth">Michael Breus</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/5b41d80377/prog_modern-qigong.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/5701b89875/auth_lee-holden-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Modern Qi Gong</p>
                <p className="fd-pathway-cards__auth">Lee Holden</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/3fa084169e/prog_the-mindvalley-yoga-quest.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/637205644f/auth_cecilia-sardeo-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The Mindvalley Yoga Quest</p>
                <p className="fd-pathway-cards__auth">Cecilia Sardeo</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/f8659d0456/prog_beyond-fasting.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/fd276fe2d6/auth_ronan-diego-2-3-2.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Beyond Fasting</p>
                <p className="fd-pathway-cards__auth">Ronan Diego</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/fac6cff2ea/prog_the-immunity-blueprint.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/825503285f/auth_eric-edmeades-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The Immunity Blueprint</p>
                <p className="fd-pathway-cards__auth">Eric Edmeades</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/d168bd2a67/prog_body-first.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/4bed66170e/auth_lorenzo-delano-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Body First</p>
                <p className="fd-pathway-cards__auth">Lorenzo Delano, Jelena Lakic</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/308bec57f8/prog_smarter-not-harder.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/beff8b8a7c/auth_dave-asprey-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Smarter Not Harder</p>
                <p className="fd-pathway-cards__auth">Dave Asprey</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/293ad091ca/prog_the-ultimate-guide-to-supplements.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/9ba3d8933e/auth_shawn-wells-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The Ultimate Guide to Supplements</p>
                <p className="fd-pathway-cards__auth">Shawn Wells</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/67a0862293/prog_advanced-home-workouts.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/fd276fe2d6/auth_ronan-diego-2-3-2.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Advanced Home Workouts</p>
                <p className="fd-pathway-cards__auth">Ronan Diego</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/91049f4827/prog_total-transformation-training.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/0893911a8a/auth_christine-bullock-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Total Transformation Training</p>
                <p className="fd-pathway-cards__auth">Christine Bullock</p>
              </div>
            </div>
            <div className="fd-pathway-cards__page">
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/36da5548b2/prog_7-days-to-breaking-up-with-sugar.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/825503285f/auth_eric-edmeades-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">7 Days To Breaking Up With Sugar</p>
                <p className="fd-pathway-cards__auth">Eric Edmeades</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/7b5832cda1/prog_gut-health.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/94b9e47b52/auth_naveen-jain-2-3.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Gut Health for Better Mind, Body & Longevity</p>
                <p className="fd-pathway-cards__auth">Naveen Jain</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/645e00068b/prog_the-way-of-the-kettlebell.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/f84cac19ec/auth_steve-cotter-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The Way of the Kettlebell</p>
                <p className="fd-pathway-cards__auth">Steve Cotter</p>
              </div>
            </div>
          </div>
          <div className="fd-pathway-cards__nav">
            <button className="fd-pathway-cards__navbtn" type="button" data-nav="prev" aria-label="Previous programs in Enhancing Your Longevity"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M15.884 5.116a1.25 1.25 0 0 0-1.768 0l-6 6a1.25 1.25 0 0 0 0 1.768l6 6a1.25 1.25 0 0 0 1.768-1.768L10.768 12l5.116-5.116a1.25 1.25 0 0 0 0-1.768"></path></svg></button>
            <button className="fd-pathway-cards__navbtn" type="button" data-nav="next" aria-label="More programs in Enhancing Your Longevity"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M9.884 5.116a1.25 1.25 0 1 0-1.768 1.768L13.232 12l-5.116 5.116a1.25 1.25 0 0 0 1.768 1.768l6-6a1.25 1.25 0 0 0 0-1.768z"></path></svg></button>
          </div>
        </div>
      </div>
    </article>

    
    <article className="fd-pathway-cards__block fd-pathway-cards__block--mystic">
      <div className="fd-pathway-cards__left">
        <img className="fd-pathway-cards__hero" src="https://a.storyblok.com/f/312081/1920x1080/9a8b8e653d/pathway_themodernmystic-keyart.webp/m/830x0/filters:format(webp):quality(80)" alt="The Modern Mystic Pathway" width="461" height="259" loading="lazy" decoding="async" />
        <div className="fd-pathway-cards__body">
          <div className="fd-pathway-cards__text">
          <div className="fd-pathway-cards__head">
            <p className="fd-pathway-cards__eyebrow">THE MODERN MYSTIC</p>
            <h3 className="fd-pathway-cards__title">Awakening Your Consciousness</h3>
          </div>
          <p className="fd-pathway-cards__desc">There is more to life than what your eyes can see. Awaken your intuition and discover a deeper connection to yourself, others, and reality.</p>
          <ul className="fd-pathway-cards__list">
            <li className="fd-pathway-cards__item"><svg className="fd-pathway-cards__check" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkMystic)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg><span>Strengthen your intuition and inner guidance</span></li>
            <li className="fd-pathway-cards__item"><svg className="fd-pathway-cards__check" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkMystic)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg><span>Experience greater presence, peace, and clarity</span></li>
            <li className="fd-pathway-cards__item"><svg className="fd-pathway-cards__check" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="url(#fdPwChkMystic)" d="M20.884 5.116a1.25 1.25 0 0 0-1.768 0L9 15.232l-4.116-4.116a1.25 1.25 0 0 0-1.768 1.768l5 5a1.25 1.25 0 0 0 1.768 0l11-11a1.25 1.25 0 0 0 0-1.768"></path></svg><span>Expand your consciousness and sense of purpose</span></li>
          </ul>
          </div>
          <a className="fd-pathway-cards__btn" href="https://www.mindvalley.com/pathways/modern-mystic" aria-label="Explore This Pathway: Modern Mystic">Explore This Pathway</a>
        </div>
      </div>
      <div className="fd-pathway-cards__right">
        <div className="fd-pathway-cards__carousel">
          <div className="fd-pathway-cards__track" tabIndex="0" role="group" aria-label="The Modern Mystic Pathway programs">
            <div className="fd-pathway-cards__page">
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/c94278670b/prog_duality.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/282d2deb4f/auth_jeffrey-allen-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Duality</p>
                <p className="fd-pathway-cards__auth">Jeffrey Allen</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/aade494ba0/prog_chakra-healing.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/33bebcc92b/auth_anodea-judith-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Chakra Healing</p>
                <p className="fd-pathway-cards__auth">Anodea Judith</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/6b3996a1d6/prog_experience-lucid-dreaming.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/514e27488d/auth_charley-morley-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Experience Lucid Dreaming</p>
                <p className="fd-pathway-cards__auth">Charlie Morley</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/420e623a37/prog_feng-shui-for-life.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/56789e788b/auth_marie-diamond-2-3-2.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Feng Shui for Life</p>
                <p className="fd-pathway-cards__auth">Marie Diamond</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/d3655e200a/prog_quantum-jumping.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/591619cd57/auth_burt-goldman-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Quantum Jumping</p>
                <p className="fd-pathway-cards__auth">Burt Goldman</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/8fea331253/prog_the-art-of-astral-projection.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/422c7c72d2/auth_jade-shaw-2-3-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The Art of Astral Projection</p>
                <p className="fd-pathway-cards__auth">Jade Shaw</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/c1ff1ebd27/prog_the-art-of-manifesting.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/83fd9d2e9f/auth_regan-hillyer-2-3-2.webp/m/564x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The Art of Manifesting</p>
                <p className="fd-pathway-cards__auth">Regan Hillyer</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/ab87cbc128/prog_unlocking-transcendence.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/282d2deb4f/auth_jeffrey-allen-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Unlocking Transcendence</p>
                <p className="fd-pathway-cards__auth">Jeffrey Allen</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/48b8944f7e/prog_energy-medicine.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/08a3a7ff05/auth_donna-eden-1-1.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Energy Medicine</p>
                <p className="fd-pathway-cards__auth">Donna Eden</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/bcb565b404/prog_awaken-the-species.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/caa2aa979e/auth_neale-donald-walsch-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Awaken the Species</p>
                <p className="fd-pathway-cards__auth">Neale Donald Walsch</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/f84667ae9e/prog_mystic-brain.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/eea92fb1e0/auth_dawson-church-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Mystic Brain</p>
                <p className="fd-pathway-cards__auth">Dawson Church</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/66ddfff5e3/prog_sixth-sense-superpower.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/f1d155f86a/auth_sonia-choquette-2-3-2.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Sixth Sense Superpower</p>
                <p className="fd-pathway-cards__auth">Sonia Choquette</p>
              </div>
            </div>
            <div className="fd-pathway-cards__page">
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/a1e193b89b/prog_unlimited-abundance.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/4e6af569d9/auth_christie-marie-sheldon-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Unlimited Abundance</p>
                <p className="fd-pathway-cards__auth">Christie Marie Sheldon</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/cedba66ef9/prog_a-journey-to-infinitheism.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/67384b9c5f/auth_mahatria-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">A Journey to Infinitheism</p>
                <p className="fd-pathway-cards__auth">Mahatria</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/333fe01eb7/prog_a-yogi-s-guide-to-joy.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/09981ff70d/auth_sadhguru-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">A Yogi's Guide to Joy</p>
                <p className="fd-pathway-cards__auth">Sadhguru</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/e3736d81e2/prog_breathwork-for-life.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/13c3c07f9c/auth_niraj-naik-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Breathwork for Life</p>
                <p className="fd-pathway-cards__auth">Niraj Naik</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/74c15b6520/prog_higher-self-activation.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/ec00138ca2/auth_ariya-lorenz-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Higher Self Activation</p>
                <p className="fd-pathway-cards__auth">Ariya Lorenz</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/f941d30371/prog_speakingwithspirit.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/3f480f655e/auth_agapi-stassinopoulos-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Speaking With Spirit</p>
                <p className="fd-pathway-cards__auth">Agapi Stassinopoulos</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/34548ed708/prog_the-unbound-self.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/8accdc922c/auth_the-monroe-institute-2-3-2.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">The Unbound Self</p>
                <p className="fd-pathway-cards__auth">Monroe Institute</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/d391831d8f/prog_evolutionary-woman.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/14a026a7a7/auth_barbara-marx-hubbard-2-3.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Evolutionary Woman</p>
                <p className="fd-pathway-cards__auth">Barbara Marx Hubbard</p>
              </div>
              <div className="fd-pathway-cards__card">
                <div className="fd-pathway-cards__media">
                  <img className="fd-pathway-cards__cover" src="https://a.storyblok.com/f/312081/cc9db19566/prog_success-magic.webp/m/264x0/filters:format(webp):quality(80)" alt="" width="147" height="83" loading="lazy" decoding="async" />
                  <img className="fd-pathway-cards__face" src="https://a.storyblok.com/f/312081/56789e788b/auth_marie-diamond-2-3-2.webp/m/100x0/filters:format(webp):quality(80)" alt="" width="55" height="83" loading="lazy" decoding="async" />
                </div>
                <p className="fd-pathway-cards__prog">Success Magic</p>
                <p className="fd-pathway-cards__auth">Marie Diamond</p>
              </div>
            </div>
          </div>
          <div className="fd-pathway-cards__nav">
            <button className="fd-pathway-cards__navbtn" type="button" data-nav="prev" aria-label="Previous programs in Awakening Your Consciousness"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M15.884 5.116a1.25 1.25 0 0 0-1.768 0l-6 6a1.25 1.25 0 0 0 0 1.768l6 6a1.25 1.25 0 0 0 1.768-1.768L10.768 12l5.116-5.116a1.25 1.25 0 0 0 0-1.768"></path></svg></button>
            <button className="fd-pathway-cards__navbtn" type="button" data-nav="next" aria-label="More programs in Awakening Your Consciousness"><svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false"><path d="M9.884 5.116a1.25 1.25 0 1 0-1.768 1.768L13.232 12l-5.116 5.116a1.25 1.25 0 0 0 1.768 1.768l6-6a1.25 1.25 0 0 0 0-1.768z"></path></svg></button>
          </div>
        </div>
      </div>
    </article>
  </div>
</section>
  )
}
