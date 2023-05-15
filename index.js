const express = require("express");
const expressApplication = require("./experssApp");
const app = express();
const sequelize = require("./db/connection");
require("dotenv").config();

const port = process.env.PORT || 5000;

const startApplication = async () => {
  await sequelize.sync({ force: true });
  expressApplication(app);
  app.listen(port, () => console.log("Application is running"));
};

startApplication();
