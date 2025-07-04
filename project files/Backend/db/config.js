// const mongoose = require("mongoose");
// // Middleware
// const MONGO_URI = 'mongodb+srv://elf:elf123@myprojects.inzgx1q.mongodb.net/BookStore?retryWrites=true&w=majority'
// // Connect to MongoDB using the connection string
// mongoose.connect(MONGO_URI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true,
// }).then(() => {
//   console.log(`Connection successful`);
// }).catch((e) => {
//   console.log(`No connection: ${e}`);
// });

// // mongodb://localhost:27017 



// const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/BookStore')
//   .then(() => console.log("✅ MongoDB connected to BookStore DB"))
//   .catch((err) => console.error("❌ MongoDB connection error:", err));

const mongoose = require('mongoose');
require('dotenv').config(); // Load env variables

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected to BookStore DB"))
.catch((err) => console.error("❌ MongoDB connection error:", err));
