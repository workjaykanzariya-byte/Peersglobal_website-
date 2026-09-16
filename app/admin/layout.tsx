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
    return <main className="min-h-screen bg-[#07152E] text-slate-100 font-sans">{children}</main>
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-[#F6F9FF] text-[#101B35] flex font-sans antialiased selection:bg-[#1769FF] selection:text-white">
      {/* 1. Left Sidebar */}
      <AdminSidebar />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* 2. Top Navbar */}
        <header className="h-18 bg-white/85 backdrop-blur-xl border-b border-[#E2E8F4] px-6 lg:px-8 flex items-center justify-between sticky top-0 z-20 shadow-xs">
          {/* Global Search Bar */}
          <div className="relative w-72 md:w-96">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search partnerships, companies, users..."
              className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl pl-10 pr-4 py-2 text-xs text-[#101B35] placeholder:text-slate-400 focus:outline-none focus:border-[#1769FF] focus:bg-white focus:ring-3 focus:ring-[#1769FF]/10 transition"
            />
          </div>

          {/* Right Tools & Profile */}
          <div className="flex items-center gap-3 md:gap-4">
            {/* Quick Add Button */}
            <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#1769FF] to-[#08C7E8] hover:from-[#1357D6] hover:to-[#06ACC8] text-white text-xs font-semibold shadow-md shadow-[#1769FF]/20 hover:shadow-lg hover:shadow-[#1769FF]/30 transition-all cursor-pointer">
              <Plus className="w-4 h-4" />
              <span>Quick Add</span>
            </button>

            {/* Messages Icon */}
            <button
              className="p-2.5 rounded-xl bg-[#F6F9FF] hover:bg-[#EEF4FF] border border-[#E2E8F4] text-slate-600 hover:text-[#1769FF] transition relative cursor-pointer"
              title="Messages"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#08C7E8] ring-2 ring-white"></span>
            </button>

            {/* Notification Icon */}
            <button
              className="p-2.5 rounded-xl bg-[#F6F9FF] hover:bg-[#EEF4FF] border border-[#E2E8F4] text-slate-600 hover:text-[#1769FF] transition relative cursor-pointer"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-[#E53935] ring-2 ring-white"></span>
            </button>

            {/* Admin Avatar & Dropdown */}
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-[#F6F9FF] border border-transparent hover:border-[#E2E8F4] transition cursor-pointer"
              >
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#1769FF] via-[#08C7E8] to-[#1769FF] text-white flex items-center justify-center font-bold text-xs shadow-sm ring-2 ring-[#1769FF]/20">
                  {user?.name ? user.name.slice(0, 2).toUpperCase() : 'AD'}
                </div>
                <div className="text-left hidden md:block">
                  <p className="text-xs font-bold text-[#101B35] leading-tight flex items-center gap-1">
                    <span>{user?.name || 'Admin'}</span>
                    <ChevronDown className="w-3 h-3 text-slate-400" />
                  </p>
                  <p className="text-[10px] text-slate-500 font-medium">Platform Lead</p>
                </div>
              </button>

              {/* Profile Dropdown Menu */}
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl border border-[#E2E8F4] shadow-xl p-2 z-50 space-y-1 text-xs">
                  <div className="p-2.5 border-b border-[#E2E8F4]">
                    <p className="font-bold text-[#101B35]">{user?.name || 'Admin'}</p>
                    <p className="text-[10px] text-slate-500 truncate">{user?.email || 'admin@peersglobal.com'}</p>
                  </div>
                  <Link
                    href="/admin/settings"
                    onClick={() => setProfileOpen(false)}
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-600 hover:text-[#1769FF] hover:bg-[#F6F9FF] transition"
                  >
                    <Settings className="w-4 h-4" />
                    <span>Settings & Users</span>
                  </Link>
                  <Link
                    href="/"
                    target="_blank"
                    className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-slate-600 hover:text-[#1769FF] hover:bg-[#F6F9FF] transition"
                  >
                    <Globe className="w-4 h-4" />
                    <span>View Public Website</span>
                  </Link>
                  <button
                    onClick={() => {
                      setProfileOpen(false)
                      logout()
                    }}
                    className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-red-500 hover:bg-red-50 transition font-medium"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 lg:p-8 overflow-y-auto">{children}</main>
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
