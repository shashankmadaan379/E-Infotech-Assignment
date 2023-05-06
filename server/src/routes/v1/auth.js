const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  getUserDetails,
  updateUserDetails,
} = require("../../controllers/authController");
const isAuthenticatedUser = require("../../middlewares/authentication");
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/logout", logoutUser);
router.get("/user/:id", isAuthenticatedUser, getUserDetails);
router.post("/user/:id", isAuthenticatedUser, updateUserDetails);
module.exports = router;
