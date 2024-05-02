const Book= require("../modal/book");

// to view all the books


const getBooks = async (req, res) => {
  try {
    //const books = await Book.find({});
    res.status(200).send("hellow word");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//To ADD a new book to the book list

const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  getBooks,
  createBook,
};