import { Pool } from 'pg'

// PostgreSQL connection pool targeting the local database
const pool = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgresql://postgres:postgres@127.0.0.1:5432/unityappbackend',
})

export default pool
