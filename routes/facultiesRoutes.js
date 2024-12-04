const express = require('express');
const router = express.Router();

// Mock database for faculties
const faculties = [];

router.post('/', (req, res) => {
  const { facultyName } = req.body;
  if (!facultyName) {
    return res.status(400).json({ message: 'Faculty name is required' });
  }
  faculties.push(facultyName);
  res.status(201).json({ message: 'Faculty added successfully' });
});

module.exports = router;
