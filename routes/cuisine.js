const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json([
    {
      "name": "Sushi",
      "description": "Sushi is one of the most iconic Japanese dishes, consisting of vinegared rice, seafood, and other ingredients.",
      "imageUrl": "https://imageio.forbes.com/specials-images/imageserve/66e5a82dc8a4adc057868881/sushi-and-sashimi-platter/960x0.png"
    },
    {
      "name": "Ramen",
      "description": "Ramen is a popular Japanese noodle soup dish made with Chinese-style wheat noodles in a savory broth.",
      "imageUrl": "https://www.kikkoman.it/fileadmin/_processed_/f/0/csm_1103-recipe-page-Spicy-Kimchi-Ramen-with-Pork_desktop_c8dc4e51e8.jpg"
    },
    {
      "name": "Tempura",
      "description": "Tempura is a Japanese dish consisting of seafood and vegetables battered and deep-fried to a crisp.",
      "imageUrl": "https://japan.recipetineats.com/wp-content/uploads/2016/10/Tempura_2.jpg"
    },
    {
      "name": "Matcha Desserts",
      "description": "Matcha-flavored cakes, ice cream, and cookies are popular sweets that balance the bitterness of the tea with sweetness.",
      "imageUrl": "https://fullofplants.com/wp-content/uploads/2022/01/vegan-matcha-nama-white-chocolate-mochi-dairy-free-tender-japanese-inspired-dairy-free-thumb.jpg"
    }
  ]);
});

module.exports = router;