// import { seedPostgres } from "./pg.seed";
// import { seedMongo } from "./mongo.seed";
import { seedRedis } from "./redis.seed";

export async function runAllSeeds({ redis }: { redis: any }) {
  console.log("🌱 Running all seeds...");

  await Promise.all([
    // seedPostgres(),
    // seedMongo(),
    seedRedis(redis)
  ]);

  console.log("✅ All seeds completed");
}