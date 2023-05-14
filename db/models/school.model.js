const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("sqlite::memory:");

const SchoolModel = sequelize.define("School", {
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
});

SchoolModel.sync(); // This creates the table if it doesn't exist (and does nothing if it already exists)
module.exports = SchoolModel;
