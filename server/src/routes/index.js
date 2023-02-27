const NewRouter = require("./news");

function route(app) {
  app.use("/api/news", NewRouter);
}

module.exports = route;
