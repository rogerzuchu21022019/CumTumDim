const WebManager = require("../web/index");
const ManagerRouter = (app, fixPublic) => {
  app.use("/", WebManager.support, fixPublic);
};
module.exports = ManagerRouter;
