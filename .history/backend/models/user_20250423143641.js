// models/user.js
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/\S+@\S+\.\S+/, "Please enter a valid email"],
    },
    password: {
      type: String,
      required: function () {
        return this.email;
      },
      minlength: [8, "Password must be at least 8 characters long"],
    },
    phoneNumber: {
      type: String,
      required: true,
      match: [/^\d{10,13}$/, "Please enter a valid phone number"],
    },
    profileImageUrl: { type: String, default: "" },
    isAdmin: { type: Boolean, default: false },
    tags: {
      type: Array,
      validate: {
        isAsync: true,
        validator: function (value, callback) {
          //Do Async work
          setTimeout(() => {
            const result = value && value.length > 1;
            callback(result);
          }, 5000);
        },
        message: "Their must be on or more tags.",
      },
    },
  },
  { timestamps: true }
);

// 1️⃣ Define your instance methods BEFORE compiling the model:
userSchema.methods.comparePassword = async function (enteredPassword) {
  return bcrypt.compare(enteredPassword, this.password);
};

userSchema.methods.createToken = function () {
  return jwt.sign(
    { _id: this._id, isAdmin: this.isAdmin },
    process.env.JSON_WEB_TOKEN_SECRET,
    { expiresIn: "1d" }
  );
};

// 2️⃣ Define your pre-save hook:
userSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
  next();
});

// 3️⃣ THEN compile the model:
const User = mongoose.model("User", userSchema);
export default User;
