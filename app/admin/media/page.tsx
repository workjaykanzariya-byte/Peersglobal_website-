'use client'

import React, { useState, useEffect } from 'react'
import {
  Image as ImageIcon,
  UploadCloud,
  Search,
  Copy,
  Check,
  MoreHorizontal,
  LayoutGrid,
  List,
  Plus,
  Calendar,
  Layers,
  FileVideo,
  FileText,
  Trash2,
} from 'lucide-react'

interface MediaAsset {
  id: string
  name: string
  type: 'image' | 'video' | 'document'
  category: string
  badgeBg: string
  badgeText: string
  size: string
  uploadDate: string
  previewType: 'image_url' | 'brand_logo'
  imageUrl?: string
}

const INITIAL_MEDIA: MediaAsset[] = [
  {
    id: 'm1',
    name: 'Mission_2030_Cover.jpg',
    type: 'video',
    category: 'Brand',
    badgeBg: 'bg-[#EBF3FF]',
    badgeText: 'text-[#1E6BFF]',
    size: '2.1 MB',
    uploadDate: '2026-07-25',
    previewType: 'image_url',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'm2',
    name: 'Peers_Global_Membership_Deck.pdf',
    type: 'document',
    category: 'Document',
    badgeBg: 'bg-[#FFF6E9]',
    badgeText: 'text-[#E68A00]',
    size: '4.6 MB',
    uploadDate: '2026-07-20',
    previewType: 'image_url',
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'm3',
    name: 'Founder_Circle_Meetup_Delhi.jpg',
    type: 'image',
    category: 'Events',
    badgeBg: 'bg-[#F0EBFF]',
    badgeText: 'text-[#7B39FC]',
    size: '1.4 MB',
    uploadDate: '2026-07-15',
    previewType: 'image_url',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'm4',
    name: 'Peers_Conclave_2026_Teaser.mp4',
    type: 'video',
    category: 'Events',
    badgeBg: 'bg-[#F0EBFF]',
    badgeText: 'text-[#7B39FC]',
    size: '3.8 MB',
    uploadDate: '2026-07-10',
    previewType: 'image_url',
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'm5',
    name: 'Brand_Logo.png',
    type: 'image',
    category: 'Brand',
    badgeBg: 'bg-[#EBF3FF]',
    badgeText: 'text-[#1E6BFF]',
    size: '1.2 MB',
    uploadDate: '2026-07-05',
    previewType: 'brand_logo',
  },
  {
    id: 'm6',
    name: 'Conclave_Highlights.mp4',
    type: 'video',
    category: 'Events',
    badgeBg: 'bg-[#F0EBFF]',
    badgeText: 'text-[#7B39FC]',
    size: '5.6 MB',
    uploadDate: '2026-07-01',
    previewType: 'image_url',
    imageUrl: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'm7',
    name: 'Office_Workspace.jpg',
    type: 'image',
    category: 'General',
    badgeBg: 'bg-[#EAF5FF]',
    badgeText: 'text-[#0284C7]',
    size: '2.8 MB',
    uploadDate: '2026-06-28',
    previewType: 'image_url',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'm8',
    name: 'Partnership_Visual.jpg',
    type: 'image',
    category: 'Partnerships',
    badgeBg: 'bg-[#E6F9F4]',
    badgeText: 'text-[#0D9488]',
    size: '3.3 MB',
    uploadDate: '2026-06-25',
    previewType: 'image_url',
    imageUrl: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?q=80&w=800&auto=format&fit=crop',
  },
]

export default function AdminMediaPage() {
  const [mediaList, setMediaList] = useState<MediaAsset[]>(INITIAL_MEDIA)
  const [search, setSearch] = useState('')
  const [activeFilter, setActiveFilter] = useState<'All' | 'Images' | 'Videos' | 'Documents'>('All')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [copiedId, setCopiedId] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem('peers_admin_media_items')
    if (saved) {
      try {
        setMediaList(JSON.parse(saved))
      } catch {
        setMediaList(INITIAL_MEDIA)
      }
    }
  }, [])

  const saveList = (items: MediaAsset[]) => {
    setMediaList(items)
    localStorage.setItem('peers_admin_media_items', JSON.stringify(items))
  }

  const handleCopyLink = (id: string, name: string) => {
    navigator.clipboard.writeText(`https://peersglobal.org/media/${name}`)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this asset?')) {
      const updated = mediaList.filter((m) => m.id !== id)
      saveList(updated)
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (!files || files.length === 0) return

    setIsUploading(true)
    setTimeout(() => {
      const newItems: MediaAsset[] = Array.from(files).map((file, idx) => {
        const isVid = file.type.includes('video')
        const isDoc = file.type.includes('pdf') || file.type.includes('doc')
        return {
          id: String(Date.now() + idx),
          name: file.name,
          type: isVid ? 'video' : isDoc ? 'document' : 'image',
          category: 'General',
          badgeBg: 'bg-[#EBF3FF]',
          badgeText: 'text-[#1E6BFF]',
          size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
          uploadDate: new Date().toISOString().split('T')[0],
          previewType: isVid ? 'brand_logo' : 'image_url',
          imageUrl: URL.createObjectURL(file),
        }
      })
      saveList([...newItems, ...mediaList])
      setIsUploading(false)
    }, 800)
  }

  const filteredMedia = mediaList.filter((m) => {
    const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase())
    if (activeFilter === 'Images') return matchesSearch && m.type === 'image'
    if (activeFilter === 'Videos') return matchesSearch && m.type === 'video'
    if (activeFilter === 'Documents') return matchesSearch && m.type === 'document'
    return matchesSearch
  })

  return (
    <div className="space-y-6 font-sans pb-16">
      {/* 1. Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-[#E8ECF4] shadow-xs">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-[#4F46E5] flex items-center justify-center shrink-0">
            <ImageIcon className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-[#1E293B] tracking-tight">Media Library &amp; Assets</h1>
            <p className="text-xs text-slate-500 mt-0.5">
              Upload images, conclave videos, and brand collateral for the Peers Global website.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <label className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#4F46E5] hover:bg-[#4338CA] text-white text-xs font-semibold shadow-xs transition cursor-pointer">
            <Plus className="w-4 h-4" />
            <span>Upload New Asset</span>
            <input
              type="file"
              multiple
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>
      </div>

      {/* 2. Drag & Drop Upload Zone */}
      <div className="bg-white border-2 border-dashed border-[#D2DCED] hover:border-[#4F46E5] rounded-2xl p-6 transition-all relative flex flex-col items-center justify-center text-center cursor-pointer group shadow-xs">
        <input
          type="file"
          multiple
          onChange={handleFileUpload}
          className="absolute inset-0 opacity-0 cursor-pointer z-10"
        />
        <div className="flex flex-col items-center gap-2 pointer-events-none">
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-[#4F46E5] flex items-center justify-center group-hover:scale-110 transition-transform">
            <UploadCloud className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs sm:text-sm font-bold text-[#1E293B]">
              {isUploading ? 'Uploading files...' : 'Drag & drop files or click to upload'}
            </p>
            <p className="text-[11px] text-slate-400 mt-0.5">Supports PNG, JPG, WEBP, MP4, PDF (Up to 100MB)</p>
          </div>
        </div>
      </div>

      {/* 3. Search & Filter Tabs */}
      <div className="bg-white border border-[#E8ECF4] rounded-2xl p-4 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Search */}
        <div className="relative w-full sm:flex-1">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search media files by name..."
            className="w-full bg-[#F8FAFC] border border-[#E8ECF4] rounded-xl pl-10 pr-4 py-2 text-xs text-[#1E293B] placeholder:text-slate-400 focus:outline-none focus:border-[#4F46E5] transition"
          />
        </div>

        {/* Filter Tabs */}
        <div className="inline-flex items-center p-1 rounded-xl bg-[#F4F6FB] border border-[#E8ECF4] text-xs">
          {(
            [
              { label: 'All', icon: null },
              { label: 'Images', icon: ImageIcon },
              { label: 'Videos', icon: FileVideo },
              { label: 'Documents', icon: FileText },
            ] as const
          ).map((tab) => {
            const Icon = tab.icon
            const isActive = activeFilter === tab.label
            return (
              <button
                key={tab.label}
                onClick={() => setActiveFilter(tab.label)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  isActive
                    ? 'bg-white text-[#4F46E5] shadow-xs'
                    : 'text-slate-500 hover:text-[#1E293B]'
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                <span>{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* View Mode */}
        <div className="flex items-center bg-[#F4F6FB] border border-[#E8ECF4] rounded-xl p-1">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-1.5 rounded-lg transition cursor-pointer ${
              viewMode === 'grid' ? 'bg-white text-[#4F46E5] shadow-xs' : 'text-slate-400 hover:text-slate-600'
            }`}
            title="Grid View"
          >
            <LayoutGrid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-1.5 rounded-lg transition cursor-pointer ${
              viewMode === 'list' ? 'bg-white text-[#4F46E5] shadow-xs' : 'text-slate-400 hover:text-slate-600'
            }`}
            title="List View"
          >
            <List className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* 4. Media Asset Cards Grid / List */}
      <div
        className={
          viewMode === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'
            : 'flex flex-col gap-3'
        }
      >
        {filteredMedia.map((asset) => (
          <div
            key={asset.id}
            className="bg-white border border-[#E8ECF4] rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
          >
            {/* Asset Preview Window */}
            <div className="relative h-44 w-full bg-[#0F172A] overflow-hidden flex items-center justify-center">
              {asset.previewType === 'brand_logo' ? (
                <div className="flex flex-col items-center justify-center gap-2 text-white">
                  <div className="w-12 h-12 rounded-full border border-indigo-400/40 flex items-center justify-center bg-indigo-500/20 text-[#818CF8]">
                    <span className="font-serif font-black text-xl tracking-wider">PG</span>
                  </div>
                  <span className="text-xs font-bold tracking-widest text-slate-100 uppercase">PEERS GLOBAL</span>
                </div>
              ) : asset.imageUrl ? (
                <img
                  src={asset.imageUrl}
                  alt={asset.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                <div className="flex flex-col items-center gap-1.5 text-indigo-300">
                  <FileText className="w-8 h-8" />
                  <span className="text-[11px] font-semibold">{asset.name}</span>
                </div>
              )}

              {/* Type Pill Badge (Top Left) */}
              <div className="absolute top-3 left-3">
                <span
                  className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wide shadow-xs ${
                    asset.type === 'video'
                      ? 'bg-purple-600/90 text-white'
                      : 'bg-emerald-600/90 text-white'
                  }`}
                >
                  {asset.type === 'video' ? <FileVideo className="w-3 h-3" /> : <ImageIcon className="w-3 h-3" />}
                  <span className="capitalize">{asset.type}</span>
                </span>
              </div>

              {/* Size Pill Badge (Top Right) */}
              <div className="absolute top-3 right-3">
                <span className="inline-block px-2.5 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-white text-[10px] font-medium border border-white/20">
                  {asset.size}
                </span>
              </div>
            </div>

            {/* Asset Information Body */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <p className="text-xs font-bold text-[#1E293B] truncate hover:text-[#4F46E5] transition cursor-pointer" title={asset.name}>
                  {asset.name}
                </p>
                <div className="flex items-center justify-between mt-2">
                  <span className={`px-2 py-0.5 rounded-md text-[10px] font-semibold ${asset.badgeBg} ${asset.badgeText}`}>
                    {asset.category}
                  </span>
                  <div className="flex items-center gap-1 text-[10px] text-slate-400">
                    <Calendar className="w-3 h-3" />
                    <span>{asset.uploadDate}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => handleCopyLink(asset.id, asset.name)}
                  className="flex items-center gap-1.5 text-[11px] font-semibold text-slate-600 hover:text-[#4F46E5] transition cursor-pointer"
                >
                  {copiedId === asset.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-600">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Link</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => handleDelete(asset.id)}
                  className="p-1 rounded-md text-slate-400 hover:text-red-500 hover:bg-red-50 transition cursor-pointer"
                  title="Delete Asset"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
