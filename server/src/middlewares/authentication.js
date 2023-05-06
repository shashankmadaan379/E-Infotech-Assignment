const user = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { JWT_ACCESS_TOKEN } = require("../config/serverConfig");
const isAuthenticatedUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(400).json({
      success: false,
      message: "Please first login to access this recource",
    });
  }

  const decoded = jwt.verify(token, JWT_ACCESS_TOKEN);
  req.user = await user.findById(decoded.id);
  next();
};

module.exports = isAuthenticatedUser;
