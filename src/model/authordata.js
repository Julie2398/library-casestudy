// Accessing Mongoose Package
const mongoose = require('mongoose');

// Database connection
//  mongoose.connect('mongodb://localhost:27017/library');
// mongoose.connect('mongodb+srv://userone:userone@libraryappdata.bes0v.mongodb.net/LibraryAppData?retryWrites=true&w=majority')
 mongoose.connect('mongodb+srv://user1:user1@casestudy.4jdff.mongodb.net/LIBRARY?retryWrites=true&w=majority');

// Schema Definition
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    name: String,
    topic: String,
    yob: String,
    img: String,
    books: Array,
    life: String
});

// Model Creation
var Authordata = mongoose.model('authordata', AuthorSchema);

module.exports = Authordata;