
 const { body, validationResult } = require("express-validator");

  const validateVisitor = [
  body("name").notEmpty().withMessage("Name is required"),
  body("phone").notEmpty().withMessage("Phone is required"),
  body("purpose").notEmpty().withMessage("Purpose is required"),
 ];

 const validateAppointment = [
  body("visitorName").notEmpty().withMessage("Visitor name required"),
  body("hostEmail").isEmail().withMessage("Valid host email required"),
  body("date").notEmpty().withMessage("Date required"),
 ];

 const handleValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
 };

    module.exports = { validateVisitor, validateAppointment, handleValidation };
