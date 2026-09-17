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
  const { logout, user } = useAdminAuth()

  const navItems = [
    { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { label: 'Partnerships', href: '/admin/partnerships', icon: Handshake, badge: '86' },
    { label: 'Opportunities', href: '/admin/opportunities', icon: Compass, badge: 'New' },
    { label: 'Companies', href: '/admin/companies', icon: Building2 },
    { label: 'Publications', href: '/admin/blogs', icon: FileText },
    { label: 'Media Library', href: '/admin/media', icon: ImageIcon },
    { label: 'Peer Circles', href: '/admin/circles', icon: FolderTree },
    { label: 'Conclaves & Events', href: '/admin/events', icon: Calendar },
    { label: 'Messages', href: '/admin/messages', icon: MessageSquare, badge: '4' },
    { label: 'Analytics', href: '/admin/analytics', icon: TrendingUp },
    { label: 'Settings & Users', href: '/admin/settings', icon: Settings },
    { label: 'Help & Support', href: '/admin/help', icon: HelpCircle },
  ]

  return (
    <aside className="w-64 bg-[#07152E] text-slate-300 flex flex-col justify-between min-h-screen shrink-0 border-r border-[#0E2246] select-none font-sans z-30">
      <div>

        {/* Navigation */}
        <nav className="p-3.5 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || (item.href !== '/admin/dashboard' && pathname.startsWith(item.href))
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all group ${
                  isActive
                    ? 'bg-gradient-to-r from-[#1769FF] to-[#08C7E8]/80 text-white shadow-lg shadow-[#1769FF]/25 font-semibold'
                    : 'text-slate-400 hover:text-white hover:bg-[#0E2246]/70'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon
                    className={`w-4 h-4 transition-transform group-hover:scale-110 ${
                      isActive ? 'text-white' : 'text-slate-400 group-hover:text-[#08C7E8]'
                    }`}
                  />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                      isActive
                        ? 'bg-white/20 text-white'
                        : item.badge === 'New'
                        ? 'bg-[#08C7E8]/20 text-[#08C7E8]'
                        : 'bg-[#1769FF]/20 text-[#1769FF]'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Admin Profile & Footer */}
      <div className="p-4 border-t border-[#0E2246] space-y-3 bg-[#051024]/60">
        {/* Live Site Link */}
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-3 py-2 rounded-xl text-xs text-slate-400 hover:text-white hover:bg-[#0E2246] transition border border-[#0E2246]/60"
        >
          <span className="flex items-center gap-2">
            <ExternalLink className="w-3.5 h-3.5 text-[#08C7E8]" />
            <span>View Live Site</span>
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
        </Link>

        {/* User Card */}
        <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#07152E] border border-[#0E2246]">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#1769FF] to-[#08C7E8] text-white flex items-center justify-center font-bold text-xs shadow-md shrink-0">
              {user?.name ? user.name.slice(0, 2).toUpperCase() : 'AD'}
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-white truncate">{user?.name || 'Admin User'}</p>
              <p className="text-[10px] text-slate-400 truncate">{user?.email || 'admin@peersglobal.com'}</p>
            </div>
          </div>
          <button
            onClick={logout}
            title="Logout"
            className="p-1.5 text-slate-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </aside>
  )
}
