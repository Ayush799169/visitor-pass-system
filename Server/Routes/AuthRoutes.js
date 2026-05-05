 
 const express = require("express");
 const router = express.Router();
 const jwt = require("jsonwebtoken");
 const bcrypt = require("bcrypt");
 const { body, validationResult } = require("express-validator");
 const User = require("../models/User");

 // REGISTER

 router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid email format"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
    body("name").notEmpty().withMessage("Name is required"),
   ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { name, email, password, role } = req.body;
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: "User already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        role,
      });

      await newUser.save();

      res.status(201).json({ message: "User Registered Successfully" });

    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server Error" });
     }
   } 
 );


   // LOGIN

 router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Enter valid email"),
    body("password").notEmpty().withMessage("Password required"),
   ],
   async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });

      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Wrong password" });
      }

      const token = jwt.sign(
        { id: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      res.json({
        message: "Login Success",
        token,
        user,
      });

    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server Error" });
    }
   }
 );

    module.exports = router;