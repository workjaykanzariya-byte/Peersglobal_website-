'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import {
  MonitorPlay,
  Globe,
  HardDrive,
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
  ArrowLeft,
  CheckCircle2,
} from 'lucide-react'
import {
  WEBSITE_PAGES,
  INITIAL_PAGE_MEDIA,
  PageMediaItem,
  SectionDefinition,
  getPageConfigBySlugOrId,
  getYouTubeEmbedUrl,
} from '@/lib/page-media-config'

export default function AdminPageMediaSectionManager({
  params,
}: {
  params?: Promise<{ slug: string }>
}) {
  const unwrappedParams = params ? React.use(params) : null
  const clientParams = useParams()
  const rawSlug =
    unwrappedParams?.slug ||
    (Array.isArray(clientParams?.slug) ? clientParams.slug[0] : (clientParams?.slug as string)) ||
    'home'

  const pageConfig = getPageConfigBySlugOrId(rawSlug) || WEBSITE_PAGES[0]

  const [items, setItems] = useState<PageMediaItem[]>([])
  const [successToast, setSuccessToast] = useState<string | null>(null)

  // Modals state
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState<'url' | 'localhost'>('url')
  const [targetSection, setTargetSection] = useState<SectionDefinition | null>(null)
  const [editingItem, setEditingItem] = useState<PageMediaItem | null>(null)
  const [previewModalItem, setPreviewModalItem] = useState<PageMediaItem | null>(null)

  // Form states
  const [formTitle, setFormTitle] = useState('')
  const [formDescription, setFormDescription] = useState('')
  const [formMediaType, setFormMediaType] = useState<'video' | 'photo'>('video')
  const [formMediaUrl, setFormMediaUrl] = useState('')
  const [formLocalFileName, setFormLocalFileName] = useState('')
  const [formError, setFormError] = useState('')

  // Load items from localStorage
  const loadMedia = () => {
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
  }

  useEffect(() => {
    loadMedia()
    window.addEventListener('peers_media_updated', loadMedia)
    return () => window.removeEventListener('peers_media_updated', loadMedia)
  }, [])

  // Save to localStorage & notify site components
  const saveItems = (newItems: PageMediaItem[], toastMsg?: string) => {
    setItems(newItems)
    localStorage.setItem('peers_admin_page_media', JSON.stringify(newItems))
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('peers_media_updated'))
    }
    if (toastMsg) {
      setSuccessToast(toastMsg)
      setTimeout(() => setSuccessToast(null), 3500)
    }
  }

  // Find existing media item for a given section
  const getMediaForSection = (section: SectionDefinition): PageMediaItem => {
    const existing = items.find(
      (i) =>
        (i.pageId === pageConfig.id ||
          i.pageName.toLowerCase() === pageConfig.name.toLowerCase() ||
          i.pageSlug === pageConfig.slug) &&
        (i.sectionName.toLowerCase() === section.name.toLowerCase() ||
          i.sectionName.toLowerCase().includes(section.name.toLowerCase()) ||
          section.name.toLowerCase().includes(i.sectionName.toLowerCase()))
    )

    if (existing) return existing

    // Return fallback entry
    return {
      id: `default-${section.id}`,
      pageId: pageConfig.id,
      pageName: pageConfig.name,
      pageSlug: pageConfig.slug,
      sectionName: section.name,
      title: section.defaultTitle,
      description: section.description,
      mediaType: 'video',
      sourceType: section.defaultSourceType,
      mediaUrl: section.defaultMediaUrl,
      isActive: true,
      createdAt: '2026-08-01',
    }
  }

  // 1. Open Modal for URL (Social Media Only)
  const openUrlModalForSection = (section: SectionDefinition) => {
    const media = getMediaForSection(section)
    setTargetSection(section)
    setEditingItem(media)
    setModalMode('url')
    setFormError('')
    setFormTitle(media.title || section.defaultTitle)
    setFormDescription(media.description || section.description)
    setFormMediaType('video')
    setFormMediaUrl(media.sourceType === 'url' ? media.mediaUrl : '')
    setFormLocalFileName('')
    setIsModalOpen(true)
  }

  // 2. Open Modal for URL for Computer (This PC Video Only)
  const openComputerModalForSection = (section: SectionDefinition) => {
    const media = getMediaForSection(section)
    setTargetSection(section)
    setEditingItem(media)
    setModalMode('localhost')
    setFormError('')
    setFormTitle(media.title || section.defaultTitle)
    setFormDescription(media.description || section.description)
    setFormMediaType('video')
    setFormMediaUrl(media.sourceType === 'localhost' ? media.mediaUrl : section.defaultMediaUrl)
    setFormLocalFileName(media.sourceType === 'localhost' ? media.mediaUrl : '')
    setIsModalOpen(true)
  }

  // Handle Computer file selection with persistent Base64 / Data URL support
  const handleComputerFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setFormError('')
    const isVid = file.type.includes('video') || file.name.endsWith('.mp4') || file.name.endsWith('.webm') || file.name.endsWith('.mov')
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

    if (!formTitle || formTitle === targetSection?.defaultTitle) {
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
        (trimmedUrl.startsWith('http') && !trimmedUrl.startsWith('blob:') && !trimmedUrl.startsWith('data:'))
      ) {
        setFormError('External social media links are not allowed here. Please upload a video file from your computer or use the "URL" button.')
        return
      }
    }

    const sectionName = targetSection ? targetSection.name : (editingItem?.sectionName || pageConfig.sections[0].name)
    const itemId = editingItem && !editingItem.id.startsWith('default-') ? editingItem.id : `pm-${Date.now()}`

    const updatedItem: PageMediaItem = {
      id: itemId,
      pageId: pageConfig.id,
      pageName: pageConfig.name,
      pageSlug: pageConfig.slug,
      sectionName: sectionName,
      title: formTitle.trim(),
      description: formDescription.trim(),
      mediaType: formMediaType,
      sourceType: modalMode,
      mediaUrl: formMediaUrl.trim(),
      isActive: true,
      createdAt: new Date().toISOString().split('T')[0],
    }

    const existingIndex = items.findIndex(
      (i) =>
        i.id === updatedItem.id ||
        ((i.pageId === pageConfig.id || i.pageName.toLowerCase() === pageConfig.name.toLowerCase()) &&
          i.sectionName.toLowerCase() === sectionName.toLowerCase())
    )

    let updatedList: PageMediaItem[]
    if (existingIndex >= 0) {
      updatedList = [...items]
      updatedList[existingIndex] = updatedItem
    } else {
      updatedList = [updatedItem, ...items]
    }

    saveItems(
      updatedList,
      `Successfully updated video for "${sectionName}" via ${modalMode === 'url' ? 'Social Media URL' : 'Computer Video'}!`
    )
    setIsModalOpen(false)
  }

  // Toggle active status
  const toggleSectionStatus = (section: SectionDefinition) => {
    const current = getMediaForSection(section)
    const newActiveState = !current.isActive

    const updatedItem: PageMediaItem = {
      ...current,
      id: current.id.startsWith('default-') ? `pm-${Date.now()}` : current.id,
      isActive: newActiveState,
    }

    const existingIndex = items.findIndex(
      (i) =>
        i.id === updatedItem.id ||
        ((i.pageId === pageConfig.id || i.pageName.toLowerCase() === pageConfig.name.toLowerCase()) &&
          i.sectionName.toLowerCase() === section.name.toLowerCase())
    )

    let updatedList: PageMediaItem[]
    if (existingIndex >= 0) {
      updatedList = [...items]
      updatedList[existingIndex] = updatedItem
    } else {
      updatedList = [updatedItem, ...items]
    }

    saveItems(
      updatedList,
      `"${section.name}" is now ${newActiveState ? 'Active' : 'Disabled'} on the website.`
    )
  }

  // Reset/Clear Section Video
  const handleResetSection = (section: SectionDefinition) => {
    if (confirm(`Are you sure you want to reset the video for "${section.name}" back to default?`)) {
      const updatedList = items.filter(
        (i) =>
          !(
            (i.pageId === pageConfig.id || i.pageName.toLowerCase() === pageConfig.name.toLowerCase()) &&
            i.sectionName.toLowerCase() === section.name.toLowerCase()
          )
      )
      saveItems(updatedList, `Reset video for "${section.name}" to default.`)
    }
  }

  return (
    <div className="space-y-6 font-sans pb-16">
      {/* Toast Notification */}
      {successToast && (
        <div className="fixed top-5 right-5 z-50 animate-in slide-in-from-top-3 duration-300">
          <div className="bg-[#1E1B4B] text-white px-4 py-3 rounded-2xl shadow-xl border border-indigo-500/40 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-xs font-semibold">{successToast}</span>
          </div>
        </div>
      )}

      {/* 1. Header Banner & Navigation */}
      <div className="bg-white p-6 rounded-2xl border border-[#E8ECF4] shadow-xs flex flex-col gap-4">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs">
            <Link
              href="/admin/page-media"
              className="inline-flex items-center gap-1.5 text-slate-500 hover:text-[#4F46E5] font-semibold transition"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Pages</span>
            </Link>
            <span className="text-slate-300">/</span>
            <span className="font-bold text-[#4F46E5]">{pageConfig.name}</span>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href={pageConfig.slug}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition cursor-pointer"
              title="Preview Live Page in new tab"
            >
              <span>Preview Live Page ({pageConfig.slug})</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </Link>
          </div>
        </div>

        {/* Page Title & Badges */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-1 border-t border-slate-100">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 text-[#4F46E5] text-[11px] font-semibold">
              <Sparkles className="w-3 h-3" />
              <span>Dedicated Page Video Manager</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#1E293B] tracking-tight">
              {pageConfig.name} — Video &amp; Media Sections
            </h1>
            <p className="text-xs text-slate-500 leading-relaxed max-w-3xl">
              {pageConfig.description} Every section in the {pageConfig.name} directory is listed below. Use the action buttons to set external Social Media links or upload Computer Video files.
            </p>
          </div>

          {/* Page Stats Badges */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="px-3 py-2 rounded-xl bg-[#F8FAFC] border border-[#E8ECF4] text-center">
              <p className="text-[10px] uppercase font-bold text-slate-400">Sections</p>
              <p className="text-sm font-bold text-[#1E293B]">{pageConfig.sections.length}</p>
            </div>
            <div className="px-3 py-2 rounded-xl bg-emerald-50/80 border border-emerald-200 text-center">
              <p className="text-[10px] uppercase font-bold text-emerald-600">Page Status</p>
              <p className="text-sm font-bold text-emerald-700">Active Live</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Page Sections Table (One by One with Image 1 Buttons) */}
      <div className="bg-white border border-[#E8ECF4] rounded-2xl overflow-hidden shadow-xs">
        <div className="p-4 bg-[#F8FAFC] border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="text-xs font-bold text-[#1E293B] uppercase tracking-wider">
              All Sections &amp; Video Placements for {pageConfig.name} ({pageConfig.sections.length} Sections)
            </h2>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Each row controls a specific video banner or modal. Uploading or changing a video updates the website immediately.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-[#1E293B] min-w-[960px]">
            <thead className="bg-[#F8FAFC] border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
              <tr>
                <th className="py-3.5 px-4 w-[240px]">Section / Selection Name</th>
                <th className="py-3.5 px-4 min-w-[240px]">Current Media Title &amp; Details</th>
                <th className="py-3.5 px-4 w-[220px]">Current Media Source</th>
                <th className="py-3.5 px-4 w-[90px]">Status</th>
                <th className="py-3.5 px-4 w-[280px] min-w-[280px] text-right">Media Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {pageConfig.sections.map((section) => {
                const media = getMediaForSection(section)
                return (
                  <tr key={section.id} className="hover:bg-[#F8FAFC] transition group">
                    {/* 1. Section / Selection Name & Description */}
                    <td className="py-4 px-4 font-semibold text-[#1E293B]">
                      <div className="flex flex-col gap-1">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold bg-[#EEF2FF] text-[#4F46E5] border border-[#C7D2FE] w-fit">
                          <Layers className="w-3.5 h-3.5 text-[#4F46E5] shrink-0" />
                          <span>{section.name}</span>
                        </div>
                        {section.subRoute && (
                          <Link
                            href={section.subRoute}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[10px] text-slate-400 hover:text-slate-600 font-mono hover:underline w-fit mt-0.5"
                            title={`Preview live section at ${section.subRoute}`}
                          >
                            <span>Live URL: {section.subRoute}</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </Link>
                        )}
                        <span className="text-[11px] text-slate-400 font-normal leading-relaxed max-w-[220px]">
                          {section.description}
                        </span>
                      </div>
                    </td>

                    {/* 2. Media Title & Details */}
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center shrink-0">
                          <Video className="w-4 h-4" />
                        </div>
                        <div className="min-w-0">
                          <p className="font-bold text-xs text-[#1E293B] truncate max-w-[240px]" title={media.title}>
                            {media.title}
                          </p>
                          {media.description && (
                            <p className="text-[11px] text-slate-400 truncate max-w-[240px]" title={media.description}>
                              {media.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* 3. Current Media Source */}
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-2">
                        {media.sourceType === 'url' ? (
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
                        <span className="text-[11px] font-mono text-slate-500 truncate max-w-[110px]" title={media.mediaUrl}>
                          {media.mediaUrl.startsWith('data:') ? 'Custom Video (PC)' : media.mediaUrl}
                        </span>
                        <button
                          onClick={() => setPreviewModalItem(media)}
                          className="p-1 rounded text-slate-400 hover:text-[#4F46E5] hover:bg-slate-100 transition cursor-pointer shrink-0"
                          title="Preview Video"
                        >
                          <Eye className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>

                    {/* 4. Status Toggle */}
                    <td className="py-4 px-4 whitespace-nowrap">
                      <button
                        onClick={() => toggleSectionStatus(section)}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold cursor-pointer transition border ${
                          media.isActive
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                            : 'bg-slate-100 text-slate-500 border-slate-200'
                        }`}
                        title={media.isActive ? 'Active on website (Click to disable)' : 'Disabled (Click to enable)'}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${media.isActive ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                        <span>{media.isActive ? 'Active' : 'Disabled'}</span>
                      </button>
                    </td>

                    {/* 5. Media Actions: The Exact Three Buttons from Image 1 Side-by-Side */}
                    <td className="py-4 px-4 whitespace-nowrap text-right">
                      <div className="inline-flex items-center justify-end gap-1.5">
                        {/* Button 1: [🌐 URL] */}
                        <button
                          onClick={() => openUrlModalForSection(section)}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#EEF2FF] hover:bg-[#E0E7FF] text-[#4F46E5] font-semibold text-xs border border-[#C7D2FE] transition shadow-2xs whitespace-nowrap cursor-pointer"
                          title={`Set Social Media / Web URL for ${section.name}`}
                        >
                          <Globe className="w-3.5 h-3.5 text-[#4F46E5]" />
                          <span>URL</span>
                        </button>

                        {/* Button 2: [💾 URL for Computer] */}
                        <button
                          onClick={() => openComputerModalForSection(section)}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#ECFDF5] hover:bg-[#D1FAE5] text-[#059669] font-semibold text-xs border border-[#A7F3D0] transition shadow-2xs whitespace-nowrap cursor-pointer"
                          title={`Upload Computer Video file from This PC for ${section.name}`}
                        >
                          <HardDrive className="w-3.5 h-3.5 text-[#059669]" />
                          <span>URL for Computer</span>
                        </button>

                        {/* Button 3: [🗑️] */}
                        <button
                          onClick={() => handleResetSection(section)}
                          className="inline-flex items-center justify-center p-1.5 rounded-md bg-[#FEF2F2] hover:bg-[#FEE2E2] text-[#DC2626] border border-[#FECACA] transition shadow-2xs cursor-pointer"
                          title="Reset / Clear Video"
                        >
                          <Trash2 className="w-3.5 h-3.5 text-[#DC2626]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3. Video Preview Modal */}
      {previewModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-2xl bg-white border border-slate-700 shadow-2xl overflow-hidden">
            <div className="p-4 bg-[#131B2E] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-indigo-400" />
                <span className="font-bold text-xs">{previewModalItem.title}</span>
                <span className="text-[10px] text-slate-400">({previewModalItem.sectionName})</span>
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
              ) : previewModalItem.mediaUrl.endsWith('.mp4') || previewModalItem.mediaUrl.startsWith('blob:') || previewModalItem.mediaUrl.startsWith('data:') || previewModalItem.sourceType === 'localhost' ? (
                <video src={previewModalItem.mediaUrl} controls autoPlay className="w-full h-full object-contain" />
              ) : (
                <div className="p-6 text-center text-slate-400">
                  <p className="text-sm font-semibold">{previewModalItem.title}</p>
                  <p className="text-xs mt-1 font-mono">{previewModalItem.mediaUrl}</p>
                </div>
              )}
            </div>

            <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-mono text-[11px] truncate max-w-md">
                {previewModalItem.mediaUrl.startsWith('data:') ? 'Custom Uploaded Video' : previewModalItem.mediaUrl}
              </span>
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

      {/* 4. Add / Update Modal (Strictly Validating "URL" vs "URL for Computer") */}
      {isModalOpen && targetSection && (
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
                        ? `Set social video for: ${targetSection.name}`
                        : `Upload computer video for: ${targetSection.name}`}
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

              {/* 1. Target Website Page & Section Info (Fixed to current section) */}
              <div className="p-3 rounded-xl bg-[#F8FAFC] border border-[#E8ECF4] space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-bold uppercase text-[10px]">Website Page:</span>
                  <span className="font-bold text-[#1E293B]">{pageConfig.name} ({pageConfig.slug})</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-bold uppercase text-[10px]">Section Placement:</span>
                  <span className="font-bold text-[#4F46E5]">{targetSection.name}</span>
                </div>
                {targetSection.subRoute && (
                  <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-100">
                    <span className="text-slate-400 font-bold uppercase text-[10px]">Target Sub-Route:</span>
                    <span className="font-mono text-[11px] text-slate-600">{targetSection.subRoute}</span>
                  </div>
                )}
              </div>

              {/* 2. Media Title */}
              <div>
                <label className="block text-xs font-bold text-[#1E293B] mb-1">Media Title *</label>
                <input
                  type="text"
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="e.g. Section Background Video 2026"
                  className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl px-3.5 py-2 text-xs text-[#1E293B] focus:outline-none focus:border-[#4F46E5]"
                />
              </div>

              {/* 3. MODE SPECIFIC INPUT */}
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
                  Save &amp; Apply Video
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
