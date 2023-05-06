const express = require("express");
const {
  registerUser,
  loginUser,
  logoutUser,
  getUserDetails,
  updateUserDetails,
  updateUserPassword,
} = require("../../controllers/authController");
const isAuthenticatedUser = require("../../middlewares/authentication");
const router = express.Router();

router.post("/registerUser", registerUser);
router.post("/loginUser", loginUser);
router.get("/logoutUser", logoutUser);
router.get("/user/getUserDetails", isAuthenticatedUser, getUserDetails);
router.post("/user/updateUserDetails", isAuthenticatedUser, updateUserDetails);
router.post("/updateUserPassword", isAuthenticatedUser, updateUserPassword);
module.exports = router;
