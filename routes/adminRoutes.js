const express = require('express');
const router = express.Router();
const { publishAdmission } = require('../controllers/adminController');
const { authenticateUser } = require('../middleware/authMiddleware');

// Protected route
router.post('/publish', authenticateUser, publishAdmission);

module.exports = router;
