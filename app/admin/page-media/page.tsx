'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  MonitorPlay,
  Plus,
  Globe,
  HardDrive,
  Search,
  Filter,
  Copy,
  Check,
  Trash2,
  Edit,
  ExternalLink,
  Play,
  FileVideo,
  Image as ImageIcon,
  Sparkles,
  Layers,
  X,
  UploadCloud,
  CheckCircle2,
  AlertCircle,
  Video,
} from 'lucide-react'

export interface PageMediaItem {
  id: string
  pageName: string
  pageSlug: string
  sectionName: string
  title: string
  description?: string
  mediaType: 'video' | 'photo'
  sourceType: 'url' | 'localhost'
  mediaUrl: string
  thumbnailUrl?: string
  isActive: boolean
  createdAt: string
}

const WEBSITE_PAGES = [
  { name: 'Home Page', slug: '/' },
  { name: 'The Idea / Our World', slug: '/the-idea' },
  { name: 'Peer Circles', slug: '/circles' },
  { name: 'Conclaves & Events', slug: '/events' },
  { name: 'Dr. Pravin Parmar (Founder)', slug: '/founder' },
  { name: 'Leadership', slug: '/leadership' },
  { name: 'Unity App', slug: '/unity' },
  { name: 'Membership', slug: '/membership' },
  { name: 'Contact & Support', slug: '/contact' },
]

const PAGE_SECTIONS = [
  'Hero Background Header',
  'Featured Video Modal',
  'Section Banner Media',
  'Story & Impact Reel',
  'Gallery Showcase',
  'Footer Video Bar',
]

const INITIAL_PAGE_MEDIA: PageMediaItem[] = [
  {
    id: 'pm-1',
    pageName: 'Home Page',
    pageSlug: '/',
    sectionName: 'Hero Background Header',
    title: 'Peers Global Grand Launch & Conclave Reel',
    description: 'High energy ambient background video showing Indian promoters collaborating.',
    mediaType: 'video',
    sourceType: 'localhost',
    mediaUrl: '/videos/hero-bg.mp4',
    isActive: true,
    createdAt: '2026-08-01',
  },
  {
    id: 'pm-2',
    pageName: 'Dr. Pravin Parmar (Founder)',
    pageSlug: '/founder',
    sectionName: 'Featured Video Modal',
    title: 'Founder Keynote Address — Vyapaar Jagat Growth Summit',
    description: 'Dr. Pravin Parmar explaining the 10 Forms of Collaboration model.',
    mediaType: 'video',
    sourceType: 'url',
    mediaUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    isActive: true,
    createdAt: '2026-08-10',
  },
  {
    id: 'pm-3',
    pageName: 'Unity App',
    pageSlug: '/unity',
    sectionName: 'Section Banner Media',
    title: 'Unity App UI Walkthrough & Peer Discovery',
    description: 'Mobile app screen demonstration video for Android & iOS users.',
    mediaType: 'video',
    sourceType: 'localhost',
    mediaUrl: '/videos/unity-demo.mp4',
    isActive: true,
    createdAt: '2026-08-15',
  },
  {
    id: 'pm-4',
    pageName: 'Peer Circles',
    pageSlug: '/circles',
    sectionName: 'Story & Impact Reel',
    title: 'Circle Director Monthly Governed Meeting Photo',
    description: 'High resolution chapter leadership photograph.',
    mediaType: 'photo',
    sourceType: 'url',
    mediaUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1200&auto=format&fit=crop',
    isActive: true,
    createdAt: '2026-08-20',
  },
]

export default function AdminPageMediaManager() {
  const [items, setItems] = useState<PageMediaItem[]>([])
  const [selectedPageFilter, setSelectedPageFilter] = useState<string>('all')
  const [sourceFilter, setSourceFilter] = useState<'all' | 'url' | 'localhost'>('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState<'url' | 'localhost'>('url')
  const [editingItem, setEditingItem] = useState<PageMediaItem | null>(null)

  // Form State
  const [formPageName, setFormPageName] = useState(WEBSITE_PAGES[0].name)
  const [formSection, setFormSection] = useState(PAGE_SECTIONS[0])
  const [formTitle, setFormTitle] = useState('')
  const [formDescription, setFormDescription] = useState('')
  const [formMediaType, setFormMediaType] = useState<'video' | 'photo'>('video')
  const [formMediaUrl, setFormMediaUrl] = useState('')
  const [formLocalFileName, setFormLocalFileName] = useState('')
  const [formError, setFormError] = useState('')

  // Load items from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('peers_admin_page_media')
    if (saved) {
      try {
        setItems(JSON.parse(saved))
      } catch {
        setItems(INITIAL_PAGE_MEDIA)
      }
    } else {
      setItems(INITIAL_PAGE_MEDIA)
    }
  }, [])

  // Save to localStorage
  const saveItems = (newItems: PageMediaItem[]) => {
    setItems(newItems)
    localStorage.setItem('peers_admin_page_media', JSON.stringify(newItems))
  }

  // Open modal for URL mode
  const openUrlModal = (itemToEdit?: PageMediaItem) => {
    setModalMode('url')
    setFormError('')
    if (itemToEdit) {
      setEditingItem(itemToEdit)
      setFormPageName(itemToEdit.pageName)
      setFormSection(itemToEdit.sectionName)
      setFormTitle(itemToEdit.title)
      setFormDescription(itemToEdit.description || '')
      setFormMediaType(itemToEdit.mediaType)
      setFormMediaUrl(itemToEdit.mediaUrl)
      setFormLocalFileName('')
    } else {
      setEditingItem(null)
      setFormPageName(WEBSITE_PAGES[0].name)
      setFormSection(PAGE_SECTIONS[0])
      setFormTitle('')
      setFormDescription('')
      setFormMediaType('video')
      setFormMediaUrl('')
      setFormLocalFileName('')
    }
    setIsModalOpen(true)
  }

  // Open modal for Localhost mode
  const openLocalhostModal = (itemToEdit?: PageMediaItem) => {
    setModalMode('localhost')
    setFormError('')
    if (itemToEdit) {
      setEditingItem(itemToEdit)
      setFormPageName(itemToEdit.pageName)
      setFormSection(itemToEdit.sectionName)
      setFormTitle(itemToEdit.title)
      setFormDescription(itemToEdit.description || '')
      setFormMediaType(itemToEdit.mediaType)
      setFormMediaUrl(itemToEdit.mediaUrl)
      setFormLocalFileName(itemToEdit.mediaUrl)
    } else {
      setEditingItem(null)
      setFormPageName(WEBSITE_PAGES[0].name)
      setFormSection(PAGE_SECTIONS[0])
      setFormTitle('')
      setFormDescription('')
      setFormMediaType('video')
      setFormMediaUrl('')
      setFormLocalFileName('')
    }
    setIsModalOpen(true)
  }

  // Handle Local PC File Selection
  const handleLocalFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const isVid = file.type.includes('video')
    const fileName = file.name
    const generatedPath = isVid ? `/videos/${fileName}` : `/images/${fileName}`

    setFormMediaType(isVid ? 'video' : 'photo')
    setFormLocalFileName(fileName)
    setFormMediaUrl(URL.createObjectURL(file) || generatedPath)
    if (!formTitle) {
      setFormTitle(fileName.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '))
    }
  }

  // Form Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormError('')

    if (!formTitle.trim()) {
      setFormError('Please enter a title for this media asset.')
      return
    }

    if (!formMediaUrl.trim()) {
      if (modalMode === 'url') {
        setFormError('Please enter a valid video or image URL (YouTube, Vimeo, Web URL).')
      } else {
        setFormError('Please select or enter a video/photo file from This PC / Localhost.')
      }
      return
    }

    // Validation: Localhost mode must not accept external http(s) social links unless explicitly typed as local path
    if (modalMode === 'localhost' && (formMediaUrl.startsWith('http://') || formMediaUrl.startsWith('https://')) && !formMediaUrl.startsWith('blob:')) {
      setFormError('Localhost mode only accepts files from This PC or local workspace paths (/videos/..., /images/...). For web/YouTube links, click "+ Add External URL".')
      return
    }

    const targetPage = WEBSITE_PAGES.find((p) => p.name === formPageName) || WEBSITE_PAGES[0]

    if (editingItem) {
      const updated = items.map((item) =>
        item.id === editingItem.id
          ? {
              ...item,
              pageName: formPageName,
              pageSlug: targetPage.slug,
              sectionName: formSection,
              title: formTitle.trim(),
              description: formDescription.trim(),
              mediaType: formMediaType,
              sourceType: modalMode,
              mediaUrl: formMediaUrl.trim(),
            }
          : item
      )
      saveItems(updated)
    } else {
      const newItem: PageMediaItem = {
        id: `pm-${Date.now()}`,
        pageName: formPageName,
        pageSlug: targetPage.slug,
        sectionName: formSection,
        title: formTitle.trim(),
        description: formDescription.trim(),
        mediaType: formMediaType,
        sourceType: modalMode,
        mediaUrl: formMediaUrl.trim(),
        isActive: true,
        createdAt: new Date().toISOString().split('T')[0],
      }
      saveItems([newItem, ...items])
    }

    setIsModalOpen(false)
  }

  // Copy media link / path
  const handleCopy = (id: string, url: string) => {
    navigator.clipboard.writeText(url)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  // Toggle active status
  const toggleStatus = (id: string) => {
    const updated = items.map((item) => (item.id === id ? { ...item, isActive: !item.isActive } : item))
    saveItems(updated)
  }

  // Delete media item
  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to remove this media asset from this page?')) {
      const updated = items.filter((item) => item.id !== id)
      saveItems(updated)
    }
  }

  // Filtered List
  const filteredItems = items.filter((item) => {
    const matchesPage = selectedPageFilter === 'all' || item.pageName === selectedPageFilter
    const matchesSource = sourceFilter === 'all' || item.sourceType === sourceFilter
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.pageName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.sectionName.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesPage && matchesSource && matchesSearch
  })

  // Extract YouTube ID if applicable
  const getYouTubeEmbedUrl = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`
    }
    return null
  }

  return (
    <div className="space-y-6 font-sans pb-16">
      {/* 1. TOP HEADER & ACTIONS (PEERS UNITY STYLE) */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-[#E8ECF4] shadow-xs">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 text-[#4F46E5] text-[11px] font-semibold">
            <Sparkles className="w-3 h-3" />
            <span>Page Media Manager</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#1E293B] tracking-tight">
            Page Media Management
          </h1>
          <p className="text-xs text-slate-500 leading-relaxed max-w-xl">
            Assign videos and images to specific pages of Peers Global. Configure external YouTube/web links or direct video files from <span className="text-[#4F46E5] font-semibold">This PC / Localhost</span>.
          </p>
        </div>

        {/* TWO DEDICATED ACTION BUTTONS */}
        <div className="flex flex-wrap items-center gap-2.5">
          <button
            onClick={() => openUrlModal()}
            className="px-4 py-2 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold shadow-xs transition-all flex items-center gap-2 cursor-pointer"
          >
            <Globe className="w-4 h-4" />
            <span>+ Add External URL</span>
          </button>

          <button
            onClick={() => openLocalhostModal()}
            className="px-4 py-2 rounded-xl bg-[#059669] hover:bg-[#047857] text-white text-xs font-semibold shadow-xs transition-all flex items-center gap-2 cursor-pointer"
          >
            <HardDrive className="w-4 h-4" />
            <span>+ Add Localhost File (This PC)</span>
          </button>
        </div>
      </div>

      {/* 2. PAGE SELECTOR & FILTER BAR */}
      <div className="bg-white border border-[#E8ECF4] rounded-2xl p-4 lg:p-5 shadow-xs space-y-4">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
          {/* Select Page Name Dropdown & Search */}
          <div className="flex flex-col sm:flex-row items-center gap-3 flex-1">
            <div className="w-full sm:w-64">
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Select Website Page</label>
              <select
                value={selectedPageFilter}
                onChange={(e) => setSelectedPageFilter(e.target.value)}
                className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl px-3 py-2 text-xs font-semibold text-[#1E293B] focus:outline-none focus:border-[#4F46E5]"
              >
                <option value="all">All Pages ({items.length} Media)</option>
                {WEBSITE_PAGES.map((page) => (
                  <option key={page.name} value={page.name}>
                    {page.name} ({items.filter((i) => i.pageName === page.name).length})
                  </option>
                ))}
              </select>
            </div>

            <div className="w-full sm:flex-1">
              <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Search Media</label>
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by title, section, or page name..."
                  className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl pl-9 pr-3 py-2 text-xs text-[#1E293B] placeholder:text-slate-400 focus:outline-none focus:border-[#4F46E5]"
                />
              </div>
            </div>
          </div>

          {/* Source Type Filter */}
          <div>
            <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">Filter Source</label>
            <div className="inline-flex items-center p-1 rounded-xl bg-[#F4F6FB] border border-[#E8ECF4] text-xs">
              <button
                onClick={() => setSourceFilter('all')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition cursor-pointer ${
                  sourceFilter === 'all' ? 'bg-white text-[#4F46E5] shadow-xs' : 'text-slate-500'
                }`}
              >
                All Sources
              </button>
              <button
                onClick={() => setSourceFilter('url')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                  sourceFilter === 'url' ? 'bg-white text-[#4F46E5] shadow-xs' : 'text-slate-500'
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-[#4F46E5]" />
                <span>External URL</span>
              </button>
              <button
                onClick={() => setSourceFilter('localhost')}
                className={`px-3 py-1.5 rounded-lg font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                  sourceFilter === 'localhost' ? 'bg-white text-emerald-600 shadow-xs' : 'text-slate-500'
                }`}
              >
                <HardDrive className="w-3.5 h-3.5 text-emerald-600" />
                <span>Localhost PC</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. PAGE MEDIA GRID LIST */}
      {filteredItems.length === 0 ? (
        <div className="bg-white border border-[#E8ECF4] rounded-2xl p-12 text-center space-y-4 shadow-xs">
          <div className="w-16 h-16 rounded-full bg-indigo-50 text-[#4F46E5] flex items-center justify-center mx-auto">
            <MonitorPlay className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-base font-bold text-[#1E293B]">No Page Media Found</h3>
            <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
              No media items found for the selected page or filters. Click below to add new media to this page.
            </p>
          </div>
          <div className="flex items-center justify-center gap-3 pt-2">
            <button
              onClick={() => openUrlModal()}
              className="px-4 py-2 rounded-xl bg-[#4F46E5] text-white text-xs font-bold shadow-xs cursor-pointer"
            >
              + Add External URL
            </button>
            <button
              onClick={() => openLocalhostModal()}
              className="px-4 py-2 rounded-xl bg-[#059669] text-white text-xs font-bold shadow-xs cursor-pointer"
            >
              + Add Localhost File
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => {
            const ytEmbed = item.sourceType === 'url' ? getYouTubeEmbedUrl(item.mediaUrl) : null
            return (
              <div
                key={item.id}
                className="bg-white border border-[#E8ECF4] rounded-2xl p-5 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between space-y-4 group relative overflow-hidden"
              >
                <div>
                  {/* Top Badges */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-[#4F46E5] border border-indigo-100">
                      <Layers className="w-3 h-3" />
                      <span>{item.pageName}</span>
                    </span>

                    <div className="flex items-center gap-2">
                      {item.sourceType === 'url' ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-600 border border-blue-200">
                          <Globe className="w-3 h-3" />
                          <span>URL Link</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                          <HardDrive className="w-3 h-3" />
                          <span>Localhost PC</span>
                        </span>
                      )}

                      <button
                        onClick={() => toggleStatus(item.id)}
                        className={`w-3 h-3 rounded-full ${item.isActive ? 'bg-emerald-500' : 'bg-slate-300'}`}
                        title={item.isActive ? 'Active (Click to disable)' : 'Inactive (Click to activate)'}
                      />
                    </div>
                  </div>

                  {/* Media Preview Player / Frame */}
                  <div className="h-48 rounded-xl bg-[#0F172A] border border-slate-700 overflow-hidden relative flex items-center justify-center group/preview">
                    {item.mediaType === 'video' ? (
                      ytEmbed ? (
                        <iframe
                          src={ytEmbed}
                          title={item.title}
                          className="w-full h-full border-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : item.sourceType === 'localhost' || item.mediaUrl.endsWith('.mp4') || item.mediaUrl.startsWith('blob:') ? (
                        <video
                          src={item.mediaUrl}
                          controls
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="flex flex-col items-center justify-center text-center p-4 space-y-2">
                          <div className="w-12 h-12 rounded-full bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                            <FileVideo className="w-6 h-6" />
                          </div>
                          <span className="text-xs font-semibold text-white truncate max-w-full">{item.title}</span>
                          <span className="text-[10px] text-slate-400 font-mono truncate max-w-[200px]">
                            {item.mediaUrl}
                          </span>
                        </div>
                      )
                    ) : (
                      <img src={item.mediaUrl} alt={item.title} className="w-full h-full object-cover" />
                    )}

                    <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-black/75 backdrop-blur-md text-white text-[10px] font-semibold border border-white/20">
                      {item.sectionName}
                    </span>
                  </div>

                  {/* Details */}
                  <div className="mt-3 space-y-1">
                    <h3 className="text-sm font-bold text-[#1E293B] line-clamp-1">{item.title}</h3>
                    {item.description && (
                      <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">{item.description}</p>
                    )}
                  </div>
                </div>

                {/* Footer Controls */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => handleCopy(item.id, item.mediaUrl)}
                    className="flex-1 px-3 py-1.5 rounded-xl bg-[#F8FAFC] hover:bg-slate-100 text-[#1E293B] border border-[#E8ECF4] text-xs font-semibold flex items-center justify-center gap-1.5 transition cursor-pointer"
                  >
                    {copiedId === item.id ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 text-[11px]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span className="text-[11px]">Copy Path</span>
                      </>
                    )}
                  </button>

                  <Link
                    href={item.pageSlug}
                    target="_blank"
                    className="p-2 rounded-xl bg-[#F8FAFC] hover:bg-slate-100 text-slate-600 border border-[#E8ECF4] hover:text-[#4F46E5] transition"
                    title="View Live Page"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </Link>

                  <button
                    onClick={() => (item.sourceType === 'url' ? openUrlModal(item) : openLocalhostModal(item))}
                    className="p-2 rounded-xl bg-[#F8FAFC] hover:bg-slate-100 text-slate-600 border border-[#E8ECF4] hover:text-[#4F46E5] transition cursor-pointer"
                    title="Edit Media"
                  >
                    <Edit className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="p-2 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 border border-red-200 transition cursor-pointer"
                    title="Delete Media"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* 5. ADD / EDIT MEDIA MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl bg-white border border-[#E8ECF4] shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div
              className={`p-5 text-white ${
                modalMode === 'url'
                  ? 'bg-gradient-to-r from-[#1E1B4B] to-[#4F46E5]'
                  : 'bg-gradient-to-r from-[#064E3B] to-emerald-600'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md">
                    {modalMode === 'url' ? <Globe className="w-5 h-5 text-white" /> : <HardDrive className="w-5 h-5 text-white" />}
                  </div>
                  <div>
                    <h2 className="text-base font-bold">
                      {editingItem ? 'Edit Page Media' : modalMode === 'url' ? 'Add External Media (URL)' : 'Add Localhost Media (This PC)'}
                    </h2>
                    <p className="text-xs text-slate-200 mt-0.5">
                      {modalMode === 'url'
                        ? 'YouTube videos, Vimeo, or external social/web links'
                        : 'Upload or select direct video files from This PC'}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/20 text-white transition cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {formError && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {/* 1. Select Target Website Page */}
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-1">Target Website Page *</label>
                <select
                  value={formPageName}
                  onChange={(e) => setFormPageName(e.target.value)}
                  className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl px-3 py-2 text-xs font-semibold text-[#1E293B] focus:outline-none focus:border-[#4F46E5]"
                >
                  {WEBSITE_PAGES.map((p) => (
                    <option key={p.name} value={p.name}>
                      {p.name} ({p.slug})
                    </option>
                  ))}
                </select>
              </div>

              {/* 2. Select Page Section */}
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-1">Page Section / Placement *</label>
                <select
                  value={formSection}
                  onChange={(e) => setFormSection(e.target.value)}
                  className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl px-3 py-2 text-xs font-semibold text-[#1E293B] focus:outline-none focus:border-[#4F46E5]"
                >
                  {PAGE_SECTIONS.map((sec) => (
                    <option key={sec} value={sec}>
                      {sec}
                    </option>
                  ))}
                </select>
              </div>

              {/* 3. Media Title */}
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-1">Media Title *</label>
                <input
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="e.g. Hero Conclave Background Reel 2026"
                  className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl px-3.5 py-2 text-xs text-[#1E293B] focus:outline-none focus:border-[#4F46E5]"
                />
              </div>

              {/* 4. Media Type */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#101B35] mb-1">Media Format</label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setFormMediaType('video')}
                      className={`py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer border ${
                        formMediaType === 'video'
                          ? 'bg-[#1769FF] text-white border-[#1769FF]'
                          : 'bg-[#F6F9FF] text-slate-600 border-[#E2E8F4]'
                      }`}
                    >
                      <Video className="w-3.5 h-3.5" />
                      <span>Video</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setFormMediaType('photo')}
                      className={`py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer border ${
                        formMediaType === 'photo'
                          ? 'bg-[#1769FF] text-white border-[#1769FF]'
                          : 'bg-[#F6F9FF] text-slate-600 border-[#E2E8F4]'
                      }`}
                    >
                      <ImageIcon className="w-3.5 h-3.5" />
                      <span>Photo</span>
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#101B35] mb-1">Source Mode</label>
                  <div className="py-2 px-3 rounded-xl bg-slate-100 text-slate-700 text-xs font-bold flex items-center gap-2">
                    {modalMode === 'url' ? (
                      <>
                        <Globe className="w-3.5 h-3.5 text-[#1769FF]" />
                        <span>External URL</span>
                      </>
                    ) : (
                      <>
                        <HardDrive className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Localhost (This PC)</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* 5. URL vs Localhost Input Field */}
              {modalMode === 'url' ? (
                <div>
                  <label className="block text-xs font-bold text-[#101B35] mb-1">
                    YouTube / Social / Web Video Link (URL) *
                  </label>
                  <input
                    type="url"
                    value={formMediaUrl}
                    onChange={(e) => setFormMediaUrl(e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=... or https://vimeo.com/..."
                    className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl px-3.5 py-2 text-xs text-[#101B35] focus:outline-none focus:border-[#1769FF]"
                  />
                  <p className="text-[10px] text-slate-400 mt-1">
                    Supports YouTube, Vimeo, MP4 CDN links, or external image links.
                  </p>
                </div>
              ) : (
                <div>
                  <label className="block text-xs font-bold text-[#101B35] mb-1">
                    Select Media File from This PC / Localhost *
                  </label>

                  <div className="border-2 border-dashed border-emerald-200 hover:border-emerald-500 rounded-2xl p-4 text-center bg-emerald-50/50 relative cursor-pointer group">
                    <input
                      type="file"
                      accept="video/*,image/*"
                      onChange={handleLocalFileSelect}
                      className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    />
                    <div className="flex flex-col items-center justify-center space-y-2 pointer-events-none">
                      <div className="p-2.5 rounded-xl bg-emerald-600 text-white shadow-sm group-hover:scale-105 transition-transform">
                        <UploadCloud className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#101B35]">
                          {formLocalFileName ? `Selected: ${formLocalFileName}` : 'Click to select file from This PC'}
                        </p>
                        <p className="text-[10px] text-slate-500">Supports .mp4, .webm, .jpg, .png from local computer</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-2">
                    <label className="block text-[10px] font-bold text-slate-500 mb-1">Or Enter Local Path Relative to Project</label>
                    <input
                      type="text"
                      value={formMediaUrl}
                      onChange={(e) => setFormMediaUrl(e.target.value)}
                      placeholder="/videos/hero-bg.mp4 or /images/banner.jpg"
                      className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl px-3 py-1.5 text-xs text-[#101B35] focus:outline-none focus:border-emerald-500"
                    />
                  </div>
                </div>
              )}

              {/* 6. Description */}
              <div>
                <label className="block text-xs font-bold text-[#101B35] mb-1">Description (Optional)</label>
                <textarea
                  rows={2}
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  placeholder="Notes about where this video or photo appears..."
                  className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl p-3 text-xs text-[#101B35] focus:outline-none focus:border-[#1769FF]"
                />
              </div>

              {/* Submit Controls */}
              <div className="pt-3 flex items-center justify-end gap-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-[#F6F9FF] hover:bg-slate-200 text-slate-600 text-xs font-semibold transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`px-5 py-2 rounded-xl text-white text-xs font-bold shadow-md cursor-pointer transition ${
                    modalMode === 'url'
                      ? 'bg-gradient-to-r from-[#1769FF] to-[#08C7E8] hover:from-[#1357D6] hover:to-[#06ACC8]'
                      : 'bg-emerald-600 hover:bg-emerald-500'
                  }`}
                >
                  {editingItem ? 'Save Changes' : modalMode === 'url' ? 'Add External Media' : 'Add Localhost Media'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
