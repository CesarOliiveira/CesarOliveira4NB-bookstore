import { Pool } from 'pg';

const connectionString = 'postgresql://postgres:sPzyZsmymhQrgyuLOyeTJZqKGjNtMWYd@junction.proxy.rlwy.net:57749/railway';

const pool = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false, // Permite conexões SSL não autorizadas
  }
});

export default pool;