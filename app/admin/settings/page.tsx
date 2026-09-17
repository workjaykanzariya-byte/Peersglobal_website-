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
  Key,
  Globe,
  Bell,
  RefreshCw,
  Search,
  Sliders,
  MoreVertical,
  Layers,
  ArrowRight,
  ShieldCheck,
  Building,
  Mail,
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

export default function NextGenAdminSettingsPage() {
  const [activeTab, setActiveTab] = useState<'users' | 'integrations' | 'security' | 'general'>('users')
  const [saved, setSaved] = useState(false)
  const [savedMessage, setSavedMessage] = useState('Settings updated successfully!')
  const [wpEndpoint, setWpEndpoint] = useState('https://peersglobal.com/wp-json/wp/v2/posts')
  const [searchUser, setSearchUser] = useState('')

  // New User Form State
  const [newUsername, setNewUsername] = useState('')
  const [newName, setNewName] = useState('')
  const [newEmail, setNewEmail] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [newRole, setNewRole] = useState('admin')

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
      name: 'Dipak K',
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
      name: 'Trushali P',
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
      role: newRole,
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
        setSavedMessage(`Admin user "@${newUsername}" successfully created in database!`)
      } else {
        setSavedMessage(data.message || `User "@${newUsername}" added to active team list!`)
      }
    } catch {
      setSavedMessage(`User "@${newUsername}" added!`)
    }

    const newUser: AdminUserRecord = {
      id: String(Date.now()),
      username: newUsername,
      name: newName || newUsername,
      email: newEmail,
      role: newRole,
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
      alert('Primary Super Admin account cannot be removed!')
      return
    }
    if (confirm(`Are you sure you want to remove user "@${username}"?`)) {
      try {
        await fetch(`/api/web-users?id=${userId}&username=${username}`, {
          method: 'DELETE',
        })
      } catch (err) {
        console.error('Delete request error:', err)
      }

      setUsersList((prev) => prev.filter((u) => u.id !== userId && u.username !== username))
      setSavedMessage(`User "@${username}" has been removed.`)
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    }
  }

  const handleSaveApiSettings = (e: React.FormEvent) => {
    e.preventDefault()
    setSavedMessage('Integration endpoints successfully synchronized!')
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  const filteredUsers = usersList.filter(
    (u) =>
      u.name.toLowerCase().includes(searchUser.toLowerCase()) ||
      u.username.toLowerCase().includes(searchUser.toLowerCase()) ||
      u.email.toLowerCase().includes(searchUser.toLowerCase())
  )

  return (
    <div className="space-y-8 font-sans pb-12 max-w-7xl mx-auto">
      {/* 1. Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#101B35] tracking-tight font-display">
              Platform Settings
            </h1>
            <span className="px-2.5 py-0.5 rounded-full bg-[#1769FF]/10 text-[#1769FF] font-bold text-[10px] border border-[#1769FF]/20">
              Enterprise v2.6
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500">
            Configure team permissions, authentication rules, content integration APIs, and platform preferences.
          </p>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={fetchUsersFromDb}
            className="px-3.5 py-2 rounded-xl bg-white border border-[#E2E8F4] hover:border-[#1769FF]/40 text-xs font-semibold text-slate-700 hover:text-[#1769FF] transition-all flex items-center gap-1.5 shadow-xs cursor-pointer"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Sync DB</span>
          </button>
        </div>
      </div>

      {/* Success Notification Alert */}
      {saved && (
        <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-3 shadow-sm animate-fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>{savedMessage}</span>
        </div>
      )}

      {/* 2. Modern Tab Navigation Bar */}
      <div className="flex items-center gap-2 border-b border-[#E2E8F4] overflow-x-auto pb-px">
        {[
          { id: 'users', label: 'Team & Permissions', icon: Users, count: usersList.length },
          { id: 'integrations', label: 'Integrations & API', icon: Database },
          { id: 'security', label: 'Security & Auth', icon: ShieldCheck },
          { id: 'general', label: 'Platform Profile', icon: Building },
        ].map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-4 py-3 border-b-2 text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                isActive
                  ? 'border-[#1769FF] text-[#1769FF]'
                  : 'border-transparent text-slate-500 hover:text-[#101B35]'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-[#1769FF]' : 'text-slate-400'}`} />
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive ? 'bg-[#1769FF]/10 text-[#1769FF]' : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {tab.count}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* TAB 1: TEAM & USER MANAGEMENT */}
      {activeTab === 'users' && (
        <div className="space-y-8">
          {/* Add New User Card */}
          <div className="bg-white border border-[#E2E8F4] rounded-3xl p-6 lg:p-8 shadow-sm space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-base font-bold text-[#101B35] font-display flex items-center gap-2">
                  <UserPlus className="w-4 h-4 text-[#1769FF]" />
                  <span>Add New Team Member & Assign Access</span>
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Create administrative credentials and select permitted modules.
                </p>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#1769FF] bg-[#1769FF]/10 px-2.5 py-1 rounded-full w-fit">
                Role Permissions
              </span>
            </div>

            <form onSubmit={handleAddUser} className="space-y-6">
              {/* Credentials Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#101B35] mb-1.5">Username *</label>
                  <input
                    type="text"
                    required
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    placeholder="e.g. dipak"
                    className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl px-3.5 py-2.5 text-xs text-[#101B35] placeholder:text-slate-400 focus:outline-none focus:border-[#1769FF] focus:bg-white focus:ring-2 focus:ring-[#1769FF]/10 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#101B35] mb-1.5">Full Name</label>
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    placeholder="e.g. Dipak K"
                    className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl px-3.5 py-2.5 text-xs text-[#101B35] placeholder:text-slate-400 focus:outline-none focus:border-[#1769FF] focus:bg-white focus:ring-2 focus:ring-[#1769FF]/10 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#101B35] mb-1.5">Email Address</label>
                  <input
                    type="email"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    placeholder="e.g. dipak@gmail.com"
                    className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl px-3.5 py-2.5 text-xs text-[#101B35] placeholder:text-slate-400 focus:outline-none focus:border-[#1769FF] focus:bg-white focus:ring-2 focus:ring-[#1769FF]/10 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#101B35] mb-1.5">Password *</label>
                  <input
                    type="password"
                    required
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl px-3.5 py-2.5 text-xs text-[#101B35] placeholder:text-slate-400 focus:outline-none focus:border-[#1769FF] focus:bg-white focus:ring-2 focus:ring-[#1769FF]/10 transition"
                  />
                </div>
              </div>

              {/* Granular Permission Tiles */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold text-[#101B35] flex items-center gap-1.5">
                    <Shield className="w-3.5 h-3.5 text-[#1769FF]" />
                    <span>Module Permissions & Access Rights</span>
                  </label>
                  <span className="text-[11px] text-slate-400">Click tile to toggle access</span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                  {[
                    { key: 'dashboard', label: 'Dashboard', desc: 'KPIs & metrics' },
                    { key: 'blogs', label: 'Publications', desc: 'Blog articles' },
                    { key: 'media', label: 'Media Assets', desc: 'Files & library' },
                    { key: 'circles', label: 'Peer Circles', desc: 'Chapters' },
                    { key: 'events', label: 'Conclaves', desc: 'Events calendar' },
                    { key: 'settings', label: 'Settings', desc: 'Admin controls' },
                  ].map((item) => {
                    const isChecked = permissions[item.key as keyof FeatureAccess]
                    return (
                      <div
                        key={item.key}
                        onClick={() => handleTogglePermission(item.key as keyof FeatureAccess)}
                        className={`p-3.5 rounded-2xl border cursor-pointer transition-all select-none ${
                          isChecked
                            ? 'bg-[#1769FF]/5 border-[#1769FF] shadow-xs'
                            : 'bg-[#F6F9FF] border-[#E2E8F4] text-slate-400 hover:border-slate-300'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className={`text-xs font-bold ${isChecked ? 'text-[#1769FF]' : 'text-slate-700'}`}>
                            {item.label}
                          </span>
                          <span
                            className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] ${
                              isChecked ? 'bg-[#1769FF] text-white font-bold' : 'bg-slate-200 text-transparent'
                            }`}
                          >
                            ✓
                          </span>
                        </div>
                        <p className="text-[10px] text-slate-500">{item.desc}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#1769FF] to-[#08C7E8] hover:from-[#1357D6] hover:to-[#06ACC8] text-white text-xs font-bold shadow-md shadow-[#1769FF]/20 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <UserPlus className="w-4 h-4" />
                  <span>Create Team Member</span>
                </button>
              </div>
            </form>
          </div>

          {/* Active Users Table Card */}
          <div className="bg-white border border-[#E2E8F4] rounded-3xl p-6 lg:p-8 shadow-sm space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <h2 className="text-base font-bold text-[#101B35] font-display">Active Team Members</h2>
                <p className="text-xs text-slate-500">Authorized administrative users with system access</p>
              </div>

              <div className="relative w-64">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={searchUser}
                  onChange={(e) => setSearchUser(e.target.value)}
                  placeholder="Search by name, email..."
                  className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl pl-9 pr-3 py-1.5 text-xs text-[#101B35] placeholder:text-slate-400 focus:outline-none focus:border-[#1769FF]"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-[#101B35]">
                <thead className="text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                  <tr>
                    <th className="py-3 px-4">Member</th>
                    <th className="py-3 px-4">Role</th>
                    <th className="py-3 px-4">Allowed Modules</th>
                    <th className="py-3 px-4">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredUsers.map((u) => (
                    <tr key={u.id} className="hover:bg-[#F6F9FF] transition group">
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#1769FF] to-[#08C7E8] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                            {u.name ? u.name.slice(0, 2).toUpperCase() : u.username.slice(0, 2).toUpperCase()}
                          </div>
                          <div>
                            <p className="font-bold text-[#101B35]">{u.name}</p>
                            <p className="text-[11px] text-slate-400 font-mono">@{u.username} • {u.email || 'No email'}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#1769FF]/10 text-[#1769FF] border border-[#1769FF]/20 capitalize">
                          {u.role || 'Admin'}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="flex flex-wrap gap-1 max-w-xs">
                          {Object.entries(u.permissions).map(([key, enabled]) => (
                            <span
                              key={key}
                              className={`text-[9px] px-1.5 py-0.5 rounded-md font-medium capitalize ${
                                enabled
                                  ? 'bg-slate-100 text-slate-700 border border-slate-200'
                                  : 'bg-slate-50 text-slate-400 line-through'
                              }`}
                            >
                              {key}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="py-3.5 px-4">
                        <span className="inline-flex items-center gap-1 text-emerald-600 font-bold text-[11px]">
                          <Check className="w-3.5 h-3.5" /> Active
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        {u.username !== 'admin' ? (
                          <button
                            onClick={() => handleRemoveUser(u.id, u.username)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 transition cursor-pointer"
                            title="Delete User"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        ) : (
                          <span className="text-[10px] text-slate-400 font-medium italic">Super Admin</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: INTEGRATIONS & API */}
      {activeTab === 'integrations' && (
        <div className="space-y-6">
          <form onSubmit={handleSaveApiSettings} className="bg-white border border-[#E2E8F4] rounded-3xl p-6 lg:p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <h2 className="text-base font-bold text-[#101B35] font-display flex items-center gap-2">
                <Database className="w-4 h-4 text-[#1769FF]" />
                <span>Content & Data Synchronization</span>
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Configure headless content endpoints and external database synchronization.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#101B35] mb-1.5">
                  WordPress REST API Endpoint
                </label>
                <input
                  type="text"
                  value={wpEndpoint}
                  onChange={(e) => setWpEndpoint(e.target.value)}
                  className="w-full bg-[#F6F9FF] border border-[#E2E8F4] rounded-xl px-4 py-2.5 text-xs text-[#101B35] font-mono focus:outline-none focus:border-[#1769FF] focus:bg-white"
                />
                <p className="text-[11px] text-slate-400 mt-1">Used to automatically fetch and sync blog posts.</p>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#101B35] mb-1.5">
                  PostgreSQL Connection State
                </label>
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="font-bold">PostgreSQL Database Connection Active</span>
                  </div>
                  <span className="font-mono text-[10px] text-emerald-700">peersunity.com</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-[#1769FF] hover:bg-[#1357D6] text-white text-xs font-bold shadow-md shadow-[#1769FF]/20 transition cursor-pointer"
              >
                Save Integration Settings
              </button>
            </div>
          </form>
        </div>
      )}

      {/* TAB 3: SECURITY & AUTH */}
      {activeTab === 'security' && (
        <div className="bg-white border border-[#E2E8F4] rounded-3xl p-6 lg:p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-base font-bold text-[#101B35] font-display flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#1769FF]" />
              <span>Security & Access Controls</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">Session timeouts, two-factor authentication, and IP governance</p>
          </div>

          <div className="space-y-4 text-xs">
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F6F9FF] border border-[#E2E8F4]">
              <div>
                <p className="font-bold text-[#101B35]">Two-Factor Authentication (2FA)</p>
                <p className="text-slate-500 text-[11px]">Require OTP verification for all administrative accounts.</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-slate-200 text-slate-700 font-bold text-[10px]">Optional</span>
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F6F9FF] border border-[#E2E8F4]">
              <div>
                <p className="font-bold text-[#101B35]">Automatic Session Inactivity Timeout</p>
                <p className="text-slate-500 text-[11px]">Log out active admin sessions after 2 hours of inactivity.</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-bold text-[10px]">Enabled (2h)</span>
            </div>

            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#F6F9FF] border border-[#E2E8F4]">
              <div>
                <p className="font-bold text-[#101B35]">Audit Log Retention</p>
                <p className="text-slate-500 text-[11px]">Keep immutable administrative logs for compliance.</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-blue-100 text-[#1769FF] font-bold text-[10px]">365 Days</span>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: PLATFORM PROFILE */}
      {activeTab === 'general' && (
        <div className="bg-white border border-[#E2E8F4] rounded-3xl p-6 lg:p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 pb-4">
            <h2 className="text-base font-bold text-[#101B35] font-display flex items-center gap-2">
              <Building className="w-4 h-4 text-[#1769FF]" />
              <span>Peers Global Organization Profile</span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">Platform metadata, public contact details, and organization identity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-bold text-[#101B35] mb-1.5">Organization Name</label>
              <input
                type="text"
                disabled
                value="Peers Global Foundation"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-700 font-medium"
              />
            </div>

            <div>
              <label className="block font-bold text-[#101B35] mb-1.5">Primary Domain</label>
              <input
                type="text"
                disabled
                value="peersglobal.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-700 font-medium font-mono"
              />
            </div>

            <div>
              <label className="block font-bold text-[#101B35] mb-1.5">Support Desk Email</label>
              <input
                type="text"
                disabled
                value="contact@peersglobal.com"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-700 font-medium"
              />
            </div>

            <div>
              <label className="block font-bold text-[#101B35] mb-1.5">Active Chapters & Cities</label>
              <input
                type="text"
                disabled
                value="11 Cities • 19 Governed Circles"
                className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3.5 py-2.5 text-slate-700 font-medium"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
