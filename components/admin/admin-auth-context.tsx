'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

export interface FeaturePermissions {
  dashboard: boolean
  blogs: boolean
  media: boolean
  circles: boolean
  events: boolean
  settings: boolean
}

export interface AdminUser {
  id: string
  username: string
  name?: string
  email?: string
  role?: string
  permissions: FeaturePermissions
}

interface AdminAuthContextType {
  isAuthenticated: boolean
  user: AdminUser | null
  login: (username: string, password: string) => Promise<{ success: boolean; message?: string }>
  logout: () => void
  hasAccess: (featureKey: keyof FeaturePermissions) => boolean
}

const defaultPermissions: FeaturePermissions = {
  dashboard: true,
  blogs: true,
  media: true,
  circles: true,
  events: true,
  settings: true,
}

const AdminAuthContext = createContext<AdminAuthContextType>({
  isAuthenticated: false,
  user: null,
  login: async () => ({ success: false }),
  logout: () => {},
  hasAccess: () => true,
})

export const AdminAuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [user, setUser] = useState<AdminUser | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const authState = localStorage.getItem('peers_admin_auth')
    const storedUser = localStorage.getItem('peers_admin_user')

    if (authState === 'true') {
      setIsAuthenticated(true)
      if (storedUser) {
        try {
          setUser(JSON.parse(storedUser))
        } catch {
          setUser(null)
        }
      }
    }
    setLoading(false)
  }, [])

  const login = async (usernameInput: string, passwordInput: string) => {
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: usernameInput.trim(),
          password: passwordInput,
        }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        const userInfo: AdminUser = data.user
        localStorage.setItem('peers_admin_auth', 'true')
        localStorage.setItem('peers_admin_user', JSON.stringify(userInfo))
        setIsAuthenticated(true)
        setUser(userInfo)
        return { success: true }
      }

      return { success: false, message: data.message || 'Invalid Username or Password!' }
    } catch (err) {
      console.error('Login error:', err)
      return { success: false, message: 'Server or database error' }
    }
  }

  const logout = () => {
    localStorage.removeItem('peers_admin_auth')
    localStorage.removeItem('peers_admin_user')
    setIsAuthenticated(false)
    setUser(null)
  }

  const hasAccess = (featureKey: keyof FeaturePermissions): boolean => {
    if (!user) return true // Fallback during initial setup
    if (user.role === 'Super Admin' || user.username === 'admin') return true
    return user.permissions[featureKey] ?? false
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-slate-400">
        Loading Admin Workspace...
      </div>
    )
  }

  return (
    <AdminAuthContext.Provider value={{ isAuthenticated, user, login, logout, hasAccess }}>
      {children}
    </AdminAuthContext.Provider>
  )
}

export const useAdminAuth = () => useContext(AdminAuthContext)
