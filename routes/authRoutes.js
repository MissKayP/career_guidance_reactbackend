const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const mysql = require('mysql2');

// MySQL Connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Login Route
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  // Query the database to find the user by username
  db.query('SELECT * FROM users WHERE username = ?', [username], async (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Server error' });
    }

    if (result.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    const user = result[0];

    // Compare entered password with stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user.id, username: user.username }, 
      process.env.JWT_SECRET, 
      { expiresIn: '1h' }  // Token expires in 1 hour
    );

    // Send token as a response
    res.json({ message: 'Login successful', token });
  });
});

// Protect Routes: Example
router.get('/protected', (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});

module.exports = router;
