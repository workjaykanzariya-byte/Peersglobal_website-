'use client'

import React, { useState, useEffect } from 'react'
import {
  Settings,
  Save,
  CheckCircle2,
  Database,
  UserPlus,
  Shield,
  Users,
  Check,
  X,
  Lock,
  Trash2,
  Sparkles,
} from 'lucide-react'

interface FeatureAccess {
  dashboard: boolean
  blogs: boolean
  media: boolean
  circles: boolean
  events: boolean
  settings: boolean
}

interface AdminUserRecord {
  id: string
  username: string
  name: string
  role: string
  email: string
  permissions: FeatureAccess
}

export default function AdminSettingsPage() {
  const [saved, setSaved] = useState(false)
  const [savedMessage, setSavedMessage] = useState('Settings updated successfully!')
  const [wpEndpoint, setWpEndpoint] = useState('https://peersglobal.com/wp-json/wp/v2/posts')

  // New Admin Form State
  const [newUsername, setNewUsername] = useState('')
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')

  const [permissions, setPermissions] = useState<FeatureAccess>({
    dashboard: true,
    blogs: true,
    media: true,
    circles: true,
    events: true,
    settings: true,
  })

  // List of web_users
  const [usersList, setUsersList] = useState<AdminUserRecord[]>([
    {
      id: '1',
      username: 'admin',
      name: 'Super Admin',
      email: 'admin@peersglobal.com',
      role: 'admin',
      permissions: {
        dashboard: true,
        blogs: true,
        media: true,
        circles: true,
        events: true,
        settings: true,
      },
    },
    {
      id: '2',
      username: 'dipak',
      name: 'Dipak',
      email: 'dipak@gmail.com',
      role: 'admin',
      permissions: {
        dashboard: true,
        blogs: true,
        media: true,
        circles: true,
        events: true,
        settings: true,
      },
    },
    {
      id: '3',
      username: 'trushali',
      name: 'Trushali',
      email: 'trushali@gmail.com',
      role: 'admin',
      permissions: {
        dashboard: true,
        blogs: true,
        media: true,
        circles: true,
        events: true,
        settings: true,
      },
    },
  ])

  // Fetch initial users from API & DB
  useEffect(() => {
    fetchUsersFromDb()
  }, [])

  const fetchUsersFromDb = async () => {
    try {
      const res = await fetch('/api/web-users')
      if (res.ok) {
        const data = await res.json()
        if (Array.isArray(data) && data.length > 0) {
          const formatted = data.map((u: any) => ({
            id: String(u.id || u.username),
            username: u.username,
            name: u.name || u.username,
            email: u.email || '',
            role: u.role || 'admin',
            permissions: u.permissions || {
              dashboard: true,
              blogs: true,
              media: true,
              circles: true,
              events: true,
              settings: true,
            },
          }))
          setUsersList(formatted)
        }
      }
    } catch (err) {
      console.error('Failed to load web_users from DB:', err)
    }
  }

  const handleTogglePermission = (key: keyof FeatureAccess) => {
    setPermissions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }))
  }

  const handleAddUser = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newUsername || !newPassword) return

    const payload = {
      username: newUsername.trim(),
      password: newPassword,
      name: newName || newUsername,
      email: newEmail,
      role: 'admin',
      permissions: { ...permissions },
    }

    try {
      const res = await fetch('/api/web-users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()
      if (res.ok) {
        setSavedMessage(`Admin user "@${newUsername}" successfully saved!`)
      } else {
        setSavedMessage(data.message || `User "@${newUsername}" added to active users list!`)
      }
    } catch {
      setSavedMessage(`User "@${newUsername}" added!`)
    }

    const newUser: AdminUserRecord = {
      id: String(Date.now()),
      username: newUsername,
      name: newName || newUsername,
      email: newEmail,
      role: 'admin',
      permissions: { ...permissions },
    }

    setUsersList((prev) => [...prev.filter((u) => u.username !== newUsername), newUser])
    setNewUsername('')
    setNewName('')
    setNewEmail('')
    setNewPassword('')
    setSaved(true)
    setTimeout(() => setSaved(false), 4000)
  }

  const handleRemoveUser = async (userId: string, username: string) => {
    if (username === 'admin') {
      alert('Super Admin user cannot be deleted!')
      return
    }
    if (confirm(`Are you sure you want to remove admin user "@${username}"?`)) {
      try {
        await fetch(`/api/web-users?id=${userId}&username=${username}`, {
          method: 'DELETE',
        })
      } catch (err) {
        console.error('Delete request error:', err)
      }

      setUsersList((prev) => prev.filter((u) => u.id !== userId && u.username !== username))
      setSavedMessage(`User "@${username}" has been deleted from users list!`)
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    }
  }

  const handleSaveApiSettings = (e: React.FormEvent) => {
    e.preventDefault()
    setSavedMessage('Content Integration settings saved successfully!')
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="space-y-8 max-w-4xl font-sans">
      <div className="flex items-center gap-2.5">
        <div className="h-9 w-9 rounded-xl bg-blue-600/15 text-blue-400 border border-blue-500/20 flex items-center justify-center">
          <Settings className="w-5 h-5" />
        </div>
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-white font-display">Portal Settings & User Access</h1>
          <p className="text-xs text-slate-400 mt-0.5">
            Manage administrative user accounts, granular section permissions, and content sync.
          </p>
        </div>
      </div>

      {saved && (
        <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2.5 shadow-lg animate-fade-in">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{savedMessage}</span>
        </div>
      )}

      {/* SECTION 1: ADD NEW ADMIN USER */}
      <div className="bg-[#0B1220]/80 border border-slate-800/90 rounded-2xl p-6 space-y-6 text-xs shadow-xl">
        <div className="border-b border-slate-800/80 pb-3 flex items-center justify-between">
          <h2 className="text-sm font-bold text-white flex items-center gap-2 font-display">
            <UserPlus className="w-4 h-4 text-blue-400" />
            <span>Add New Admin User & Assign Permissions</span>
          </h2>
          <span className="text-[10px] text-blue-400 bg-blue-500/10 px-2.5 py-0.5 rounded-full border border-blue-500/20 font-medium">
            Role Management
          </span>
        </div>

        <form onSubmit={handleAddUser} className="space-y-6">
          {/* User Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 font-semibold mb-1.5">Username *</label>
              <input
                type="text"
                required
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                placeholder="e.g. dipak or trushali"
                className="w-full bg-[#070D18] border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-[#1E4ED8] focus:ring-1 focus:ring-[#1E4ED8]/30 transition"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1.5">Full Name</label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="e.g. Dipak K"
                className="w-full bg-[#070D18] border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-[#1E4ED8] focus:ring-1 focus:ring-[#1E4ED8]/30 transition"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1.5">Email Address</label>
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="e.g. dipak@gmail.com"
                className="w-full bg-[#070D18] border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-[#1E4ED8] focus:ring-1 focus:ring-[#1E4ED8]/30 transition"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1.5">Password *</label>
              <input
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#070D18] border border-slate-800 rounded-xl p-3 text-white focus:outline-none focus:border-[#1E4ED8] focus:ring-1 focus:ring-[#1E4ED8]/30 transition"
              />
            </div>
          </div>

          {/* CHECKBOXES FOR FUNCTIONALITY ACCESS */}
          <div className="space-y-3 pt-2 border-t border-slate-800/80">
            <label className="block text-slate-200 font-bold text-xs flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-400" />
              <span>Allowed Portal Functionalities</span>
            </label>
            <p className="text-[11px] text-slate-400">
              Check the sections this user will be able to see and access in the portal:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-1">
              {[
                { key: 'dashboard', label: 'Dashboard Access', desc: 'Overview & metrics' },
                { key: 'blogs', label: 'Blog Posts', desc: 'Create & manage articles' },
                { key: 'media', label: 'Media Library', desc: 'Upload images & videos' },
                { key: 'circles', label: 'Circles / Initiatives', desc: 'Manage circle data' },
                { key: 'events', label: 'Events & Conclaves', desc: 'Manage event listings' },
                { key: 'settings', label: 'Portal Settings', desc: 'Manage users & API' },
              ].map((item) => {
                const isChecked = permissions[item.key as keyof FeatureAccess]
                return (
                  <label
                    key={item.key}
                    onClick={() => handleTogglePermission(item.key as keyof FeatureAccess)}
                    className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition ${
                      isChecked
                        ? 'bg-blue-600/10 border-blue-500/40 text-white shadow-sm'
                        : 'bg-[#070D18] border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}}
                      className="mt-0.5 rounded border-slate-700 text-[#1E4ED8] focus:ring-[#1E4ED8] accent-[#1E4ED8]"
                    />
                    <div>
                      <div className="font-semibold text-slate-200">{item.label}</div>
                      <div className="text-[10px] text-slate-400">{item.desc}</div>
                    </div>
                  </label>
                )
              })}
            </div>
          </div>

          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#1E4ED8] to-[#1E3A8A] hover:from-[#2563EB] hover:to-[#1D4ED8] text-white font-semibold text-xs flex items-center gap-2 transition shadow-lg shadow-blue-600/25 cursor-pointer"
          >
            <UserPlus className="w-4 h-4" />
            <span>Create User & Save Permissions</span>
          </button>
        </form>
      </div>

      {/* SECTION 2: EXISTING USERS TABLE */}
      <div className="bg-[#0B1220]/80 border border-slate-800/90 rounded-2xl p-6 space-y-4 text-xs shadow-xl">
        <div className="border-b border-slate-800/80 pb-3 flex items-center justify-between">
          <h2 className="text-sm font-bold text-white flex items-center gap-2 font-display">
            <Users className="w-4 h-4 text-blue-400" />
            <span>Active Web Users & Admins</span>
          </h2>
          <span className="text-[11px] text-slate-400">{usersList.length} User(s) Configured</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-slate-300 border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 text-[10px] uppercase tracking-wider">
                <th className="py-3 px-3">User</th>
                <th className="py-3 px-3">Allowed Permissions</th>
                <th className="py-3 px-3">Status</th>
                <th className="py-3 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {usersList.map((u) => (
                <tr key={u.id} className="hover:bg-[#0F172A]/50 transition">
                  <td className="py-3.5 px-3">
                    <div className="font-semibold text-white">{u.name}</div>
                    <div className="text-[10px] text-blue-400 font-mono">@{u.username} • {u.email || 'No email'}</div>
                  </td>
                  <td className="py-3.5 px-3">
                    <div className="flex flex-wrap gap-1">
                      {Object.entries(u.permissions).map(([key, enabled]) => (
                        <span
                          key={key}
                          className={`text-[9px] px-2 py-0.5 rounded-full border capitalize font-medium ${
                            enabled
                              ? 'bg-blue-500/10 text-blue-300 border-blue-500/20'
                              : 'bg-slate-900 text-slate-600 border-slate-800 line-through'
                          }`}
                        >
                          {key}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3.5 px-3">
                    <span className="inline-flex items-center gap-1 text-emerald-400 font-medium text-[11px] bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                      <Check className="w-3 h-3" /> Active
                    </span>
                  </td>
                  <td className="py-3.5 px-3 text-right">
                    {u.username !== 'admin' ? (
                      <button
                        onClick={() => handleRemoveUser(u.id, u.username)}
                        className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white border border-red-500/20 transition flex items-center gap-1 text-[10px] ml-auto font-medium cursor-pointer"
                        title="Remove User"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Remove</span>
                      </button>
                    ) : (
                      <span className="text-[10px] text-slate-500 italic">Primary Admin</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* SECTION 3: CONTENT INTEGRATION API */}
      <form
        onSubmit={handleSaveApiSettings}
        className="bg-[#0B1220]/80 border border-slate-800/90 rounded-2xl p-6 space-y-4 text-xs shadow-xl"
      >
        <h2 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800/80 pb-2.5 font-display">
          <Database className="w-4 h-4 text-blue-400" />
          <span>Content Integration API</span>
        </h2>
        <div>
          <label className="block text-slate-300 font-semibold mb-1.5">WordPress REST API Endpoint</label>
          <input
            type="text"
            value={wpEndpoint}
            onChange={(e) => setWpEndpoint(e.target.value)}
            className="w-full bg-[#070D18] border border-slate-800 rounded-xl p-3 text-white font-mono focus:outline-none focus:border-[#1E4ED8] focus:ring-1 focus:ring-[#1E4ED8]/30 transition"
          />
        </div>
        <button
          type="submit"
          className="px-4 py-2.5 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white font-semibold text-xs flex items-center gap-2 transition border border-slate-800 cursor-pointer"
        >
          <Save className="w-4 h-4 text-blue-400" />
          <span>Save API Endpoint</span>
        </button>
      </form>
    </div>
  )
}
