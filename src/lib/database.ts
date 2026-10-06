import { Pool } from "pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL is not configured.");
}

const globalForDatabase = globalThis as typeof globalThis & {
  rsvpPool?: Pool;
};

export const rsvpPool =
  globalForDatabase.rsvpPool ??
  new Pool({
    connectionString,
    max: 5,
    min: 1,
  });

if (process.env.NODE_ENV !== "production") {
  globalForDatabase.rsvpPool = rsvpPool;
}
