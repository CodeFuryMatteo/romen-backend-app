const express = require("express");
const cors = require("cors");

const homeRoutes = require("./routes/home");
const aboutRoutes = require("./routes/about");
const cuisineRoutes = require("./routes/cuisine");
const festivalsRoutes = require("./routes/festivals");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json());

app.use("/api/home", homeRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/cuisine", cuisineRoutes);
app.use("/api/festivals", festivalsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});