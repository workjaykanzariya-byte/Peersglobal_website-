'use client'

import React from 'react'
import { AdminAuthProvider, useAdminAuth } from '@/components/admin/admin-auth-context'
import { AdminSidebar } from '@/components/admin/admin-sidebar'
import { usePathname, useRouter } from 'next/navigation'
import { Bell, Search, User } from 'lucide-react'

function AdminLayoutInner({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAdminAuth()
  const pathname = usePathname()
  const router = useRouter()

  const isLoginPage = pathname === '/admin/login'

  React.useEffect(() => {
    if (!isAuthenticated && !isLoginPage) {
      router.push('/admin/login')
    }
  }, [isAuthenticated, isLoginPage, router])

  if (isLoginPage) {
    return <main className="min-h-screen bg-slate-950 text-slate-100">{children}</main>
  }

  if (!isAuthenticated) {
    return null
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex">
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header */}
        <header className="h-16 border-b border-slate-800 bg-slate-900/60 backdrop-blur px-8 flex items-center justify-between sticky top-0 z-30">
          <div className="relative w-80">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
            <input
              type="text"
              placeholder="Search blogs, media, circles..."
              className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-9 pr-4 py-1.5 text-xs text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-amber-500/50"
            />
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800 relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-amber-500"></span>
            </button>

            <div className="flex items-center gap-3 border-l border-slate-800 pl-4">
              <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-semibold text-xs">
                AD
              </div>
              <div className="text-left hidden sm:block">
                <p className="text-xs font-semibold text-white leading-tight">Admin User</p>
                <p className="text-[10px] text-slate-400">admin@peersglobal.com</p>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-8 overflow-y-auto">{children}</main>
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
