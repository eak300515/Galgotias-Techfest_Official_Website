const mongoose = require("mongoose");

const registrationSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  address: { type: String },
  fieldOfInterest: { type: String, required: true },
  workshop: { type: String, required: true },
  competitions: { type: String, required: true },
  accommodation: { type: String, required: true },
});

module.exports = mongoose.model("Registration", registrationSchema);
