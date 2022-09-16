const express = require("express");
const router = express.Router();

// BOOK MODEL SYNC
const Book = require("../../models/BookName");

// CREATE or POST METHOD
router.post("/", (req, res) => {
  Book.create(req.body)
    .then((book) => res.json({ msg: "Book added successfully" }))
    .catch((err) => res.status(400).json({ error: "Unable to add this book" }));
});

// GET METHOD
router.get("/", (req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) => res.status(404).json({ none: "No Books found" }));
});

// GET METHOD BY ID
router.get("/:id", (req, res) => {
  Book.findById(req.params.id)
    .then((book) => res.json(book))
    .catch((err) => res.status(404).json({ none: "No Book found" }));
});

//UPDATE METHOD
router.put("/:id", (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body)
    .then((book) => res.json({ msg: "Updated successfully" }))
    .catch((err) =>
      res.status(400).json({ error: "Unable to update Database" })
    );
});

// DELETE METHOD
router.delete("/:id", (req, res) => {
  Book.findByIdAndRemove(req.params.id, req.body)
    .then((book) => res.json({ mgs: "Book entry deleted successfully" }))
    .catch((err) => res.status(404).json({ error: "No such a book" }));
});

module.exports = router;
