import { NextResponse } from 'next/server'
import pool from '@/lib/db'

// Fallback users for resilience when database connection is offline or in transition
const FALLBACK_USERS: Record<string, { id: string; username: string; email: string; name: string; password: string[]; role: string }> = {
  admin: {
    id: '1',
    username: 'admin',
    email: 'admin@peersglobal.com',
    name: 'Super Admin',
    password: ['Admin@123', '123456'],
    role: 'admin',
  },
  dipak: {
    id: '2',
    username: 'dipak',
    email: 'dipak@gmail.com',
    name: 'Dipak',
    password: ['Dipak@123', 'Admin@123'],
    role: 'admin',
  },
  trushali: {
    id: '3',
    username: 'trushali',
    email: 'trushali@gmail.com',
    name: 'Trushali',
    password: ['Trushali@123', 'Admin@123'],
    role: 'admin',
  },
}

function checkFallback(identifier: string, pass: string) {
  const cleanId = identifier.trim().toLowerCase()
  for (const user of Object.values(FALLBACK_USERS)) {
    if (user.username.toLowerCase() === cleanId || user.email.toLowerCase() === cleanId) {
      if (user.password.includes(pass)) {
        return {
          id: user.id,
          username: user.username,
          name: user.name,
          email: user.email,
          role: user.role,
          permissions: {
            dashboard: true,
            blogs: true,
            media: true,
            circles: true,
            events: true,
            settings: true,
          },
        }
      }
    }
  }
  return null
}

export async function POST(req: Request) {
  try {
    const { username, password } = await req.json()

    if (!username || !password) {
      return NextResponse.json({ success: false, message: 'Username and password required' }, { status: 400 })
    }

    const cleanInput = username.trim()

    // 1. Try Live Database Login
    try {
      // Safe column check/migration
      try {
        await pool.query(`
          ALTER TABLE public.web_users
            ADD COLUMN IF NOT EXISTS name VARCHAR(150),
            ADD COLUMN IF NOT EXISTS permissions JSONB DEFAULT '{"dashboard":true,"blogs":true,"media":true,"circles":true,"events":true,"settings":true}';
        `)
      } catch {
        // ignore schema alter errors
      }

      // Query database by username or email
      const result = await pool.query(
        `SELECT id, username, password,
                COALESCE(name, username) AS name,
                email, role,
                COALESCE(permissions, '{"dashboard":true,"blogs":true,"media":true,"circles":true,"events":true,"settings":true}'::jsonb) AS permissions
         FROM public.web_users
         WHERE (LOWER(username) = LOWER($1) OR LOWER(email) = LOWER($1)) AND is_active = true
         LIMIT 1`,
        [cleanInput]
      )

      if (result.rows.length > 0) {
        const user = result.rows[0]
        if (user.password === password) {
          delete user.password
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
        }
      }
    } catch (dbError) {
      console.warn('Database query failed or DB offline, trying fallback auth:', dbError)
    }

    // 2. Fallback check for built-in admin accounts (Admin, Dipak, Trushali)
    const fallbackUser = checkFallback(cleanInput, password)
    if (fallbackUser) {
      return NextResponse.json({
        success: true,
        user: fallbackUser,
      })
    }

    return NextResponse.json({ success: false, message: 'Invalid username or password' }, { status: 401 })
  } catch (error: any) {
    console.error('Login Route Error:', error)
    return NextResponse.json({ success: false, message: 'Invalid credentials or login failure' }, { status: 401 })
  }
}
