 const express = require("express");
 const router = express.Router();
 const Appointment = require("../models/Appointment");

 router.post("/add", async (req, res) => {
  try {
    const { visitorName, hostEmail, date, time } = req.body;

    if (!visitorName || !hostEmail || !date) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const appointment = new Appointment({
      visitorName,
      hostEmail,
      date,
      time,
      status: "Pending",
    });

    await appointment.save();
    res.json({ message: "Appointment booked" });

  } catch (err) {
    res.status(500).json({ message: "Error" });
  }
 });

 router.get("/all", async (req, res) => {
  try {
    const data = await Appointment.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error" });
  }
 });

    module.exports = router;