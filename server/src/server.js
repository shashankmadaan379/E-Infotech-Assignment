const express = require("express");
const bodyParser = require("body-parser");
const { PORT, MODE } = require("./config/serverConfig");
const connectDB = require("./config/dbConfig");
const setupAndStartServer = async () => {
  const app = express();

  //middlewares
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.listen(PORT, () => {
    console.log(`Server started at ${PORT} in ${MODE} Mode`);
  });

  connectDB();
};

setupAndStartServer();
