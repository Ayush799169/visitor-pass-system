
const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

 router.post("/send", async (req, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "your@gmail.com",
        pass: "your-app-password",
      },
    });

    await transporter.sendMail({
      from: "your@gmail.com",
      to: req.body.email,
      subject: "Visitor Notification",
      text: "New visitor added successfully",
    });

    res.json({ message: "Email sent" });

  } catch (err) {
    res.status(500).json({ message: "Error sending email" });
  }
 });

   module.exports = router;