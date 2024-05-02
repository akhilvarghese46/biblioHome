const Wishlist = require("../modal/wishlist");

// Create a wishlist
const createWishlist =async (req, res) => {
    try {
      const wishlist = await Wishlist.create(req.body);
        // Populate the 'bookid' field in the wishlist with book details
        await Wishlist.populate(wishlist, { path: "bookid" });
      res.status(201).json(wishlist);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  };
  
  // Get all wishlists
  const getWishlists =  async (req, res) => {
    try {
      const wishlists = await Wishlist.find({}).populate("bookid");
      res.json(wishlists);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // Get a specific wishlist by ID
 const viewWishlist =  async (req, res) => {
    try {
      const wishlist = await Wishlist.findById(req.params.id).populate("bookid");
      if (!wishlist) {
        return res.status(404).json({ message: 'Wishlist not found' });
      }
      res.json(wishlist);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // Update a wishlist
 const updateWishlist=  async (req, res) => {
    try {
      const wishlist = await Wishlist.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!wishlist) {
        return res.status(404).json({ message: 'Wishlist not found' });
      }
      res.json(wishlist);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  
  // Delete a wishlist
 const deleteWishlist= async (req, res) => {
    try {
      const wishlist = await Wishlist.findByIdAndDelete(req.params.id);
      if (!wishlist) {
        return res.status(404).json({ message: 'Wishlist not found' });
      }
      res.json({ message: 'Wishlist deleted successfully' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
  



module.exports = {
  getWishlists,
  viewWishlist,
  createWishlist,
  updateWishlist,
  deleteWishlist,
};