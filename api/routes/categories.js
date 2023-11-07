const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("Categories are acquired");
});

module.exports = router;
