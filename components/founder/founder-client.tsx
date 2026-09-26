'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ChevronRight,
  Quote,
  Sparkles,
  HeartHandshake,
  Building2,
  Globe2,
  Award,
  Mic2,
  CheckCircle2,
  Users,
  Compass,
  TrendingUp,
  ShieldCheck,
  Calendar,
  Layers,
} from 'lucide-react'

export function FounderClient() {
  const [heroVideo, setHeroVideo] = useState('/videos/homepage-hero-bg.mp4')

  useEffect(() => {
    const loadVideo = () => {
      try {
        const saved = localStorage.getItem('peers_admin_page_media')
        if (saved) {
          const items = JSON.parse(saved)
          const target = items.find(
            (i: any) =>
              (i.pageSlug === '/founder' ||
                i.pageId === 'founder' ||
                i.pageName === 'Dr. Pravin Parmar' ||
                i.pageSlug === '/' ||
                i.pageId === 'home') &&
              i.mediaType === 'video' &&
              i.mediaUrl
          )
          if (target && target.mediaUrl) {
            setHeroVideo(target.mediaUrl)
          }
        }
      } catch {
        // Fallback
      }
    }

    loadVideo()
    window.addEventListener('storage', loadVideo)
    return () => window.removeEventListener('storage', loadVideo)
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#EFF6FF] selection:text-[#0062D2] antialiased">
      {/* ─── Breadcrumbs ─── */}
      <div className="border-b border-slate-200/80 bg-white/80 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center gap-2 text-xs text-slate-500 font-medium">
          <Link href="/" className="hover:text-[#0062D2] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span>About</span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-900 font-bold">Dr. Pravin Parmar</span>
        </div>
      </div>

      {/* ─── Master Hero Card Banner ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F6F9FD] via-[#FAFBFD] to-white pt-6 sm:pt-8 pb-10 sm:pb-12 border-b border-slate-200/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-white border border-slate-200/90 shadow-[0_12px_40px_rgba(0,40,120,0.06)] overflow-hidden min-h-[500px] sm:min-h-[560px] lg:min-h-[600px] flex items-center">
            {/* Background Dr. Pravin Parmar Executive Portrait with Mist Mask */}
            <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[48%] pointer-events-none z-0 overflow-hidden bg-gradient-to-tr from-[#061836] via-[#0B2558] to-[#040E24]">
              <div
                className="relative w-full h-full"
                style={{
                  maskImage:
                    'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.08) 6%, rgba(0,0,0,0.6) 20%, black 40%)',
                  WebkitMaskImage:
                    'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.08) 6%, rgba(0,0,0,0.6) 20%, black 40%)',
                }}
              >
                <Image
                  src="/images/founder-new.png"
                  alt="Dr. Pravin Parmar — Founder of Peers Global"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover object-top sm:object-[center_12%]"
                  priority
                />
                {/* Cinematic subtle vignette gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#040E24]/90 via-transparent to-transparent hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/50 to-transparent lg:hidden" />
              </div>
            </div>

            {/* Subtle top right decorative script */}
            <div
              className="absolute top-6 right-8 hidden md:block text-2xl lg:text-3xl text-white/50 select-none pointer-events-none z-10 drop-shadow-sm"
              style={{ fontFamily: 'var(--font-script)' }}
            >
              People, Ideas, Partnerships, Impact
            </div>

            {/* Left Hero Content */}
            <div className="relative z-10 w-full lg:w-[58%] p-6 sm:p-10 lg:p-14 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/80 text-[11px] font-bold uppercase tracking-[0.22em] text-[#0062D2] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#0062D2]" />
                Founder, Peers Global
              </div>

              {/* Headline */}
              <div className="space-y-3">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-serif font-bold text-[#061836] tracking-tight leading-[1.08]">
                  Dr. Pravin <span className="italic text-[#1E4ED8]">Parmar</span>
                </h1>
                <p className="text-lg sm:text-xl font-serif text-slate-800 italic leading-relaxed font-normal">
                  Founder, Peers Global &amp; 1 Million Entrepreneurs International Forum
                </p>
              </div>

              {/* Core Quote Card */}
              <div className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#EFF6FF] via-[#F8FAFC] to-white border border-blue-100 shadow-2xs border-l-4 border-l-[#0062D2]">
                <Quote className="w-7 h-7 text-blue-400/25 absolute top-4 right-4" />
                <p className="text-base sm:text-lg font-serif italic text-[#061836] leading-relaxed pr-6">
                  &ldquo;I come from a very poor farmer family. But I do not come from a weak mindset. That difference has shaped everything.&rdquo;
                </p>
                <p className="mt-2.5 text-xs uppercase tracking-widest brand-gradient-text font-bold">
                  — Dr. Pravin Parmar
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Link
                  href="/unity"
                  className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#1D4ED8] to-[#E11D48] text-white text-xs sm:text-sm font-bold uppercase tracking-wider shadow-[0_4px_16px_rgba(0,98,210,0.25)] hover:shadow-[0_6px_22px_rgba(0,98,210,0.35)] transition-all active:scale-[0.98] overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Download Unity App
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 pointer-events-none" />
                </Link>

                <Link
                  href="/our-story"
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-700 text-xs sm:text-sm font-semibold border border-slate-300 shadow-xs hover:border-slate-400 transition-all active:scale-[0.98]"
                >
                  Read Our Story
                </Link>
              </div>
            </div>

            {/* Bottom-right Frosted Glass Live Badge */}
            <div className="hidden sm:flex absolute bottom-5 right-6 z-10 items-center gap-3 px-4 py-2.5 rounded-2xl bg-white/85 backdrop-blur-md border border-white/60 shadow-lg text-xs font-semibold text-[#061836]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#0062D2] animate-pulse" />
              <span>Visionary &amp; Community Architect</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Fast-Track Editorial Overview Bar ─── */}
      <section className="bg-[#FAFBFD] border-b border-slate-200/80 py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center sm:text-left">
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#0062D2] block">Origin</span>
              <span className="text-sm font-serif font-bold text-[#061836]">Botad, Gujarat</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#0062D2] block">Media Platform</span>
              <span className="text-sm font-serif font-bold text-[#061836]">VyapaarJagat.com</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#0062D2] block">Philanthropy</span>
              <span className="text-sm font-serif font-bold text-[#061836]">1M Forum Foundation</span>
            </div>
            <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-2xs">
              <span className="text-[10px] uppercase font-bold tracking-wider text-[#0062D2] block">Ecosystem</span>
              <span className="text-sm font-serif font-bold text-[#061836]">Peers Global &amp; Unity</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Chapter 1: From Farmer to Founder ─── */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            Chapter 01 &mdash; The Roots
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061836] leading-tight">
            From Farmer to Founder
          </h2>
          <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
            <p className="text-lg sm:text-xl font-serif text-[#061836] font-medium leading-relaxed">
              Dr. Pravin Parmar&apos;s journey belongs to the second kind. He comes from a farmer family. He grew up with the experience of a farming life, studied in a government school, moved towards higher education, entered technology, became an entrepreneur—and eventually began building something that went beyond his own businesses.
            </p>
            <p>
              Today, he is the Founder of PEERS GLOBAL. But that title tells only one part of his story. To understand what he is building, it helps to understand the journey that brought him here.
            </p>
            <p>
              Even today, Dr. Pravin describes himself as a farmer. It is not simply a description of where he came from. It is part of how he sees life. A farmer understands that what you invest today may not produce its result immediately. You prepare. You learn. You work. You wait. You adapt. And you continue.
            </p>
            <p>
              That way of thinking has remained with him through every stage of his entrepreneurial journey. He has also described himself as a lifelong student. Because for him, learning does not stop when education ends. It continues through experience. Through people. Through mistakes. Through markets. Through challenges. And through the process of building something that has never existed before.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Chapter 2: The Decision That Set the Direction ─── */}
      <section className="py-20 md:py-28 border-b border-slate-200/80 bg-[#FAFBFD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            Chapter 02 &mdash; Self-Determination
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061836] leading-tight">
            The decision that set the direction
          </h2>
          <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
            <p>
              One of the earliest turning points came during his school years. He was studying in a government school where English was not compulsory in the way he believed it would need to be for his higher studies. He had a choice. Stay with what was familiar. Or prepare himself for what he wanted to pursue later.
            </p>
            <p>
              He chose the second. He spoke with the principal and others, accepted the additional effort required, completed his 10th examination in English and subsequently moved into English-medium education for the next stage. He performed strongly. But the marks were not the most important part of that story. The important part was the decision.
            </p>
            <p>
              He had identified a future he wanted to prepare for—and changed his present accordingly. That became one of the early mindset shifts in his life.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Chapter 3: From Education to Technology ─── */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            Chapter 03 &mdash; Building the Future
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061836] leading-tight">
            From education to technology
          </h2>
          <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
            <p>
              His academic journey took him from his early schooling to higher education in Ahmedabad and then to an MCA. His professional career began in the technology ecosystem. He worked with Microsoft as an education evangelist and technofunctional consultant with a Microsoft Gold Partner company.
            </p>
            <p>
              Later came ERP implementation and a deeper understanding of enterprises and how businesses operate. Technology taught him systems. Business taught him complexity. Experience taught him that knowing something and building something are two very different things. Eventually, he wanted to build for himself.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Chapter 4: Building, Struggling, Learning ─── */}
      <section className="py-20 md:py-28 border-b border-slate-200/80 bg-[#FAFBFD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            Chapter 04 &mdash; Hard Truths
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061836] leading-tight">
            Building, struggling, learning
          </h2>
          <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
            <p>
              Around 2011, Dr. Pravin started his own venture in information technology. It was the beginning of a new chapter. And, as he later reflected, the entrepreneurial ecosystem was very different at that time. For a first-generation entrepreneur, many things were unfamiliar. Compliance. Processes. Structures. The startup ecosystem itself. He entered anyway. Because sometimes entrepreneurship begins before you have all the answers.
            </p>
            <p>
              One of the ventures he built involved a cloud-based, mobile-based HRMS product. It was an early period for cloud technology, and there were uncertainties around the model and the technology. There were struggles. There were experiments. There were lessons. The product was also designed with Africa in mind. Eventually, Dr. Pravin came to another decision. The venture was sold to another company. He took an exit.
            </p>
            <p>
              That could have been the point at which the story ended. Instead, it created the next question: What next?
            </p>
            <p>
              After the exit, he wanted to share his story as a first-generation entrepreneur. He approached media platforms, including Times of India and Inc42. He sent his story. But it was not published. That experience stayed with him. Because he began to look at the situation differently. Perhaps the problem was not a shortage of entrepreneurial stories. Perhaps there were simply many stories that were never being heard.
            </p>
            <p>
              And that led to a larger belief: Every story is important. Every story is unique. Every story matters. That belief became part of the foundation for his work in entrepreneurial recognition and later contributed to the thinking behind PEERS GLOBAL.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Chapter 5: Recognition & Learning ─── */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            Chapter 05 &mdash; The Founder&apos;s Belief
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061836] leading-tight">
            Recognition, learning and the deeper question
          </h2>
          <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
            <p>
              For Dr. Pravin, recognition is not merely a ceremony. It is about what recognition can do to a person. He recalls a moment from a VyapaarJagat Growth Show in Ahmedabad in 2020. A participant named Krina received recognition on stage. The recognition had an effect beyond the event. It changed how she was perceived within her family and social environment. She cried on the stage.
            </p>
            <p>
              For Dr. Pravin, moments like that demonstrated something important: People want to know that their journey matters. Not everyone needs publicity. But everyone can value being seen. And that distinction became increasingly important in his thinking.
            </p>
            <p>
              There is another characteristic Dr. Pravin repeatedly returns to: learning. He does not present entrepreneurship as a state in which someone eventually becomes complete. Instead, he describes entrepreneurship as a continuing process. The market changes. People change. Businesses change. Technology changes. And the entrepreneur has to keep learning.
            </p>
            <p>
              He has spoken about the need for regular homework, planning and study—even after achieving milestones. Success does not remove the need to learn. It increases the responsibility to keep learning.
            </p>
            <p>
              One of the ideas that emerges strongly from his journey is that people reconstruct themselves continuously. The person who starts something is not necessarily the same person who understands it five years later. Experience changes perspective. Markets change understanding. Challenges change priorities. People change. And therefore, the entrepreneur changes. For Dr. Pravin, this is not a weakness in the journey. It is part of the journey. You learn. You understand. You adapt. You reconstruct. You continue.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Chapter 6: From Entrepreneurship to Community ─── */}
      <section className="py-20 md:py-28 border-b border-slate-200/80 bg-[#FAFBFD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            Chapter 06 &mdash; The Community Question
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061836] leading-tight">
            From entrepreneurship to community
          </h2>
          <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
            <p>
              The next stage of the journey required a different kind of learning. Before creating PEERS GLOBAL, Dr. Pravin studied and experienced different communities and models, including TiE, BNI, Rotary, Lions, EO, YPO, Vistage and Round Tables. The objective was to understand what already existed—and where something was still missing.
            </p>
            <p>
              The conclusion was not that existing communities were wrong. It was that there was an opportunity to build something with a different centre of gravity. Not simply networking. Collaboration. Not merely connecting people. Building trusted relationships. Not only business growth. Learning, Sharing and Relationships. That became LSR. And LSR became one of the foundations of PEERS GLOBAL.
            </p>
            <p>
              The organisation that emerged from this thinking was not intended to be simply another networking platform. It was designed as a community of collaboration. A place where entrepreneurs could meet people from relevant industries and purposes. A place where experience could be shared. A place where relationships could deepen. A place where collaboration could become a natural outcome of trust. And a place where an entrepreneur could gradually become more than a participant. A Peer.
            </p>
            <p>
              This is why the founder&apos;s own journey matters to the organisation. PEERS GLOBAL did not emerge from a theoretical model alone. It emerged from years of experiencing entrepreneurship from the inside.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Chapter 7: Why PEERS GLOBAL ─── */}
      <section className="py-20 md:py-28 bg-white border-b border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            Chapter 07 &mdash; Why PEERS GLOBAL
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061836] leading-tight">
            Why PEERS GLOBAL
          </h2>
          <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
            <p>
              At the centre of Dr. Pravin&apos;s philosophy is a simple understanding of entrepreneurship: An entrepreneur is not simply someone who owns a business. Entrepreneurship is a mindset. It is about identifying a problem, developing a solution and creating value for people and society.
            </p>
            <p>
              That belief changes the meaning of community. Because if entrepreneurship is about creating value, then an entrepreneurial community should also create value for its people. The ambition today is much larger than one organisation. PEERS GLOBAL has a stated mission to impact 1M+ entrepreneurs by 2030.
            </p>
            <p>
              But the purpose behind the number is more important than the number itself. The intention is to create a platform through which learning can move. Experience can move. Relationships can grow. Collaboration can happen. And one entrepreneur&apos;s progress can contribute to another entrepreneur&apos;s progress. That is the compounding effect Dr. Pravin wants to build.
            </p>
            <p>
              When Dr. Pravin speaks about entrepreneurship, his message is not that every person should have an easy journey. His own journey does not support that idea. Instead, his message is about accepting the reality of the journey and continuing to grow. He often brings this back to three simple principles: Never complain. Never make excuses. Never criticise. For him, these are not merely motivational statements. They reflect a mindset of accepting responsibility for one&apos;s own growth.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Chapter 8: The Person Behind the Founder ─── */}
      <section className="py-20 md:py-28 border-b border-slate-200/80 bg-[#FAFBFD]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            Chapter 08 &mdash; The Person
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061836] leading-tight">
            The person behind the founder
          </h2>
          <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
            <p>
              Beyond the title, there is a person who still identifies with the values that shaped his beginning. A farmer. A learner. An entrepreneur. A student of experience. A believer in recognition. A builder of communities. And someone who continues to learn.
            </p>
            <p>
              Perhaps that is why the story is more useful than the title. Because the title tells you what he is. The journey tells you why he is building what he is building.
            </p>
            <p>
              The question eventually becomes bigger than: “What business did I build?” It becomes: “What became possible for other people because I built it?” That is the direction in which Dr. Pravin&apos;s journey has evolved. From building technology. To building entrepreneurial platforms. From telling stories. To creating recognition. From connecting entrepreneurs. To creating collaboration. From creating a community. To creating an ecosystem designed around learning, sharing and relationships.
            </p>
            <p>
              The ambition is no longer only personal. It is collective. There is no claim here that the journey is finished. Quite the opposite. The founder continues to describe himself as a learner. And perhaps that is one of the most important things to understand about PEERS GLOBAL. It is being built by someone who does not believe the entrepreneur ever stops becoming.
            </p>
            <p>
              There is always something more to learn. Someone else to understand. A problem to solve. A relationship to build. A person to help. A better version of the idea to discover. FARMER. LEARNER. ENTREPRENEUR. FOUNDER. The journey from farmer to founder was not a journey away from where Dr. Pravin began. It was a journey that carried those beginnings forward. The patience of a farmer. The curiosity of a learner. The courage to experiment. The resilience to continue. The humility to learn again. And the belief that growth becomes more meaningful when it helps others grow too.
            </p>
            <p>
              That is the person behind PEERS GLOBAL. And that is the journey behind the founder.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Chapter 9: The Language ─── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest brand-gradient-text font-bold">
            <span className="w-6 h-[1.5px] bg-[#0062D2]" />
            Chapter 09 &mdash; The Language
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#061836] leading-tight">
            The language
          </h2>
          <div className="prose prose-lg text-slate-700 leading-relaxed font-normal space-y-5 max-w-none">
            <p>
              Every community that lasts builds a language of its own. A community becomes more than a collection of people when its members begin to share something deeper than a place or a purpose. They share a way of seeing. A way of speaking. A way of recognising one another. And, over time, a language of their own.
            </p>
            <p>
              At PEERS GLOBAL, our language is not created to make us sound different. It exists to help us express something different. Because when we use the word Peer, we mean more than a member. When we say Circle, we mean more than a meeting. When we say Give-First, we mean more than generosity. And when we say Life Impactor, we mean more than someone who has achieved something for themselves.
            </p>
            <p>
              These words describe the culture we are trying to build together.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Closing Banner ─── */}
      <section className="relative isolate overflow-hidden bg-[#040F24] text-white py-24 md:py-32">
        {/* Deep celestial radial gradients & luminous aura */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_50%,rgba(0,98,210,0.25),transparent_42%),radial-gradient(circle_at_82%_12%,rgba(56,189,248,0.18),transparent_36%),linear-gradient(115deg,#020817_0%,#071a3d_48%,#06132d_100%)]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-blue-600/20 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sky-400/15 blur-3xl"
        />

        {/* SVG Orbital Geometric Lines Background */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 w-[min(58vw,760px)] opacity-35">
          <svg viewBox="0 0 760 520" fill="none" className="h-full w-full" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M760 40C555 45 405 145 375 310C355 423 265 493 70 520" stroke="currentColor" strokeWidth="1" className="text-blue-300/30" />
            <path d="M760 120C590 125 470 205 445 335C424 442 335 500 180 520" stroke="currentColor" strokeWidth="1" strokeDasharray="5 8" className="text-sky-200/25" />
            <path d="M760 215C640 220 565 278 540 370C519 446 470 490 390 520" stroke="currentColor" strokeWidth="1" className="text-blue-200/20" />
            <circle cx="540" cy="370" r="4" fill="currentColor" className="text-sky-300/60" />
            <circle cx="540" cy="370" r="13" stroke="currentColor" strokeWidth="1" className="text-sky-300/25" />
          </svg>
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <p className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white leading-snug max-w-3xl mx-auto">
            &ldquo;The right circle can change your life faster than the right idea.&rdquo;
          </p>

          <div className="space-y-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white tracking-tight">
              Build Your Business. Build Your Relationships. Build Your Circle.
            </h2>
            <p className="text-base sm:text-lg text-white/80 font-normal max-w-xl mx-auto">
              Join thousands of verified entrepreneurs building together on the Unity App.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/unity"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#061836] hover:bg-slate-100 text-sm font-bold transition-all shadow-lg hover:shadow-xl active:scale-[0.98] uppercase tracking-wider"
            >
              Download Unity App
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/our-story"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/10 text-white text-sm font-semibold border border-white/20 hover:bg-white/20 transition-all active:scale-[0.98]"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
