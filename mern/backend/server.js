const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const path = require("path");

dotenv.config();
connectDB();

const app = express();

// =====================
// CORS CONFIG (✅ FIXED)
// =====================
const allowedOrigins = [
  "http://localhost:3000",
  "https://smart-campus-placement-portal-m08b.onrender.com",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (like Postman)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

// =====================
// BODY PARSER
// =====================
app.use(express.json());

// =====================
// ROUTES
// =====================
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/jobs", require("./routes/jobRoutes"));
app.use("/api/applications", require("./routes/applicationRoutes"));
app.use("/api/profile", require("./routes/profileRoutes"));

// =====================
// STATIC FILES (UPLOADS)
// =====================
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// =====================
// TEST ROUTE
// =====================
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// =====================
// GLOBAL ERROR HANDLER
// =====================
app.use((err, req, res, next) => {
  console.error("GLOBAL ERROR:", err);

  if (err.name === "MulterError") {
    return res.status(400).json({ message: err.message });
  }

  if (err.message && err.message.includes("Only")) {
    return res.status(400).json({ message: err.message });
  }

  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({ message: "CORS error: origin not allowed" });
  }

  res.status(500).json({ message: "Server error" });
});

// =====================
// SERVER START
// =====================
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});