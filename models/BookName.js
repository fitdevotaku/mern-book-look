const mongoose = require("mongoose");

const BookNameSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  isbn: {
    type: String,
    required: true,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
  publisher: {
    type: String,
  },
  published_date: {
    type: Date,
  },
  description: {
    type: String,
  },
});

module.exports = mongoose.model("book", BookNameSchema);
