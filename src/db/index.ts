import Database from "better-sqlite3"
import { drizzle } from "drizzle-orm/better-sqlite3"

import * as schema from "./schema"

const dbUrl = process.env.DATABASE_URL || "file:./src/db/portfolio.db"
const sqlite = new Database(dbUrl.replace("file:", ""))
export const db = drizzle(sqlite, { schema })
