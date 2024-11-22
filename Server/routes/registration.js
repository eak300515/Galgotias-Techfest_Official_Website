const express = require("express");
const Registration = require("../models/Registration");
const router = express.Router();

router.post("/", async (req, res) => {
  const { firstName, lastName, email, phone, address, fieldOfInterest, workshop, competitions, accommodation } = req.body;

  try {
    if (!firstName || !lastName || !email || !phone || !fieldOfInterest || !workshop || !competitions || !accommodation) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const newRegistration = new Registration({ firstName, lastName, email, phone, address, fieldOfInterest, workshop, competitions, accommodation });
    await newRegistration.save();
    res.status(201).json({ message: "Registration successful!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error." });
  }
});

module.exports = router;
