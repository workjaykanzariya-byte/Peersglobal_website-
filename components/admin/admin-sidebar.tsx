'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  LayoutDashboard,
  FileText,
  Image as ImageIcon,
  FolderTree,
  Calendar,
  Settings,
  LogOut,
  Sparkles,
  ExternalLink,
  ShieldCheck,
  User,
} from 'lucide-react'
import { useAdminAuth, FeaturePermissions } from './admin-auth-context'

export function AdminSidebar() {
  const pathname = usePathname()
  const { logout, user, hasAccess } = useAdminAuth()

  const allNavItems: {
    label: string
    href: string
    icon: any
    key: keyof FeaturePermissions
  }[] = [
    { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard, key: 'dashboard' },
    { label: 'Blog Posts', href: '/admin/blogs', icon: FileText, key: 'blogs' },
    { label: 'Media Library', href: '/admin/media', icon: ImageIcon, key: 'media' },
    { label: 'Circles / Initiatives', href: '/admin/circles', icon: FolderTree, key: 'circles' },
    { label: 'Events & Conclaves', href: '/admin/events', icon: Calendar, key: 'events' },
    { label: 'Settings & Users', href: '/admin/settings', icon: Settings, key: 'settings' },
  ]

  // Filter items based on user's granted permissions
  const navItems = allNavItems.filter((item) => hasAccess(item.key))

  return (
    <aside className="w-64 bg-slate-900 border-r border-slate-800 text-slate-300 flex flex-col justify-between min-h-screen">
      <div>
        {/* Brand Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-300 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-amber-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h1 className="font-bold text-white tracking-wide text-sm">PEERS GLOBAL</h1>
              <p className="text-[11px] text-amber-400 font-mono tracking-wider">ADMIN PORTAL</p>
            </div>
          </div>
        </div>

        {/* User Card */}
        {user && (
          <div className="mx-4 mt-4 p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center font-semibold text-xs shrink-0">
              <User className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold text-white truncate">{user.name || user.username}</p>
              <p className="text-[10px] text-amber-400 font-mono truncate">{user.role || 'Admin User'}</p>
            </div>
          </div>
        )}

        {/* Navigation Links */}
        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href))
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-amber-500/10 text-amber-400 border border-amber-500/30 font-semibold'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                {item.label}
              </Link>
            )
          })}
        </nav>
      </div>

      {/* Footer / Quick Actions */}
      <div className="p-4 border-t border-slate-800 space-y-3">
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-4 py-2.5 rounded-lg text-xs text-slate-400 hover:text-white bg-slate-950/60 border border-slate-800 transition"
        >
          <span className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            View Live Site
          </span>
          <ExternalLink className="w-3 h-3 text-slate-500" />
        </Link>

        <button
          onClick={logout}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-xs font-medium text-red-400 hover:bg-red-500/10 hover:border-red-500/30 border border-transparent transition"
        >
          <LogOut className="w-4 h-4" />
          Logout Session
        </button>
      </div>
    </aside>
  )
}
