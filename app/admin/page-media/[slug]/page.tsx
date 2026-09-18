'use client'

import React, { useState, useEffect, useMemo } from 'react'
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
  Plus,
  Edit2,
  FolderPlus,
  HelpCircle,
} from 'lucide-react'
import {
  WEBSITE_PAGES,
  INITIAL_PAGE_MEDIA,
  PageMediaItem,
  SectionDefinition,
  SubModuleDefinition,
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
    'our-world'

  const pageConfig = useMemo(() => {
    return getPageConfigBySlugOrId(rawSlug) || WEBSITE_PAGES[1] // Default to Our World if match fails
  }, [rawSlug])

  const [items, setItems] = useState<PageMediaItem[]>([])
  const [successToast, setSuccessToast] = useState<string | null>(null)

  // Modals state
  const [isMediaModalOpen, setIsMediaModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState<'url' | 'localhost'>('url')
  const [targetSection, setTargetSection] = useState<SectionDefinition | null>(null)
  const [targetSubModule, setTargetSubModule] = useState<SubModuleDefinition | null>(null)
  const [editingItem, setEditingItem] = useState<PageMediaItem | null>(null)
  const [previewModalItem, setPreviewModalItem] = useState<PageMediaItem | null>(null)

  // Sub-module create/edit modal state
  const [isSubModuleModalOpen, setIsSubModuleModalOpen] = useState(false)
  const [subModuleFormMode, setSubModuleFormMode] = useState<'create' | 'edit'>('create')
  const [subModuleSection, setSubModuleSection] = useState<SectionDefinition | null>(null)
  const [subModuleIdToEdit, setSubModuleIdToEdit] = useState<string>('')
  const [subModuleNameInput, setSubModuleNameInput] = useState('')
  const [subModuleTitleInput, setSubModuleTitleInput] = useState('')
  const [subModuleDescInput, setSubModuleDescInput] = useState('')
  const [subModuleMediaType, setSubModuleMediaType] = useState<'video' | 'photo'>('video')
  const [subModuleSourceType, setSubModuleSourceType] = useState<'url' | 'localhost'>('localhost')
  const [subModuleMediaUrl, setSubModuleMediaUrl] = useState('')
  const [subModuleFormError, setSubModuleFormError] = useState('')

  // Media Form states
  const [formTitle, setFormTitle] = useState('')
  const [formDescription, setFormDescription] = useState('')
  const [formMediaType, setFormMediaType] = useState<'video' | 'photo'>('video')
  const [formMediaUrl, setFormMediaUrl] = useState('')
  const [formLocalFileName, setFormLocalFileName] = useState('')
  const [formError, setFormError] = useState('')

  // Load items from localStorage & API
  const loadMedia = () => {
    try {
      const saved = localStorage.getItem('peers_admin_page_media')
      if (saved) {
        const parsed = JSON.parse(saved)
        if (Array.isArray(parsed) && parsed.length > 0) {
          setItems(parsed)
          return
        }
      }
    } catch {
      // Fallback to initial
    }

    setItems(INITIAL_PAGE_MEDIA)
    localStorage.setItem('peers_admin_page_media', JSON.stringify(INITIAL_PAGE_MEDIA))
  }

  useEffect(() => {
    loadMedia()
    window.addEventListener('peers_media_updated', loadMedia)
    window.addEventListener('storage', loadMedia)
    return () => {
      window.removeEventListener('peers_media_updated', loadMedia)
      window.removeEventListener('storage', loadMedia)
    }
  }, [])

  // Save to localStorage, API & notify site components
  const saveItems = (newItems: PageMediaItem[], toastMsg?: string) => {
    setItems(newItems)
    localStorage.setItem('peers_admin_page_media', JSON.stringify(newItems))

    if (typeof window !== 'undefined') {
      window.dispatchEvent(new Event('peers_media_updated'))
    }

    // Persist via API
    fetch('/api/web-media', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newItems),
    }).catch(() => {})

    if (toastMsg) {
      setSuccessToast(toastMsg)
      setTimeout(() => setSuccessToast(null), 3500)
    }
  }

  // Find existing media item for a given sub-module or section
  const getMediaForSubModule = (
    section: SectionDefinition,
    subModule?: SubModuleDefinition
  ): PageMediaItem => {
    if (subModule) {
      const existingSub = items.find(
        (i) =>
          (i.pageId === pageConfig.id ||
            i.pageSlug === pageConfig.slug ||
            i.pageName.toLowerCase() === pageConfig.name.toLowerCase()) &&
          ((i.subModuleId && i.subModuleId === subModule.id) ||
            (i.subModuleName && i.subModuleName.toLowerCase() === subModule.name.toLowerCase()) ||
            (i.title && i.title.toLowerCase().includes(subModule.name.toLowerCase())))
      )

      if (existingSub) return existingSub

      // Default sub-module item fallback
      return {
        id: `default-${subModule.id}`,
        pageId: pageConfig.id,
        pageName: pageConfig.name,
        pageSlug: pageConfig.slug,
        sectionId: section.id,
        sectionName: section.name,
        subModuleId: subModule.id,
        subModuleName: subModule.name,
        title: subModule.defaultTitle || subModule.title,
        description: subModule.description || section.description,
        mediaType: subModule.mediaType || 'video',
        sourceType: subModule.defaultSourceType,
        mediaUrl: subModule.defaultMediaUrl,
        isActive: true,
        createdAt: '2026-08-01',
      }
    }

    // Fallback for parent section
    const existingSec = items.find(
      (i) =>
        (i.pageId === pageConfig.id ||
          i.pageSlug === pageConfig.slug ||
          i.pageName.toLowerCase() === pageConfig.name.toLowerCase()) &&
        (i.sectionName.toLowerCase() === section.name.toLowerCase() ||
          i.sectionId === section.id)
    )

    if (existingSec) return existingSec

    return {
      id: `default-${section.id}`,
      pageId: pageConfig.id,
      pageName: pageConfig.name,
      pageSlug: pageConfig.slug,
      sectionId: section.id,
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

  // Get dynamic custom sub-modules stored in items that might not be in the static config
  const getDynamicSubModulesForSection = (section: SectionDefinition): PageMediaItem[] => {
    return items.filter(
      (i) =>
        (i.pageId === pageConfig.id ||
          i.pageSlug === pageConfig.slug ||
          i.pageName.toLowerCase() === pageConfig.name.toLowerCase()) &&
        (i.sectionId === section.id || i.sectionName.toLowerCase() === section.name.toLowerCase()) &&
        i.subModuleName &&
        !(section.subModules || []).some(
          (sm) =>
            sm.id === i.subModuleId || sm.name.toLowerCase() === i.subModuleName?.toLowerCase()
        )
    )
  }

  // 1. Open Modal for URL (Social Media / YouTube Only)
  const openUrlModal = (section: SectionDefinition, subModule?: SubModuleDefinition, existingCustomItem?: PageMediaItem) => {
    const media = existingCustomItem || getMediaForSubModule(section, subModule)
    setTargetSection(section)
    setTargetSubModule(subModule || null)
    setEditingItem(media)
    setModalMode('url')
    setFormError('')
    setFormTitle(media.title || subModule?.defaultTitle || section.defaultTitle)
    setFormDescription(media.description || subModule?.description || section.description)
    setFormMediaType('video')
    setFormMediaUrl(media.sourceType === 'url' ? media.mediaUrl : '')
    setFormLocalFileName('')
    setIsMediaModalOpen(true)
  }

  // 2. Open Modal for URL for Computer (This PC Video Only)
  const openComputerModal = (section: SectionDefinition, subModule?: SubModuleDefinition, existingCustomItem?: PageMediaItem) => {
    const media = existingCustomItem || getMediaForSubModule(section, subModule)
    setTargetSection(section)
    setTargetSubModule(subModule || null)
    setEditingItem(media)
    setModalMode('localhost')
    setFormError('')
    setFormTitle(media.title || subModule?.defaultTitle || section.defaultTitle)
    setFormDescription(media.description || subModule?.description || section.description)
    setFormMediaType('video')
    setFormMediaUrl(media.sourceType === 'localhost' ? media.mediaUrl : (subModule?.defaultMediaUrl || section.defaultMediaUrl))
    setFormLocalFileName(media.sourceType === 'localhost' ? media.mediaUrl : '')
    setIsMediaModalOpen(true)
  }

  // Handle Computer file selection with persistent Base64 / Data URL support
  const handleComputerFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    setFormError('')
    const isVid =
      file.type.includes('video') ||
      file.name.endsWith('.mp4') ||
      file.name.endsWith('.webm') ||
      file.name.endsWith('.mov')
    const fileName = file.name
    const fallbackPath = isVid ? `/videos/${fileName}` : `/images/${fileName}`

    setFormMediaType(isVid ? 'video' : 'photo')
    setFormLocalFileName(fileName)

    if (file.size < 25 * 1024 * 1024) {
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

    if (!formTitle || formTitle === targetSection?.defaultTitle || formTitle === targetSubModule?.defaultTitle) {
      setFormTitle(fileName.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' '))
    }
  }

  // Submit Media Modal Form with Strict Validation
  const handleMediaSubmit = (e: React.FormEvent) => {
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

    const section = targetSection || pageConfig.sections[0]
    const subModule = targetSubModule

    const itemId =
      editingItem && !editingItem.id.startsWith('default-')
        ? editingItem.id
        : `pm-${Date.now()}`

    const updatedItem: PageMediaItem = {
      id: itemId,
      pageId: pageConfig.id,
      pageName: pageConfig.name,
      pageSlug: pageConfig.slug,
      sectionId: section.id,
      sectionName: section.name,
      subModuleId: subModule?.id || editingItem?.subModuleId,
      subModuleName: subModule?.name || editingItem?.subModuleName,
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
        (i.pageId === pageConfig.id &&
          i.sectionName.toLowerCase() === section.name.toLowerCase() &&
          ((subModule && i.subModuleId === subModule.id) ||
            (subModule && i.subModuleName?.toLowerCase() === subModule.name.toLowerCase()) ||
            (!subModule && !i.subModuleId && !i.subModuleName)))
    )

    let updatedList: PageMediaItem[]
    if (existingIndex >= 0) {
      updatedList = [...items]
      updatedList[existingIndex] = updatedItem
    } else {
      updatedList = [updatedItem, ...items]
    }

    const label = subModule?.name ? `sub-module "${subModule.name}"` : `section "${section.name}"`
    saveItems(
      updatedList,
      `Successfully updated video for ${label} via ${modalMode === 'url' ? 'Social Media URL' : 'Computer Video'}!`
    )
    setIsMediaModalOpen(false)
  }

  // Open Sub-Module Create / Edit Modal
  const openCreateSubModuleModal = (section: SectionDefinition) => {
    setSubModuleSection(section)
    setSubModuleFormMode('create')
    setSubModuleIdToEdit('')
    setSubModuleNameInput('')
    setSubModuleTitleInput('')
    setSubModuleDescInput('')
    setSubModuleMediaType('video')
    setSubModuleSourceType('localhost')
    setSubModuleMediaUrl('/videos/homepage-hero-bg.mp4')
    setSubModuleFormError('')
    setIsSubModuleModalOpen(true)
  }

  const openEditSubModuleModal = (
    section: SectionDefinition,
    subModule?: SubModuleDefinition,
    customItem?: PageMediaItem
  ) => {
    setSubModuleSection(section)
    setSubModuleFormMode('edit')
    const currentMedia = customItem || getMediaForSubModule(section, subModule)

    setSubModuleIdToEdit(currentMedia.id)
    setSubModuleNameInput(subModule?.name || currentMedia.subModuleName || '')
    setSubModuleTitleInput(currentMedia.title || subModule?.title || '')
    setSubModuleDescInput(currentMedia.description || subModule?.description || '')
    setSubModuleMediaType(currentMedia.mediaType || 'video')
    setSubModuleSourceType(currentMedia.sourceType || 'localhost')
    setSubModuleMediaUrl(currentMedia.mediaUrl || '')
    setSubModuleFormError('')
    setIsSubModuleModalOpen(true)
  }

  // Handle Sub-Module Form Submit
  const handleSubModuleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubModuleFormError('')

    const nameClean = subModuleNameInput.trim().toUpperCase()
    if (!nameClean) {
      setSubModuleFormError('Please enter a sub-module name (e.g. THE SILENT REALITY).')
      return
    }

    if (!subModuleTitleInput.trim()) {
      setSubModuleFormError('Please enter a sub-module title.')
      return
    }

    if (!subModuleMediaUrl.trim()) {
      setSubModuleFormError('Please provide a media URL or file path.')
      return
    }

    const section = subModuleSection || pageConfig.sections[0]
    const subModuleId =
      subModuleFormMode === 'edit' && subModuleIdToEdit && !subModuleIdToEdit.startsWith('default-')
        ? subModuleIdToEdit
        : `sub-${Date.now()}`

    const newItem: PageMediaItem = {
      id: subModuleId,
      pageId: pageConfig.id,
      pageName: pageConfig.name,
      pageSlug: pageConfig.slug,
      sectionId: section.id,
      sectionName: section.name,
      subModuleId: subModuleId,
      subModuleName: nameClean,
      title: subModuleTitleInput.trim(),
      description: subModuleDescInput.trim(),
      mediaType: subModuleMediaType,
      sourceType: subModuleSourceType,
      mediaUrl: subModuleMediaUrl.trim(),
      isActive: true,
      createdAt: new Date().toISOString().split('T')[0],
    }

    const existingIdx = items.findIndex((i) => i.id === newItem.id)
    let updated: PageMediaItem[]
    if (existingIdx >= 0) {
      updated = [...items]
      updated[existingIdx] = newItem
    } else {
      updated = [newItem, ...items]
    }

    saveItems(
      updated,
      `Successfully ${subModuleFormMode === 'create' ? 'created' : 'updated'} sub-module "${nameClean}"!`
    )
    setIsSubModuleModalOpen(false)
  }

  // Toggle active status for Sub-Module or Section
  const toggleStatus = (section: SectionDefinition, subModule?: SubModuleDefinition, customItem?: PageMediaItem) => {
    const current = customItem || getMediaForSubModule(section, subModule)
    const newActive = !current.isActive

    const updatedItem: PageMediaItem = {
      ...current,
      id: current.id.startsWith('default-') ? `pm-${Date.now()}` : current.id,
      isActive: newActive,
    }

    const existingIndex = items.findIndex((i) => i.id === updatedItem.id)
    let updatedList: PageMediaItem[]
    if (existingIndex >= 0) {
      updatedList = [...items]
      updatedList[existingIndex] = updatedItem
    } else {
      updatedList = [updatedItem, ...items]
    }

    const name = subModule?.name || current.subModuleName || section.name
    saveItems(updatedList, `"${name}" is now ${newActive ? 'Active' : 'Disabled'} on the website.`)
  }

  // Reset or Delete Sub-Module / Media
  const handleResetOrDelete = (section: SectionDefinition, subModule?: SubModuleDefinition, customItem?: PageMediaItem) => {
    const current = customItem || getMediaForSubModule(section, subModule)
    const name = subModule?.name || current.subModuleName || section.name

    if (confirm(`Are you sure you want to reset/remove the video for "${name}"?`)) {
      const updatedList = items.filter((i) => i.id !== current.id)
      saveItems(updatedList, `Reset video for "${name}".`)
    }
  }

  return (
    <div className="space-y-6 font-sans pb-20">
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

        {/* Page Title & Stats */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pt-1 border-t border-slate-100">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-50 text-[#4F46E5] text-[11px] font-semibold">
              <Sparkles className="w-3 h-3" />
              <span>Dedicated Page Media &amp; Sub-Module Manager</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#1E293B] tracking-tight">
              {pageConfig.name} — Modules &amp; Sub-Modules
            </h1>
            <p className="text-xs text-slate-500 leading-relaxed max-w-3xl">
              {pageConfig.description} Manage each section and its embedded sub-modules (e.g.{' '}
              <span className="font-bold text-blue-600">THE SILENT REALITY</span>,{' '}
              <span className="font-bold text-sky-600">ORIGIN STORY</span>). Any changes made here
              automatically reflect on the live website in real time.
            </p>
          </div>

          {/* Page Stats */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="px-3 py-2 rounded-xl bg-[#F8FAFC] border border-[#E8ECF4] text-center">
              <p className="text-[10px] uppercase font-bold text-slate-400">Sections</p>
              <p className="text-sm font-bold text-[#1E293B]">{pageConfig.sections.length}</p>
            </div>
            <div className="px-3 py-2 rounded-xl bg-emerald-50/80 border border-emerald-200 text-center">
              <p className="text-[10px] uppercase font-bold text-emerald-600">Live Status</p>
              <p className="text-sm font-bold text-emerald-700">Dynamic Connected</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Sections & Sub-Modules List */}
      <div className="space-y-6">
        {pageConfig.sections.map((section, secIdx) => {
          const configSubModules = section.subModules || []
          const dynamicSubModules = getDynamicSubModulesForSection(section)
          const totalSubModulesCount = configSubModules.length + dynamicSubModules.length

          return (
            <div
              key={section.id}
              className="bg-white border border-[#E8ECF4] rounded-2xl overflow-hidden shadow-xs"
            >
              {/* Module Header Bar */}
              <div className="p-4 bg-[#F8FAFC] border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center font-bold text-xs shrink-0 border border-indigo-100">
                    0{secIdx + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-sm font-bold text-[#1E293B]">{section.name}</h2>
                      {section.subRoute && (
                        <Link
                          href={section.subRoute}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[10px] text-slate-400 hover:text-indigo-600 font-mono hover:underline"
                        >
                          <span>{section.subRoute}</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </Link>
                      )}
                    </div>
                    <p className="text-[11px] text-slate-500 mt-0.5 max-w-2xl">{section.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                  <button
                    onClick={() => openCreateSubModuleModal(section)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#EEF2FF] hover:bg-[#E0E7FF] text-[#4F46E5] text-xs font-bold transition border border-[#C7D2FE] cursor-pointer shadow-2xs"
                    title={`Add dynamic sub-module to ${section.name}`}
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Add Sub-Module</span>
                  </button>
                </div>
              </div>

              {/* Sub-Modules Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs text-[#1E293B] min-w-[960px]">
                  <thead className="bg-[#FAFBFD] border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                    <tr>
                      <th className="py-3 px-4 w-[280px]">Sub-Module / Section Name</th>
                      <th className="py-3 px-4 min-w-[240px]">Current Media Title &amp; Details</th>
                      <th className="py-3 px-4 w-[220px]">Current Media Source</th>
                      <th className="py-3 px-4 w-[90px]">Status</th>
                      <th className="py-3 px-4 w-[280px] min-w-[280px] text-right">Media Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {/* Render Config Sub-Modules (matching Screenshots 4 & 5) */}
                    {configSubModules.map((subModule) => {
                      const media = getMediaForSubModule(section, subModule)
                      return (
                        <tr key={subModule.id} className="hover:bg-[#F8FAFC] transition group">
                          {/* 1. Sub-Module Name with Screenshot 4 & 5 Style */}
                          <td className="py-4 px-4">
                            <div className="flex flex-col gap-1.5">
                              {/* Exact Screenshot 4 & 5 Badge: Colored Line + Uppercase Tracking Text */}
                              <div className="inline-flex items-center gap-2">
                                <span className="h-[2px] w-5 bg-[#0062D2] rounded-full inline-block shrink-0" />
                                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#0062D2]">
                                  {subModule.name}
                                </span>
                              </div>

                              <p className="text-xs font-semibold text-slate-800 leading-snug">
                                {subModule.title}
                              </p>

                              {subModule.description && (
                                <p className="text-[11px] text-slate-400 font-normal leading-relaxed max-w-[240px]">
                                  {subModule.description}
                                </p>
                              )}
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
                              onClick={() => toggleStatus(section, subModule)}
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

                          {/* 5. Media Actions: The Exact Buttons from Screenshot 1 */}
                          <td className="py-4 px-4 whitespace-nowrap text-right">
                            <div className="inline-flex items-center justify-end gap-1.5">
                              {/* Button 1: [🌐 URL] */}
                              <button
                                onClick={() => openUrlModal(section, subModule)}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#EEF2FF] hover:bg-[#E0E7FF] text-[#4F46E5] font-semibold text-xs border border-[#C7D2FE] transition shadow-2xs whitespace-nowrap cursor-pointer"
                                title={`Set Social Media / Web URL for ${subModule.name}`}
                              >
                                <Globe className="w-3.5 h-3.5 text-[#4F46E5]" />
                                <span>URL</span>
                              </button>

                              {/* Button 2: [💾 URL for Computer] */}
                              <button
                                onClick={() => openComputerModal(section, subModule)}
                                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#ECFDF5] hover:bg-[#D1FAE5] text-[#059669] font-semibold text-xs border border-[#A7F3D0] transition shadow-2xs whitespace-nowrap cursor-pointer"
                                title={`Upload Computer Video from This PC for ${subModule.name}`}
                              >
                                <HardDrive className="w-3.5 h-3.5 text-[#059669]" />
                                <span>URL for Computer</span>
                              </button>

                              {/* Button 3: [🗑️] */}
                              <button
                                onClick={() => handleResetOrDelete(section, subModule)}
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

                    {/* Render Any Additional Dynamically Created Sub-Modules */}
                    {dynamicSubModules.map((customItem) => (
                      <tr key={customItem.id} className="hover:bg-[#F8FAFC] transition group bg-indigo-50/20">
                        {/* 1. Dynamic Sub-Module Name */}
                        <td className="py-4 px-4">
                          <div className="flex flex-col gap-1.5">
                            <div className="inline-flex items-center gap-2">
                              <span className="h-[2px] w-5 bg-sky-500 rounded-full inline-block shrink-0" />
                              <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
                                {customItem.subModuleName}
                              </span>
                              <span className="px-1.5 py-0.2 rounded text-[9px] font-bold bg-indigo-100 text-indigo-700">
                                Dynamic
                              </span>
                            </div>

                            <p className="text-xs font-semibold text-slate-800 leading-snug">
                              {customItem.title}
                            </p>

                            {customItem.description && (
                              <p className="text-[11px] text-slate-400 font-normal leading-relaxed max-w-[240px]">
                                {customItem.description}
                              </p>
                            )}
                          </div>
                        </td>

                        {/* 2. Media Title */}
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2.5">
                            <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center shrink-0">
                              <Video className="w-4 h-4" />
                            </div>
                            <div className="min-w-0">
                              <p className="font-bold text-xs text-[#1E293B] truncate max-w-[240px]" title={customItem.title}>
                                {customItem.title}
                              </p>
                              {customItem.description && (
                                <p className="text-[11px] text-slate-400 truncate max-w-[240px]" title={customItem.description}>
                                  {customItem.description}
                                </p>
                              )}
                            </div>
                          </div>
                        </td>

                        {/* 3. Media Source */}
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            {customItem.sourceType === 'url' ? (
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
                            <span className="text-[11px] font-mono text-slate-500 truncate max-w-[110px]" title={customItem.mediaUrl}>
                              {customItem.mediaUrl.startsWith('data:') ? 'Custom Video (PC)' : customItem.mediaUrl}
                            </span>
                            <button
                              onClick={() => setPreviewModalItem(customItem)}
                              className="p-1 rounded text-slate-400 hover:text-[#4F46E5] hover:bg-slate-100 transition cursor-pointer shrink-0"
                              title="Preview Video"
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>

                        {/* 4. Status */}
                        <td className="py-4 px-4 whitespace-nowrap">
                          <button
                            onClick={() => toggleStatus(section, undefined, customItem)}
                            className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold cursor-pointer transition border ${
                              customItem.isActive
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                : 'bg-slate-100 text-slate-500 border-slate-200'
                            }`}
                          >
                            <span className={`w-1.5 h-1.5 rounded-full ${customItem.isActive ? 'bg-emerald-500' : 'bg-slate-400'}`} />
                            <span>{customItem.isActive ? 'Active' : 'Disabled'}</span>
                          </button>
                        </td>

                        {/* 5. Actions */}
                        <td className="py-4 px-4 whitespace-nowrap text-right">
                          <div className="inline-flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => openUrlModal(section, undefined, customItem)}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#EEF2FF] hover:bg-[#E0E7FF] text-[#4F46E5] font-semibold text-xs border border-[#C7D2FE] transition shadow-2xs whitespace-nowrap cursor-pointer"
                            >
                              <Globe className="w-3.5 h-3.5" />
                              <span>URL</span>
                            </button>

                            <button
                              onClick={() => openComputerModal(section, undefined, customItem)}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#ECFDF5] hover:bg-[#D1FAE5] text-[#059669] font-semibold text-xs border border-[#A7F3D0] transition shadow-2xs whitespace-nowrap cursor-pointer"
                            >
                              <HardDrive className="w-3.5 h-3.5" />
                              <span>URL for Computer</span>
                            </button>

                            <button
                              onClick={() => openEditSubModuleModal(section, undefined, customItem)}
                              className="inline-flex items-center justify-center p-1.5 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition shadow-2xs cursor-pointer"
                              title="Edit Sub-Module Details"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>

                            <button
                              onClick={() => handleResetOrDelete(section, undefined, customItem)}
                              className="inline-flex items-center justify-center p-1.5 rounded-md bg-[#FEF2F2] hover:bg-[#FEE2E2] text-[#DC2626] border border-[#FECACA] transition shadow-2xs cursor-pointer"
                              title="Delete Sub-Module"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}

                    {/* If section has no sub-modules at all, render parent section item */}
                    {totalSubModulesCount === 0 && (
                      <tr className="hover:bg-[#F8FAFC] transition group">
                        <td className="py-4 px-4 font-semibold text-[#1E293B]">
                          <div className="flex flex-col gap-1">
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-bold bg-[#EEF2FF] text-[#4F46E5] border border-[#C7D2FE] w-fit">
                              <Layers className="w-3.5 h-3.5 text-[#4F46E5] shrink-0" />
                              <span>{section.name} (Main Section)</span>
                            </div>
                            <span className="text-[11px] text-slate-400 font-normal leading-relaxed max-w-[220px]">
                              {section.description}
                            </span>
                          </div>
                        </td>

                        {/* Media Title */}
                        <td className="py-4 px-4">
                          {(() => {
                            const media = getMediaForSubModule(section)
                            return (
                              <div className="flex items-center gap-2.5">
                                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-[#4F46E5] flex items-center justify-center shrink-0">
                                  <Video className="w-4 h-4" />
                                </div>
                                <div className="min-w-0">
                                  <p className="font-bold text-xs text-[#1E293B] truncate max-w-[240px]">
                                    {media.title}
                                  </p>
                                </div>
                              </div>
                            )
                          })()}
                        </td>

                        {/* Media Source */}
                        <td className="py-4 px-4">
                          {(() => {
                            const media = getMediaForSubModule(section)
                            return (
                              <div className="flex items-center gap-2">
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                                  <span>{media.sourceType === 'url' ? 'Social URL' : 'Computer Video'}</span>
                                </span>
                                <span className="text-[11px] font-mono text-slate-500 truncate max-w-[110px]">
                                  {media.mediaUrl}
                                </span>
                              </div>
                            )
                          })()}
                        </td>

                        {/* Status */}
                        <td className="py-4 px-4">
                          <button
                            onClick={() => toggleStatus(section)}
                            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 cursor-pointer"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span>Active</span>
                          </button>
                        </td>

                        {/* Actions */}
                        <td className="py-4 px-4 text-right">
                          <div className="inline-flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => openUrlModal(section)}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#EEF2FF] hover:bg-[#E0E7FF] text-[#4F46E5] font-semibold text-xs border border-[#C7D2FE] transition cursor-pointer"
                            >
                              <Globe className="w-3.5 h-3.5" />
                              <span>URL</span>
                            </button>
                            <button
                              onClick={() => openComputerModal(section)}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md bg-[#ECFDF5] hover:bg-[#D1FAE5] text-[#059669] font-semibold text-xs border border-[#A7F3D0] transition cursor-pointer"
                            >
                              <HardDrive className="w-3.5 h-3.5" />
                              <span>URL for Computer</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )
        })}
      </div>

      {/* 3. Media Edit Modal (URL Mode vs Computer Mode) */}
      {isMediaModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden">
            {/* Header */}
            <div
              className={`p-5 flex items-center justify-between text-white ${
                modalMode === 'url' ? 'bg-[#1E1B4B]' : 'bg-[#064E3B]'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/10 text-white">
                  {modalMode === 'url' ? <Globe className="w-5 h-5" /> : <HardDrive className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="font-bold text-sm">
                    {modalMode === 'url' ? 'Set Social Media / Web URL' : 'Upload Video from Computer (This PC)'}
                  </h3>
                  <p className="text-[11px] text-white/70">
                    {targetSubModule ? `Sub-Module: ${targetSubModule.name}` : `Section: ${targetSection?.name}`}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsMediaModalOpen(false)}
                className="p-1 rounded-full hover:bg-white/20 text-white transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Form Body */}
            <form onSubmit={handleMediaSubmit} className="p-6 space-y-4 text-xs">
              {formError && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-rose-600" />
                  <p className="text-xs leading-relaxed font-semibold">{formError}</p>
                </div>
              )}

              {/* Title */}
              <div>
                <label className="block font-bold text-[#1E293B] mb-1.5">
                  Media Title <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={formTitle}
                  onChange={(e) => setFormTitle(e.target.value)}
                  placeholder="e.g. The Silent Reality — Founder Story"
                  className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl px-3.5 py-2.5 text-xs text-[#1E293B] focus:outline-none focus:border-[#4F46E5]"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block font-bold text-[#1E293B] mb-1.5">Description (Optional)</label>
                <textarea
                  rows={2}
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  placeholder="Short context or placement details..."
                  className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl px-3.5 py-2 text-xs text-[#1E293B] focus:outline-none focus:border-[#4F46E5] resize-none"
                />
              </div>

              {/* URL MODE INPUT */}
              {modalMode === 'url' ? (
                <div>
                  <label className="block font-bold text-[#1E293B] mb-1.5">
                    Social Media Video URL (YouTube, Vimeo, etc.) <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="url"
                    required
                    value={formMediaUrl}
                    onChange={(e) => setFormMediaUrl(e.target.value)}
                    placeholder="https://www.youtube.com/watch?v=..."
                    className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl px-3.5 py-2.5 text-xs text-[#1E293B] focus:outline-none focus:border-[#4F46E5] font-mono"
                  />
                  <p className="text-[11px] text-slate-400 mt-1">
                    Enter a public YouTube or video link. It will automatically stream on the website.
                  </p>
                </div>
              ) : (
                /* COMPUTER VIDEO MODE INPUT */
                <div>
                  <label className="block font-bold text-[#1E293B] mb-1.5">
                    Select Video from This PC <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative border-2 border-dashed border-emerald-300 hover:border-emerald-500 bg-emerald-50/40 rounded-2xl p-5 text-center transition cursor-pointer group">
                    <input
                      type="file"
                      accept="video/mp4,video/webm,video/ogg,video/quicktime,video/*"
                      onChange={handleComputerFileSelect}
                      className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                    />
                    <UploadCloud className="w-8 h-8 text-emerald-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                    <p className="text-xs font-bold text-slate-700">
                      {formLocalFileName ? (
                        <span className="text-emerald-700 font-semibold">{formLocalFileName}</span>
                      ) : (
                        'Click to browse or drop video file from This PC'
                      )}
                    </p>
                    <p className="text-[10px] text-slate-400 mt-1">MP4, WebM, MOV supported (up to 25MB)</p>
                  </div>

                  <div className="mt-2">
                    <label className="block text-[10px] font-bold text-slate-400 uppercase mb-1">
                      Local Asset Path / Data Source
                    </label>
                    <input
                      type="text"
                      value={formMediaUrl}
                      onChange={(e) => setFormMediaUrl(e.target.value)}
                      placeholder="/videos/my-video.mp4"
                      className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl px-3 py-2 text-xs font-mono text-slate-600"
                    />
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-2.5 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsMediaModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`px-5 py-2 rounded-xl text-white font-bold transition shadow-sm cursor-pointer ${
                    modalMode === 'url' ? 'bg-[#4F46E5] hover:bg-indigo-700' : 'bg-[#059669] hover:bg-emerald-700'
                  }`}
                >
                  Save &amp; Update Live Website
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 4. Sub-Module Create / Edit Modal */}
      {isSubModuleModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="p-5 bg-gradient-to-r from-[#1E1B4B] to-[#312E81] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/10 text-white">
                  <FolderPlus className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-sm">
                    {subModuleFormMode === 'create' ? 'Add New Sub-Module' : 'Edit Sub-Module'}
                  </h3>
                  <p className="text-[11px] text-white/70">Section: {subModuleSection?.name}</p>
                </div>
              </div>
              <button
                onClick={() => setIsSubModuleModalOpen(false)}
                className="p-1 rounded-full hover:bg-white/20 text-white transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubModuleSubmit} className="p-6 space-y-4 text-xs">
              {subModuleFormError && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <p className="text-xs font-semibold">{subModuleFormError}</p>
                </div>
              )}

              {/* Sub-Module Badge / Uppercase Name */}
              <div>
                <label className="block font-bold text-[#1E293B] mb-1">
                  Sub-Module Eyebrow Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={subModuleNameInput}
                  onChange={(e) => setSubModuleNameInput(e.target.value.toUpperCase())}
                  placeholder="e.g. THE SILENT REALITY or ORIGIN STORY"
                  className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl px-3.5 py-2.5 text-xs text-[#1E293B] uppercase tracking-wider font-bold focus:outline-none focus:border-[#4F46E5]"
                />
                <p className="text-[10px] text-slate-400 mt-1">
                  Formatted with the exact style from Screenshot 4 &amp; 5 (`— SUB-MODULE NAME`)
                </p>
              </div>

              {/* Title */}
              <div>
                <label className="block font-bold text-[#1E293B] mb-1">
                  Sub-Module Heading / Title <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={subModuleTitleInput}
                  onChange={(e) => setSubModuleTitleInput(e.target.value)}
                  placeholder="e.g. The problem nobody talks about."
                  className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl px-3.5 py-2.5 text-xs text-[#1E293B] focus:outline-none focus:border-[#4F46E5]"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block font-bold text-[#1E293B] mb-1">Description</label>
                <textarea
                  rows={2}
                  value={subModuleDescInput}
                  onChange={(e) => setSubModuleDescInput(e.target.value)}
                  placeholder="Details regarding this sub-module placement on the page..."
                  className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl px-3.5 py-2 text-xs text-[#1E293B] focus:outline-none focus:border-[#4F46E5] resize-none"
                />
              </div>

              {/* Source Type Toggle */}
              <div>
                <label className="block font-bold text-[#1E293B] mb-1.5">Initial Media Source</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSubModuleSourceType('localhost')
                      if (subModuleMediaUrl.startsWith('http')) setSubModuleMediaUrl('/videos/homepage-hero-bg.mp4')
                    }}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition flex items-center justify-center gap-1.5 cursor-pointer ${
                      subModuleSourceType === 'localhost'
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-700'
                        : 'bg-[#F8FAFC] border-[#E8ECF4] text-slate-600'
                    }`}
                  >
                    <HardDrive className="w-3.5 h-3.5" />
                    <span>Computer Video</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      setSubModuleSourceType('url')
                      if (!subModuleMediaUrl.startsWith('http')) setSubModuleMediaUrl('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
                    }}
                    className={`py-2 px-3 rounded-xl text-xs font-bold border transition flex items-center justify-center gap-1.5 cursor-pointer ${
                      subModuleSourceType === 'url'
                        ? 'bg-blue-50 border-blue-300 text-blue-700'
                        : 'bg-[#F8FAFC] border-[#E8ECF4] text-slate-600'
                    }`}
                  >
                    <Globe className="w-3.5 h-3.5" />
                    <span>Social Media URL</span>
                  </button>
                </div>
              </div>

              {/* Media URL */}
              <div>
                <label className="block font-bold text-[#1E293B] mb-1">
                  Media Path / URL <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  value={subModuleMediaUrl}
                  onChange={(e) => setSubModuleMediaUrl(e.target.value)}
                  placeholder={subModuleSourceType === 'url' ? 'https://www.youtube.com/...' : '/videos/my-video.mp4'}
                  className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl px-3.5 py-2.5 text-xs text-[#1E293B] font-mono focus:outline-none focus:border-[#4F46E5]"
                />
              </div>

              {/* Submit Buttons */}
              <div className="flex items-center justify-end gap-2.5 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsSubModuleModalOpen(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 font-semibold transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl bg-[#4F46E5] hover:bg-indigo-700 text-white font-bold transition shadow-sm cursor-pointer"
                >
                  {subModuleFormMode === 'create' ? 'Create Sub-Module' : 'Save Changes'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 5. Video Preview Modal */}
      {previewModalItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl rounded-2xl bg-white border border-slate-700 shadow-2xl overflow-hidden">
            <div className="p-4 bg-[#131B2E] text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-indigo-400" />
                <span className="font-bold text-xs">{previewModalItem.title}</span>
                {previewModalItem.subModuleName && (
                  <span className="text-[10px] text-indigo-300 font-bold uppercase">
                    ({previewModalItem.subModuleName})
                  </span>
                )}
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
              ) : previewModalItem.mediaUrl.endsWith('.mp4') ||
                previewModalItem.mediaUrl.startsWith('blob:') ||
                previewModalItem.mediaUrl.startsWith('data:') ||
                previewModalItem.sourceType === 'localhost' ? (
                <video
                  src={previewModalItem.mediaUrl}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="p-6 text-center text-slate-400">
                  <p className="text-sm font-semibold">{previewModalItem.title}</p>
                  <p className="text-xs mt-1 font-mono">{previewModalItem.mediaUrl}</p>
                </div>
              )}
            </div>

            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
              <div className="text-xs">
                <span className="font-bold text-slate-700">Source: </span>
                <span className="font-mono text-slate-500 truncate max-w-sm inline-block align-middle">
                  {previewModalItem.mediaUrl.startsWith('data:') ? 'Custom PC Upload' : previewModalItem.mediaUrl}
                </span>
              </div>
              <button
                onClick={() => setPreviewModalItem(null)}
                className="px-4 py-1.5 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold transition cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
