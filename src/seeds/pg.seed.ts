import { User } from "../models/postgres";

export async function seedPostgres() {
  await User.sync({ alter: true });

  await User.bulkCreate(
    [
      { name: "Alice" },
      { name: "Bob" }
    ],
    { ignoreDuplicates: true }
  );

  console.log("✅ PostgreSQL seeded");
}
