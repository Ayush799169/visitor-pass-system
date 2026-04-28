
 const express = require("express");
 const router = express.Router();
 const jwt = require("jsonwebtoken");
 const User = require("../models/User");

 router.post("/register", async (req, res) => {
  const user = new User(req.body);
  await user.save();
  res.send("User Registered");
 });

 router.post("/login", async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password
  });

   if (!user) {
    return res.send("Invalid User");
  }
  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET
  );
  res.json({
    message: "Login Success",
    token: token,
    user: user
  });
 });

  module.exports = router;