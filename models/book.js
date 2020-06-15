const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  author: { type: String, required: true},
  biography: { type: String, required: true},
  title: { type: String, required: true },
  review: String,
  rating: Number,
  genre: String
});

const Books = mongoose.model('Bookmark', bookSchema);

module.exports = Books;