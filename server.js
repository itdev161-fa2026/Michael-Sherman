const express = require('express');
const mongoose = require('mongoose');
const { check, validationResult } = require('express-validator');
const User = require('./models/User');

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB (replace with your connection string)
mongoose.connect('mongodb://localhost:27017/your-database-name', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Test route
app.get('/', (req, res) => {
  res.send('API is running!');
});

// User registration endpoint
app.post('/api/users', [
  // Validation middleware array
  check('name', 'Name is required').notEmpty(),
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
], async (req, res) => {
  try {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    // If validation passes, return the request body for now
    // Later you'll want to save to database and hash password
    res.json(req.body);
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});