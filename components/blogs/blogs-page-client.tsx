'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, Share2, Heart, Sparkles, BookOpen, Clock, Tag as TagIcon } from 'lucide-react'
import { Card, Tag } from '@/components/site/ui'
import { useSearchParams } from 'next/navigation'

interface BlogPost {
  id: string
  title: string
  link?: string
  excerpt: string
  content?: string
  pubDate: string
  author: string
  category: string
  imageUrl?: string
  status?: string
}

function formatDate(raw: string) {
  try {
    return new Date(raw).toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })
  } catch {
    return raw
  }
}

export function BlogsPageClient() {
  const [blogs, setBlogs] = useState<BlogPost[]>([])
  const [activeBlog, setActiveBlog] = useState<BlogPost | null>(null)
  const [isSaved, setIsSaved] = useState(false)
  const [visibleLimit, setVisibleLimit] = useState(12)
  const searchParams = useSearchParams()
  const selectedId = searchParams.get('id')

  useEffect(() => {
    const saved = localStorage.getItem('peers_admin_blogs')
    if (saved) {
      try {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed)) {
          const published = parsed.filter((b: BlogPost) => b.status === 'Published' || !b.status)
          // Reverse existing uploaded list so latest shows first
          const reversed = [...published].reverse()
          setBlogs(reversed)
          
          if (selectedId) {
            const found = reversed.find((b: BlogPost) => b.id === selectedId)
            if (found) setActiveBlog(found)
          }
        }
      } catch (e) {
        setBlogs([])
      }
    }
  }, [selectedId])

  // Single Blog Detail Reader View (Greenpreneur style layout)
  if (activeBlog) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        {/* Peers Global Brand Hero Header */}
        <section className="bg-panel text-panel-foreground pt-24 pb-20 border-b border-panel-border relative overflow-hidden">
          <div className="shell max-w-4xl mx-auto flex flex-col gap-6 text-center relative z-10">
            <div>
              <button
                onClick={() => setActiveBlog(null)}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-white hover:text-white/80 transition uppercase tracking-widest bg-white/10 hover:bg-white/15 border border-white/20 px-4 py-2 rounded-full"
              >
                <ArrowLeft className="size-3.5 text-primary" />
                Back to Blogs
              </button>
            </div>

            <h1 className="display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-snug tracking-tight">
              {activeBlog.title}
            </h1>

            <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-panel-muted font-mono">
              <span className="flex items-center gap-1.5">
                <Calendar className="size-3.5 text-primary" />
                {formatDate(activeBlog.pubDate)}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <User className="size-3.5 text-primary" />
                {activeBlog.author || 'Peers Editorial'}
              </span>
            </div>
          </div>
        </section>

        {/* Centered Reading Canvas */}
        <main className="shell max-w-3xl mx-auto -mt-10 pb-24 relative z-10">
          <div className="bg-card border border-[var(--border)] rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-10 space-y-8">
            {/* Featured Hero Banner Image */}
            {activeBlog.imageUrl && (
              <div className="w-full rounded-2xl overflow-hidden bg-muted border border-[var(--border)] max-h-[480px] shadow-md">
                <img
                  src={activeBlog.imageUrl}
                  alt={activeBlog.title}
                  className="w-full h-full object-cover max-h-[480px]"
                />
              </div>
            )}

            {/* Article Content Paragraphs */}
            <article className="prose dark:prose-invert max-w-none text-muted-foreground text-base sm:text-lg leading-relaxed space-y-6">
              {activeBlog.content ? (
                activeBlog.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-foreground/90 whitespace-pre-line leading-relaxed">
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-foreground/90 leading-relaxed">
                  {activeBlog.excerpt || activeBlog.title}
                </p>
              )}
            </article>

            {/* Author Footer Card */}
            <div className="pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="size-12 rounded-full bg-primary/10 text-primary font-extrabold text-sm flex items-center justify-center border border-primary/20">
                  PG
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">{activeBlog.author || 'Peers Editorial'}</h4>
                  <p className="text-xs text-muted-foreground">Official Peers Global Contributor</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsSaved(!isSaved)}
                  className={`p-2.5 rounded-full border border-[var(--border)] transition-colors ${
                    isSaved ? 'bg-red-500/10 text-red-500 border-red-500/30' : 'hover:bg-muted text-muted-foreground'
                  }`}
                  title="Save Article"
                >
                  <Heart className={`size-4 ${isSaved ? 'fill-red-500' : ''}`} />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ title: activeBlog.title, url: window.location.href })
                    }
                  }}
                  className="p-2.5 rounded-full border border-[var(--border)] hover:bg-muted text-muted-foreground transition-colors"
                  title="Share Article"
                >
                  <Share2 className="size-4" />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    )
  }

  // Blog Cards Grid View
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Hero Header */}
      <section className="section bg-gradient-to-b from-[#0b1b3a] via-[#122347] to-background text-white border-b border-[var(--border)] pt-20 pb-20">
        <div className="shell flex flex-col gap-6 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center justify-center gap-2 px-4 py-1.5 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-bold uppercase tracking-wider mx-auto">
            <BookOpen className="size-3.5" />
            PEERS GLOBAL OFFICIAL BLOG
          </div>
          <h1 className="display text-3xl sm:text-5xl lg:text-6xl text-white font-semibold tracking-tight leading-snug">
            Blogs &amp;{' '}
            <span className="bg-gradient-to-r from-white via-amber-200 to-[#D4AF37] bg-clip-text text-transparent">
              Articles
            </span>
          </h1>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-2xl mx-auto">
            Thought leadership, scaling strategies, peer governance frameworks, and industry insights published by Peers Global.
          </p>
        </div>
      </section>

      {/* Blogs Grid */}
      <section className="section py-20 border-b border-[var(--border)]">
        <div className="shell flex flex-col gap-12">
          <div className="border-b border-[var(--border)] pb-6">
            <div>
              <span className="text-xs font-mono text-primary font-bold uppercase tracking-widest">
                Official Knowledge Hub
              </span>
              <h2 className="display text-2xl sm:text-3xl font-semibold text-foreground mt-1">
                Latest Articles &amp; Insights
              </h2>
            </div>
          </div>

          {blogs.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-20 border border-dashed border-[var(--border)] rounded-3xl bg-card p-8 space-y-4">
              <BookOpen className="size-12 text-muted-foreground" />
              <div className="space-y-1">
                <h3 className="display text-xl font-bold text-foreground">No custom blogs uploaded yet</h3>
                <p className="text-xs text-muted-foreground max-w-md">
                  Upload your articles through the Peers Global Admin Panel (`/admin/blogs`) to publish them here.
                </p>
              </div>
              <Link
                href="/admin/blogs"
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold transition shadow-md"
              >
                Go to Admin Blog Manager
              </Link>
            </div>
          ) : (
            <div className="flex flex-col gap-10">
              <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {blogs.slice(0, visibleLimit).map((blog) => (
                  <Card
                    as="li"
                    key={blog.id}
                    onClick={() => setActiveBlog(blog)}
                    className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[var(--border)] bg-card shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex flex-col gap-4 p-7">
                      {blog.imageUrl && (
                        <div className="relative h-48 w-full rounded-2xl overflow-hidden bg-muted border border-[var(--border)] mb-2">
                          <img
                            src={blog.imageUrl}
                            alt={blog.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      )}

                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs text-muted-foreground flex items-center gap-1 font-mono">
                          <Calendar className="size-3" />
                          {formatDate(blog.pubDate)}
                        </span>
                      </div>

                      <div className="flex flex-col gap-2">
                        <h3 className="display text-xl font-extrabold text-foreground group-hover:text-primary transition-colors leading-snug">
                          {blog.title}
                        </h3>
                        <p className="text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3">
                          {blog.content ? blog.content.replace(/<[^>]+>/g, '').slice(0, 160) + '…' : blog.excerpt}
                        </p>
                      </div>
                    </div>

                    <div className="mt-auto p-7 pt-4 border-t border-[var(--border)] bg-muted/30 flex items-center justify-between text-xs">
                      <span className="font-semibold text-muted-foreground flex items-center gap-1.5">
                        <User className="size-3.5 text-primary" />
                        {blog.author || 'Peers Editorial'}
                      </span>
                      <span className="inline-flex items-center gap-1 font-bold text-primary group-hover:underline">
                        Read Article →
                      </span>
                    </div>
                  </Card>
                ))}
              </ul>

              {visibleLimit < blogs.length && (
                <div className="flex items-center justify-center pt-4">
                  <button
                    type="button"
                    onClick={() => setVisibleLimit((prev) => prev + 12)}
                    className="px-8 py-3.5 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xs transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center gap-2"
                  >
                    <span>Load More Articles</span>
                    <span className="px-2 py-0.5 rounded-full bg-white/20 text-[10px] font-mono">
                      {blogs.length - visibleLimit} remaining
                    </span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
