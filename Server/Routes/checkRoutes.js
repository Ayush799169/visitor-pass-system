
 const express = require("express");
 const router = express.Router();
 const Checklog = require("../models/Checklog");

  router.post("/checkin", async (req, res) => {
     try {
    const log = new Checklog({
      visitorName: req.body.visitorName,
      checkInTime: new Date().toLocaleString(),
      checkOutTime: ""
     });
   await log.save();
    res.json({ message: "Visitor Checked In" });
   } catch (err) {
    res.status(500).json({ message: "Error" });
    }
  });

 router.post("/checkout", async (req, res) => {
  try {
    const log = new Checklog({
      visitorName: req.body.visitorName,
      checkOutTime: new Date().toLocaleString(),
    });
    await log.save();
    res.json({ message: "Visitor Checked Out" });
  } catch (err) {
    res.status(500).json({ message: "Error" });
  }
 });

 router.get("/all", async (req, res) => {
  try {
    const data = await Checklog.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: "Error" });
  }
 });

    module.exports = router;