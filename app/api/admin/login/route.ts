import { NextResponse } from 'next/server'
import pool from '@/lib/db'

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json()

    if (!username || !password) {
      return NextResponse.json({ success: false, message: 'Username and password required' }, { status: 400 })
    }

    // Auto-add missing columns if they don't exist yet (safe migration)
    try {
      await pool.query(`
        ALTER TABLE public.web_users
          ADD COLUMN IF NOT EXISTS name VARCHAR(150),
          ADD COLUMN IF NOT EXISTS permissions JSONB DEFAULT '{"dashboard":true,"blogs":true,"media":true,"circles":true,"events":true,"settings":true}';
      `)
    } catch (_) {
      // ignore — column may already exist
    }

    // Support login by username OR email
    const result = await pool.query(
      `SELECT id, username, password,
              COALESCE(name, username) AS name,
              email, role,
              COALESCE(permissions, '{"dashboard":true,"blogs":true,"media":true,"circles":true,"events":true,"settings":true}'::jsonb) AS permissions
       FROM public.web_users
       WHERE (username = $1 OR email = $1) AND is_active = true
       LIMIT 1`,
      [username.trim()]
    )

    if (result.rows.length === 0) {
      // Fallback check for initial admin if DB is fresh
      if (username.trim().toLowerCase() === 'admin' && (password === 'Admin@123' || password === '123456')) {
        return NextResponse.json({
          success: true,
          user: {
            id: '1',
            username: 'admin',
            name: 'Super Admin',
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
        })
      }
      return NextResponse.json({ success: false, message: 'Invalid username or password' }, { status: 401 })
    }

    const user = result.rows[0]

    // Verify password (plain text compare)
    if (user.password !== password) {
      return NextResponse.json({ success: false, message: 'Invalid username or password' }, { status: 401 })
    }

    delete user.password // Never send password back to client

    return NextResponse.json({
      success: true,
      user: {
        id: String(user.id),
        username: user.username,
        name: user.name || user.username,
        email: user.email,
        role: user.role,
        permissions: user.permissions || {
          dashboard: true,
          blogs: true,
          media: true,
          circles: true,
          events: true,
          settings: true,
        },
      },
    })
  } catch (error: any) {
    console.error('Login DB Error:', error)
    return NextResponse.json({ success: false, message: 'Database login error' }, { status: 500 })
  }
}
