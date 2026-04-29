
 const express = require("express");
 const router = express.Router();
 const Checklog = require("../models/Checklog");

 router.post("/checkin", async (req, res) => {
  const log = new Checklog({
    visitorName: req.body.visitorName,
    visitorEmail: req.body.visitorEmail,
    visitorPhone: req.body.visitorPhone,
    purpose: req.body.purpose,
    host: req.body.host,
    checkInTime: new Date().toLocaleString(),
    checkOutTime: ""
  });

  await log.save();
  res.send("Visitor Checked In");
  });

 router.put("/checkout/:id", async (req, res) => {
  await Checklog.findByIdAndUpdate(req.params.id, {
    checkOutTime: new Date().toLocaleString()
  });
  res.send("Visitor Checked Out");
 });

 router.get("/all", async (req, res) => {
  const data = await Checklog.find();
  res.json(data);
 });

  module.exports = router;