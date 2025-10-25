import { Sequelize } from "sequelize";
import { PG_URI } from "./env";
import { UserModel } from "../models/postgres/user";
import fs from "fs";


if(!PG_URI) throw Error("Missing PG_URI env");

const isRDS = PG_URI.includes("amazonaws.com");
export const sequelize = new Sequelize(PG_URI, {
  dialect: "postgres",
  logging: false,
  ...(isRDS?{
    dialectOptions:{
      ssl: {
        require: true,
        ca: fs.readFileSync("./global-bundle.pem").toString(),
      }
    }
  }:{})
});

export async function initPostgres() {
  await sequelize.authenticate();
  UserModel(sequelize);
  await sequelize.sync();
  console.log("🐘 PostgreSQL connected and synced");
  return sequelize;
}
