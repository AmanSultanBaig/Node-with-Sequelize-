const { Sequelize } = require("sequelize");
require("dotenv").config({});

const { DATABASE_NAME, DB_USER, DB_PWD, HOST } = process.env;

const sequelize = new Sequelize(DATABASE_NAME, DB_USER, DB_PWD, {
  host: HOST,
  dialect: "mysql",
});

try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

module.exports = sequelize;
