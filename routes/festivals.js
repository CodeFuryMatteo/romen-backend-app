const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    title: "Festivals of Japan",
    description:
      "Japan's festivals showcase its rich traditions, spirituality, and artistry.",
  });
});

module.exports = router;