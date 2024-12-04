const db = require('../config/db');  // Importing the DB connection

// Get all institutes
exports.getAllInstitutes = (req, res) => {
  const query = 'SELECT * FROM institutes';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
};

// Add a new institute
exports.addInstitute = (req, res) => {
  const { name, location, coursesOffered } = req.body;
  const query = 'INSERT INTO institutes (name, location, coursesOffered) VALUES (?, ?, ?)';
  db.query(query, [name, location, coursesOffered], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to add institute' });
    }
    res.status(201).json({ message: 'Institute added successfully', id: result.insertId });
  });
};

// Delete an institute
exports.deleteInstitute = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM institutes WHERE id = ?';
  db.query(query, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to delete institute' });
    }
    res.json({ message: 'Institute deleted successfully' });
  });
};
