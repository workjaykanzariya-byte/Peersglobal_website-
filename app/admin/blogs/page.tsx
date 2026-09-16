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
  CheckCircle,
  Clock,
  Eye,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
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

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<BlogPostItem[]>([])
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState<'All' | 'Published' | 'Draft'>('All')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPostItem | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    author: 'Peers Editorial',
    pubDate: new Date().toISOString().split('T')[0],
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
            setBlogs([...dbData].reverse())
            localStorage.setItem('peers_admin_blogs', JSON.stringify(dbData))
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
          if (Array.isArray(parsed)) {
            setBlogs([...parsed].reverse())
          }
        } catch {
          setBlogs([])
        }
      }
    }
    loadWebBlogs()
  }, [])

  const handleExportJSON = () => {
    if (blogs.length === 0) {
      alert('No blogs available to export.')
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

    // Sync to PostgreSQL DB if new item provided
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
      author: 'Peers Editorial',
      pubDate: new Date().toISOString().split('T')[0],
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
        id: String(Date.now()),
        ...formData,
        excerpt: formData.content.slice(0, 150),
      }
      await saveBlogsToStorage([newPost, ...blogs], newPost)
    }
    setIsModalOpen(false)
  }

  const totalArticles = blogs.length
  const publishedCount = blogs.filter((b) => b.status === 'Published').length
  const draftsCount = blogs.filter((b) => b.status === 'Draft').length
  const totalViews = blogs.reduce((acc, curr) => acc + (curr.views || 0), 0)

  const filteredBlogs = blogs.filter((b) => {
    const matchesSearch =
      b.title.toLowerCase().includes(search.toLowerCase()) ||
      b.author.toLowerCase().includes(search.toLowerCase()) ||
      (b.content && b.content.toLowerCase().includes(search.toLowerCase()))
    const matchesStatus = statusFilter === 'All' || b.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const totalPages = Math.max(1, Math.ceil(filteredBlogs.length / itemsPerPage))
  const paginatedBlogs = filteredBlogs.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  return (
    <div className="space-y-6 font-sans pb-16">
      {/* 1. Top Vibrant Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#1769FF] via-[#0055E6] to-[#08C7E8] text-white p-6 sm:p-7 shadow-lg shadow-[#1769FF]/20 flex flex-col md:flex-row md:items-center justify-between gap-5">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shrink-0 shadow-sm">
            <FileText className="w-7 h-7" />
          </div>
          <div className="space-y-0.5">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold tracking-tight text-white">
              Publications &amp; <span className="italic text-cyan-200 font-serif">Blogs Manager</span>
            </h1>
            <p className="text-xs sm:text-sm text-blue-100 font-normal">
              Draft, publish, and manage leadership insights for the Peers Global community.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0 self-start md:self-auto">
          <button
            onClick={handleExportJSON}
            className="px-4 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 backdrop-blur-md text-white border border-white/25 text-xs font-semibold flex items-center gap-2 transition cursor-pointer shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Export JSON</span>
          </button>

          <button
            onClick={handleOpenAddModal}
            className="px-4 py-2.5 rounded-xl bg-white text-[#1769FF] hover:bg-blue-50 text-xs font-bold flex items-center gap-2 transition cursor-pointer shadow-md"
          >
            <Plus className="w-4 h-4" />
            <span>Create Article</span>
          </button>
        </div>
      </div>

      {/* 2. Search Input */}
      <div className="bg-white rounded-2xl p-3 sm:p-3.5 border border-[#E2E8F4] shadow-xs">
        <div className="relative w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by article title, author, or keyword..."
            className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl pl-10 pr-4 py-2.5 text-xs text-[#101B35] placeholder:text-slate-400 focus:outline-none focus:border-[#1769FF] transition"
          />
        </div>
      </div>

      {/* 3. Four KPI Stat Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Articles */}
        <div
          onClick={() => setStatusFilter('All')}
          className={`bg-white rounded-2xl p-5 border transition-all cursor-pointer shadow-xs ${
            statusFilter === 'All' ? 'border-[#1769FF] ring-2 ring-[#1769FF]/10' : 'border-[#E2E8F4] hover:border-[#1769FF]/40'
          }`}
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#1769FF]/10 text-[#1769FF] flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-slate-500">Total Articles</p>
              <h3 className="text-2xl font-black text-[#101B35] font-display">{totalArticles}</h3>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
            <span>→</span>
            <span>All articles</span>
          </div>
        </div>

        {/* Published */}
        <div
          onClick={() => setStatusFilter('Published')}
          className={`bg-[#ECFDF5]/60 rounded-2xl p-5 border transition-all cursor-pointer shadow-xs ${
            statusFilter === 'Published' ? 'border-emerald-500 ring-2 ring-emerald-500/10' : 'border-emerald-200/80 hover:border-emerald-400'
          }`}
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/15 text-emerald-600 flex items-center justify-center shrink-0">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-emerald-800">Published</p>
              <h3 className="text-2xl font-black text-emerald-950 font-display">{publishedCount}</h3>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-emerald-200/60 flex items-center gap-1.5 text-[11px] text-emerald-700 font-medium">
            <span>→</span>
            <span>Live on website</span>
          </div>
        </div>

        {/* Drafts */}
        <div
          onClick={() => setStatusFilter('Draft')}
          className={`bg-[#FFFBEB]/70 rounded-2xl p-5 border transition-all cursor-pointer shadow-xs ${
            statusFilter === 'Draft' ? 'border-amber-500 ring-2 ring-amber-500/10' : 'border-amber-200/80 hover:border-amber-400'
          }`}
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-amber-500/15 text-amber-600 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-amber-800">Drafts</p>
              <h3 className="text-2xl font-black text-amber-950 font-display">{draftsCount}</h3>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-amber-200/60 flex items-center gap-1.5 text-[11px] text-amber-700 font-medium">
            <span>→</span>
            <span>In progress</span>
          </div>
        </div>

        {/* Total Views */}
        <div className="bg-[#FAF5FF]/70 rounded-2xl p-5 border border-purple-200/80 shadow-xs">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-xl bg-purple-500/15 text-purple-600 flex items-center justify-center shrink-0">
              <Eye className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-medium text-purple-800">Total Views</p>
              <h3 className="text-2xl font-black text-purple-950 font-display">{totalViews}</h3>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-purple-200/60 flex items-center gap-1.5 text-[11px] text-purple-700 font-medium">
            <span>→</span>
            <span>Global impressions</span>
          </div>
        </div>
      </div>

      {/* 4. Main Publications Table Card */}
      <div className="bg-white rounded-3xl border border-[#E2E8F4] overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#101B35]">
            <thead className="bg-[#F6F9FF] border-b border-[#E2E8F4] text-slate-500 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-4 px-5 w-10">
                  <input type="checkbox" className="rounded border-slate-300 text-[#1769FF] focus:ring-0 cursor-pointer" />
                </th>
                <th className="py-4 px-4 font-bold">ARTICLE TITLE</th>
                <th className="py-4 px-4 font-bold">AUTHOR</th>
                <th className="py-4 px-4 font-bold">PUBLISH DATE</th>
                <th className="py-4 px-4 font-bold">STATUS</th>
                <th className="py-4 px-5 text-right font-bold">ACTIONS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {paginatedBlogs.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-16 text-center">
                    <div className="flex flex-col items-center justify-center space-y-3">
                      <div className="w-16 h-16 rounded-2xl bg-blue-50 text-[#1769FF] flex items-center justify-center border border-blue-100">
                        <FileText className="w-8 h-8" />
                      </div>
                      <p className="text-base font-bold text-[#101B35]">No articles found matching criteria.</p>
                      <p className="text-xs text-slate-400 max-w-sm">
                        Click &ldquo;Create Article&rdquo; above to draft and publish your first post.
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                paginatedBlogs.map((post) => (
                  <tr key={post.id} className="hover:bg-[#F6F9FF] transition group">
                    <td className="py-4 px-5">
                      <input type="checkbox" className="rounded border-slate-300 text-[#1769FF] focus:ring-0 cursor-pointer" />
                    </td>
                    <td className="py-4 px-4 max-w-md">
                      <p className="font-bold text-[#101B35] group-hover:text-[#1769FF] transition truncate text-xs">
                        {post.title}
                      </p>
                      {post.excerpt && (
                        <p className="text-[11px] text-slate-400 truncate mt-0.5">{post.excerpt}</p>
                      )}
                    </td>
                    <td className="py-4 px-4 text-slate-600 font-medium whitespace-nowrap">{post.author}</td>
                    <td className="py-4 px-4 text-slate-500 whitespace-nowrap">{post.pubDate}</td>
                    <td className="py-4 px-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold border ${
                          post.status === 'Published'
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-amber-50 text-amber-700 border-amber-200'
                        }`}
                      >
                        {post.status === 'Published' ? (
                          <CheckCircle className="w-3 h-3" />
                        ) : (
                          <Clock className="w-3 h-3" />
                        )}
                        <span>{post.status}</span>
                      </span>
                    </td>
                    <td className="py-4 px-5 whitespace-nowrap text-right space-x-2">
                      <button
                        onClick={() => handleOpenEditModal(post)}
                        className="p-2 rounded-xl bg-[#F6F9FF] hover:bg-blue-50 text-slate-600 hover:text-[#1769FF] border border-[#E2E8F4] transition cursor-pointer"
                        title="Edit Article"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="p-2 rounded-xl bg-[#F6F9FF] hover:bg-red-50 text-slate-400 hover:text-red-500 border border-[#E2E8F4] transition cursor-pointer"
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
                className="appearance-none bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl px-3 py-1.5 pr-7 text-xs font-semibold text-slate-700 focus:outline-none cursor-pointer"
              >
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
            </div>
            <span>items per page</span>
          </div>

          <div className="flex items-center gap-1.5 self-end sm:self-auto">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-1.5 rounded-lg bg-white border border-[#E2E8F4] text-slate-500 hover:text-[#1769FF] hover:bg-[#F6F9FF] disabled:opacity-40 transition cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setCurrentPage(p)}
                className={`w-7 h-7 rounded-lg text-xs font-bold transition cursor-pointer ${
                  currentPage === p
                    ? 'bg-[#1769FF] text-white shadow-xs'
                    : 'bg-white border border-[#E2E8F4] text-slate-700 hover:bg-[#F6F9FF]'
                }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-1.5 rounded-lg bg-white border border-[#E2E8F4] text-slate-500 hover:text-[#1769FF] hover:bg-[#F6F9FF] disabled:opacity-40 transition cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Add / Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white border border-[#E2E8F4] rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h3 className="text-lg font-bold text-[#101B35] flex items-center gap-2 font-display">
                <Sparkles className="w-5 h-5 text-[#1769FF]" />
                <span>{editingPost ? 'Edit Blog Article' : 'Create New Article'}</span>
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="space-y-1.5">
                <label className="font-bold text-[#101B35] block">Article Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Navigating Scale: Key Takeaways from Conclave 2026"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl px-4 py-2.5 text-xs text-[#101B35] focus:outline-none focus:border-[#1769FF]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-bold text-[#101B35] block">Author / Entity</label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl px-4 py-2.5 text-xs text-[#101B35] focus:outline-none focus:border-[#1769FF]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-bold text-[#101B35] block">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                    className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl px-4 py-2.5 text-xs text-[#101B35] focus:outline-none focus:border-[#1769FF]"
                  >
                    <option value="Published">Published</option>
                    <option value="Draft">Draft</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-[#101B35] block">Cover Image URL</label>
                <input
                  type="text"
                  placeholder="https://images.unsplash.com/photo-..."
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl px-4 py-2.5 text-xs text-[#101B35] focus:outline-none focus:border-[#1769FF]"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-bold text-[#101B35] block">Article Body Content *</label>
                <textarea
                  required
                  rows={6}
                  placeholder="Write the full publication insights here..."
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl px-4 py-3 text-xs text-[#101B35] focus:outline-none focus:border-[#1769FF]"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#1769FF] to-[#08C7E8] text-white text-xs font-bold shadow-md shadow-[#1769FF]/20 hover:from-[#1357D6] hover:to-[#06ACC8] transition cursor-pointer"
                >
                  {editingPost ? 'Save Changes' : 'Publish Article'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
