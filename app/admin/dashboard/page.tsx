'use client'

import Link from 'next/link'
import {
  FileText,
  Image as ImageIcon,
  Users,
  Calendar,
  Plus,
  ArrowUpRight,
  TrendingUp,
  Activity,
  CheckCircle2,
} from 'lucide-react'

export default function AdminDashboardPage() {
  const stats = [
    { title: 'Total Blogs & Articles', value: '18 Published', change: '+3 this month', icon: FileText, href: '/admin/blogs' },
    { title: 'Media Library Assets', value: '42 Files', change: '8 videos, 34 images', icon: ImageIcon, href: '/admin/media' },
    { title: 'Active Circles', value: '18 Peer Circles', change: 'Global network', icon: Users, href: '/admin/circles' },
    { title: 'Upcoming Conclaves', value: '4 Scheduled', change: '2026/2027 Season', icon: Calendar, href: '/admin/events' },
  ]

  const recentActivity = [
    { id: 1, type: 'blog', title: 'Empowering Next-Gen Leaders in Global Trade', status: 'Published', time: '2 hours ago' },
    { id: 2, type: 'media', title: 'Global Founder Conclave 2026 Highlight Reel.mp4', status: 'Uploaded', time: '5 hours ago' },
    { id: 3, type: 'blog', title: 'Building Sustainable Supply Chains Across Asia', status: 'Draft Saved', time: '1 day ago' },
    { id: 4, type: 'media', title: 'Peers_Global_Brand_Guidelines_2026.pdf', status: 'Updated', time: '2 days ago' },
  ]

  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-900 border border-slate-800 rounded-2xl p-6 relative overflow-hidden">
        <div className="space-y-1 z-10">
          <h1 className="text-2xl font-bold text-white">Welcome back, Admin</h1>
          <p className="text-sm text-slate-400">
            Manage your blog publications, upload media assets, and keep Peers Global up to date.
          </p>
        </div>
        <div className="flex items-center gap-3 z-10">
          <Link
            href="/admin/blogs"
            className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold text-xs flex items-center gap-2 transition"
          >
            <Plus className="w-4 h-4" />
            New Blog Post
          </Link>
          <Link
            href="/admin/media"
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-medium text-xs flex items-center gap-2 border border-slate-700 transition"
          >
            <ImageIcon className="w-4 h-4 text-amber-400" />
            Upload Media
          </Link>
        </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon
          return (
            <Link
              key={i}
              href={stat.href}
              className="bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-5 transition group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2.5 rounded-xl bg-slate-800 text-amber-400 border border-slate-700 group-hover:scale-105 transition">
                  <Icon className="w-5 h-5" />
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-600 group-hover:text-amber-400 transition" />
              </div>
              <p className="text-xs text-slate-400 font-medium">{stat.title}</p>
              <h3 className="text-xl font-bold text-white mt-1">{stat.value}</h3>
              <p className="text-[11px] text-amber-400/80 mt-2 flex items-center gap-1 font-mono">
                <TrendingUp className="w-3 h-3" /> {stat.change}
              </p>
            </Link>
          )
        })}
      </div>

      {/* Dashboard Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Activity */}
        <div className="lg:col-span-2 bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Activity className="w-4 h-4 text-amber-400" />
              Recent Admin Activity
            </h2>
            <span className="text-xs text-slate-500">Real-time log</span>
          </div>

          <div className="divide-y divide-slate-800/60">
            {recentActivity.map((act) => (
              <div key={act.id} className="py-3.5 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 shrink-0">
                    {act.type === 'blog' ? <FileText className="w-4 h-4 text-amber-400" /> : <ImageIcon className="w-4 h-4 text-blue-400" />}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-200 line-clamp-1">{act.title}</p>
                    <p className="text-[10px] text-slate-400">{act.time}</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-400 text-[10px] font-medium border border-amber-500/20 shrink-0">
                  {act.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Help & Platform Sync */}
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            System Integration Status
          </h2>
          <div className="space-y-3 text-xs text-slate-300">
            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <p className="font-semibold text-slate-200">WordPress Feed API</p>
              <p className="text-[11px] text-emerald-400">● Connected (https://peersglobal.com)</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <p className="font-semibold text-slate-200">Local Content Storage</p>
              <p className="text-[11px] text-emerald-400">● Active (IndexedDB / LocalStorage fallback)</p>
            </div>

            <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
              <p className="font-semibold text-slate-200">Media CDN</p>
              <p className="text-[11px] text-emerald-400">● Public Assets ready</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
