const express = require("express");
const router = express.Router();

const {
  updateProfile,
  getProfile,
} = require("../controllers/profileController");

const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/upload");

// ✅ Correct route (ONLY this)
router.put("/", protect, upload.single("resume"), updateProfile);

// Get profile
router.get("/:id", protect, getProfile);

module.exports = router;