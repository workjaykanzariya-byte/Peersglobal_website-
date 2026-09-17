'use client'

import React, { useState, useEffect } from 'react'
import {
  FileText,
  Plus,
  Search,
  Edit2,
  Trash2,
  X,
  Sparkles,
  Download,
  CheckCircle2,
  Clock,
  Eye,
  BookOpen,
  TrendingUp,
  User,
  Calendar,
  ExternalLink,
  ChevronRight,
  Filter,
} from 'lucide-react'

interface BlogPostItem {
  id: string
  title: string
  author: string
  pubDate: string
  status: 'Published' | 'Draft'
  excerpt: string
  content: string
  imageUrl: string
  views?: number
}

const DEFAULT_SAMPLE_BLOGS: BlogPostItem[] = [
  {
    id: 'B-101',
    title: 'The Future of Cross-Border Trade Alliances in 2026',
    author: 'Peers Global Editorial',
    pubDate: 'Sep 14, 2026',
    status: 'Published',
    excerpt: 'How modern promoter syndicates are leveraging decentralized cloud networks to reduce deal velocity times by over 40%.',
    content: 'Cross-border collaboration is undergoing a paradigm shift. In 2026, enterprise leaders are bypassing traditional sluggish intermediaries in favor of direct promoter circles...',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
    views: 4820,
  },
  {
    id: 'B-102',
    title: 'Building High-Trust Founder Circles for Global Scale',
    author: 'Ananya Roy (Head of ESG)',
    pubDate: 'Aug 28, 2026',
    status: 'Published',
    excerpt: 'Trust remains the primary currency of high-stakes joint ventures. Discover the frameworks governing elite promoter conclaves.',
    content: 'When multi-million dollar capital allocations are on the line, formal contracts are only half the battle. True velocity happens when underlying trust networks are bulletproof...',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80',
    views: 3150,
  },
  {
    id: 'B-103',
    title: 'ESG & Renewable Infrastructure: Q3 Investment Outlook',
    author: 'Rajesh Sharma (VP Alliances)',
    pubDate: 'Sep 02, 2026',
    status: 'Draft',
    excerpt: 'An inside look at clean energy venture syndicates across India, GCC, and European corridors.',
    content: 'Solar polymer grid connectors and decentralized industrial battery hubs are attracting record private syndicate volume this quarter...',
    imageUrl: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&auto=format&fit=crop&q=80',
    views: 120,
  },
]

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<BlogPostItem[]>([])
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<'all' | 'Published' | 'Draft'>('all')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [previewBlog, setPreviewBlog] = useState<BlogPostItem | null>(null)
  const [editingPost, setEditingPost] = useState<BlogPostItem | null>(null)

  const [formData, setFormData] = useState({
    title: '',
    author: 'Peers Global Editorial',
    pubDate: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
    status: 'Published' as 'Published' | 'Draft',
    content: '',
    imageUrl: '',
  })

  useEffect(() => {
    async function loadWebBlogs() {
      try {
        const res = await fetch('/api/web-blogs')
        if (res.ok) {
          const dbData = await res.json()
          if (Array.isArray(dbData) && dbData.length > 0) {
            const formatted = dbData.map((b: any, idx: number) => ({
              id: b.id ? String(b.id) : `B-${100 + idx}`,
              title: b.title || 'Untitled Article',
              author: b.author || 'Peers Global Editorial',
              pubDate: b.created_at ? new Date(b.created_at).toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }) : 'Sep 2026',
              status: (b.status === 'Draft' ? 'Draft' : 'Published') as 'Published' | 'Draft',
              excerpt: (b.content || '').slice(0, 150),
              content: b.content || '',
              imageUrl: b.image_url || 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80',
              views: 1200 + idx * 350,
            }))
            setBlogs(formatted.reverse())
            localStorage.setItem('peers_admin_blogs', JSON.stringify(formatted))
            return
          }
        }
      } catch (e) {
        console.error('Failed to sync DB web_blogs:', e)
      }

      // Local fallback
      const saved = localStorage.getItem('peers_admin_blogs')
      if (saved) {
        try {
          const parsed = JSON.parse(saved)
          if (Array.isArray(parsed) && parsed.length > 0) {
            setBlogs([...parsed].reverse())
            return
          }
        } catch {
          // Ignore
        }
      }

      // Default sample data
      setBlogs(DEFAULT_SAMPLE_BLOGS)
      localStorage.setItem('peers_admin_blogs', JSON.stringify(DEFAULT_SAMPLE_BLOGS))
    }
    loadWebBlogs()
  }, [])

  const handleExportJSON = () => {
    if (blogs.length === 0) {
      alert('No articles available to export.')
      return
    }
    const jsonStr = JSON.stringify(blogs, null, 2)
    const blob = new Blob([jsonStr], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `peers_blogs_export_${new Date().toISOString().split('T')[0]}.json`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const saveBlogsToStorage = async (updated: BlogPostItem[], newOrEditedItem?: BlogPostItem) => {
    setBlogs(updated)
    localStorage.setItem('peers_admin_blogs', JSON.stringify(updated))

    if (newOrEditedItem) {
      try {
        await fetch('/api/web-blogs', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: newOrEditedItem.title,
            author: newOrEditedItem.author,
            image_url: newOrEditedItem.imageUrl,
            content: newOrEditedItem.content,
            status: newOrEditedItem.status,
          }),
        })
      } catch (e) {
        console.error('Database write error:', e)
      }
    }
  }

  const handleOpenAddModal = () => {
    setEditingPost(null)
    setFormData({
      title: '',
      author: 'Peers Global Editorial',
      pubDate: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      status: 'Published',
      content: '',
      imageUrl: '',
    })
    setIsModalOpen(true)
  }

  const handleOpenEditModal = (post: BlogPostItem) => {
    setEditingPost(post)
    setFormData({
      title: post.title,
      author: post.author,
      pubDate: post.pubDate,
      status: post.status,
      content: post.content,
      imageUrl: post.imageUrl,
    })
    setIsModalOpen(true)
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this publication?')) {
      const updated = blogs.filter((b) => b.id !== id)
      saveBlogsToStorage(updated)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (editingPost) {
      const updatedItem: BlogPostItem = {
        ...editingPost,
        ...formData,
        excerpt: formData.content.slice(0, 150),
      }
      const updated = blogs.map((b) => (b.id === editingPost.id ? updatedItem : b))
      await saveBlogsToStorage(updated, updatedItem)
    } else {
      const newPost: BlogPostItem = {
        id: `B-${Date.now().toString().slice(-4)}`,
        ...formData,
        excerpt: formData.content.slice(0, 150),
        views: 1,
      }
      await saveBlogsToStorage([newPost, ...blogs], newPost)
    }
    setIsModalOpen(false)
  }

  const filteredBlogs = blogs.filter((b) => {
    const matchesSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase()) ||
      (b.content && b.content.toLowerCase().includes(search.toLowerCase()))
    const matchesStatus = statusFilter === 'all' || b.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const totalPublished = blogs.filter((b) => b.status === 'Published').length
  const totalDrafts = blogs.filter((b) => b.status === 'Draft').length
  const totalViews = blogs.reduce((acc, curr) => acc + (curr.views || 0), 0)

  return (
    <div className="space-y-8 font-sans pb-16 max-w-7xl mx-auto">
      {/* 1. TOP HEADER BANNER (MATCHING BRAND SYSTEM) */}
      <div className="relative overflow-hidden rounded-3xl bg-[#F0F5FD]/80 border border-[#DBEAFE] p-8 lg:p-10 shadow-xs">
        {/* Ambient background accent */}
        <div className="absolute top-0 right-10 w-96 h-96 bg-[#2563EB]/10 blur-[90px] rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            {/* Overline with Blue Hairline Rule */}
            <div className="flex items-center gap-2.5 text-[#2563EB] text-xs font-extrabold tracking-widest uppercase">
              <span className="w-7 h-[3px] bg-[#2563EB] rounded-full" />
              <span>PUBLICATIONS & BLOGS ENGINE</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight font-display text-[#101B35]">
              Publications & <span className="text-[#2563EB]">Blogs Manager.</span>
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#475569] font-medium leading-relaxed">
              Draft, publish, and manage thought leadership insights and market intelligence for the Peers Global community.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 self-start md:self-center">
            <button
              onClick={handleExportJSON}
              className="px-4 py-3 rounded-2xl bg-white hover:bg-slate-50 text-[#101B35] font-bold text-xs flex items-center gap-2 transition border border-[#DBEAFE] shadow-2xs cursor-pointer"
              title="Export all blogs data as JSON"
            >
              <Download className="w-4 h-4 text-[#2563EB]" />
              <span>Export JSON</span>
            </button>

            <button
              onClick={handleOpenAddModal}
              className="px-6 py-3.5 rounded-2xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold text-xs tracking-wider uppercase shadow-md shadow-[#2563EB]/25 transition-all hover:scale-[1.02] flex items-center gap-2 cursor-pointer border border-white/20"
            >
              <Plus className="w-4 h-4 stroke-[3]" />
              <span>+ CREATE ARTICLE</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. SUMMARY KPI STAT CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: Total Published */}
        <div className="relative overflow-hidden rounded-3xl bg-white p-6 border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#2563EB]/40 transition-all group">
          <div className="flex items-start justify-between">
            <div className="p-3.5 rounded-2xl bg-[#2563EB] text-white shadow-md shadow-[#2563EB]/20">
              <BookOpen className="w-6 h-6" />
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-extrabold px-3 py-1 rounded-full bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
              <CheckCircle2 className="w-3 h-3 text-[#2563EB]" />
              Live on Network
            </span>
          </div>
          <div className="mt-6">
            <p className="text-[11px] font-extrabold text-[#64748B] uppercase tracking-wider">Published Articles</p>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#101B35] tracking-tight font-display mt-1.5">
              {totalPublished} <span className="text-2xl sm:text-3xl font-black text-[#2563EB]">Posts</span>
            </h3>
          </div>
        </div>

        {/* Card 2: Total Views */}
        <div className="relative overflow-hidden rounded-3xl bg-white p-6 border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#2563EB]/40 transition-all group">
          <div className="flex items-start justify-between">
            <div className="p-3.5 rounded-2xl bg-[#101B35] text-white shadow-md shadow-[#101B35]/20">
              <Eye className="w-6 h-6" />
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-extrabold px-3 py-1 rounded-full bg-[#EFF6FF] text-[#2563EB] border border-[#BFDBFE]">
              <TrendingUp className="w-3 h-3" />
              Community Reads
            </span>
          </div>
          <div className="mt-6">
            <p className="text-[11px] font-extrabold text-[#64748B] uppercase tracking-wider">Total Impressions</p>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#101B35] tracking-tight font-display mt-1.5">
              {totalViews > 1000 ? `${(totalViews / 1000).toFixed(1)}K` : totalViews} <span className="text-2xl sm:text-3xl font-black text-[#2563EB]">Reads</span>
            </h3>
          </div>
        </div>

        {/* Card 3: Drafts */}
        <div className="relative overflow-hidden rounded-3xl bg-white p-6 border border-[#E2E8F0] shadow-xs hover:shadow-md hover:border-[#2563EB]/40 transition-all group">
          <div className="flex items-start justify-between">
            <div className="p-3.5 rounded-2xl bg-gradient-to-br from-[#1D4ED8] to-[#2563EB] text-white shadow-md shadow-[#2563EB]/20">
              <Clock className="w-6 h-6" />
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-extrabold px-3 py-1 rounded-full bg-[#F8FAFC] text-[#475569] border border-[#E2E8F0]">
              Pending Review
            </span>
          </div>
          <div className="mt-6">
            <p className="text-[11px] font-extrabold text-[#64748B] uppercase tracking-wider">Draft Articles</p>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-[#101B35] tracking-tight font-display mt-1.5">
              {totalDrafts} <span className="text-2xl sm:text-3xl font-black text-[#2563EB]">Drafts</span>
            </h3>
          </div>
        </div>
      </div>

      {/* 3. SEARCH BAR & STATUS TABS */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 bg-white border border-[#E2E8F0] rounded-3xl p-4 shadow-xs">
        {/* Search */}
        <div className="relative w-full lg:w-96">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by article title, author, or keyword..."
            className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl pl-11 pr-10 py-2.5 text-xs text-[#101B35] placeholder:text-slate-400 font-medium focus:outline-none focus:border-[#2563EB] focus:bg-white transition"
          />
          {search && (
            <button
              onClick={() => setSearch('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-0.5"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 w-full lg:w-auto overflow-x-auto">
          {(['all', 'Published', 'Draft'] as const).map((tab) => {
            const count = tab === 'all' ? blogs.length : blogs.filter((b) => b.status === tab).length
            const isActive = statusFilter === tab
            return (
              <button
                key={tab}
                onClick={() => setStatusFilter(tab)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold capitalize transition-all cursor-pointer whitespace-nowrap flex items-center gap-2 border ${
                  isActive
                    ? 'bg-[#2563EB] text-white border-transparent shadow-md shadow-[#2563EB]/20'
                    : 'bg-[#F8FAFC] text-[#475569] hover:bg-slate-100 hover:text-[#101B35] border-[#E2E8F0]'
                }`}
              >
                <span>{tab === 'all' ? 'All Articles' : tab}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-full text-[10px] font-extrabold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* 4. PUBLICATIONS TABLE (CLEAN LIGHT THEME) */}
      <div className="bg-white border border-[#E2E8F0] rounded-3xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#101B35]">
            <thead className="bg-[#F8FAFC] border-b border-[#E2E8F0] text-[#64748B] font-extrabold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-4 px-6">Article Details</th>
                <th className="py-4 px-4">Author</th>
                <th className="py-4 px-4">Publish Date</th>
                <th className="py-4 px-4">Status</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#E2E8F0]">
              {filteredBlogs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-12 text-center text-[#475569]">
                    <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="w-6 h-6 text-[#2563EB]" />
                    </div>
                    <p className="text-base font-bold text-[#101B35]">No Publications Found</p>
                    <p className="text-xs text-[#475569] mt-1 max-w-sm mx-auto">
                      We couldn&apos;t find any articles matching &quot;{search}&quot;. Create a new post to get started!
                    </p>
                    <button
                      onClick={handleOpenAddModal}
                      className="mt-4 px-4 py-2 rounded-xl bg-[#2563EB] text-white text-xs font-bold transition cursor-pointer"
                    >
                      + Create First Article
                    </button>
                  </td>
                </tr>
              ) : (
                filteredBlogs.map((post) => (
                  <tr key={post.id} className="hover:bg-[#F8FAFC] transition group">
                    <td className="py-4 px-6 max-w-md">
                      <div className="flex items-center gap-3">
                        {post.imageUrl && (
                          <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-11 h-11 rounded-xl object-cover border border-[#E2E8F0] shrink-0"
                          />
                        )}
                        <div>
                          <p
                            onClick={() => setPreviewBlog(post)}
                            className="font-bold text-[#101B35] group-hover:text-[#2563EB] transition cursor-pointer line-clamp-1"
                          >
                            {post.title}
                          </p>
                          <p className="text-[11px] text-[#475569] line-clamp-1 mt-0.5">{post.excerpt}</p>
                        </div>
                      </div>
                    </td>

                    <td className="py-4 px-4 whitespace-nowrap">
                      <div className="flex items-center gap-1.5 font-semibold text-[#101B35]">
                        <User className="w-3.5 h-3.5 text-[#2563EB]" />
                        <span>{post.author}</span>
                      </div>
                    </td>

                    <td className="py-4 px-4 whitespace-nowrap text-[#475569] font-medium">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-slate-400" />
                        <span>{post.pubDate}</span>
                      </div>
                    </td>

                    <td className="py-4 px-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold border ${
                          post.status === 'Published'
                            ? 'bg-[#EFF6FF] text-[#2563EB] border-[#BFDBFE]'
                            : 'bg-[#F8FAFC] text-[#475569] border-[#E2E8F0]'
                        }`}
                      >
                        {post.status === 'Published' ? (
                          <CheckCircle2 className="w-3 h-3 text-[#2563EB]" />
                        ) : (
                          <Clock className="w-3 h-3 text-[#475569]" />
                        )}
                        <span>{post.status}</span>
                      </span>
                    </td>

                    <td className="py-4 px-6 whitespace-nowrap text-right space-x-2">
                      <button
                        onClick={() => setPreviewBlog(post)}
                        className="p-2 rounded-xl bg-[#F8FAFC] hover:bg-[#EFF6FF] text-[#2563EB] transition border border-[#E2E8F0] cursor-pointer"
                        title="Preview Article"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => handleOpenEditModal(post)}
                        className="p-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white transition shadow-2xs cursor-pointer"
                        title="Edit Article"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => handleDelete(post.id)}
                        className="p-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 transition border border-red-200 cursor-pointer"
                        title="Delete Article"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. ARTICLE PREVIEW MODAL */}
      {previewBlog && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-[#E2E8F0] rounded-3xl max-w-2xl w-full p-6 lg:p-8 space-y-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setPreviewBlog(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {previewBlog.imageUrl && (
              <img
                src={previewBlog.imageUrl}
                alt={previewBlog.title}
                className="w-full h-48 rounded-2xl object-cover border border-[#E2E8F0]"
              />
            )}

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-lg bg-[#101B35] text-white font-mono text-xs font-bold">
                  {previewBlog.id}
                </span>
                <span className="px-2.5 py-0.5 rounded-lg bg-[#EFF6FF] text-[#2563EB] text-xs font-bold border border-[#BFDBFE]">
                  {previewBlog.status}
                </span>
                <span className="text-xs text-slate-400">• {previewBlog.pubDate}</span>
              </div>
              <h2 className="text-2xl font-black text-[#101B35] font-display">{previewBlog.title}</h2>
              <p className="text-xs font-semibold text-[#2563EB]">By {previewBlog.author}</p>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold text-[#64748B] uppercase tracking-wider">Full Content</h4>
              <p className="text-sm text-[#475569] leading-relaxed whitespace-pre-line">{previewBlog.content}</p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end gap-3">
              <button
                onClick={() => setPreviewBlog(null)}
                className="px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs transition cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. CREATE / EDIT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-[#E2E8F0] rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 lg:p-8 space-y-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#EFF6FF] text-[#2563EB]">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-[#101B35] font-display">
                    {editingPost ? 'Edit Publication' : 'Create New Article'}
                  </h3>
                  <p className="text-xs text-[#475569]">Publish leadership insights to the Peers Global network.</p>
                </div>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-[#101B35] font-bold mb-1.5">Article Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter publication headline..."
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3 text-[#101B35] focus:outline-none focus:border-[#2563EB] transition"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#101B35] font-bold mb-1.5">Author Name</label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3 text-[#101B35] focus:outline-none focus:border-[#2563EB] transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-[#101B35] font-bold mb-1.5">Publish Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                    className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3 text-[#101B35] focus:outline-none focus:border-[#2563EB] transition"
                  >
                    <option value="Published">Published (Live on Network)</option>
                    <option value="Draft">Draft (Internal Review)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[#101B35] font-bold mb-1.5">Featured Image URL</label>
                <input
                  type="text"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3 text-[#101B35] focus:outline-none focus:border-[#2563EB] transition"
                />
              </div>

              <div>
                <label className="block text-[#101B35] font-bold mb-1.5">Full Article Content</label>
                <textarea
                  rows={6}
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Write the publication content body here..."
                  className="w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3 text-[#101B35] focus:outline-none focus:border-[#2563EB] transition font-sans leading-relaxed"
                  required
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-slate-100 text-[#475569] font-bold transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold transition shadow-md shadow-[#2563EB]/20 cursor-pointer"
                >
                  {editingPost ? 'Save Article Changes' : 'Publish Article'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
