export async function seedRedis(redis: any) {
  const lock = await redis.set("seedLock", "locked", { NX: true, EX: 30 });
  if (!lock) {
    console.log("🔒 Redis seed skipped (lock active)");
    return;
  }

  const exists = await redis.exists("initFlag");
  if (!exists) {
    await redis.set("initFlag", "true");
    console.log("✅ Redis seeded");
  }
}