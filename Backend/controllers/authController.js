const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const { JWT_SECRET } = require("../middleware/auth");

// 1. Register
const register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  try {
    const {
      firstName,
      lastName,
      address,
      pincode,
      email,
      phone,
      password,
      role,
    } = req.body;

    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existingUser) {
      if (existingUser.email === email)
        return res.status(400).json({ message: "Email already exists" });
      if (existingUser.phone === phone)
        return res.status(400).json({ message: "Phone already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      address,
      pincode,
      email,
      phone,
      password: hashedPassword,
      role,
    });
    await newUser.save();

    res
      .status(201)
      .json({
        message: "Registration successful",
        user: {
          id: newUser._id,
          firstName: newUser.firstName,
          role: newUser.role,
        },
      });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error, try later" });
  }
};

// 2. Login
const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const token = jwt.sign({ id: user._id, role: user.role }, JWT_SECRET, {
      expiresIn: "24h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      path: "/",
      maxAge: 86400000,
    });

    res.json({
      message: "Login successful",
      user: { id: user._id, firstName: user.firstName, role: user.role },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error, try later" });
  }
};

// 3. Get Persistent User
const getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({ user });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// 4. Logout
const logout = (req, res) => {
    res.cookie('token', '', { 
        httpOnly: true, 
        secure: true, 
        sameSite: 'none', 
        expires: new Date(0), 
        path: '/' 
    });
    res.json({ message: 'Logged out successfully' });
};

// 5. Get Profile Data (Points, Rewards)
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json({
      points: user.points || 0,
      redeemedRewards: user.redeemedRewards || [],
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = { register, login, getMe, logout, getProfile };
