import type { Metadata } from 'next'
import { ExternalLink, Rss, Calendar, User, ArrowUpRight, Newspaper, Sparkles } from 'lucide-react'
import { Card, Cta } from '@/components/site/ui'

export const metadata: Metadata = {
  title: 'Stories & Insights | Peers Global',
  description:
    'Latest posts, features, and stories from VyapaarJagat — the magazine for India\'s MSME operators, powered by Peers Global.',
}

interface VJPost {
  title: string
  link: string
  description: string
  pubDate: string
  creator: string
  category: string
  imageUrl: string | null
}

async function fetchVyapaarJagatPosts(): Promise<VJPost[]> {
  // Primary: Fetch live blog posts from peersglobal.com WordPress REST API
  try {
    const apiRes = await fetch('https://peersglobal.com/wp-json/wp/v2/posts?_embed&per_page=12', {
      next: { revalidate: 1800 },
    })

    if (apiRes.ok) {
      const data = await apiRes.json()
      if (Array.isArray(data) && data.length > 0) {
        return data.map((item: any) => {
          let imageUrl = item._embedded?.['wp:featuredmedia']?.[0]?.source_url || null
          if (!imageUrl && item.yoast_head_json?.og_image?.[0]?.url) {
            imageUrl = item.yoast_head_json.og_image[0].url
          }

          const rawExcerpt = item.excerpt?.rendered || item.content?.rendered || ''
          const cleanDesc = rawExcerpt
            .replace(/<[^>]+>/g, '')
            .replace(/&amp;/g, '&')
            .replace(/&#8211;/g, '–')
            .replace(/&#8217;/g, "'")
            .replace(/&#8230;/g, '…')
            .replace(/\[&hellip;\]/g, '…')
            .replace(/The post .+ appeared first on .+\./gi, '')
            .trim()

          const cleanTitle = (item.title?.rendered || '')
            .replace(/<[^>]+>/g, '')
            .replace(/&amp;/g, '&')
            .replace(/&#8211;/g, '–')
            .replace(/&#8217;/g, "'")
            .replace(/&#8230;/g, '…')
            .trim()

          return {
            title: cleanTitle,
            link: item.link || 'https://peersglobal.com/category/blog/',
            description: cleanDesc.slice(0, 160) + (cleanDesc.length > 160 ? '…' : ''),
            pubDate: item.date || new Date().toISOString(),
            creator: item._embedded?.author?.[0]?.name || 'Peers Global Editorial',
            category: item._embedded?.['wp:term']?.[0]?.[0]?.name || 'Blog',
            imageUrl: imageUrl,
          }
        })
      }
    }
  } catch (err) {
    console.error('Peers Global WP REST API fetch failed, trying VyapaarJagat API:', err)
  }

  // Fallback 1: VyapaarJagat REST API
  try {
    const apiRes = await fetch('https://vyapaarjagat.com/wp-json/wp/v2/posts?_embed&per_page=12', {
      next: { revalidate: 1800 },
    })

    if (apiRes.ok) {
      const data = await apiRes.json()
      if (Array.isArray(data) && data.length > 0) {
        return data.map((item: any) => {
          let imageUrl = item._embedded?.['wp:featuredmedia']?.[0]?.source_url || null
          if (!imageUrl && item.yoast_head_json?.og_image?.[0]?.url) {
            imageUrl = item.yoast_head_json.og_image[0].url
          }

          const rawExcerpt = item.excerpt?.rendered || item.content?.rendered || ''
          const cleanDesc = rawExcerpt
            .replace(/<[^>]+>/g, '')
            .replace(/&amp;/g, '&')
            .replace(/&#8211;/g, '–')
            .replace(/&#8217;/g, "'")
            .replace(/&#8230;/g, '…')
            .replace(/\[&hellip;\]/g, '…')
            .replace(/The post .+ appeared first on .+\./gi, '')
            .trim()

          const cleanTitle = (item.title?.rendered || '')
            .replace(/<[^>]+>/g, '')
            .replace(/&amp;/g, '&')
            .replace(/&#8211;/g, '–')
            .replace(/&#8217;/g, "'")
            .replace(/&#8230;/g, '…')
            .trim()

          return {
            title: cleanTitle,
            link: item.link || 'https://peersglobal.com/category/blog/',
            description: cleanDesc.slice(0, 160) + (cleanDesc.length > 160 ? '…' : ''),
            pubDate: item.date || new Date().toISOString(),
            creator: item._embedded?.author?.[0]?.name || 'Peers Global Editorial',
            category: item._embedded?.['wp:term']?.[0]?.[0]?.name || 'Blog',
            imageUrl: imageUrl,
          }
        })
      }
    }
  } catch (err) {
    console.error('VyapaarJagat API fetch failed, trying RSS fallback:', err)
  }

  // Fallback 2: Peers Global RSS Feed
  try {
    const rssRes = await fetch('https://peersglobal.com/category/blog/feed/', {
      next: { revalidate: 1800 },
    })
    if (!rssRes.ok) return []
    const xml = await rssRes.text()
    const items = xml.match(/<item>([\s\S]*?)<\/item>/g) || []

    return items.slice(0, 12).map((item) => {
      const get = (tag: string) => {
        const match = item.match(new RegExp(`<${tag}[^>]*>(?:<!\\[CDATA\\[)?([\\s\\S]*?)(?:\\]\\]>)?<\\/${tag}>`, 'i'))
        return match ? match[1].trim() : ''
      }

      const rawDesc = get('description')
      const cleanDesc = rawDesc
        .replace(/<[^>]+>/g, '')
        .replace(/&amp;/g, '&')
        .replace(/&#8211;/g, '–')
        .replace(/&#8217;/g, "'")
        .replace(/&#8230;/g, '…')
        .replace(/\[&hellip;\]/g, '…')
        .replace(/The post .+ appeared first on .+\./gi, '')
        .trim()

      const imgMatch = rawDesc.match(/src=["']([^"']+\.(?:jpg|jpeg|png|webp))["']/i)

      return {
        title: get('title')
          .replace(/&amp;/g, '&')
          .replace(/&#8211;/g, '–')
          .replace(/&#8217;/g, "'"),
        link: get('link'),
        description: cleanDesc.slice(0, 160) + (cleanDesc.length > 160 ? '…' : ''),
        pubDate: get('pubDate'),
        creator: get('dc:creator') || 'Peers Global Editorial',
        category: get('category') || 'Blog',
        imageUrl: imgMatch ? imgMatch[1] : null,
      }
    })
  } catch {
    return []
  }
}

function formatDate(raw: string) {
  try {
    return new Date(raw).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    })
  } catch {
    return raw
  }
}

export default async function StoriesPage() {
  const posts = await fetchVyapaarJagatPosts()

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* ─── HERO SECTION WITH VIDEO BACKGROUND ────────────────────────────────────── */}
      <section className="relative overflow-hidden text-white pt-24 pb-20 border-b border-white/5">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 size-full object-cover z-0"
        >
          <source src="/videos/stories-hero-bg.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay for readability */}
        <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[2px] z-10" />

        <div className="shell relative z-20 flex flex-col gap-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/15 backdrop-blur-md px-4 py-1.5 text-xs font-mono font-bold text-[#D4AF37] tracking-widest shadow-sm">
            <Rss className="size-3" />
            PEERS GLOBAL STORIES & INSIGHTS
          </div>

          <h1 className="display text-3xl sm:text-5xl lg:text-6xl font-semibold leading-snug tracking-tight text-white">
            One action. One life changed.<br />
            <span className="bg-gradient-to-r from-[#D4AF37] via-amber-200 to-white bg-clip-text text-transparent">
              That is how we count.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl font-light">
            Real stories of collaboration from members across India. We measure this community by what members give each other — not by how many members we have.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="https://peersglobal.com/category/blog/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#D4AF37] text-[#0b1b3a] px-5 py-2.5 text-sm font-bold hover:bg-amber-300 transition-colors shadow-lg"
            >
              <Newspaper className="size-4" />
              Read on Peers Global Blog
              <ExternalLink className="size-3.5" />
            </a>
            <a
              href="https://peersglobal.com/category/blog/feed/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 text-white px-5 py-2.5 text-sm font-bold hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              <Rss className="size-4" />
              Blog RSS Feed
            </a>
          </div>
        </div>
      </section>

      {/* ─── LIVE POSTS GRID WITH PERSON IMAGES ───────────────── */}
      <section className="py-20 border-b border-[var(--border)]">
        <div className="shell flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-xs font-mono text-primary uppercase tracking-widest font-bold">
                Latest Published Stories
              </span>
              <h2 className="display text-2xl sm:text-3xl font-semibold text-foreground tracking-tight leading-snug">
                Featured Founders &amp; Operators
              </h2>
            </div>
            {posts.length > 0 && (
              <a
                href="https://vyapaarjagat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-primary hover:text-primary/80 transition-colors"
              >
                View all stories
                <ArrowUpRight className="size-3.5" />
              </a>
            )}
          </div>

          {posts.length === 0 ? (
            /* Fallback if feed fails */
            <div className="flex flex-col items-center gap-6 py-20 text-center">
              <div className="flex size-16 items-center justify-center rounded-3xl bg-muted">
                <Rss className="size-8 text-muted-foreground" />
              </div>
              <div>
                <p className="text-lg font-bold text-foreground">Could not load live posts.</p>
                <p className="text-sm text-muted-foreground mt-1">
                  Visit{' '}
                  <a
                    href="https://vyapaarjagat.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary underline font-semibold"
                  >
                    vyapaarjagat.com
                  </a>{' '}
                  directly to browse all stories.
                </p>
              </div>
              <Cta href="https://vyapaarjagat.com" variant="primary">
                Open VyapaarJagat
                <ExternalLink className="size-4" />
              </Cta>
            </div>
          ) : (
            <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {posts.map((post, i) => (
                <li key={post.link + i}>
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col h-full rounded-3xl border border-[var(--border)] bg-card overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 cursor-pointer"
                  >
                    {/* Featured Person / Article Image Banner */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted/80 border-b border-[var(--border)]">
                      {post.imageUrl ? (
                        /* eslint-disable-next-line @next/next/no-img-element */
                        <img
                          src={post.imageUrl}
                          alt={post.title}
                          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex w-full h-full items-center justify-center bg-gradient-to-br from-[#0b1b3a] to-[#122347] text-white p-6 text-center">
                          <Sparkles className="size-10 text-[#D4AF37] opacity-60" />
                        </div>
                      )}

                      {/* Gradient Overlay for Image Text Contrast */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />

                      {/* Category Badge overlay */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center rounded-full bg-black/60 backdrop-blur-md border border-white/20 px-3 py-1 text-[0.65rem] font-mono font-bold text-white uppercase tracking-wider shadow-lg">
                          {post.category || 'Featured'}
                        </span>
                      </div>

                      {/* Published Date overlay */}
                      <div className="absolute bottom-3 right-3 z-10">
                        <span className="flex items-center gap-1.5 text-[0.65rem] font-mono font-bold text-white/90 bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                          <Calendar className="size-3 text-[#D4AF37]" />
                          {formatDate(post.pubDate)}
                        </span>
                      </div>
                    </div>

                    {/* Card Content Body */}
                    <div className="flex flex-col gap-3.5 p-6 flex-1 justify-between">
                      <div className="flex flex-col gap-2.5">
                        <h3 className="display text-lg font-bold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3">
                          {post.description}
                        </p>
                      </div>

                      {/* Author & External Link Footer */}
                      <div className="flex items-center justify-between gap-2 pt-4 border-t border-[var(--border)] mt-2">
                        <span className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                          <User className="size-3.5 text-primary" />
                          <span className="truncate max-w-[120px] sm:max-w-[140px]">{post.creator}</span>
                        </span>

                        <span className="inline-flex items-center gap-1 text-xs font-bold text-primary group-hover:text-primary/80 transition-colors">
                          Read Full Story
                          <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      {/* ─── ABOUT VYAPAARJAGAT SECTION ─────────────────────── */}
      <section className="py-16 border-b border-[var(--border)] bg-muted/30">
        <div className="shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="flex flex-col gap-5">
            <span className="inline-flex items-center gap-1.5 self-start rounded-full border border-primary/25 bg-primary/10 px-4 py-1 text-xs font-mono font-bold text-primary tracking-widest">
              MEDIA ARM
            </span>
            <h2 className="display text-2xl sm:text-3xl lg:text-4xl font-semibold text-[var(--ink)] tracking-tight leading-snug">
              VyapaarJagat — India's Platform for Entrepreneurs
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              VyapaarJagat has covered India's MSME operators since 2015. Ten years of covering operators — not headlines — built the relationships that Peers Global was later built on. The same audience. The same values. One ecosystem.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '12+', label: 'Magazine Issues' },
                { value: '25+', label: 'Videos' },
                { value: '24+', label: 'Podcast Episodes' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col gap-1 rounded-2xl border border-[var(--border)] bg-card p-4 text-center shadow-sm">
                  <span className="text-xl sm:text-2xl font-semibold text-primary">{s.value}</span>
                  <span className="text-[0.65rem] font-mono text-muted-foreground uppercase tracking-wider">{s.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="rounded-3xl border border-[var(--border)] bg-card p-7 shadow-sm flex flex-col gap-4">
              <Newspaper className="size-8 text-primary" />
              <h3 className="font-bold text-lg text-foreground">Read the Full Magazine</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Browse all features, entrepreneur interviews, industry reports, and Peers Global coverage directly on VyapaarJagat.
              </p>
              <a
                href="https://vyapaarjagat.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 self-start rounded-2xl bg-primary text-primary-foreground px-5 py-2.5 text-sm font-bold hover:bg-primary/90 transition-colors shadow-md"
              >
                vyapaarjagat.com
                <ExternalLink className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
