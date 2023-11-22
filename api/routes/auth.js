const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User.js");

// generate random avatar
const generaterandomAvatar = () => {
  const randomAvatar = Math.floor(Math.random() * 70 + 1);
  return `https://i.pravatar.cc/300?img=${randomAvatar}`;
};

// Create-Register new user
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    // checkpoint if there is already an existing user with the same email address
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Email address is already registered." });
    }
    // creates a variable to keep the hashed password
    const hashedPassword = await bcrypt.hash(password, 10);
    // creates a default avatar
    const defaultAvatar = generaterandomAvatar();

    const newUser = await new User({
      username,
      email,
      password: hashedPassword,
      avatar: defaultAvatar,
    });

    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

// user login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid email." });
    }
    // check if the passwords are matching
    const isPasswordValid = await bcrypt.compare(password, user.password)
    // check is password valid
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password." });
    }

    res.status(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
      avatar: user.avatar,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error." });
  }
});

module.exports = router;
