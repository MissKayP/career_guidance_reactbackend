const db = require('../config/db');

// Get all courses
const getAllCourses = (req, res) => {
    const query = 'SELECT * FROM courses';
    db.query(query, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
};

// Create a new course
const createCourse = (req, res) => {
    const { name, faculty_id } = req.body;
    const query = 'INSERT INTO courses (name, faculty_id) VALUES (?, ?)';
    db.query(query, [name, faculty_id], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Course created', id: results.insertId });
    });
};

module.exports = { getAllCourses, createCourse };

