const express = require('express');
const router = express.Router();
const applicationController = require('../controllers/applicationController');  // Correct import

// Define the routes for applications
router.get('/', applicationController.getApplications);  // Use the controller function
router.post('/', applicationController.createApplication);  // Use the controller function

module.exports = router;
