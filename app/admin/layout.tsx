'use client'

import React, { useState } from 'react'
import { AdminAuthProvider, useAdminAuth } from '@/components/admin/admin-auth-context'
import { AdminSidebar } from '@/components/admin/admin-sidebar'
import { usePathname, useRouter } from 'next/navigation'
import {
  Search,
  Bell,
  MessageSquare,
  Plus,
  ChevronDown,
  Globe,
  ExternalLink,
  Shield,
  User,
  Settings,
  LogOut,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'

function AdminLayoutInner({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, user, logout } = useAdminAuth()
  const pathname = usePathname()
  const router = useRouter()
  const [profileOpen, setProfileOpen] = useState(false)

  const isLoginPage = pathname === '/admin/login'

  React.useEffect(() => {
    if (!isAuthenticated && !isLoginPage) {
      router.push('/admin/login')
    }
  }, [isAuthenticated, isLoginPage, router])

  if (isLoginPage) {
    return <main className="min-h-screen bg-[#131B2E] text-slate-100 font-sans">{children}</main>
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="h-screen w-screen overflow-hidden bg-[#F4F6FB] text-[#1E293B] flex font-sans antialiased selection:bg-[#4F46E5] selection:text-white">
      {/* 1. Left Sidebar */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        {/* 2. Top Navbar */}
        <header className="h-16 bg-white border-b border-[#E8ECF4] px-6 lg:px-8 flex items-center justify-between shrink-0 sticky top-0 z-20">
          {/* Left Greeting */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold text-[#1E293B]">
              <span>☀️</span>
              <span>Good Morning, {user?.name || 'Trushali'}</span>
            </div>
          </div>

          {/* Center Search Bar */}
          <div className="relative w-64 md:w-80 hidden sm:block">
            <Search className="w-3.5 h-3.5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-[#F1F4F9] border-0 rounded-full pl-9 pr-4 py-1.5 text-xs text-slate-700 placeholder:text-slate-400 focus:bg-white focus:ring-2 focus:ring-[#4F46E5]/20 transition outline-none"
            />
          </div>

          {/* Right Tools & Profile */}
          <div className="flex items-center gap-2.5 md:gap-3">
            {/* Quick Actions Button */}
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white hover:bg-slate-50 border border-[#E2E8F0] text-slate-700 text-xs font-semibold shadow-xs transition cursor-pointer">
              <span className="text-amber-500">⚡</span>
              <span>Quick Actions</span>
              <ChevronDown className="w-3 h-3 text-slate-400" />
            </button>

            {/* Global Admin Badge */}
            <div className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDE9FE] text-[#6D28D9] border border-[#DDD6FE] text-xs font-semibold">
              <Shield className="w-3.5 h-3.5" />
              <span>Global Admin</span>
            </div>

            {/* Notification Icon */}
            <button
              className="p-2 rounded-xl bg-[#F8FAFC] hover:bg-slate-100 border border-[#E8ECF4] text-slate-600 transition relative cursor-pointer"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-[#EF4444] text-white text-[9px] font-bold flex items-center justify-center">
                5
              </span>
            </button>

            {/* Admin Avatar & Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 p-1 rounded-xl hover:bg-slate-50 transition cursor-pointer"
              >
                <div className="w-8 h-8 rounded-full bg-[#4F46E5] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  {user?.name ? user.name.slice(0, 2).toUpperCase() : 'TR'}
                </div>
                <div className="text-left hidden lg:block">
                  <p className="text-xs font-bold text-[#1E293B] leading-tight flex items-center gap-1">
                    <span>{user?.name || 'Trushali'}</span>
                    <ChevronDown className="w-3 h-3 text-slate-400" />
                  </p>
                  <p className="text-[10px] text-slate-500 font-medium truncate max-w-[120px]">{user?.email || 'trushali@gmail.com'}</p>
                </div>
              </button>

              {/* Profile Dropdown Menu */}
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl border border-[#E8ECF4] shadow-xl p-2 z-50 space-y-1 text-xs">
                  <div className="p-2.5 border-b border-[#E8ECF4]">
                    <p className="font-bold text-[#1E293B]">{user?.name || 'Trushali'}</p>
                    <p className="text-[10px] text-slate-500 truncate">{user?.email || 'trushali@gmail.com'}</p>
                  </div>
                  <Link
                    href="/admin/settings"
                    onClick={() => setProfileOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-600 hover:text-[#4F46E5] hover:bg-[#F8FAFC] transition"
                  >
                    <Settings className="w-4 h-4" />
                    <span>Settings & Users</span>
                  </Link>
                  <Link
                    href="/"
                    target="_blank"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-600 hover:text-[#4F46E5] hover:bg-[#F8FAFC] transition"
                  >
                    <Globe className="w-4 h-4" />
                    <span>View Public Website</span>
                  </Link>
                  <button
                    onClick={() => {
                      setProfileOpen(false)
                      logout()
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-red-500 hover:bg-red-50 transition font-medium cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content - Independent Scrollable Main Container */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto min-h-0 bg-[#F4F6FB]">{children}</main>
      </div>
    </div>
  )
}

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminAuthProvider>
      <AdminLayoutInner>{children}</AdminLayoutInner>
    </AdminAuthProvider>
  )
}
