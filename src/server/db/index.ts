import { type Pool, createPool } from "mysql2/promise";
import { drizzle } from "drizzle-orm/singlestore";
import { env } from "~/env";
import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  conn: Pool | undefined;
};

const conn = 
  globalForDb.conn ?? createPool({ 
    host: env.SINGLESTORE_HOST, 
    user: env.SINGLESTORE_USER, 
    password: env.SINGLESTORE_PASS, 
    database: env.SINGLESTORE_DB_NAME, 
    port: parseInt(env.SINGLESTORE_PORT),
    ssl: {},
    maxIdle: 0 
  });

if (env.NODE_ENV !== "production") globalForDb.conn = conn;

export const db = drizzle(conn, { schema });
