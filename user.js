const mongoose = require('mongoose');

// Create a schema for the User model
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true // This adds createdAt and updatedAt fields automatically
});

// Generate a model using the UserSchema
const User = mongoose.model('User', UserSchema);

// Export the User model
module.exports = User;