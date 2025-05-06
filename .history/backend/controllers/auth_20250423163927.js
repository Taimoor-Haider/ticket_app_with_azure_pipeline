import asyncHandler from "express-async-handler";
import User from "../models/user.js";
import _ from "lodash";
// Path: /api/auth/login
// Method: post
// Access: public
// Desc: Route to login the user

export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }); // 🌟 no .lean()

  if (!user) {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  // ✅ await the correct method name
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    res.status(401);
    throw new Error("Invalid email or password");
  }

  // Generate token
  const token = user.createToken();

  res.header("x-auth-header", token).status(200).json({_.pick(user,["fullName","email","phoneNumber","profileImageUrl","isAdmin"]) });
});
// Path: /api/auth/register
// Method: Post
// Access: Public
// Desc: Route to get register

export const registerUser = asyncHandler(async (req, res) => {
  const { fullName, email, phoneNumber, password, profileImageUrl, isAdmin } =
    req.body;

  const user = new User({
    fullName,
    email,
    phoneNumber,
    password,
    profileImageUrl,
    isAdmin,
  });

  const createdUser = await user.save();
  res.status(201);
  res.json({
    _id: createdUser._id,
    name: createdUser.fullName,
    email: createdUser.email,
    phone: createdUser.phoneNumber,
    password: createdUser.password,
    profileImage: createdUser.profileImageUrl,
    isAdmin: createdUser.isAdmin,
  });
});

// Path: /api/autt/users
// Method: Get
// Access: Public
// Desc: Route to get all users

export const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});
