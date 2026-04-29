const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Visitor = require("./models/Visitor");

dotenv.config();

mongoose.connect(process.env.MONGO_URI).then(async () => {
  console.log("MongoDB Connected");

  await Visitor.create([
    { name: "Rahul Sharma", email: "rahul@test.com", phone: "9876543210", host: "Manager", purpose: "Meeting" },
    { name: "Priya Singh", email: "priya@test.com", phone: "9812341234", host: "HR", purpose: "Interview" },
    { name: "Amit Kumar", email: "amit@test.com", phone: "9898989898", host: "Director", purpose: "Delivery" },
  ]);

  console.log("Demo Data Added!");
  process.exit();

}).catch((err) => {
  console.log(err);
  process.exit(1);
});