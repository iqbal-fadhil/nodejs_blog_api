const express = require("express");
const dotenv = require("dotenv");
const sequelize = require("./config/database");
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");

dotenv.config();
const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

sequelize.sync({ alter: true }) // Sync models with DB
  .then(() => {
    console.log("MySQL DB connected & models synced");
    app.listen(3000, () => console.log("Server running at http://localhost:3000"));
  })
  .catch(err => console.error("DB error:", err));
