import mongoose from "mongoose";
import { MONGO_URI } from "./env";

export async function initMongo() {

  if(!MONGO_URI) throw Error("Missing MONGO_URI env");
  
  await mongoose.connect(MONGO_URI);
  console.log("🍃 MongoDB connected");
  return mongoose.connection;
}
