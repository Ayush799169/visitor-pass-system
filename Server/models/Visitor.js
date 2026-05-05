 const mongoose = require("mongoose");

  const visitorSchema = new mongoose.Schema(
    {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    purpose: { type: String, required: true },
    photo: { type: String },
    status: { type: String, default: "Pending" },
  },
  { timestamps: true },
 );

   module.exports = mongoose.model("Visitor", visitorSchema);
