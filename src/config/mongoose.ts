import mongoose from "mongoose";
import fs from "fs";
import { MONGO_URI } from "./env";

export async function initMongo() {

  if(!MONGO_URI) throw Error("Missing MONGO_URI env");
  const isDocumentDB = MONGO_URI.includes("amazonaws.com") || process.env.DB_TYPE === "documentdb";

  const options: any = isDocumentDB
  ? {
      ssl: true,
      sslCA: fs.readFileSync("./global-bundle.pem"),
    }
: {};

  await mongoose.connect(MONGO_URI, options);
  console.log("🍃 MongoDB connected");
  return mongoose.connection;
}
