'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ShieldCheck, Lock, User, ArrowRight, AlertCircle, Sparkles } from 'lucide-react'
import { useAdminAuth } from '@/components/admin/admin-auth-context'
import Link from 'next/link'

export default function AdminLoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAdminAuth()
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      const res = await login(username, password)
      if (res.success) {
        router.push('/admin/dashboard')
      } else {
        setError(res.message || 'Invalid Username or Password!')
      }
    } catch {
      setError('Connection error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#060A11] flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
      {/* Ambient background glows matching Peers Global brand */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-[#1E4ED8]/15 via-[#3B82F6]/10 to-transparent blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#E53935]/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Grid Pattern overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"
      />

      <div className="w-full max-w-md bg-[#0B1220]/90 border border-slate-800/90 backdrop-blur-2xl rounded-2xl p-8 shadow-2xl shadow-blue-950/40 relative z-10">
        <div className="flex flex-col items-center text-center mb-7">
          <div className="h-14 w-14 rounded-2xl bg-gradient-to-tr from-[#1E4ED8] via-[#2563EB] to-[#3B82F6] flex items-center justify-center text-white font-bold mb-4 shadow-xl shadow-blue-600/30 ring-4 ring-blue-500/10">
            <ShieldCheck className="w-7 h-7 text-white" />
          </div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold text-white tracking-tight font-display">PEERS GLOBAL</h1>
            <span className="h-2 w-2 rounded-full bg-[#E53935]" />
          </div>
          <p className="text-xs text-blue-400/90 font-medium tracking-wide mt-1 uppercase">Executive Management Portal</p>
          <p className="text-xs text-slate-400 mt-2">Sign in to manage circles, publications, media assets & settings</p>
        </div>

        {error && (
          <div className="mb-6 p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs flex items-center gap-2.5 animate-shake">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Username or Email</label>
            <div className="relative">
              <User className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="e.g. dipak@gmail.com or dipak"
                className="w-full bg-[#070D18] border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-[#1E4ED8] focus:ring-2 focus:ring-[#1E4ED8]/20 transition"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">Password</label>
            <div className="relative">
              <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-[#070D18] border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-[#1E4ED8] focus:ring-2 focus:ring-[#1E4ED8]/20 transition"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#1E4ED8] via-[#2563EB] to-[#1E3A8A] hover:from-[#2563EB] hover:to-[#1D4ED8] text-white font-semibold py-3 px-4 rounded-xl text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 active:scale-[0.99] disabled:opacity-60 cursor-pointer mt-2"
          >
            <span>{loading ? 'Authenticating...' : 'Access Portal'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="mt-6 pt-5 border-t border-slate-800/80 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-blue-400 transition"
          >
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
            <span>Return to Public Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
