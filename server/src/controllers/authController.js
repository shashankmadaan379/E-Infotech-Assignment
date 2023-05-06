const User = require("../models/userModel");
const sendToken = require("../utils/sendToken");
//Register a user  =>/api/v1/register
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Please enter all required fields",
        success: false,
      });
    }

    const exstingUser = await User.findOne({ email });
    if (exstingUser) {
      return res.status(403).json({
        success: false,
        message: "User already exist, Please Login !",
      });
    }
    const user = await User.create({ name, email, password });
    sendToken(user, 200, res, "User Registration Successful !");
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong in the registration process",
    });
  }
};

//Login user -- /api/v1/login
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please enter all required fields",
      });
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    const isPasswordMatched = await user.matchPassword(password);
    if (!isPasswordMatched) {
      return res.status(404).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }
    sendToken(user, 200, res, "User Login Successful !");
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong in the login process",
    });
  }
};

//Logout ---> /api/v1/logout
exports.logoutUser = async (req, res) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    res.status(200).json({
      success: true,
      message: "Logged out",
    });
  } catch (error) {
    console.log(error);
  }
};
