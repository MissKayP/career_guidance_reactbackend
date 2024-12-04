const db = require('../config/db'); // Adjust the path to your database configuration

// Fetch all students
const getAllStudents = (req, res) => {
  const query = 'SELECT * FROM students'; // Adjust table name as needed
  db.query(query, (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.json(results);
  });
};

// Fetch a student by ID
const getStudentById = (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM students WHERE id = ?'; // Adjust table name as needed
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json(results[0]);
  });
};

// Create a new student
const createStudent = (req, res) => {
  const { name, email, age } = req.body; // Adjust fields as needed
  const query = 'INSERT INTO students (name, email, age) VALUES (?, ?, ?)'; // Adjust table/fields as needed
  db.query(query, [name, email, age], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    res.status(201).json({ message: 'Student created successfully', studentId: results.insertId });
  });
};

// Update an existing student
const updateStudent = (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body; // Adjust fields as needed
  const query = 'UPDATE students SET name = ?, email = ?, age = ? WHERE id = ?'; // Adjust table/fields as needed
  db.query(query, [name, email, age, id], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json({ message: 'Student updated successfully' });
  });
};

// Delete a student
const deleteStudent = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM students WHERE id = ?'; // Adjust table name as needed
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database error' });
    }
    if (results.affectedRows === 0) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.json({ message: 'Student deleted successfully' });
  });
};

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
