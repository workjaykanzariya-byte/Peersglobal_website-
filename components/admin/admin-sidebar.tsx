'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  Handshake,
  Compass,
  Building2,
  FileText,
  Image as ImageIcon,
  MonitorPlay,
  FolderTree,
  Calendar,
  MessageSquare,
  TrendingUp,
  Settings,
  HelpCircle,
  LogOut,
  ExternalLink,
  ChevronRight,
  Sparkles,
} from 'lucide-react'
import { useAdminAuth } from './admin-auth-context'

export function AdminSidebar() {
  const pathname = usePathname()
  const { logout } = useAdminAuth()

  const navItems = [
    { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Partnerships', href: '/admin/partnerships', icon: Handshake, badge: '86' },
    { label: 'Opportunities', href: '/admin/opportunities', icon: Compass, badge: 'New' },
    { label: 'Companies', href: '/admin/companies', icon: Building2 },
    { label: 'Publications', href: '/admin/blogs', icon: FileText },
    { label: 'Media Library', href: '/admin/media', icon: ImageIcon },
    { label: 'Page Medias', href: '/admin/page-media', icon: MonitorPlay },
    { label: 'Peer Circles', href: '/admin/circles', icon: FolderTree },
    { label: 'Conclaves & Events', href: '/admin/events', icon: Calendar },
    { label: 'Messages', href: '/admin/messages', icon: MessageSquare, badge: '4' },
    { label: 'Analytics', href: '/admin/analytics', icon: TrendingUp },
    { label: 'Settings & Users', href: '/admin/settings', icon: Settings },
    { label: 'Help & Support', href: '/admin/help', icon: HelpCircle },
  ]

  return (
    <aside className="w-64 bg-[#131B2E] text-slate-300 flex flex-col justify-between h-screen shrink-0 border-r border-[#1E293B] select-none font-sans z-30 sticky top-0 overflow-hidden">
      {/* Brand Header with Peers Global Logo - Fixed Top */}
      <div className="p-5 border-b border-[#1E293B] flex items-center justify-between shrink-0 bg-[#131B2E]">
        <Link href="/admin/dashboard" className="flex items-center gap-3 group">
          <div className="relative h-10 w-44 shrink-0">
            <Image
              src="/images/logo-full.png"
              alt="Peers Global"
              fill
              className="object-contain object-left brightness-0 invert"
              priority
            />
          </div>
        </Link>
      </div>

      {/* Navigation - Independent Scrollable Platform Menu Area */}
      <div className="flex-1 overflow-y-auto p-3 space-y-1 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-slate-700/50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
        <div className="px-3 pb-1.5 text-[10px] font-bold uppercase tracking-wider text-[#64748B]">
          Platform Menu
        </div>
        <nav className="space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || (item.href !== '/admin/dashboard' && pathname.startsWith(item.href))
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all group ${
                  isActive
                    ? 'bg-[#242D4A] text-white font-semibold border-l-[3px] border-[#6366F1] shadow-xs'
                    : 'text-[#8A99AD] hover:text-white hover:bg-[#1A233A]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-4 h-4 transition-colors ${
                      isActive ? 'text-[#818CF8]' : 'text-[#8A99AD] group-hover:text-slate-200'
                    }`}
                  />
                  <span>{item.label}</span>
                </div>
                {item.badge ? (
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      isActive
                        ? 'bg-[#4F46E5] text-white'
                        : item.badge === 'New'
                        ? 'bg-purple-950/60 text-purple-300 border border-purple-800/50'
                        : 'bg-indigo-950/60 text-indigo-300 border border-indigo-800/50'
                    }`}
                  >
                    {item.badge}
                  </span>
                ) : (
                  <ChevronRight className={`w-3.5 h-3.5 opacity-0 group-hover:opacity-60 transition-opacity ${isActive ? 'opacity-40 text-slate-300' : 'text-[#64748B]'}`} />
                )}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Admin Profile & Footer - Fixed Bottom */}
      <div className="p-4 border-t border-[#1E293B] space-y-2.5 bg-[#0F1626] shrink-0">
        {/* Live Site Link */}
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-3 py-2 rounded-xl text-xs text-[#8A99AD] hover:text-white hover:bg-[#1A233A] transition border border-[#1E293B]"
        >
          <span className="flex items-center gap-2">
            <ExternalLink className="w-3.5 h-3.5 text-[#818CF8]" />
            <span>View Live Site</span>
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-[#64748B]" />
        </Link>

        {/* Logout Action */}
        <button
          onClick={logout}
          className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-red-400 hover:bg-red-500/10 border border-[#1E293B] hover:border-red-500/30 transition cursor-pointer group"
        >
          <span className="flex items-center gap-2.5">
            <LogOut className="w-4 h-4 text-slate-400 group-hover:text-red-400 transition-colors" />
            <span>Logout</span>
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-[#64748B] group-hover:text-red-400 transition-colors" />
        </button>
      </div>
    </aside>
  )
}
