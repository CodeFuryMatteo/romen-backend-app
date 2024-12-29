const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    title: "Discover the Heart of Japan",
    description:
      "Japan is a land where ancient traditions seamlessly blend with cutting-edge innovation. Explore its vibrant culture, breathtaking landscapes, and culinary delights that make it one of the most fascinating destinations in the world.",
    image: 'https://discoverjapan.blog/wp-content/uploads/2024/05/29482751_s.jpg',
  });
});

module.exports = router;