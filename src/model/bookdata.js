// Accessing Mongoose Package
const mongoose = require('mongoose');

// Database connection

// mongoose.connect('mongodb://localhost:27017/library');
 mongoose.connect('mongodb+srv://user1:user1@casestudy.4jdff.mongodb.net/LIBRARY?retryWrites=true&w=majority');
// Schema Definition
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    rating: String,
    img: String,
    description: String
});

// Model Creation
var Bookdata = mongoose.model('bookdata', BookSchema);

module.exports = Bookdata;