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
  const [editingPost, setEditingPost] = useState<BlogPostItem | null>(null)

  // Form states without category or excerpt
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
      author: post.author,
      pubDate: post.pubDate,
      status: post.status,
      content: post.content,
      imageUrl: post.imageUrl,
    })
    setIsModalOpen(true)
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this blog post?')) {
      const updated = blogs.filter((b) => b.id !== id)
      saveBlogsToStorage(updated)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (editingPost) {
      const updatedItem = { ...editingPost, ...formData, excerpt: formData.content.slice(0, 150) }
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
            className="px-3.5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-xs flex items-center gap-2 transition border border-slate-800 shadow-sm"
            title="Export all blogs data as JSON"
          >
            <Download className="w-4 h-4 text-blue-400" />
            <span>Export JSON</span>
          </button>

          <button
            onClick={handleOpenAddModal}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#1E4ED8] to-[#1E3A8A] hover:from-[#2563EB] hover:to-[#1D4ED8] text-white font-semibold text-xs flex items-center gap-2 transition shadow-lg shadow-blue-600/25 shrink-0 cursor-pointer"
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
                          <CheckCircle className="w-3 h-3" />
                        ) : (
                          <Clock className="w-3 h-3" />
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
                        <Edit2 className="w-3.5 h-3.5 text-blue-400" />
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
      </div>

      {/* Add / Edit Modal */}
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
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1.5">Article Title</label>
                <input
                  type="text"
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

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800/80">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-slate-300 font-medium transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1E4ED8] to-[#1E3A8A] hover:from-[#2563EB] hover:to-[#1D4ED8] text-white font-semibold shadow-lg shadow-blue-600/25 transition cursor-pointer"
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
