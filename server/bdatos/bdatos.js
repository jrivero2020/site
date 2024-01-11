import { Sequelize } from "sequelize";
import { mybdSql } from "../../config/config.js";

// deshabilita registro de consultas
// ponder bajo ==>
//  dialect: mybdSql.dialect,
//  logging: false,
export const sequelize = new Sequelize(
  mybdSql.database,
  mybdSql.user,
  mybdSql.password,
  {
    host: mybdSql.host,
    dialect: mybdSql.dialect,
    define: {
      timestamps: false,
      createdAt: false,
      updatedAt: false,
      underscored: true,
      id: false,
    },
  }
);
