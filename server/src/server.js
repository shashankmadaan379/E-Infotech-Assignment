const express = require("express");
const bodyParser = require("body-parser");
const { PORT, MODE } = require("./config/serverConfig");
const connectDB = require("./config/dbConfig");
const ApiRoutes = require("./routes/index");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const setupAndStartServer = async () => {
  const app = express();

  //middlewares
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
  app.use("/api", ApiRoutes);
  // app.use(function (req, res, next) {
  //   res.header("Access-Control-Allow-Credentials", true);
  //   next();
  // });

  app.listen(PORT, () => {
    console.log(`Server started at ${PORT} in ${MODE} Mode`);
  });

  connectDB();
};

setupAndStartServer();
