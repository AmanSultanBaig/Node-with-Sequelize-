const Sequelize = require("sequelize");
require("dotenv").config({ path: "./env" });

const { DATABASE_NAME, DB_USER, DB_PWD, HOST } = process.env;

const sequelize = new Sequelize(DATABASE_NAME, DB_USER, DB_PWD, {
  host: HOST,
  dialect: "mysql",
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.school = require("./models/school.model")(sequelize, Sequelize);

module.exports = db;
