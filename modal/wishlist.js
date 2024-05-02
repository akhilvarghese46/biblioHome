const mongoose = require("mongoose");

const WishlistSchema = mongoose.Schema(
    {
        bookid: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book'
        },

        createdtime: {
            type: Date,
            default: Date.now
        },
      status:{  type: String,
        enum: ['Unread', 'In Progress', 'Finished'],

     required: [true, "Please specify the status of the book"]}
    }
  
);

const Wishlist = mongoose.model("Wishlist", WishlistSchema);
module.exports = Wishlist;