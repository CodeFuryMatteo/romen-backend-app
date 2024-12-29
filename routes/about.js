const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    title: "About Japan",
    description:
      "Japan, an island nation in East Asia, is known for its rich cultural heritage, modern cities, and stunning natural landscapes.",
      image: 'https://asset.japan.travel/image/upload/v1646014276/tokyo/H_00658_001.jpg',
  });
});

module.exports = router;