import asyncHandler from "express-async-handler";
import User from "../models/user.js";
import 
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

  res.status(200).json({
    name: user.fullName,
    email: user.email,
    phoneNumber: user.phoneNumber,
    profilePicture: user.profileImageUrl,
    isAdmin: user.isAdmin,
    token,
  });
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
