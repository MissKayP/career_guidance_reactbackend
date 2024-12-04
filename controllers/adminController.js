const db = require('../config/db');

// Publish admission
exports.publishAdmission = (req, res) => {
  const { admissionDetails } = req.body;
  const query = 'INSERT INTO admissions (details) VALUES (?)';
  db.query(query, [admissionDetails], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to publish admission' });
    }
    res.status(201).json({ message: 'Admission published successfully', id: result.insertId });
  });
};
