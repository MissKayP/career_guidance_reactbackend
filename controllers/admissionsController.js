const db = require('../db'); // Ensure the path is correct

exports.publishAdmission = (req, res) => {
  const { studentId, admissionStatus, admissionDate } = req.body;

  if (!studentId || !admissionStatus || !admissionDate) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const query = 'INSERT INTO admissions (studentId, admissionStatus, admissionDate) VALUES (?, ?, ?)';

  db.query(query, [studentId, admissionStatus, admissionDate], (err, results) => {
    if (err) {
      console.error('Error publishing admission:', err);
      return res.status(500).json({ error: 'Internal server error' });
    }

    return res.status(201).json({ message: 'Admission published successfully', results });
  });
};
