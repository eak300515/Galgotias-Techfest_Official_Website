const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

// CORS Configuration
const allowedOrigins = [
  "https://galgotias-techfest-official-website-frontend.vercel.app", // Deployed frontend
  "http://localhost:5000" // Local frontend testing
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
}));

app.use(express.json());

// MongoDB Connection
if (!process.env.MONGO_URI) {
  console.error("Error: MONGO_URI is not set in .env file.");
  process.exit(1);
}
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Failed:", err));

// Routes
const registrationRoutes = require("./routes/registration");
app.use("/api/registrations", registrationRoutes);

// Error Handling for Unknown Routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// Server Listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
