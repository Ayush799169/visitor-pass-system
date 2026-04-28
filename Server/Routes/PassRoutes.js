
 const express = require("express");
 const router = express.Router();
 const QRCode = require("qrcode");
 const PDFDocument = require("pdfkit");
 const Pass = require("../models/Pass");

 router.post("/generate", async (req, res) => {
  const qrData = `${req.body.visitorName}-${req.body.visitorEmail}-${Date.now()}`;
  const qrCode = await QRCode.toDataURL(qrData);

  const pass = new Pass({
    visitorName: req.body.visitorName,
    visitorEmail: req.body.visitorEmail,
    visitorPhone: req.body.visitorPhone,
    purpose: req.body.purpose,
    host: req.body.host,
    qrCode: qrCode,
    status: "Active"
   });

  await pass.save();
    res.json(pass);
  });

  router.get("/all", async (req, res) => {
   const data = await Pass.find();
    res.json(data);
  });

 router.get("/pdf/:id", async (req, res) => {
  const pass = await Pass.findById(req.params.id);
  const doc = new PDFDocument();

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=visitor-pass.pdf");
  doc.pipe(res);
  doc.fontSize(22).text("Visitor Pass", { align: "center" });
  doc.moveDown();
  doc.fontSize(14).text(`Name: ${pass.visitorName}`);
  doc.text(`Email: ${pass.visitorEmail}`);
  doc.text(`Phone: ${pass.visitorPhone}`);
  doc.text(`Purpose: ${pass.purpose}`);
  doc.text(`Host: ${pass.host}`);
  doc.text(`Status: ${pass.status}`);
  doc.end();
 });

  module.exports = router;