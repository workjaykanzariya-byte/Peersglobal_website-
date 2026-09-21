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
}

export default function AdminBlogsPage() {
  const [blogs, setBlogs] = useState<BlogPostItem[]>([])
  const [search, setSearch] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [previewBlog, setPreviewBlog] = useState<BlogPostItem | null>(null)
  const [editingPost, setEditingPost] = useState<BlogPostItem | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  // Form states without category or excerpt
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

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
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

  const totalArticles = blogs.length
  const publishedCount = blogs.filter((b) => b.status === 'Published').length
  const draftsCount = blogs.filter((b) => b.status === 'Draft').length
  const totalViews = blogs.reduce((acc, curr) => acc + (curr.views || 0), 0)

  const filteredBlogs = blogs.filter((b) => {
    return b.title.toLowerCase().includes(search.toLowerCase()) || (b.content && b.content.toLowerCase().includes(search.toLowerCase()))
  })

  return (
    <div className="space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-blue-600/15 text-blue-400 border border-blue-500/20 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white font-display">Publications & Blogs Manager</h1>
              <p className="text-xs text-slate-400 mt-0.5">
                Draft, publish, and manage leadership insights for the Peers Global community.
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={handleExportJSON}
            className="px-3.5 py-2.5 rounded-full bg-[#0F172A] hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-xs flex items-center gap-2 transition border border-slate-800 shadow-sm"
            title="Export all blogs data as JSON"
          >
            <Download className="w-4 h-4 text-blue-400" />
            <span>Export JSON</span>
          </button>

          <button
            onClick={handleOpenAddModal}
            className="px-4 py-2.5 rounded-full bg-gradient-to-r from-[#1E4ED8] to-[#1E3A8A] hover:from-[#2563EB] hover:to-[#1D4ED8] text-white font-semibold text-xs flex items-center gap-2 transition shadow-lg shadow-blue-600/25 shrink-0 cursor-pointer"
          >
            <Plus className="w-4 h-4" />
            <span>Create Article</span>
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-[#0B1220]/80 border border-slate-800/90 rounded-2xl p-3.5 shadow-sm">
        <div className="relative w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by article title, author, or keyword..."
            className="w-full bg-[#070D18] border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-[#1E4ED8] focus:ring-1 focus:ring-[#1E4ED8]/30 transition"
          />
        </div>
      </div>

      {/* Blogs Table */}
      <div className="bg-[#0B1220]/80 border border-slate-800/90 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-[#070D18] border-b border-slate-800 text-slate-400 font-semibold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3.5 px-4">Article Title</th>
                <th className="py-3.5 px-4">Author</th>
                <th className="py-3.5 px-4">Publish Date</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredBlogs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-10 text-center text-slate-500">
                    <p className="text-sm font-medium">No articles found matching criteria.</p>
                    <p className="text-xs text-slate-600 mt-1">Click &ldquo;Create Article&rdquo; to publish your first post.</p>
                  </td>
                </tr>
              ) : (
                filteredBlogs.map((post) => (
                  <tr key={post.id} className="hover:bg-[#0F172A]/60 transition">
                    <td className="p-4 max-w-sm">
                      <p className="font-semibold text-white truncate hover:text-blue-400 transition">{post.title}</p>
                    </td>
                    <td className="p-4 whitespace-nowrap text-slate-400">{post.author}</td>
                    <td className="p-4 whitespace-nowrap text-slate-400">{post.pubDate}</td>
                    <td className="p-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold border ${post.status === 'Published'
                          ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                          : 'bg-blue-500/10 text-blue-400 border-blue-500/30'
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
                    <td className="p-4 whitespace-nowrap text-right space-x-1.5">
                      <button
                        onClick={() => handleOpenEditModal(post)}
                        className="p-1.5 rounded-lg bg-[#0F172A] hover:bg-slate-800 text-slate-300 hover:text-white transition border border-slate-800"
                        title="Edit Article"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>

                      <button
                        onClick={() => handleDelete(post.id)}
                        className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition border border-red-500/20"
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
                className={`w-7 h-7 rounded-lg text-xs font-bold transition cursor-pointer ${currentPage === p
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
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#0B1220] border border-slate-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2 font-display">
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>{editingPost ? 'Edit Blog Article' : 'Create New Article'}</span>
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1.5">Article Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Navigating Scale: Key Takeaways from Conclave 2026"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter publication title..."
                  className="w-full bg-[#070D18] border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-[#1E4ED8] focus:ring-1 focus:ring-[#1E4ED8]/30 transition"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1.5">Author Name</label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full bg-[#070D18] border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-[#1E4ED8] focus:ring-1 focus:ring-[#1E4ED8]/30 transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1.5">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                    className="w-full bg-[#070D18] border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-[#1E4ED8] focus:ring-1 focus:ring-[#1E4ED8]/30 transition"
                  >
                    <option value="Published">Published (Live)</option>
                    <option value="Draft">Draft</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1.5">Featured Image URL</label>
                <input
                  type="text"
                  placeholder="https://images.unsplash.com/photo-..."
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  placeholder="https://..."
                  className="w-full bg-[#070D18] border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-[#1E4ED8] focus:ring-1 focus:ring-[#1E4ED8]/30 transition"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1.5">Full Article Content</label>
                <textarea
                  rows={7}
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Write the publication body content here..."
                  className="w-full bg-[#070D18] border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-[#1E4ED8] focus:ring-1 focus:ring-[#1E4ED8]/30 transition font-sans leading-relaxed"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-slate-300 font-medium transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#1E4ED8] to-[#1E3A8A] hover:from-[#2563EB] hover:to-[#1D4ED8] text-white font-semibold shadow-lg shadow-blue-600/25 transition cursor-pointer"
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
