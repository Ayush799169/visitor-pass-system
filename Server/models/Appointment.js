
 const mongoose = require("mongoose");
 
  const appointmentSchema = new mongoose.Schema({
  visitorName: String,
  visitorEmail: String,
  visitorPhone: String,
  host: String,
  purpose: String,
  date: String,
  status: String
   });

  module.exports = mongoose.model("Appointment", appointmentSchema);