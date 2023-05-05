const User = require("../models/userModel");

//Register a user  =>/api/v1/register
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password }).save();
    return res.status(201).json({
      data: user,
      success: true,
      message: "User Registration Succesfull !",
    });
  } catch (error) {
    console.log(error);
  }
};
