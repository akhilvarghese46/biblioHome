const mongoose = require("mongoose");

const BookSchema = mongoose.Schema(
    {
        Title: {
            type: String,
            required: true,
        },

        ISBN: {
            type: Number,
            required: true,
            default: 0,
        },

        Author: {
            type: String,
            required: true,
            
        },

        image: {
            type: String,
            required: false,
        },
    }
);
const Book = mongoose.model("Book", BookSchema);

module.exports = Book;