import { createClient } from "redis";
import { REDIS_URL } from "./env";

export async function initRedis() {
  if(!REDIS_URL) throw Error("Missing REDIS_URL env");

  const client = createClient({ url: REDIS_URL });
  await client.connect();
  console.log("🔥 Redis connected");
  return client;
}