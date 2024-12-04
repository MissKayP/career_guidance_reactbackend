const db = require('../config/db');  // assuming you have a MySQL connection

// Get all applications
exports.getApplications = (req, res) => {
  const query = 'SELECT * FROM applications';  // Modify the query based on your database
  db.query(query, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);  // Send the results back as JSON
  });
};

// Create a new application
exports.createApplication = (req, res) => {
  const { applicant_id, institution_id, course_id, application_date } = req.body;

  // Add validation for the required fields
  if (!applicant_id || !institution_id || !course_id || !application_date) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = `INSERT INTO applications (applicant_id, institution_id, course_id, application_date)
                 VALUES (?, ?, ?, ?)`;

  db.query(query, [applicant_id, institution_id, course_id, application_date], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'Application created successfully', data: results });
  });
};
