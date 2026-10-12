import { Pool } from 'pg'

// PostgreSQL connection pool targeting the local database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:root@127.0.0.1:5432/Unityapp',
})

export default pool
