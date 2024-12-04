const express = require('express');
const { publishAdmission } = require('../controllers/admissionsController'); // Ensure correct import
const router = express.Router();

// Define a POST route to publish the admission
router.post('/', publishAdmission);

module.exports = router;
