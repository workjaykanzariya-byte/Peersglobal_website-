'use client'

import React, { useState, useEffect } from 'react'
import {
  Image as ImageIcon,
  UploadCloud,
  Search,
  Copy,
  Check,
  Trash2,
  FileVideo,
  FileText,
  Filter,
  ExternalLink,
  Sparkles,
} from 'lucide-react'

interface MediaAsset {
  id: string
  name: string
  url: string
  type: 'image' | 'video' | 'document'
  category: string
  size: string
  uploadDate: string
}

const INITIAL_MEDIA: MediaAsset[] = [
  {
    id: 'm1',
    name: 'Peers_Global_Conclave_2026_Keynote.mp4',
    url: '/videos/hero-bg.mp4',
    type: 'video',
    category: 'Events',
    size: '18.4 MB',
    uploadDate: '2026-07-28',
  },
  {
    id: 'm2',
    name: 'Mission_2030_Cover.jpg',
    url: '/images/mission-2030.jpg',
    type: 'image',
    category: 'Brand',
    size: '2.1 MB',
    uploadDate: '2026-07-25',
  },
  {
    id: 'm3',
    name: 'Peers_Global_Membership_Deck.pdf',
    url: '/assets/Peers_Global_Membership_Deck.pdf',
    type: 'document',
    category: 'Documents',
    size: '4.8 MB',
    uploadDate: '2026-07-20',
  },
  {
    id: 'm4',
    name: 'Founder_Circle_Meetup_Delhi.jpg',
    url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop',
    type: 'image',
    category: 'Events',
    size: '1.4 MB',
    uploadDate: '2026-07-15',
  },
]

export default function AdminMediaPage() {
  const [mediaList, setMediaList] = useState<MediaAsset[]>([])
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('all')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  // Simulation upload state
  const [isUploading, setIsUploading] = useState(false)
  const [uploadCategory, setUploadCategory] = useState('Brand')

  useEffect(() => {
    const saved = localStorage.getItem('peers_admin_media')
    if (saved) {
      try {
        setMediaList(JSON.parse(saved))
      } catch {
        setMediaList(INITIAL_MEDIA)
      }
    } else {
      setMediaList(INITIAL_MEDIA)
    }
  }, [])

  const saveMediaList = (updated: MediaAsset[]) => {
    setMediaList(updated)
    localStorage.setItem('peers_admin_media', JSON.stringify(updated))
  }

  const handleSimulateUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
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
          url: URL.createObjectURL(file),
          type: isVid ? 'video' : isDoc ? 'document' : 'image',
          category: uploadCategory,
          size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
          uploadDate: new Date().toISOString().split('T')[0],
        }
      })

      saveMediaList([...newItems, ...mediaList])
      setIsUploading(false)
    }, 1000)
  }

  const handleCopyUrl = (id: string, url: string) => {
    navigator.clipboard.writeText(url)
    setCopiedId(id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const handleDelete = (id: string) => {
    if (confirm('Delete this asset from media library?')) {
      const updated = mediaList.filter((m) => m.id !== id)
      saveMediaList(updated)
    }
  }

  const filteredMedia = mediaList.filter((m) => {
    const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase())
    const matchesType = typeFilter === 'all' || m.type === typeFilter
    return matchesSearch && matchesType
  })

  return (
    <div className="space-y-6 font-sans">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-blue-600/15 text-blue-400 border border-blue-500/20 flex items-center justify-center">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white font-display">Media Library & Assets</h1>
              <p className="text-xs text-slate-400 mt-0.5">
                Upload images, conclave videos, and brand collateral for the Peers Global website.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Dropzone Box */}
      <div className="bg-[#0B1220]/90 border-2 border-dashed border-blue-900/40 hover:border-blue-500/60 rounded-2xl p-8 text-center transition-all group relative cursor-pointer shadow-sm">
        <input
          type="file"
          multiple
          onChange={handleSimulateUpload}
          className="absolute inset-0 opacity-0 cursor-pointer z-10"
        />
        <div className="flex flex-col items-center justify-center space-y-3 pointer-events-none">
          <div className="p-4 rounded-2xl bg-blue-600/10 text-blue-400 border border-blue-500/20 group-hover:scale-110 transition-transform shadow-md">
            <UploadCloud className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white">
              {isUploading ? 'Uploading assets...' : 'Drag & drop files or click to upload'}
            </p>
            <p className="text-xs text-slate-400 mt-1">Supports PNG, JPG, WEBP, MP4, PDF (Up to 100MB)</p>
          </div>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="flex flex-col md:flex-row items-center gap-3.5 bg-[#0B1220]/80 border border-slate-800/90 rounded-2xl p-3.5 shadow-sm">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search media files by name..."
            className="w-full bg-[#070D18] border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-[#1E4ED8] focus:ring-1 focus:ring-[#1E4ED8]/30 transition"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto">
          {['all', 'image', 'video', 'document'].map((t) => (
            <button
              key={t}
              onClick={() => setTypeFilter(t)}
              className={`px-3 py-1.5 rounded-xl text-xs capitalize transition cursor-pointer ${
                typeFilter === t
                  ? 'bg-blue-600/20 text-blue-400 border border-blue-500/40 font-semibold'
                  : 'bg-[#070D18] text-slate-400 border border-slate-800 hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredMedia.map((asset) => (
          <div
            key={asset.id}
            className="bg-[#0B1220]/80 border border-slate-800/90 rounded-2xl p-3 flex flex-col justify-between space-y-3 hover:border-blue-500/30 transition shadow-sm"
          >
            {/* Preview Box */}
            <div className="h-36 rounded-xl bg-[#070D18] border border-slate-800/80 overflow-hidden relative flex items-center justify-center group">
              {asset.type === 'image' ? (
                <img src={asset.url} alt={asset.name} className="w-full h-full object-cover" />
              ) : asset.type === 'video' ? (
                <div className="flex flex-col items-center gap-2 text-blue-400">
                  <FileVideo className="w-9 h-9" />
                  <span className="text-[10px] font-mono font-medium">VIDEO ASSET</span>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-2 text-sky-400">
                  <FileText className="w-9 h-9" />
                  <span className="text-[10px] font-mono font-medium">DOCUMENT</span>
                </div>
              )}

              <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-[#070D18]/90 text-blue-300 text-[10px] font-mono border border-slate-800">
                {asset.size}
              </span>
            </div>

            {/* Asset Details */}
            <div className="space-y-1">
              <p className="text-xs font-semibold text-white truncate" title={asset.name}>
                {asset.name}
              </p>
              <div className="flex items-center justify-between text-[11px] text-slate-400">
                <span className="px-1.5 py-0.5 rounded bg-slate-800/80 text-[10px]">{asset.category}</span>
                <span>{asset.uploadDate}</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80">
              <button
                onClick={() => handleCopyUrl(asset.id, asset.url)}
                className="flex-1 px-2.5 py-1.5 rounded-lg bg-[#0F172A] hover:bg-slate-800 text-slate-200 text-xs font-medium flex items-center justify-center gap-1.5 transition border border-slate-800 cursor-pointer"
              >
                {copiedId === asset.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400 text-[11px]">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-slate-400" />
                    <span className="text-[11px]">Copy Link</span>
                  </>
                )}
              </button>
              <button
                onClick={() => handleDelete(asset.id)}
                className="p-1.5 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-400 transition border border-red-500/20 cursor-pointer"
                title="Delete Asset"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
