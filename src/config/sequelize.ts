import { Sequelize } from "sequelize";
import { PG_URI } from "./env";
import { UserModel } from "../models/postgres/user";


if(!PG_URI) throw Error("Missing PG_URI env");
export const sequelize = new Sequelize(PG_URI, {
  dialect: "postgres",
  logging: false,
});

export async function initPostgres() {
  await sequelize.authenticate();
  UserModel(sequelize);
  await sequelize.sync();
  console.log("🐘 PostgreSQL connected and synced");
  return sequelize;
}
