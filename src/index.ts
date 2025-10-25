import "dotenv/config";
import 'module-alias/register';
import { initPostgres } from "./config/sequelize";
import { initMongo } from "./config/mongoose";
import { initRedis } from "./config/redis";
import { runAllSeeds } from "./seeds";
import { app } from "./app";

(async () => {
  try {
    console.log("🚀 Server starting...");

    const [_pg, _mongo, redis] = await Promise.all([
      initPostgres(),
      initMongo(),
      initRedis(),
    ]);

    await runAllSeeds({ redis });

    app.listen(3000, () => console.log("✅ Server running on port 3000"));
  } catch (err) {
    console.error("❌ Startup failed:", err);
    process.exit(1);
  }
})();
