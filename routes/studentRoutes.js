const express = require('express');
const studentController = require('../controllers/studentController'); // Adjust path as needed
const router = express.Router();

// Define routes for students
router.get('/', studentController.getAllStudents); // Fetch all students
router.get('/:id', studentController.getStudentById); // Fetch a student by ID
router.post('/', studentController.createStudent); // Create a new student
router.put('/:id', studentController.updateStudent); // Update an existing student
router.delete('/:id', studentController.deleteStudent); // Delete a student

module.exports = router;
