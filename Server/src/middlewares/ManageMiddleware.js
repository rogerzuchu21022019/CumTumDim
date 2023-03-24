// manageMiddleware.js
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const express = require("express");
require(`dotenv`).config();

const cors = require(`cors`);
const Multer = require("../utils/Multer");

const admin = require("firebase-admin");
// Middleware

const ManagerMiddleware = (app) => {
  app.set("views", path.join(__dirname, "../views"));
  app.set("view engine", "ejs");
  var corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    method: "GET,HEAD,PUT,PATCH,POST,DELETE",
  };
  app.use(cors(corsOptions));
  app.use(Multer.single("file"));

  app.use(logger("dev"));
  app.use(express.urlencoded({ extended: true }));
  app.use(
    express.json({
      strict: false,
    })
  );
  app.use(cookieParser());

  // const serviceAccount = require(path.join(
  //   __dirname,
  //   "..",
  //   "config",
  //   "fcm.json"
  // ));
  // admin.initializeApp({
  //   credential: admin.credential.cert(serviceAccount),
  // });

  const publicDir = path.join(__dirname, "public");
  const fixPublic = express.static(publicDir);
  app.use(fixPublic);
};

module.exports = ManagerMiddleware;
