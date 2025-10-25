import { createClient } from "redis";
import { REDIS_URL } from "./env";
import fs from "fs";

export async function initRedis() {
  if(!REDIS_URL) throw Error("Missing REDIS_URL env");

  
  const isAWS = REDIS_URL.includes("amazonaws.com");

  const client = createClient({ 
    url: REDIS_URL,
    ...(isAWS?{
      socket: {
      tls: true, // Enable TLS only for AWS Redis
      }
    }:{})
  });
  await client.connect();
  console.log("🔥 Redis connected");
  return client;
}