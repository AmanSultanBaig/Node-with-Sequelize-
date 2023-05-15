const { DataTypes } = require("sequelize");
const sequelize = require("../connection");

const SchoolModel = sequelize.define(
  "School",
  {
    // Model attributes are defined here
    schoolName: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        const rawValue = this.getDataValue("schoolName");
        return rawValue ? rawValue.toUpperCase() : null;
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      // allowNull defaults to true
    },
  },
  {
    tableName: "schools",
  }
);

module.exports = SchoolModel;
