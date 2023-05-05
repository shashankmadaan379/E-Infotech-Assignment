const dotenv = require("dotenv");
dotenv.config();
module.exports = {
  PORT: process.env.PORT,
  MONGO_DATABASE: process.env.MONGO_DATABASE,
  MODE: process.env.MODE,
};
