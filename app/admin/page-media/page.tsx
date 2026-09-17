'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import {
  MonitorPlay,
  Globe,
  HardDrive,
  Search,
  Trash2,
  ExternalLink,
  Layers,
  X,
  UploadCloud,
  AlertCircle,
  Video,
  Eye,
  Sparkles,
  Play,
  ArrowRight,
} from 'lucide-react'
import {
  WEBSITE_PAGES,
  INITIAL_PAGE_MEDIA,
  PageMediaItem,
  getYouTubeEmbedUrl,
  getPageConfigBySlugOrId,
} from '@/lib/page-media-config'

export default function AdminPageMediaManager() {
  const [items, setItems] = useState<PageMediaItem[]>([])
  const [selectedPageFilter, setSelectedPageFilter] = useState<string>('all')
  const [sourceFilter, setSourceFilter] = useState<'all' | 'url' | 'localhost'>('all')
  const [searchQuery, setSearchQuery] = useState('')

  // Modals state
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState<'url' | 'localhost'>('url')
  const [editingItem, setEditingItem] = useState<PageMediaItem | null>(null)
  const [previewModalItem, setPreviewModalItem] = useState<PageMediaItem | null>(null)

  // Form states
  const [formPageId, setFormPageId] = useState(WEBSITE_PAGES[0].id)
  const [formSection, setFormSection] = useState(WEBSITE_PAGES[0].sections[0].name)
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
      localStorage.setItem('peers_admin_page_media', JSON.stringify(INITIAL_PAGE_MEDIA))
    }
  }, [])

  // Save to localStorage & notify site components
  const saveItems = (newItems: PageMediaItem[]) => {
    setItems(newItems)
    localStorage.setItem('peers_admin_page_media', JSON.stringify(newItems))
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('peers_media_updated'))
    }
  }

  // Helper to find page config
  const currentPageConfig = WEBSITE_PAGES.find((p) => p.id === formPageId) || WEBSITE_PAGES[0]

  // 1. Open Modal for URL (Social Media Only)
  const openUrlModal = (itemToEdit?: PageMediaItem) => {
    setModalMode('url')
    setFormError('')
    if (itemToEdit) {
      setEditingItem(itemToEdit)
      const pageCfg = getPageConfigBySlugOrId(itemToEdit.pageId || itemToEdit.pageName) || WEBSITE_PAGES[0]
      setFormPageId(pageCfg.id)
      setFormSection(itemToEdit.sectionName)
      setFormTitle(itemToEdit.title)
      setFormDescription(itemToEdit.description || '')
      setFormMediaType('video')
      setFormMediaUrl(itemToEdit.sourceType === 'url' ? itemToEdit.mediaUrl : '')
      setFormLocalFileName('')
    } else {
      setEditingItem(null)
      setFormPageId(WEBSITE_PAGES[0].id)
      setFormSection(WEBSITE_PAGES[0].sections[0].name)
      setFormTitle('')
      setFormDescription('')
      setFormMediaType('video')
      setFormMediaUrl('')
      setFormLocalFileName('')
    }
    setIsModalOpen(true)
  }

  // 2. Open Modal for URL for Computer (This PC Video Only)
  const openComputerModal = (itemToEdit?: PageMediaItem) => {
    setModalMode('localhost')
    setFormError('')
    if (itemToEdit) {
      setEditingItem(itemToEdit)
      const pageCfg = getPageConfigBySlugOrId(itemToEdit.pageId || itemToEdit.pageName) || WEBSITE_PAGES[0]
      setFormPageId(pageCfg.id)
      setFormSection(itemToEdit.sectionName)
      setFormTitle(itemToEdit.title)
      setFormDescription(itemToEdit.description || '')
      setFormMediaType('video')
      setFormMediaUrl(itemToEdit.sourceType === 'localhost' ? itemToEdit.mediaUrl : '')
      setFormLocalFileName(itemToEdit.sourceType === 'localhost' ? itemToEdit.mediaUrl : '')
    } else {
      setEditingItem(null)
      setFormPageId(WEBSITE_PAGES[0].id)
      setFormSection(WEBSITE_PAGES[0].sections[0].name)
      setFormTitle('')
      setFormDescription('')
      setFormMediaType('video')
      setFormMediaUrl('')
      setFormLocalFileName('')
    }
    setIsModalOpen(true)
  }

  // Handle Computer file selection
  const handleComputerFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setFormError('')
    const isVid = file.type.includes('video')
    const fileName = file.name
    const fallbackPath = isVid ? `/videos/${fileName}` : `/images/${fileName}`

    setFormMediaType(isVid ? 'video' : 'photo')
    setFormLocalFileName(fileName)

    if (file.size < 15 * 1024 * 1024) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const result = event.target?.result as string
        if (result) {
          setFormMediaUrl(result)
        }
      }
      reader.onerror = () => {
        setFormMediaUrl(URL.createObjectURL(file) || fallbackPath)
      }
      reader.readAsDataURL(file)
    } else {
      setFormMediaUrl(URL.createObjectURL(file) || fallbackPath)
    }

    if (!formTitle) {
      setFormTitle(fileName.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '))
    }
  }

  // Submit Handler with Strict Validation
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormError('')

    if (!formTitle.trim()) {
      setFormError('Please enter a media title.')
      return
    }

    // STRICT CONDITION FOR "URL" MODE: ONLY SOCIAL MEDIA / WEB URL ALLOWED
    if (modalMode === 'url') {
      const trimmedUrl = formMediaUrl.trim().toLowerCase()
      if (!trimmedUrl) {
        setFormError('Please enter a social media video link (e.g. YouTube, Vimeo, or Web URL).')
        return
      }

      if (
        trimmedUrl.startsWith('/videos') ||
        trimmedUrl.startsWith('/images') ||
        trimmedUrl.startsWith('c:') ||
        trimmedUrl.startsWith('file:') ||
        trimmedUrl.startsWith('blob:')
      ) {
        setFormError('Only social media / web video URLs (YouTube, Vimeo, etc.) are allowed here. Computer files cannot be uploaded via this button.')
        return
      }

      if (!trimmedUrl.startsWith('http://') && !trimmedUrl.startsWith('https://')) {
        setFormError('Social media link must begin with https:// or http:// (e.g. https://www.youtube.com/watch?v=...)')
        return
      }
    }

    // STRICT CONDITION FOR "URL FOR COMPUTER" MODE: ONLY COMPUTER VIDEOS ALLOWED
    if (modalMode === 'localhost') {
      const trimmedUrl = formMediaUrl.trim().toLowerCase()
      if (!trimmedUrl && !formLocalFileName) {
        setFormError('Please select a video file from your computer (This PC).')
        return
      }

      if (
        trimmedUrl.includes('youtube.com') ||
        trimmedUrl.includes('youtu.be') ||
        trimmedUrl.includes('vimeo.com') ||
        trimmedUrl.includes('facebook.com') ||
        trimmedUrl.includes('instagram.com') ||
        trimmedUrl.includes('tiktok.com') ||
        (trimmedUrl.startsWith('http') && !trimmedUrl.startsWith('blob:'))
      ) {
        setFormError('External social media links are not allowed here. Please upload a video file from your computer or use the "URL" button.')
        return
      }
    }

    const targetPage = WEBSITE_PAGES.find((p) => p.id === formPageId) || WEBSITE_PAGES[0]

    if (editingItem) {
      const updated = items.map((item) =>
        item.id === editingItem.id
          ? {
              ...item,
              pageId: targetPage.id,
              pageName: targetPage.name,
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
        pageId: targetPage.id,
        pageName: targetPage.name,
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
      item.sectionName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.pageSlug.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesPage && matchesSource && matchesSearch
  })

  return (
    <div className="space-y-6 font-sans pb-16">
      {/* 1. Top Header Banner & Action Buttons */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-[#E8ECF4] shadow-xs">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 text-[#4F46E5] text-[11px] font-semibold">
            <Sparkles className="w-3 h-3" />
            <span>Page Media Manager (Master Tabular View)</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-[#1E293B] tracking-tight">
            Page Media Management
          </h1>
          <p className="text-xs text-slate-500 leading-relaxed max-w-2xl">
            Configure video assets across Peers Global website pages. Click any page URL in the table below to open its dedicated section manager in a new tab, or use the action buttons to set Social Media or Computer videos.
          </p>
        </div>

        {/* The Two Dedicated Upload Buttons */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0">
          {/* Button 1: URL */}
          <button
            onClick={() => openUrlModal()}
            className="px-4 py-2 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold shadow-xs transition-all flex items-center gap-2 cursor-pointer"
            title="Upload / Set video via Social Media & Web link only"
          >
            <Globe className="w-4 h-4" />
            <span>+ URL (Social Media)</span>
          </button>

          {/* Button 2: URL for Computer */}
          <button
            onClick={() => openComputerModal()}
            className="px-4 py-2 rounded-xl bg-[#059669] hover:bg-[#047857] text-white text-xs font-semibold shadow-xs transition-all flex items-center gap-2 cursor-pointer"
            title="Upload video from Computer (This PC only)"
          >
            <HardDrive className="w-4 h-4" />
            <span>+ URL for Computer</span>
          </button>
        </div>
      </div>

      {/* 2. Website Pages Table (2 Columns: Page Name & URL - Click to Open in Next Page) */}
      <div className="bg-white border border-[#E8ECF4] rounded-2xl overflow-hidden shadow-xs">
        <div className="p-4 bg-[#F8FAFC] border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="text-xs font-bold text-[#1E293B] uppercase tracking-wider">
              Website Pages (Click URL to Open in Next Page)
            </h2>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Select any page URL below to open its dedicated video section manager in a new tab.
            </p>
          </div>
          <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-[#4F46E5] font-bold text-xs border border-indigo-100">
            {WEBSITE_PAGES.length} Pages
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#1E293B]">
            <thead className="bg-[#F8FAFC] border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3 px-6 w-1/2">Page Name</th>
                <th className="py-3 px-6 w-1/2">URL</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {WEBSITE_PAGES.map((page) => (
                <tr key={page.id} className="hover:bg-[#F8FAFC] transition group">
                  {/* Column 1: Page Name */}
                  <td className="py-3.5 px-6 font-bold text-xs text-[#1E293B]">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center shrink-0">
                        <MonitorPlay className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="font-bold text-xs text-[#1E293B] group-hover:text-[#4F46E5] transition">
                          {page.name}
                        </span>
                        <p className="text-[11px] text-slate-400 font-normal">
                          {page.sections.length} Video Sections
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Column 2: URL (Clicking opens in next page / new tab) */}
                  <td className="py-3.5 px-6">
                    <div className="flex items-center justify-between">
                      <Link
                        href={`/admin/page-media/${page.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#EEF2FF] hover:bg-[#E0E7FF] text-[#4F46E5] font-bold font-mono text-xs border border-[#C7D2FE] transition shadow-2xs group/link"
                        title={`Open ${page.name} (${page.slug}) in a new page`}
                      >
                        <span>{page.slug}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#4F46E5] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </Link>

                      <Link
                        href={page.slug}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] text-slate-400 hover:text-slate-600 font-mono hover:underline flex items-center gap-1"
                        title="View Live Website Page"
                      >
                        <span>Live Site ({page.slug})</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Filter & Search Bar */}
      <div className="bg-white border border-[#E8ECF4] rounded-2xl p-4 shadow-xs flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        {/* Select Website Page Dropdown & Search */}
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
                <option key={page.id} value={page.name}>
                  {page.name} ({items.filter((i) => (i.pageId ? i.pageId === page.id : i.pageName === page.name)).length})
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
                placeholder="Search by title, page name, section, or url..."
                className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl pl-9 pr-3 py-2 text-xs text-[#1E293B] placeholder:text-slate-400 focus:outline-none focus:border-[#4F46E5]"
              />
            </div>
          </div>
        </div>

        {/* Source Filter */}
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
              <span>URL (Social)</span>
            </button>
            <button
              onClick={() => setSourceFilter('localhost')}
              className={`px-3 py-1.5 rounded-lg font-semibold transition cursor-pointer flex items-center gap-1.5 ${
                sourceFilter === 'localhost' ? 'bg-white text-emerald-600 shadow-xs' : 'text-slate-500'
              }`}
            >
              <HardDrive className="w-3.5 h-3.5 text-emerald-600" />
              <span>URL for Computer</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4. Main Media Items Table (With Image 1 Side-by-Side Action Buttons) */}
      <div className="bg-white border border-[#E8ECF4] rounded-2xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#1E293B] min-w-[1020px]">
            <thead className="bg-[#F8FAFC] border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3.5 px-4 w-[220px]">Website Page &amp; Live URL</th>
                <th className="py-3.5 px-4 w-[210px]">Section / Selection Name</th>
                <th className="py-3.5 px-4 min-w-[240px]">Media Title &amp; Details</th>
                <th className="py-3.5 px-4 w-[210px]">Current Media Source</th>
                <th className="py-3.5 px-4 w-[90px]">Status</th>
                <th className="py-3.5 px-4 w-[280px] min-w-[280px] text-right">Media Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredItems.length === 0 ? (
                <tr>
                  <td colSpan={6} className="p-12 text-center text-slate-500">
                    <div className="w-12 h-12 rounded-full bg-indigo-50 text-[#4F46E5] flex items-center justify-center mx-auto mb-3">
                      <MonitorPlay className="w-6 h-6" />
                    </div>
                    <p className="text-base font-bold text-[#1E293B]">No Page Media Found</p>
                    <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                      No media items match your search criteria. Click the buttons below to assign media to a page.
                    </p>
                    <div className="flex items-center justify-center gap-3 pt-3">
                      <button
                        onClick={() => openUrlModal()}
                        className="px-4 py-2 rounded-xl bg-[#4F46E5] text-white text-xs font-bold shadow-xs cursor-pointer"
                      >
                        + URL (Social Media)
                      </button>
                      <button
                        onClick={() => openComputerModal()}
                        className="px-4 py-2 rounded-xl bg-[#059669] text-white text-xs font-bold shadow-xs cursor-pointer"
                      >
                        + URL for Computer
                      </button>
                    </div>
                  </td>
                </tr>
              ) : (
                filteredItems.map((item) => {
                  const pageConfig = getPageConfigBySlugOrId(item.pageId || item.pageName) || WEBSITE_PAGES[0]
                  return (
                    <tr key={item.id} className="hover:bg-[#F8FAFC] transition group">
                      {/* 1. Page Name & Clickable URL Link (Opens dedicated page in new tab) */}
                      <td className="py-4 px-4 font-semibold text-[#1E293B]">
                        <div className="flex flex-col gap-1.5">
                          <span className="font-bold text-xs text-[#1E293B]">{item.pageName}</span>

                          {/* Dedicated Manager Link (Opens in New Tab) */}
                          <Link
                            href={`/admin/page-media/${pageConfig.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#4F46E5] hover:text-[#4338CA] bg-indigo-50/90 hover:bg-indigo-100/90 px-2 py-0.5 rounded-md border border-indigo-200 transition w-fit"
                            title={`Click to open dedicated video section manager for ${item.pageName} in a new tab`}
                          >
                            <span>Manage Page Videos</span>
                            <ExternalLink className="w-3 h-3 text-[#4F46E5]" />
                          </Link>

                          {/* Live Site Preview Link */}
                          <Link
                            href={item.pageSlug}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[10px] text-slate-400 hover:text-slate-600 font-mono hover:underline w-fit"
                            title={`Preview live website page ${item.pageSlug} in a new tab`}
                          >
                            <span>Live: {item.pageSlug}</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </Link>
                        </div>
                      </td>

                      {/* 2. Selection / Section Name */}
                      <td className="py-4 px-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-[#F1F4F9] text-slate-700 border border-slate-200 max-w-[200px] truncate" title={item.sectionName}>
                          <Layers className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span className="truncate">{item.sectionName}</span>
                        </span>
                      </td>

                      {/* 3. Media Title & Details */}
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2.5">
                          <div className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center shrink-0">
                            {item.mediaType === 'video' ? <Video className="w-4 h-4" /> : <Layers className="w-4 h-4" />}
                          </div>
                          <div className="min-w-0">
                            <p className="font-bold text-xs text-[#1E293B] truncate max-w-[220px]" title={item.title}>
                              {item.title}
                            </p>
                            {item.description && (
                              <p className="text-[11px] text-slate-400 truncate max-w-[220px]" title={item.description}>
                                {item.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </td>

                      {/* 4. Current Media Source */}
                      <td className="py-4 px-4">
                        <div className="flex items-center gap-2">
                          {item.sourceType === 'url' ? (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-50 text-blue-600 border border-blue-200 shrink-0">
                              <Globe className="w-3 h-3" />
                              <span>Social URL</span>
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                              <HardDrive className="w-3 h-3" />
                              <span>Computer Video</span>
                            </span>
                          )}
                          <span className="text-[11px] font-mono text-slate-500 truncate max-w-[100px]" title={item.mediaUrl}>
                            {item.mediaUrl}
                          </span>
                          <button
                            onClick={() => setPreviewModalItem(item)}
                            className="p-1 rounded text-slate-400 hover:text-[#4F46E5] hover:bg-slate-100 transition cursor-pointer shrink-0"
                            title="Preview Video"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>

                      {/* 5. Status Toggle */}
                      <td className="py-4 px-4 whitespace-nowrap">
                        <button
                          onClick={() => toggleStatus(item.id)}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold cursor-pointer transition border ${
                            item.isActive
                              ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                              : 'bg-slate-100 text-slate-500 border-slate-200'
                          }`}
                          title={item.isActive ? 'Active on website (Click to disable)' : 'Disabled (Click to enable)'}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${item.isActive ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                          <span>{item.isActive ? 'Active' : 'Disabled'}</span>
                        </button>
                      </td>

                      {/* 6. Media Actions: The Exact Three Buttons from Image 1 Side-by-Side */}
                      <td className="py-4 px-4 whitespace-nowrap text-right">
                        <div className="inline-flex items-center justify-end gap-1.5">
                          {/* Button 1: [🌐 URL] */}
                          <button
                            onClick={() => openUrlModal(item)}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#EEF2FF] hover:bg-[#E0E7FF] text-[#4F46E5] font-semibold text-xs border border-[#C7D2FE] transition shadow-2xs whitespace-nowrap cursor-pointer"
                            title="Set Social Media / Web URL for this section (External links only)"
                          >
                            <Globe className="w-3.5 h-3.5 text-[#4F46E5]" />
                            <span>URL</span>
                          </button>

                          {/* Button 2: [💾 URL for Computer] */}
                          <button
                            onClick={() => openComputerModal(item)}
                            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#ECFDF5] hover:bg-[#D1FAE5] text-[#059669] font-semibold text-xs border border-[#A7F3D0] transition shadow-2xs whitespace-nowrap cursor-pointer"
                            title="Upload Computer Video file from This PC for this section"
                          >
                            <HardDrive className="w-3.5 h-3.5 text-[#059669]" />
                            <span>URL for Computer</span>
                          </button>

                          {/* Button 3: [🗑️] */}
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="inline-flex items-center justify-center p-1.5 rounded-md bg-[#FEF2F2] hover:bg-[#FEE2E2] text-[#DC2626] border border-[#FECACA] transition shadow-2xs cursor-pointer"
                            title="Delete Media"
                          >
                            <Trash2 className="w-3.5 h-3.5 text-[#DC2626]" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  )
                })
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* 5. Video Preview Modal */}
      {previewModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-2xl bg-white border border-slate-700 shadow-2xl overflow-hidden">
            <div className="p-4 bg-[#131B2E] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-indigo-400" />
                <span className="font-bold text-xs">{previewModalItem.title}</span>
                <span className="text-[10px] text-slate-400">({previewModalItem.pageName} - {previewModalItem.sectionName})</span>
              </div>
              <button
                onClick={() => setPreviewModalItem(null)}
                className="p-1 rounded-full hover:bg-white/20 text-white transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="h-80 bg-black flex items-center justify-center">
              {previewModalItem.sourceType === 'url' && getYouTubeEmbedUrl(previewModalItem.mediaUrl) ? (
                <iframe
                  src={getYouTubeEmbedUrl(previewModalItem.mediaUrl) || ''}
                  title={previewModalItem.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : previewModalItem.mediaUrl.endsWith('.mp4') || previewModalItem.mediaUrl.startsWith('blob:') || previewModalItem.sourceType === 'localhost' ? (
                <video src={previewModalItem.mediaUrl} controls autoPlay className="w-full h-full object-contain" />
              ) : (
                <div className="p-6 text-center text-slate-400">
                  <p className="text-sm font-semibold">{previewModalItem.title}</p>
                  <p className="text-xs mt-1 font-mono">{previewModalItem.mediaUrl}</p>
                </div>
              )}
            </div>

            <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-mono text-[11px] truncate max-w-md">{previewModalItem.mediaUrl}</span>
              <button
                onClick={() => setPreviewModalItem(null)}
                className="px-4 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. Add / Update Modal (Strictly Validating "URL" vs "URL for Computer") */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl bg-white border border-[#E8ECF4] shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div
              className={`p-5 text-white ${
                modalMode === 'url'
                  ? 'bg-gradient-to-r from-[#1E1B4B] to-[#4F46E5]'
                  : 'bg-gradient-to-r from-[#064E3B] to-[#059669]'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-xl bg-white/10 backdrop-blur-md">
                    {modalMode === 'url' ? <Globe className="w-5 h-5 text-white" /> : <HardDrive className="w-5 h-5 text-white" />}
                  </div>
                  <div>
                    <h2 className="text-base font-bold">
                      {modalMode === 'url' ? 'URL (Social Media & Web Links Only)' : 'URL for Computer (This PC Files Only)'}
                    </h2>
                    <p className="text-xs text-slate-200 mt-0.5">
                      {modalMode === 'url'
                        ? 'Add YouTube, Vimeo, or web video links only'
                        : 'Upload video directly from your computer (This PC)'}
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
              {/* Notice Banner Reinforcing Condition */}
              <div
                className={`p-3 rounded-xl border text-xs font-medium flex items-start gap-2 ${
                  modalMode === 'url'
                    ? 'bg-indigo-50 border-indigo-200 text-[#4F46E5]'
                    : 'bg-emerald-50 border-emerald-200 text-emerald-800'
                }`}
              >
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  {modalMode === 'url'
                    ? 'Rule: Only social media and web URLs (YouTube, Vimeo, etc.) can be added here. Computer files cannot be uploaded via this button.'
                    : 'Rule: Only computer files from This PC can be uploaded here. Social media links are not allowed in this mode.'}
                </span>
              </div>

              {formError && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{formError}</span>
                </div>
              )}

              {/* 1. Target Website Page */}
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-1">Target Website Page *</label>
                <select
                  value={formPageId}
                  onChange={(e) => {
                    const newPageId = e.target.value
                    setFormPageId(newPageId)
                    const pConfig = WEBSITE_PAGES.find((p) => p.id === newPageId)
                    if (pConfig && pConfig.sections.length > 0) {
                      setFormSection(pConfig.sections[0].name)
                    }
                  }}
                  className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl px-3 py-2 text-xs font-semibold text-[#1E293B] focus:outline-none focus:border-[#4F46E5]"
                >
                  {WEBSITE_PAGES.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.slug})
                    </option>
                  ))}
                </select>
              </div>

              {/* 2. Page Section / Selection Name */}
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-1">Section / Placement Name *</label>
                <select
                  value={formSection}
                  onChange={(e) => setFormSection(e.target.value)}
                  className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl px-3 py-2 text-xs font-semibold text-[#1E293B] focus:outline-none focus:border-[#4F46E5]"
                >
                  {currentPageConfig.sections.map((sec) => (
                    <option key={sec.id} value={sec.name}>
                      {sec.name}
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
                  placeholder="e.g. Hero Background Video 2026"
                  className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl px-3.5 py-2 text-xs text-[#1E293B] focus:outline-none focus:border-[#4F46E5]"
                />
              </div>

              {/* 4. MODE SPECIFIC INPUT */}
              {modalMode === 'url' ? (
                /* URL MODE: Only Social Media / Web Links Allowed */
                <div>
                  <label className="block text-xs font-bold text-[#1E293B] mb-1">
                    Social Media / Web Video URL *
                  </label>
                  <input
                    type="url"
                    value={formMediaUrl}
                    onChange={(e) => setFormMediaUrl(e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=... or https://vimeo.com/..."
                    className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl px-3.5 py-2 text-xs text-[#1E293B] font-mono focus:outline-none focus:border-[#4F46E5]"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">
                    Accepts YouTube, Vimeo, or direct web video stream URLs starting with https://
                  </p>
                </div>
              ) : (
                /* COMPUTER MODE: Only Files from This PC Allowed */
                <div>
                  <label className="block text-xs font-bold text-[#1E293B] mb-1">
                    Select Video from Computer (This PC) *
                  </label>
                  <div className="border-2 border-dashed border-[#D2DCED] hover:border-[#059669] rounded-xl p-5 text-center bg-[#F8FAFC] relative cursor-pointer group">
                    <input
                      type="file"
                      accept="video/*"
                      onChange={handleComputerFileSelect}
                      className="absolute inset-0 opacity-0 cursor-pointer z-10"
                    />
                    <div className="flex flex-col items-center justify-center gap-1.5 pointer-events-none">
                      <div className="w-10 h-10 rounded-full bg-emerald-50 text-[#059669] flex items-center justify-center group-hover:scale-110 transition-transform">
                        <UploadCloud className="w-5 h-5" />
                      </div>
                      <p className="text-xs font-bold text-[#1E293B]">
                        {formLocalFileName ? `Selected: ${formLocalFileName}` : 'Click to browse video from This PC'}
                      </p>
                      <p className="text-[10px] text-slate-400">Supports .mp4, .webm, .mov video files</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-xl bg-[#F8FAFC] border border-[#E8ECF4] text-slate-600 text-xs font-semibold hover:text-[#1E293B] transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`px-5 py-2 rounded-xl text-white text-xs font-bold shadow-xs transition cursor-pointer ${
                    modalMode === 'url' ? 'bg-[#4F46E5] hover:bg-[#4338CA]' : 'bg-[#059669] hover:bg-[#047857]'
                  }`}
                >
                  {editingItem ? 'Save Video Changes' : 'Save & Publish Video'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
