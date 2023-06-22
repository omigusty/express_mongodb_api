const mongoose = require("mongoose");

// membuat tabel book menggunakan schema
const bookSchema = new mongoose.Schema({
  jdlbuku: String,
  ISBN: String,
  deskripsi: String,
});

// ekspor tabel book
const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
