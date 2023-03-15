// manageMiddleware.js
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const express = require("express");
require(`dotenv`).config();
const ApiUser = require("../routes/api/ApiUser");

// Middleware

const ManagerMiddleware = (app) => {
  app.set("views", path.join(__dirname, "../views"));
  app.set("view engine", "ejs");

  app.use(logger("dev"));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cookieParser());


  // require("../utils/Passport")(passport);


  const fixPublic = express.static(path.join(__dirname, "public"));
  app.use(fixPublic);
};

module.exports = ManagerMiddleware;
