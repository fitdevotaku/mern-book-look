const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const books = require("./routes/api/books");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connection is successful!"))
  .catch((err) => {
    console.log(err);
  });

// cors
app.use(cors());

// middleware
app.use(express.json());

// API ROUTES
app.use("/api/books", books);

app.get("/", (req, res) => {
  res.send("Hello Ziaire");
});

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port 5000!");
});
