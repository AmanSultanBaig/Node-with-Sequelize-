const express = require("express");
const schoolController = require("./controllers/school-controller");

const expressApplication = (app) => {
  app.use(express.json());
  app.use("/school", schoolController);
};

module.exports = expressApplication;
