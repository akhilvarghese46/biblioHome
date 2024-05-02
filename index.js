const express = require("express");
const mongoose = require("mongoose");
const bookRoute = require("./routes/book.routes.js");
const wishlistRoute = require("./routes/wishlist.routes.js");
const app = express();
const cors = require('cors');




// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// Enable CORS for all routes
app.use(cors());

// routes
app.use("/api/books", bookRoute);
app.use("/api/wishlist", wishlistRoute);



app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});



const startServer = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://akhilvarghese46:myw2BCXK88KxfSJ9@bibliohome.isiwviy.mongodb.net/?retryWrites=true&w=majority&appName=biblioHome"
      
    );
    app.listen(8080, () => console.log("Server started on port 8000"));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();
module.exports = app;
//export default app;
/*
mongoose
  .connect(
    "mongodb+srv://meethu:meethu123@cluster0.ccppur1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(8000, () => {
      console.log("Server is running on port 8000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
  */

  