const db = require('../config/db'); // Ensure this connects to your database

// Function to add faculty to the database
exports.addFaculty = (req, res) => {
  const { facultyName } = req.body;

  if (!facultyName) {
    return res.status(400).json({ error: 'Faculty name is required' });
  }

  const query = 'INSERT INTO faculties (name) VALUES (?)';
  db.query(query, [facultyName], (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Error adding faculty', details: err });
    }

    res.status(200).json({ message: 'Faculty added successfully' });
  });
};
