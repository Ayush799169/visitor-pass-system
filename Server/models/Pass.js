
 const mongoose = require("mongoose");

  const passSchema = new mongoose.Schema({
  visitorName: String,
  visitorEmail: String,
  visitorPhone: String,
  purpose: String,
  host: String,
  qrCode: String,
  status: String
  });

   module.exports = mongoose.model("Pass", passSchema);