const express = require("express");
const db = require("./db/connection");
const expressApplication = require("./experssApp");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 5000;

const startApplication = () => {
  db.sequelize.sync();
  expressApplication(app);
  app.listen(port, () => console.log("Application is running"));
};

startApplication();
