 const express = require("express");
 const router = express.Router();
 const multer = require("multer");
 const { body, validationResult } = require("express-validator");
 const Visitor = require("../models/Visitor");
 const auth = require("../middleware/auth");

  const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
 });
 const upload = multer({ storage });

 //GET all visitors

  router.get("/all", async (req, res) => {
  try {
    const visitors = await Visitor.find();
    res.json(visitors);
  } catch (err) {
    res.status(500).json({ message: "Error fetching visitors" });
  }
 });

// add visitor

 router.post("/add", upload.single("photo"), [
    body("name").notEmpty(),
    body("phone").notEmpty(),
    body("purpose").notEmpty(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json(errors.array());
      }

      const visitor = new Visitor({
        name: req.body.name,
        phone: req.body.phone,
        purpose: req.body.purpose,
        photo: req.file ? req.file.path : "",
      });

      await visitor.save();

      res.json({ message: "Visitor added" });
    } catch (err) {
      res.status(500).json({ message: "Error" });
    }
  },
);

module.exports = router;
