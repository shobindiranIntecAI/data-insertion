import { Sequelize, DataTypes, Model } from "sequelize";

export class User extends Model {
  declare id: number;
  declare name: string;
}

export const UserModel = (sequelize: Sequelize) => {
  User.init(
    {
      id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
      name: { type: DataTypes.STRING, allowNull: false,unique:true },
    },
    { sequelize, modelName: "User" }
  );
  return User;
};
