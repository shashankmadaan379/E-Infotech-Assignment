const User = require("../models/userModel");
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
    const token = await user.getJwtToken();
    return res.status(201).json({
      success: true,
      message: "User Registration Successfull !",
      user,
      token,
    });
  } catch (error) {
    console.log(error);
  }
};
