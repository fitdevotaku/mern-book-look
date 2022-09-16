const express = require("express");
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connection successful!"))
  .catch((err) => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello Ziaire");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port 5000!");
});
