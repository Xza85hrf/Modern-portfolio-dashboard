import { describe, it, expect } from "vitest";
import bcrypt from "bcrypt";
import { db } from "../db";
import { sql } from "drizzle-orm";

describe("Authentication Tests", () => {
  it("should verify password hashing and comparison", async () => {
    const password = "admin123";
    const hashedPassword = await bcrypt.hash(password, 10);
    const isMatch = await bcrypt.compare(password, hashedPassword);
    console.log("Password comparison result:", isMatch);
    expect(isMatch).toBe(true);
  });

  it("should verify admin user exists in database", async () => {
    const result = await db.execute(
      sql`SELECT username, password_hash FROM admin_users WHERE username = 'admin' LIMIT 1`
    );
    const user = result.rows[0];
    console.log("Found user:", user ? "yes" : "no");
    expect(user).toBeDefined();
    return user;
  });

  it("should verify password comparison with stored hash", async () => {
    const result = await db.execute(
      sql`SELECT password_hash FROM admin_users WHERE username = 'admin' LIMIT 1`
    );
    const user = result.rows[0];
    if (user) {
      const isMatch = await bcrypt.compare("admin123", user.password_hash);
      console.log("Stored hash comparison result:", isMatch);
      console.log("Stored hash:", user.password_hash);
      expect(isMatch).toBe(true);
    }
  });
});
