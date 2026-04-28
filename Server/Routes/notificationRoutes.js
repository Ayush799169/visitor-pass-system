 
 const express = require("express");
  const router = express.Router();

 router.post("/send", (req, res) => {
  res.send("Notification sent successfully");
 });

 module.exports = router;