//app.js
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const ManagerMiddleware = require("./middlewares/ManageMiddleware");
const HandlerError = require("./middlewares/HandleError");

const ApiManagerRouter = require("./routes/manager/ApiManager");
// const WebManagerRouter = require("./routes/manager/WebManager");
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.URI_USER_MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Mongodb::: connected`);
  })
  .catch((error) => {
    console.log(`Mongodb::: connection error ${JSON.stringify(error)}`);
  });
const app = express();

const publicDir = path.join(__dirname, "public");
const fixPublic = express.static(publicDir);
app.use(fixPublic);
ManagerMiddleware(app);

ApiManagerRouter(app, fixPublic);
// WebManagerRouter(app, fixPublic);

HandlerError(app);

module.exports = app;
