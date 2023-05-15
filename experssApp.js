const express = require("express");

const expressApplication = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

module.exports = expressApplication;
