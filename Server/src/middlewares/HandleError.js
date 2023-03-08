const createError = require("http-errors");

const HandlerError = (app) => {

app.use((req, res, next) => {
  const error = createError.NotFound();
  next(error); //=> nhớ next để gửi error
});
app.use((error, req, res, next) => {
  res.json({
    status: error.status,
    message: error.message,
  });
});
  
}

module.exports = HandlerError
