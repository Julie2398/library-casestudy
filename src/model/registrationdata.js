// Accessing Mongoose Package
const mongoose = require('mongoose');

// Database connection
mongoose.connect('mongodb+srv://user1:user1@casestudy.4jdff.mongodb.net/LIBRARY?retryWrites=true&w=majority');
// mongoose.connect('mongodb://localhost:27017/library');

// Schema Definition
const Schema = mongoose.Schema;

const RegistrationSchema = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    password: String
});

// Model Creation
var RegistrationData = mongoose.model('registrationdata', RegistrationSchema);

module.exports = RegistrationData;