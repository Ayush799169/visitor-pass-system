
 const express = require("express");
 const router = express.Router();

 const Visitor = require("../models/Visitor");
 const Appointment = require("../models/Appointment");
 const Pass = require("../models/Pass");
 const CheckLog = require("../models/CheckLog");

  router.get("/", async (req, res) => {
  const totalVisitors = await Visitor.countDocuments();
  const totalAppointments = await Appointment.countDocuments();
  const totalPasses = await Pass.countDocuments();
  const totalCheckLogs = await CheckLog.countDocuments();

  res.json({
    totalVisitors,
    totalAppointments,
    totalPasses,
    totalCheckLogs
   });
 });

  module.exports = router;