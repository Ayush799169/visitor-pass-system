 
 const mongoose = require("mongoose");

 const visitorSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  purpose: String,
  host: String
  });

  module.exports = mongoose.model("Visitor", visitorSchema);