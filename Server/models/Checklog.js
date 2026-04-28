
 const mongoose = require("mongoose");

  const checkLogSchema = new mongoose.Schema({
  visitorName: String,
  visitorEmail: String,
  visitorPhone: String,
  purpose: String,
  host: String,
  checkInTime: String,
  checkOutTime: String
  });

  module.exports = mongoose.model("CheckLog", checkLogSchema);