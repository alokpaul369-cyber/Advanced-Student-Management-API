const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { sendSuccess, sendError } = require("../views/responseView");

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
};

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return sendError(res, 400, "Name, email, and password are required.");
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return sendError(res, 400, "User already exists with this email.");
    }

    const user = await User.create({ name, email, password });

    return sendSuccess(res, 201, {
      message: "User registered successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    return sendError(res, 500, "Registration failed", error.message);
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return sendError(res, 400, "Email and password are required.");
    }

    const user = await User.findOne({ email });
    if (!user) {
      return sendError(res, 401, "Invalid email or password.");
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return sendError(res, 401, "Invalid email or password.");
    }

    const token = generateToken(user._id);

    return sendSuccess(res, 200, {
      message: "Login successful",
      token,
    });
  } catch (error) {
    return sendError(res, 500, "Login failed", error.message);
  }
};

module.exports = { register, login };
