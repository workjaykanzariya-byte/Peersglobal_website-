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
  ChevronLeft,
  ChevronDown,
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
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  // Form state
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
          body: JSON.stringify(newOrEditedItem),
        })
      } catch (e) {
        console.warn('DB sync error:', e)
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
      author: post.author || 'Peers Editorial',
      pubDate: post.pubDate || new Date().toISOString().split('T')[0],
      status: post.status || 'Published',
      content: post.content || '',
      imageUrl: post.imageUrl || '',
    })
    setIsModalOpen(true)
  }

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this publication?')) {
      const updated = blogs.filter((b) => b.id !== id)
      setBlogs(updated)
      localStorage.setItem('peers_admin_blogs', JSON.stringify(updated))

      try {
        await fetch(`/api/web-blogs?id=${id}`, { method: 'DELETE' })
      } catch (e) {
        console.warn('DB delete error:', e)
      }
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

  const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / itemsPerPage))
  const paginatedBlogs = filteredBlogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="space-y-6 font-sans pb-16">
      {/* 1. Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-[#E8ECF4] shadow-xs">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 text-[#4F46E5] text-[11px] font-semibold">
            <Sparkles className="w-3 h-3" />
            <span>Publications & Blogs Engine</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#1E293B] tracking-tight">
            Publications &amp; Blogs Manager
          </h1>
          <p className="text-xs text-slate-500">
            Draft, publish, and manage thought leadership insights and market intelligence for the Peers Global community.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={handleExportJSON}
            className="px-3.5 py-2 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center gap-2 transition border border-[#E2E8F0] shadow-xs cursor-pointer"
            title="Export all blogs data as JSON"
          >
            <Download className="w-4 h-4 text-[#4F46E5]" />
            <span>Export JSON</span>
          </button>

          <button
            onClick={handleOpenAddModal}
            className="px-4 py-2 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold shadow-xs transition-all flex items-center gap-2 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>+ Create Article</span>
          </button>
        </div>
      </div>

      {/* 2. Summary KPI Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Total Published */}
        <div
          onClick={() => setStatusFilter('Published')}
          className={`bg-white rounded-2xl p-5 border transition-all cursor-pointer shadow-xs ${
            statusFilter === 'Published' ? 'border-[#4F46E5] ring-2 ring-[#4F46E5]/10' : 'border-[#E8ECF4] hover:border-[#4F46E5]/40'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600">
              Live on Network
            </span>
          </div>
          <div className="mt-3">
            <p className="text-xs font-medium text-slate-500">Published Articles</p>
            <h3 className="text-2xl font-extrabold text-[#1E293B] font-display mt-0.5">{totalPublished}</h3>
          </div>
        </div>

        {/* Total Views */}
        <div className="bg-white rounded-2xl p-5 border border-[#E8ECF4] shadow-xs">
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-xl bg-blue-50 text-blue-500">
              <Eye className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">
              Community Reads
            </span>
          </div>
          <div className="mt-3">
            <p className="text-xs font-medium text-slate-500">Total Impressions</p>
            <h3 className="text-2xl font-extrabold text-[#1E293B] font-display mt-0.5">
              {totalViews > 1000 ? `${(totalViews / 1000).toFixed(1)}K` : totalViews}
            </h3>
          </div>
        </div>

        {/* Drafts */}
        <div
          onClick={() => setStatusFilter('Draft')}
          className={`bg-white rounded-2xl p-5 border transition-all cursor-pointer shadow-xs ${
            statusFilter === 'Draft' ? 'border-amber-500 ring-2 ring-amber-500/10' : 'border-[#E8ECF4] hover:border-amber-400'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="p-3 rounded-xl bg-amber-50 text-amber-600">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-50 text-amber-600">
              Pending Review
            </span>
          </div>
          <div className="mt-3">
            <p className="text-xs font-medium text-slate-500">Draft Articles</p>
            <h3 className="text-2xl font-extrabold text-[#1E293B] font-display mt-0.5">{totalDrafts}</h3>
          </div>
        </div>
      </div>

      {/* 3. Search Bar & Status Tabs */}
      <div className="bg-white border border-[#E8ECF4] rounded-2xl p-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by article title, author, or keyword..."
            className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl pl-10 pr-4 py-2 text-xs text-[#1E293B] placeholder:text-slate-400 focus:outline-none focus:border-[#4F46E5] transition"
          />
        </div>

        <div className="inline-flex items-center p-1 rounded-xl bg-[#F4F6FB] border border-[#E8ECF4] text-xs">
          {(['all', 'Published', 'Draft'] as const).map((tab) => {
            const count = tab === 'all' ? blogs.length : blogs.filter((b) => b.status === tab).length
            const isActive = statusFilter === tab
            return (
              <button
                key={tab}
                onClick={() => setStatusFilter(tab)}
                className={`px-3 py-1.5 rounded-lg font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                  isActive ? 'bg-white text-[#4F46E5] shadow-xs' : 'text-slate-500 hover:text-[#1E293B]'
                }`}
              >
                <span>{tab === 'all' ? 'All' : tab}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${isActive ? 'bg-indigo-50 text-[#4F46E5]' : 'bg-slate-200 text-slate-600'}`}>
                  {count}
                </span>
              </button>
            )
          })}
        </div>
      </div>

      {/* 4. Publications Table */}
      <div className="bg-white border border-[#E8ECF4] rounded-2xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#1E293B]">
            <thead className="bg-[#F8FAFC] border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3.5 px-4">Article Details</th>
                <th className="py-3.5 px-4">Author</th>
                <th className="py-3.5 px-4">Publish Date</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedBlogs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-12 text-center text-slate-500">
                    <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mx-auto mb-3">
                      <BookOpen className="w-6 h-6 text-[#4F46E5]" />
                    </div>
                    <p className="text-base font-bold text-[#1E293B]">No Publications Found</p>
                    <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                      We couldn&apos;t find any articles matching &quot;{search}&quot;. Create a new post to get started!
                    </p>
                    <button
                      onClick={handleOpenAddModal}
                      className="mt-4 px-4 py-2 rounded-xl bg-[#4F46E5] text-white text-xs font-bold transition cursor-pointer"
                    >
                      + Create First Article
                    </button>
                  </td>
                </tr>
              ) : (
                paginatedBlogs.map((post) => (
                  <tr key={post.id} className="hover:bg-[#F8FAFC] transition group">
                    <td className="py-3.5 px-4 max-w-md">
                      <div className="flex items-center gap-3">
                        {post.imageUrl && (
                          <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-10 h-10 rounded-xl object-cover border border-[#E8ECF4] shrink-0"
                          />
                        )}
                        <div>
                          <p
                            onClick={() => setPreviewBlog(post)}
                            className="font-bold text-[#1E293B] group-hover:text-[#4F46E5] transition cursor-pointer line-clamp-1"
                          >
                            {post.title}
                          </p>
                          <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{post.excerpt}</p>
                        </div>
                      </div>
                    </td>

                    <td className="py-3.5 px-4 whitespace-nowrap text-slate-600 font-medium">{post.author}</td>
                    <td className="py-3.5 px-4 whitespace-nowrap text-slate-400 font-medium">{post.pubDate}</td>
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${
                          post.status === 'Published'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border-amber-200'
                        }`}
                      >
                        {post.status === 'Published' ? (
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <Clock className="w-3 h-3 text-amber-600" />
                        )}
                        <span>{post.status}</span>
                      </span>
                    </td>
                    <td className="py-3.5 px-4 whitespace-nowrap text-right space-x-1.5">
                      <button
                        onClick={() => setPreviewBlog(post)}
                        className="p-1.5 rounded-lg bg-[#F8FAFC] hover:bg-indigo-50 text-[#4F46E5] transition border border-[#E8ECF4] cursor-pointer"
                        title="Preview Article"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => handleOpenEditModal(post)}
                        className="p-1.5 rounded-lg bg-[#F8FAFC] hover:bg-slate-100 text-slate-600 hover:text-[#4F46E5] transition border border-[#E8ECF4] cursor-pointer"
                        title="Edit Article"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => handleDelete(post.id)}
                        className="p-1.5 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 transition border border-red-200 cursor-pointer"
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

        {/* 5. Pagination and Items per page */}
        <div className="p-4 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <div className="relative">
              <select
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                className="bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl px-3 py-1.5 pr-7 text-xs font-semibold text-slate-700 focus:outline-none cursor-pointer"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
            </div>
            <span>items per page</span>
          </div>

          <div className="flex items-center gap-1.5 self-end sm:self-auto">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-1.5 rounded-lg bg-white border border-[#E8ECF4] text-slate-500 hover:text-[#4F46E5] hover:bg-slate-50 disabled:opacity-40 transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setCurrentPage(p)}
                className={`w-7 h-7 rounded-lg text-xs font-bold transition cursor-pointer ${
                  currentPage === p
                    ? 'bg-[#4F46E5] text-white shadow-xs'
                    : 'bg-white border border-[#E8ECF4] text-slate-700 hover:bg-slate-50'
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-1.5 rounded-lg bg-white border border-[#E8ECF4] text-slate-500 hover:text-[#4F46E5] hover:bg-slate-50 disabled:opacity-40 transition cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* 5. Article Preview Modal */}
      {previewBlog && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-[#E8ECF4] rounded-2xl max-w-2xl w-full p-6 space-y-5 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setPreviewBlog(null)}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {previewBlog.imageUrl && (
              <img
                src={previewBlog.imageUrl}
                alt={previewBlog.title}
                className="w-full h-48 rounded-xl object-cover border border-[#E8ECF4]"
              />
            )}

            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded-md bg-[#1E293B] text-white font-mono text-xs font-bold">
                  {previewBlog.id}
                </span>
                <span className="px-2 py-0.5 rounded-md bg-indigo-50 text-[#4F46E5] text-xs font-bold border border-indigo-100">
                  {previewBlog.status}
                </span>
                <span className="text-xs text-slate-400">• {previewBlog.pubDate}</span>
              </div>
              <h2 className="text-xl font-bold text-[#1E293B] font-display">{previewBlog.title}</h2>
              <p className="text-xs font-semibold text-[#4F46E5]">By {previewBlog.author}</p>
            </div>

            <div className="space-y-2 pt-2 border-t border-slate-100">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Full Content</h4>
              <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line max-h-60 overflow-y-auto">{previewBlog.content}</p>
            </div>

            <div className="pt-3 border-t border-slate-100 flex justify-end gap-3">
              <button
                onClick={() => setPreviewBlog(null)}
                className="px-4 py-2 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white font-bold text-xs transition cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. Create / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white border border-[#E8ECF4] rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 space-y-5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-bold text-[#1E293B] flex items-center gap-2 font-display">
                <Sparkles className="w-4 h-4 text-[#4F46E5]" />
                <span>{editingPost ? 'Edit Blog Article' : 'Create New Article'}</span>
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-700 font-bold mb-1">Article Title *</label>
                <input
                  type="text"
                  required
                  placeholder="Enter publication title..."
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl px-3.5 py-2 text-xs text-[#1E293B] focus:outline-none focus:border-[#4F46E5]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Author Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl px-3.5 py-2 text-xs text-[#1E293B] focus:outline-none focus:border-[#4F46E5]"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                    className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl px-3.5 py-2 text-xs text-[#1E293B] focus:outline-none focus:border-[#4F46E5]"
                  >
                    <option value="Published">Published (Live)</option>
                    <option value="Draft">Draft</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Cover Image URL</label>
                <input
                  type="text"
                  placeholder="https://images.unsplash.com/..."
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl px-3.5 py-2 text-xs text-[#1E293B] focus:outline-none focus:border-[#4F46E5]"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-1">Article Body Content *</label>
                <textarea
                  required
                  rows={6}
                  placeholder="Write the full publication insights here..."
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl p-3 text-xs text-[#1E293B] focus:outline-none focus:border-[#4F46E5] font-sans leading-relaxed"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-[#F8FAFC] border border-[#E8ECF4] text-slate-600 hover:text-[#1E293B] text-xs font-semibold transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-bold shadow-xs transition cursor-pointer"
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
