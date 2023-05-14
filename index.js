const express = require("express");
const connectDatabase = require("./db/connection");
const expressApplication = require("./experssApp");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 5000;

const startApplication = () => {
  connectDatabase(process.env.DATABASE_NAME, process.env.DB_USER);
  expressApplication(app);
  app.listen(port, () => console.log("Application is running"));
};

startApplication();
