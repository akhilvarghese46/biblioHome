const express = require("express");
const router = express.Router();
const {  getWishlists,
    viewWishlist,
    createWishlist,
    updateWishlist,
    deleteWishlist,} = require('../controller/WishlistController.js');

// Route to create a new wishlist
router.post('/', createWishlist);

// Route to get all wishlists
router.get('/', getWishlists);

// Route to view a specific wishlist by ID
router.get('/:id', viewWishlist);

// Route to update a wishlist by ID
router.put('/:id', updateWishlist);

// Route to delete a wishlist by ID
router.delete('/:id', deleteWishlist);


module.exports = router;