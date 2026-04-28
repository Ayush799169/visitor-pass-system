
 const express = require("express");
 const router = express.Router();
 const Appointment = require("../models/Appointment");

 router.post("/add", async (req, res) => {
  const item = new Appointment(req.body);
  await item.save();
  res.send("Appointment Added");
 });

 router.get("/all", async (req, res) => {
  const data = await Appointment.find();
  res.json(data);
 });

module.exports = router;