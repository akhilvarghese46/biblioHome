const express = require("express");
const router = express.Router();
const { getBooks, createBook } = require('../controller/BookController.js');

// to view all the books
router.get('/', getBooks);


// to create a book
router.post("/", createBook);


module.exports = router;