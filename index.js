const express = require("express");
const expressApplication = require("./experssApp");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 5000;

const startApplication = () => {
  expressApplication(app);
  app.listen(port, () => console.log("Application is running"));
};

startApplication();
