const mongoose = require('mongoose');
// FirstName, LastName, Email, Phone Number, Address, Username, Date of Birth

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, 'User must have a first name'],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'User must have a last name'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'User must have a valid email address'],
    unique: true,
    trim: true,
  },
  address: String,
  phoneNumber: Number,
  userName: String,
  dateOfBirth: Date,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
