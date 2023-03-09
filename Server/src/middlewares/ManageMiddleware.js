// manageMiddleware.js
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const bodyParser = require("body-parser");
const express = require("express");
const passport = require(`passport`);
require(`dotenv`).config();
const session = require("express-session");
const MongoStore = require("connect-mongo");
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

  const options = {
    mongoUrl: process.env.URI_USER_MONGODB,
    dbName: "cumtum",
    collectionName: "sessions",
    ttl: 3600,
  };
  app.use(
    session({
      secret: "keyboard cat",
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create(options),
    })
  );

  require("../utils/Passport")(passport);
  app.use(passport.initialize());
  app.use(passport.session());

  const logoutOptions = {
    successMessage: "You have successfully logged out",
    failureMessage: "Failed to log out",
    logoutRedirect: "/auth-login",
    destroySession: true,
  };
  passport.logoutOptions(logoutOptions);

  const fixPublic = express.static(path.join(__dirname, "public"));
  app.use(fixPublic);
};

module.exports = ManagerMiddleware;
