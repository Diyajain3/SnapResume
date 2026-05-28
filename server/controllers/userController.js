import bcrypt from "bcrypt";
import User from "../models/user.js";
import jwt from "jsonwebtoken";
import Resume from "../models/resume.js";

const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// ================= REGISTER USER =================
// POST: /api/users/register

export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // check required fields
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    // check existing user
    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    // generate token
    const token = generateToken(newUser._id);

    // remove password from response
    newUser.password = undefined;

    return res.status(201).json({
      message: "User created successfully",
      token,
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// ================= LOGIN USER =================
// POST: /api/users/login

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check required fields
    if (!email || !password) {
      return res.status(400).json({
        message: "Missing required fields",
      });
    }

    // check user exists
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    // generate token
    const token = generateToken(user._id);

    // remove password
    user.password = undefined;

    return res.status(200).json({
      message: "User login successful",
      token,
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// ================= GET USER BY ID =================
// GET: /api/users/data

export const getUserById = async (req, res) => {
  try {
    const userId = req.userId;

    // find user
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // remove password
    user.password = undefined;

    return res.status(200).json({
      user,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// ================= GET USER RESUMES =================
// GET: /api/users/resumes

export const getUserResumes = async (req, res) => {
  try {
    const userId = req.userId;

    // get resumes
    const resumes = await Resume.find({ userId });

    return res.status(200).json({
      resumes,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};