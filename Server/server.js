 
 const express = require('express');
  const cors = require('cors');
 const dotenv = require('dotenv');
 const connectDB = require('./config/db');
  const authRoutes = require("./Routes/authRoutes");
 const visitorRoutes = require("./Routes/visitorRoutes");
 const appointmentRoutes = require("./Routes/appointmentRoutes");
  const passRoutes = require("./Routes/passRoutes");
 const checkRoutes = require("./Routes/checkRoutes");
 const dashboardRoutes = require("./Routes/dashboardRoutes");
  const notificationRoutes = require("./Routes/notificationRoutes");
  dotenv.config();

 const app = express();
  app.use(cors());
  app.use(express.json());
  app.get ('/', (req, res) => {
    res.send('Visitor Pass system server is running');
  });

  app.use("/api/auth", authRoutes);
  app.use("/api/visitor", visitorRoutes);
  app.use("/api/appointment", appointmentRoutes);
  app.use("/api/pass", passRoutes);
 app.use("/api/check", checkRoutes);
 app.use("/api/dashboard", dashboardRoutes);
 app.use("/api/notification", notificationRoutes);

 connectDB();
 const PORT = 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });