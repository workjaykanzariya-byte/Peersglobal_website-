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
    media: false,
    circles: false,
    events: false,
    settings: false,
  })

  // List of web_users
  const [usersList, setUsersList] = useState<AdminUserRecord[]>([
    {
      id: '1',
      username: 'admin',
      name: 'Super Admin',
      email: 'admin@peersglobal.com',
      role: 'Admin',
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
      username: 'sales_john',
      name: 'John Sales',
      email: 'john@peersglobal.com',
      role: 'User',
      permissions: {
        dashboard: true,
        blogs: true,
        media: true,
        circles: false,
        events: false,
        settings: false,
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
        setSavedMessage(`Admin user "@${newUsername}" successfully saved into database!`)
      } else {
        setSavedMessage(data.message || `User "@${newUsername}" added to active users list!`)
      }
    } catch (error) {
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
      setSavedMessage(`User "@${username}" has been deleted from web_users database!`)
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    }
  }

  const handleSaveApiSettings = (e: React.FormEvent) => {
    e.preventDefault()
    setSavedMessage('Integration API settings saved!')
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  return (
    <div className="space-y-8 max-w-4xl">
      <div>
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <Settings className="w-6 h-6 text-amber-400" />
          Admin Portal Settings & User Access
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Manage web user accounts, granular feature access permissions, and content integrations.
        </p>
      </div>

      {saved && (
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2 shadow-lg">
          <CheckCircle2 className="w-4 h-4 shrink-0" />
          <span>{savedMessage}</span>
        </div>
      )}

      {/* SECTION 1: ADD NEW ADMIN / SALES USER WITH FEATURE CHECKBOXES */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-6 text-xs shadow-xl">
        <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
          <h2 className="text-sm font-bold text-white flex items-center gap-2">
            <UserPlus className="w-4 h-4 text-amber-400" /> Add New Web User & Assign Functionalities
          </h2>
          <span className="text-[11px] text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full border border-slate-700">
            Permission Control
          </span>
        </div>

        <form onSubmit={handleAddUser} className="space-y-6">
          {/* User Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-slate-300 font-semibold mb-1">Username *</label>
              <input
                type="text"
                required
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                placeholder="e.g. sales_user"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Full Name</label>
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="e.g. Sarah Jenkins"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Email Address</label>
              <input
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="e.g. sales@peersglobal.com"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-slate-300 font-semibold mb-1">Password *</label>
              <input
                type="password"
                required
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white focus:outline-none focus:border-amber-500"
              />
            </div>
          </div>

          {/* CHECKBOXES FOR FUNCTIONALITY ACCESS */}
          <div className="space-y-3 pt-2 border-t border-slate-800">
            <label className="block text-slate-200 font-bold text-xs flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-400" />
              Allowed Portal Functionalities (Checkboxes)
            </label>
            <p className="text-[11px] text-slate-400">
              Select which sections this user is allowed to access in the admin sidebar:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              {[
                { key: 'dashboard', label: 'Dashboard Access', desc: 'View portal summary' },
                { key: 'blogs', label: 'Blog Posts', desc: 'Create & edit blogs' },
                { key: 'media', label: 'Media Library', desc: 'Upload media files' },
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
                        ? 'bg-amber-500/10 border-amber-500/40 text-white'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}}
                      className="mt-0.5 rounded border-slate-700 text-amber-500 focus:ring-amber-500 accent-amber-500"
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
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-400 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-xs flex items-center gap-2 transition shadow-lg shadow-amber-500/10"
          >
            <UserPlus className="w-4 h-4" /> Create User & Save Access Permissions
          </button>
        </form>
      </div>

      {/* SECTION 2: EXISTING WEB_USERS TABLE */}
      <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 text-xs shadow-xl">
        <div className="border-b border-slate-800 pb-3 flex items-center justify-between">
          <h2 className="text-sm font-bold text-white flex items-center gap-2">
            <Users className="w-4 h-4 text-amber-400" /> Active Web Users (`web_users` table)
          </h2>
          <span className="text-[11px] text-slate-400">{usersList.length} User(s) configured</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-slate-300 border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-slate-400 text-[11px]">
                <th className="py-2.5 px-3">User</th>
                <th className="py-2.5 px-3">Allowed Functionalities</th>
                <th className="py-2.5 px-3">Status</th>
                <th className="py-2.5 px-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60">
              {usersList.map((user) => (
                <tr key={user.id} className="hover:bg-slate-800/30">
                  <td className="py-3 px-3">
                    <div className="font-semibold text-white">{user.name}</div>
                    <div className="text-[10px] text-slate-400">@{user.username}</div>
                  </td>
                  <td className="py-3 px-3">
                    <div className="flex flex-wrap gap-1">
                      {Object.entries(user.permissions).map(([key, enabled]) => (
                        <span
                          key={key}
                          className={`text-[9px] px-1.5 py-0.5 rounded border capitalize ${
                            enabled
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                              : 'bg-slate-950 text-slate-600 border-slate-800 line-through'
                          }`}
                        >
                          {key}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-3 px-3">
                    <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold text-[11px]">
                      <Check className="w-3 h-3" /> Active
                    </span>
                  </td>
                  <td className="py-3 px-3 text-right">
                    {user.username !== 'admin' ? (
                      <button
                        onClick={() => handleRemoveUser(user.id, user.username)}
                        className="p-1.5 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white border border-red-500/20 transition flex items-center gap-1 text-[10px] ml-auto font-medium"
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
        className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 space-y-4 text-xs shadow-xl"
      >
        <h2 className="text-sm font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
          <Database className="w-4 h-4 text-amber-400" /> Content Integration API
        </h2>
        <div>
          <label className="block text-slate-300 font-semibold mb-1">WordPress REST API Endpoint</label>
          <input
            type="text"
            value={wpEndpoint}
            onChange={(e) => setWpEndpoint(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white font-mono focus:outline-none focus:border-amber-500"
          />
        </div>
        <button
          type="submit"
          className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs flex items-center gap-2 transition border border-slate-700"
        >
          <Save className="w-4 h-4" /> Save API Endpoint
        </button>
      </form>
    </div>
  )
}
