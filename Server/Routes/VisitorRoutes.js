
 const express = require("express");
 const router = express.Router();
 const Visitor = require("../models/Visitor");

  router.post("/add", async (req, res) => {
  const visitor = new Visitor(req.body);
  await visitor.save();
   res.send("Visitor Added");
 });

  router.get("/all", async (req, res) => {
   const data = await Visitor.find();
    res.json(data);
  });

  module.exports = router;