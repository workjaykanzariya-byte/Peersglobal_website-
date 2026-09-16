import { NextResponse } from 'next/server'
import pool from '@/lib/db'

// Make sure web_users table exists
async function ensureTableExists() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS public.web_users (
          id SERIAL PRIMARY KEY,
          username VARCHAR(100) UNIQUE NOT NULL,
          password VARCHAR(255) NOT NULL,
          name VARCHAR(150),
          email VARCHAR(150),
          role VARCHAR(50) DEFAULT 'admin',
          permissions JSONB DEFAULT '{"dashboard": true, "blogs": true, "media": true, "circles": true, "events": true, "settings": true}',
          is_active BOOLEAN DEFAULT TRUE,
          created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
          updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `)
  } catch (e) {
    console.error('Error ensuring web_users table exists:', e)
  }
}

export async function GET() {
  try {
    await ensureTableExists()
    const result = await pool.query(
      'SELECT id, username, name, email, role, permissions, is_active, created_at FROM public.web_users ORDER BY id ASC'
    )
    return NextResponse.json(result.rows)
  } catch (error: any) {
    console.error('GET /api/web-users error:', error)
    return NextResponse.json([], { status: 200 })
  }
}

export async function POST(req: Request) {
  try {
    await ensureTableExists()
    const { username, password, name, email, role, permissions } = await req.json()

    if (!username || !password) {
      return NextResponse.json({ success: false, message: 'Username and Password are required' }, { status: 400 })
    }

    const jsonPermissions = JSON.stringify(
      permissions || {
        dashboard: true,
        blogs: true,
        media: false,
        circles: false,
        events: false,
        settings: false,
      }
    )

    const query = `
      INSERT INTO public.web_users (username, password, name, email, role, permissions, is_active)
      VALUES ($1, $2, $3, $4, $5, $6::jsonb, true)
      ON CONFLICT (username) 
      DO UPDATE SET 
        password = EXCLUDED.password,
        name = EXCLUDED.name,
        email = EXCLUDED.email,
        role = EXCLUDED.role,
        permissions = EXCLUDED.permissions,
        updated_at = CURRENT_TIMESTAMP
      RETURNING id, username, name, email, role, permissions, is_active;
    `

    const values = [username.trim(), password, name || username, email || null, role || 'admin', jsonPermissions]
    const result = await pool.query(query, values)

    return NextResponse.json({ success: true, user: result.rows[0] })
  } catch (error: any) {
    console.error('POST /api/web-users error:', error)
    return NextResponse.json({ success: false, message: error.message || 'Database insert failed' }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const id = searchParams.get('id')
    const username = searchParams.get('username')

    if (!id && !username) {
      return NextResponse.json({ success: false, message: 'ID or username required' }, { status: 400 })
    }

    if (username === 'admin') {
      return NextResponse.json({ success: false, message: 'Cannot delete primary admin user' }, { status: 400 })
    }

    let query = 'DELETE FROM public.web_users WHERE username = $1 RETURNING id'
    let values = [username]

    if (id && !isNaN(Number(id))) {
      query = 'DELETE FROM public.web_users WHERE id = $1 OR username = $2 RETURNING id'
      values = [id, username || '']
    }

    const result = await pool.query(query, values)
    return NextResponse.json({ success: true, deletedCount: result.rowCount })
  } catch (error: any) {
    console.error('DELETE /api/web-users error:', error)
    return NextResponse.json({ success: false, message: error.message || 'Database delete failed' }, { status: 500 })
  }
}
