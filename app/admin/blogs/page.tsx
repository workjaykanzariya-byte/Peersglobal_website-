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
        } catch (e) {
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
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white flex items-center gap-2">
            <FileText className="w-6 h-6 text-amber-400" />
            Blogs Manager
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Create, edit, publish, and manage blog articles for Peers Global.
          </p>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={handleExportJSON}
            className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 font-semibold text-xs flex items-center gap-2 transition border border-slate-700 shadow-sm"
            title="Export all blogs data as JSON"
          >
            <Download className="w-4 h-4" />
            Export Blogs Data
          </button>

          <button
            onClick={handleOpenAddModal}
            className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs flex items-center gap-2 transition shadow-lg shadow-amber-500/20 shrink-0"
          >
            <Plus className="w-4 h-4" />
            Create New Article
          </button>
        </div>
      </div>

      {/* Search Bar */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
        <div className="relative w-full">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by article title or keyword..."
            className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
          />
        </div>
      </div>

      {/* Blogs Table */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-950 border-b border-slate-800 text-slate-400 font-semibold uppercase tracking-wider">
              <tr>
                <th className="p-4">Article</th>
                <th className="p-4">Author</th>
                <th className="p-4">Date</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {filteredBlogs.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-slate-500">
                    No articles found matching criteria.
                  </td>
                </tr>
              ) : (
                filteredBlogs.map((post) => (
                  <tr key={post.id} className="hover:bg-slate-800/40 transition">
                    <td className="p-4 max-w-xs">
                      <p className="font-semibold text-white truncate">{post.title}</p>
                    </td>
                    <td className="p-4 whitespace-nowrap text-slate-400">{post.author}</td>
                    <td className="p-4 whitespace-nowrap text-slate-400">{post.pubDate}</td>
                    <td className="p-4 whitespace-nowrap">
                      <span
                        className={`px-2.5 py-1 rounded-full text-[10px] font-semibold border ${
                          post.status === 'Published'
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                            : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                        }`}
                      >
                        {post.status}
                      </span>
                    </td>
                    <td className="p-4 whitespace-nowrap text-right space-x-2">
                      <button
                        onClick={() => handleOpenEditModal(post)}
                        className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition"
                        title="Edit Article"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition"
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
          <div className="bg-slate-900 border border-slate-800 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                {editingPost ? 'Edit Blog Article' : 'Create New Article'}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-semibold mb-1">Article Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter title..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-amber-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Author Name</label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-amber-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-semibold mb-1">Status</label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-amber-500"
                  >
                    <option value="Published">Published</option>
                    <option value="Draft">Draft</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Featured Image URL</label>
                <input
                  type="text"
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  placeholder="https://..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-semibold mb-1">Full Article Content</label>
                <textarea
                  rows={6}
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Write body content here..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-amber-500 font-mono"
                />
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold"
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
