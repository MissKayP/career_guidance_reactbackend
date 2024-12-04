const express = require('express');
const { getAllCourses, createCourse } = require('../controllers/coursesController');
const router = express.Router();

router.get('/', getAllCourses);
router.post('/', createCourse);

module.exports = router;
